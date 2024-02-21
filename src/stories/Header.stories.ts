// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, Story, moduleMetadata} from "@storybook/angular";
import {MatIconModule} from '@angular/material/icon'
import { SysButtonComponent, SysCardComponent, SysHeaderComponent, sysDesignModule } from 'projects/sys-lib/src/public-api';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'sys-design/SysHeader',
  component: SysHeaderComponent,
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



export const HeaderDefault: Story<SysHeaderComponent> = (args) => ({
  props: args,
  template: `
  <sys-header logo="Sys Design" >
    <sys-button icon="attachment" class="rounded"  [iconBtn]="true" ></sys-button>
  </sys-header>`,
});

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args

