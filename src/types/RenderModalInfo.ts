import {LktObject, ValidModalKey, ValidModalName} from 'lkt-vue-kernel';
import {VueElement} from 'vue';

export type RenderModalInfo = {
    component: VueElement|string;
    alias: ValidModalName;
    index: string;
    key: ValidModalKey;
    props: LktObject;
    zIndex: number
};
