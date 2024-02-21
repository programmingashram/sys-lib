/*! For license information please see 10.17658a2b.iframe.bundle.js.LICENSE.txt */
        Backgrounds Addon: could not find the default color "${defaultName}".
        These are the available colors for your story based on your configuration:
        ${availableColors}.
      `)}return"transparent"})(globalsBackgroundColor,backgroundsConfig.values,backgroundsConfig.default)),[backgroundsConfig,globalsBackgroundColor]),isActive=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)((()=>selectedBackgroundColor&&"transparent"!==selectedBackgroundColor),[selectedBackgroundColor]),selector="docs"===context.viewMode?`#anchor--${context.id} .docs-story`:".sb-show-main",backgroundStyles=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)((()=>`\n      ${selector} {\n        background: ${selectedBackgroundColor} !important;\n        ${chunk_GRJZJKJ4_window.matchMedia("(prefers-reduced-motion: reduce)").matches?"":"transition: background-color 0.3s;"}\n      }\n    `),[selectedBackgroundColor,selector]);return(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{let selectorId="docs"===context.viewMode?`addon-backgrounds-docs-${context.id}`:"addon-backgrounds-color";isActive?((selector,css,storyId)=>{let existingStyle=chunk_GRJZJKJ4_document.getElementById(selector);if(existingStyle)existingStyle.innerHTML!==css&&(existingStyle.innerHTML=css);else{let style=chunk_GRJZJKJ4_document.createElement("style");style.setAttribute("id",selector),style.innerHTML=css;let gridStyleSelector="addon-backgrounds-grid"+(storyId?`-docs-${storyId}`:""),existingGridStyle=chunk_GRJZJKJ4_document.getElementById(gridStyleSelector);existingGridStyle?existingGridStyle.parentElement.insertBefore(style,existingGridStyle):chunk_GRJZJKJ4_document.head.appendChild(style)}})(selectorId,backgroundStyles,"docs"===context.viewMode?context.id:null):clearStyles(selectorId)}),[isActive,backgroundStyles,context]),StoryFn()}],parameters={backgrounds:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},globals={backgrounds:null}},"./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{highlightObject:()=>highlightObject,highlightStyle:()=>highlightStyle});var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_=__webpack_require__("@storybook/core-events"),{document:preview_document}=dist.global,highlightStyle=(color="#FF4785",style="dashed")=>`\n  outline: 2px ${style} ${color};\n  outline-offset: 2px;\n  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);\n`,highlightObject=color=>({outline:`2px dashed ${color}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),resetHighlight=()=>{let sheetToBeRemoved=preview_document.getElementById("storybookHighlight");sheetToBeRemoved&&sheetToBeRemoved.parentNode.removeChild(sheetToBeRemoved)};channel.on(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,resetHighlight),channel.on("storybook/highlight/reset",resetHighlight),channel.on("storybook/highlight/add",(infos=>{resetHighlight();let elements=Array.from(new Set(infos.elements)),sheet=preview_document.createElement("style");sheet.setAttribute("id","storybookHighlight"),sheet.innerHTML=elements.map((target=>`${target}{\n          ${highlightStyle(infos.color,infos.style)}\n         }`)).join(" "),preview_document.head.appendChild(sheet)}))},"./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators,globals:()=>globals});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs");function getDocumentWidthAndHeight(){let container=dist.global.document.documentElement,height=Math.max(container.scrollHeight,container.offsetHeight);return{width:Math.max(container.scrollWidth,container.offsetWidth),height}}function setCanvasWidthAndHeight(canvas,context,{width,height}){canvas.style.width=`${width}px`,canvas.style.height=`${height}px`;let scale=dist.global.window.devicePixelRatio;canvas.width=Math.floor(width*scale),canvas.height=Math.floor(height*scale),context.scale(scale,scale)}var state={};function init(){state.canvas||(state=function createCanvas(){let canvas=dist.global.document.createElement("canvas");canvas.id="storybook-addon-measure";let context=canvas.getContext("2d"),{width,height}=getDocumentWidthAndHeight();return setCanvasWidthAndHeight(canvas,context,{width,height}),canvas.style.position="absolute",canvas.style.left="0",canvas.style.top="0",canvas.style.zIndex="2147483647",canvas.style.pointerEvents="none",dist.global.document.body.appendChild(canvas),{canvas,context,width,height}}())}function clear(){state.context&&state.context.clearRect(0,0,state.width,state.height)}var colors={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"},labelPadding=6;function roundedRect(context,{x,y,w,h,r}){x-=w/2,y-=h/2,w<2*r&&(r=w/2),h<2*r&&(r=h/2),context.beginPath(),context.moveTo(x+r,y),context.arcTo(x+w,y,x+w,y+h,r),context.arcTo(x+w,y+h,x,y+h,r),context.arcTo(x,y+h,x,y,r),context.arcTo(x,y,x+w,y,r),context.closePath()}function textWithRect(context,type,{x,y,w,h},text){return roundedRect(context,{x,y,w,h,r:3}),context.fillStyle=`${colors[type]}dd`,context.fill(),context.strokeStyle=colors[type],context.stroke(),context.fillStyle=colors.text,context.fillText(text,x,y),roundedRect(context,{x,y,w,h,r:3}),context.fillStyle=`${colors[type]}dd`,context.fill(),context.strokeStyle=colors[type],context.stroke(),context.fillStyle=colors.text,context.fillText(text,x,y),{x,y,w,h}}function configureText(context,text){context.font="600 12px monospace",context.textBaseline="middle",context.textAlign="center";let metrics=context.measureText(text),actualHeight=metrics.actualBoundingBoxAscent+metrics.actualBoundingBoxDescent;return{w:metrics.width+2*labelPadding,h:actualHeight+2*labelPadding}}function drawLabel(context,measurements,{type,position="center",text},prevRect,external=!1){let{x,y}=function positionCoordinate(position,{padding,border,width,height,top,left}){let contentWidth=width-border.left-border.right-padding.left-padding.right,contentHeight=height-padding.top-padding.bottom-border.top-border.bottom,x=left+border.left+padding.left,y=top+border.top+padding.top;return"top"===position?x+=contentWidth/2:"right"===position?(x+=contentWidth,y+=contentHeight/2):"bottom"===position?(x+=contentWidth/2,y+=contentHeight):"left"===position?y+=contentHeight/2:"center"===position&&(x+=contentWidth/2,y+=contentHeight/2),{x,y}}(position,measurements),{offsetX,offsetY}=function offset(type,position,{margin,border,padding},labelPaddingSize,external){let shift=dir=>0,offsetX=0,offsetY=0,locationMultiplier=external?1:.5,labelPaddingShift=external?2*labelPaddingSize:0;return"padding"===type?shift=dir=>padding[dir]*locationMultiplier+labelPaddingShift:"border"===type?shift=dir=>padding[dir]+border[dir]*locationMultiplier+labelPaddingShift:"margin"===type&&(shift=dir=>padding[dir]+border[dir]+margin[dir]*locationMultiplier+labelPaddingShift),"top"===position?offsetY=-shift("top"):"right"===position?offsetX=shift("right"):"bottom"===position?offsetY=shift("bottom"):"left"===position&&(offsetX=-shift("left")),{offsetX,offsetY}}(type,position,measurements,labelPadding+1,external);x+=offsetX,y+=offsetY;let{w,h}=configureText(context,text);if(prevRect&&function collide(a,b){return Math.abs(a.x-b.x)<Math.abs(a.w+b.w)/2&&Math.abs(a.y-b.y)<Math.abs(a.h+b.h)/2}({x,y,w,h},prevRect)){let adjusted=function overlapAdjustment(position,currentRect,prevRect){return"top"===position?currentRect.y=prevRect.y-prevRect.h-labelPadding:"right"===position?currentRect.x=prevRect.x+prevRect.w/2+labelPadding+currentRect.w/2:"bottom"===position?currentRect.y=prevRect.y+prevRect.h+labelPadding:"left"===position&&(currentRect.x=prevRect.x-prevRect.w/2-labelPadding-currentRect.w/2),{x:currentRect.x,y:currentRect.y}}(position,{x,y,w,h},prevRect);x=adjusted.x,y=adjusted.y}return textWithRect(context,type,{x,y,w,h},text)}function drawFloatingLabel(context,measurements,{type,text}){let{floatingAlignment:floatingAlignment2,extremities}=measurements,x=extremities[floatingAlignment2.x],y=extremities[floatingAlignment2.y],{w,h}=configureText(context,text),{offsetX,offsetY}=function floatingOffset(alignment,{w,h}){let deltaW=.5*w+labelPadding,deltaH=.5*h+labelPadding;return{offsetX:("left"===alignment.x?-1:1)*deltaW,offsetY:("top"===alignment.y?-1:1)*deltaH}}(floatingAlignment2,{w,h});return x+=offsetX,y+=offsetY,textWithRect(context,type,{x,y,w,h},text)}function drawStack(context,measurements,stack,external){let rects=[];stack.forEach(((l,idx)=>{let rect=external&&"center"===l.position?drawFloatingLabel(context,measurements,l):drawLabel(context,measurements,l,rects[idx-1],external);rects[idx]=rect}))}var colors2={margin:"#f6b26ba8",border:"#ffe599a8",padding:"#93c47d8c",content:"#6fa8dca8"},SMALL_NODE_SIZE=30;function pxToNumber(px){return parseInt(px.replace("px",""),10)}function round(value){return Number.isInteger(value)?value:value.toFixed(2)}function filterZeroValues(labels){return labels.filter((l=>0!==l.text&&"0"!==l.text))}function floatingAlignment(extremities){let windowExtremities_top=dist.global.window.scrollY,windowExtremities_bottom=dist.global.window.scrollY+dist.global.window.innerHeight,windowExtremities_left=dist.global.window.scrollX,windowExtremities_right=dist.global.window.scrollX+dist.global.window.innerWidth,distances_top=Math.abs(windowExtremities_top-extremities.top),distances_bottom=Math.abs(windowExtremities_bottom-extremities.bottom);return{x:Math.abs(windowExtremities_left-extremities.left)>Math.abs(windowExtremities_right-extremities.right)?"left":"right",y:distances_top>distances_bottom?"top":"bottom"}}function drawBoxModel(element){return context=>{if(element&&context){let measurements=function measureElement(element){let style=dist.global.getComputedStyle(element),{top,left,right,bottom,width,height}=element.getBoundingClientRect(),{marginTop,marginBottom,marginLeft,marginRight,paddingTop,paddingBottom,paddingLeft,paddingRight,borderBottomWidth,borderTopWidth,borderLeftWidth,borderRightWidth}=style;top+=dist.global.window.scrollY,left+=dist.global.window.scrollX,bottom+=dist.global.window.scrollY,right+=dist.global.window.scrollX;let margin={top:pxToNumber(marginTop),bottom:pxToNumber(marginBottom),left:pxToNumber(marginLeft),right:pxToNumber(marginRight)},padding={top:pxToNumber(paddingTop),bottom:pxToNumber(paddingBottom),left:pxToNumber(paddingLeft),right:pxToNumber(paddingRight)},border={top:pxToNumber(borderTopWidth),bottom:pxToNumber(borderBottomWidth),left:pxToNumber(borderLeftWidth),right:pxToNumber(borderRightWidth)},extremities={top:top-margin.top,bottom:bottom+margin.bottom,left:left-margin.left,right:right+margin.right};return{margin,padding,border,top,left,bottom,right,width,height,extremities,floatingAlignment:floatingAlignment(extremities)}}(element),marginLabels=function drawMargin(context,{margin,width,height,top,left,bottom,right}){let marginHeight=height+margin.bottom+margin.top;return context.fillStyle=colors2.margin,context.fillRect(left,top-margin.top,width,margin.top),context.fillRect(right,top-margin.top,margin.right,marginHeight),context.fillRect(left,bottom,width,margin.bottom),context.fillRect(left-margin.left,top-margin.top,margin.left,marginHeight),filterZeroValues([{type:"margin",text:round(margin.top),position:"top"},{type:"margin",text:round(margin.right),position:"right"},{type:"margin",text:round(margin.bottom),position:"bottom"},{type:"margin",text:round(margin.left),position:"left"}])}(context,measurements),paddingLabels=function drawPadding(context,{padding,border,width,height,top,left,bottom,right}){let paddingWidth=width-border.left-border.right,paddingHeight=height-padding.top-padding.bottom-border.top-border.bottom;return context.fillStyle=colors2.padding,context.fillRect(left+border.left,top+border.top,paddingWidth,padding.top),context.fillRect(right-padding.right-border.right,top+padding.top+border.top,padding.right,paddingHeight),context.fillRect(left+border.left,bottom-padding.bottom-border.bottom,paddingWidth,padding.bottom),context.fillRect(left+border.left,top+padding.top+border.top,padding.left,paddingHeight),filterZeroValues([{type:"padding",text:padding.top,position:"top"},{type:"padding",text:padding.right,position:"right"},{type:"padding",text:padding.bottom,position:"bottom"},{type:"padding",text:padding.left,position:"left"}])}(context,measurements),borderLabels=function drawBorder(context,{border,width,height,top,left,bottom,right}){let borderHeight=height-border.top-border.bottom;return context.fillStyle=colors2.border,context.fillRect(left,top,width,border.top),context.fillRect(left,bottom-border.bottom,width,border.bottom),context.fillRect(left,top+border.top,border.left,borderHeight),context.fillRect(right-border.right,top+border.top,border.right,borderHeight),filterZeroValues([{type:"border",text:border.top,position:"top"},{type:"border",text:border.right,position:"right"},{type:"border",text:border.bottom,position:"bottom"},{type:"border",text:border.left,position:"left"}])}(context,measurements),contentLabels=function drawContent(context,{padding,border,width,height,top,left}){let contentWidth=width-border.left-border.right-padding.left-padding.right,contentHeight=height-padding.top-padding.bottom-border.top-border.bottom;return context.fillStyle=colors2.content,context.fillRect(left+border.left+padding.left,top+border.top+padding.top,contentWidth,contentHeight),[{type:"content",position:"center",text:`${round(contentWidth)} x ${round(contentHeight)}`}]}(context,measurements);!function labelStacks(context,measurements,labels,externalLabels){let stacks=labels.reduce(((acc,l)=>(Object.prototype.hasOwnProperty.call(acc,l.position)||(acc[l.position]=[]),acc[l.position].push(l),acc)),{});stacks.top&&drawStack(context,measurements,stacks.top,externalLabels),stacks.right&&drawStack(context,measurements,stacks.right,externalLabels),stacks.bottom&&drawStack(context,measurements,stacks.bottom,externalLabels),stacks.left&&drawStack(context,measurements,stacks.left,externalLabels),stacks.center&&drawStack(context,measurements,stacks.center,externalLabels)}(context,measurements,[...contentLabels,...paddingLabels,...borderLabels,...marginLabels],measurements.width<=3*SMALL_NODE_SIZE||measurements.height<=SMALL_NODE_SIZE)}}}function drawSelectedElement(element){!function draw(callback){clear(),callback(state.context)}(drawBoxModel(element))}var nodeAtPointerRef,pointer={x:0,y:0};function findAndDrawElement(x,y){nodeAtPointerRef=((x,y)=>{let element=dist.global.document.elementFromPoint(x,y),crawlShadows=node=>{if(node&&node.shadowRoot){let nestedElement=node.shadowRoot.elementFromPoint(x,y);return node.isEqualNode(nestedElement)?node:nestedElement.shadowRoot?crawlShadows(nestedElement):nestedElement}return node};return crawlShadows(element)||element})(x,y),drawSelectedElement(nodeAtPointerRef)}var decorators=[(StoryFn,context)=>{let{measureEnabled}=context.globals;return(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{let onPointerMove=event=>{window.requestAnimationFrame((()=>{event.stopPropagation(),pointer.x=event.clientX,pointer.y=event.clientY}))};return document.addEventListener("pointermove",onPointerMove),()=>{document.removeEventListener("pointermove",onPointerMove)}}),[]),(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{let onResize=()=>{window.requestAnimationFrame((()=>{!function rescale(){setCanvasWidthAndHeight(state.canvas,state.context,{width:0,height:0});let{width,height}=getDocumentWidthAndHeight();setCanvasWidthAndHeight(state.canvas,state.context,{width,height}),state.width=width,state.height=height}()}))};return measureEnabled&&(document.addEventListener("pointerover",(event=>{window.requestAnimationFrame((()=>{event.stopPropagation(),findAndDrawElement(event.clientX,event.clientY)}))})),init(),window.addEventListener("resize",onResize),findAndDrawElement(pointer.x,pointer.y)),()=>{window.removeEventListener("resize",onResize),function destroy(){state.canvas&&(clear(),state.canvas.parentNode.removeChild(state.canvas),state={})}()}}),[measureEnabled]),StoryFn()}],globals={measureEnabled:!1}},"./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators,globals:()=>globals});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),clearStyles=selector=>{(Array.isArray(selector)?selector:[selector]).forEach(clearStyle)},clearStyle=input=>{let selector="string"==typeof input?input:input.join(""),element=dist.global.document.getElementById(selector);element&&element.parentElement&&element.parentElement.removeChild(element)};var decorators=[(StoryFn,context)=>{let{globals:globals2}=context,isActive=[!0,"true"].includes(globals2.outline),isInDocs="docs"===context.viewMode,outlineStyles=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)((()=>function outlineCSS(selector){return esm.dedent`
    ${selector} body {
      outline: 1px solid #2980b9 !important;
    }

    ${selector} article {
      outline: 1px solid #3498db !important;
    }

    ${selector} nav {
      outline: 1px solid #0088c3 !important;
    }

    ${selector} aside {
      outline: 1px solid #33a0ce !important;
    }

    ${selector} section {
      outline: 1px solid #66b8da !important;
    }

    ${selector} header {
      outline: 1px solid #99cfe7 !important;
    }

    ${selector} footer {
      outline: 1px solid #cce7f3 !important;
    }

    ${selector} h1 {
      outline: 1px solid #162544 !important;
    }

    ${selector} h2 {
      outline: 1px solid #314e6e !important;
    }

    ${selector} h3 {
      outline: 1px solid #3e5e85 !important;
    }

    ${selector} h4 {
      outline: 1px solid #449baf !important;
    }

    ${selector} h5 {
      outline: 1px solid #c7d1cb !important;
    }

    ${selector} h6 {
      outline: 1px solid #4371d0 !important;
    }

    ${selector} main {
      outline: 1px solid #2f4f90 !important;
    }

    ${selector} address {
      outline: 1px solid #1a2c51 !important;
    }

    ${selector} div {
      outline: 1px solid #036cdb !important;
    }

    ${selector} p {
      outline: 1px solid #ac050b !important;
    }

    ${selector} hr {
      outline: 1px solid #ff063f !important;
    }

    ${selector} pre {
      outline: 1px solid #850440 !important;
    }

    ${selector} blockquote {
      outline: 1px solid #f1b8e7 !important;
    }

    ${selector} ol {
      outline: 1px solid #ff050c !important;
    }

    ${selector} ul {
      outline: 1px solid #d90416 !important;
    }

    ${selector} li {
      outline: 1px solid #d90416 !important;
    }

    ${selector} dl {
      outline: 1px solid #fd3427 !important;
    }

    ${selector} dt {
      outline: 1px solid #ff0043 !important;
    }

    ${selector} dd {
      outline: 1px solid #e80174 !important;
    }

    ${selector} figure {
      outline: 1px solid #ff00bb !important;
    }

    ${selector} figcaption {
      outline: 1px solid #bf0032 !important;
    }

    ${selector} table {
      outline: 1px solid #00cc99 !important;
    }

    ${selector} caption {
      outline: 1px solid #37ffc4 !important;
    }

    ${selector} thead {
      outline: 1px solid #98daca !important;
    }

    ${selector} tbody {
      outline: 1px solid #64a7a0 !important;
    }

    ${selector} tfoot {
      outline: 1px solid #22746b !important;
    }

    ${selector} tr {
      outline: 1px solid #86c0b2 !important;
    }

    ${selector} th {
      outline: 1px solid #a1e7d6 !important;
    }

    ${selector} td {
      outline: 1px solid #3f5a54 !important;
    }

    ${selector} col {
      outline: 1px solid #6c9a8f !important;
    }

    ${selector} colgroup {
      outline: 1px solid #6c9a9d !important;
    }

    ${selector} button {
      outline: 1px solid #da8301 !important;
    }

    ${selector} datalist {
      outline: 1px solid #c06000 !important;
    }

    ${selector} fieldset {
      outline: 1px solid #d95100 !important;
    }

    ${selector} form {
      outline: 1px solid #d23600 !important;
    }

    ${selector} input {
      outline: 1px solid #fca600 !important;
    }

    ${selector} keygen {
      outline: 1px solid #b31e00 !important;
    }

    ${selector} label {
      outline: 1px solid #ee8900 !important;
    }

    ${selector} legend {
      outline: 1px solid #de6d00 !important;
    }

    ${selector} meter {
      outline: 1px solid #e8630c !important;
    }

    ${selector} optgroup {
      outline: 1px solid #b33600 !important;
    }

    ${selector} option {
      outline: 1px solid #ff8a00 !important;
    }

    ${selector} output {
      outline: 1px solid #ff9619 !important;
    }

    ${selector} progress {
      outline: 1px solid #e57c00 !important;
    }

    ${selector} select {
      outline: 1px solid #e26e0f !important;
    }

    ${selector} textarea {
      outline: 1px solid #cc5400 !important;
    }

    ${selector} details {
      outline: 1px solid #33848f !important;
    }

    ${selector} summary {
      outline: 1px solid #60a1a6 !important;
    }

    ${selector} command {
      outline: 1px solid #438da1 !important;
    }

    ${selector} menu {
      outline: 1px solid #449da6 !important;
    }

    ${selector} del {
      outline: 1px solid #bf0000 !important;
    }

    ${selector} ins {
      outline: 1px solid #400000 !important;
    }

    ${selector} img {
      outline: 1px solid #22746b !important;
    }

    ${selector} iframe {
      outline: 1px solid #64a7a0 !important;
    }

    ${selector} embed {
      outline: 1px solid #98daca !important;
    }

    ${selector} object {
      outline: 1px solid #00cc99 !important;
    }

    ${selector} param {
      outline: 1px solid #37ffc4 !important;
    }

    ${selector} video {
      outline: 1px solid #6ee866 !important;
    }

    ${selector} audio {
      outline: 1px solid #027353 !important;
    }

    ${selector} source {
      outline: 1px solid #012426 !important;
    }

    ${selector} canvas {
      outline: 1px solid #a2f570 !important;
    }

    ${selector} track {
      outline: 1px solid #59a600 !important;
    }

    ${selector} map {
      outline: 1px solid #7be500 !important;
    }

    ${selector} area {
      outline: 1px solid #305900 !important;
    }

    ${selector} a {
      outline: 1px solid #ff62ab !important;
    }

    ${selector} em {
      outline: 1px solid #800b41 !important;
    }

    ${selector} strong {
      outline: 1px solid #ff1583 !important;
    }

    ${selector} i {
      outline: 1px solid #803156 !important;
    }

    ${selector} b {
      outline: 1px solid #cc1169 !important;
    }

    ${selector} u {
      outline: 1px solid #ff0430 !important;
    }

    ${selector} s {
      outline: 1px solid #f805e3 !important;
    }

    ${selector} small {
      outline: 1px solid #d107b2 !important;
    }

    ${selector} abbr {
      outline: 1px solid #4a0263 !important;
    }

    ${selector} q {
      outline: 1px solid #240018 !important;
    }

    ${selector} cite {
      outline: 1px solid #64003c !important;
    }

    ${selector} dfn {
      outline: 1px solid #b4005a !important;
    }

    ${selector} sub {
      outline: 1px solid #dba0c8 !important;
    }

    ${selector} sup {
      outline: 1px solid #cc0256 !important;
    }

    ${selector} time {
      outline: 1px solid #d6606d !important;
    }

    ${selector} code {
      outline: 1px solid #e04251 !important;
    }

    ${selector} kbd {
      outline: 1px solid #5e001f !important;
    }

    ${selector} samp {
      outline: 1px solid #9c0033 !important;
    }

    ${selector} var {
      outline: 1px solid #d90047 !important;
    }

    ${selector} mark {
      outline: 1px solid #ff0053 !important;
    }

    ${selector} bdi {
      outline: 1px solid #bf3668 !important;
    }

    ${selector} bdo {
      outline: 1px solid #6f1400 !important;
    }

    ${selector} ruby {
      outline: 1px solid #ff7b93 !important;
    }

    ${selector} rt {
      outline: 1px solid #ff2f54 !important;
    }

    ${selector} rp {
      outline: 1px solid #803e49 !important;
    }

    ${selector} span {
      outline: 1px solid #cc2643 !important;
    }

    ${selector} br {
      outline: 1px solid #db687d !important;
    }

    ${selector} wbr {
      outline: 1px solid #db175b !important;
    }`}(isInDocs?`#anchor--${context.id} .docs-story`:".sb-show-main")),[context]);return(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{let selectorId=isInDocs?`addon-outline-docs-${context.id}`:"addon-outline";return isActive?((selector,css)=>{let existingStyle=dist.global.document.getElementById(selector);if(existingStyle)existingStyle.innerHTML!==css&&(existingStyle.innerHTML=css);else{let style=dist.global.document.createElement("style");style.setAttribute("id",selector),style.innerHTML=css,dist.global.document.head.appendChild(style)}})(selectorId,outlineStyles):clearStyles(selectorId),()=>{clearStyles(selectorId)}}),[isActive,outlineStyles,context]),StoryFn()}],globals={outline:!1}},"./node_modules/@storybook/addon-interactions/dist/preview.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{argsEnhancers:()=>argsEnhancers,parameters:()=>parameters,runStep:()=>runStep});Object.create,Object.defineProperty,Object.getOwnPropertyDescriptor,Object.getOwnPropertyNames,Object.getPrototypeOf,Object.prototype.hasOwnProperty;var CallStates2,external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_CORE_EVENTS_=__webpack_require__("@storybook/core-events"),external_STORYBOOK_MODULE_CLIENT_LOGGER_=__webpack_require__("@storybook/client-logger"),CallStates=((CallStates2=CallStates||{}).DONE="done",CallStates2.ERROR="error",CallStates2.ACTIVE="active",CallStates2.WAITING="waiting",CallStates2),EVENTS_CALL="storybook/instrumenter/call",EVENTS_SYNC="storybook/instrumenter/sync",EVENTS_START="storybook/instrumenter/start",EVENTS_BACK="storybook/instrumenter/back",EVENTS_GOTO="storybook/instrumenter/goto",EVENTS_NEXT="storybook/instrumenter/next",EVENTS_END="storybook/instrumenter/end",controlsDisabled={start:!1,back:!1,goto:!1,next:!1,end:!1},alreadyCompletedException=new Error("This function ran after the play function completed. Did you forget to `await` it?"),isObject=o=>"[object Object]"===Object.prototype.toString.call(o),isInstrumentable=o=>{if(!isObject(o)&&!(o=>"[object Module]"===Object.prototype.toString.call(o))(o))return!1;if(void 0===o.constructor)return!0;let proto=o.constructor.prototype;return!(!isObject(proto)||!1===Object.prototype.hasOwnProperty.call(proto,"isPrototypeOf"))},getInitialState=()=>({renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,ancestors:[],playUntil:void 0,resolvers:{},syncTimeout:void 0}),getRetainedState=(state,isDebugging=!1)=>{let calls=(isDebugging?state.shadowCalls:state.calls).filter((call=>call.retain));if(!calls.length)return;let callRefsByResult=new Map(Array.from(state.callRefsByResult.entries()).filter((([,ref])=>ref.retain)));return{cursor:calls.length,calls,callRefsByResult}};function instrument(obj,options={}){try{let forceInstrument=!1,skipInstrument=!1;return dist.global.window.location?.search?.includes("instrument=true")?forceInstrument=!0:dist.global.window.location?.search?.includes("instrument=false")&&(skipInstrument=!0),dist.global.window.parent===dist.global.window&&!forceInstrument||skipInstrument?obj:(dist.global.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(dist.global.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new class{constructor(){this.initialized=!1,this.channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),this.state=dist.global.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};let resetState=({storyId,isPlaying=!0,isDebugging=!1})=>{let state=this.getState(storyId);this.setState(storyId,{...getInitialState(),...getRetainedState(state,isDebugging),shadowCalls:isDebugging?state.shadowCalls:[],chainedCallIds:isDebugging?state.chainedCallIds:new Set,playUntil:isDebugging?state.playUntil:void 0,isPlaying,isDebugging}),this.sync(storyId)};this.channel.on(external_STORYBOOK_MODULE_CORE_EVENTS_.FORCE_REMOUNT,resetState),this.channel.on(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_RENDER_PHASE_CHANGED,(({storyId,newPhase})=>{let{isDebugging}=this.getState(storyId);this.setState(storyId,{renderPhase:newPhase}),"preparing"===newPhase&&isDebugging&&resetState({storyId}),"playing"===newPhase&&resetState({storyId,isDebugging}),"played"===newPhase&&this.setState(storyId,{isLocked:!1,isPlaying:!1,isDebugging:!1}),"errored"===newPhase&&this.setState(storyId,{isLocked:!1,isPlaying:!1})})),this.channel.on(external_STORYBOOK_MODULE_CORE_EVENTS_.SET_CURRENT_STORY,(()=>{this.initialized?this.cleanup():this.initialized=!0}));let start=({storyId,playUntil})=>{this.getState(storyId).isDebugging||this.setState(storyId,(({calls})=>({calls:[],shadowCalls:calls.map((call=>({...call,status:"waiting"}))),isDebugging:!0})));let log=this.getLog(storyId);this.setState(storyId,(({shadowCalls})=>{if(playUntil||!log.length)return{playUntil};let firstRowIndex=shadowCalls.findIndex((call=>call.id===log[0].callId));return{playUntil:shadowCalls.slice(0,firstRowIndex).filter((call=>call.interceptable&&!call.ancestors.length)).slice(-1)[0]?.id}})),this.channel.emit(external_STORYBOOK_MODULE_CORE_EVENTS_.FORCE_REMOUNT,{storyId,isDebugging:!0})},end=({storyId})=>{this.setState(storyId,{playUntil:void 0,isDebugging:!1}),Object.values(this.getState(storyId).resolvers).forEach((resolve=>resolve()))};this.channel.on(EVENTS_START,start),this.channel.on(EVENTS_BACK,(({storyId})=>{let log=this.getLog(storyId).filter((call=>!call.ancestors.length)),last=log.reduceRight(((res,item,index)=>res>=0||"waiting"===item.status?res:index),-1);start({storyId,playUntil:log[last-1]?.callId})})),this.channel.on(EVENTS_GOTO,(({storyId,callId})=>{let{calls,shadowCalls,resolvers}=this.getState(storyId),call=calls.find((({id})=>id===callId)),shadowCall=shadowCalls.find((({id})=>id===callId));if(!call&&shadowCall&&Object.values(resolvers).length>0){let nextId=this.getLog(storyId).find((c=>"waiting"===c.status))?.callId;shadowCall.id!==nextId&&this.setState(storyId,{playUntil:shadowCall.id}),Object.values(resolvers).forEach((resolve=>resolve()))}else start({storyId,playUntil:callId})})),this.channel.on(EVENTS_NEXT,(({storyId})=>{let{resolvers}=this.getState(storyId);if(Object.values(resolvers).length>0)Object.values(resolvers).forEach((resolve=>resolve()));else{let nextId=this.getLog(storyId).find((c=>"waiting"===c.status))?.callId;nextId?start({storyId,playUntil:nextId}):end({storyId})}})),this.channel.on(EVENTS_END,end)}getState(storyId){return this.state[storyId]||getInitialState()}setState(storyId,update){let state=this.getState(storyId),patch="function"==typeof update?update(state):update;this.state={...this.state,[storyId]:{...state,...patch}},dist.global.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}cleanup(){this.state=Object.entries(this.state).reduce(((acc,[storyId,state])=>{let retainedState=getRetainedState(state);return retainedState&&(acc[storyId]=Object.assign(getInitialState(),retainedState)),acc}),{});let payload={controlStates:controlsDisabled,logItems:[]};this.channel.emit(EVENTS_SYNC,payload),dist.global.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}getLog(storyId){let{calls,shadowCalls}=this.getState(storyId),merged=[...shadowCalls];calls.forEach(((call,index)=>{merged[index]=call}));let seen=new Set;return merged.reduceRight(((acc,call)=>(call.args.forEach((arg=>{arg?.__callId__&&seen.add(arg.__callId__)})),call.path.forEach((node=>{node.__callId__&&seen.add(node.__callId__)})),(call.interceptable||call.exception)&&!seen.has(call.id)&&(acc.unshift({callId:call.id,status:call.status,ancestors:call.ancestors}),seen.add(call.id)),acc)),[])}instrument(obj,options){if(!isInstrumentable(obj))return obj;let{mutate=!1,path=[]}=options;return Object.keys(obj).reduce(((acc,key)=>{let value=obj[key];return"function"!=typeof value?(acc[key]=this.instrument(value,{...options,path:path.concat(key)}),acc):"function"==typeof value.__originalFn__?(acc[key]=value,acc):(acc[key]=(...args)=>this.track(key,value,args,options),acc[key].__originalFn__=value,Object.defineProperty(acc[key],"name",{value:key,writable:!1}),Object.keys(value).length>0&&Object.assign(acc[key],this.instrument({...value},{...options,path:path.concat(key)})),acc)}),mutate?obj:(obj=>{try{return new obj.constructor}catch{return{}}})(obj))}track(method,fn,args,options){let storyId=args?.[0]?.__storyId__||dist.global.__STORYBOOK_PREVIEW__?.selectionStore?.selection?.storyId,{cursor,ancestors}=this.getState(storyId);this.setState(storyId,{cursor:cursor+1});let id=`${ancestors.slice(-1)[0]||storyId} [${cursor}] ${method}`,{path=[],intercept=!1,retain=!1}=options,interceptable="function"==typeof intercept?intercept(method,path):intercept,call={id,cursor,storyId,ancestors,path,method,args,interceptable,retain},result=(interceptable&&!ancestors.length?this.intercept:this.invoke).call(this,fn,call,options);return this.instrument(result,{...options,mutate:!0,path:[{__callId__:call.id}]})}intercept(fn,call,options){let{chainedCallIds,isDebugging,playUntil}=this.getState(call.storyId),isChainedUpon=chainedCallIds.has(call.id);return!isDebugging||isChainedUpon||playUntil?(playUntil===call.id&&this.setState(call.storyId,{playUntil:void 0}),this.invoke(fn,call,options)):new Promise((resolve=>{this.setState(call.storyId,(({resolvers})=>({isLocked:!1,resolvers:{...resolvers,[call.id]:resolve}})))})).then((()=>(this.setState(call.storyId,(state=>{let{[call.id]:_,...resolvers}=state.resolvers;return{isLocked:!0,resolvers}})),this.invoke(fn,call,options))))}invoke(fn,call,options){let{callRefsByResult,renderPhase}=this.getState(call.storyId),serializeValues=value=>{if(callRefsByResult.has(value))return callRefsByResult.get(value);if(value instanceof Array)return value.map(serializeValues);if(value instanceof Date)return{__date__:{value:value.toISOString()}};if(value instanceof Error){let{name,message,stack}=value;return{__error__:{name,message,stack}}}if(value instanceof RegExp){let{flags,source}=value;return{__regexp__:{flags,source}}}if(value instanceof dist.global.window.HTMLElement){let{prefix,localName,id,classList,innerText}=value;return{__element__:{prefix,localName,id,classNames:Array.from(classList),innerText}}}return"function"==typeof value?{__function__:{name:value.name}}:"symbol"==typeof value?{__symbol__:{description:value.description}}:"object"==typeof value&&value?.constructor?.name&&"Object"!==value?.constructor?.name?{__class__:{name:value.constructor.name}}:"[object Object]"===Object.prototype.toString.call(value)?Object.fromEntries(Object.entries(value).map((([key,val])=>[key,serializeValues(val)]))):value},info={...call,args:call.args.map(serializeValues)};call.path.forEach((ref=>{ref?.__callId__&&this.setState(call.storyId,(({chainedCallIds})=>({chainedCallIds:new Set(Array.from(chainedCallIds).concat(ref.__callId__))})))}));let handleException=e=>{if(e instanceof Error){let{name,message,stack,callId=call.id}=e,exception={name,message,stack,callId};if(this.update({...info,status:"error",exception}),this.setState(call.storyId,(state=>({callRefsByResult:new Map([...Array.from(state.callRefsByResult.entries()),[e,{__callId__:call.id,retain:call.retain}]])}))),call.ancestors.length)throw Object.prototype.hasOwnProperty.call(e,"callId")||Object.defineProperty(e,"callId",{value:call.id}),e;if(e!==alreadyCompletedException)throw external_STORYBOOK_MODULE_CLIENT_LOGGER_.logger.warn(e),external_STORYBOOK_MODULE_CORE_EVENTS_.IGNORED_EXCEPTION}throw e};try{if("played"===renderPhase&&!call.retain)throw alreadyCompletedException;let result=fn(...(options.getArgs?options.getArgs(call,this.getState(call.storyId)):call.args).map((arg=>"function"!=typeof arg||Object.keys(arg).length?arg:(...args)=>{let{cursor,ancestors}=this.getState(call.storyId);this.setState(call.storyId,{cursor:0,ancestors:[...ancestors,call.id]});let restore=()=>this.setState(call.storyId,{cursor,ancestors}),willRestore=!1;try{let res=arg(...args);return res instanceof Promise?(willRestore=!0,res.finally(restore)):res}finally{willRestore||restore()}})));return result&&["object","function","symbol"].includes(typeof result)&&this.setState(call.storyId,(state=>({callRefsByResult:new Map([...Array.from(state.callRefsByResult.entries()),[result,{__callId__:call.id,retain:call.retain}]])}))),this.update({...info,status:result instanceof Promise?"active":"done"}),result instanceof Promise?result.then((value=>(this.update({...info,status:"done"}),value)),handleException):result}catch(e){return handleException(e)}}update(call){this.channel.emit(EVENTS_CALL,call),this.setState(call.storyId,(({calls})=>{let callsById=calls.concat(call).reduce(((a,c)=>Object.assign(a,{[c.id]:c})),{});return{calls:Object.values(callsById).sort(((a,b)=>a.id.localeCompare(b.id,void 0,{numeric:!0})))}})),this.sync(call.storyId)}sync(storyId){let synchronize=()=>{let{isLocked,isPlaying}=this.getState(storyId),logItems=this.getLog(storyId),pausedAt=logItems.filter((({ancestors})=>!ancestors.length)).find((item=>"waiting"===item.status))?.callId,hasActive=logItems.some((item=>"active"===item.status));if(isLocked||hasActive||0===logItems.length){let payload2={controlStates:controlsDisabled,logItems};return void this.channel.emit(EVENTS_SYNC,payload2)}let hasPrevious=logItems.some((item=>["done","error"].includes(item.status))),payload={controlStates:{start:hasPrevious,back:hasPrevious,goto:!0,next:isPlaying,end:isPlaying},logItems,pausedAt};this.channel.emit(EVENTS_SYNC,payload)};this.setState(storyId,(({syncTimeout})=>(clearTimeout(syncTimeout),{syncTimeout:setTimeout(synchronize,0)})))}}),dist.global.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(obj,options))}catch(e){return external_STORYBOOK_MODULE_CLIENT_LOGGER_.once.warn(e),obj}}var JestMock=new(__webpack_require__("./node_modules/jest-mock/build/index.js").qr)(dist.global),fn=JestMock.fn.bind(JestMock),{action}=instrument({action:fn},{retain:!0}),channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),seen=new Set,spies=[];channel.on(external_STORYBOOK_MODULE_CORE_EVENTS_.FORCE_REMOUNT,(()=>spies.forEach((mock=>mock?.mockClear?.())))),channel.on(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_RENDER_PHASE_CHANGED,(({newPhase})=>{"loading"===newPhase&&spies.forEach((mock=>mock?.mockClear?.()))}));var addSpies=(id,val,key)=>{if(seen.has(val))return val;seen.add(val);try{if("[object Object]"===Object.prototype.toString.call(val)){for(let[k,v]of Object.entries(val))val[k]=addSpies(id,v,k);return val}if(Array.isArray(val))return val.map(((item,index)=>addSpies(id,item,`${key}[${index}]`)));if("function"==typeof val&&val.isAction){Object.defineProperty(val,"name",{value:key,writable:!1}),Object.defineProperty(val,"__storyId__",{value:id,writable:!1});let spy=action(val);return spies.push(spy),spy}}catch{}return val},argsEnhancers=[({id,initialArgs})=>addSpies(id,initialArgs)],{step:runStep}=instrument({step:(label,play,context)=>play(context)},{intercept:!0}),parameters={throwPlayFunctionExceptions:!1}},"./node_modules/@storybook/addon-links/dist/preview.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators});var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_=__webpack_require__("@storybook/core-events"),{document:chunk_DXNAW7Q2_document,HTMLElement}=(__webpack_require__("./node_modules/@storybook/csf/dist/index.mjs"),dist.global);var chunk_DXNAW7Q2_navigate=params=>external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().emit(external_STORYBOOK_MODULE_CORE_EVENTS_.SELECT_STORY,params),linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),chunk_DXNAW7Q2_navigate({kind,story}))},hasListener=!1,off=()=>{hasListener&&(hasListener=!1,chunk_DXNAW7Q2_document.removeEventListener("click",linksListener))},decorators=[(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withLinks",parameterName:"links",wrapper:(getStory,context)=>(hasListener||(hasListener=!0,chunk_DXNAW7Q2_document.addEventListener("click",linksListener)),external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().once(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,off),getStory(context))})]},"./node_modules/@storybook/angular/dist/client/angular-beta/AbstractRenderer.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var _asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js").default,__createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.AbstractRenderer=void 0;__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");const platform_browser_1=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs"),rxjs_1=__webpack_require__("./node_modules/rxjs/dist/cjs/index.js"),telejson_1=__webpack_require__("./node_modules/telejson/dist/index.mjs"),StorybookModule_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/StorybookModule.js"),StorybookProvider_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/StorybookProvider.js"),StorybookWrapperComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/StorybookWrapperComponent.js"),PropertyExtractor_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/PropertyExtractor.js"),applicationRefs=new Map;class AbstractRenderer{static resetApplications(domNode){StorybookWrapperComponent_1.componentNgModules.clear(),applicationRefs.forEach(((appRef,appDOMNode)=>{appRef.destroyed||domNode&&appDOMNode!==domNode||appRef.destroy()}))}constructor(storyId){this.storyId=storyId,this.previousStoryRenderInfo=new Map}render({storyFnAngular,forced,parameters,component,targetDOMNode}){var _this=this;return _asyncToGenerator((function*(){const targetSelector=_this.generateTargetSelectorFromStoryId(targetDOMNode.id),newStoryProps$=new rxjs_1.BehaviorSubject(storyFnAngular.props);if(!_this.fullRendererRequired({targetDOMNode,storyFnAngular,moduleMetadata:{...storyFnAngular.moduleMetadata},forced}))return void _this.storyProps$.next(storyFnAngular.props);yield _this.beforeFullRender(targetDOMNode),_this.storyProps$&&_this.storyProps$.complete(),_this.storyProps$=newStoryProps$,_this.initAngularRootElement(targetDOMNode,targetSelector);const analyzedMetadata=new PropertyExtractor_1.PropertyExtractor(storyFnAngular.moduleMetadata,component),application=(0,StorybookModule_1.getApplication)({storyFnAngular,component,targetSelector,analyzedMetadata}),applicationRef=yield(0,platform_browser_1.bootstrapApplication)(application,{...storyFnAngular.applicationConfig,providers:[(0,StorybookProvider_1.storyPropsProvider)(newStoryProps$),...analyzedMetadata.applicationProviders,...storyFnAngular.applicationConfig?.providers??[]]});applicationRefs.set(targetDOMNode,applicationRef),yield _this.afterFullRender()}))()}generateTargetSelectorFromStoryId(id){const invalidHtmlTag=/[^A-Za-z0-9-]/g;return invalidHtmlTag.test(id)?`sb-${id.replace(invalidHtmlTag,"")}-component`:id}initAngularRootElement(targetDOMNode,targetSelector){targetDOMNode.innerHTML="",targetDOMNode.appendChild(document.createElement(targetSelector))}fullRendererRequired({targetDOMNode,storyFnAngular,moduleMetadata,forced}){const previousStoryRenderInfo=this.previousStoryRenderInfo.get(targetDOMNode),currentStoryRender={storyFnAngular,moduleMetadataSnapshot:(0,telejson_1.stringify)(moduleMetadata)};if(this.previousStoryRenderInfo.set(targetDOMNode,currentStoryRender),!forced||!this.storyProps$)return!0;if(!!storyFnAngular?.template&&previousStoryRenderInfo?.storyFnAngular?.template!==storyFnAngular.template)return!0;return currentStoryRender.moduleMetadataSnapshot!==previousStoryRenderInfo?.moduleMetadataSnapshot}}exports.AbstractRenderer=AbstractRenderer,AbstractRenderer.resetCompiledComponents=_asyncToGenerator((function*(){try{const{ɵresetCompiledComponents}=yield Promise.resolve().then((()=>__importStar(__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"))));ɵresetCompiledComponents()}catch(e){}}))},"./node_modules/@storybook/angular/dist/client/angular-beta/CanvasRenderer.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CanvasRenderer=void 0;const AbstractRenderer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/AbstractRenderer.js");class CanvasRenderer extends AbstractRenderer_1.AbstractRenderer{render(options){var _superprop_getRender=()=>super.render,_this=this;return _asyncToGenerator((function*(){yield _superprop_getRender().call(_this,options)}))()}beforeFullRender(){return _asyncToGenerator((function*(){CanvasRenderer.resetApplications()}))()}afterFullRender(){return _asyncToGenerator((function*(){yield AbstractRenderer_1.AbstractRenderer.resetCompiledComponents()}))()}}exports.CanvasRenderer=CanvasRenderer},"./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.computesTemplateSourceFromComponent=exports.computesTemplateFromComponent=void 0;const NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js"),separateInputsOutputsAttributes=(ngComponentInputsOutputs,props={})=>{const inputs=ngComponentInputsOutputs.inputs.filter((i=>i.templateName in props)).map((i=>i.templateName)),outputs=ngComponentInputsOutputs.outputs.filter((o=>o.templateName in props)).map((o=>o.templateName));return{inputs,outputs,otherProps:Object.keys(props).filter((k=>![...inputs,...outputs].includes(k)))}};exports.computesTemplateFromComponent=(component,initialProps,innerTemplate="")=>{const ngComponentMetadata=(0,NgComponentAnalyzer_1.getComponentDecoratorMetadata)(component),ngComponentInputsOutputs=(0,NgComponentAnalyzer_1.getComponentInputsOutputs)(component);if(!ngComponentMetadata.selector)return'<ng-container *ngComponentOutlet="storyComponent"></ng-container>';const{inputs:initialInputs,outputs:initialOutputs}=separateInputsOutputsAttributes(ngComponentInputsOutputs,initialProps),templateInputs=initialInputs.length>0?` ${initialInputs.map((i=>`[${i}]="${i}"`)).join(" ")}`:"",templateOutputs=initialOutputs.length>0?` ${initialOutputs.map((i=>`(${i})="${i}($event)"`)).join(" ")}`:"";return buildTemplate(ngComponentMetadata.selector,innerTemplate,templateInputs,templateOutputs)};exports.computesTemplateSourceFromComponent=(component,initialProps,argTypes)=>{const ngComponentMetadata=(0,NgComponentAnalyzer_1.getComponentDecoratorMetadata)(component);if(!ngComponentMetadata)return null;if(!ngComponentMetadata.selector)return`<ng-container *ngComponentOutlet="${component.name}"></ng-container>`;const ngComponentInputsOutputs=(0,NgComponentAnalyzer_1.getComponentInputsOutputs)(component),{inputs:initialInputs,outputs:initialOutputs}=separateInputsOutputsAttributes(ngComponentInputsOutputs,initialProps),templateInputs=initialInputs.length>0?` ${initialInputs.map((propertyName=>(({propertyName,value,argType})=>{let templateValue;switch(typeof value){case"string":templateValue=`'${value}'`;break;case"object":templateValue=JSON.stringify(value).replace(/'/g,"’").replace(/\\"/g,"”").replace(/"([^-"]+)":/g,"$1: ").replace(/"/g,"'").replace(/\u2019/g,"\\'").replace(/\u201D/g,"\\'").split(",").join(", ");break;default:templateValue=value}return`[${propertyName}]="${templateValue}"`})({propertyName,value:initialProps[propertyName],argType:argTypes?.[propertyName]}))).join(" ")}`:"",templateOutputs=initialOutputs.length>0?` ${initialOutputs.map((i=>`(${i})="${i}($event)"`)).join(" ")}`:"";return buildTemplate(ngComponentMetadata.selector,"",templateInputs,templateOutputs)};const buildTemplate=(selector,innerTemplate,inputs,outputs)=>{const voidElements=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],firstSelector=selector.split(",")[0];return[[/(^.*?)(?=[,])/,"$1"],[/(^\..+)/,"div$1"],[/(^\[.+?])/,"div$1"],[/([\w[\]]+)(\s*,[\w\s-[\],]+)+/,"$1"],[/#([\w-]+)/,' id="$1"'],[/((\.[\w-]+)+)/,(_,c)=>` class="${c.split`.`.join` `.trim()}"`],[/(\[.+?])/g,(_,a)=>` ${a.slice(1,-1)}`],[/([\S]+)(.*)/,(template,elementSelector)=>voidElements.some((element=>elementSelector===element))?template.replace(/([\S]+)(.*)/,`<$1$2${inputs}${outputs} />`):template.replace(/([\S]+)(.*)/,`<$1$2${inputs}${outputs}>${innerTemplate}</$1>`)]].reduce(((prevSelector,[searchValue,replacer])=>prevSelector.replace(searchValue,replacer)),firstSelector)}},"./node_modules/@storybook/angular/dist/client/angular-beta/DocsRenderer.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.DocsRenderer=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),core_events_1=__webpack_require__("@storybook/core-events"),AbstractRenderer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/AbstractRenderer.js");class DocsRenderer extends AbstractRenderer_1.AbstractRenderer{render(options){var _superprop_getRender=()=>super.render,_this=this;return _asyncToGenerator((function*(){const channel=preview_api_1.addons.getChannel();channel.once(core_events_1.STORY_CHANGED,_asyncToGenerator((function*(){yield DocsRenderer.resetApplications()}))),channel.once(core_events_1.DOCS_RENDERED,_asyncToGenerator((function*(){yield DocsRenderer.resetApplications()}))),yield _superprop_getRender().call(_this,{...options,forced:!1})}))()}beforeFullRender(domNode){return _asyncToGenerator((function*(){DocsRenderer.resetApplications(domNode)}))()}afterFullRender(){return _asyncToGenerator((function*(){yield AbstractRenderer_1.AbstractRenderer.resetCompiledComponents()}))()}}exports.DocsRenderer=DocsRenderer},"./node_modules/@storybook/angular/dist/client/angular-beta/RendererFactory.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.clearRootHTMLElement=exports.getRenderType=exports.RendererFactory=void 0;const AbstractRenderer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/AbstractRenderer.js"),DocsRenderer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/DocsRenderer.js"),CanvasRenderer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/CanvasRenderer.js");exports.RendererFactory=class RendererFactory{constructor(){this.rendererMap=new Map}getRendererInstance(storyId,targetDOMNode){var _this=this;return _asyncToGenerator((function*(){const targetId=targetDOMNode.id;if(null===targetDOMNode)return null;const renderType=(0,exports.getRenderType)(targetDOMNode);return _this.lastRenderType&&_this.lastRenderType!==renderType&&(yield AbstractRenderer_1.AbstractRenderer.resetApplications(),clearRootHTMLElement(renderType),_this.rendererMap.clear()),_this.rendererMap.has(targetId)||_this.rendererMap.set(targetId,_this.buildRenderer(storyId,renderType)),_this.lastRenderType=renderType,_this.rendererMap.get(targetId)}))()}buildRenderer(storyId,renderType){return"docs"===renderType?new DocsRenderer_1.DocsRenderer(storyId):new CanvasRenderer_1.CanvasRenderer(storyId)}};function clearRootHTMLElement(renderType){switch(renderType){case"canvas":__webpack_require__.g.document.getElementById("storybook-docs").innerHTML="";break;case"docs":__webpack_require__.g.document.getElementById("storybook-root").innerHTML=""}}exports.getRenderType=targetDOMNode=>"storybook-root"===targetDOMNode.id?"canvas":"docs",exports.clearRootHTMLElement=clearRootHTMLElement},"./node_modules/@storybook/angular/dist/client/angular-beta/StorybookModule.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getApplication=void 0;const StorybookWrapperComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/StorybookWrapperComponent.js"),ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js");exports.getApplication=({storyFnAngular,component,targetSelector,analyzedMetadata})=>{const{props,styles,moduleMetadata={}}=storyFnAngular;let{template}=storyFnAngular;const hasTemplate=!function hasNoTemplate(template){return null==template}(template);return!hasTemplate&&component&&(template=(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(component,props,"")),(0,StorybookWrapperComponent_1.createStorybookWrapperComponent)({moduleMetadata,selector:targetSelector,template,storyComponent:component,styles,initialProps:props,analyzedMetadata})}},"./node_modules/@storybook/angular/dist/client/angular-beta/StorybookProvider.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storyPropsProvider=exports.STORY_PROPS=void 0;const core_1=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),rxjs_1=__webpack_require__("./node_modules/rxjs/dist/cjs/index.js");exports.STORY_PROPS=new core_1.InjectionToken("STORY_PROPS");exports.storyPropsProvider=storyProps$=>{return{provide:exports.STORY_PROPS,useFactory:(data=storyProps$.asObservable(),ngZone=>new rxjs_1.Observable((subscriber=>{const sub=data.subscribe((v=>{ngZone.run((()=>subscriber.next(v)))}),(err=>{ngZone.run((()=>subscriber.error(err)))}),(()=>{ngZone.run((()=>subscriber.complete()))}));return()=>{sub.unsubscribe()}}))),deps:[core_1.NgZone]};var data}},"./node_modules/@storybook/angular/dist/client/angular-beta/StorybookWrapperComponent.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},__param=this&&this.__param||function(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createStorybookWrapperComponent=exports.componentNgModules=void 0;const core_1=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),rxjs_1=__webpack_require__("./node_modules/rxjs/dist/cjs/index.js"),operators_1=__webpack_require__("./node_modules/rxjs/dist/cjs/operators/index.js"),StorybookProvider_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/StorybookProvider.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js"),PropertyExtractor_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/PropertyExtractor.js"),getNonInputsOutputsProps=(ngComponentInputsOutputs,props={})=>{const inputs=ngComponentInputsOutputs.inputs.filter((i=>i.templateName in props)).map((i=>i.templateName)),outputs=ngComponentInputsOutputs.outputs.filter((o=>o.templateName in props)).map((o=>o.templateName));return Object.keys(props).filter((k=>![...inputs,...outputs].includes(k)))};exports.componentNgModules=new Map;exports.createStorybookWrapperComponent=({selector,template,storyComponent,styles,moduleMetadata,initialProps,analyzedMetadata})=>{const viewChildSelector=storyComponent??"__storybook-noop",{imports,declarations,providers}=analyzedMetadata;let ngModule=exports.componentNgModules.get(storyComponent);if(!ngModule){let StorybookComponentModule=class StorybookComponentModule{};StorybookComponentModule=__decorate([(0,core_1.NgModule)({declarations,imports,exports:[...declarations,...imports]})],StorybookComponentModule),exports.componentNgModules.set(storyComponent,StorybookComponentModule),ngModule=exports.componentNgModules.get(storyComponent)}PropertyExtractor_1.PropertyExtractor.warnImportsModuleWithProviders(analyzedMetadata);let StorybookWrapperComponent=class StorybookWrapperComponent{constructor(storyProps$,changeDetectorRef){this.storyProps$=storyProps$,this.changeDetectorRef=changeDetectorRef,this.storyComponent=storyComponent??""}ngOnInit(){this.storyWrapperPropsSubscription=this.storyProps$.subscribe(((storyProps={})=>{Object.assign(this,storyProps),this.changeDetectorRef.detectChanges(),this.changeDetectorRef.markForCheck()}))}ngAfterViewInit(){if(this.storyComponentElementRef){const ngComponentInputsOutputs=(0,NgComponentAnalyzer_1.getComponentInputsOutputs)(storyComponent);getNonInputsOutputsProps(ngComponentInputsOutputs,initialProps).forEach((p=>{this.storyComponentElementRef[p]=initialProps[p]})),this.storyComponentViewContainerRef.injector.get(core_1.ChangeDetectorRef).markForCheck(),this.changeDetectorRef.detectChanges(),this.storyComponentPropsSubscription=this.storyProps$.pipe((0,operators_1.skip)(1),(0,operators_1.map)((props=>getNonInputsOutputsProps(ngComponentInputsOutputs,props).reduce(((acc,p)=>({...acc,[p]:props[p]})),{})))).subscribe((props=>{Object.assign(this.storyComponentElementRef,props),this.storyComponentViewContainerRef.injector.get(core_1.ChangeDetectorRef).markForCheck(),this.changeDetectorRef.detectChanges()}))}}ngOnDestroy(){null!=this.storyComponentPropsSubscription&&this.storyComponentPropsSubscription.unsubscribe(),null!=this.storyWrapperPropsSubscription&&this.storyWrapperPropsSubscription.unsubscribe()}};return __decorate([(0,core_1.ViewChild)(viewChildSelector,{static:!0}),__metadata("design:type",core_1.ElementRef)],StorybookWrapperComponent.prototype,"storyComponentElementRef",void 0),__decorate([(0,core_1.ViewChild)(viewChildSelector,{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],StorybookWrapperComponent.prototype,"storyComponentViewContainerRef",void 0),StorybookWrapperComponent=__decorate([(0,core_1.Component)({selector,template,standalone:!0,imports:[ngModule],providers,styles,schemas:moduleMetadata.schemas}),__param(0,(0,core_1.Inject)(StorybookProvider_1.STORY_PROPS)),__param(1,(0,core_1.Inject)(core_1.ChangeDetectorRef)),__metadata("design:paramtypes",[rxjs_1.Subject,core_1.ChangeDetectorRef])],StorybookWrapperComponent),StorybookWrapperComponent}},"./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getComponentDecoratorMetadata=exports.getComponentPropsDecoratorMetadata=exports.isStandaloneComponent=exports.isComponent=exports.isDeclarable=exports.getComponentInputsOutputs=void 0;const core_1=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),reflectionCapabilities=new core_1.ɵReflectionCapabilities;exports.getComponentInputsOutputs=component=>{const componentMetadata=(0,exports.getComponentDecoratorMetadata)(component),componentPropsMetadata=(0,exports.getComponentPropsDecoratorMetadata)(component),initialValue={inputs:[],outputs:[]};return componentMetadata&&componentMetadata.inputs&&initialValue.inputs.push(...componentMetadata.inputs.map((i=>({propName:i,templateName:i})))),componentMetadata&&componentMetadata.outputs&&initialValue.outputs.push(...componentMetadata.outputs.map((i=>({propName:i,templateName:i})))),componentPropsMetadata?Object.entries(componentPropsMetadata).reduce(((previousValue,[propertyName,values])=>{const value=values.find((v=>v instanceof core_1.Input||v instanceof core_1.Output));if(value instanceof core_1.Input){const inputToAdd={propName:propertyName,templateName:value.bindingPropertyName??propertyName},previousInputsFiltered=previousValue.inputs.filter((i=>i.templateName!==propertyName));return{...previousValue,inputs:[...previousInputsFiltered,inputToAdd]}}if(value instanceof core_1.Output){const outputToAdd={propName:propertyName,templateName:value.bindingPropertyName??propertyName},previousOutputsFiltered=previousValue.outputs.filter((i=>i.templateName!==propertyName));return{...previousValue,outputs:[...previousOutputsFiltered,outputToAdd]}}return previousValue}),initialValue):initialValue};exports.isDeclarable=component=>{if(!component)return!1;return!!(reflectionCapabilities.annotations(component)||[]).find((d=>d instanceof core_1.Directive||d instanceof core_1.Pipe||d instanceof core_1.Component))};exports.isComponent=component=>{if(!component)return!1;return(reflectionCapabilities.annotations(component)||[]).some((d=>d instanceof core_1.Component))};exports.isStandaloneComponent=component=>{if(!component)return!1;return(reflectionCapabilities.annotations(component)||[]).some((d=>(d instanceof core_1.Component||d instanceof core_1.Directive||d instanceof core_1.Pipe)&&d.standalone))};exports.getComponentPropsDecoratorMetadata=component=>reflectionCapabilities.propMetadata(component);exports.getComponentDecoratorMetadata=component=>reflectionCapabilities.annotations(component).reverse().find((d=>d instanceof core_1.Component))},"./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgModulesAnalyzer.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isComponentAlreadyDeclared=void 0;const core_1=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),reflectionCapabilities=new core_1.ɵReflectionCapabilities;exports.isComponentAlreadyDeclared=(componentToFind,moduleDeclarations,moduleImports)=>!(!moduleDeclarations||!moduleDeclarations.some((declaration=>declaration===componentToFind)))||!!moduleImports&&moduleImports.some((importItem=>{const extractedNgModuleMetadata=extractNgModuleMetadata(importItem);return!!extractedNgModuleMetadata&&(0,exports.isComponentAlreadyDeclared)(componentToFind,extractedNgModuleMetadata.declarations,extractedNgModuleMetadata.imports)}));const extractNgModuleMetadata=importItem=>{const target=importItem&&importItem.ngModule?importItem.ngModule:importItem,decorators=reflectionCapabilities.annotations(target);if(!decorators||0===decorators.length)return null;const ngModuleDecorator=decorators.find((decorator=>decorator instanceof core_1.NgModule));return ngModuleDecorator||null}},"./node_modules/@storybook/angular/dist/client/angular-beta/utils/PropertyExtractor.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var _a,__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PropertyExtractor=exports.uniqueArray=exports.REMOVED_MODULES=exports.reflectionCapabilities=void 0;const common_1=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core_1=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),platform_browser_1=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs"),animations_1=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/animations.mjs"),ts_dedent_1=__importDefault(__webpack_require__("./node_modules/ts-dedent/esm/index.js")),NgModulesAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgModulesAnalyzer.js");exports.reflectionCapabilities=new core_1.ɵReflectionCapabilities,exports.REMOVED_MODULES=new core_1.InjectionToken("REMOVED_MODULES");exports.uniqueArray=arr=>arr.flat(Number.MAX_VALUE).filter(Boolean).filter(((value,index,self)=>self.indexOf(value)===index));class PropertyExtractor{constructor(metadata,component){this.metadata=metadata,this.component=component,this.declarations=[],this.analyzeMetadata=metadata=>{const declarations=[...metadata?.declarations||[]],providers=[...metadata?.providers||[]],applicationProviders=[],imports=[...metadata?.imports||[]].reduce(((acc,imported)=>{const[isRestricted,restrictedProviders]=PropertyExtractor.analyzeRestricted(imported);return isRestricted?(applicationProviders.unshift(restrictedProviders||[]),acc):(acc.push(imported),acc)}),[]);return{...metadata,imports,providers,applicationProviders,declarations}},this.init()}static warnImportsModuleWithProviders(propertyExtractor){propertyExtractor.imports.some((importedModule=>"ngModule"in importedModule))&&console.warn((0,ts_dedent_1.default)("\n          Storybook Warning: \n          moduleMetadata property 'imports' contains one or more ModuleWithProviders, likely the result of a 'Module.forRoot()'-style call.\n          In Storybook 7.0 we use Angular's new 'bootstrapApplication' API to mount the component to the DOM, which accepts a list of providers to set up application-wide providers.\n          Use the 'applicationConfig' decorator from '@storybook/angular' to pass your ModuleWithProviders to the 'providers' property in combination with the importProvidersFrom helper function from '@angular/core' to extract all the necessary providers.\n          Visit https://angular.io/guide/standalone-components#configuring-dependency-injection for more information\n          "))}init(){const analyzed=this.analyzeMetadata(this.metadata);if(this.imports=(0,exports.uniqueArray)([common_1.CommonModule,analyzed.imports]),this.providers=(0,exports.uniqueArray)(analyzed.providers),this.applicationProviders=(0,exports.uniqueArray)(analyzed.applicationProviders),this.declarations=(0,exports.uniqueArray)(analyzed.declarations),this.component){const{isDeclarable,isStandalone}=PropertyExtractor.analyzeDecorators(this.component),isDeclared=(0,NgModulesAnalyzer_1.isComponentAlreadyDeclared)(this.component,analyzed.declarations,this.imports);isStandalone?this.imports.push(this.component):isDeclarable&&!isDeclared&&this.declarations.push(this.component)}}}exports.PropertyExtractor=PropertyExtractor,_a=PropertyExtractor,PropertyExtractor.analyzeRestricted=ngModule=>ngModule===platform_browser_1.BrowserModule?(console.warn(ts_dedent_1.default`
          Storybook Warning:
          You have imported the "BrowserModule", which is not necessary anymore. 
          In Storybook v7.0 we are using Angular's new bootstrapApplication API to mount an Angular application to the DOM.
          Note that the BrowserModule providers are automatically included when starting an application with bootstrapApplication()
          Please remove the "BrowserModule" from the list of imports in your moduleMetadata definition to remove this warning.
        `),[!0]):ngModule===animations_1.BrowserAnimationsModule?(console.warn(ts_dedent_1.default`
          Storybook Warning:
          You have added the "BrowserAnimationsModule" to the list of "imports" in your moduleMetadata definition of your Story.
          In Storybook 7.0 we use Angular's new 'bootstrapApplication' API to mount the component to the DOM, which accepts a list of providers to set up application-wide providers.
          Use the 'applicationConfig' decorator from '@storybook/angular' and add the "provideAnimations" function to the list of "providers".
          If your Angular version does not support "provide-like" functions, use the helper function importProvidersFrom instead to set up animations. For this case, please add "importProvidersFrom(BrowserAnimationsModule)" to the list of providers of your applicationConfig definition.
          Please visit https://angular.io/guide/standalone-components#configuring-dependency-injection for more information.
        `),[!0,(0,animations_1.provideAnimations)()]):ngModule===animations_1.NoopAnimationsModule?(console.warn(ts_dedent_1.default`
          Storybook Warning:
          You have added the "NoopAnimationsModule" to the list of "imports" in your moduleMetadata definition of your Story.
          In Storybook v7.0 we are using Angular's new bootstrapApplication API to mount an Angular application to the DOM, which accepts a list of providers to set up application-wide providers.
          Use the 'applicationConfig' decorator from '@storybook/angular' and add the "provideNoopAnimations" function to the list of "providers".
          If your Angular version does not support "provide-like" functions, use the helper function importProvidersFrom instead to set up noop animations and to extract all necessary providers from NoopAnimationsModule. For this case, please add "importProvidersFrom(NoopAnimationsModule)" to the list of providers of your applicationConfig definition.
          Please visit https://angular.io/guide/standalone-components#configuring-dependency-injection for more information.
//# sourceMappingURL=10.17658a2b.iframe.bundle.js.map