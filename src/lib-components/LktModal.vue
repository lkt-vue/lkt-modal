<script lang="ts" setup>
import {closeModal} from '../functions/functions';
import {computed, ref, useSlots} from 'vue';
import {openConfirm} from "lkt-modal-confirm";

const props = defineProps({
    palette: {type: String, default: ''},
    size: {type: String, default: ''},
    preTitle: {type: String, default: ''},
    title: {type: String, default: ''},
    closeConfirm: {type: String, default: ''},
    closeConfirmKey: {type: String, default: '_'},
    showClose: {type: Boolean, default: true},
    disabledClose: {type: Boolean, default: false},
    disabledVeilClick: {type: Boolean, default: false},
    hiddenFooter: {type: Boolean, default: false},
    modalName: {type: String, default: ''},
    modalKey: {type: [String, Number], default: '_'},
    zIndex: {type: Number, default: 500},
    beforeClose: {type: Function, default: undefined}
});

const refreshComputedProperties = ref(0);

const classes = computed(() => {
    let r = ['lkt-modal'];

    if (props.size) r.push(`is-${props.size}`);
    if (props.palette) r.push(`is-${props.palette}`);

    return r.join(' ');
});

const onClose = () => {
        const _onClose = async () => {
            if (typeof props.beforeClose === 'function') {
                await props.beforeClose();
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
    <section v-bind:class="classes" v-bind:style="'z-index: ' + zIndex">
        <div class="lkt-modal-back" v-on:click.prevent.stop="onVeilClick"></div>
        <div class="lkt-modal-inner" ref="inner">

            <header class="lkt-modal-header">
                <div class="lkt-modal-header_title-container">
                    <div class="lkt-modal-header_pre-title" v-if="slots['pre-title']">
                        <slot name="pre-title"></slot>
                    </div>
                    <div class="lkt-modal-header_pre-title" v-else-if="preTitle" v-html="preTitle"></div>
                    <div class="lkt-modal-header_title" v-if="title">{{ title }}</div>
                </div>
                <div class="lkt-modal-button-tray">
                    <template v-for="(key) in headerButtons">
                        <div v-bind:class="'lkt-modal-button lkt-modal-'+key">
                            <slot v-bind:name="key"></slot>
                        </div>
                    </template>
                    <button
                        class="lkt-modal-button lkt-modal-button-close"
                        v-on:click.prevent.stop="onClose"
                        v-if="showClose"
                        :disabled="disabledClose"
                    ></button>
                </div>
            </header>

            <section class="lkt-modal-content">
                <slot></slot>
            </section>

            <footer class="lkt-modal-footer" v-if="!hiddenFooter && (footerButtons.length > 0 || !!slots.footer)">
                <div v-if="!!slots.footer" class="lkt-modal-footer_main">
                    <slot name="footer"></slot>
                </div>

                <div class="lkt-modal-button-tray" v-if="footerButtons.length > 0">
                    <template v-for="(key) in footerButtons">
                        <div v-bind:class="'lkt-modal-button lkt-modal-'+key">
                            <slot v-bind:name="key"></slot>
                        </div>
                    </template>
                </div>
            </footer>
        </div>
    </section>
</template>