"use strict";(self.webpackChunksys_design=self.webpackChunksys_design||[]).push([[16],{"./src/stories/Card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardWithActions:()=>CardWithActions,CardWithCTA:()=>CardWithCTA,DefaultCard:()=>DefaultCard,HorizentalCard:()=>HorizentalCard,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/material/fesm2020/icon.mjs"),projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/sys-lib/src/lib/sys-card/sys-card.component.ts"),projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/sys-lib/src/lib/sys-lib.module.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"sys-design/SysCard",component:projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.n,parameters:{controls:{sort:"requiredFirst"}},options:{},argTypes:{},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[],imports:[projects_sys_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.r,_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.Ps]})]},DefaultCard=args=>({props:args,template:'\n  <sys-card title="Card Title" [divider]="true" subTitle="Sub Title">\n    <sys-card-content>\n        <p>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere deserunt, similique alias voluptatem a incidunt consectetur tenetur sequi soluta blanditiis esse eius, obcaecati quod aspernatur, praesentium magnam cumque sit.\n        </p>\n    </sys-card-content>\n\n  </sys-card>\n\n   '}),CardWithCTA=args=>({props:args,template:'\n  <sys-card title="Card Title" [divider]="true" subTitle="Sub Title" icon="settings">\n    <sys-card-content>\n      <p>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere deserunt, similique alias voluptatem a incidunt consectetur tenetur sequi soluta blanditiis esse eius, obcaecati quod aspernatur, praesentium magnam cumque sit.\n      </p>\n    </sys-card-content>\n\n    <sys-card-action>\n      <sys-button icon="cancel" class="textBtn" color="error">\n        Cancel\n      </sys-button>\n\n      <sys-button icon="check" class="textBtn" color="olive">\n        Accept\n      </sys-button>\n    </sys-card-action>\n  </sys-card>'}),CardWithActions=args=>({props:args,template:'\n    <div style="width: 100%;">\n    <sys-card title="Card Title" preIcon="account_circle" [flatImage]="true" subTitle="Sub Title" icon="favorite_border" cardImg="https://clicxy.com/wp-content/uploads/2016/04/dummy-post-horisontal.jpg">\n        <sys-card-content>\n          <p>\n\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere deserunt,\n          </p>\n        </sys-card-content>\n        <sys-card-action>\n          <sys-button icon="cancel" class="textBtn" color="error">\n            Cancel\n          </sys-button>\n\n          <sys-button icon="check" class="textBtn" color="olive">\n            Accept\n          </sys-button>\n        </sys-card-action>\n      </sys-card>\n    </div>\n  '}),HorizentalCard=args=>({props:args,template:'\n  <sys-card title="Card Title" subTitle="Sub Title" [horigentalCard]="true" >\n    <sys-card-content>\n        <p>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere deserunt, similique alias\n        </p>\n    </sys-card-content>\n\n  </sys-card>'})}}]);