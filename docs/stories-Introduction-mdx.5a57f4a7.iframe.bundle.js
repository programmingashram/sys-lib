/*! For license information please see stories-Introduction-mdx.5a57f4a7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunksys_design=self.webpackChunksys_design||[]).push([[799],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/cjs/react.production.min.js":(__unused_webpack_module,exports)=>{var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||B}function F(){}function G(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||B}E.prototype.isReactComponent={},E.prototype.setState=function(a,b){if("object"!=typeof a&&"function"!=typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")},E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")},F.prototype=E.prototype;var H=G.prototype=new F;H.constructor=G,C(H,E.prototype),H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}function O(a){return"object"==typeof a&&null!==a&&a.$$typeof===l}var P=/\/+/g;function Q(a,b){return"object"==typeof a&&null!==a&&null!=a.key?function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,(function(a){return b[a]}))}(""+a.key):b.toString(36)}function R(a,b,e,d,c){var k=typeof a;"undefined"!==k&&"boolean"!==k||(a=null);var h=!1;if(null===a)h=!0;else switch(k){case"string":case"number":h=!0;break;case"object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return c=c(h=a),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",(function(a){return a}))):null!=c&&(O(c)&&(c=function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;if(h=0,d=""===d?".":d+":",I(a))for(var g=0;g<a.length;g++){var f=d+Q(k=a[g],g);h+=R(k,b,e,f,c)}else if(f=function A(a){return null===a||"object"!=typeof a?null:"function"==typeof(a=z&&a[z]||a["@@iterator"])?a:null}(a),"function"==typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)h+=R(k=k.value,b,e,f=d+Q(k,g++),c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}function S(a,b,e){if(null==a)return a;var d=[],c=0;return R(a,d,"","",(function(a){return b.call(e,a,c++)})),d}function T(a){if(-1===a._status){var b=a._result;(b=b()).then((function(b){0!==a._status&&-1!==a._status||(a._status=1,a._result=b)}),(function(b){0!==a._status&&-1!==a._status||(a._status=2,a._result=b)})),-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result}var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,(function(){b.apply(this,arguments)}),e)},count:function(a){var b=0;return S(a,(function(){b++})),b},toArray:function(a){return S(a,(function(a){return a}))||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}},exports.Component=E,exports.Fragment=p,exports.Profiler=r,exports.PureComponent=G,exports.StrictMode=q,exports.Suspense=w,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,exports.cloneElement=function(a,b,e){if(null==a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){if(void 0!==b.ref&&(k=b.ref,h=K.current),void 0!==b.key&&(c=""+b.key),a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}},exports.createContext=function(a){return(a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:t,_context:a},a.Consumer=a},exports.createElement=M,exports.createFactory=function(a){var b=M.bind(null,a);return b.type=a,b},exports.createRef=function(){return{current:null}},exports.forwardRef=function(a){return{$$typeof:v,render:a}},exports.isValidElement=O,exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}},exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}},exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}},exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},exports.useCallback=function(a,b){return U.current.useCallback(a,b)},exports.useContext=function(a){return U.current.useContext(a)},exports.useDebugValue=function(){},exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)},exports.useEffect=function(a,b){return U.current.useEffect(a,b)},exports.useId=function(){return U.current.useId()},exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)},exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)},exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)},exports.useMemo=function(a,b){return U.current.useMemo(a,b)},exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)},exports.useRef=function(a){return U.current.useRef(a)},exports.useState=function(a){return U.current.useState(a)},exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)},exports.useTransition=function(){return U.current.useTransition()},exports.version="18.2.0"},"./node_modules/react/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react.production.min.js")},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/Introduction.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",a:"a",strong:"strong",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://programmingashram.github.io/sys-lib/?path=/docs/example-introduction--docs",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{width:"60px",height:"60px",src:"https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci85ZTczNzEwN2YxMmNjOTgwNWQ4ZmYzNTIwMjNhMTQ0Nz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.ny7boq-PD5nvRT68fo3aEoNlsUIhOUWtm8__9YQhghk",align:"right"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"sys-design-2023",children:"Sys Design 2023"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"SysDesign2023 is a front-end library that provides a set of reusable components and utility functions for building modern web applications. It is built on top of popular front-end frameworks  Angular."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"⚡ Built for speed"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"⬇️ No need to import modules for components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"⚖️ Light-weight while implementing all sys features from the supported scss/css custimization"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"🌐 Works in a browser, on a server, or from a command line interface (CLI)"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"demo",children:"Demo"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Checkout the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://programmingashram.github.io/sysDesign-Sample/",target:"_blank",rel:"nofollow noopener noreferrer",children:"demo page"})," to see sysDesign in action ⛹️"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"docs",children:"Docs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Our ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://programmingashram.github.io/sys-lib/",target:"_blank",rel:"nofollow noopener noreferrer",children:"documentation pages"})," are also rendered using SysDesign2023 💯"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Also read about:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"support",children:"Support"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Our Github Discuusion for your support , if you have any difficulty, confusion or any other implimentation issue with sysdesign2023 you can ping your questions in our ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/SYS-DESIGN-2023/Support--SYSDESIGN2023/discussions",target:"_blank",rel:"nofollow noopener noreferrer",children:"disccusion Page"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Node.js:"})," Only ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://nodejs.org/en/about/releases/",target:"_blank",rel:"nofollow noopener noreferrer",children:"current and LTS"})," Node.js versions are supported. End of life Node.js versions may become incompatible with Marked at any point in time."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Browser:"})," All Browser supported :)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Add in your project:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-sh",children:"npm i sysdesign2023\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"After Install sysdesign2023 you also need to install material for icons:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-sh",children:"ng add @angular/material\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Now import sysDesignModule from sysdesign2023 in your app.module.ts"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-sh",children:"import { NgModule } from '@angular/core';\r\nimport { BrowserModule } from '@angular/platform-browser';\r\nimport { AppRoutingModule } from './app-routing.module';\r\nimport { AppComponent } from './app.component';\r\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\r\nimport { MatIconModule } from '@angular/material/icon';\r\nimport { sysDesignModule } from 'sysdesign2023';\r\n\r\n@NgModule({\r\n  declarations: [\r\n    AppComponent,\r\n\r\n  ],\r\n  imports: [\r\n    BrowserModule,\r\n    AppRoutingModule,\r\n    sysDesignModule,\r\n    MatIconModule,\r\n    BrowserAnimationsModule\r\n  ],\r\n  providers: [],\r\n  bootstrap: [AppComponent]\r\n})\r\nexport class AppModule { }\r\n\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Add Card"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'  <sys-card title="Card Title" [divider]="true" subTitle="Sub Title">\r\n      <sys-card-content>\r\n          <p>\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere     deserunt, similique alias voluptatem a incidunt consectetur tenetur sequi<br> soluta blanditiis esse eius, obcaecati quod aspernatur, praesentium magnam cumque sit.\r\n          </p>\r\n      </sys-card-content>\r\n    </sys-card>\n'})})]})}}}}]);