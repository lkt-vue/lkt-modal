import {ModalController} from '../classes/ModalController';
import {SettingsConfig} from "../types/SettingsConfig";

export const Settings: SettingsConfig = {
    controller: new ModalController(),
    canvas: undefined,
    defaultCloseIcon: '',
};
