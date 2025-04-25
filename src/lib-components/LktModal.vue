<script lang="ts" setup>
import {closeConfirm, closeModal, openConfirm} from '../functions/functions';
import {computed, ref, useSlots} from 'vue';
import {
    BeforeCloseModalData,
    ButtonConfig, ButtonType,
    getDefaultValues,
    LktObject,
    Modal,
    ModalConfig,
    ModalType
} from "lkt-vue-kernel";

// @ts-ignore
const props = withDefaults(defineProps<ModalConfig>(), getDefaultValues(Modal));

const refreshComputedProperties = ref(0);

const classes = computed(() => {
    let r:string[] = [];
    if (props.size) r.push(`is-${props.size}`);
    return r.join(' ');
});

const emit = defineEmits([
    'confirm'
]);

const onClose = ($event?: PointerEvent) => {
        if (!$event) return;
        const _onClose = async () => {
            if (typeof props.beforeClose === 'function') {
                await props.beforeClose(<BeforeCloseModalData>{
                    modalName: props.modalName,
                    modalKey: props.modalKey,
                    item: props.item,
                });
            }
            closeModal(props.modalName, props.modalKey)
        };
        if (props.closeConfirm) {
            openConfirm(props.closeConfirm, props.closeConfirmKey, {
                onConfirm: _onClose
            })
            return;
        }
        _onClose();

    },
    onVeilClick = ($event?: PointerEvent) => {
        if (props.disabledVeilClick) return;
        onClose($event);
    };

const slots:LktObject = useSlots();

const headerButtons = computed(() => {
        refreshComputedProperties.value;
        let r:string[] = [];
        for (let k in slots) if (k.indexOf('button-') === 0) r.push(k);
        return r;
    }),
    footerButtons = computed(() => {
        refreshComputedProperties.value;
        let r:string[] = [];
        for (let k in slots) if (k.indexOf('footer-button-') === 0) r.push(k);
        return r;
    }),
    isConfirm = computed(() => {
        return props.type === ModalType.Confirm;
    }),
    computedCanRenderFooter =  computed(() => {
        if (props.hiddenFooter) return false;

        return footerButtons.value.length > 0
            || !!slots.footer
            || canRenderCancel.value
            || canRenderConfirm.value;
    }),
    canRenderCancel = computed(() => {
        return isConfirm.value
            && props.cancelButton
            && typeof props.cancelButton === 'object'
            && Object.keys(props.cancelButton).length > 0
            ;
    }),
    canRenderConfirm = computed(() => {
        return isConfirm.value
            && props.confirmButton
            && typeof props.confirmButton === 'object'
            && Object.keys(props.confirmButton).length > 0
            ;
    }),
    computedCancelButtonData = computed(() => {
        if (!canRenderCancel.value) return {};

        let onClick = () => {
            if (typeof props.cancelButton?.events?.click === 'function') {
                props.cancelButton.events.click();
            }
            closeConfirm(props.modalName, props.modalKey);
        }

        return {
            ...props.cancelButton,
            onClick,
        }
    }),
    computedConfirmButton = computed(() => {
        if (!canRenderConfirm.value) return {};

        let onClick = () => {
            if (typeof props.confirmButton?.events?.click === 'function') {
                props.confirmButton.events.click();
            }

            // if (props.confirmButton?.onConfirm && typeof props.confirmButton.onConfirm === 'function') {
            //     props.confirmButton.onConfirm();
            // }
            emit('confirm');
            closeModal(props.modalName, props.modalKey)
        }

        return {
            ...props.confirmButton,
            onClick,
        }
    });
</script>

<template>
    <section class="lkt-modal" :class="classes" :style="'z-index: ' + zIndex" :data-modal="modalName" :data-key="modalKey">
        <div class="lkt-modal-back" v-on:click.prevent.stop="onVeilClick"/>
        <div class="lkt-modal-inner" ref="inner">

            <header class="lkt-modal-header">

                <div v-if="slots['header-actions']" class="lkt-modal-header-actions">
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            ...headerActionsButton,
                            icon: 'lkt-icn-cog',
                            type: ButtonType.Tooltip,
                        }"
                    >
                        <template #tooltip="{doClose}">
                            <slot name="header-actions"/>
                        </template>
                    </lkt-button>
                </div>

                <div class="lkt-modal-header_title-container">
                    <div class="lkt-modal-header_pre-title" v-if="preTitleIcon || slots['pre-title'] || preTitle">
                        <i v-if="preTitleIcon" :class="preTitleIcon"/>
                        <slot name="pre-title" v-if="slots['pre-title']"/>
                        <div v-else-if="preTitle" v-html="preTitle"></div>
                    </div>
                    <div class="lkt-modal-header_title" v-if="title">{{ title }}</div>
                </div>
                <div class="lkt-modal-button-tray">
                    <template v-for="(key) in headerButtons">
                        <div :class="'lkt-modal-button lkt-modal-'+key">
                            <slot :name="key"/>
                        </div>
                    </template>
                    <lkt-button
                        v-if="showClose"
                        class="lkt-modal-button"
                        @click="onClose"
                        :disabled="disabledClose"
                        :icon="closeIcon"
                    />
                </div>
            </header>

            <section class="lkt-modal-content">
                <slot/>
            </section>

            <footer class="lkt-modal-footer" v-if="computedCanRenderFooter">
                <div v-if="!!slots.footer" class="lkt-modal-footer_main">
                    <slot name="footer"/>
                </div>

                <div class="lkt-modal-button-tray" v-if="footerButtons.length > 0">
                    <template v-for="(key) in footerButtons">
                        <div :class="'lkt-modal-button lkt-modal-'+key">
                            <slot :name="key"/>
                        </div>
                    </template>
                </div>

                <div class="lkt-modal-button-tray" v-if="isConfirm">
                    <lkt-button v-if="canRenderCancel" v-bind="computedCancelButtonData"/>
                    <lkt-button v-if="canRenderConfirm" v-bind="computedConfirmButton"/>
                </div>
            </footer>
        </div>
    </section>
</template>