/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {css} from 'lit-element';

export default css`*{box-sizing:border-box}.header{width:100%;text-align:center;display:inline-flex;align-items:center;height:var(--spectrum-global-dimension-size-700, 56px);border-bottom:1px solid var(--spectrum-global-color-gray-300)}::slotted(*){margin-left:var(--spectrum-actionbuttongroup-text-button-gap-x, var(--spectrum-global-dimension-size-100))}::slotted(*:last-child){margin-right:var(--spectrum-global-dimension-size-400, 32px);margin-left:var(--spectrum-global-dimension-size-400, 32px)}::slotted(sp-tabs){align-self:flex-end}::slotted(*:first-child){margin-left:var(--spectrum-global-dimension-size-400, 32px);margin-right:var(--spectrum-global-dimension-size-200, 16px)}sp-container{width:100%}.spacer{flex:1}`;
