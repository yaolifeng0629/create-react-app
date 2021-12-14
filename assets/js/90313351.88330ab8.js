/*! For license information please see 90313351.88330ab8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1452],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1222:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(2784),r(3905)),s=["components"],i={id:"adding-bootstrap",title:"Adding Bootstrap"},l=void 0,p={unversionedId:"adding-bootstrap",id:"adding-bootstrap",title:"Adding Bootstrap",description:"While you don\u2019t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice for projects looking for smaller builds at the expense of some features.",source:"@site/../docs/adding-bootstrap.md",sourceDirName:".",slug:"/adding-bootstrap",permalink:"/docs/adding-bootstrap",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/adding-bootstrap.md",tags:[],version:"current",lastUpdatedBy:"Andrew Wong",lastUpdatedAt:1618195058,formattedLastUpdatedAt:"4/11/2021",frontMatter:{id:"adding-bootstrap",title:"Adding Bootstrap"},sidebar:"docs",previous:{title:"Using Global Variables",permalink:"/docs/using-global-variables"},next:{title:"Adding Flow",permalink:"/docs/adding-flow"}},c=[{value:"Using a Custom Theme",id:"using-a-custom-theme",children:[],level:2}],u={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"While you don\u2019t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. ",(0,a.kt)("a",{parentName:"p",href:"https://react-bootstrap.netlify.com/"},"React Bootstrap")," is the most popular option that strives for complete parity with Bootstrap. ",(0,a.kt)("a",{parentName:"p",href:"https://reactstrap.github.io/"},"reactstrap")," is also a good choice for projects looking for smaller builds at the expense of some features."),(0,a.kt)("p",null,"Each project's respective documentation site has detailed instructions for installing and using them. Both depend on the Bootstrap css file so install that as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install bootstrap\n")),(0,a.kt)("p",null,"Alternatively you may use ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add bootstrap\n")),(0,a.kt)("p",null,"Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import 'bootstrap/dist/css/bootstrap.css';\n// Put any other imports below so that CSS from your\n// components takes precedence over default styles.\n")),(0,a.kt)("h2",{id:"using-a-custom-theme"},"Using a Custom Theme"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),(0,a.kt)("p",null,"Sometimes you might need to tweak the visual styles of Bootstrap (or equivalent package)."),(0,a.kt)("p",null,"As of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," you can import ",(0,a.kt)("inlineCode",{parentName:"p"},".scss")," files. This makes it possible to use a package's built-in Sass variables for global style preferences."),(0,a.kt)("p",null,"To enable ",(0,a.kt)("inlineCode",{parentName:"p"},"scss")," in Create React App you will need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"sass"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install sass\n")),(0,a.kt)("p",null,"Alternatively you may use ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add sass\n")),(0,a.kt)("p",null,"To customize Bootstrap, create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"src/custom.scss")," (or similar) and import the Bootstrap source stylesheet. Add any overrides ",(0,a.kt)("em",{parentName:"p"},"before")," the imported file(s). You can reference ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.6/getting-started/theming/#variable-defaults"},"Bootstrap's documentation")," for the names of the available variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"// Override default variables before the import\n$body-bg: #000;\n\n// Import Bootstrap and its default variables\n@import '~bootstrap/scss/bootstrap.scss';\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," You can prefix paths with ",(0,a.kt)("inlineCode",{parentName:"p"},"~"),", as displayed above, to resolve modules from ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),".")),(0,a.kt)("p",null,"Finally, import the newly created ",(0,a.kt)("inlineCode",{parentName:"p"},".scss")," file instead of the default Bootstrap ",(0,a.kt)("inlineCode",{parentName:"p"},".css")," in the beginning of your ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.js")," file, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import './custom.scss';\n")))}f.isMDXComponent=!0},7320:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var s,i,l=o(e),p=1;p<arguments.length;p++){for(var c in s=Object(arguments[p]))r.call(s,c)&&(l[c]=s[c]);if(t){i=t(s);for(var u=0;u<i.length;u++)n.call(s,i[u])&&(l[i[u]]=s[i[u]])}}return l}},3426:function(e,t,r){var n=r(7320),o=60103,a=60106;var s=60109,i=60110,l=60112;var p=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),s=u("react.provider"),i=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),c=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var v=g.prototype=new b;v.constructor=g,n(v,h.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,a={},s=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var p=Array(l),c=0;c<l;c++)p[c]=arguments[c+2];a.children=p}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:s,ref:i,props:a,_owner:k.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return s=s(l=e),e=""===n?"."+S(l,0):n,Array.isArray(s)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),_(s,t,r,"",(function(e){return e}))):null!=s&&(N(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),t.push(s)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var c=n+S(i=e[p],p);l+=_(i,t,r,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),p=0;!(i=e.next()).done;)l+=_(i=i.value,t,r,c=n+S(i,p++),s);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function P(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function B(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function A(){var e=x.current;if(null===e)throw Error(d(321));return e}},2784:function(e,t,r){r(3426)}}]);