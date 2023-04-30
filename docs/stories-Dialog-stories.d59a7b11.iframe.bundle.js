"use strict";(self.webpackChunksys_design=self.webpackChunksys_design||[]).push([[476],{"./src/stories/Dialog.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultDialog:()=>DefaultDialog,RightDialog:()=>RightDialog,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/sys-lib/src/lib/sys-dialog/sys-dialog.component.ts"),projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/sys-lib/src/lib/sys-lib.module.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"sys-design/SysDialog",component:projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.e,parameters:{controls:{sort:"requiredFirst"}},options:{},argTypes:{},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[],imports:[projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.r]})]},DefaultDialog=args=>({props:args,template:'\n  <sys-dialog  title="Dialog Box Title" (closeDialog)="onCancel()">\n    <sys-dialog-header>\n      \x3c!-- Dialog 1 Title <button (click)="openDialog2()">Add</button> --\x3e\n    </sys-dialog-header>\n    <sys-dialog-body>\n        <h3>Heading</h3>\n        <p>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit accusantium consequatur eius, a voluptates quae fugiat nemo dicta nam perferendis culpa mollitia velit qui labore. Magnam culpa adipisci atque!\n        </p>\n    </sys-dialog-body>\n    <sys-dialog-action>\n      <sys-button (click)="onCancel()" icon="cancel" class="textBtn" color="error">\n        Cancel\n      </sys-button>\n      <sys-button (click)="onConfirm()" icon="check" class="textBtn" color="olive">\n        Ok\n      </sys-button>\n    </sys-dialog-action>\n  </sys-dialog>\n\n   '}),RightDialog=args=>({props:args,template:'\n  <sys-dialog  title="Dialog Box Title" [shiftRight]="true" (closeDialog)="onCancel()">\n    <sys-dialog-header>\n      \x3c!-- Dialog 1 Title <button (click)="openDialog2()">Add</button> --\x3e\n    </sys-dialog-header>\n    <sys-dialog-body>\n        <h3>Heading</h3>\n        <p>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit accusantium consequatur eius, a voluptates quae fugiat nemo dicta nam perferendis culpa mollitia velit qui labore. Magnam culpa adipisci atque!\n        </p>\n    </sys-dialog-body>\n    <sys-dialog-action>\n      <sys-button (click)="onCancel()" icon="cancel" class="textBtn" color="error">\n        Cancel\n      </sys-button>\n      <sys-button (click)="onConfirm()" icon="check" class="textBtn" color="olive">\n        Ok\n      </sys-button>\n    </sys-dialog-action>\n  </sys-dialog>\n\n   '})}}]);