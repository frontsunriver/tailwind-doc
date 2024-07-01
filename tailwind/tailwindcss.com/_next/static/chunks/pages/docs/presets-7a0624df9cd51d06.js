(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4585],{89997:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/presets",function(){return a(65847)}])},65847:function(n,s,a){"use strict";a.r(s);var t=a(85893),e=a(11151),p=a(72788),o=a(36336);a(30196),a(88120);let c=p.L,l=o.X_;function r(n){let s=Object.assign({p:"p",code:"code",a:"a",em:"em",hr:"hr",pre:"pre",strong:"strong",ul:"ul",li:"li"},(0,e.ah)(),n.components),{Editor:a,Heading:p}=s;return a||u("Editor",!0),p||u("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["By default, any configuration you add in your own ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," file is intelligently merged with the ",(0,t.jsx)(s.a,{href:"https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js",children:"default configuration"}),", with your own configuration acting as a set of overrides and extensions."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"presets"})," option lets you specify a ",(0,t.jsx)(s.em,{children:"different"})," configuration to use as your base, making it easy to package up a set of customizations that you’d like to reuse across projects."]}),"\n",(0,t.jsx)(a,{filename:"tailwind.config.js",code:'<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'tailwindcss\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@acmecorp/tailwind-base\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsx)(s.p,{children:"This can be very useful for teams that manage multiple Tailwind projects for the same brand where they want a single source of truth for colors, fonts, and other common customizations."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(p,{level:2,id:"creating-a-preset",children:"Creating a preset"}),"\n",(0,t.jsxs)(s.p,{children:["Presets are just regular Tailwind configuration objects, taking the exact same shape as the configuration you would add in your ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,t.jsx)(a,{filename:"my-preset.js",code:'<pre class="language-js"><code class="language-js"><span class="token comment">// Example preset</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">blue</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token string">\'#85d7ff\'</span><span class="token punctuation">,</span>\n        <span class="token constant">DEFAULT</span><span class="token operator">:</span> <span class="token string">\'#1fb6ff\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">dark</span><span class="token operator">:</span> <span class="token string">\'#009eeb\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token literal-property property">pink</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token string">\'#ff7ce5\'</span><span class="token punctuation">,</span>\n        <span class="token constant">DEFAULT</span><span class="token operator">:</span> <span class="token string">\'#ff49db\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">dark</span><span class="token operator">:</span> <span class="token string">\'#ff16d1\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token literal-property property">gray</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">darkest</span><span class="token operator">:</span> <span class="token string">\'#1f2d3d\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">dark</span><span class="token operator">:</span> <span class="token string">\'#3c4858\'</span><span class="token punctuation">,</span>\n        <span class="token constant">DEFAULT</span><span class="token operator">:</span> <span class="token string">\'#c0ccda\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token string">\'#e0e6ed\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">lightest</span><span class="token operator">:</span> <span class="token string">\'#f9fafc\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">sans</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'Graphik\'</span><span class="token punctuation">,</span> <span class="token string">\'sans-serif\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">flexGrow</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token number">2</span><span class="token operator">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n        <span class="token number">3</span><span class="token operator">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token number">60</span><span class="token operator">:</span> <span class="token string">\'60\'</span><span class="token punctuation">,</span>\n        <span class="token number">70</span><span class="token operator">:</span> <span class="token string">\'70\'</span><span class="token punctuation">,</span>\n        <span class="token number">80</span><span class="token operator">:</span> <span class="token string">\'80\'</span><span class="token punctuation">,</span>\n        <span class="token number">90</span><span class="token operator">:</span> <span class="token string">\'90\'</span><span class="token punctuation">,</span>\n        <span class="token number">100</span><span class="token operator">:</span> <span class="token string">\'100\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@tailwindcss/typography\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@tailwindcss/aspect-ratio\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["As you can see, presets can contain all of the configuration options you’re used to, including theme overrides and extensions, adding plugins, configuring a prefix, and so on. Read about ",(0,t.jsx)(s.a,{href:"#merging-logic-in-depth",children:"how configurations are merged"})," for more details."]}),"\n",(0,t.jsxs)(s.p,{children:["Assuming this preset was saved at ",(0,t.jsx)(s.code,{children:"./my-preset.js"}),", you would use it by adding it to the ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," file in your actual project under the ",(0,t.jsx)(s.code,{children:"presets"})," key:"]}),"\n",(0,t.jsx)(a,{filename:"tailwind.config.js",code:'<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'tailwindcss\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./my-preset.js\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// Customizations specific to this project would go here</span>\n  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token number">48</span><span class="token operator">:</span> <span class="token string">\'12rem\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["By default, presets themselves extend Tailwind’s ",(0,t.jsx)(s.a,{href:"https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js",children:"default configuration"})," just like your own configuration would. If you’d like to create a preset that completely replaces the default configuration, include an empty ",(0,t.jsx)(s.code,{children:"presets"})," key in the preset itself:"]}),"\n",(0,t.jsx)(s.pre,{className:"language-js",dangerouslySetInnerHTML:{__html:'<code class="language-js"><span class="token comment">// Example preset</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,t.jsxs)(s.p,{children:["For more information, read about ",(0,t.jsx)(s.a,{href:"#disabling-the-default-configuration",children:"disabling the default configuration"}),"."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(p,{level:2,id:"merging-logic-in-depth",children:"Merging logic in-depth"}),"\n",(0,t.jsxs)(s.p,{children:["Project-specific configurations (those found in your ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," file) are merged against presets the same way they are merged against the default configuration."]}),"\n",(0,t.jsxs)(s.p,{children:["The following options in ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," simply ",(0,t.jsx)(s.strong,{children:"replace"})," the same option if present in a preset:"]}),"\n",(0,t.jsxs)(s.ul,{role:"list",children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"content"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"darkMode"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"prefix"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"important"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"variantOrder"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"separator"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"safelist"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The remaining options are each carefully merged in the way that makes the most sense for that option, explained in more detail below."}),"\n",(0,t.jsx)(p,{level:3,id:"theme",children:"Theme"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"theme"})," object is merged shallowly, with top-level keys in ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," replacing the same top-level keys in any presets. The exception to this is the ",(0,t.jsx)(s.code,{children:"extend"})," key, which is collected across all configurations and applied on top of the rest of the theme configuration."]}),"\n",(0,t.jsxs)(s.p,{children:["Learn more about how the ",(0,t.jsx)(s.code,{children:"theme"})," option works in the ",(0,t.jsx)(s.a,{href:"/docs/theme",children:"theme configuration documentation"}),"."]}),"\n",(0,t.jsx)(p,{level:3,id:"presets",children:"Presets"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"presets"})," array is merged across configurations, allowing presets to include their own presets, which can also include their own presets."]}),"\n",(0,t.jsx)(p,{level:3,id:"plugins",children:"Plugins"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"plugins"})," array is merged across configurations to make it possible for a preset to register plugins while also allowing you to add additional plugins at the project-level."]}),"\n",(0,t.jsxs)(s.p,{children:["This means it’s not possible to disable a plugin that has been added by a preset. If you find yourself wanting to disable a plugin in a preset, it’s a sign that you should probably remove that plugin from the preset and include it on a project-by-project basis instead, or ",(0,t.jsx)(s.a,{href:"#extending-multiple-presets",children:"split your preset into two presets"}),"."]}),"\n",(0,t.jsx)(p,{level:3,id:"core-plugins",children:"Core plugins"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"corePlugins"})," option behaves differently depending on whether you configure it as an object or as an array."]}),"\n",(0,t.jsxs)(s.p,{children:["If you configure ",(0,t.jsx)(s.code,{children:"corePlugins"})," as an object, it is merged across configurations."]}),"\n",(0,t.jsx)(a,{filename:"my-preset.js",code:'<pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token literal-property property">corePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">float</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsx)(a,{filename:"tailwind.config.js",code:'<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'tailwindcss\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./my-preset.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// This configuration will be merged</span>\n  <span class="token literal-property property">corePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">cursor</span><span class="token operator">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["If you configure ",(0,t.jsx)(s.code,{children:"corePlugins"})," as an array, it replaces any ",(0,t.jsx)(s.code,{children:"corePlugins"})," configuration provided by your configured preset(s)."]}),"\n",(0,t.jsx)(a,{filename:"my-preset.js",code:'<pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token literal-property property">corePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">float</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsx)(a,{filename:"tailwind.config.js",code:'<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'tailwindcss\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./example-preset.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// This will replace the configuration in the preset</span>\n  <span class="token literal-property property">corePlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'float\'</span><span class="token punctuation">,</span> <span class="token string">\'padding\'</span><span class="token punctuation">,</span> <span class="token string">\'margin\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(p,{level:2,id:"extending-multiple-presets",children:"Extending multiple presets"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"presets"})," option is an array and can accept multiple presets. This is useful if you want to split your reusable customizations up into composable chunks that can be imported independently."]}),"\n",(0,t.jsx)(a,{filename:"tailwind.config.js",code:'<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'tailwindcss\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@acmecorp/tailwind-colors\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@acmecorp/tailwind-fonts\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@acmecorp/tailwind-spacing\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsx)(s.p,{children:"When adding multiple presets, it’s important to note that if they overlap in any way, they are resolved the same way your own customizations are resolved against a preset, and the last configuration wins."}),"\n",(0,t.jsxs)(s.p,{children:["For example, if both of these configurations provided a custom color palette (and were not using ",(0,t.jsx)(s.code,{children:"extend"}),"), the color palette from ",(0,t.jsx)(s.code,{children:"configuration-b"})," would be used:"]}),"\n",(0,t.jsx)(a,{filename:"tailwind.config.js",code:'<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'tailwindcss\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@acmecorp/configuration-a\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@acmecorp/configuration-b\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(p,{level:2,id:"disabling-the-default-configuration",children:"Disabling the default configuration"}),"\n",(0,t.jsxs)(s.p,{children:["If you’d like to completely disable the default configuration and start with no base configuration at all, set ",(0,t.jsx)(s.code,{children:"presets"})," to an empty array:"]}),"\n",(0,t.jsx)(a,{filename:"tailwind.config.js",code:'<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'tailwindcss\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsx)(s.p,{children:"This will completely disable all of Tailwind’s defaults, so no colors, font families, font sizes, spacing values, etc. will be generated at all."}),"\n",(0,t.jsx)(s.p,{children:"You can also do this from within a preset if you’d like your preset to provide a complete design system on its own that doesn’t extend Tailwind’s defaults:"}),"\n",(0,t.jsx)(a,{filename:"my-preset.js",code:'<pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,t.jsx)(a,{filename:"tailwind.config.js",code:'<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'tailwindcss\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./my-preset.js\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>'})]})}function i(n={}){return(0,t.jsx)(l,Object.assign({},n,{children:(0,t.jsx)(r,n)}))}function u(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=i,i.layoutProps={Layout:c,meta:{title:"Presets",description:"Creating your own reusable configuration presets."},slug:"presets",tableOfContents:[{title:"Creating a preset",slug:"creating-a-preset",children:[]},{title:"Merging logic in-depth",slug:"merging-logic-in-depth",children:[{title:"Theme",slug:"theme",children:[]},{title:"Presets",slug:"presets",children:[]},{title:"Plugins",slug:"plugins",children:[]},{title:"Core plugins",slug:"core-plugins",children:[]}]},{title:"Extending multiple presets",slug:"extending-multiple-presets",children:[]},{title:"Disabling the default configuration",slug:"disabling-the-default-configuration",children:[]}]}},88120:function(n,s,a){"use strict";a.d(s,{X:function(){return o}});var t=a(85893),e=a(25928);let p={screens:"Your project's responsive breakpoints",colors:"Your project's color palette",spacing:"Your project's spacing scale",container:"Configuration for the `container` plugin",inset:"Values for the `top`, `right`, `bottom`, and `left` properties",keyframes:"Keyframe values used in the `animation` plugin",...Object.fromEntries(["placeholderColor","placeholderOpacity","rotate","scale","space","textOpacity","translate","backdropBlur","backdropBrightness","backdropContrast","backdropGrayscale","backdropHueRotate","backdropInvert","backdropOpacity","backdropSaturate","backdropSepia","blur","brightness","borderOpacity","borderWidth","boxShadowColor","contrast","divideColor","divideOpacity","divideWidth","dropShadow","fill","grayscale","hueRotate","invert","gradientColorStops","ringColor","ringOffsetColor","ringOffsetWidth","ringOpacity","ringWidth","rotate","saturate","scale","sepia","skew"].map(n=>[n,`Values for the \`${n}\` plugin`]))};function o(){return(0,t.jsx)("div",{className:"prose prose-slate dark:prose-dark",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsx)("tbody",{children:Object.keys(e.Z.theme).map(n=>{var s;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:n})}),(0,t.jsx)("td",{children:(null===(s=p[n])||void 0===s?void 0:s.split(/`([^`]+)`/).map((n,s)=>s%2==0?n:(0,t.jsx)("code",{children:n},s)))||(0,t.jsxs)(t.Fragment,{children:["Values for the"," ",(0,t.jsx)("code",{children:n.replace(/([a-z])([A-Z])/g,(n,s,a)=>`${s}-${a.toLowerCase()}`)})," ","property"]})})]},n)})})]})})}},30196:function(n,s,a){"use strict";a.d(s,{$o:function(){return o},Vw:function(){return e},qm:function(){return p}});var t=a(85893);function e({children:n}){return(0,t.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,t.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center ring-2 ring-cyan-500 dark:bg-sky-500 dark:ring-sky-500",children:[(0,t.jsx)("svg",{width:"6",height:"4.5",className:"overflow-visible","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M6 0L2 4.5L0 2.5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,t.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-cyan-500/30 rounded-full dark:bg-sky-400/30"})]}),(0,t.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200",children:n})]})}function p({children:n}){return(0,t.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,t.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-rose-400 text-white flex items-center justify-center ring-2 ring-rose-400 dark:bg-red-400 dark:ring-red-400",children:[(0,t.jsx)("svg",{width:"6",height:"6",className:"overflow-visible","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M0 0L6 6M6 0L0 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,t.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-rose-200 rounded-full dark:bg-red-200/25"})]}),(0,t.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200",children:n})]})}function o({children:n}){return(0,t.jsxs)("div",{className:"mt-6 -mb-1 flex space-x-2",children:[(0,t.jsx)("svg",{className:"flex-none w-5 h-5 text-slate-400 dark:text-slate-600",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),(0,t.jsx)("p",{className:"m-0 text-slate-700 text-sm font-medium dark:text-slate-200",children:n})]})}},72788:function(n,s,a){"use strict";a.d(s,{L:function(){return c}});var t=a(85893),e=a(97903),p=a(77929),o=a(87308);function c(n){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.Dx,{children:n.layoutProps.meta.metaTitle||n.layoutProps.meta.title}),(0,t.jsx)(e.C,{nav:o.u,...n})]})}c.nav=o.u},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return c},ah:function(){return p}});var t=a(67294);let e=t.createContext({});function p(n){let s=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let o={};function c({components:n,children:s,disableParentContext:a}){let c;return c=a?"function"==typeof n?n({}):n||o:p(n),t.createElement(e.Provider,{value:c},s)}}},function(n){n.O(0,[3430,3306,4066,9495,224,7308,9774,2888,179],function(){return n(n.s=89997)}),_N_E=n.O()}]);