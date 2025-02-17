<script lang="ts" setup>
import {computed, getCurrentInstance, ref} from 'vue';
import {RenderModalInfo} from '../types/RenderModalInfo';
import {Settings} from '../settings/Settings';
import {ValidModalKey, LktObject} from "lkt-vue-kernel";

const refresher = ref(0);
const instance = getCurrentInstance();
const instanceReferences = ref([]);

const refresh = () => {
    refresher.value = refresher.value + 1;
    setTimeout(() => {
        instance?.proxy?.$forceUpdate();
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

const onConfirmedModal = (info) => {
    if (info.props?.confirmButton?.onClick && typeof info.props.confirmButton.onClick === 'function') {
        info.props.confirmButton.onClick();
        return;
    }
    if (info.props?.onConfirm && typeof info.props.onConfirm === 'function') {
        info.props.onConfirm();
        return;
    }
}
</script>

<template>
    <section class="lkt-modal-canvas">
        <component
            v-for="info in components"
            ref="instanceReferences"
            :key="info.index"
            :is="info.component"
            v-bind="info.props"
            @confirm="() => onConfirmedModal(info)"
        />
    </section>
</template>