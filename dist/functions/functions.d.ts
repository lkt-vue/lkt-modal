import { LktObject } from 'lkt-ts-interfaces';
import { Component } from 'vue';
import { ValidModalKey } from '../types/types';
export declare const openModal: (alias: string, key?: ValidModalKey, props?: LktObject) => void;
export declare const refreshModal: (alias: string, key?: ValidModalKey, props?: LktObject) => void;
export declare const execModal: (alias: string, key: ValidModalKey | undefined, method: string, props?: LktObject) => void;
export declare const closeModal: (alias: string, key?: ValidModalKey) => void;
export declare const addModal: (alias: string, component: Component) => void;
export declare const reOpenModal: (alias: string, key?: ValidModalKey, props?: LktObject) => void;
