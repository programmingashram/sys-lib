// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, Story, moduleMetadata} from "@storybook/angular";
import {MatIconModule} from '@angular/material/icon'
import { SysButtonComponent, sysModule } from 'projects/sys-lib/src/public-api';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'sys-design/SysButton',
  component: SysButtonComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  options: {
  },
  argTypes: {
    'color':{
      control:{
        type: 'text',
        labels:{
            'accent': 'Accent',
            'olive': 'Olive',
            'alert':'Alert',
            'error':'Error',
            'secondary': 'Secondary'
        }
      },
      defaultValue:'accent'
    },

  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [sysModule, MatIconModule],
    }),
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SysButtonComponent> = (args) => ({
  props: args,
  template: `
    <div style="display: block; gap: 0px 10px;">
    <sys-button  color="accent">
    sys button
  </sys-button>
  <br>
  <sys-button  color="olive">
    sys button
  </sys-button>
  <br>
  <sys-button  color="alert">
    sys button
  </sys-button>
  <br>
  <sys-button  color="error">
    sys button
  </sys-button>
  <br>
  <sys-button  color="secondary">
    sys button
  </sys-button>
    </div>

   `,
});
const Template2: Story<SysButtonComponent> = (args) => ({
  props: args,
  template: `
    <div style="display: block; gap: 0px 10px;">
      <sys-button  class="textBtn">
        SYS Button
      </sys-button>
    <br>
      <sys-button  class="textBtn"  color="accent">
        sys button
      </sys-button>
      <br>
      <sys-button class="textBtn" color="olive">
          sys button
      </sys-button>
 <br>
      <sys-button  class="textBtn" color="alert">
          sys button
      </sys-button>
      <br>
      <sys-button class="textBtn" color="error">
          sys button
      </sys-button>
      <br>
      <sys-button  class="textBtn" color="secondary">
          sys button
      </sys-button>
    </div>`,
});
// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default = Template.bind({});
Default.args = {

};

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Icon = Template2.bind({});
Icon.args = {

};
