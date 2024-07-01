(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3197],{12466:function(n,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-clip",function(){return t(90770)}])},90770:function(n,s,t){"use strict";t.r(s),t.d(s,{default:function(){return g}});var a=t(85893),e=t(11151),o=t(72788),l=t(36336),c=t(63491),p=t(2964);let i=o.L,r=l.X_;function d(n){let s=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr"},(0,e.ah)(),n.components),{Heading:t,Example:o}=s;return o||h("Example",!0),t||h("Heading",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,a.jsx)(t,{level:3,id:"setting-the-background-clip",children:"Setting the background clip"}),"\n",(0,a.jsxs)(s.p,{children:["Use the ",(0,a.jsx)(s.code,{children:"bg-clip-*"})," utilities to control the bounding box of an element’s background."]}),"\n",(0,a.jsx)(o,{containerClassName:"mt-4 -mb-3",html:'<div class="flex flex-col sm:flex-row items-center justify-center space-y-10 sm:space-y-0 sm:space-x-10">\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">bg-clip-border</p>\n    <div class="w-24 h-24 bg-clip-border p-3 rounded-lg shadow-lg bg-indigo-500 border-4 border-white/50 border-dashed font-mono font-extrabold text-sm text-white flex justify-center items-center"></div>\n  </div>\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">bg-clip-padding</p>\n    <div class="w-24 h-24 bg-clip-padding p-3 rounded-lg shadow-lg bg-indigo-500 border-4 border-indigo-500/50 border-dashed font-mono font-extrabold text-sm text-white flex justify-center items-center"></div>\n  </div>\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">bg-clip-content</p>\n    <div class="w-24 h-24 bg-clip-content p-3 rounded-lg bg-indigo-500 border-4 border-indigo-500/50 border-dashed font-mono font-extrabold text-sm text-white flex justify-center items-center"></div>\n  </div>\n</div>'}),"\n",(0,a.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-clip-border</span> p-6 bg-violet-600 border-4 border-violet-300 border-dashed<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-clip-padding</span> p-6 bg-violet-600 border-4 border-violet-300 border-dashed<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-clip-content</span> p-6 bg-violet-600 border-4 border-violet-300 border-dashed<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,a.jsx)(t,{level:3,id:"cropping-to-text",children:"Cropping to text"}),"\n",(0,a.jsxs)(s.p,{children:["Use ",(0,a.jsx)(s.code,{children:"bg-clip-text"})," to crop an element’s background to match the shape of the text. Useful for effects where you want a background image to be visible through the text."]}),"\n",(0,a.jsx)(o,{containerClassName:"mt-4 -mb-3",html:'<div class="text-4xl sm:text-5xl font-extrabold leading-none tracking-tight text-center">\n  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">\n    Hello world\n  </span>\n</div>'}),"\n",(0,a.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-5xl font-extrabold ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-clip-text</span> text-transparent bg-gradient-to-r from-pink-500 to-violet-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Hello world\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(t,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,a.jsx)(t,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,a.jsx)(p.k,{defaultClass:"bg-clip-border",featuredClass:"bg-clip-padding"}),"\n",(0,a.jsx)(t,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,a.jsx)(c.p,{defaultClass:"bg-clip-border",featuredClass:"bg-clip-padding"})]})}function u(n={}){return(0,a.jsx)(r,Object.assign({},n,{children:(0,a.jsx)(d,n)}))}var g=u;function h(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}u.layoutProps={Layout:i,classes:{utilities:{".bg-clip-border":{"background-clip":"border-box"},".bg-clip-padding":{"background-clip":"padding-box"},".bg-clip-content":{"background-clip":"content-box"},".bg-clip-text":{"background-clip":"text"}}},meta:{title:"Background Clip",description:"Utilities for controlling the bounding box of an element's background."},slug:"background-clip",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the background clip",slug:"setting-the-background-clip",children:[]},{title:"Cropping to text",slug:"cropping-to-text",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]}},63491:function(n,s,t){"use strict";t.d(s,{p:function(){return e}});var a=t(85893);function e({defaultClass:n,featuredClass:s,element:t="div",children:e}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,a.jsxs)("code",{children:["md:",s]})," to apply the ",(0,a.jsx)("code",{children:s})," utility at only medium screen sizes and above."]}),e||(0,a.jsx)("pre",{className:"language-html",children:(0,a.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,t).replace("{defaultClass} ",n?`${n} `:"").replace("{featuredClass}",s)}})}),(0,a.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,a.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,a.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,a.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-and-feature-queries",children:"other media query modifiers"}),"."]})]})}},2964:function(n,s,t){"use strict";t.d(s,{k:function(){return e}});var a=t(85893);function e({property:n,utility:s,variant:t="hover",defaultClass:e,featuredClass:o,element:l="div",children:c}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,a.jsxs)("code",{children:[t,":",o]})," ","to only apply the ",(0,a.jsx)("code",{children:o})," utility on ",t,"."]}),c||(0,a.jsx)("pre",{className:"language-html",children:(0,a.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,l).replace("{defaultClass} ",e?`${e} `:"").replace("{variant}",t).replace("{featuredClass}",o)}})}),(0,a.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,a.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},72788:function(n,s,t){"use strict";t.d(s,{L:function(){return c}});var a=t(85893),e=t(97903),o=t(77929),l=t(87308);function c(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Dx,{children:n.layoutProps.meta.metaTitle||n.layoutProps.meta.title}),(0,a.jsx)(e.C,{nav:l.u,...n})]})}c.nav=l.u},11151:function(n,s,t){"use strict";t.d(s,{Zo:function(){return c},ah:function(){return o}});var a=t(67294);let e=a.createContext({});function o(n){let s=a.useContext(e);return a.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let l={};function c({components:n,children:s,disableParentContext:t}){let c;return c=t?"function"==typeof n?n({}):n||l:o(n),a.createElement(e.Provider,{value:c},s)}}},function(n){n.O(0,[3430,3306,9495,224,7308,9774,2888,179],function(){return n(n.s=12466)}),_N_E=n.O()}]);