/* eslint-disable import/prefer-default-export */
import {App, Component} from 'vue';

import {addModal, closeModal, openModal} from './functions/functions';
import LktModalCanvas from './lib-components/LktModalCanvas.vue';
import {default as modal} from './lib-components/LktModal.vue';
import {Settings} from './settings/Settings';

const LktModal = {
    install: (app: App, options: any) => {
        app
            .component('lkt-modal-canvas', LktModalCanvas)
            .component('lkt-modal', modal);
    },
    setCanvas: (component: Component) => {
        Settings.canvas = component;
    },
};

export default LktModal;

export {addModal, closeModal, openModal};
