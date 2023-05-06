// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, Story, moduleMetadata} from "@storybook/angular";
import {MatIconModule} from '@angular/material/icon'
import { SysAccordionComponent, SysDialogComponent, sysDesignModule } from 'projects/sys-lib/src/public-api';
import { SysAlertComponent } from "projects/sys-lib/src/lib/sys-alert/sys-alert.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'sys-design/SysAlerts',
  component: SysAlertComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  options: {
  },
  argTypes: {
  },

  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [sysDesignModule],
    }),
  ]
} as Meta;


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const WarningAlert: Story<SysAlertComponent> = (args) => ({
  props: args,
  template: `
  <sys-alert  alertIcon="delete">
    Are u want to Delete this item ?
    <sys-alert-action>
      <sys-button  icon="cancel" class="textBtn" color="olive" (click)="alertSuccessOpen()">
        Yes
      </sys-button>
      <sys-button icon="check" class="textBtn" color="error"  (click)="closeAlert()">
        No
      </sys-button>
    </sys-alert-action>
  </sys-alert>
   `,
});

export const SuccessAlert: Story<SysAlertComponent> = (args) => ({
  props: args,
  template: `
  <sys-alert  alertIcon="check_circle">
    Item Successfully Deleted !!

    <sys-alert-action>
      <sys-button  icon="cancel" class="textBtn" color="olive" (click)="closeSuccess()">
        Close
      </sys-button>
    </sys-alert-action>
  </sys-alert>
   `,
});

