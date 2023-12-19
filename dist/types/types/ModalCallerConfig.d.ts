import { LktObject } from 'lkt-ts-interfaces';
import { ValidModalKey } from "./types";
export type ModalCallerConfig = {
    alias: string;
    key: ValidModalKey;
    props?: LktObject;
};
