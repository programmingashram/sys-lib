// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, Story, moduleMetadata} from "@storybook/angular";
import {MatIconModule} from '@angular/material/icon'
import { SysButtonComponent, SysCardComponent, SysHeaderComponent, SysRadioComponent, SysSlideComponent, sysDesignModule } from 'projects/sys-lib/src/public-api';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'sys-design/SysRadio',
  component: SysRadioComponent,
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


export const Radio: Story<SysRadioComponent> = (args) => ({
  props: args,
  template: `
  <sys-radio type="radio" value="value4"  label="Radio"  [selected]="true"></sys-radio>
  <sys-radio type="radio" value="value1"  label="Radio" [danger]="true"  [selected]="true"></sys-radio>`,
});

export const RadioGroup: Story<SysRadioComponent> = (args) => ({
  props: args,
  template: `
  <sys-radio-group (radioSelected)="onOptionSelected($event)">
    <sys-radio type="radio" value="value4" formControlName="radio1"  label="One"  [selected]="true"></sys-radio>
    <sys-radio type="radio"  value="value5" formControlName="radio2" label="Disable" [disable]="true" [danger]="true" ></sys-radio>
    <sys-radio type="radio" value="value6" formControlName="radio1"  label="Three"  [selected]="true"></sys-radio>
    <sys-radio type="radio"  value="value7" formControlName="radio2" label="Forth" [danger]="true" ></sys-radio>
  </sys-radio-group>`,
});


// export const MultiVeriant: Story<SysRadioComponent> = (args) => ({
//   props: args,
//   template: `
//   <sys-slide type="checkbox"  formControlName="acceptTerms" [selected]="true"></sys-slide>
//   <sys-slide type="checkbox" [accent]="true"  formControlName="acceptTerms" [selected]="true"></sys-slide>
//   <sys-slide type="checkbox" [success]="true" [selected]="true"></sys-slide>
//   <sys-slide type="checkbox" [danger]="true"   [selected]="true"></sys-slide>`,
// });

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args

