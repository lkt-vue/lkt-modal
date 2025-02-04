<script lang="ts" setup>
import {closeModal} from '../functions/functions';
import {computed, ref, useSlots} from 'vue';
import {openConfirm} from "lkt-modal-confirm";
import {Settings} from "../settings/Settings";
import {ModalConfig} from "lkt-vue-kernel";

const props = withDefaults(defineProps<ModalConfig>(), {
    size: '',
    preTitle: '',
    preTitleIcon: '',
    title: '',
    closeIcon: Settings.defaultCloseIcon,
    closeConfirm: '',
    closeConfirmKey: '_',
    showClose: true,
    disabledClose: false,
    disabledVeilClick: false,
    hiddenFooter: false,
    modalName: '',
    modalKey: '_',
    zIndex: 500,
    beforeClose: undefined,
    item: () => ({}),
});

const refreshComputedProperties = ref(0);

const classes = computed(() => {
    let r = [];
    if (props.size) r.push(`is-${props.size}`);
    return r.join(' ');
});

const onClose = () => {
        const _onClose = async () => {
            if (typeof props.beforeClose === 'function') {
                await props.beforeClose({
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
    onVeilClick = () => {
        if (props.disabledVeilClick) return;
        onClose();
    };

const slots = useSlots();

const headerButtons = computed(() => {
        refreshComputedProperties.value;
        let r = [];
        for (let k in slots) if (k.indexOf('button-') === 0) r.push(k);
        return r;
    }),
    footerButtons = computed(() => {
        refreshComputedProperties.value;
        let r = [];
        for (let k in slots) if (k.indexOf('footer-button-') === 0) r.push(k);
        return r;
    });
</script>

<template>
    <section class="lkt-modal" :class="classes" :style="'z-index: ' + zIndex">
        <div class="lkt-modal-back" v-on:click.prevent.stop="onVeilClick"></div>
        <div class="lkt-modal-inner" ref="inner">

            <header class="lkt-modal-header">
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
                        class="lkt-modal-button"
                        v-on:click.prevent.stop="onClose"
                        v-if="showClose"
                        :disabled="disabledClose"
                        :icon="closeIcon"
                    />
                </div>
            </header>

            <section class="lkt-modal-content">
                <slot/>
            </section>

            <footer class="lkt-modal-footer" v-if="!hiddenFooter && (footerButtons.length > 0 || !!slots.footer)">
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
            </footer>
        </div>
    </section>
</template>