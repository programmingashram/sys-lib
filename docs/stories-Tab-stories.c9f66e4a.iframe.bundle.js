"use strict";(self.webpackChunksys_design=self.webpackChunksys_design||[]).push([[864],{"./src/stories/Tab.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardWithTab:()=>CardWithTab,CardWithVerticalTab:()=>CardWithVerticalTab,DefaultTab:()=>DefaultTab,VerticalTab:()=>VerticalTab,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/material/fesm2020/icon.mjs"),projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/sys-lib/src/lib/sys-lib.module.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"sys-design/SysTab",component:__webpack_require__("./projects/sys-lib/src/lib/sys-tab/sys-tab.component.ts").$,parameters:{controls:{sort:"requiredFirst"}},options:{},argTypes:{},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[],imports:[projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.r,_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.Ps]})]},DefaultTab=args=>({props:args,template:'\n  <sys-tabs>\n  <sys-tab tabTitle="Tab 1" [active]="true" icon="person_add">\n    <h4>Tab 1</h4>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n  </sys-tab>\n  <sys-tab tabTitle="Disable Tab" icon="edit" [disable]="true" >\n    <h4>Tab 2</h4>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n  </sys-tab>\n  <sys-tab tabTitle="Tab 3" icon="delete">\n    <h4>Tab 3</h4>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n  </sys-tab>\n  <sys-tab tabTitle="Tab 4" icon="favorite">\n  <h4>Tab 4</h4>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n  </sys-tab>\n</sys-tabs>\n\n   '}),VerticalTab=args=>({props:args,template:'\n  <sys-tabs [vertical]="true">\n    <sys-tab tabTitle="Tab 1" [active]="true" icon="tab">\n      <h4>Tab 1</h4>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n    </sys-tab>\n    <sys-tab tabTitle="Disable Tab" icon="edit" [disable]="true" >\n        <h4>Tab 2</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n    </sys-tab>\n    <sys-tab tabTitle="Tab 3" icon="delete">\n        <h4>Tab 3</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n    </sys-tab>\n  </sys-tabs>'}),CardWithTab=args=>({props:args,template:'\n  <sys-card title="Card Title"  [divider]="true" subTitle="Sub Title" >\n  <sys-CardHeader-action>\n    <sys-button icon="favorite"  [iconBtn]="true" > </sys-button>\n  </sys-CardHeader-action>\n  <sys-card-content>\n    <sys-tabs >\n      <sys-tab tabTitle="Tab 1" [active]="true" icon="tab">\n        <h4>Tab 1</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n      </sys-tab>\n      <sys-tab tabTitle="Disable Tab" icon="edit" [disable]="true" >\n          <h4>Tab 2</h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n      </sys-tab>\n      <sys-tab tabTitle="Tab 3" icon="delete">\n          <h4>Tab 3</h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n      </sys-tab>\n    </sys-tabs>\n  </sys-card-content>\n</sys-card>'}),CardWithVerticalTab=args=>({props:args,template:'\n  <sys-card title="Card Title"   subTitle="Sub Title" >\n  <sys-CardHeader-action>\n    <sys-button icon="group_add"  class="" [iconBtn]="true" > </sys-button>\n  </sys-CardHeader-action>\n  <sys-card-content>\n    <sys-tabs  [vertical]="true">\n      <sys-tab tabTitle="Tab 1" [active]="true" icon="tab">\n        <h4>Tab 1</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n      </sys-tab>\n      <sys-tab tabTitle="Disable Tab" icon="edit" [disable]="true" >\n          <h4>Tab 2</h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n      </sys-tab>\n      <sys-tab tabTitle="Tab 3" icon="delete">\n          <h4>Tab 3</h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo in quaerat qui eos eius, dolores illum vita</p>\n      </sys-tab>\n    </sys-tabs>\n  </sys-card-content>\n</sys-card>'})}}]);