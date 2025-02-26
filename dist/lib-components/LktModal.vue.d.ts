import { LktObject, Modal, ModalConfig } from "lkt-vue-kernel";
declare const classes: import("vue").ComputedRef<string>;
declare const onClose: () => void, onVeilClick: () => void;
declare const slots: LktObject;
declare const headerButtons: import("vue").ComputedRef<string[]>, footerButtons: import("vue").ComputedRef<string[]>, isConfirm: import("vue").ComputedRef<boolean>, computedCanRenderFooter: import("vue").ComputedRef<boolean>, canRenderCancel: import("vue").ComputedRef<boolean>, canRenderConfirm: import("vue").ComputedRef<boolean>, computedCancelButtonData: import("vue").ComputedRef<{}>, computedConfirmButton: import("vue").ComputedRef<{}>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_1: {}, __VLS_4: string, __VLS_5: {}, __VLS_15: {}, __VLS_17: {}, __VLS_20: string, __VLS_21: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    [K in NonNullable<typeof __VLS_4>]?: (props: typeof __VLS_5) => any;
} & {
    [K in NonNullable<typeof __VLS_20>]?: (props: typeof __VLS_21) => any;
} & {
    'pre-title'?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_15) => any;
} & {
    footer?: (props: typeof __VLS_17) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ModalConfig>, Partial<Modal>>>, {
    classes: typeof classes;
    onClose: typeof onClose;
    onVeilClick: typeof onVeilClick;
    slots: typeof slots;
    headerButtons: typeof headerButtons;
    footerButtons: typeof footerButtons;
    isConfirm: typeof isConfirm;
    computedCanRenderFooter: typeof computedCanRenderFooter;
    canRenderCancel: typeof canRenderCancel;
    canRenderConfirm: typeof canRenderConfirm;
    computedCancelButtonData: typeof computedCancelButtonData;
    computedConfirmButton: typeof computedConfirmButton;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    confirm: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ModalConfig>, Partial<Modal>>>> & Readonly<{
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
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
