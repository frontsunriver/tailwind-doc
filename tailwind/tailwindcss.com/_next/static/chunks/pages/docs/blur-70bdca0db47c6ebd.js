(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1475],{77140:function(n,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/blur",function(){return s(95647)}])},95647:function(n,a,s){"use strict";s.r(a),s.d(a,{default:function(){return v}});var t=s(85893),e=s(11151),l=s(72788),r=s(36336),o=s(90954),p=s(63491),i=s(2964),c=s(7557);let u=l.L,d=r.X_;function g(n){let a=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",a:"a"},(0,e.ah)(),n.components),{Heading:s,Example:l,Editor:r}=a;return r||k("Editor",!0),l||k("Example",!0),s||k("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(s,{level:3,id:"blurring-elements",children:"Blurring elements"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"blur-*"})," utilities to blur an element."]}),"\n",(0,t.jsx)(l,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="flex sm:block overflow-scroll sm:overflow-visible scroll-p-8">\n  <div class="flex items-center justify-around gap-12 sm:gap-4 font-mono font-bold shrink-0 p-8">\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">blur-none</p>\n      <div class="relative blur-none">\n        <img class="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">blur-sm</p>\n      <div class="relative blur-sm">\n        <img class="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">blur-lg</p>\n      <div class="relative blur-lg">\n        <img class="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">blur-2xl</p>\n      <div class="relative blur-2xl">\n        <img class="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n  </div>\n</div>'},{p:"none"})),"\n",(0,t.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">blur-none</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">blur-sm</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">blur-lg</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">blur-2xl</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s,{level:3,id:"removing-filters",children:"Removing filters"}),"\n",(0,t.jsx)(c.R,{defaultClass:"blur-md invert brightness-150"}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsx)(s,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(s,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(i.k,{defaultClass:"blur",featuredClass:"blur-lg"}),"\n",(0,t.jsx)(s,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(p.p,{defaultClass:"blur",featuredClass:"blur-lg"}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsx)(s,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,t.jsx)(s,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,t.jsxs)(a.p,{children:["By default, Tailwind includes a handful of general purpose ",(0,t.jsx)(a.code,{children:"blur"})," utilities. You can customize these values by editing ",(0,t.jsx)(a.code,{children:"theme.blur"})," or ",(0,t.jsx)(a.code,{children:"theme.extend.blur"})," in your ",(0,t.jsx)(a.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,t.jsx)(r,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">blur</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token literal-property property">xs</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'2px\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(a.p,{children:["Learn more about customizing the default theme in the ",(0,t.jsx)(a.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,t.jsx)(s,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,t.jsx)(o.k,{property:"blur",featuredClass:"blur-[2px]"})]})}function h(n={}){return(0,t.jsx)(d,Object.assign({},n,{children:(0,t.jsx)(g,n)}))}var v=h;function k(n,a){throw Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}h.layoutProps={Layout:u,classes:{utilities:{".blur-0":{"--tw-blur":"blur(0)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-none":{"--tw-blur":"blur(0)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-sm":{"--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur":{"--tw-blur":"blur(8px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-md":{"--tw-blur":"blur(12px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-lg":{"--tw-blur":"blur(16px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-xl":{"--tw-blur":"blur(24px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-2xl":{"--tw-blur":"blur(40px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-3xl":{"--tw-blur":"blur(64px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"}},filterRules:([n])=>".blur-0"!==n,transformProperties:({properties:n})=>({filter:n["--tw-blur"]})},meta:{title:"Blur",description:"Utilities for applying blur filters to an element."},slug:"blur",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Blurring elements",slug:"blurring-elements",children:[]},{title:"Removing filters",slug:"removing-filters",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},7557:function(n,a,s){"use strict";s.d(a,{R:function(){return e}});var t=s(85893);function e({defaultClass:n,element:a="div",children:s}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["To remove all of the filters on an element at once, use the ",(0,t.jsx)("code",{children:"filter-none"})," ","utility:"]}),s||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:filter-none</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,a).replace("{defaultClass} ",n?`${n} `:"")}})}),(0,t.jsx)("p",{children:"This can be useful when you want to remove filters conditionally, such as on hover or at a particular breakpoint."})]})}},11151:function(n,a,s){"use strict";s.d(a,{Zo:function(){return o},ah:function(){return l}});var t=s(67294);let e=t.createContext({});function l(n){let a=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(a):{...a,...n},[a,n])}let r={};function o({components:n,children:a,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||r:l(n),t.createElement(e.Provider,{value:o},a)}}},function(n){n.O(0,[3430,3306,9495,224,7308,5556,9774,2888,179],function(){return n(n.s=77140)}),_N_E=n.O()}]);