// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, Story, moduleMetadata} from "@storybook/angular";
import {MatIconModule} from '@angular/material/icon'
import { SysButtonComponent, SysCardComponent, SysHeaderComponent, SysInputComponent, sysDesignModule } from 'projects/sys-lib/src/public-api';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'sys-design/SysInput',
  component: SysInputComponent,
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



export const Input: Story<SysInputComponent> = (args) => ({
  props: args,
  template: `
  <sys-input  type="text" label="label" value=""  placeholder="Placeholder values" ></sys-input>
  `,
});

export const InputWithMessage: Story<SysInputComponent> = (args) => ({
  props: args,
  template: `
      <sys-input  type="text" label="label" value=""  placeholder="Placeholder values" errorIcon="error" errorMessege="Error messege" successIcon="check_circle" preIcon="edit" successMessege="Success Message" sampleIcon="sort_by_alpha" sampleMessege="Sample Text"></sys-input>
  `,
});

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args

