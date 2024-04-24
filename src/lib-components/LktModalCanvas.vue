<script lang="ts" setup>
import {computed, getCurrentInstance, ref} from 'vue';
import {RenderModalInfo} from '../types/RenderModalInfo';
import {Settings} from '../settings/Settings';
import {ValidModalKey} from "../types/types";
import {LktObject} from "lkt-ts-interfaces";

const refresher = ref(0);
const {ctx: _this}: any = getCurrentInstance();
const instanceReferences = ref([]);

const refresh = () => {
    refresher.value = refresher.value + 1;
    setTimeout(() => {
        _this.$forceUpdate();
    }, 1);
};

const components = computed((): RenderModalInfo[] => {
    refresher.value;
    // @ts-ignore
    return Object.values(Settings.controller.components);
});

const refreshModal = (
        alias: string,
        key: ValidModalKey = '_',
        props: LktObject = {}
    ) => {
        instanceReferences.value.forEach((ins: LktObject) => {
            if (ins.modalName === alias && ins.modalKey === key && typeof ins.doRefresh === 'function') ins.doRefresh(props);
        })
    },

    execModal = (alias: string, key: ValidModalKey = '_', method: string, props: LktObject = {}) => {
        instanceReferences.value.forEach((ins: LktObject) => {
            if (ins.modalName === alias && ins.modalKey === key) ins[method](props);
        })
    }

defineExpose({
    refresh,
    refreshModal,
    execModal
});
</script>

<template>
    <section class="lkt-modal-canvas">
        <component
            v-for="info in components"
            ref="instanceReferences"
            v-bind:key="info.index"
            v-bind:is="info.component"
            v-bind="info.props"
        ></component>
    </section>
</template>