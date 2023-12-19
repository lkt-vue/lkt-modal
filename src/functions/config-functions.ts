import {ValidModalKey} from "../types/types";

export const getInstanceIndex = (name: string, key: ValidModalKey = '_'): string => {
    return `${name}_${key}`;
}