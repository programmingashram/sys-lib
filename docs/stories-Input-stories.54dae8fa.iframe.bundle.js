"use strict";(self.webpackChunksys_design=self.webpackChunksys_design||[]).push([[437],{"./src/stories/Input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Input:()=>Input,InputWithMessage:()=>InputWithMessage,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/material/fesm2020/icon.mjs"),projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/sys-lib/src/lib/sys-input/sys-input.component.ts"),projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/sys-lib/src/lib/sys-lib.module.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"sys-design/SysInput",component:projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.P,parameters:{controls:{sort:"requiredFirst"}},options:{},argTypes:{},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[],imports:[projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.r,_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.Ps]})]},Input=args=>({props:args,template:'\n  <sys-input  type="text" label="label" value=""  placeholder="Placeholder values" ></sys-input>\n  '}),InputWithMessage=args=>({props:args,template:'\n      <sys-input  type="text" label="label" value=""  placeholder="Placeholder values" errorIcon="error" errorMessege="Error messege" successIcon="check_circle" preIcon="edit" successMessege="Success Message" sampleIcon="sort_by_alpha" sampleMessege="Sample Text"></sys-input>\n  '})}}]);