import { Component, Plugin } from 'vue';
import { addModal, closeModal, openModal, reOpenModal } from './functions/functions';
import "./../lkt-modal.css";
declare const LktModal: Plugin;
export default LktModal;
export declare const setCanvas: (component: Component) => void;
export { addModal, closeModal, openModal, reOpenModal };
export type { ValidModalKey } from "./types/types";
