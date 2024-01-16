import { App, Component } from 'vue';
import { addModal, closeModal, openModal, reOpenModal } from './functions/functions';
import "./../lkt-modal.css";
declare const LktModal: {
    install: (app: App, options: any) => void;
    setCanvas: (component: Component) => void;
};
export default LktModal;
export { addModal, closeModal, openModal, reOpenModal };
export type { ValidModalKey } from "./types/types";
