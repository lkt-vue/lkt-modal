import { Plugin } from 'vue';
import "./../lkt-modal.css";
import { ValidCanvas } from "./types/ValidCanvas";
export { addModal, closeModal, openModal, reOpenModal, refreshModal, execModal, openConfirm, closeConfirm, addConfirm, runModalCallback } from './functions/functions';
declare const LktModal: Plugin;
export default LktModal;
export declare const setCanvas: (component: ValidCanvas) => void;
export declare const setDefaultModalCloseIcon: (icon: string) => void;
export type { ValidModalKey } from "lkt-vue-kernel";
