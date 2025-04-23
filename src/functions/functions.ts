import {
    LktObject,
    ModalCallbackAction,
    ModalCallbackConfig,
    ModalController,
    ModalRegisterType,
    ValidModalKey,
    ValidModalName
} from 'lkt-vue-kernel';
import {Component, nextTick, VueElement} from 'vue';

export const addModal = (alias: ValidModalName, component: Component|VueElement|string) => {
    ModalController.addModal({
        name: alias,
        component,
        type: ModalRegisterType.Full,
    });
};

export const openModal = (
    alias: ValidModalName,
    key: ValidModalKey = '_',
    props: LktObject = {}
) => {
    if (!ModalController.canvas) {
        console.warn('ModalCanvas not defined');
        return;
    }

    ModalController.open({
        modalName: alias,
        modalKey: key,
    }, props, true);
    // ModalController.canvas?.refresh();
};

export const refreshModal = (
    alias: ValidModalName,
    key: ValidModalKey = '_',
    props: LktObject = {}
) => {
    ModalController.refresh({
        modalName: alias,
        modalKey: key,
    }, props);
};

export const execModal = (
    alias: ValidModalName,
    key: ValidModalKey = '_',
    method: string,
    props: LktObject = {}
) => {
    ModalController.execModal({
        modalName: alias,
        modalKey: key,
    }, method, props);
};

export const closeModal = (alias: ValidModalName, key: ValidModalKey = '_') => {
    if (!ModalController.canvas) {
        console.warn('ModalCanvas not defined');
        return;
    }

    ModalController.close({
        modalName: alias,
        modalKey: key,
    });
    // ModalController.canvas?.refresh();
};

export const reOpenModal = (
    alias: ValidModalName,
    key: ValidModalKey = '_',
    props: LktObject = {}) => {
    ModalController.reOpen({
        modalName: alias,
        modalKey: key,
    }, props);
};

export const updateModalKey = (alias: ValidModalName, key: ValidModalKey, newKey: ValidModalKey) => {
    ModalController.updateModalKey({
        modalName: alias,
        modalKey: key,
    }, newKey);
}


export const openConfirm = (alias: ValidModalName, key: ValidModalKey = '_', props: LktObject = {}) => {
    let name = alias;
    if (typeof name === 'string' && name.indexOf('confirm__') === 0) name = name.substring(9);
    openModal('confirm__'+name, key, props);
    // openModal(alias, key, props);
};
export const closeConfirm = (alias: ValidModalName, key: ValidModalKey = '_') => {
    let name = alias;
    if (typeof name === 'string' && name.indexOf('confirm__') === 0) name = name.substring(9);
    closeModal('confirm__'+name, key);
    // closeModal(alias, key);
};

export const addConfirm = (alias: ValidModalName, component: Component) => {
    let name = alias;
    if (typeof name === 'string' && name.indexOf('confirm__') === 0) name = name.substring(9);
    addModal('confirm__'+name, component);
    // closeModal(alias, component);
};

export const runModalCallback = (cfg: ModalCallbackConfig) => {
    ModalController.runModalCallback(cfg);
}