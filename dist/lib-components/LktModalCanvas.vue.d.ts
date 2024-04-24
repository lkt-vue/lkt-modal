import { ValidModalKey } from "../types/types";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: import("vue").DefineComponent<{}, {
    refresh: () => void;
    refreshModal: (alias: string, key?: ValidModalKey, props?: LktObject) => void;
    execModal: (alias: string, key: ValidModalKey | undefined, method: string, props?: LktObject) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
