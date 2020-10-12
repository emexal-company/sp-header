import { html } from 'lit-element';
import { DemoHeader } from './demo-header.component';

import '@spectrum/sp-header';
import '@spectrum/sp-dropdown';
import '@spectrum/sp-dropdown';
import '@spectrum/sp-button';
import '@spectrum/sp-container';


export default function template(this: DemoHeader) {
  return html`
  <sp-container>
  <sp-rule medium label="Standard"></sp-rule>
  <sp-demo width="1300">
    <pre>
<sp-header standard>
  <sp-button slot="home" quiet type="tool" icon="SmockHome"></sp-button>
  <sp-tabs slot="tabs" horizontal>
    <sp-tabsitem label="Design" selected></sp-tabsitem>
    <sp-tabsitem label="Prototype"></sp-tabsitem>
    <sp-tabsitem label="Partager"></sp-tabsitem>
  </sp-tabs>
  <sp-dropdown slot="document" width="250" quiet>
    <sp-dropdownitem text="20180107_proposal.pdf"></sp-dropdownitem>
    <sp-dropdownitem text="20180108_proposal.pdf"></sp-dropdownitem>
    <sp-dropdownitem text="20180109_proposal.pdf"></sp-dropdownitem>
  </sp-dropdown>

  <sp-search slot="action"></sp-search>
  <sp-button slot="action" type="secondary" label="Run"></sp-button>
  <sp-button slot="action" quiet type="tool" icon="Edit"></sp-button>
  <sp-button slot="action" quiet type="tool" icon="Copy"></sp-button>
  <sp-button slot="action" quiet type="tool" icon="Delete"></sp-button>
  <sp-avatar slot="avatar" src="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" alt="Avatar" width="29" height="29"></sp-avatar>
</sp-header>
</pre>
  </sp-demo>
  <sp-rule medium label="Desktop"></sp-rule>
  <sp-demo width="900">
  <pre>
<sp-header desktop>
  <sp-dropdown width="150" quiet>
    <sp-dropdownitem text="Tab 1"></sp-dropdownitem>
    <sp-dropdownitem text="Tab 2"></sp-dropdownitem>
    <sp-dropdownitem text="Tab 3"></sp-dropdownitem>
    <sp-dropdownitem text="Tab 4"></sp-dropdownitem>
  </sp-dropdown>
</sp-header>
</pre>
  </sp-demo>
  <sp-rule medium label="Tablet"></sp-rule>
  <sp-demo width="900">
  <pre>
<sp-header tablet>
  <sp-dropdown width="150" quiet>
    <sp-dropdownitem text="Tab 1"></sp-dropdownitem>
    <sp-dropdownitem text="Tab 2"></sp-dropdownitem>
    <sp-dropdownitem text="Tab 3"></sp-dropdownitem>
    <sp-dropdownitem text="Tab 4"></sp-dropdownitem>
  </sp-dropdown>
</sp-header>
</pre>
  </sp-demo>
  <sp-rule medium label="Mobile"></sp-rule>
  <sp-demo width="900">
  <pre>
<sp-header mobile>
  <sp-dropdown width="80" quiet>
    <sp-dropdownitem text="Tab 1"></sp-dropdownitem>
    <sp-dropdownitem text="Tab 2"></sp-dropdownitem>
    <sp-dropdownitem text="Tab 3"></sp-dropdownitem>
    <sp-dropdownitem text="Tab 4"></sp-dropdownitem>
  </sp-dropdown>  
</sp-header>
</pre>
  </sp-demo>
  </sp-container>
  `;
  
}
