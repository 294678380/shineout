(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[17],{123:function(e,t,n){"use strict";n.d(t,"h",function(){return a}),n.d(t,"i",function(){return r}),n.d(t,"j",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"f",function(){return s}),n.d(t,"e",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return l}),n.d(t,"b",function(){return d}),n.d(t,"g",function(){return h});var a=function(e){return"__CHANGE_SUBSCRIBE_".concat(e,"__")},r=function(e){return"__ERROR_SUBSCRIBE_".concat(e,"__")},i=function(e){return"__UPDATE_SUBSCRIBE_".concat(e,"__")},o="__CHANGE_TOPIC__",s="__VALIDATE_TOPIC__",c="__RESET_TOPIC__",u="__VALIDATE_FORCE_PASS__",l="__IGNORE_VALIDATE__",d="__UPDATE_ERROR_TYPE__",h="__WITH_OUT_DISPATCH__"},124:function(e,t,n){"use strict";var a=n(24),r=n(5),i=n(6),o=n(8),s=n(2),c=n(7),u=n(3),l=n(0),d=n.n(l),h=n(161),f=n(39),m=n(17);t.a=function(t){return function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).state={active:"",headings:[]},t.setHeading=t.setHeading.bind(Object(u.a)(Object(u.a)(t))),t.handleScroll=t.handleScroll.bind(Object(u.a)(Object(u.a)(t))),t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){this.bindScroll(),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.$willUnmount=!0,this.unbindScroll()}},{key:"setHeading",value:function(e){this.setState({headings:[].concat(Object(a.a)(this.state.headings),Object(a.a)(e))})}},{key:"bindScroll",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"unbindScroll",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var n=document.documentElement.scrollTop,e=this.state.headings.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),this.$willUnmount||this.setState({active:a})}}},{key:"renderNav",value:function(){var a=this,e=this.state,r=e.active,t=e.headings;return d.a.createElement(h.a,{className:Object(m.f)("sticky"),top:50},d.a.createElement("div",{className:Object(m.f)("nav")},t.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:t,className:Object(m.f)("level-".concat(e.level),r===e.id&&"active"),onClick:function(e){if(0===f.a.location.search.indexOf("?example="))f.a.push("".concat(f.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(a,e.id)},n)})))}},{key:"render",value:function(){return d.a.createElement("div",{className:Object(m.f)("_")},d.a.createElement(t,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),n}(d.a.Component)}},125:function(e,t,n){"use strict";var a=n(154),u=n.n(a),l=Object.prototype.hasOwnProperty;function d(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function h(e,t){if(!e[t])return[];var n=e[t];return Array.isArray(n)?n:[n]}t.a=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(d(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var a=Object.keys(e),r=Object.keys(t),i=h(n,"skip"),o=h(n,"deep");if(a.length!==r.length)return!1;a.sort(function(e,t){return o.indexOf(e)-o.indexOf(t)});for(var s=0;s<a.length;s++){var c=a[s];if(!i.includes(c)&&(!l.call(t,c)||!d(e[c],t[c]))){if(e[c]instanceof Error&&t[c]instanceof Error){if(e[c].message!==t[c].message)return!1;continue}if(!o.includes(c))return!1;if(!u()(e[c],t[c]))return!1}}return!0}},127:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return d});var i=n(5),o=n(8),s=n(2),a=n(7),r=n(178),c=function(e){function r(e,t,n){var a;return Object(i.a)(this,r),(a=Object(o.a)(this,Object(s.a)(r).call(this))).message=e,a.name=t,a.value=n,a}return Object(a.a)(r,e),r}(Object(r.a)(Error)),u=function e(t){return t instanceof Error?new c(t.message):Array.isArray(t)?t.map(e):t},l=function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];return new Promise(function(n,a){Promise.all(e).then(function(e){var t=e.find(function(e){return!0!==e});t?a(t):n(!0)}).catch(function(e){a(t?u(e):e)})})},d=function(e,t){return e===t||(e instanceof Error&&t instanceof Error?e.message===t.message:e===t)}},130:function(e,t,n){"use strict";var f=n(0),m=n.n(f),o=n(21),a=n(24),r=n(5),i=n(6),s=n(8),c=n(2),u=n(7),l=n(3),d=n(163),h=n.n(d),v=n(35),p=n(17),g=n(25),b=n(11),y=n.n(b),O=n(164),j=n.n(O),k=function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,i=Object(f.useRef)(null);return Object(f.useEffect)(function(){var e=i.current;j.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),m.a.createElement("pre",{ref:i,className:y()(n||"lang-jsx",Object(p.a)("pre"))},m.a.createElement("code",null,r))},E=n(150),w=n(32),$=n(27),C=n(137),x=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(c.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(u.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(C.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(C.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:m.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}($.b),V=n(46),_=n(39),S=m.a.createElement("div",{className:Object(p.a)("placeholder")},m.a.createElement(w.a,null)),D=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(c.a)(n).call(this,e))).setCodeBlockHeight=function(e){t.codeHeight=e},t.bindCodeBlock=function(e){t.codeblock=e},t.state={showcode:!1},t}return Object(u.a)(n,e),Object(i.a)(n,[{key:"collapse",value:function(e,t,n){var a=this;this.codeblock.style.height="".concat(e*(t-1),"px"),1<t&&setTimeout(function(){a.collapse(e,t-1,n)},16),n&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(t){var n=this,a=!this.state.showcode;this.setState({showcode:a},function(){if(a)n.codeblock.style.height="".concat(n.codeHeight,"px");else{var e=n.codeHeight%15;0<e&&n.collapse(e,1,t),n.collapse((n.codeHeight-e)/15,15,t)}})}},{key:"renderCodeHandle",value:function(e){var t=this.state.showcode;return m.a.createElement("a",{href:"javascript:;",className:Object(p.a)("toggle"),onClick:this.toggleCode.bind(this,e)},m.a.createElement(V.a,{name:t?"code-close":"code"}))}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.id,a=e.name,r=e.rawText,i=this.state.showcode,o=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),s=_.a.location.search,c="?example=";if(0===s.indexOf(c)&&(s=s.replace(c,""),a.indexOf(s)<0))return null;var u=this.props.title.split("\n"),l=Object(E.a)(u),d=l[0],h=l.slice(1);return d&&(d=d.trim()),m.a.createElement(f.Fragment,null,d&&m.a.createElement("h3",{key:"0",id:n},d),m.a.createElement(x,{placeholder:S},m.a.createElement("div",{className:Object(p.a)("_",i&&"showcode")},m.a.createElement("div",{className:Object(p.a)("body")},Object(f.createElement)(t)),0<this.props.title.length&&m.a.createElement("div",{className:Object(p.a)("desc")},h.map(function(e,t){return m.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),this.renderCodeHandle(!1)),m.a.createElement("div",{ref:this.bindCodeBlock,className:Object(p.a)("code")},m.a.createElement(k,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,value:o}),this.renderCodeHandle(!0)))))}}]),n}(f.Component);D.defaultProps={rawText:""};var A=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(c.a)(n).call(this,e))).toggle=function(){t.setState({expanded:!t.state.expanded})},t.state={expanded:!1},t}return Object(u.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.expanded,n=e.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),a=t?"pre":"div";return m.a.createElement("div",{onClick:this.toggle,className:Object(p.e)("console")},m.a.createElement(a,null,n))}}]),n}(f.PureComponent);A.defaultProps={children:[]};var T=A,H=/^<code name="([\w|-]+)" /,L=/^<example name="([\w|-]+)"/,N=function(e){function t(e){var o;return Object(r.a)(this,t),(o=Object(s.a)(this,Object(c.a)(t).call(this,e))).renderHeading=function(e){var t=e.level,n=e.children,a="".concat(t,"-").concat(n[0]),r="h".concat(t);if("object"==typeof n[0])return m.a.createElement(r,null,n);if(!o.cache[a]){var i="heading-".concat(Object(v.b)());2!==t&&3!==t||o.appendHeading({id:i,level:t,children:n}),o.cache[a]=m.a.createElement(r,{id:i},n)}return o.cache[a]},o.headings=[],o.appendHeading=o.appendHeading.bind(Object(l.a)(Object(l.a)(o))),o.cache={},o}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var t=this.props.codes[e];return t?[m.a.createElement(k,{key:"cb",value:t.text})].concat(Object(a.a)(t.log.map(function(e,t){return m.a.createElement(T,{key:t},e)}))):(console.error("Code ".concat(e," not existed")),null)}},{key:"renderExamples",value:function(){var i=this;if(this.cache.examples)return this.cache.examples;var e=this.props.examples;if(!e)return m.a.createElement("div",null);var t=Object(g.a)("示例","Example"),n="heading-".concat(Object(v.b)());return this.appendHeading({id:n,level:2,children:[t]}),this.cache.examples=[m.a.createElement("h2",{key:"h",id:n},t)].concat(Object(a.a)(e.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(o.a)(a,1)[0];return i.appendHeading({id:n,level:3,children:[r]}),m.a.createElement(D,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),this.cache.examples}},{key:"renderExample",value:function(t){var e="example-".concat(t);if(!this.cache[e]){var n=(this.props.examples||[]).find(function(e){return e.name===t});this.cache[e]=n?m.a.createElement(D,n):null}return this.cache[e]}},{key:"render",value:function(){var r=this,e=this.props.source;return this.headings=[],m.a.createElement(h.a,{className:Object(p.e)("_"),source:e,renderers:{code:k,heading:this.renderHeading,html:function(e){var t=e.value;if("<example />"===t)return r.renderExamples();var n=t.match(L);if(n)return r.renderExample(n[1],0<=t.indexOf("noExpand"));if("<br>"===t||"<br />"===t)return m.a.createElement("br",null);var a=t.match(H);return a?r.renderCode(a[1]):null},link:function(e){var t=e.href,n=e.children,a=t.indexOf(!1)?"_blank":void 0;return m.a.createElement("a",{href:t,target:a},n)}}})}}]),t}(f.PureComponent);N.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var P=n(45),I=n(124);n.d(t,"a",function(){return U});var R,B=((R=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(c.a)(n).call(this,e))).state={source:t.props.source},t}return Object(u.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.props.loader&&this.props.loader().then(function(e){t.setState({source:e.default})})}},{key:"render",value:function(){var e=this.state.source;return e?m.a.createElement(N,Object.assign({},this.props,{source:e})):m.a.createElement(P.a,{style:{minHeight:200}})}}]),n}(f.PureComponent)).defaultProps={loader:void 0,source:void 0},R);t.b=B;function U(t){return Object(I.a)(function(e){return m.a.createElement(B,Object.assign({},e,{loader:t}))})}},134:function(e,t,n){"use strict";var a=n(138),v=n(5),p=n(6),g=n(125),b=n(123),r=function(){function u(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Object(v.a)(this,u);var t=e.format,n=e.onChange,a=e.separator,r=e.value,i=e.prediction,o=e.distinct,s=e.disabled,c=e.limit;this.distinct=o,this.limit=c,this.separator=a,this.initFormat(t),this.$events={},this.$cachedDisabled={},this.setDisabled(s),i&&(this.prediction=i),this.setValue(r,b.g),this.onChange=n}return Object(p.a)(u,[{key:"setDisabled",value:function(e){this.$cachedDisabled!==e&&(this.$cachedDisabled=e,this.disabled=function(){switch(typeof e){case"boolean":return e;case"function":return e.apply(void 0,arguments);default:return!1}})}},{key:"handleChange",value:function(e){if(this.$values=e,this.dispatch(b.a),this.onChange){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];this.onChange.apply(this,[this.getValue()].concat(n))}}},{key:"add",value:function(e){var t=this;if(null!=e){1===this.limit&&(this.$values=[]);var n=Array.isArray(e)?e:[e];n=n.filter(function(e){return!t.disabled(e)&&(!t.distinct||!t.check(e))});var a=[],r=!0,i=!1,o=void 0;try{for(var s,c=n[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u=s.value,l=this.format(u);void 0!==l&&a.push(l)}}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}this.handleChange(this.values.concat(a),e,!0)}}},{key:"set",value:function(e){this.$values=[],this.add(e)}},{key:"check",value:function(e){if(this.prediction){for(var t=0,n=this.values.length;t<n;t++)if(this.prediction(this.values[t],e))return!0;return!1}return 0<=this.values.indexOf(this.format(e))}},{key:"clear",value:function(){this.values=[]}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=this.$events[e];r&&r.forEach(function(e){return e.apply(void 0,n)})}},{key:"initFormat",value:function(t){switch(typeof t){case"string":this.format=function(e){return e[t]};break;case"function":this.format=function(e){return t(e)};break;default:this.format=function(e){return e}}}},{key:"defaultPrediction",value:function(e,t){return e===this.format(t)}},{key:"remove",value:function(e){var t=this;if(e){var n=Array.isArray(e)?e:[e];n=n.filter(function(e){return!t.disabled(e)});var a=[],r=this.prediction||this.defaultPrediction.bind(this),i=!0,o=!1,s=void 0;try{e:for(var c,u=this.values[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){for(var l=c.value,d=0;d<n.length;d++)if(r(l,n[d])){n.splice(d,1);continue e}a.push(l)}}catch(e){o=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw s}}this.handleChange(a,e,!1)}}},{key:"subscribe",value:function(e,t){this.$events[e]||(this.$events[e]=[]);var n=this.$events[e];t in n||n.push(t)}},{key:"unsubscribe",value:function(e,t){this.$events[e]&&(this.$events[e]=this.$events[e].filter(function(e){return e!==t}))}},{key:"getValue",value:function(){var e=this.values;return 1===this.limit?e=this.values[0]:this.separator&&(e=this.values.join(this.separator)),this.$cachedValue=e}},{key:"resetValue",value:function(e){this.$values=e,this.onChange&&this.onChange(this.getValue()),this.dispatch(b.a),this.dispatch("set-value")}},{key:"formatValue",value:function(e){return 1!==this.limit||Array.isArray(e)?e?Array.isArray(e)?e:"string"==typeof e?this.separator?e.split(this.separator).map(function(e){return e.trim()}):(console.warn("Select separator parameter is empty."),[e]):(console.error(new Error("Select values is not valid.")),[]):[]:[e]}},{key:"setValue",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0;Object(g.a)(this.$cachedValue,e)||(t===b.g?this.$values=this.formatValue(e):this.resetValue(this.formatValue(e)))}},{key:"length",get:function(){return this.$values.length}},{key:"values",get:function(){return this.$values},set:function(e){this.$values=e,this.dispatch(b.a),this.onChange&&this.onChange(this.getValue())}}]),u}(),y=n(20),O=n(8),j=n(2),k=n(7),E=n(0),w=n.n(E),i=n(36),$={form:a.a,list:r},o=Object(i.b)(function(e,a){var t,n,r=e||{},i=r.type,o=void 0===i?"list":i,s=r.key,c=void 0===s?"value":s,u=r.limit,l=void 0===u?0:u,d=r.bindProps,h=void 0===d?[]:d,f=r.ignoreUndefined,m=$[o];return n=t=function(e){function s(n){var e;Object(v.a)(this,s),e=Object(O.a)(this,Object(j.a)(s).call(this,n));var t=n.datum,a=n.onChange,r=n.initValidate,i=n[c];if(t instanceof m)e.datum=t;else{var o=h.reduce(function(e,t){return e[t]=n[t],e},{value:i,limit:l,initValidate:r});e.datum=new m(Object.assign(o,t))}return a&&(e.datum.onChange=a),e}return Object(k.a)(s,e),Object(p.a)(s,[{key:"componentDidMount",value:function(){this.prevValues=this.props[c]}},{key:"componentDidUpdate",value:function(){var e=this.props[c];Object(g.a)(e,this.prevValues)||(this.setValue(this.props.initValidate?void 0:b.d),this.prevValues=e)}},{key:"setValue",value:function(e){var t=this.props[c];f&&void 0===t||this.datum.setValue(t,e)}},{key:"render",value:function(){var e=this.props,t=e.onDatumBind,n=Object(y.a)(e,["onDatumBind"]);return t&&t(this.datum),h.includes("disabled")&&void 0!==n.disabled&&this.datum.setDisabled(n.disabled),"list"===o&&this.setValue(b.g),w.a.createElement(a,Object.assign({},n,{datum:this.datum}))}}]),s}(E.PureComponent),t.defaultProps={initValidate:!1},n});t.a={Form:a.a,List:r,hoc:o}},137:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return l});var a=n(148),r=n(35),i={},o=null,s=!1,c=window.innerHeight||document.documentElement.clientHeight;function u(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>c){var n=Object(r.b)();return i[n]=e,n}return e.render(),null}function l(e){e&&delete i[e]}document.addEventListener("scroll",function(){o&&clearTimeout(o),o=setTimeout(function(){s||(s=!0,Object.keys(i).forEach(function(e){var t=i[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>c||(delete i[e],a())}),s=!1),o=null},80)},a.a)},138:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n(24),u=n(5),a=n(6),r=n(154),i=n.n(r),s=n(44),l=n(47),d=n(31),h=n(4),f=n(127),m=n(123),c=function(){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Object(u.a)(this,c);var t=e.removeUndefined,n=void 0===t||t,a=e.rules,r=e.onChange,i=e.value,o=e.error,s=e.initValidate;this.rules=a,this.onChange=r,this.removeUndefined=n,this.$inputNames={},this.$values={},this.$defaultValues={},this.$validator={},this.$events={},this.$errors={},this.deepSetOptions={removeUndefined:n,forceSet:!0},i&&this.setValue(i,s?void 0:m.d),o&&this.setError("",o)}return Object(a.a)(c,[{key:"handleChange",value:function(){this.onChange&&this.onChange(this.getValue())}},{key:"reset",value:function(){this.$errors={},this.setValue(Object(s.f)(Object(l.b)(this.$defaultValues)),m.c,!0),this.handleChange(),this.dispatch(m.e)}},{key:"get",value:function(e){var t=this;return Array.isArray(e)?e.map(function(e){return t.get(e)}):Object(d.a)(this.$values,e)}},{key:"set",value:function(e,t,n){Object(h.h)(e)&&(t=Object(d.f)(e),e=Object.keys(e)),Object(h.a)(e)?this.setArrayValue(e,t):t!==this.get(e)&&(Object(d.d)(this.$values,e,t,this.deepSetOptions),this.$inputNames[e]&&(this.dispatch(Object(m.j)(e),t,e),this.dispatch(Object(m.h)(e))),n&&this.publishValue(e,m.c),this.dispatch(m.a),this.handleChange())}},{key:"setArrayValue",value:function(e,n){var a=this;e.forEach(function(e,t){Object(d.d)(a.$values,e,n[t],a.deepSetOptions)}),e.forEach(function(e,t){a.$inputNames[e]&&(a.dispatch(Object(m.j)(e),n[t],e),a.dispatch(Object(m.h)(e)))}),this.dispatch(m.a),this.handleChange()}},{key:"insert",value:function(e,t,n){this.insertError(e,t,void 0),this.get(e).splice(t,0,n),this.publishValue(e,m.d),this.publishError(e)}},{key:"splice",value:function(e,t){this.spliceError(e,t),this.get(e).splice(t,1),this.publishValue(e,m.d),this.publishError(e)}},{key:"remove",value:function(e){Object(d.c)(this.$values,e)}},{key:"publishValue",value:function(e,t){var n=this,a="".concat(e,"["),r="".concat(e,".");Object.keys(this.$inputNames).filter(function(e){return 0===e.indexOf(a)||0===e.indexOf(r)}).forEach(function(e){n.dispatch(Object(m.j)(e),n.get(e),e,t)})}},{key:"getError",value:function(e,t){return t?this.$errors[e]:Object(s.b)(e,this.$errors)}},{key:"setError",value:function(e,t,n){void 0===t?delete this.$errors[e]:this.$errors[e]=t,this.dispatch(Object(m.i)(e),this.getError(e),e,m.b),n&&this.publishError(e)}},{key:"insertError",value:function(e,t,n){Object(s.d)(this.$errors,e,t,n)}},{key:"spliceError",value:function(e,t){Object(s.e)(this.$errors,e,t)}},{key:"publishError",value:function(e){var t=this,n="".concat(e,"["),a="".concat(e,".");Object.keys(this.$inputNames).filter(function(e){return 0===e.indexOf(n)||0===e.indexOf(a)}).forEach(function(e){t.dispatch(Object(m.i)(e),t.getError(e),e,m.b)})}},{key:"getRule",value:function(e){return this.rules&&Object(d.a)(this.rules,e)||[]}},{key:"getValue",value:function(){return Object(l.b)(this.$values)}},{key:"setValue",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length?arguments[1]:void 0;!(2<arguments.length?arguments[2]:void 0)&&i()(e,this.$values)||(this.$values=Object(d.b)({},e,{clone:!0}),setTimeout(function(){Object.keys(t.$inputNames).sort(function(e,t){return e.length-t.length}).forEach(function(e){t.dispatch(Object(m.j)(e),t.get(e),e,n),t.dispatch(Object(m.h)(e))}),t.dispatch(m.a)}))}},{key:"bind",value:function(e,t,n,a){this.$inputNames[e]&&console.warn('There is already an item with name "'.concat(e,'" exists. The name props must be unique.')),void 0===n||this.get(e)||(this.set(e,n,!0),this.dispatch(Object(m.h)(e)),this.dispatch(m.a)),n&&(this.$defaultValues[e]=Object(l.b)(n)),this.$validator[e]=a,this.$inputNames[e]=!0,this.subscribe(Object(m.j)(e),t),this.subscribe(Object(m.i)(e),t)}},{key:"unbind",value:function(e){var t=this;Array.isArray(e)?e.forEach(function(e){return t.unbind(e)}):(this.unsubscribe(Object(m.j)(e)),this.unsubscribe(Object(m.i)(e)),delete this.$inputNames[e],delete this.$validator[e],delete this.$errors[e],delete this.$defaultValues[e],Object(d.c)(this.$values,e))}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=this.$events[e];r&&r.forEach(function(e){return e.apply(void 0,n)})}},{key:"subscribe",value:function(e,t){this.$events[e]||(this.$events[e]=[]);var n=this.$events[e];t in n||n.push(t)}},{key:"unsubscribe",value:function(e,t){this.$events[e]&&(t?this.$events[e]=this.$events[e].filter(function(e){return e!==t}):delete this.$events[e])}},{key:"validate",value:function(){var i=this;return new Promise(function(n,a){var e=Object.keys(i.$validator),t=i.getValue(),r=[].concat(Object(o.a)(e.map(function(e){return i.$validator[e](i.get(e),t)})),Object(o.a)((i.$events[m.f]||[]).map(function(e){return e()})));Promise.all(r).then(function(e){var t=e.find(function(e){return!0!==e});void 0===t?n(!0):a(t)}).catch(function(e){a(new f.a(e))})})}},{key:"validateFieldsByName",value:function(t,n){var a=this;if(!t||"string"!=typeof t)return Promise.reject(new Error('Name expect a string, get "'.concat(t,'"')));var r=[],i=this.getValue();return Object.keys(this.$validator).forEach(function(e){e!==t&&0!==e.indexOf(t)||r.push(a.$validator[e](a.get(e),i,n))}),Object(f.c)(r)}},{key:"validateFields",value:function(e,t){var n=this;Array.isArray(e)||(e=[e]);var a=e.map(function(e){return n.validateFieldsByName(e,t)});return Object(f.c)(a)}},{key:"validateClear",value:function(){var t=this,e=Object.keys(this.$validator);this.$errors={};var n=e.map(function(e){return t.$validator[e](m.c)});Promise.all(n)}}]),c}()},192:function(e,t,n){"use strict";t.a={red:{id:1,name:"red"},orange:{id:2,name:"orange"},yellow:{id:3,name:"yellow"},green:{id:4,name:"green"},cyan:{id:5,name:"cyan"},blue:{id:6,name:"blue"},violet:{id:7,name:"violet"}}},201:function(e,t,n){"use strict";var a=n(5),r=n(6),i=window.console,o=function(){function e(){Object(a.a)(this,e),this.logs={default:[]},this.current=this.logs.default}return Object(r.a)(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.map(function(e){return"".concat((t=e,JSON.stringify(t,function(e,t){return"function"==typeof t?"fn#fn".concat(t.toString(),"fn#fn"):t},2)));var t});this.current.push(a)}}]),e}();t.a={start:function(){window.console=new o},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=i,e}}},929:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(124),o=n(130),s=n(201),c=n(25),u=n(930),l=n.n(u),d=n(931),h=n.n(d),f=Object(c.a)(l.a,h.a),m=[];s.a.start(),s.a.setType("disabled"),n(932),s.a.setType("example"),n(933),s.a.setType("format"),n(934),s.a.setType("onchange"),n(935),s.a.setType("prediction"),n(936),s.a.setType("separator"),n(937);var v=s.a.end(),p={disabled:{text:n(938),log:v.disabled},example:{text:n(939),log:v.example},format:{text:n(940),log:v.format},onchange:{text:n(941),log:v.onchange},prediction:{text:n(942),log:v.prediction},separator:{text:n(943),log:v.separator}};t.default=Object(i.a)(function(e){return r.a.createElement(o.b,Object.assign({},e,{codes:p,source:f,examples:m}))})},930:function(e,t){e.exports="# Data.List 数据处理\n\n列表数据辅助类，用来处理如 Select，Table 等组件在复杂数据情况下，格式化数据、校验状态、拼接结果等操作。\n\n\n## 示例\n\n这个页面中示例用到的数据如下\n```\nconst data = {\n  red: { id: 1, name: 'red' },\n  orange: { id: 2, name: 'orange' },\n  yellow: { id: 3, name: 'yellow' },\n  green: { id: 4, name: 'green' },\n  cyan: { id: 5, name: 'cyan' },\n  blue: { id: 6, name: 'blue' },\n  violet: { id: 7, name: 'violet' },\n}\n```\n<code name=\"example\" />\n\n## 初始化参数\n\n### format  *null | string | function(d)*\nformat 是Datum内部用来把复杂数据格式化为需要的值，可以为 null, string, function\n\n- **null** - 为空时，返回值为原始数据\n- **string** - 为string时，会作为key从原始数据中获取值，相当于 (d) => d\\[format]\n- **function(d)** - d 为单条原始数据\n\n<code name=\"format\" />\n\n### onChange *function(value)*\n值改变时触发的回调函数。value 为 format 函数格式化后的数据。\n\n<code name=\"onchange\" />\n\n### separator *null | string*\n分隔符。为空时，value会保留Array格式。不为空时，value会处理为 separator 分隔的字符串。\n\n<code name=\"separator\" />\n\n### prediction *function(val, d):bool*\nDatum内部存储的是format之后的值，所以需要prediction函数来比对存储的值和原始数据是否一致。不设置，会使用此默认值:\n```\n(val, d) => val === format(d)\n```\n\n通常用在 value 为对象时，值相同却不是同一个对象等情况。\n\n<code name=\"prediction\" />\n\n### disabled *function(d):bool*\n判断数据项是否禁用。如果返回 true，add 和 remove 函数会忽略此数据。\n\n<code name=\"disabled\" />\n\n### value *array | string*\n初始值，可以为 Array 或 String。\n\n## 函数\n\n### getValue *function():array|string*\n获取当前值。根据separator的设置，返回array或者string。\n\n### setValue *function(array|string)*\n设置值。新的值会替代当前值。\n\n### add *function(array|object)*\n添加数据。值为 format 前的原始数据，单条或者一组数据。\n\n### remove *function(array|object)*\n移除数据。值为 format 前的原始数据，单条或者一组数据。\n\n### clear *function*\n清空数据。"},931:function(e,t){e.exports="# Data.List\n\n The auxiliary class that process the array values.\n \n## Example\n\nThe data used in the example on this page is as follows:\n```\nconst data = {\n  red: { id: 1, name: 'red' },\n  orange: { id: 2, name: 'orange' },\n  yellow: { id: 3, name: 'yellow' },\n  green: { id: 4, name: 'green' },\n  cyan: { id: 5, name: 'cyan' },\n  blue: { id: 6, name: 'blue' },\n  violet: { id: 7, name: 'violet' },\n}\n```\n\n<br />\n\n<code name=\"example\" />\n\n## Arguments\n\n### format  *null | string | function(d)*\nThe format is used to convert the original data object to the specified value.\n\n- **null** - When it is null, the return value is the original data.\n- **string** - When it is a string, it will get the value from the original data as the key, which is equivalent to (d) => d\\[format].\n- **function(d)** - d is the single original data.\n\n<code name=\"format\" />\n\n### onChange *function(value)*\nA callback function triggered when a value changes. Value is an array of the formatted data for the format function or string(separator is a string).\n\n<code name=\"onchange\" />\n\n### separator *null | string*\nWhen it is null, value is the Array format.\n\nWhen it is a string, value is a string delimited by the separator.\n\n<code name=\"separator\" />\n\n### prediction *function(val, d):bool*\nDetermine whether the value is consistent with the original data. If it is not set, this default prediction will be used:\n```\n(val, d) => val === format(d)\n```\n\n<code name=\"prediction\" />\n\n### disabled *function(d):bool*\nDetermines whether data items are disabled. If true, the add and remove functions will ignore this item.\n\n<code name=\"disabled\" />\n\n### value *array | string*\nThe initial value.\n\n## Methods\n\n### getValue *function():array|string*\nGet the current values. Return array or string depending on the separator setting.\n\n### setValue *function(array|string)*\nSet the value. The new value will replace the current value.\n\n### add *function(array|object)*\nAdd data. The value is the original data before being formatted.\n\n### remove *function(array|object)*\nRemove data. The value is the original data before being formatted.\n\n### clear *function*\nClear all data.\n"},932:function(e,t,n){"use strict";n.r(t);var a=n(134),r=n(192),i=new a.a.List({disabled:function(e){return"blue"===e.name||"red"===e.name},format:function(e){return e.name},onChange:function(e){console.log(e)}});i.setValue(["red"]),i.add([r.a.orange,r.a.blue]),i.remove([r.a.orange,r.a.red])},933:function(e,t,n){"use strict";n.r(t);var a=n(134),r=n(192),i=new a.a.List({format:"name",separator:",",prediction:function(e,t){return e===t.name},value:"blue",onChange:function(e){console.log(e)}});i.add(r.a.orange),i.add(r.a.green),i.remove(r.a.green),i.clear(),i.setValue("red,violet"),i.add(r.a.cyan)},934:function(e,t,n){"use strict";n.r(t);var a=n(134),r=n(192),i=new a.a.List({});i.add(r.a.red),console.log(i.getValue()),(i=new a.a.List({format:function(e){return e.name}})).add(r.a.red),console.log(i.getValue()),(i=new a.a.List({format:function(e){return"".concat(e.id,"-").concat(e.name)}})).add(r.a.red),i.add(r.a.green),console.log(i.getValue())},935:function(e,t,n){"use strict";n.r(t);var a=n(134),r=n(192),i=new a.a.List({format:function(e){return e.name},onChange:function(e){console.log(e)}});i.setValue(["blue"]),i.add(r.a.red),i.add(r.a.orange),i.remove(r.a.red),i.clear()},936:function(e,t,n){"use strict";n.r(t);var a=n(134),r=n(192),i=new a.a.List({format:"id",separator:",",prediction:function(e,t){return parseInt(e,10)===t.id},value:"2,3"});i.add(r.a.red),console.log(i.getValue()),i.remove(r.a.orange),console.log(i.getValue())},937:function(e,t,n){"use strict";n.r(t);var a=n(134),r=n(192),i=function(e){return console.log(e)},o=new a.a.List({format:"id",value:[2,3],onChange:i});o.add(r.a.red),(o=new a.a.List({format:"name",onChange:i,separator:",",value:"red,yellow"})).add(r.a.blue),o.remove(r.a.yellow),(o=new a.a.List({format:"name",onChange:i,separator:"|",value:"red|yellow"})).add(r.a.cyan)},938:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  disabled: d => d.name === 'blue' || d.name === 'red',\n  format: d => d.name,\n  onChange(value) {\n    console.log(value)\n  },\n})\n\ndatum.setValue(['red'])\ndatum.add([data.orange, data.blue]) // orange, blue\ndatum.remove([data.orange, data.red]) // orange, red\n"},939:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: 'name',\n  separator: ',',\n  prediction: (val, d) => val === d.name,\n  value: 'blue',\n  onChange: values => {\n    console.log(values)\n  },\n})\ndatum.add(data.orange)\ndatum.add(data.green)\ndatum.remove(data.green)\ndatum.clear()\ndatum.setValue('red,violet')\ndatum.add(data.cyan)\n"},940:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nlet datum = new Datum.List({})\ndatum.add(data.red)\nconsole.log(datum.getValue())\n\ndatum = new Datum.List({ format: d => d.name })\ndatum.add(data.red)\nconsole.log(datum.getValue())\n\ndatum = new Datum.List({ format: d => `${d.id}-${d.name}` })\ndatum.add(data.red)\ndatum.add(data.green)\nconsole.log(datum.getValue())\n"},941:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: d => d.name,\n  onChange(value) {\n    console.log(value)\n  },\n})\n\ndatum.setValue(['blue'])\ndatum.add(data.red)\ndatum.add(data.orange)\ndatum.remove(data.red)\ndatum.clear()\n"},942:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: 'id',\n  separator: ',',\n  prediction: (val, d) => parseInt(val, 10) === d.id,\n  value: '2,3',\n})\ndatum.add(data.red)\nconsole.log(datum.getValue())\ndatum.remove(data.orange)\nconsole.log(datum.getValue())\n"},943:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst onChange = value => console.log(value)\n\nlet datum = new Datum.List({ format: 'id', value: [2, 3], onChange })\ndatum.add(data.red)\n\ndatum = new Datum.List({\n  format: 'name',\n  onChange,\n  separator: ',',\n  value: 'red,yellow',\n})\ndatum.add(data.blue)\ndatum.remove(data.yellow)\n\ndatum = new Datum.List({\n  format: 'name',\n  onChange,\n  separator: '|',\n  value: 'red|yellow',\n})\ndatum.add(data.cyan)\n"}}]);