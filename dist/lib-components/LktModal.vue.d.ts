declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    palette: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    preTitle: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    closeConfirm: {
        type: StringConstructor;
        default: string;
    };
    closeConfirmKey: {
        type: StringConstructor;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledVeilClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    hiddenFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    modalName: {
        type: StringConstructor;
        default: string;
    };
    modalKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    beforeClose: {
        type: FunctionConstructor;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    palette: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    preTitle: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    closeConfirm: {
        type: StringConstructor;
        default: string;
    };
    closeConfirmKey: {
        type: StringConstructor;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledVeilClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    hiddenFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    modalName: {
        type: StringConstructor;
        default: string;
    };
    modalKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    beforeClose: {
        type: FunctionConstructor;
        default: undefined;
    };
}>>, {
    zIndex: number;
    title: string;
    size: string;
    modalName: string;
    modalKey: string | number;
    palette: string;
    preTitle: string;
    closeConfirm: string;
    closeConfirmKey: string;
    showClose: boolean;
    disabledClose: boolean;
    disabledVeilClick: boolean;
    hiddenFooter: boolean;
    beforeClose: Function;
}, {}>, Partial<Record<string, (_: {}) => any>> & Partial<Record<string, (_: {}) => any>> & {
    "pre-title"?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
