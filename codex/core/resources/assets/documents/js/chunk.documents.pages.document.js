(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1513:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(11),i=r(32),u=r(0),s=r.n(u),c=r(19),a=r(699),p=r.n(a),f=r(525),l=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),h=function(t,e,r,n){var o,i=arguments.length,u=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(u=(i<3?o(u):i>3?o(e,r,u):o(e,r))||u);return i>3&&u&&Object.defineProperty(e,r,u),u},y=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},b=function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function u(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(u,s)}c((n=n.apply(t,e||[])).next())})},d=function(t,e){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},v=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&(r[n[o]]=t[n[o]])}return r},O=r(12)("pages:DocumentPage"),g=f.b.div({enter:{opacity:1,delay:500},exit:{opacity:0,transition:{duration:500}}}),w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}var r,u,a;return l(e,t),e.prototype.getChildContext=function(){return{router:o.app.get("router"),document:this.store.document}},e.prototype.fetch=function(){return b(this,void 0,void 0,function(){var t,e,r,n;return d(this,function(o){return t=this.props,e=t.project,r=t.revision,n=t.document,this.store.document&&this.store.document.key===n||(this.store.setDocument(null),this.store.fetchDocument(e,r,n)),[2]})})},e.prototype.componentDidMount=function(){this.fetch()},e.prototype.componentDidUpdate=function(t,e,r){this.fetch()},e.prototype.render=function(){var t=this.props,e=(t.children,t.routeState,t.history,t.staticContext,t.location,t.match,v(t,["children","routeState","history","staticContext","location","match"])),r=this.store.document;return!r&&O("render","NO DOCUMENT",{document:r,props:e}),r&&O("render","WITH DOCUMENT",r.key,{document:r,props:e}),n.createElement(g,Object.assign({id:"document",pose:r?"enter":"exit"},e),r?[n.createElement(p.a,{key:"0"},n.createElement("title",null,r.title||r.key)),this.hc.parse(r.content)]:null)},e.displayName="DocumentPage",e.childContextTypes={router:s.a.object.isRequired,document:s.a.object,attributes:s.a.object},h([Object(o.lazyInject)("api"),y("design:type","function"==typeof(r=void 0!==i.a&&i.a)?r:Object)],e.prototype,"api",void 0),h([Object(o.lazyInject)("components"),y("design:type","function"==typeof(u=void 0!==o.HtmlComponents&&o.HtmlComponents)?u:Object)],e.prototype,"hc",void 0),h([Object(o.lazyInject)("store"),y("design:type","function"==typeof(a=void 0!==o.Store&&o.Store)?a:Object)],e.prototype,"store",void 0),e=h([c.observer],e)}(n.Component);e.default=w},32:function(t,e,r){"use strict";var n,o,i,u={};r.r(u),r.d(u,"Operator",function(){return n}),r.d(u,"LogicalOperator",function(){return o}),r.d(u,"Order",function(){return i}),function(t){t.Equals="EQUALS",t.EqualsStrict="EQUALS_STRICT",t.NotEquals="NOT_EQUALS",t.NotEqualsStrict="NOT_EQUALS_STRICT",t.GreaterThan="GREATER_THAN",t.GreaterThanOrEqual="GREATER_THAN_OR_EQUAL",t.LessThan="LESS_THAN",t.LessThanOrEqual="LESS_THAN_OR_EQUAL"}(n||(n={})),function(t){t.And="AND",t.Or="OR"}(o||(o={})),function(t){t.Asc="ASC",t.Desc="DESC"}(i||(i={}));var s=r(172),c=r.n(s),a=r(10),p=function(){function t(t,e){this.baseResponse=t,this.content=e}return Object.defineProperty(t.prototype,"body",{get:function(){return this.baseResponse.body},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bodyUsed",{get:function(){return this.baseResponse.bodyUsed},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"headers",{get:function(){return this.baseResponse.headers},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ok",{get:function(){return this.baseResponse.ok},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"redirected",{get:function(){return this.baseResponse.redirected},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"status",{get:function(){return this.baseResponse.status},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"statusText",{get:function(){return this.baseResponse.statusText},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"trailer",{get:function(){return this.baseResponse.trailer},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this.baseResponse.type},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return this.baseResponse.url},enumerable:!0,configurable:!0}),t.prototype.arrayBuffer=function(){return this.baseResponse.arrayBuffer()},t.prototype.blob=function(){return this.baseResponse.blob()},t.prototype.clone=function(){return this.baseResponse.clone()},t.prototype.formData=function(){return this.baseResponse.formData()},t.prototype.json=function(){return this.baseResponse.json()},t.prototype.text=function(){return this.baseResponse.text()},t}(),f=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),l=function(){function t(t,e){this.response=t,this.request=e,this.errors=[]}return Object.defineProperty(t.prototype,"ok",{get:function(){return this.response.ok},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"status",{get:function(){return this.response.status},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"headers",{get:function(){return this.response.headers},enumerable:!0,configurable:!0}),t.prototype.hasErrors=function(){return this.errors.length>0},t}(),h=function(t){function e(e,r){var n,o=t.call(this,e,r)||this;return o.data=e.content.data||{},e.content.errors&&e.content.errors.length>0&&(n=o.errors).push.apply(n,e.content.errors),o}return f(e,t),e}(l),y=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.data=e.content||[],n.data.forEach(function(t){var e;t.errors&&t.errors.length>0&&(e=n.errors).push.apply(e,t.errors)}),n}return f(e,t),e}(l),b=function(t){function e(e,r,n){var o=t.call(this,r,n)||this;return o.data={},r.content=r.content||[],Object.keys(e).forEach(function(t,e){o.data[t]=r.content[e]}),r.content.forEach(function(t){var e;t.errors&&t.errors.length>0&&(e=o.errors).push.apply(e,t.errors)}),o}return f(e,t),e}(l),d=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),v=function(t){function e(r,n){var o=t.call(this,e.extractMessage(r))||this;return o.result=r,o.request=n,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(o,e),o}return d(e,t),e.extractMessage=function(t){try{return t.errors[0].message}catch(e){return"GraphQL Error (Code: "+t.status+")"}},e}(Error),O=function(){return(O=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},g=function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function u(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(u,s)}c((n=n.apply(t,e||[])).next())})},w=function(t,e){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},m=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&(r[n[o]]=t[n[o]])}return r},j=function(){function t(){this.hooks={query:new a.SyncHook(["request"]),queryResult:new a.SyncWaterfallHook(["result"]),queryBatch:new a.SyncHook(["requests"]),queryBatchResult:new a.SyncWaterfallHook(["result"]),queryMapBatch:new a.SyncHook(["requests"]),queryMapBatchResult:new a.SyncWaterfallHook(["result"])},this.options={url:"/graphql",headers:{"Content-Type":"application/json"},method:"POST"}}return t.prototype.configure=function(t,e){return void 0===e&&(e=!0),e?c()(this.options,t):this.options=t,this},t.prototype.query=function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r={}),g(this,void 0,void 0,function(){var n,o;return w(this,function(i){switch(i.label){case 0:return n={query:t,variables:e},this.hooks.query.call(n),[4,this.fetch({query:t,lessVariables:e},r)];case 1:return o=i.sent(),[2,o=this.hooks.queryResult.call(o)]}})})},t.prototype.queryBatch=function(t,e){return void 0===e&&(e={}),g(this,void 0,void 0,function(){var r;return w(this,function(n){switch(n.label){case 0:return this.hooks.queryBatch.call(t),[4,this.batch(t,e)];case 1:return r=n.sent(),[2,r=this.hooks.queryBatchResult.call(r)]}})})},t.prototype.queryMapBatch=function(t,e){return void 0===e&&(e={}),g(this,void 0,void 0,function(){var r;return w(this,function(n){switch(n.label){case 0:return this.hooks.queryMapBatch.call(t),[4,this.batchMap(t,e)];case 1:return r=n.sent(),[2,r=this.hooks.queryMapBatchResult.call(r)]}})})},t.prototype.fetch=function(t,e){return void 0===e&&(e={}),g(this,void 0,void 0,function(){var r,n;return w(this,function(o){switch(o.label){case 0:return[4,this.request(R(t),e)];case 1:if(r=o.sent(),(n=new h(r,t)).status>=200&&n.status<400&&!n.hasErrors())return[2,n];throw new v(n,t)}})})},t.prototype.batch=function(t,e){return void 0===e&&(e={}),g(this,void 0,void 0,function(){var r,n;return w(this,function(o){switch(o.label){case 0:return[4,this.request(R(t),e)];case 1:if(r=o.sent(),(n=new y(r,t)).status>=200&&n.status<400&&!n.hasErrors())return[2,n];throw new v(n,t)}})})},t.prototype.batchMap=function(t,e){return void 0===e&&(e={}),g(this,void 0,void 0,function(){var r,n,o;return w(this,function(i){switch(i.label){case 0:return r=Object.values(t),[4,this.request(R(r),e)];case 1:if(n=i.sent(),(o=new b(t,n,r)).status>=200&&o.status<400&&!o.hasErrors())return[2,o];throw new v(o,r)}})})},t.prototype.setHeader=function(t,e){var r,n=this.options.headers;return n?n[t]=e:this.options.headers=((r={})[t]=e,r),this},t.prototype.getContent=function(t){return g(this,void 0,void 0,function(){var e;return w(this,function(r){return(e=t.headers.get("Content-Type"))&&e.startsWith("application/json")?[2,t.json()]:[2,t.text()]})})},t.prototype.request=function(t,e){return void 0===e&&(e={}),g(this,void 0,void 0,function(){var r,n,o,i;return w(this,function(u){switch(u.label){case 0:return e=c()({},this.options,e),r=e.url,n=m(e,["url"]),[4,fetch(r,O({body:t},n))];case 1:return o=u.sent(),[4,this.getContent(o)];case 2:return i=u.sent(),[2,new p(o,i)]}})})},t}();function R(t){return JSON.stringify(t)}r.d(e,"a",function(){return j}),r.d(e,"b",function(){return u})}}]);