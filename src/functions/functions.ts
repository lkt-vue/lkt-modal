import {LktObject} from 'lkt-ts-interfaces';
import {Component, nextTick} from 'vue';

import {Settings} from '../settings/Settings';
import {ValidModalKey} from '../types/types';

export const openModal = (
    alias: string,
    key: ValidModalKey = '_',
    props: LktObject = {}
) => {
    Settings.controller.open(alias, key, props);
    Settings.canvas.refresh();
};
export const closeModal = (alias: string, key: ValidModalKey = '_') => {
    Settings.controller.close(alias, key);
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
    Settings.controller.close(alias, key);
    Settings.canvas.refresh();
    nextTick(() => {
        Settings.controller.open(alias, key, props);
        Settings.canvas.refresh();
    });
};
