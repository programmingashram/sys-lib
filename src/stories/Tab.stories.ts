// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import {
  SysButtonComponent,
  SysCardComponent,
  sysDesignModule,
} from 'projects/sys-lib/src/public-api';
import { SysTabComponent } from 'projects/sys-lib/src/lib/sys-tab/sys-tab.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'sys-design/SysTab',
  component: SysTabComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  options: {},
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [sysDesignModule, MatIconModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const DefaultTab: Story<SysCardComponent> = (args) => ({
  props: args,
  template: `
  <sys-tabs>
  <sys-tab tabTitle="Tab 1" [active]="true" icon="person_add">
    <h4>Tab 1</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
  </sys-tab>
  <sys-tab tabTitle="Disable Tab" icon="edit" [disable]="true" >
    <h4>Tab 2</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
  </sys-tab>
  <sys-tab tabTitle="Tab 3" icon="delete">
    <h4>Tab 3</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
  </sys-tab>
  <sys-tab tabTitle="Tab 4" icon="favorite">
  <h4>Tab 4</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
  </sys-tab>
</sys-tabs>

   `,
});
export const VerticalTab: Story<SysCardComponent> = (args) => ({
  props: args,
  template: `
  <sys-tabs [vertical]="true">
    <sys-tab tabTitle="Tab 1" [active]="true" icon="tab">
      <h4>Tab 1</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
    </sys-tab>
    <sys-tab tabTitle="Disable Tab" icon="edit" [disable]="true" >
        <h4>Tab 2</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
    </sys-tab>
    <sys-tab tabTitle="Tab 3" icon="delete">
        <h4>Tab 3</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
    </sys-tab>
  </sys-tabs>`,
});


export const CardWithTab: Story<SysCardComponent> = (args) => ({
  props: args,
  template: `
  <sys-card title="Card Title"  [divider]="true" subTitle="Sub Title" >
  <sys-CardHeader-action>
    <sys-button icon="favorite"  [iconBtn]="true" > </sys-button>
  </sys-CardHeader-action>
  <sys-card-content>
    <sys-tabs >
      <sys-tab tabTitle="Tab 1" [active]="true" icon="tab">
        <h4>Tab 1</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
      </sys-tab>
      <sys-tab tabTitle="Disable Tab" icon="edit" [disable]="true" >
          <h4>Tab 2</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
      </sys-tab>
      <sys-tab tabTitle="Tab 3" icon="delete">
          <h4>Tab 3</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
      </sys-tab>
    </sys-tabs>
  </sys-card-content>
</sys-card>`,
});


export const CardWithVerticalTab: Story<SysCardComponent> = (args) => ({
  props: args,
  template: `
  <sys-card title="Card Title"   subTitle="Sub Title" >
  <sys-CardHeader-action>
    <sys-button icon="group_add"  class="" [iconBtn]="true" > </sys-button>
  </sys-CardHeader-action>
  <sys-card-content>
    <sys-tabs  [vertical]="true">
      <sys-tab tabTitle="Tab 1" [active]="true" icon="tab">
        <h4>Tab 1</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
      </sys-tab>
      <sys-tab tabTitle="Disable Tab" icon="edit" [disable]="true" >
          <h4>Tab 2</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
      </sys-tab>
      <sys-tab tabTitle="Tab 3" icon="delete">
          <h4>Tab 3</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
      </sys-tab>
    </sys-tabs>
  </sys-card-content>
</sys-card>`,
});
