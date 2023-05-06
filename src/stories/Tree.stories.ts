// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, Story, moduleMetadata} from "@storybook/angular";
import {MatIconModule} from '@angular/material/icon'
import { SysAccordionComponent, sysDesignModule } from 'projects/sys-lib/src/public-api';
import { SysTreeComponent, TreeNode } from "projects/sys-lib/src/lib/sys-tree/sys-tree.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'sys-design/SysTree',
  component: SysTreeComponent,
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
export const DefaultTree: Story<SysTreeComponent> = (args) => ({
  props: {
    nodes: [
      {
        label: 'Parent 1',
        icon: 'folder',
        children: [
          {
            label: 'Child 1',
            icon: 'folder_open',
            children: [
              { label: 'Child 1', icon: 'picture_as_pdf' },
              { label: 'Child 2', icon: 'picture_as_pdf' },
              { label: 'Child 3', icon: 'picture_as_pdf' },
            ],
          },
          { label: 'Child 2', icon: 'folder_open' },
          { label: 'Child 3', icon: 'folder_open' },
        ],
      },
      {
        label: 'Parent 2',
        icon: 'folder',
        children: [
          {
            label: 'Child 1',
            icon: 'folder_open',
            children: [
              { label: 'Child 1', icon: 'picture_as_pdf' },
              { label: 'Child 2', icon: 'picture_as_pdf' },
              { label: 'Child 3', icon: 'picture_as_pdf' },
            ],
          },
          { label: 'Child 2', icon: 'folder_open' },
          { label: 'Child 3', icon: 'folder_open' },
        ],
      },
    ],
    ...args,
  },
  template: `
    <sys-tree [nodes]="nodes"></sys-tree>
  `,
});


export const CustomIconTree: Story<SysTreeComponent> = (args) => ({
  props: {
    nodes: [
      {
        label: 'Parent 1',
        icon: 'folder',
        children: [
          {
            label: 'Child 1',
            children: [
              { label: 'Child 1', icon: 'picture_as_pdf' },
              { label: 'Child 2', icon: 'picture_as_pdf' },
              { label: 'Child 3', icon: 'picture_as_pdf' },
            ],
          },
          { label: 'Child 2', icon: 'folder_open' },
          { label: 'Child 3', icon: 'folder_open' },
        ],
      },
      {
        label: 'Parent 2',
        icon: 'folder',
        children: [
          {
            label: 'Child 1',
            children: [
              { label: 'Child 1', icon: 'picture_as_pdf' },
              { label: 'Child 2', icon: 'picture_as_pdf' },
              { label: 'Child 3', icon: 'picture_as_pdf' },
            ],
          },
          { label: 'Child 2', icon: 'folder_open' },
          { label: 'Child 3', icon: 'folder_open' },
        ],
      },
    ],
    ...args,
  },
  template: `
    <sys-tree [nodes]="nodes" expendedIcon="subdirectory_arrow_right" defaultIcon="add"></sys-tree>
  `,
});


