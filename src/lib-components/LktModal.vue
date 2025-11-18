<script lang="ts" setup>
import {closeModal, openConfirm} from '../functions/functions';
import {computed, ref, useSlots} from 'vue';
import {
    BeforeCloseModalData,
    ButtonConfig,
    ButtonType,
    getDefaultValues,
    HeaderConfig,
    IconConfig,
    LktObject,
    Modal,
    ModalConfig,
    ModalType,
    PolymorphicElementConfig
} from "lkt-vue-kernel";

// @ts-ignore
const props = withDefaults(defineProps<ModalConfig>(), getDefaultValues(Modal));

const refreshComputedProperties = ref(0);

const classes = computed(() => {
    let r: string[] = [];
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

const slots: LktObject = useSlots();

const doConfirm = () => {
    if (typeof props.confirmButton?.events?.click === 'function') {
        props.confirmButton.events.click({});
    }
    emit('confirm');
    closeModal(props.modalName, props.modalKey)
}
const doCancel = () => {
    if (typeof props.cancelButton?.events?.click === 'function') {
        props.cancelButton.events.click({});
    }
    closeModal(props.modalName, props.modalKey);
}

const headerButtons = computed(() => {
        refreshComputedProperties.value;
        let r: string[] = [];
        for (let k in slots) if (k.indexOf('button-') === 0) r.push(k);
        return r;
    }),
    footerButtons = computed(() => {
        refreshComputedProperties.value;
        let r: string[] = [];
        for (let k in slots) if (k.indexOf('footer-button-') === 0) r.push(k);
        return r;
    }),
    isConfirm = computed(() => {
        return props.type === ModalType.Confirm;
    }),
    computedCanRenderFooter = computed(() => {
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

        return {
            ...props.cancelButton,
            events: {
                ...props.cancelButton.events,
                click: doCancel,
            },
        }
    }),
    computedConfirmButton = computed(() => {
        if (!canRenderConfirm.value) return {};

        return {
            ...props.confirmButton,
            events: {
                ...props.confirmButton.events,
                click: doConfirm,
            },
        }
    }),
    computedHeaderConfig = computed(() => {

        const headerClass = props.header.class ? `${props.header.class} lkt-modal-header` : 'lkt-modal-header';

        let r: HeaderConfig = {
            ...props.header,
            class: headerClass,
            text: props.header.text ?? props.title,
            topStartContent: [
                ...Array.isArray(props.header.topStartContent) ? props.header.topStartContent : []
            ],
            topEndContent: [
                ...Array.isArray(props.header.topEndContent) ? props.header.topEndContent : []
            ],
        };

        // Append header actions
        if (typeof props.headerActionsButton === 'object') {
            r.topStartContent?.push({
                tag: 'div',
                class: 'lkt-modal-header_title-container',
                content: [
                    {
                        tag: 'lkt-icon',
                        props: <IconConfig>{
                            icon: props.preTitleIcon,
                            class: 'lkt-modal-header_title-container',
                            text: props.preTitle
                        }
                    }
                ],
            })
        }

        // Append pre title
        if ((props.preTitle && props.preTitle !== '') || (props.preTitleIcon && props.preTitleIcon !== '')) {
            r.topStartContent?.push({
                tag: 'div',
                class: 'lkt-modal-header_title-container',
                content: [
                    {
                        tag: 'lkt-icon',
                        props: <IconConfig>{
                            icon: props.preTitleIcon,
                            class: 'lkt-modal-header_pre-title',
                            text: props.preTitle
                        }
                    }
                ],
            })
        }

        // Append
        if ((Array.isArray(props.headerButtons) && props.headerButtons.length > 0) || props.showClose) {
            r.topEndContent?.push({
                tag: 'div',
                class: 'lkt-modal-button-tray',
                content:
                    [
                        ...Array.isArray(props.headerButtons) ? props.headerButtons?.map((btn, key) => {
                            return <PolymorphicElementConfig>{
                                tag: 'lkt-button',
                                class: 'lkt-modal-button',
                                props: btn,
                            }
                        }) : [],

                        ...props.showClose ? [
                            <PolymorphicElementConfig>{
                                tag: 'lkt-button',
                                class: 'lkt-modal-button',
                                props: <ButtonConfig>{
                                    disabled: props.disabledClose,
                                    icon: props.closeIcon,
                                    events: {
                                        click: onClose
                                    }
                                },
                            }
                        ] : []
                    ]
            })
        }

        return r;
    });
</script>

<template>
    <section class="lkt-modal" :class="classes" :style="'z-index: ' + zIndex" :data-modal="modalName"
             :data-key="modalKey">
        <div class="lkt-modal-back" v-on:click.prevent.stop="onVeilClick"/>
        <div class="lkt-modal-inner" ref="inner">

            <lkt-header
                v-if="(computedHeaderConfig.text !== '' || computedHeaderConfig.image?.src || computedHeaderConfig.topStartContent?.length > 0 || computedHeaderConfig.topEndContent?.length > 0)"
                v-bind="computedHeaderConfig"
            >
                <template v-if="slots['header-actions']" #top-start>
                    <div class="lkt-modal-header-actions">
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
                </template>
            </lkt-header>

            <header v-else class="lkt-modal-header">

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
                <slot
                    :do-confirm="doConfirm"
                    :do-cancel="doCancel"
                />
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