import {App, Plugin} from 'vue';
import LktModalCanvas from './lib-components/LktModalCanvas.vue';
import {default as modal} from './lib-components/LktModal.vue';

import "./../lkt-modal.css";
import {setModalCanvas} from "lkt-vue-kernel";

export {addModal, closeModal, openModal, reOpenModal, refreshModal, execModal, updateModalKey, openConfirm, closeConfirm, addConfirm, runModalCallback} from './functions/functions';

const LktModal: Plugin = {
    install: (app: App) => {
        // Register plugin components
        if (app.component('lkt-modal-canvas') === undefined) app.component('lkt-modal-canvas', LktModalCanvas);
        if (app.component('lkt-modal') === undefined) app.component('lkt-modal', modal);
    }
};

export default LktModal;

/** @deprecated */
export const setCanvas = (component: any): void => {
    //@ts-ignore
    setModalCanvas(component);
};
