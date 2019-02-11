(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[9],{124:function(e,t,n){"use strict";var a=n(24),r=n(5),o=n(6),l=n(8),i=n(2),c=n(7),u=n(3),s=n(0),d=n.n(s),m=n(161),p=n(39),f=n(17);t.a=function(t){return function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(l.a)(this,Object(i.a)(n).call(this,e))).state={active:"",headings:[]},t.setHeading=t.setHeading.bind(Object(u.a)(Object(u.a)(t))),t.handleScroll=t.handleScroll.bind(Object(u.a)(Object(u.a)(t))),t}return Object(c.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.bindScroll(),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.$willUnmount=!0,this.unbindScroll()}},{key:"setHeading",value:function(e){this.setState({headings:[].concat(Object(a.a)(this.state.headings),Object(a.a)(e))})}},{key:"bindScroll",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"unbindScroll",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var n=document.documentElement.scrollTop,e=this.state.headings.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),this.$willUnmount||this.setState({active:a})}}},{key:"renderNav",value:function(){var a=this,e=this.state,r=e.active,t=e.headings;return d.a.createElement(m.a,{className:Object(f.f)("sticky"),top:50},d.a.createElement("div",{className:Object(f.f)("nav")},t.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:t,className:Object(f.f)("level-".concat(e.level),r===e.id&&"active"),onClick:function(e){if(0===p.a.location.search.indexOf("?example="))p.a.push("".concat(p.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(a,e.id)},n)})))}},{key:"render",value:function(){return d.a.createElement("div",{className:Object(f.f)("_")},d.a.createElement(t,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),n}(d.a.Component)}},130:function(e,t,n){"use strict";var p=n(0),f=n.n(p),l=n(21),a=n(24),r=n(5),o=n(6),i=n(8),c=n(2),u=n(7),s=n(3),d=n(163),m=n.n(d),y=n(35),h=n(17),g=n(25),b=n(11),B=n.n(b),v=n(164),E=n.n(v),O=function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,o=Object(p.useRef)(null);return Object(p.useEffect)(function(){var e=o.current;E.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),f.a.createElement("pre",{ref:o,className:B()(n||"lang-jsx",Object(h.a)("pre"))},f.a.createElement("code",null,r))},j=n(150),k=n(32),x=n(27),S=n(137),w=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(S.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(S.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:f.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(x.b),z=n(46),D=n(39),H=f.a.createElement("div",{className:Object(h.a)("placeholder")},f.a.createElement(k.a,null)),C=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).setCodeBlockHeight=function(e){t.codeHeight=e},t.bindCodeBlock=function(e){t.codeblock=e},t.state={showcode:!1},t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"collapse",value:function(e,t,n){var a=this;this.codeblock.style.height="".concat(e*(t-1),"px"),1<t&&setTimeout(function(){a.collapse(e,t-1,n)},16),n&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(t){var n=this,a=!this.state.showcode;this.setState({showcode:a},function(){if(a)n.codeblock.style.height="".concat(n.codeHeight,"px");else{var e=n.codeHeight%15;0<e&&n.collapse(e,1,t),n.collapse((n.codeHeight-e)/15,15,t)}})}},{key:"renderCodeHandle",value:function(e){var t=this.state.showcode;return f.a.createElement("a",{href:"javascript:;",className:Object(h.a)("toggle"),onClick:this.toggleCode.bind(this,e)},f.a.createElement(z.a,{name:t?"code-close":"code"}))}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.id,a=e.name,r=e.rawText,o=this.state.showcode,l=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),i=D.a.location.search,c="?example=";if(0===i.indexOf(c)&&(i=i.replace(c,""),a.indexOf(i)<0))return null;var u=this.props.title.split("\n"),s=Object(j.a)(u),d=s[0],m=s.slice(1);return d&&(d=d.trim()),f.a.createElement(p.Fragment,null,d&&f.a.createElement("h3",{key:"0",id:n},d),f.a.createElement(w,{placeholder:H},f.a.createElement("div",{className:Object(h.a)("_",o&&"showcode")},f.a.createElement("div",{className:Object(h.a)("body")},Object(p.createElement)(t)),0<this.props.title.length&&f.a.createElement("div",{className:Object(h.a)("desc")},m.map(function(e,t){return f.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),this.renderCodeHandle(!1)),f.a.createElement("div",{ref:this.bindCodeBlock,className:Object(h.a)("code")},f.a.createElement(O,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,value:l}),this.renderCodeHandle(!0)))))}}]),n}(p.Component);C.defaultProps={rawText:""};var L=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).toggle=function(){t.setState({expanded:!t.state.expanded})},t.state={expanded:!1},t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.expanded,n=e.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),a=t?"pre":"div";return f.a.createElement("div",{onClick:this.toggle,className:Object(h.e)("console")},f.a.createElement(a,null,n))}}]),n}(p.PureComponent);L.defaultProps={children:[]};var G=L,P=/^<code name="([\w|-]+)" /,R=/^<example name="([\w|-]+)"/,T=function(e){function t(e){var l;return Object(r.a)(this,t),(l=Object(i.a)(this,Object(c.a)(t).call(this,e))).renderHeading=function(e){var t=e.level,n=e.children,a="".concat(t,"-").concat(n[0]),r="h".concat(t);if("object"==typeof n[0])return f.a.createElement(r,null,n);if(!l.cache[a]){var o="heading-".concat(Object(y.b)());2!==t&&3!==t||l.appendHeading({id:o,level:t,children:n}),l.cache[a]=f.a.createElement(r,{id:o},n)}return l.cache[a]},l.headings=[],l.appendHeading=l.appendHeading.bind(Object(s.a)(Object(s.a)(l))),l.cache={},l}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var t=this.props.codes[e];return t?[f.a.createElement(O,{key:"cb",value:t.text})].concat(Object(a.a)(t.log.map(function(e,t){return f.a.createElement(G,{key:t},e)}))):(console.error("Code ".concat(e," not existed")),null)}},{key:"renderExamples",value:function(){var o=this;if(this.cache.examples)return this.cache.examples;var e=this.props.examples;if(!e)return f.a.createElement("div",null);var t=Object(g.a)("示例","Example"),n="heading-".concat(Object(y.b)());return this.appendHeading({id:n,level:2,children:[t]}),this.cache.examples=[f.a.createElement("h2",{key:"h",id:n},t)].concat(Object(a.a)(e.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(l.a)(a,1)[0];return o.appendHeading({id:n,level:3,children:[r]}),f.a.createElement(C,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),this.cache.examples}},{key:"renderExample",value:function(t){var e="example-".concat(t);if(!this.cache[e]){var n=(this.props.examples||[]).find(function(e){return e.name===t});this.cache[e]=n?f.a.createElement(C,n):null}return this.cache[e]}},{key:"render",value:function(){var r=this,e=this.props.source;return this.headings=[],f.a.createElement(m.a,{className:Object(h.e)("_"),source:e,renderers:{code:O,heading:this.renderHeading,html:function(e){var t=e.value;if("<example />"===t)return r.renderExamples();var n=t.match(R);if(n)return r.renderExample(n[1],0<=t.indexOf("noExpand"));if("<br>"===t||"<br />"===t)return f.a.createElement("br",null);var a=t.match(P);return a?r.renderCode(a[1]):null},link:function(e){var t=e.href,n=e.children,a=t.indexOf(!1)?"_blank":void 0;return f.a.createElement("a",{href:t,target:a},n)}}})}}]),t}(p.PureComponent);T.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var N=n(45),A=n(124);n.d(t,"a",function(){return F});var W,I=((W=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).state={source:t.props.source},t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.props.loader&&this.props.loader().then(function(e){t.setState({source:e.default})})}},{key:"render",value:function(){var e=this.state.source;return e?f.a.createElement(T,Object.assign({},this.props,{source:e})):f.a.createElement(N.a,{style:{minHeight:200}})}}]),n}(p.PureComponent)).defaultProps={loader:void 0,source:void 0},W);t.b=I;function F(t){return Object(A.a)(function(e){return f.a.createElement(I,Object.assign({},e,{loader:t}))})}},133:function(e,t,n){"use strict";var a=n(120);t.a=Object(a.a)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},137:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return s});var a=n(148),r=n(35),o={},l=null,i=!1,c=window.innerHeight||document.documentElement.clientHeight;function u(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>c){var n=Object(r.b)();return o[n]=e,n}return e.render(),null}function s(e){e&&delete o[e]}document.addEventListener("scroll",function(){l&&clearTimeout(l),l=setTimeout(function(){i||(i=!0,Object.keys(o).forEach(function(e){var t=o[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>c||(delete o[e],a())}),i=!1),l=null},80)},a.a)},392:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(124),l=n(130),i=n(25),c=n(393),u=n.n(c),s=n(394),d=n.n(s),m=Object(i.a)(u.a,d.a),p=[{name:"1-base",title:Object(i.a)("基本用法 \n Button 内置了几种常用的样式，通过 type 来使用","Base \n Button has several built-in styles, used by type."),component:n(395).default,rawText:n(396)},{name:"2-outline",title:Object(i.a)("透明背景 \n 添加 outline 属性可以设置为透明背景，type 不能为 default 和 link。","Outline \n Adding outline property can set background to transparent. Outline type can not be default and link."),component:n(397).default,rawText:n(398)},{name:"3-disabled",title:Object(i.a)("不可用 \n 添加 disabled 属性可以禁用按钮。","Disabled \n Adding disabled property can disable the button."),component:n(399).default,rawText:n(400)},{name:"4-size",title:Object(i.a)("大小 \n 一共有三种尺寸，['small', 'default', 'large']，默认为 'default'","Size \n There are three sizes, ['small', 'default', 'large'], default value is 'default'."),component:n(401).default,rawText:n(402)},{name:"5-loading",title:Object(i.a)("加载中 \n 设定 loading 属性，可以让按钮变成加载中状态","Loading \n Set loading property can add a loading indicator to button."),component:n(403).default,rawText:n(404)},{name:"6-href",title:Object(i.a)("链接 \n 设置 href 属性，按钮会渲染为 a 标签，同时可以设置 target 属性","Link \n Set the href attribute, the button will be rendered as <a> tag and you can also set the target property."),component:n(405).default,rawText:n(406)},{name:"7-icon",title:Object(i.a)("图标 \n 需要图标可以在内容中自行加入","Icon \n If you need a icon, you can add it to the content by yourself."),component:n(407).default,rawText:n(408)},{name:"8-group",title:Object(i.a)("组合 \n 一组 Button 可以用 Button.Group 容器中，按钮样式通过 Button.Gorup 的 size, type, outline 属性设置","Group \n A series of buttons can group by Button.Group, set styles by Button.Group's size, type, and outline property."),component:n(409).default,rawText:n(410)}];t.default=Object(o.a)(function(e){return r.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:m,examples:p}))})},393:function(e,t){e.exports="# Button *按钮*\n\n<example />\n\n## API\n\n### Button\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | string \\| ReactElement | 必填 |  |\n| className | string | 无 | 扩展className |\n| disabled | bool | false | 禁用 |\n| href | string | 无 | 如果设置了 href 属性，将会用 &lt;a> 代替 &lt;button> |\n| outline | boolean | false | outline 为 true 时，显示透明背景的按钮 |\n| size | string | 'default' | 可选值 \\['large', 'default', 'small'] |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | 'default' | 可选值 \\['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'link'] |\n\n### Button.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | \\[Button] | 必填 | 由 Button 组成的 array |\n| size | string | 无 | 同 Button；如果 Button 和 Group 同时设置 size，以 Group 为准 |\n| outline | boolean | 无 | 同 Button；如果 Button 未设置，使用此值 |\n| type | string | 无 | 同 Button；如果 Button 和 Group 同时设置 type，以 Group 为准 |"},394:function(e,t){e.exports="# Button\n\n<example />\n\n## API\n\n### Button\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| children | string \\| ReactElement | required |  |\n| className | string | - | extend className |\n| disabled | bool | false | Specifies the button should be disabled |\n| href | string | - | If the href attribute is set, &lt;a> will be used instead of &lt;button>. |\n| outline | boolean | false | When outline is true, the background is transparent. |\n| size | string | 'default' | optional value \\['large', 'default', 'small'] |\n| style | object | - | Container element style |\n| type | string | 'default' | optional value \\['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'link'] |\n\n### Button.Group\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| children | \\[Button] | required | array of Button |\n| size | string | - | same as Button |\n| outline | boolean | - | same as Button |\n| type | string | - | same as Button |"},395:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(48);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,"Default"),r.a.createElement(o.a,{type:"primary"},"Primary"),r.a.createElement(o.a,{type:"secondary"},"Secondary"),r.a.createElement(o.a,{type:"success"},"Success"),r.a.createElement(o.a,{type:"warning"},"Warning"),r.a.createElement(o.a,{type:"danger"},"Danger"),r.a.createElement(o.a,{type:"link"},"Link"))}},396:function(e,t){e.exports='/**\n * cn - 基本用法\n *    -- Button 内置了几种常用的样式，通过 type 来使用\n * en - Base\n *    -- Button has several built-in styles, used by type.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Button>Default</Button>\n      <Button type="primary">Primary</Button>\n      <Button type="secondary">Secondary</Button>\n      <Button type="success">Success</Button>\n      <Button type="warning">Warning</Button>\n      <Button type="danger">Danger</Button>\n      <Button type="link">Link</Button>\n    </div>\n  )\n}\n'},397:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(48);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{outline:!0,type:"primary"},"Primary"),r.a.createElement(o.a,{outline:!0,type:"secondary"},"Secondary"),r.a.createElement(o.a,{outline:!0,type:"success"},"Success"),r.a.createElement(o.a,{outline:!0,type:"warning"},"Warning"),r.a.createElement(o.a,{outline:!0,type:"danger"},"Danger"))}},398:function(e,t){e.exports='/**\n * cn - 透明背景\n *    -- 添加 outline 属性可以设置为透明背景，type 不能为 default 和 link。\n * en - Outline\n *    -- Adding outline property can set background to transparent. Outline type can not be default and link.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Button outline type="primary">\n        Primary\n      </Button>\n      <Button outline type="secondary">\n        Secondary\n      </Button>\n      <Button outline type="success">\n        Success\n      </Button>\n      <Button outline type="warning">\n        Warning\n      </Button>\n      <Button outline type="danger">\n        Danger\n      </Button>\n    </div>\n  )\n}\n'},399:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(48);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{disabled:!0},"Default"),r.a.createElement(o.a,{disabled:!0,type:"primary"},"Primary"),r.a.createElement(o.a,{disabled:!0,type:"secondary"},"Secondary"),r.a.createElement(o.a,{disabled:!0,type:"success"},"Success"),r.a.createElement(o.a,{disabled:!0,type:"warning"},"Warning"),r.a.createElement(o.a,{disabled:!0,type:"danger"},"Danger"),r.a.createElement(o.a,{disabled:!0,type:"link"},"Link"))}},400:function(e,t){e.exports='/**\n * cn - 不可用\n *    -- 添加 disabled 属性可以禁用按钮。\n * en - Disabled\n *    -- Adding disabled property can disable the button.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Button disabled>Default</Button>\n      <Button disabled type="primary">\n        Primary\n      </Button>\n      <Button disabled type="secondary">\n        Secondary\n      </Button>\n      <Button disabled type="success">\n        Success\n      </Button>\n      <Button disabled type="warning">\n        Warning\n      </Button>\n      <Button disabled type="danger">\n        Danger\n      </Button>\n      <Button disabled type="link">\n        Link\n      </Button>\n    </div>\n  )\n}\n'},401:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(48);t.default=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o.a,{size:"small"},"Default"),r.a.createElement(o.a,{size:"small",type:"primary"},"Primary"),r.a.createElement(o.a,{size:"small",type:"secondary"},"Secondary"),r.a.createElement(o.a,{size:"small",type:"success"},"Success"),r.a.createElement(o.a,{size:"small",type:"warning"},"Warning"),r.a.createElement(o.a,{size:"small",type:"danger"},"Danger"),r.a.createElement(o.a,{size:"small",type:"link"},"Link")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(o.a,null,"Default"),r.a.createElement(o.a,{type:"primary"},"Primary"),r.a.createElement(o.a,{type:"secondary"},"Secondary"),r.a.createElement(o.a,{type:"success"},"Success"),r.a.createElement(o.a,{type:"warning"},"Warning"),r.a.createElement(o.a,{type:"danger"},"Danger"),r.a.createElement(o.a,{type:"link"},"Link")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(o.a,{size:"large"},"Default"),r.a.createElement(o.a,{size:"large",type:"primary"},"Primary"),r.a.createElement(o.a,{size:"large",type:"secondary"},"Secondary"),r.a.createElement(o.a,{size:"large",type:"success"},"Success"),r.a.createElement(o.a,{size:"large",type:"warning"},"Warning"),r.a.createElement(o.a,{size:"large",type:"danger"},"Danger"),r.a.createElement(o.a,{size:"large",type:"link"},"Link")))}},402:function(e,t){e.exports='/**\n * cn - 大小\n *    -- 一共有三种尺寸，[\'small\', \'default\', \'large\']，默认为 \'default\'\n * en - Size\n *    -- There are three sizes, [\'small\', \'default\', \'large\'], default value is \'default\'.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <div>\n        <Button size="small">Default</Button>\n        <Button size="small" type="primary">\n          Primary\n        </Button>\n        <Button size="small" type="secondary">\n          Secondary\n        </Button>\n        <Button size="small" type="success">\n          Success\n        </Button>\n        <Button size="small" type="warning">\n          Warning\n        </Button>\n        <Button size="small" type="danger">\n          Danger\n        </Button>\n        <Button size="small" type="link">\n          Link\n        </Button>\n      </div>\n      <br />\n      <div>\n        <Button>Default</Button>\n        <Button type="primary">Primary</Button>\n        <Button type="secondary">Secondary</Button>\n        <Button type="success">Success</Button>\n        <Button type="warning">Warning</Button>\n        <Button type="danger">Danger</Button>\n        <Button type="link">Link</Button>\n      </div>\n      <br />\n      <div>\n        <Button size="large">Default</Button>\n        <Button size="large" type="primary">\n          Primary\n        </Button>\n        <Button size="large" type="secondary">\n          Secondary\n        </Button>\n        <Button size="large" type="success">\n          Success\n        </Button>\n        <Button size="large" type="warning">\n          Warning\n        </Button>\n        <Button size="large" type="danger">\n          Danger\n        </Button>\n        <Button size="large" type="link">\n          Link\n        </Button>\n      </div>\n    </div>\n  )\n}\n'},403:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(48);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{loading:!0,size:"small",type:"primary"},"Small"),r.a.createElement(o.a,{loading:!0,type:"primary"},"Default"),r.a.createElement(o.a,{loading:!0,size:"large",type:"primary"},"Large"))}},404:function(e,t){e.exports='/**\n * cn - 加载中\n *    -- 设定 loading 属性，可以让按钮变成加载中状态\n * en - Loading\n *    -- Set loading property can add a loading indicator to button.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Button loading size="small" type="primary">\n        Small\n      </Button>\n      <Button loading type="primary">\n        Default\n      </Button>\n      <Button loading size="large" type="primary">\n        Large\n      </Button>\n    </div>\n  )\n}\n'},405:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(48);t.default=function(){return r.a.createElement(o.a,{href:"#/",target:"_blank",type:"primary"},"Home")}},406:function(e,t){e.exports='/**\n * cn - 链接\n *    -- 设置 href 属性，按钮会渲染为 a 标签，同时可以设置 target 属性\n * en - Link\n *    -- Set the href attribute, the button will be rendered as <a> tag and you can also set the target property.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <Button href="#/" target="_blank" type="primary">\n      Home\n    </Button>\n  )\n}\n'},407:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(48),l=n(133);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{size:"small",type:"primary"},r.a.createElement(l.a,{name:"home"})," Small"),r.a.createElement(o.a,{type:"primary"},"Default ",r.a.createElement(l.a,{name:"home"})),r.a.createElement(o.a,{size:"large",type:"primary"},r.a.createElement(l.a,{name:"home"})," Large"))}},408:function(e,t){e.exports='/**\n * cn - 图标\n *    -- 需要图标可以在内容中自行加入\n * en - Icon\n *    -- If you need a icon, you can add it to the content by yourself.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nexport default function() {\n  return (\n    <div>\n      <Button size="small" type="primary">\n        <FontAwesome name="home" /> Small\n      </Button>\n      <Button type="primary">\n        Default <FontAwesome name="home" />\n      </Button>\n      <Button size="large" type="primary">\n        <FontAwesome name="home" /> Large\n      </Button>\n    </div>\n  )\n}\n'},409:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(48),l=n(133);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a.Group,null,r.a.createElement(o.a,null,"Left"),r.a.createElement(o.a,null,"Center"),r.a.createElement(o.a,null,"Right")),r.a.createElement("br",null),r.a.createElement(o.a.Group,{outline:!0,type:"primary"},r.a.createElement(o.a,null,"Left"),r.a.createElement(o.a,null,"Center"),r.a.createElement(o.a,null,"Right")),r.a.createElement("br",null),r.a.createElement(o.a.Group,{type:"primary"},r.a.createElement(o.a,null,r.a.createElement(l.a,{name:"angle-left"}),"  Left"),r.a.createElement(o.a,null,"Center"),r.a.createElement(o.a,null,"Right  ",r.a.createElement(l.a,{name:"angle-right"}))),r.a.createElement("br",null),r.a.createElement(o.a.Group,{size:"large"},r.a.createElement(o.a,null,"Left"),r.a.createElement(o.a,null,"Center"),r.a.createElement(o.a,null,"Right")))}},410:function(e,t){e.exports='/**\n * cn - 组合\n *    -- 一组 Button 可以用 Button.Group 容器中，按钮样式通过 Button.Gorup 的 size, type, outline 属性设置\n * en - Group\n *    -- A series of buttons can group by Button.Group, set styles by Button.Group\'s size, type, and outline property.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nexport default function() {\n  return (\n    <div>\n      <Button.Group>\n        <Button>Left</Button>\n        <Button>Center</Button>\n        <Button>Right</Button>\n      </Button.Group>\n\n      <br />\n\n      <Button.Group outline type="primary">\n        <Button>Left</Button>\n        <Button>Center</Button>\n        <Button>Right</Button>\n      </Button.Group>\n\n      <br />\n\n      <Button.Group type="primary">\n        <Button>\n          <FontAwesome name="angle-left" />\n          &nbsp; Left\n        </Button>\n        <Button>Center</Button>\n        <Button>\n          Right &nbsp;\n          <FontAwesome name="angle-right" />\n        </Button>\n      </Button.Group>\n\n      <br />\n\n      <Button.Group size="large">\n        <Button>Left</Button>\n        <Button>Center</Button>\n        <Button>Right</Button>\n      </Button.Group>\n    </div>\n  )\n}\n'}}]);