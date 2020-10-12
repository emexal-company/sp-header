import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Header } from './header.component';
import '@spectrum/sp-container';

export  function standardTemplate(this: Header) {
return html`
   <sp-container background="gray-200">
      <div class="header">
         <slot name="home"></slot>
         <slot name="tabs"></slot>
         <div class="spacer"></div>
         <slot name="document"></slot>
         <div class="spacer"></div>
         <slot name="action"></slot>
         <slot name="avatar"></slot>
      </div>
   </sp-container>`;
}

export  function smalldesktopTemplate(this: Header) {
return html`
   <div class="header">
      <div class="icon">
      <sp-icon name="CheckmarkSmall" class="spectrum-Checkbox-checkmark"></sp-icon>
      </div>
      <div class="smalldesktopTemplate-tabs">
         <slot></slot>
      </div>
      <a href="#default" class="title">Title</a>
      <div class="search">
         <sp-search></sp-search>
      </div>
      <div class="action">
         <a href="#default"><sp-icon name="CheckmarkSmall" class="spectrum-Checkbox-checkmark"></sp-icon></a>
         <a href="#default"> <sp-icon name="CheckmarkSmall" class="spectrum-Checkbox-checkmark"></sp-icon></a>
         <a href="#default"><sp-icon name="CheckmarkSmall" class="spectrum-Checkbox-checkmark"></sp-icon></a>
      </div>
      <div class="avatar">
         <sp-avatar src="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" alt="Avatar" width="25" height="25"></sp-avatar>
      </div>
   </div>`;
}
export  function tabletTemplate(this: Header) {
   return html`
      <div class="header">
         <div class="icon">
         <sp-icon name="CheckmarkSmall" class="spectrum-Checkbox-checkmark"></sp-icon>
         </div>
         <div class="smalldesktopTemplate-tabs">
            <slot></slot>
         </div>
         <div class="search">
            <sp-search></sp-search>
         </div>
         <div class="action">
            <a href="#default"><sp-icon name="CheckmarkSmall" class="spectrum-Checkbox-checkmark"></sp-icon></a>
            <a href="#default"> <sp-icon name="CheckmarkSmall" class="spectrum-Checkbox-checkmark"></sp-icon></a>
            <a href="#default"><sp-icon name="CheckmarkSmall" class="spectrum-Checkbox-checkmark"></sp-icon></a>
         </div>
         <div class="avatar">
            <sp-avatar src="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" alt="Avatar" width="25" height="25"></sp-avatar>
         </div>
      </div>`;
   }
export  function mobileTemplate(this: Header) {
return html`
   <div class="header">
      <div class="icon">
         <sp-icon name="CheckmarkSmall" class="spectrum-Checkbox-checkmark"></sp-icon>
      </div>
      <div class="mobileTemplate-tabs">
         <slot></slot>
      </div>
      <div class="avatar-mobile">
         <sp-avatar src="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" alt="Avatar" width="25" height="25"></sp-avatar>
      </div> 
   </div>`;
}