(window.webpackJsonp=window.webpackJsonp||[]).push([["core.pages.grid"],{"./src/core/pages/GridPage.tsx":function(e,t,o){"use strict";o.r(t),function(e){var n=o("../node_modules/react/index.js"),r=o.n(n),c=o("./src/core/ioc.ts"),i=o("./src/core/stores/index.tsx"),s=o("../node_modules/react-hot-loader/index.js"),p=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),f=function(e,t,o,n){var r,c=arguments.length,i=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(c<3?r(i):c>3?r(t,o,i):r(t,o))||i);return c>3&&i&&Object.defineProperty(t,o,i),i},a=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(o[n[r]]=e[n[r]])}return o},d=(o("./node_modules/debug/src/browser.js")("pages:home"),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var o,n;return p(t,e),t.prototype.componentDidMount=function(){this.layout.left.setCollapsed(!0),this.layout.right.setShow(!1),this.layout.header.setShow(!1),this.layout.footer.setShow(!1)},t.prototype.render=function(){var e=this.props;e.children,u(e,["children"]);return r.a.createElement("div",{id:"grid-page"})},t.displayName="GridPage",f([Object(c.d)("store"),a("design:type","function"===typeof(o="undefined"!==typeof i.f&&i.f)?o:Object)],t.prototype,"store",void 0),f([Object(c.d)("store.layout"),a("design:type","function"===typeof(n="undefined"!==typeof i.c&&i.c)?n:Object)],t.prototype,"layout",void 0),t}(r.a.Component));t.default=Object(s.hot)(e)(d)}.call(this,o("../node_modules/webpack/buildin/harmony-module.js")(e))}}]);