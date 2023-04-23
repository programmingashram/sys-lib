// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, Story, moduleMetadata} from "@storybook/angular";
import {MatIconModule} from '@angular/material/icon'
import { SysButtonComponent, SysCardComponent, sysDesignModule } from 'projects/sys-lib/src/public-api';
import { SysTabComponent } from "projects/sys-lib/src/lib/sys-tab/sys-tab.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'sys-design/SysTab',
  component: SysTabComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  options: {
  },
  argTypes: {


  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [sysDesignModule, MatIconModule],
    }),
  ]
} as Meta;


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const DefaultTab: Story<SysCardComponent> = (args) => ({
  props: args,
  template: `
    <sys-tabs>
        <sys-tab tabTitle="Tab 1" [active]="true" icon="tab">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vitae earum blanditiis enim dolorem sit aut nobis doloribus praesentium assumenda exercitationem laudantium!</p>
            <sys-button icon="send" color="accent" >
                sys button
            </sys-button>
        </sys-tab>
        <sys-tab tabTitle="Disable Tab" icon="edit">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
        </sys-tab>
        <sys-tab tabTitle="Tab 3" icon="delete">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
        </sys-tab>
    </sys-tabs>

   `,
});
export const DisabledTab: Story<SysCardComponent> = (args) => ({
  props: args,
  template: `
    <sys-tabs>
        <sys-tab tabTitle="Tab 1" [active]="true" icon="tab">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vitae earum blanditiis enim dolorem sit aut nobis doloribus praesentium assumenda exercitationem laudantium!</p>
            <sys-button icon="send" color="accent" >
                sys button
            </sys-button>
        </sys-tab>
        <sys-tab tabTitle="Disable Tab" icon="edit" [disable]="true" >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
        </sys-tab>
        <sys-tab tabTitle="Tab 3" icon="delete">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>
        </sys-tab>
    </sys-tabs>`,
});

