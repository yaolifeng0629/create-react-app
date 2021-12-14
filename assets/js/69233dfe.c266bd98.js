/*! For license information please see 69233dfe.c266bd98.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9253],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3574:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),s=(r(2784),r(3905)),a=["components"],l={id:"adding-a-css-modules-stylesheet",title:"Adding a CSS Modules Stylesheet",sidebar_label:"Adding CSS Modules"},i=void 0,u={unversionedId:"adding-a-css-modules-stylesheet",id:"adding-a-css-modules-stylesheet",title:"Adding a CSS Modules Stylesheet",description:"Note: this feature is available with react-scripts@2.0.0 and higher.",source:"@site/../docs/adding-a-css-modules-stylesheet.md",sourceDirName:".",slug:"/adding-a-css-modules-stylesheet",permalink:"/docs/adding-a-css-modules-stylesheet",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/adding-a-css-modules-stylesheet.md",tags:[],version:"current",lastUpdatedBy:"Hardo",lastUpdatedAt:1546615104,formattedLastUpdatedAt:"1/4/2019",frontMatter:{id:"adding-a-css-modules-stylesheet",title:"Adding a CSS Modules Stylesheet",sidebar_label:"Adding CSS Modules"},sidebar:"docs",previous:{title:"Adding Stylesheets",permalink:"/docs/adding-a-stylesheet"},next:{title:"Adding Sass Stylesheets",permalink:"/docs/adding-a-sass-stylesheet"}},c=[{value:"<code>Button.module.css</code>",id:"buttonmodulecss",children:[],level:2},{value:"<code>another-stylesheet.css</code>",id:"another-stylesheetcss",children:[],level:2},{value:"<code>Button.js</code>",id:"buttonjs",children:[],level:2},{value:"Result",id:"result",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,s.kt)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),(0,s.kt)("p",null,"This project supports ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," alongside regular stylesheets using the ",(0,s.kt)("inlineCode",{parentName:"p"},"[name].module.css")," file naming convention. CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format ",(0,s.kt)("inlineCode",{parentName:"p"},"[filename]\\_[classname]\\_\\_[hash]"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Tip:")," Should you want to preprocess a stylesheet with Sass then make sure to ",(0,s.kt)("a",{parentName:"p",href:"/docs/adding-a-sass-stylesheet"},"follow the installation instructions")," and then change the stylesheet file extension as follows: ",(0,s.kt)("inlineCode",{parentName:"p"},"[name].module.scss")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"[name].module.sass"),".")),(0,s.kt)("p",null,"CSS Modules let you use the same CSS class name in different files without worrying about naming clashes. Learn more about CSS Modules ",(0,s.kt)("a",{parentName:"p",href:"https://css-tricks.com/css-modules-part-1-need/"},"here"),"."),(0,s.kt)("h2",{id:"buttonmodulecss"},(0,s.kt)("inlineCode",{parentName:"h2"},"Button.module.css")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},".error {\n  background-color: red;\n}\n")),(0,s.kt)("h2",{id:"another-stylesheetcss"},(0,s.kt)("inlineCode",{parentName:"h2"},"another-stylesheet.css")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},".error {\n  color: red;\n}\n")),(0,s.kt)("h2",{id:"buttonjs"},(0,s.kt)("inlineCode",{parentName:"h2"},"Button.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\nimport styles from './Button.module.css'; // Import css modules stylesheet as styles\nimport './another-stylesheet.css'; // Import regular stylesheet\n\nclass Button extends Component {\n  render() {\n    // reference as a js object\n    return <button className={styles.error}>Error Button</button>;\n  }\n}\n")),(0,s.kt)("h2",{id:"result"},"Result"),(0,s.kt)("p",null,"No clashes from other ",(0,s.kt)("inlineCode",{parentName:"p"},".error")," class names"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This button has red background but not red text --\x3e\n<button class="Button_error_ax7yz">Error Button</button>\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"This is an optional feature.")," Regular ",(0,s.kt)("inlineCode",{parentName:"p"},"<link>")," stylesheets and CSS files are fully supported. CSS Modules are turned on for files ending with the ",(0,s.kt)("inlineCode",{parentName:"p"},".module.css")," extension."))}d.isMDXComponent=!0},7320:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,s){for(var a,l,i=o(e),u=1;u<arguments.length;u++){for(var c in a=Object(arguments[u]))r.call(a,c)&&(i[c]=a[c]);if(t){l=t(a);for(var p=0;p<l.length;p++)n.call(a,l[p])&&(i[l[p]]=a[l[p]])}}return i}},3426:function(e,t,r){var n=r(7320),o=60103,s=60106;var a=60109,l=60110,i=60112;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),s=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),l=p("react.context"),i=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),c=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=g.prototype=new b;v.constructor=g,n(v,y.prototype),v.isPureReactComponent=!0;var k={current:null},S=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,s={},a=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,n)&&!j.hasOwnProperty(n)&&(s[n]=t[n]);var i=arguments.length-2;if(1===i)s.children=r;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];s.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===s[n]&&(s[n]=i[n]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:k.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case s:i=!0}}if(i)return a=a(i=e),e=""===n?"."+N(i,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),_(a,t,r,"",(function(e){return e}))):null!=a&&(O(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=n+N(l=e[u],u);i+=_(l,t,r,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)i+=_(l=l.value,t,r,c=n+N(l,u++),a);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function x(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function M(){var e=E.current;if(null===e)throw Error(f(321));return e}},2784:function(e,t,r){r(3426)}}]);