import { Component } from 'vue';
import { ModalController } from "../classes/ModalController";
export type SettingsConfig = {
    controller: ModalController;
    canvas: undefined | Component;
};
