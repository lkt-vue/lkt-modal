import { App, Component } from 'vue';
import { addModal, closeModal, openModal } from './functions/functions';
declare const LktModal: {
    install: (app: App, options: any) => void;
    setCanvas: (component: Component) => void;
};
export default LktModal;
export { addModal, closeModal, openModal };
