import {ModalController} from "../classes/ModalController";
import {ValidCanvas} from "./ValidCanvas";

export type SettingsConfig = {
    controller: ModalController,
    canvas: ValidCanvas,
    defaultCloseIcon: string,
};
