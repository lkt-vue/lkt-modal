import {ValidModalKey, ValidModalName} from "lkt-vue-kernel";

export const getInstanceIndex = (name: ValidModalName, key: ValidModalKey = '_'): string => {
    return `${name}_${key}`;
}