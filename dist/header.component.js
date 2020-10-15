import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './header.styles';
import { tabletTemplate, mobileTemplate, standardTemplate, smalldesktopTemplate } from './header.template';
let Header = class Header extends Base {
    constructor() {
        super(...arguments);
        this.standard = false;
        this.desktop = false;
        this.tablet = false;
        this.mobile = false;
    }
    render() {
        if (this.standard) {
            return standardTemplate.call(this);
        }
        else if (this.desktop) {
            return smalldesktopTemplate.call(this);
        }
        else if (this.tablet) {
            return tabletTemplate.call(this);
        }
        else if (this.mobile) {
            return mobileTemplate.call(this);
        }
        else {
            return standardTemplate.call(this);
        }
    }
};
Header.componentStyles = [labelStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Header.prototype, "standard", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Header.prototype, "desktop", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Header.prototype, "tablet", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Header.prototype, "mobile", void 0);
Header = __decorate([
    customElement('sp-header')
], Header);
export { Header };
//# sourceMappingURL=header.component.js.map