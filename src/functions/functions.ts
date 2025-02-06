import {LktObject, ValidModalName} from 'lkt-vue-kernel';
import {Component, nextTick} from 'vue';

import {Settings} from '../settings/Settings';
import {ValidModalKey} from 'lkt-vue-kernel';

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
