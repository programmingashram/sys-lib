// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, Story, moduleMetadata} from "@storybook/angular";
import {MatIconModule} from '@angular/material/icon'
import { SysButtonComponent, sysDesignModule } from 'projects/sys-lib/src/public-api';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'sys-design/SysButton',
  component: SysButtonComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  options: {
  },
  argTypes: {
    color: { control: "select", options: ["accent", "olive", "alert", "error", "secondary"] },
    type: { control: "select", options: ["Default","outline", "textBtn"] },
    class: { control: "select", options: ["Default","rounded"] },
    content: { control: "text"}
  },

  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [sysDesignModule, MatIconModule],
    }),
  ]
} as Meta;


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story<SysButtonComponent> = (args) => ({
  props: args,
  template: `
    <sys-button icon="home" class="${args.type} ${args["class"]}"  color="${args.color}">
      ${args["content"]}
    </sys-button>
   `,
});


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const OutlineButton: Story<SysButtonComponent> = (args) => ({
  props: args,
  template: `
    <sys-button icon="home" class="outline">
      SYS Button
    </sys-button>

   `,
});
export const TextButton: Story<SysButtonComponent> = (args) => ({
  props: args,
  template: `
      <sys-button icon="settings" color="accent"  class="textBtn">
        SYS Button
      </sys-button>
   `,
});


export const IconButton: Story<SysButtonComponent> = (args) => ({
  props: args,
  template: `
      <sys-button icon="favorite"  [iconBtn]="true" color="alert"> </sys-button>
   `,
});
