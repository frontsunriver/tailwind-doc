(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9450],{6225:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/sveltekit",function(){return s(61172)}])},52196:function(e,t,s){"use strict";s.d(t,{a:function(){return l}});var i=s(85893),n=s(76239);function l({title:e,description:t,children:s}){return(0,i.jsxs)(n.i,{children:[(0,i.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,i.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,i.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,i.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:e}),(0,i.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,i.jsx)("section",{className:"mb-16 relative",children:s})]})}},61172:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return r},default:function(){return c}});var i=s(85893),n=s(72788),l=s(52196),o=s(39897);let a=[{title:"Create your project",body:()=>(0,i.jsxs)("p",{children:["Start by creating a new SvelteKit project if you don't have one set up already. The most common approach is outlined in the"," ",(0,i.jsx)("a",{href:"https://kit.svelte.dev/docs#introduction-getting-started",children:"Getting Started with SvelteKit"})," ","introduction."]}),code:{name:"Terminal",lang:"terminal",code:"npm create svelte@latest my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:()=>(0,i.jsxs)("p",{children:["Install ",(0,i.jsx)("code",{children:"tailwindcss"})," and its peer dependencies, then generate your"," ",(0,i.jsx)("code",{children:"tailwind.config.js"})," and ",(0,i.jsx)("code",{children:"postcss.config.js"})," files."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"}},{title:"Enable use of PostCSS in <style> blocks",body:()=>(0,i.jsxs)("p",{children:["In your ",(0,i.jsx)("code",{children:"svelte.config.js"})," file, import ",(0,i.jsx)("code",{children:"vitePreprocess"})," to enable processing ",(0,i.jsx)("code",{children:"<style>"})," blocks as PostCSS."]}),code:{name:"svelte.config.js",lang:"js",code:`  import adapter from '@sveltejs/adapter-auto';
> import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
  /** @type {import('@sveltejs/kit').Config} */
  const config = {
    kit: {
      adapter: adapter()
    },
>   preprocess: vitePreprocess()
  };
  export default config;`}},{title:"Configure your template paths",body:()=>(0,i.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,i.jsx)("code",{children:"tailwind.config.js"})," file."]}),code:{name:"tailwind.config.js",lang:"javascript",code:`  /** @type {import('tailwindcss').Config} */
  export default {
>   content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {}
    },
    plugins: []
  };`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,i.jsxs)("p",{children:["Create a ",(0,i.jsx)("code",{children:"./src/app.css"})," file and add the ",(0,i.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers."]}),code:{name:"app.css",lang:"css",code:`@tailwind base;
@tailwind components;
@tailwind utilities;`}},{title:"Import the CSS file",body:()=>(0,i.jsxs)("p",{children:["Create a ",(0,i.jsx)("code",{children:"./src/routes/+layout.svelte"})," file and import the newly-created"," ",(0,i.jsx)("code",{children:"app.css"})," file."]}),code:{name:"+layout.svelte",lang:"html",code:`<script>
  import "../app.css";
</script>

<slot />`}},{title:"Start your build process",body:()=>(0,i.jsxs)("p",{children:["Run your build process with ",(0,i.jsx)("code",{children:"npm run dev"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:()=>(0,i.jsxs)("p",{children:["Start using Tailwind’s utility classes to style your content, making sure to set"," ",(0,i.jsx)("code",{children:'lang="postcss"'})," for any ",(0,i.jsx)("code",{children:"<style>"})," blocks that need to be processed by Tailwind."]}),code:{name:"+page.svelte",lang:"html",code:`> <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

> <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>`}}];var r=!0;function c({code:e}){return(0,i.jsx)(l.a,{title:"Install Tailwind CSS with SvelteKit",description:"Setting up Tailwind CSS in a SvelteKit project.",children:(0,i.jsx)(o.R,{steps:a,code:e})})}c.layoutProps={meta:{title:"Install Tailwind CSS with SvelteKit",description:"Setting up Tailwind CSS in a SvelteKit project.",section:"Getting Started"},Layout:n.L,allowOverflow:!1}}},function(e){e.O(0,[9495,7308,7667,9774,2888,179],function(){return e(e.s=6225)}),_N_E=e.O()}]);