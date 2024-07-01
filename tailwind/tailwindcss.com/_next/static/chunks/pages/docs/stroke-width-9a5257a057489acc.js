(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8053],{58518:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/stroke-width",function(){return a(37253)}])},37253:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return k}});var e=a(85893),t=a(11151),o=a(72788),l=a(36336),p=a(90954),i=a(63491),c=a(2964);let r=o.L,u=l.X_;function d(n){let s=Object.assign({p:"p",code:"code",pre:"pre",a:"a",hr:"hr"},(0,t.ah)(),n.components),{Heading:a,Example:o,Editor:l}=s;return l||g("Editor",!0),o||g("Example",!0),a||g("Heading",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,e.jsx)(a,{level:3,id:"setting-the-stroke-width",children:"Setting the stroke width"}),"\n",(0,e.jsxs)(s.p,{children:["Use the ",(0,e.jsx)(s.code,{children:"stroke-*"})," utilities to set the stroke width of an SVG."]}),"\n",(0,e.jsx)(o,{containerClassName:"mt-4 -mb-3",html:'<div class="flex items-center justify-center space-x-8">\n  <svg class="stroke-indigo-500 stroke-1" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="24" cy="24" r="23" stroke-linejoin="round"/> <path d="M23 1C23 1 15 10.4901 15 24C15 37.5099 23 47 23 47" stroke-linejoin="round"/> <path d="M25 1C25 1 33 10.4901 33 24C33 37.5099 25 47 25 47" stroke-linejoin="round"/> <path d="M1 24H47"/> </svg>\n  <svg class="stroke-indigo-500 stroke-2" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="24" cy="24" r="23" stroke-linejoin="round"/> <path d="M23 1C23 1 15 10.4901 15 24C15 37.5099 23 47 23 47" stroke-linejoin="round"/> <path d="M25 1C25 1 33 10.4901 33 24C33 37.5099 25 47 25 47" stroke-linejoin="round"/> <path d="M1 24H47"/> </svg>\n</div>'}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">stroke-1</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">stroke-2</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["This can be useful for styling icon sets like ",(0,e.jsx)(s.a,{href:"https://heroicons.com",children:"Heroicons"}),"."]}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,e.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,e.jsx)(c.k,{defaultClass:"stroke-1",featuredClass:"stroke-2",element:"svg"}),"\n",(0,e.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,e.jsx)(i.p,{defaultClass:"stroke-1",featuredClass:"stroke-2",element:"svg"}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,e.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,e.jsxs)(s.p,{children:["By default, Tailwind provides three ",(0,e.jsx)(s.code,{children:"stroke-width"})," utilities. You change, add, or remove these by editing the ",(0,e.jsx)(s.code,{children:"theme.strokeWidth"})," section of your Tailwind config."]}),"\n",(0,e.jsx)(l,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">strokeWidth</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'2\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'2px\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,e.jsxs)(s.p,{children:["Learn more about customizing the default theme in the ",(0,e.jsx)(s.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,e.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,e.jsx)(p.k,{property:"stroke-width",featuredClass:"stroke-[2px]",element:"svg"})]})}function h(n={}){return(0,e.jsx)(u,Object.assign({},n,{children:(0,e.jsx)(d,n)}))}var k=h;function g(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}h.layoutProps={Layout:r,classes:{utilities:{".stroke-0":{"stroke-width":"0"},".stroke-1":{"stroke-width":"1"},".stroke-2":{"stroke-width":"2"}}},meta:{title:"Stroke Width",description:"Utilities for styling the stroke width of SVG elements."},slug:"stroke-width",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the stroke width",slug:"setting-the-stroke-width",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return p},ah:function(){return o}});var e=a(67294);let t=e.createContext({});function o(n){let s=e.useContext(t);return e.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let l={};function p({components:n,children:s,disableParentContext:a}){let p;return p=a?"function"==typeof n?n({}):n||l:o(n),e.createElement(t.Provider,{value:p},s)}}},function(n){n.O(0,[3430,3306,9495,224,7308,5556,9774,2888,179],function(){return n(n.s=58518)}),_N_E=n.O()}]);