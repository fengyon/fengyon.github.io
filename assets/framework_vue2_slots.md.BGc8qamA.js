import{_ as a,c as n,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const d=JSON.parse('{"title":"Vue2 Slot","description":"","frontmatter":{},"headers":[{"level":2,"title":"插槽基本概念","slug":"插槽基本概念","link":"#插槽基本概念","children":[]},{"level":2,"title":"默认插槽","slug":"默认插槽","link":"#默认插槽","children":[{"level":3,"title":"子组件定义","slug":"子组件定义","link":"#子组件定义","children":[]},{"level":3,"title":"父组件使用","slug":"父组件使用","link":"#父组件使用","children":[]}]},{"level":2,"title":"具名插槽","slug":"具名插槽","link":"#具名插槽","children":[{"level":3,"title":"子组件定义","slug":"子组件定义-1","link":"#子组件定义-1","children":[]},{"level":3,"title":"父组件使用","slug":"父组件使用-1","link":"#父组件使用-1","children":[]},{"level":3,"title":"具名插槽缩写","slug":"具名插槽缩写","link":"#具名插槽缩写","children":[]}]},{"level":2,"title":"作用域插槽","slug":"作用域插槽","link":"#作用域插槽","children":[{"level":3,"title":"子组件定义","slug":"子组件定义-2","link":"#子组件定义-2","children":[]},{"level":3,"title":"父组件使用","slug":"父组件使用-2","link":"#父组件使用-2","children":[]},{"level":3,"title":"解构插槽 Prop","slug":"解构插槽-prop","link":"#解构插槽-prop","children":[]}]},{"level":2,"title":"独占默认插槽的缩写语法","slug":"独占默认插槽的缩写语法","link":"#独占默认插槽的缩写语法","children":[{"level":3,"title":"子组件","slug":"子组件","link":"#子组件","children":[]},{"level":3,"title":"父组件使用","slug":"父组件使用-3","link":"#父组件使用-3","children":[]}]},{"level":2,"title":"动态插槽名","slug":"动态插槽名","link":"#动态插槽名","children":[]},{"level":2,"title":"插槽高级用法","slug":"插槽高级用法","link":"#插槽高级用法","children":[{"level":3,"title":"嵌套插槽","slug":"嵌套插槽","link":"#嵌套插槽","children":[]},{"level":3,"title":"条件插槽","slug":"条件插槽","link":"#条件插槽","children":[]},{"level":3,"title":"列表渲染插槽","slug":"列表渲染插槽","link":"#列表渲染插槽","children":[]}]},{"level":2,"title":"插槽作用域规则","slug":"插槽作用域规则","link":"#插槽作用域规则","children":[]},{"level":2,"title":"插槽性能提示","slug":"插槽性能提示","link":"#插槽性能提示","children":[]}],"relativePath":"framework/vue2/slots.md","filePath":"framework/vue2/slots.md"}'),t={name:"framework/vue2/slots.md"};function o(e,s,c,E,r,i){return l(),n("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/vue2/slots.md for this page in Markdown format</div><h1 id="vue2-slot" tabindex="-1">Vue2 Slot <a class="header-anchor" href="#vue2-slot" aria-label="Permalink to &quot;Vue2 Slot&quot;">​</a></h1><p>Vue2 插槽是组件的一个核心特性，允许组件接收模板内容，实现内容分发和组合。</p><h2 id="插槽基本概念" tabindex="-1">插槽基本概念 <a class="header-anchor" href="#插槽基本概念" aria-label="Permalink to &quot;插槽基本概念&quot;">​</a></h2><p>插槽是组件内部的占位符，父组件可以在这个占位符中插入任何模板内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件结构示意图:</span></span>
<span class="line"><span>+-----------------------+</span></span>
<span class="line"><span>| 子组件                |</span></span>
<span class="line"><span>| +-------------------+ |</span></span>
<span class="line"><span>| |  &lt;slot&gt;&lt;/slot&gt;    | | ← 插槽占位符</span></span>
<span class="line"><span>| +-------------------+ |</span></span>
<span class="line"><span>+-----------------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>父组件使用:</span></span>
<span class="line"><span>+-----------------------+</span></span>
<span class="line"><span>| 父组件                |</span></span>
<span class="line"><span>| +-------------------+ |</span></span>
<span class="line"><span>| |   &lt;子组件&gt;        | |</span></span>
<span class="line"><span>| |     内容          | | ← 插入的内容</span></span>
<span class="line"><span>| |   &lt;/子组件&gt;       | |</span></span>
<span class="line"><span>| +-------------------+ |</span></span>
<span class="line"><span>+-----------------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>渲染结果:</span></span>
<span class="line"><span>+-----------------------+</span></span>
<span class="line"><span>| 子组件                |</span></span>
<span class="line"><span>| +-------------------+ |</span></span>
<span class="line"><span>| |     内容          | | ← 替换插槽</span></span>
<span class="line"><span>| +-------------------+ |</span></span>
<span class="line"><span>+-----------------------+</span></span></code></pre></div><h2 id="默认插槽" tabindex="-1">默认插槽 <a class="header-anchor" href="#默认插槽" aria-label="Permalink to &quot;默认插槽&quot;">​</a></h2><p>最基本的插槽类型，当父组件没有提供内容时显示默认内容。</p><h3 id="子组件定义" tabindex="-1">子组件定义 <a class="header-anchor" href="#子组件定义" aria-label="Permalink to &quot;子组件定义&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;alert-box&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;div class=&quot;alert-box&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;strong&gt;注意!&lt;/strong&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        这是默认内容，当父组件没有提供内容时显示</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="父组件使用" tabindex="-1">父组件使用 <a class="header-anchor" href="#父组件使用" aria-label="Permalink to &quot;父组件使用&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 使用默认内容 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">alert-box</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">alert-box</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 提供自定义内容 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">alert-box</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  这里是自定义的警告信息</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">alert-box</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="具名插槽" tabindex="-1">具名插槽 <a class="header-anchor" href="#具名插槽" aria-label="Permalink to &quot;具名插槽&quot;">​</a></h2><p>当组件需要多个插槽时，使用具名插槽来区分不同的插槽位置。</p><h3 id="子组件定义-1" tabindex="-1">子组件定义 <a class="header-anchor" href="#子组件定义-1" aria-label="Permalink to &quot;子组件定义&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;base-layout&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;header&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/header&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;main&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/main&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;footer&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/footer&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="父组件使用-1" tabindex="-1">父组件使用 <a class="header-anchor" href="#父组件使用-1" aria-label="Permalink to &quot;父组件使用&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">base-layout</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#B392F0;"> v-slot:header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;这里是页面标题&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;这里是主要内容，会插入到默认插槽中&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;另一段主要内容&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#B392F0;"> v-slot:footer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;这里是页脚信息&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">base-layout</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="具名插槽缩写" tabindex="-1">具名插槽缩写 <a class="header-anchor" href="#具名插槽缩写" aria-label="Permalink to &quot;具名插槽缩写&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">base-layout</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#B392F0;"> #header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;页面标题&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;主要内容&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#B392F0;"> #footer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;页脚信息&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">base-layout</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="作用域插槽" tabindex="-1">作用域插槽 <a class="header-anchor" href="#作用域插槽" aria-label="Permalink to &quot;作用域插槽&quot;">​</a></h2><p>让父组件能够访问子组件中的数据，实现更灵活的模板定制。</p><h3 id="子组件定义-2" tabindex="-1">子组件定义 <a class="header-anchor" href="#子组件定义-2" aria-label="Permalink to &quot;子组件定义&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;todo-list&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      todos: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, text: </span><span style="color:#9ECBFF;">&#39;学习 Vue&#39;</span><span style="color:#E1E4E8;">, isComplete: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, text: </span><span style="color:#9ECBFF;">&#39;学习 JavaScript&#39;</span><span style="color:#E1E4E8;">, isComplete: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { id: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, text: </span><span style="color:#9ECBFF;">&#39;学习 CSS&#39;</span><span style="color:#E1E4E8;">, isComplete: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;li v-for=&quot;todo in todos&quot; :key=&quot;todo.id&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;slot :todo=&quot;todo&quot; :index=&quot;$index&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">          {{ todo.text }}</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/li&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="父组件使用-2" tabindex="-1">父组件使用 <a class="header-anchor" href="#父组件使用-2" aria-label="Permalink to &quot;父组件使用&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">todo-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#B392F0;"> v-slot:default</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;slotProps&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#B392F0;"> :class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ complete: slotProps.todo.isComplete }&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {{ slotProps.todo.text }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;!slotProps.todo.isComplete&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      标记完成</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">todo-list</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="解构插槽-prop" tabindex="-1">解构插槽 Prop <a class="header-anchor" href="#解构插槽-prop" aria-label="Permalink to &quot;解构插槽 Prop&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">todo-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#B392F0;"> v-slot:default</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ todo, index }&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;第 {{ index + 1 }} 项: {{ todo.text }}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">todo-list</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="独占默认插槽的缩写语法" tabindex="-1">独占默认插槽的缩写语法 <a class="header-anchor" href="#独占默认插槽的缩写语法" aria-label="Permalink to &quot;独占默认插槽的缩写语法&quot;">​</a></h2><p>当只有默认插槽时，可以直接在组件上使用作用域插槽语法。</p><h3 id="子组件" tabindex="-1">子组件 <a class="header-anchor" href="#子组件" aria-label="Permalink to &quot;子组件&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;current-user&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      user: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        firstName: </span><span style="color:#9ECBFF;">&#39;张&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lastName: </span><span style="color:#9ECBFF;">&#39;三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        email: </span><span style="color:#9ECBFF;">&#39;zhangsan@example.com&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;span&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;slot :user=&quot;user&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        {{ user.lastName }}</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/span&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="父组件使用-3" tabindex="-1">父组件使用 <a class="header-anchor" href="#父组件使用-3" aria-label="Permalink to &quot;父组件使用&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 常规写法 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">current-user</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#B392F0;"> v-slot:default</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;slotProps&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{ slotProps.user.firstName }} {{ slotProps.user.lastName }}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">current-user</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 缩写写法 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">current-user</span><span style="color:#B392F0;"> v-slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;slotProps&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ slotProps.user.firstName }} {{ slotProps.user.lastName }}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">current-user</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 解构写法 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">current-user</span><span style="color:#B392F0;"> v-slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ user }&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ user.firstName }} {{ user.lastName }}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">current-user</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="动态插槽名" tabindex="-1">动态插槽名 <a class="header-anchor" href="#动态插槽名" aria-label="Permalink to &quot;动态插槽名&quot;">​</a></h2><p>使用动态指令参数定义动态插槽名。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">base-layout</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#B392F0;"> v-slot:[dynamicSlotName]</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 动态插槽内容 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">base-layout</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dynamicSlotName: </span><span style="color:#9ECBFF;">&#39;header&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="插槽高级用法" tabindex="-1">插槽高级用法 <a class="header-anchor" href="#插槽高级用法" aria-label="Permalink to &quot;插槽高级用法&quot;">​</a></h2><h3 id="嵌套插槽" tabindex="-1">嵌套插槽 <a class="header-anchor" href="#嵌套插槽" aria-label="Permalink to &quot;嵌套插槽&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;card-component&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;div class=&quot;card&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;div class=&quot;card-header&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;div class=&quot;card-body&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;slot name=&quot;body&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user-card&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;card-component&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;template #header&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;slot name=&quot;user-header&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/template&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;template #body&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;slot name=&quot;user-body&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/template&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/card-component&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="条件插槽" tabindex="-1">条件插槽 <a class="header-anchor" href="#条件插槽" aria-label="Permalink to &quot;条件插槽&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;conditional-slot&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: [</span><span style="color:#9ECBFF;">&#39;showSlot&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;slot v-if=&quot;showSlot&quot; name=&quot;conditional&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;slot v-else name=&quot;fallback&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="列表渲染插槽" tabindex="-1">列表渲染插槽 <a class="header-anchor" href="#列表渲染插槽" aria-label="Permalink to &quot;列表渲染插槽&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data-table&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: [</span><span style="color:#9ECBFF;">&#39;items&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;table&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;thead&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/thead&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;tbody&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;tr v-for=&quot;(item, index) in items&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">          &lt;slot name=&quot;row&quot; :item=&quot;item&quot; :index=&quot;index&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/tbody&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/table&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">data-table</span><span style="color:#B392F0;"> :items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;users&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#B392F0;"> #header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">tr</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;">&gt;姓名&lt;/</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;">&gt;邮箱&lt;/</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;">&gt;操作&lt;/</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">tr</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#B392F0;"> #row</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ item, index }&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">tr</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;{{ item.name }}&lt;/</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;{{ item.email }}&lt;/</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;editUser(item)&quot;</span><span style="color:#E1E4E8;">&gt;编辑&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">tr</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">data-table</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="插槽作用域规则" tabindex="-1">插槽作用域规则 <a class="header-anchor" href="#插槽作用域规则" aria-label="Permalink to &quot;插槽作用域规则&quot;">​</a></h2><p>父级模板里的所有内容都是在父级作用域中编译的，子模板里的所有内容都是在子作用域中编译的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>作用域示意图:</span></span>
<span class="line"><span>父模板 → 父作用域数据</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>插槽内容 → 仍访问父作用域</span></span>
<span class="line"><span>        ↓  </span></span>
<span class="line"><span>子模板 → 子作用域数据 (通过作用域插槽暴露给父级)</span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">child-component</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 这里访问的是父组件的数据 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{ parentData }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 通过作用域插槽访问子组件数据 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#B392F0;"> v-slot:default</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;slotProps&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {{ slotProps.childData }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">child-component</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="插槽性能提示" tabindex="-1">插槽性能提示 <a class="header-anchor" href="#插槽性能提示" aria-label="Permalink to &quot;插槽性能提示&quot;">​</a></h2><ul><li>插槽内容在父组件中编译，有更高的性能开销</li><li>作用域插槽可以实现更灵活的组件设计</li><li>合理使用具名插槽提高代码可读性</li><li>动态插槽名提供更大的灵活性</li></ul>`,52)])])}const u=a(t,[["render",o]]);export{d as __pageData,u as default};
