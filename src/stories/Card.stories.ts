// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, Story, moduleMetadata} from "@storybook/angular";
import {MatIconModule} from '@angular/material/icon'
import { SysButtonComponent, SysCardComponent, sysDesignModule } from 'projects/sys-lib/src/public-api';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'sys-design/SysCard',
  component: SysCardComponent,
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
export const DefaultCard: Story<SysCardComponent> = (args) => ({
  props: args,
  template: `
  <sys-card title="Card Title"  subTitle="Sub Title">
    <sys-card-content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere deserunt, similique alias voluptatem a incidunt consectetur tenetur sequi soluta blanditiis esse eius, obcaecati quod aspernatur, praesentium magnam cumque sit.
        </p>
    </sys-card-content>

  </sys-card>

   `,
});
export const CardWithCTA: Story<SysCardComponent> = (args) => ({
  props: args,
  template: `
  <sys-card title="Card Title" subTitle="Sub Title" icon="settings">
    <sys-card-content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere deserunt, similique alias voluptatem a incidunt consectetur tenetur sequi soluta blanditiis esse eius, obcaecati quod aspernatur, praesentium magnam cumque sit.
      </p>
    </sys-card-content>

    <sys-card-action>
      <sys-button icon="cancel" class="textBtn" color="error">
        Cancel
      </sys-button>

      <sys-button icon="check" class="textBtn" color="olive">
        Accept
      </sys-button>
    </sys-card-action>
  </sys-card>`,
});

export const CardWithActions : Story<SysCardComponent> = (args) => ({
  props: args,
  template: `
    <div style="width: 100%;">
    <sys-card title="Card Title" preIcon="account_circle" [flatImage]="true" subTitle="Sub Title" icon="favorite_border" cardImg="https://clicxy.com/wp-content/uploads/2016/04/dummy-post-horisontal.jpg">
        <sys-card-content>
          <p>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere deserunt,
          </p>
        </sys-card-content>
        <sys-card-action>
          <sys-button icon="cancel" class="textBtn" color="error">
            Cancel
          </sys-button>

          <sys-button icon="check" class="textBtn" color="olive">
            Accept
          </sys-button>
        </sys-card-action>
      </sys-card>
    </div>
  `,
});

export const HorizentalCard : Story<SysCardComponent> = (args) => ({
  props: args,
  template: `
  <sys-card title="Card Title" subTitle="Sub Title" [horigentalCard]="true" >
    <sys-card-content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere deserunt, similique alias
        </p>
    </sys-card-content>

  </sys-card>`,
});

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args

