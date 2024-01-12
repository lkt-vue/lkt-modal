/* eslint-disable import/prefer-default-export */
import {App, Component} from 'vue';

import {addModal, closeModal, openModal} from './functions/functions';
import LktModalCanvas from './lib-components/LktModalCanvas.vue';
import {default as modal} from './lib-components/LktModal.vue';
import {Settings} from './settings/Settings';

import "./../lkt-modal.css";
import LktLoader from "lkt-loader";

const LktModal = {
    install: (app: App, options: any) => {
        // Register plugin components
        if (app.component('lkt-modal-canvas') === undefined) app.component('lkt-modal-canvas', LktModalCanvas);
        if (app.component('lkt-modal') === undefined) app.component('lkt-modal', modal);

        // Register additional components
        if (app.component('lkt-loader') === undefined)  app.use(LktLoader);
    },
    setCanvas: (component: Component) => {
        Settings.canvas = component;
    },
};

export default LktModal;

export {addModal, closeModal, openModal};
export type {ValidModalKey} from "./types/types";
