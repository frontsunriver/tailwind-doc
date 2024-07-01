(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3637],{18706:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-delay",function(){return a(78227)}])},78227:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var t=a(85893),e=a(11151),l=a(72788),o=a(36336),i=a(90954),p=a(63491),c=a(2964);let u=l.L,r=o.X_;function d(n){let s=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",a:"a"},(0,e.ah)(),n.components),{Heading:a,Example:l,Editor:o}=s;return o||k("Editor",!0),l||k("Example",!0),a||k("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(a,{level:3,id:"delaying-transitions",children:"Delaying transitions"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"delay-*"})," utilities to control an element’s transition-delay."]}),"\n",(0,t.jsx)(l,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-around text-white text-sm font-bold leading-6">\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">delay-150</p>\n    <button class="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300 delay-150">Button A</button>\n  </div>\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">delay-300</p>\n    <button class="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300 delay-300">Button B</button>\n  </div>\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">delay-700</p>\n    <button class="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300 delay-700">Button C</button>\n  </div>\n</div>'},{hint:"Hover each button to see the expected behaviour"})),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">delay-150</span> duration-300 ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">delay-300</span> duration-300 ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">delay-700</span> duration-300 ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(c.k,{defaultClass:"transition duration-300 delay-150",featuredClass:"delay-300"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(p.p,{defaultClass:"transition duration-300 delay-150",featuredClass:"delay-300"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,t.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,t.jsxs)(s.p,{children:["By default, Tailwind provides eight general purpose transition-delay utilities. You can customize these values by editing ",(0,t.jsx)(s.code,{children:"theme.transitionDelay"})," or ",(0,t.jsx)(s.code,{children:"theme.extend.transitionDelay"})," in your ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,t.jsx)(o,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">transitionDelay</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'2000\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'2000ms\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["Learn more about customizing the default theme in the ",(0,t.jsx)(s.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,t.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,t.jsx)(i.k,{property:"transition-delay",featuredClass:"delay-[2000ms]"})]})}function g(n={}){return(0,t.jsx)(r,Object.assign({},n,{children:(0,t.jsx)(d,n)}))}var h=g;function k(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}g.layoutProps={Layout:u,classes:{utilities:{".delay-0":{"transition-delay":"0s"},".delay-75":{"transition-delay":"75ms"},".delay-100":{"transition-delay":"100ms"},".delay-150":{"transition-delay":"150ms"},".delay-200":{"transition-delay":"200ms"},".delay-300":{"transition-delay":"300ms"},".delay-500":{"transition-delay":"500ms"},".delay-700":{"transition-delay":"700ms"},".delay-1000":{"transition-delay":"1000ms"}}},meta:{title:"Transition Delay",description:"Utilities for controlling the delay of CSS transitions."},slug:"transition-delay",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Delaying transitions",slug:"delaying-transitions",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return i},ah:function(){return l}});var t=a(67294);let e=t.createContext({});function l(n){let s=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let o={};function i({components:n,children:s,disableParentContext:a}){let i;return i=a?"function"==typeof n?n({}):n||o:l(n),t.createElement(e.Provider,{value:i},s)}}},function(n){n.O(0,[3430,3306,9495,224,7308,5556,9774,2888,179],function(){return n(n.s=18706)}),_N_E=n.O()}]);