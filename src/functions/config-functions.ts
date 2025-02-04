import {ValidModalKey} from "lkt-vue-kernel";

export const getInstanceIndex = (name: string, key: ValidModalKey = '_'): string => {
    return `${name}_${key}`;
}