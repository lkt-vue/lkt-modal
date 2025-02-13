import {App, Plugin} from 'vue';
import LktModalCanvas from './lib-components/LktModalCanvas.vue';
import {default as modal} from './lib-components/LktModal.vue';
import {Settings} from './settings/Settings';

import "./../lkt-modal.css";
import {ValidCanvas} from "./types/ValidCanvas";

export {addModal, closeModal, openModal, reOpenModal, refreshModal, execModal, openConfirm, closeConfirm, addConfirm, runModalCallback} from './functions/functions';

const LktModal: Plugin = {
    install: (app: App) => {
        // Register plugin components
        if (app.component('lkt-modal-canvas') === undefined) app.component('lkt-modal-canvas', LktModalCanvas);
        if (app.component('lkt-modal') === undefined) app.component('lkt-modal', modal);
    }
};

export default LktModal;

export const setCanvas = (component: ValidCanvas): void => {
    Settings.canvas = component;
};

export const setDefaultModalCloseIcon = (icon: string): void => {
    Settings.defaultCloseIcon = icon;
};

export type {ValidModalKey} from "lkt-vue-kernel";
