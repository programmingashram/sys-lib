import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, moduleMetadata } from '@storybook/angular';
import { SysButtonComponent } from 'projects/sys-lib/src/public-api';


export default {

  title: 'Components/Button',

  component: SysButtonComponent,
  decorators: [

    moduleMetadata({
      declarations: [SysButtonComponent],
      imports: [BrowserModule, MatIconModule, BrowserAnimationsModule],
    }),
  ],
};
const Template: Story<SysButtonComponent> = () => ({
  component: SysButtonComponent,
  template: `
    <sys-button> SYS Button </sys-button>
`,
});
const Template2: Story<SysButtonComponent> = () => ({
  component: SysButtonComponent,
  template: `
    <sys-button color='accent' icon="home"> SYS Button </sys-button>
`,
});


export const DefaultButton = Template.bind({});
export const IconButton = Template2.bind({});
