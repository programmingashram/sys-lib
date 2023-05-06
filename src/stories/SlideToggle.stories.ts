// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, Story, moduleMetadata} from "@storybook/angular";
import {MatIconModule} from '@angular/material/icon'
import { SysButtonComponent, SysCardComponent, SysHeaderComponent, SysSlideComponent, sysDesignModule } from 'projects/sys-lib/src/public-api';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'sys-design/SysSlide',
  component: SysSlideComponent,
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


export const DefaultSlide: Story<SysSlideComponent> = (args) => ({
  props: args,
  template: `
  <sys-slide type="checkbox" [selected]="true"></sys-slide>`,
});


export const MultiVeriant: Story<SysSlideComponent> = (args) => ({
  props: args,
  template: `
  <sys-slide type="checkbox"  formControlName="acceptTerms" [selected]="true"></sys-slide>
  <sys-slide type="checkbox" [accent]="true"  formControlName="acceptTerms" [selected]="true"></sys-slide>
  <sys-slide type="checkbox" [success]="true" [selected]="true"></sys-slide>
  <sys-slide type="checkbox" [danger]="true"   [selected]="true"></sys-slide>`,
});

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args

