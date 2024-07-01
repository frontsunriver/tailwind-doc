(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{75206:function(n,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/appearance",function(){return s(85470)}])},85470:function(n,a,s){"use strict";s.r(a),s.d(a,{default:function(){return k}});var t=s(85893),e=s(11151),p=s(72788),o=s(36336),l=s(63491),c=s(2964);let i=p.L,r=o.X_;function u(n){let a=Object.assign({p:"p",code:"code",a:"a",pre:"pre"},(0,e.ah)(),n.components),{Heading:s,Example:p}=a;return p||g("Example",!0),s||g("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(s,{level:3,id:"removing-default-element-appearance",children:"Removing default element appearance"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"appearance-none"})," to reset any browser specific styling on an element. This utility is often used when creating ",(0,t.jsx)(a.a,{href:"/docs/examples/forms",children:"custom form components"}),"."]}),"\n",(0,t.jsx)(p,{containerClassName:"mt-4 -mb-3",html:'<div class="max-w-sm mx-auto items-center">\n  <div class="flex my-6">\n    <select class="w-20">\n      <option>Yes</option>\n      <option>No</option>\n      <option>Maybe</option>\n    </select>\n    <div class="mx-6 text-slate-900 text-sm font-semibold dark:text-slate-200">\n      Default browser styles applied\n    </div>\n  </div>\n  <div class="flex my-6 items-center">\n    <div class="grid">\n      <svg class="pointer-events-none z-10 right-1 relative col-start-1 row-start-1 h-4 w-4 self-center justify-self-end forced-colors:hidden" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">\n        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />\n      </svg>\n      <select class="w-20 appearance-none forced-colors:appearance-auto border row-start-1 col-start-1 rounded-lg bg-slate-50 dark:bg-slate-800 hover:border-cyan-500 dark:hover:border-cyan-700 hover:bg-white dark:hover:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-2">\n        <option>Yes</option>\n        <option>No</option>\n        <option>Maybe</option>\n      </select>\n    </div>\n    <div class="mx-6 text-slate-900 text-sm font-semibold dark:text-slate-200">\n      Remove default browser styles\n    </div>\n  </div>\n</div>'}),"\n",(0,t.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Yes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>No<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Maybe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">appearance-none</span> row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Yes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>No<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Maybe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pointer-events-none row-start-1 col-start-1 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- ... --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s,{level:3,id:"restoring-the-default-element-appearance",children:"Restoring the default element appearance"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"appearance-auto"})," to restore the default browser specific styling on an element. This is useful for reverting to the standard browser controls in certain accessibility modes."]}),"\n",(0,t.jsx)(p,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="grid max-w-sm mx-auto my-6 gap-8 items-center justify-center">\n  <div class="flex items-center">\n    <label for="checkbox_2" class="select-none mx-6 grid grid-flow-col gap-3 items-center text-slate-900 text-sm font-semibold dark:text-slate-200">\n      <div class="grid items-center justify-center">\n        <input type="checkbox" id="checkbox_2" checked class="peer row-start-1 col-start-1 appearance-none w-4 h-4 border ring-transparent border-slate-300 rounded dark:border-slate-600 checked:bg-violet-600 checked:border-violet-600 dark:checked:border-violet-600 forced-colors:appearance-auto" />\n        <svg viewBox="0 0 14 14" fill="none" class="invisible peer-checked:visible row-start-1 col-start-1 stroke-white dark:text-violet-300 forced-colors:hidden">\n          <path d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>\n        </svg>\n      </div>\n      Falls back to default appearance\n    </label>\n  </div>\n  <div class="flex items-center">\n    <label for="checkbox_1" class="select-none mx-6 grid grid-flow-col gap-3 items-center text-slate-900 text-sm font-semibold dark:text-slate-200">\n      <div class="grid items-center justify-center">\n        <input type="checkbox" id="checkbox_1" checked class="peer row-start-1 col-start-1 appearance-none w-4 h-4 border ring-transparent border-slate-300 rounded dark:border-slate-600 checked:bg-violet-600 checked:border-violet-600 dark:checked:border-violet-600" />\n        <svg viewBox="0 0 14 14" fill="none" class="invisible peer-checked:visible row-start-1 col-start-1 stroke-white dark:text-violet-300">\n          <path d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>\n        </svg>\n      </div>\n      Keeps custom appearance\n    </label>\n  </div>\n</div>'},{hint:"Try emulating `forced-colors: active` in your developer tools to see the difference"})),"\n",(0,t.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>appearance-none <span class="code-highlight bg-code-highlight">forced-colors:appearance-auto</span> ...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>invisible peer-checked:visible <span class="code-highlight bg-code-highlight">forced-colors:hidden</span> ...<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>\n      <span class="token comment">&lt;!-- ... --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  Falls back to default appearance\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>appearance-none ...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>invisible peer-checked:visible ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token comment">&lt;!-- ... --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  Keeps custom appearance\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(s,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(c.k,{defaultClass:"appearance-auto",featuredClass:"appearance-none",variant:"hover"}),"\n",(0,t.jsx)(s,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(l.p,{defaultClass:"appearance-auto",featuredClass:"appearance-none"})]})}function d(n={}){return(0,t.jsx)(r,Object.assign({},n,{children:(0,t.jsx)(u,n)}))}var k=d;function g(n,a){throw Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}d.layoutProps={Layout:i,classes:{utilities:{".appearance-none":{appearance:"none"},".appearance-auto":{appearance:"auto"}}},meta:{title:"Appearance",description:"Utilities for suppressing native form control styling."},slug:"appearance",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Removing default element appearance",slug:"removing-default-element-appearance",children:[]},{title:"Restoring the default element appearance",slug:"restoring-the-default-element-appearance",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]}},63491:function(n,a,s){"use strict";s.d(a,{p:function(){return e}});var t=s(85893);function e({defaultClass:n,featuredClass:a,element:s="div",children:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,t.jsxs)("code",{children:["md:",a]})," to apply the ",(0,t.jsx)("code",{children:a})," utility at only medium screen sizes and above."]}),e||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,s).replace("{defaultClass} ",n?`${n} `:"").replace("{featuredClass}",a)}})}),(0,t.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,t.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,t.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,t.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-and-feature-queries",children:"other media query modifiers"}),"."]})]})}},2964:function(n,a,s){"use strict";s.d(a,{k:function(){return e}});var t=s(85893);function e({property:n,utility:a,variant:s="hover",defaultClass:e,featuredClass:p,element:o="div",children:l}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,t.jsxs)("code",{children:[s,":",p]})," ","to only apply the ",(0,t.jsx)("code",{children:p})," utility on ",s,"."]}),l||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,o).replace("{defaultClass} ",e?`${e} `:"").replace("{variant}",s).replace("{featuredClass}",p)}})}),(0,t.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,t.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},72788:function(n,a,s){"use strict";s.d(a,{L:function(){return l}});var t=s(85893),e=s(97903),p=s(77929),o=s(87308);function l(n){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.Dx,{children:n.layoutProps.meta.metaTitle||n.layoutProps.meta.title}),(0,t.jsx)(e.C,{nav:o.u,...n})]})}l.nav=o.u},11151:function(n,a,s){"use strict";s.d(a,{Zo:function(){return l},ah:function(){return p}});var t=s(67294);let e=t.createContext({});function p(n){let a=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(a):{...a,...n},[a,n])}let o={};function l({components:n,children:a,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||o:p(n),t.createElement(e.Provider,{value:l},a)}}},function(n){n.O(0,[3430,3306,9495,224,7308,9774,2888,179],function(){return n(n.s=75206)}),_N_E=n.O()}]);