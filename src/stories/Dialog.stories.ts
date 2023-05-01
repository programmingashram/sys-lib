// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, Story, moduleMetadata} from "@storybook/angular";
import {MatIconModule} from '@angular/material/icon'
import { SysAccordionComponent, SysDialogComponent, sysDesignModule } from 'projects/sys-lib/src/public-api';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'sys-design/SysDialog',
  component: SysDialogComponent,
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
export const DefaultDialog: Story<SysDialogComponent> = (args) => ({
  props: args,
  template: `
  <sys-dialog  title="Dialog Box Title" (closeDialog)="onCancel()">
    <sys-dialog-header>
      <!-- Dialog 1 Title <button (click)="openDialog2()">Add</button> -->
    </sys-dialog-header>
    <sys-dialog-body>
        <h3>Heading</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit accusantium consequatur eius, a voluptates quae fugiat nemo dicta nam perferendis culpa mollitia velit qui labore. Magnam culpa adipisci atque!
        </p>
    </sys-dialog-body>
    <sys-dialog-action>
      <sys-button (click)="onCancel()" icon="cancel" class="textBtn" color="error">
        Cancel
      </sys-button>
      <sys-button (click)="onConfirm()" icon="check" class="textBtn" color="olive">
        Ok
      </sys-button>
    </sys-dialog-action>
  </sys-dialog>

   `,
});

export const RightDialog: Story<SysDialogComponent> = (args) => ({
  props: args,
  template: `
  <sys-dialog  title="Dialog Box Title" [shiftRight]="true" (closeDialog)="onCancel()">
    <sys-dialog-header>
      <!-- Dialog 1 Title <button (click)="openDialog2()">Add</button> -->
    </sys-dialog-header>
    <sys-dialog-body>
        <h3>Heading</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit accusantium consequatur eius, a voluptates quae fugiat nemo dicta nam perferendis culpa mollitia velit qui labore. Magnam culpa adipisci atque!
        </p>
    </sys-dialog-body>
    <sys-dialog-action>
      <sys-button (click)="onCancel()" icon="cancel" class="textBtn" color="error">
        Cancel
      </sys-button>
      <sys-button (click)="onConfirm()" icon="check" class="textBtn" color="olive">
        Ok
      </sys-button>
    </sys-dialog-action>
  </sys-dialog>

   `,
});


export const ScrollDialog: Story<SysDialogComponent> = (args) => ({
  props: args,
  template: `
  <sys-dialog  title="Dialog Box Title" (closeDialog)="onCancel3()" [scroll]="true">
      <sys-dialog-header>
        <!-- Dialog 1 Title <button (click)="openDialog2()">Add</button> -->
      </sys-dialog-header>
      <sys-dialog-body>
          <h3>Heading 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit accusantium consequatur eius, a voluptates quae fugiat nemo dicta nam perferendis culpa mollitia velit qui labore. Magnam culpa adipisci atque!
          </p>
          <h3>Heading 2 </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit accusantium consequatur eius, a voluptates quae fugiat nemo dicta nam perferendis culpa mollitia velit qui labore. Magnam culpa adipisci atque!
          </p>
          <h3>Heading 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit accusantium consequatur eius, a voluptates quae fugiat nemo dicta nam perferendis culpa mollitia velit qui labore. Magnam culpa adipisci atque!
          </p>
          <h3>Heading 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit accusantium consequatur eius, a voluptates quae fugiat nemo dicta nam perferendis culpa mollitia velit qui labore. Magnam culpa adipisci atque!
          </p>

          <h3>Heading 5</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit accusantium consequatur eius, a voluptates quae fugiat nemo dicta nam perferendis culpa mollitia velit qui labore. Magnam culpa adipisci atque!
          </p>
      </sys-dialog-body>

      <sys-dialog-action>
        <sys-button (click)="onCancel3()" icon="cancel" class="textBtn" color="error">
          Cancel
        </sys-button>
        <sys-button (click)="onConfirm3()" icon="check" class="textBtn" color="olive">
          Ok
        </sys-button>
      </sys-dialog-action>
    </sys-dialog>
   `,
});


