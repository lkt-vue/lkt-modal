import {App, Component, Plugin} from 'vue';

import {addModal, closeModal, openModal, reOpenModal} from './functions/functions';
import LktModalCanvas from './lib-components/LktModalCanvas.vue';
import {default as modal} from './lib-components/LktModal.vue';
import {Settings} from './settings/Settings';

import "./../lkt-modal.css";

const LktModal: Plugin = {
    install: (app: App) => {
        // Register plugin components
        if (app.component('lkt-modal-canvas') === undefined) app.component('lkt-modal-canvas', LktModalCanvas);
        if (app.component('lkt-modal') === undefined) app.component('lkt-modal', modal);
    }
};

export default LktModal;

export const setCanvas = (component: Component): void => {
    Settings.canvas = component;
};

export {addModal, closeModal, openModal, reOpenModal};
export type {ValidModalKey} from "./types/types";
