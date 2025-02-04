import {LktObject} from 'lkt-vue-kernel';
import {VueElement} from 'vue';

export type RenderModalInfo = {
    component: VueElement|string;
    alias: string;
    index: string;
    key: string | number;
    props: LktObject;
    zIndex: number
};
