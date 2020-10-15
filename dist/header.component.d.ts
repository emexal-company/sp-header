import { Base } from '@spectrum/sp-base';
export declare class Header extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    standard: boolean;
    desktop: boolean;
    tablet: boolean;
    mobile: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-header': Header;
    }
}
