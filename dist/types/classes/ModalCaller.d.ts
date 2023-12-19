import { LktObject } from "lkt-ts-interfaces";
import { ValidModalKey } from "../types/types";
import { ModalCallerConfig } from "../types/ModalCallerConfig";
export declare class ModalCaller {
    alias: string;
    key: ValidModalKey;
    props: LktObject;
    constructor(config?: ModalCallerConfig);
    isCallable(): boolean;
}
