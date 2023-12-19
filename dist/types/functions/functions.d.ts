import { LktObject } from 'lkt-ts-interfaces';
import { Component } from 'vue';
import { ValidModalKey } from '../types/types';
import { ModalCallerConfig } from '../types/ModalCallerConfig';
export declare const openWindowConfig: (config: ModalCallerConfig) => void;
export declare const openModal: (alias: string, key?: ValidModalKey, props?: LktObject) => void;
export declare const closeModal: (alias: string, key?: ValidModalKey) => void;
export declare const addModal: (alias: string, component: Component) => void;
