(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{64:function(t,e,r){var n=r(65);t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},65:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},68:function(t,e,r){t.exports={input:"searchForm_input__28ZJT"}},69:function(t,e,r){"use strict";var n=r(70),o=r(74),a=r(75),i=r(79),c=r(80),u=r(81);function s(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(t,e){return e.encode?e.strict?i(t):encodeURIComponent(t):t}function l(t,e){return e.decode?c(t):t}function p(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function y(t){var e=(t=p(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function m(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,e){s((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"===typeof r&&r.split("").indexOf(t.arrayFormatSeparator)>-1?r.split(t.arrayFormatSeparator).map((function(e){return l(e,t)})):null===r?r:l(r,t);n[e]=o};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),a=Object.create(null);if("string"!==typeof t)return a;if(!(t=t.trim().replace(/^[?#&]/,"")))return a;var i,c=o(t.split("&"));try{for(c.s();!(i=c.n()).done;){var f=i.value,p=u(e.decode?f.replace(/\+/g," "):f,"="),y=n(p,2),h=y[0],b=y[1];b=void 0===b?null:"comma"===e.arrayFormat?b:l(b,e),r(l(h,e),b,a)}}catch(x){c.e(x)}finally{c.f()}for(var v=0,d=Object.keys(a);v<d.length;v++){var g=d[v],j=a[g];if("object"===typeof j&&null!==j)for(var O=0,S=Object.keys(j);O<S.length;O++){var w=S[O];j[w]=m(j[w],e)}else a[g]=m(j,e)}return!1===e.sort?a:(!0===e.sort?Object.keys(a).sort():Object.keys(a).sort(e.sort)).reduce((function(t,e){var r=a[e];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"===typeof e?t(Object.keys(e)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return e[t]})):e}(r):t[e]=r,t}),Object.create(null))}e.extract=y,e.parse=h,e.stringify=function(t,e){if(!t)return"";s((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);var r=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n?r:[].concat(a(r),null===n?[[f(e,t),"[",o,"]"].join("")]:[[f(e,t),"[",f(o,t),"]=",f(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n?r:[].concat(a(r),null===n?[[f(e,t),"[]"].join("")]:[[f(e,t),"[]=",f(n,t)].join("")])}};case"comma":case"separator":return function(e){return function(r,n){return null===n||void 0===n||0===n.length?r:0===r.length?[[f(e,t),"=",f(n,t)].join("")]:[[r,f(n,t)].join(t.arrayFormatSeparator)]}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n?r:[].concat(a(r),null===n?[f(e,t)]:[[f(e,t),"=",f(n,t)].join("")])}}}}(e),n=Object.assign({},t);if(e.skipNull)for(var o=0,i=Object.keys(n);o<i.length;o++){var c=i[o];void 0!==n[c]&&null!==n[c]||delete n[c]}var u=Object.keys(n);return!1!==e.sort&&u.sort(e.sort),u.map((function(n){var o=t[n];return void 0===o?"":null===o?f(n,e):Array.isArray(o)?o.reduce(r(n),[]).join("&"):f(n,e)+"="+f(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){return{url:p(t).split("?")[0]||"",query:h(y(t),e)}},e.stringifyUrl=function(t,r){var n=p(t.url).split("?")[0]||"",o=e.extract(t.url),a=e.parse(o),i=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url),c=Object.assign(a,t.query),u=e.stringify(c,r);return u&&(u="?".concat(u)),"".concat(n).concat(u).concat(i)}},70:function(t,e,r){var n=r(71),o=r(72),a=r(64),i=r(73);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||i()}},71:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},72:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}},73:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},74:function(t,e,r){var n=r(64);t.exports=function(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,c=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}},75:function(t,e,r){var n=r(76),o=r(77),a=r(64),i=r(78);t.exports=function(t){return n(t)||o(t)||a(t)||i()}},76:function(t,e,r){var n=r(65);t.exports=function(t){if(Array.isArray(t))return n(t)}},77:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},78:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},79:function(t,e,r){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},80:function(t,e,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],a(r),a(n))}function i(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(n),r=1;r<e.length;r++)e=(t=a(e,r).join("")).match(n);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=o.exec(t);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(e){var a=i(n[0]);a!==n[0]&&(r[n[0]]=a)}n=o.exec(t)}r["%C2"]="\ufffd";for(var c=Object.keys(r),u=0;u<c.length;u++){var s=c[u];t=t.replace(new RegExp(s,"g"),r[s])}return t}(t)}}},81:function(t,e,r){"use strict";t.exports=function(t,e){if("string"!==typeof t||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},84:function(t,e,r){"use strict";r.r(e);var n=r(12),o=r(13),a=r(14),i=r(15),c=r(0),u=r.n(c),s=r(7),f=r(21);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m=r(68),h=r.n(m),b=function(t){Object(i.a)(r,t);var e=Object(a.a)(r);function r(){var t;Object(n.a)(this,r);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={name:""},t.handleChange=function(e){var r=e.target,n=r.name,o=r.value;t.setState(l({},n,o))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(y({},t.state)),t.reset()},t.reset=function(){t.setState({name:""})},t}return Object(o.a)(r,[{key:"render",value:function(){var t=this.state.name;return u.a.createElement(u.a.Fragment,null,u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement("input",{type:"text",name:"name",value:t,autoComplete:"off",autoFocus:!0,onChange:this.handleChange,placeholder:"Search movies",className:h.a.input}),u.a.createElement("button",{type:"submit"},"Search")))}}]),r}(c.Component),v=Object(s.f)(b),d=r(31),g=r(69),j=r.n(g),O=function(t){Object(i.a)(r,t);var e=Object(a.a)(r);function r(){var t;Object(n.a)(this,r);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={films:[],query:""},t.onSubmitForm=function(e){var r=e.name;t.setState({query:r})},t.onQueryChange=function(e){t.props.history.push({pathname:t.props.location.pathname,search:"query=".concat(e)})},t}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var t=this,e=j.a.parse(this.props.location.search);void 0!==e.query&&(this.setState({query:e.query}),f.a(e.query).then((function(e){return t.setState({films:e})})))}},{key:"componentDidUpdate",value:function(t,e){var r=this,n=j.a.parse(t.location.search),o=j.a.parse(this.props.location.search);if(n.query!==o.query&&f.a(o.query).then((function(t){return r.setState({films:t})})),e.query!==this.state.query){var a=this.state.query;this.onQueryChange(a),f.a(a).then((function(t){return r.setState({films:t})}))}}},{key:"render",value:function(){var t=this.state,e=t.films,r=t.query;return u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{path:"".concat(this.props.match.path,"/query=").concat(r),component:d.a}),u.a.createElement(v,{onSubmit:this.onSubmitForm}),u.a.createElement(d.a,{films:e}))}}]),r}(c.Component);e.default=O}}]);
//# sourceMappingURL=MoviesPage.152f0650.chunk.js.map