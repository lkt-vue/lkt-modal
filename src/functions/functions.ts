import {LktObject} from 'lkt-ts-interfaces';
import {Component, nextTick} from 'vue';

import {Settings} from '../settings/Settings';
import {ValidModalKey} from '../types/types';
import {ModalCallerConfig} from '../types/ModalCallerConfig';

export const openWindowConfig = (config: ModalCallerConfig) => {
    Settings.canvas.open(config.alias, config.key, config.props);
};

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
