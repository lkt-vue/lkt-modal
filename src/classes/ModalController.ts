import {getInstanceIndex} from '../functions/config-functions';
import {RenderModalInfo} from '../types/RenderModalInfo';
import {ValidModalKey, LktObject, ValidModalName} from 'lkt-vue-kernel';
import {ModalConfig} from '../types/ModalConfig';
import {VueElement} from "vue";

export class ModalController {
    private config: ModalConfig[] = [];
    readonly components: LktObject = {};
    private zIndex: number = 500;

    addModal(configStack: ModalConfig) {
        this.config.push(configStack);
    }

    private findConfig(alias: ValidModalName): ModalConfig|undefined {
        return this.config.find((z:ModalConfig) => z.alias === alias);
    }

    private getModalInfo(
        alias: ValidModalName,
        key: ValidModalKey = '_',
        props: LktObject = {},
        component: VueElement|string = ''
    ): RenderModalInfo {
        const index = getInstanceIndex(alias, key);

        let modalConfig = {
            modalName: alias,
            modalKey: key,
            zIndex: (() => this.zIndex)(),
        }

        return {
            component,
            alias,
            index,
            key,
            props: {...props, ...modalConfig, modalConfig},
            zIndex: this.zIndex,
        };
    }

    open(alias: ValidModalName, key: ValidModalKey = '_', props: LktObject = {}) {

        if (props.modalKey) key = props.modalKey;

        const config = this.findConfig(alias);
        if (config) {
            ++this.zIndex;
            const info = this.getModalInfo(alias, key, props, config.component);
            if (this.components[info.index]) {
                return this.focus(info);
            }
            this.components[info.index] = info;
            return this.components[info.index];
        }
        return undefined;
    }

    private focus(info: RenderModalInfo) {
        this.components[info.index] = info;
        return this.components[info.index];
    }

    close(alias: ValidModalName, key: ValidModalKey = '_') {
        const config = this.findConfig(alias);
        if (config) {
            --this.zIndex;
            const info = this.getModalInfo(alias, key, {}, config.component);
            delete this.components[info.index];

            if (Object.keys(this.components).length === 0) {
                this.zIndex = 500;
            }
        }
    }
}
