(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5642],{95602:function(n){"use strict";n.exports=(n,a=1,s)=>{if(s={indent:" ",includeEmptyLines:!1,...s},"string"!=typeof n)throw TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof n}\``);if("number"!=typeof a)throw TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof a}\``);if("string"!=typeof s.indent)throw TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof s.indent}\``);if(0===a)return n;let t=s.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return n.replace(t,s.indent.repeat(a))}},99239:function(n){"use strict";n.exports=n=>{let a=n.match(/^[ \t]*(?=\S)/gm);return a?a.reduce((n,a)=>Math.min(n,a.length),1/0):0}},75188:function(n,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/animation",function(){return s(17626)}])},17626:function(n,a,s){"use strict";s.r(a);var t=s(85893),e=s(11151),p=s(72788),l=s(36336),o=s(82931),c=s.n(o),i=s(90954),u=s(63491),r=s(2964);let k=p.L,d=l.X_;function g(n){let a=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",strong:"strong",a:"a"},(0,e.ah)(),n.components),{Heading:s,Example:p,Editor:l}=a;return l||m("Editor",!0),p||m("Example",!0),s||m("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(s,{level:3,id:"spin",children:"Spin"}),"\n",(0,t.jsxs)(a.p,{children:["Add the ",(0,t.jsx)(a.code,{children:"animate-spin"})," utility to add a linear spin animation to elements like loading indicators."]}),"\n",(0,t.jsx)(p,{containerClassName:"mt-4 -mb-3",html:'<div class="flex items-center justify-center">\n  <button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled>\n    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\n      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\n      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\n    </svg>\n    Processing...\n  </button>\n</div>'}),"\n",(0,t.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-indigo-500 ...<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">animate-spin</span> h-5 w-5 mr-3 ...<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 24 24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- ... --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n  Processing...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s,{level:3,id:"ping",children:"Ping"}),"\n",(0,t.jsxs)(a.p,{children:["Add the ",(0,t.jsx)(a.code,{children:"animate-ping"})," utility to make an element scale and fade like a radar ping or ripple of water — useful for things like notification badges."]}),"\n",(0,t.jsx)(p,{containerClassName:"mt-4 -mb-3",html:'<div class="flex items-center justify-center">\n  <span class="relative inline-flex">\n    <button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-not-allowed ring-1 ring-slate-900/10 dark:ring-slate-200/20" disabled>\n      Transactions\n    </button>\n    <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">\n      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>\n      <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>\n    </span>\n  </span>\n</div>'}),"\n",(0,t.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative flex h-3 w-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">animate-ping</span> absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative inline-flex rounded-full h-3 w-3 bg-sky-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s,{level:3,id:"pulse",children:"Pulse"}),"\n",(0,t.jsxs)(a.p,{children:["Add the ",(0,t.jsx)(a.code,{children:"animate-pulse"})," utility to make an element gently fade in and out — useful for things like skeleton loaders."]}),"\n",(0,t.jsx)(p,{containerClassName:"mt-4 -mb-3",html:'<div class="flex items-center justify-center">\n  <div class="bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-900/5 rounded-lg shadow-lg max-w-xs w-full h-28">\n    <div class="flex space-x-4 animate-pulse">\n      <div class="rounded-full bg-slate-200 dark:bg-slate-700 h-10 w-10"></div>\n      <div class="flex-1 space-y-6 py-1">\n        <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>\n        <div class="space-y-3">\n          <div class="grid grid-cols-3 gap-4">\n            <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>\n            <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>\n          </div>\n          <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'}),"\n",(0,t.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="dark:hidden language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">animate-pulse</span> flex space-x-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rounded-full bg-slate-200 h-10 w-10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex-1 space-y-6 py-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-2 bg-slate-200 rounded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>space-y-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-2 bg-slate-200 rounded col-span-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-2 bg-slate-200 rounded col-span-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-2 bg-slate-200 rounded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code><code class="hidden dark:block language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">animate-pulse</span> flex space-x-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rounded-full bg-slate-700 h-10 w-10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex-1 space-y-6 py-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-2 bg-slate-700 rounded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>space-y-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-2 bg-slate-700 rounded col-span-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-2 bg-slate-700 rounded col-span-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-2 bg-slate-700 rounded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s,{level:3,id:"bounce",children:"Bounce"}),"\n",(0,t.jsxs)(a.p,{children:["Add the ",(0,t.jsx)(a.code,{children:"animate-bounce"})," utility to make an element bounce up and down — useful for things like “scroll down” indicators."]}),"\n",(0,t.jsx)(p,{containerClassName:"mt-4 -mb-3",html:'<div class="flex justify-center">\n  <div class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">\n    <svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">\n      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>\n    </svg>\n  </div>\n</div>'}),"\n",(0,t.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">animate-bounce</span> w-6 h-6 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s,{level:3,id:"prefers-reduced-motion",children:"Prefers-reduced-motion"}),"\n",(0,t.jsxs)(a.p,{children:["For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transitions using the ",(0,t.jsx)(a.code,{children:"motion-safe"})," and ",(0,t.jsx)(a.code,{children:"motion-reduce"})," variants:"]}),"\n",(0,t.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-indigo-600 ...<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">motion-safe:animate-spin</span> h-5 w-5 mr-3 ...<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 24 24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- ... --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n  Processing\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsx)(s,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(s,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(r.k,{featuredClass:"animate-spin"}),"\n",(0,t.jsx)(s,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(u.p,{featuredClass:"animate-spin"}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsx)(s,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,t.jsx)(s,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,t.jsxs)(a.p,{children:["Animations by their very nature tend to be highly project-specific. ",(0,t.jsx)(a.strong,{children:"The animations we include by default are best thought of as helpful examples"}),", and you’re encouraged to customize your animations to better suit your needs."]}),"\n",(0,t.jsxs)(a.p,{children:["By default, Tailwind provides utilities for four different example animations, as well as the ",(0,t.jsx)(a.code,{children:"animate-none"})," utility. You can customize these values by editing ",(0,t.jsx)(a.code,{children:"theme.animation"})," or ",(0,t.jsx)(a.code,{children:"theme.extend.animation"})," in your ",(0,t.jsx)(a.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,t.jsx)(l,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">animation</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'spin-slow\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'spin 3s linear infinite\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(a.p,{children:["To add new animation ",(0,t.jsx)(a.code,{children:"@keyframes"}),", use the ",(0,t.jsx)(a.code,{children:"keyframes"})," section of your theme configuration:"]}),"\n",(0,t.jsx)(l,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">keyframes</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token literal-property property">wiggle</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">          </span><span class="token string-property property">\'0%, 100%\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"> </span><span class="token literal-property property">transform</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'rotate(-3deg)\'</span><span class="token plain"> </span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">          </span><span class="token string-property property">\'50%\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"> </span><span class="token literal-property property">transform</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'rotate(3deg)\'</span><span class="token plain"> </span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(a.p,{children:["You can then reference these keyframes by name in the ",(0,t.jsx)(a.code,{children:"animation"})," section of your theme configuration:"]}),"\n",(0,t.jsx)(l,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">animation</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token literal-property property">wiggle</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'wiggle 1s ease-in-out infinite\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(a.p,{children:["Learn more about customizing the default theme in the ",(0,t.jsx)(a.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,t.jsx)(s,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,t.jsx)(i.k,{property:"animation",featuredClass:"animate-[wiggle_1s_ease-in-out_infinite]"})]})}function h(n={}){return(0,t.jsx)(d,Object.assign({},n,{children:(0,t.jsx)(g,n)}))}function m(n,a){throw Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}a.default=h,h.layoutProps={Layout:k,classes:{scroll:!0,custom:()=>{let n=Object.assign({table:"table",thead:"thead",tr:"tr",th:"th",div:"div",tbody:"tbody",td:"td"},(0,e.ah)());return(0,t.jsxs)(n.table,{className:"w-full text-left border-collapse",children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{className:"sticky top-0 bg-white text-sm leading-6 font-semibold text-slate-700 p-0 dark:bg-slate-900 dark:text-slate-300",children:(0,t.jsx)(n.div,{className:"py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20",children:"Class"})}),(0,t.jsx)(n.th,{className:"sticky top-0 bg-white text-sm leading-6 font-semibold text-slate-700 p-0 dark:bg-slate-900 dark:text-slate-300",children:(0,t.jsx)(n.div,{className:"py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20",children:"Properties"})})]})}),(0,t.jsxs)(n.tbody,{className:"align-baseline",children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{translate:"no",className:"py-2 pr-2 font-mono font-bold text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400",children:"animate-none"}),(0,t.jsx)(n.td,{translate:"no",className:"py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300",children:"animation: none;"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{translate:"no",className:"py-2 pr-2 font-mono font-bold text-xs leading-6 text-sky-500 whitespace-nowrap border-t border-slate-100 dark:border-slate-400/10 dark:text-sky-400",children:"animate-spin"}),(0,t.jsx)(n.td,{translate:"no",className:"py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre border-t border-slate-100 dark:border-slate-400/10 dark:text-indigo-300",children:c()(`
              animation: spin 1s linear infinite;

              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `).trim()})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{translate:"no",className:"py-2 pr-2 font-mono font-bold text-xs leading-6 text-sky-500 whitespace-nowrap border-t border-slate-100 dark:border-slate-400/10 dark:text-sky-400",children:"animate-ping"}),(0,t.jsx)(n.td,{translate:"no",className:"py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre border-t border-slate-100 dark:border-slate-400/10 dark:text-indigo-300",children:c()(`
              animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

              @keyframes ping {
                75%, 100% {
                  transform: scale(2);
                  opacity: 0;
                }
              }
            `).trim()})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{translate:"no",className:"py-2 pr-2 font-mono font-bold text-xs leading-6 text-sky-500 whitespace-nowrap border-t border-slate-100 dark:border-slate-400/10 dark:text-sky-400",children:"animate-pulse"}),(0,t.jsx)(n.td,{translate:"no",className:"py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre border-t border-slate-100 dark:border-slate-400/10 dark:text-indigo-300",children:c()(`
              animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

              @keyframes pulse {
                0%, 100% {
                  opacity: 1;
                }
                50% {
                  opacity: .5;
                }
              }
            `).trim()})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{translate:"no",className:"py-2 pr-2 font-mono font-bold text-xs leading-6 text-sky-500 whitespace-nowrap border-t border-slate-100 dark:border-slate-400/10 dark:text-sky-400",children:"animate-bounce"}),(0,t.jsx)(n.td,{translate:"no",className:"py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre border-t border-slate-100 dark:border-slate-400/10 dark:text-indigo-300",children:c()(`
              animation: bounce 1s infinite;

              @keyframes bounce {
                0%, 100% {
                  transform: translateY(-25%);
                  animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                }
                50% {
                  transform: translateY(0);
                  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                }
              }
            `).trim()})]})]})]})}},meta:{title:"Animation",description:"Utilities for animating elements with CSS animations."},slug:"animation",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Spin",slug:"spin",children:[]},{title:"Ping",slug:"ping",children:[]},{title:"Pulse",slug:"pulse",children:[]},{title:"Bounce",slug:"bounce",children:[]},{title:"Prefers-reduced-motion",slug:"prefers-reduced-motion",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},82931:function(n,a,s){"use strict";let t=s(79922),e=s(95602);n.exports=(n,a=0,s)=>e(t(n),a,s)},79922:function(n,a,s){"use strict";let t=s(99239);n.exports=n=>{let a=t(n);if(0===a)return n;let s=RegExp(`^[ \\t]{${a}}`,"gm");return n.replace(s,"")}},11151:function(n,a,s){"use strict";s.d(a,{Zo:function(){return o},ah:function(){return p}});var t=s(67294);let e=t.createContext({});function p(n){let a=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(a):{...a,...n},[a,n])}let l={};function o({components:n,children:a,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||l:p(n),t.createElement(e.Provider,{value:o},a)}}},function(n){n.O(0,[3430,3306,9495,224,7308,5556,9774,2888,179],function(){return n(n.s=75188)}),_N_E=n.O()}]);