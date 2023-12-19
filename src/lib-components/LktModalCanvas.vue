<script lang="ts">
export default {name: 'LktModalCanvas', inheritAttrs: false};
</script>

<script lang="ts" setup>
import {computed, getCurrentInstance, ref} from 'vue';
import {RenderModalInfo} from '../types/RenderModalInfo';
import {Settings} from '../settings/Settings';

const refresher = ref(0);
const {ctx: _this}: any = getCurrentInstance();

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

defineExpose({
    refresh
});
</script>

<template>
    <section class="lkt-modal-canvas">
        <component
            v-for="info in components"
            v-bind:key="info.index"
            v-bind:is="info.component"
            v-bind="info.props"
        ></component>
    </section>
</template>