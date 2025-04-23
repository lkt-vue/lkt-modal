<script lang="ts" setup>
import {computed, getCurrentInstance, ref} from 'vue';
import {LktObject, ModalController, ModalRegisterType, RenderModalConfig, ValidModalKey} from "lkt-vue-kernel";

const refresher = ref(0),
    instance = getCurrentInstance(),
    instanceReferences = ref([]);

const refresh = () => {
    refresher.value = refresher.value + 1;
    setTimeout(() => {
        instance?.proxy?.$forceUpdate();
    }, 1);
};

const components = computed((): RenderModalConfig[] => {
    refresher.value;
    // @ts-ignore
    return Object.values(ModalController.components);
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
        <template
            v-for="info in components">
            <template v-if="info.modalRegister.type === ModalRegisterType.Full">
                <component
                    ref="instanceReferences"
                    :key="info.index"
                    :is="info.modalRegister.component"
                    v-bind="info.legacyData?.props ?? {}"
                    :modal-name="info.modalConfig.modalName"
                    :modal-key="info.modalConfig.modalKey"
                />
            </template>
            <template v-else>
                <lkt-modal
                    ref="instanceReferences"
                    v-bind="info.modalConfig"
                    :key="info.index"
                    :title="info.modalConfig.title"
                >
                    <component
                        :is="info.modalRegister.component"
                        v-bind="info.componentProps"
                        :modal-name="info.modalConfig.modalName"
                        :modal-key="info.modalConfig.modalKey"

                        v-model:modalTitle="info.modalConfig.title"
                        @update:modalTitle="refresh"

                        v-model:modalCloseConfirm="info.modalConfig.closeConfirm"
                        @update:modalCloseConfirm="refresh"

                        v-model:modalCloseConfirmKey="info.modalConfig.closeConfirmKey"
                        @update:modalCloseConfirmKey="refresh"
                    />
                </lkt-modal>
            </template>
        </template>
    </section>
</template>