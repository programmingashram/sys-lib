"use strict";(self.webpackChunksys_design=self.webpackChunksys_design||[]).push([[884],{"./src/stories/Tree.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomIconTree:()=>CustomIconTree,DefaultTree:()=>DefaultTree,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/sys-lib/src/lib/sys-lib.module.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"sys-design/SysTree",component:__webpack_require__("./projects/sys-lib/src/lib/sys-tree/sys-tree.component.ts").a,parameters:{controls:{sort:"requiredFirst"}},options:{},argTypes:{},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[],imports:[projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.r]})]},DefaultTree=args=>({props:{nodes:[{label:"Parent 1",icon:"folder",children:[{label:"Child 1",icon:"folder_open",children:[{label:"Child 1",icon:"picture_as_pdf"},{label:"Child 2",icon:"picture_as_pdf"},{label:"Child 3",icon:"picture_as_pdf"}]},{label:"Child 2",icon:"folder_open"},{label:"Child 3",icon:"folder_open"}]},{label:"Parent 2",icon:"folder",children:[{label:"Child 1",icon:"folder_open",children:[{label:"Child 1",icon:"picture_as_pdf"},{label:"Child 2",icon:"picture_as_pdf"},{label:"Child 3",icon:"picture_as_pdf"}]},{label:"Child 2",icon:"folder_open"},{label:"Child 3",icon:"folder_open"}]}],...args},template:'\n    <sys-tree [nodes]="nodes"></sys-tree>\n  '}),CustomIconTree=args=>({props:{nodes:[{label:"Parent 1",icon:"folder",children:[{label:"Child 1",children:[{label:"Child 1",icon:"picture_as_pdf"},{label:"Child 2",icon:"picture_as_pdf"},{label:"Child 3",icon:"picture_as_pdf"}]},{label:"Child 2",icon:"folder_open"},{label:"Child 3",icon:"folder_open"}]},{label:"Parent 2",icon:"folder",children:[{label:"Child 1",children:[{label:"Child 1",icon:"picture_as_pdf"},{label:"Child 2",icon:"picture_as_pdf"},{label:"Child 3",icon:"picture_as_pdf"}]},{label:"Child 2",icon:"folder_open"},{label:"Child 3",icon:"folder_open"}]}],...args},template:'\n    <sys-tree [nodes]="nodes" expendedIcon="subdirectory_arrow_right" defaultIcon="add"></sys-tree>\n  '})}}]);