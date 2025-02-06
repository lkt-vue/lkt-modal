import {getInstanceIndex} from '../functions/config-functions';
import {RenderModalInfo} from '../types/RenderModalInfo';
import {ValidModalKey, LktObject, ValidModalName} from 'lkt-vue-kernel';
import {ModalConfig} from '../types/ModalConfig';

export class ModalController {
    private config: ModalConfig[] = [];
    readonly components: LktObject = {};
    private zIndex: number = 500;

    setConfig(configStack: ModalConfig[]) {
        this.config = configStack;
    }

    addWindow(configStack: ModalConfig) {
        this.config.push(configStack);
    }

    private findConfig(alias: ValidModalName): ModalConfig|undefined {
        return this.config.find((z:ModalConfig) => z.alias === alias);
    }

    private getModalInfo(
        alias: ValidModalName,
        key: ValidModalKey = '_',
        props: LktObject = {}
    ): RenderModalInfo {
        const index = getInstanceIndex(alias, key),
            config = this.findConfig(alias),
            component = typeof config !== 'undefined' ? config.component : '';

        return {
            component,
            alias,
            index,
            key,
            props: {...props, modalName: alias, modalKey: key, zIndex: (() => this.zIndex)()},
            zIndex: this.zIndex,
        };
    }

    open(alias: ValidModalName, key: ValidModalKey = '_', props: LktObject = {}) {
        const config = this.findConfig(alias);
        if (config) {
            ++this.zIndex;
            const info = this.getModalInfo(alias, key, props);
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
            const info = this.getModalInfo(alias, key, {});
            delete this.components[info.index];

            if (Object.keys(this.components).length === 0) {
                this.zIndex = 500;
            }
        }
    }
}
