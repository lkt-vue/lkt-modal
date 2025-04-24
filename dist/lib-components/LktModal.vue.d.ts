import { Modal, ModalConfig } from "lkt-vue-kernel";
declare var __VLS_5: {}, __VLS_7: {}, __VLS_10: string, __VLS_11: {}, __VLS_21: {}, __VLS_23: {}, __VLS_26: string, __VLS_27: {};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_10>]?: (props: typeof __VLS_11) => any;
} & {
    [K in NonNullable<typeof __VLS_26>]?: (props: typeof __VLS_27) => any;
} & {
    'header-actions'?: (props: typeof __VLS_5) => any;
} & {
    'pre-title'?: (props: typeof __VLS_7) => any;
} & {
    default?: (props: typeof __VLS_21) => any;
} & {
    footer?: (props: typeof __VLS_23) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ModalConfig>, Partial<Modal>>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    confirm: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ModalConfig>, Partial<Modal>>>> & Readonly<{
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
