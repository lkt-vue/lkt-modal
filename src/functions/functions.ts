import {LktObject} from 'lkt-ts-interfaces';
import {Component, nextTick} from 'vue';

import {Settings} from '../settings/Settings';
import {ValidModalKey} from '../types/types';

export const openModal = (
    alias: string,
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
    alias: string,
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
    alias: string,
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

export const closeModal = (alias: string, key: ValidModalKey = '_') => {
    if (!Settings.canvas) {
        console.warn('ModalCanvas not defined');
        return;
    }
    Settings.controller.close(alias, key);
    //@ts-ignore
    Settings.canvas.refresh();
};

export const addModal = (alias: string, component: Component) => {
    // @ts-ignore
    Settings.controller.addWindow({alias, component});
};

export const reOpenModal = (
    alias: string,
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
