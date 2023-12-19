import {LktObject} from "lkt-ts-interfaces";

import {ValidModalKey} from "../types/types";
import {ModalCallerConfig} from "../types/ModalCallerConfig";

export class ModalCaller {
    alias: string = '';
    key: ValidModalKey = '_';
    props: LktObject = {};

    constructor(config?: ModalCallerConfig) {
        if (config) {
            this.alias = config.alias;
            this.key = config.key;

            if (!config.props) config.props = {};
            this.props = config.props;
        }
    }

    isCallable() {
        return this.alias !== '';
    }
}