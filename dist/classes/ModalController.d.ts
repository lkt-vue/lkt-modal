import { LktObject } from 'lkt-ts-interfaces';
import { RenderModalStack } from '../interfaces/RenderModalStack';
import { RenderModalInfo } from '../types/RenderModalInfo';
import { ValidModalKey } from '../types/types';
import { ModalConfig } from '../types/ModalConfig';
export declare class ModalController {
    private config;
    readonly components: RenderModalStack;
    private zIndex;
    setConfig(configStack: ModalConfig[]): void;
    addWindow(configStack: ModalConfig): void;
    private findConfig;
    private getModalInfo;
    open(alias: string, key?: ValidModalKey, props?: LktObject): RenderModalInfo | undefined;
    private focus;
    close(alias: string, key?: ValidModalKey): void;
}
