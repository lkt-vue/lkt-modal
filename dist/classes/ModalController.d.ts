import { ValidModalKey, LktObject, ValidModalName } from 'lkt-vue-kernel';
import { ModalConfig } from '../types/ModalConfig';
export declare class ModalController {
    private config;
    readonly components: LktObject;
    private zIndex;
    setConfig(configStack: ModalConfig[]): void;
    addWindow(configStack: ModalConfig): void;
    private findConfig;
    private getModalInfo;
    open(alias: ValidModalName, key?: ValidModalKey, props?: LktObject): any;
    private focus;
    close(alias: ValidModalName, key?: ValidModalKey): void;
}
