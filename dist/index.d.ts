import { Plugin } from 'vue';
import "./../lkt-modal.css";
export { addModal, closeModal, openModal, reOpenModal, refreshModal, execModal, updateModalKey, openConfirm, closeConfirm, addConfirm, runModalCallback } from './functions/functions';
declare const LktModal: Plugin;
export default LktModal;
/** @deprecated */
export declare const setCanvas: (component: any) => void;
