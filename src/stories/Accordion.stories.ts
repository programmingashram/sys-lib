// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

// import {Meta, Story, moduleMetadata} from "@storybook/angular";
// import {MatIconModule} from '@angular/material/icon'
// import { SysAccordionComponent, sysDesignModule } from 'projects/sys-lib/src/public-api';



// // More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
// export default {
//   title: 'sys-design/SysAccordion',
//   component: SysAccordionComponent,
//   parameters: { controls: { sort: 'requiredFirst' } },
//   // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
//   options: {
//   },
//   argTypes: {

//   },

//   decorators: [
//     moduleMetadata({
//       declarations: [],
//       imports: [sysDesignModule, MatIconModule],
//     }),
//   ]
// } as Meta;


// // More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
// export const Default: Story<SysAccordionComponent> = (args) => ({
//   props: args,
//   template: `
//   <sys-accordion>
//       <sys-accordion-item label="Expension Panel 1" expendless="close" expendMore="add"  discription="sit amet consectetur adipisicing elit. Veniam ab nostru" >
//         <sys-panel-header>
//           <sys-button [iconBtn]="true"  icon="groups">
//           </sys-button>
//         </sys-panel-header>
//         <sys-accordion-body>
//             <h4>Tab 3</h4>
//             <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ab nostrum consectetur modi nisi nesciunt saepe eius aperiam, officia laudantium excepturi, ullam eum totam, corporis error id vero porro perspiciatis?
//             </p>
//         </sys-accordion-body>
//       </sys-accordion-item>
//       <sys-accordion-item  label="Expension Panel 2">
//         <sys-accordion-body>
//           <h4>Tab 2</h4>
//           <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ab nostrum consectetur modi nisi nesciunt saepe eius aperiam, officia laudantium excepturi, ullam eum totam, corporis error id vero porro perspiciatis?
//           </p>
//         </sys-accordion-body>
//       </sys-accordion-item>
//       <sys-accordion-item [disable]="true" label="Expension Panel 2">
//         <sys-accordion-body>
//           <h4>Tab 2</h4>
//           <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ab nostrum consectetur modi nisi nesciunt saepe eius aperiam, officia laudantium excepturi, ullam eum totam, corporis error id vero porro perspiciatis?
//           </p>
//         </sys-accordion-body>
//       </sys-accordion-item>
//     </sys-accordion>
//    `,
// });


