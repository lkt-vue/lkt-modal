import {LktObject, ModalCallbackAction, ModalCallbackConfig, ValidModalKey, ValidModalName} from 'lkt-vue-kernel';
import {Component, nextTick} from 'vue';

import {Settings} from '../settings/Settings';

export const openModal = (
    alias: ValidModalName,
    key: ValidModalKey = '_',
    props: LktObject = {}
) => {
    if (!Settings.canvas) {
        console.warn('ModalCanvas not defined');
        return;
    }
    Settings.controller.open(alias, key, props);
    //@ts-ignore
    Settings.canvas.refresh();
};

export const refreshModal = (
    alias: ValidModalName,
    key: ValidModalKey = '_',
    props: LktObject = {}
) => {
    if (!Settings.canvas) {
        console.warn('ModalCanvas not defined');
        return;
    }
    Settings.canvas.refreshModal(alias, key, props);
    //@ts-ignore
    Settings.canvas.refresh();
};

export const execModal = (
    alias: ValidModalName,
    key: ValidModalKey = '_',
    method: string,
    props: LktObject = {}
) => {
    if (!Settings.canvas) {
        console.warn('ModalCanvas not defined');
        return;
    }
    Settings.canvas.execModal(alias, key, method, props);
    //@ts-ignore
    Settings.canvas.refresh();
};

export const closeModal = (alias: ValidModalName, key: ValidModalKey = '_') => {
    if (!Settings.canvas) {
        console.warn('ModalCanvas not defined');
        return;
    }
    Settings.controller.close(alias, key);
    //@ts-ignore
    Settings.canvas.refresh();
};

export const addModal = (alias: ValidModalName, component: Component) => {
    // @ts-ignore
    Settings.controller.addWindow({alias, component});
};

export const reOpenModal = (
    alias: ValidModalName,
    key: ValidModalKey = '_',
    props: LktObject = {}) => {
    if (!Settings.canvas) {
        console.warn('ModalCanvas not defined');
        return;
    }
    Settings.controller.close(alias, key);
    //@ts-ignore
    Settings.canvas.refresh();
    nextTick(() => {
        Settings.controller.open(alias, key, props);
        //@ts-ignore
        Settings.canvas.refresh();
    });
};


export const openConfirm = (alias: ValidModalName, key: ValidModalKey = '_', props: LktObject = {}) => {
    let name = alias;
    if (typeof name === 'string' && name.indexOf('confirm__') === 0) name = name.substring(9);
    openModal('confirm__'+name, key, props);
};
export const closeConfirm = (alias: ValidModalName, key: ValidModalKey = '_') => {
    let name = alias;
    if (typeof name === 'string' && name.indexOf('confirm__') === 0) name = name.substring(9);
    closeModal('confirm__'+name, key);
};

export const addConfirm = (alias: ValidModalName, component: Component) => {
    let name = alias;
    if (typeof name === 'string' && name.indexOf('confirm__') === 0) name = name.substring(9);
    addModal('confirm__'+name, component);
};

export const runModalCallback = (cfg: ModalCallbackConfig) => {
    let modalKey = cfg.modalKey ? cfg.modalKey : '_',
        args = cfg.args ? cfg.args : {};

    switch (cfg.action) {
        case ModalCallbackAction.ReOpen:
            return reOpenModal(cfg.modalName, modalKey, args);

        case ModalCallbackAction.Open:
            return openModal(cfg.modalName, modalKey, args);

        case ModalCallbackAction.Close:
            return closeModal(cfg.modalName, modalKey);

        case ModalCallbackAction.Refresh:
            return refreshModal(cfg.modalName, modalKey, args);

        case ModalCallbackAction.Exec:
            let method = cfg.method;
            if (!method) return;
            return execModal(cfg.modalName, modalKey, method, args);

    }
}