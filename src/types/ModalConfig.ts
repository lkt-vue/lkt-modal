import {VueElement} from 'vue';
import {ValidModalName} from "lkt-vue-kernel";

export type ModalConfig = {
    alias: ValidModalName;
    component: VueElement;
};
