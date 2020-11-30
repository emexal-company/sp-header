import { customElement, property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './header.styles';
import { tabletTemplate, mobileTemplate, standardTemplate, smalldesktopTemplate } from './header.template';

@customElement('sp-header')
export class Header extends Base {
  public static componentStyles = [ labelStyles ];

  @property({ type: Boolean }) public standard: boolean = false;
  @property({ type: Boolean }) public desktop: boolean = false;
  @property({ type: Boolean }) public tablet: boolean = false;
  @property({ type: Boolean }) public mobile: boolean = false;

  protected render() {
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
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-header': Header;
  }
}
