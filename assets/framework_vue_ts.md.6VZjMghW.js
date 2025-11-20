import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Vue TS","description":"","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"为什么在 Vue 3 中使用 TypeScript","slug":"为什么在-vue-3-中使用-typescript","link":"#为什么在-vue-3-中使用-typescript","children":[{"level":3,"title":"主要优势","slug":"主要优势","link":"#主要优势","children":[]}]},{"level":2,"title":"在 script setup 中使用 TypeScript","slug":"在-script-setup-中使用-typescript","link":"#在-script-setup-中使用-typescript","children":[{"level":3,"title":"基本设置","slug":"基本设置","link":"#基本设置","children":[]}]},{"level":2,"title":"定义 Props 类型","slug":"定义-props-类型","link":"#定义-props-类型","children":[{"level":3,"title":"方式一：使用运行时声明","slug":"方式一-使用运行时声明","link":"#方式一-使用运行时声明","children":[]},{"level":3,"title":"方式二：使用响应式默认值","slug":"方式二-使用响应式默认值","link":"#方式二-使用响应式默认值","children":[]},{"level":3,"title":"方式三：复杂对象类型","slug":"方式三-复杂对象类型","link":"#方式三-复杂对象类型","children":[]}]},{"level":2,"title":"定义 Emits 类型","slug":"定义-emits-类型","link":"#定义-emits-类型","children":[{"level":3,"title":"方式一：类型字面量声明","slug":"方式一-类型字面量声明","link":"#方式一-类型字面量声明","children":[]},{"level":3,"title":"方式二：使用泛型约束","slug":"方式二-使用泛型约束","link":"#方式二-使用泛型约束","children":[]}]},{"level":2,"title":"定义 Provide / Inject 类型","slug":"定义-provide-inject-类型","link":"#定义-provide-inject-类型","children":[{"level":3,"title":"提供数据 (Provide)","slug":"提供数据-provide","link":"#提供数据-provide","children":[]},{"level":3,"title":"注入数据 (Inject)","slug":"注入数据-inject","link":"#注入数据-inject","children":[]}]},{"level":2,"title":"完整的组件示例","slug":"完整的组件示例","link":"#完整的组件示例","children":[]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[{"level":3,"title":"使用类型别名和接口","slug":"使用类型别名和接口","link":"#使用类型别名和接口","children":[]},{"level":3,"title":"创建可重用的组合式函数","slug":"创建可重用的组合式函数","link":"#创建可重用的组合式函数","children":[]}]}],"relativePath":"framework/vue/ts.md","filePath":"framework/vue/ts.md"}'),o={name:"framework/vue/ts.md"};function e(t,s,c,r,E,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/vue/ts.md for this page in Markdown format</div><h1 id="vue-ts" tabindex="-1">Vue TS <a class="header-anchor" href="#vue-ts" aria-label="Permalink to &quot;Vue TS&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>Vue 3 与 TypeScript 的结合为开发者带来了更好的类型安全和开发体验。在 <code>&lt;script setup&gt;</code> 语法糖中，我们可以充分利用 TypeScript 的优势，编写更加健壮和可维护的代码。</p><h2 id="为什么在-vue-3-中使用-typescript" tabindex="-1">为什么在 Vue 3 中使用 TypeScript <a class="header-anchor" href="#为什么在-vue-3-中使用-typescript" aria-label="Permalink to &quot;为什么在 Vue 3 中使用 TypeScript&quot;">​</a></h2><h3 id="主要优势" tabindex="-1">主要优势 <a class="header-anchor" href="#主要优势" aria-label="Permalink to &quot;主要优势&quot;">​</a></h3><ol><li><strong>类型安全</strong> - 在编译时捕获类型错误</li><li><strong>更好的 IDE 支持</strong> - 智能提示、自动补全和重构</li><li><strong>代码可读性</strong> - 明确的接口定义和类型约束</li><li><strong>团队协作</strong> - 清晰的组件契约和接口规范</li><li><strong>重构友好</strong> - 类型检查确保重构的安全性</li></ol><h2 id="在-script-setup-中使用-typescript" tabindex="-1">在 script setup 中使用 TypeScript <a class="header-anchor" href="#在-script-setup-中使用-typescript" aria-label="Permalink to &quot;在 script setup 中使用 TypeScript&quot;">​</a></h2><h3 id="基本设置" tabindex="-1">基本设置 <a class="header-anchor" href="#基本设置" aria-label="Permalink to &quot;基本设置&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// TypeScript 代码将在这里编写</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="定义-props-类型" tabindex="-1">定义 Props 类型 <a class="header-anchor" href="#定义-props-类型" aria-label="Permalink to &quot;定义 Props 类型&quot;">​</a></h2><h3 id="方式一-使用运行时声明" tabindex="-1">方式一：使用运行时声明 <a class="header-anchor" href="#方式一-使用运行时声明" aria-label="Permalink to &quot;方式一：使用运行时声明&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> Props</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  title</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  count</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">  isVisible</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> boolean</span></span>
<span class="line"><span style="color:#FFAB70;">  items</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#B392F0;">  onAction</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> props</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineProps</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Props</span><span style="color:#E1E4E8;">&gt;()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="方式二-使用响应式默认值" tabindex="-1">方式二：使用响应式默认值 <a class="header-anchor" href="#方式二-使用响应式默认值" aria-label="Permalink to &quot;方式二：使用响应式默认值&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> Props</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  title</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  count</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">  tags</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 withDefaults 为 props 提供默认值</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> props</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> withDefaults</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Props</span><span style="color:#E1E4E8;">&gt;(), {</span></span>
<span class="line"><span style="color:#E1E4E8;">  count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  tags</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="方式三-复杂对象类型" tabindex="-1">方式三：复杂对象类型 <a class="header-anchor" href="#方式三-复杂对象类型" aria-label="Permalink to &quot;方式三：复杂对象类型&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> User</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  id</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">  name</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  email</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  avatar</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> Props</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  user</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> User</span></span>
<span class="line"><span style="color:#FFAB70;">  settings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">    theme</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;light&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;dark&#39;</span></span>
<span class="line"><span style="color:#FFAB70;">    language</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">    notifications</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> props</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineProps</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Props</span><span style="color:#E1E4E8;">&gt;()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="定义-emits-类型" tabindex="-1">定义 Emits 类型 <a class="header-anchor" href="#定义-emits-类型" aria-label="Permalink to &quot;定义 Emits 类型&quot;">​</a></h2><h3 id="方式一-类型字面量声明" tabindex="-1">方式一：类型字面量声明 <a class="header-anchor" href="#方式一-类型字面量声明" aria-label="Permalink to &quot;方式一：类型字面量声明&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 定义 emits 类型</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> emit</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineEmits</span><span style="color:#E1E4E8;">&lt;{</span></span>
<span class="line"><span style="color:#6A737D;">  // 事件名: 参数类型</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;update:title&#39;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#FFAB70;">  change</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">isValid</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#FFAB70;">  submit</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">FormData</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#FFAB70;">  cancel</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">}&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 emits</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> handleUpdate</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">newTitle</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update:title&#39;</span><span style="color:#E1E4E8;">, newTitle)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> handleChange</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;">, value, value </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="方式二-使用泛型约束" tabindex="-1">方式二：使用泛型约束 <a class="header-anchor" href="#方式二-使用泛型约束" aria-label="Permalink to &quot;方式二：使用泛型约束&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> Emits</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;search&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">query</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;select&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;load-more&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> emit</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineEmits</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Emits</span><span style="color:#E1E4E8;">&gt;()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="定义-provide-inject-类型" tabindex="-1">定义 Provide / Inject 类型 <a class="header-anchor" href="#定义-provide-inject-类型" aria-label="Permalink to &quot;定义 Provide / Inject 类型&quot;">​</a></h2><h3 id="提供数据-provide" tabindex="-1">提供数据 (Provide) <a class="header-anchor" href="#提供数据-provide" aria-label="Permalink to &quot;提供数据 (Provide)&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { provide, ref, reactive } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 定义注入的键和类型</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> UserContext</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  user</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">    id</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">    name</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">    role</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  login</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">credentials</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> LoginData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  logout</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> userContext</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> reactive</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">UserContext</span><span style="color:#E1E4E8;">&gt;({</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;John Doe&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    role: </span><span style="color:#9ECBFF;">&#39;admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  login</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">credentials</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 登录逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  logout</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 登出逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 提供带类型的数据</span></span>
<span class="line"><span style="color:#B392F0;">provide</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">UserContext</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#9ECBFF;">&#39;userContext&#39;</span><span style="color:#E1E4E8;">, userContext)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多个 provide 示例</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> ThemeConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  mode</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;light&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;dark&#39;</span></span>
<span class="line"><span style="color:#FFAB70;">  primaryColor</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> theme</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">ThemeConfig</span><span style="color:#E1E4E8;">&gt;({</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  primaryColor: </span><span style="color:#9ECBFF;">&#39;#1890ff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">provide</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">ThemeConfig</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#9ECBFF;">&#39;theme&#39;</span><span style="color:#E1E4E8;">, theme)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="注入数据-inject" tabindex="-1">注入数据 (Inject) <a class="header-anchor" href="#注入数据-inject" aria-label="Permalink to &quot;注入数据 (Inject)&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { inject } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 定义注入的类型</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> UserContext</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  user</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">    id</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">    name</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">    role</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  login</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">credentials</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> LoginData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  logout</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> ThemeConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  mode</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;light&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;dark&#39;</span></span>
<span class="line"><span style="color:#FFAB70;">  primaryColor</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 注入数据，提供默认值</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> userContext</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> inject</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">UserContext</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#9ECBFF;">&#39;userContext&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Guest&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    role: </span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  login</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {},</span></span>
<span class="line"><span style="color:#B392F0;">  logout</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {},</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 注入必须的数据（不提供默认值）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> theme</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> inject</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">ThemeConfig</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#9ECBFF;">&#39;theme&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用注入的数据</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> handleLogin</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  await</span><span style="color:#E1E4E8;"> userContext.</span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    username: </span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    password: </span><span style="color:#9ECBFF;">&#39;pass&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="完整的组件示例" tabindex="-1">完整的组件示例 <a class="header-anchor" href="#完整的组件示例" aria-label="Permalink to &quot;完整的组件示例&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> :class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[&#39;card&#39;, \`theme-\${theme.mode}\`]&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;{{ title }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;计数: {{ count }}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;user.user.name !== &#39;Guest&#39;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;欢迎, {{ user.user.name }}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleIncrement&quot;</span><span style="color:#E1E4E8;">&gt;增加&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleLogout&quot;</span><span style="color:#E1E4E8;">&gt;退出&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> v-else</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleLogin&quot;</span><span style="color:#E1E4E8;">&gt;登录&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { inject, withDefaults } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 定义 Props 类型</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> Props</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  title</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  initialCount</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> props</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> withDefaults</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Props</span><span style="color:#E1E4E8;">&gt;(), {</span></span>
<span class="line"><span style="color:#E1E4E8;">  initialCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 定义 Emits 类型</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> emit</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineEmits</span><span style="color:#E1E4E8;">&lt;{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;count-change&#39;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [</span><span style="color:#B392F0;">newCount</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;user-action&#39;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [</span><span style="color:#B392F0;">action</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 定义注入类型</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> UserContext</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  user</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">    id</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">    name</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">    role</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  login</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  logout</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> ThemeConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  mode</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;light&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;dark&#39;</span></span>
<span class="line"><span style="color:#FFAB70;">  primaryColor</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 注入依赖</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> user</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> inject</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">UserContext</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#9ECBFF;">&#39;userContext&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: { id: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;Guest&#39;</span><span style="color:#E1E4E8;">, role: </span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#B392F0;">  login</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {},</span></span>
<span class="line"><span style="color:#B392F0;">  logout</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {},</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> theme</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> inject</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">ThemeConfig</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#9ECBFF;">&#39;theme&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  primaryColor: </span><span style="color:#9ECBFF;">&#39;#1890ff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 响应式数据</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(props.initialCount)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 方法</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> handleIncrement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  count.value</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#B392F0;">  emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;count-change&#39;</span><span style="color:#E1E4E8;">, count.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> handleLogin</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  await</span><span style="color:#E1E4E8;"> user.</span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">  emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user-action&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;login&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> handleLogout</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  user.</span><span style="color:#B392F0;">logout</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">  emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user-action&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;logout&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#B392F0;"> scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.card</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> solid</span><span style="color:#79B8FF;"> #ccc</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.theme-dark</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#333</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">white</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.theme-light</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">white</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#333</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><h3 id="使用类型别名和接口" tabindex="-1">使用类型别名和接口 <a class="header-anchor" href="#使用类型别名和接口" aria-label="Permalink to &quot;使用类型别名和接口&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// types/user.ts</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> interface</span><span style="color:#B392F0;"> User</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  id</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">  name</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  email</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  avatar</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> type</span><span style="color:#B392F0;"> UserRole</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;admin&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;user&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;guest&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// types/api.ts</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> interface</span><span style="color:#B392F0;"> ApiResponse</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#FFAB70;">  data</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> T</span></span>
<span class="line"><span style="color:#FFAB70;">  status</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">  message</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="创建可重用的组合式函数" tabindex="-1">创建可重用的组合式函数 <a class="header-anchor" href="#创建可重用的组合式函数" aria-label="Permalink to &quot;创建可重用的组合式函数&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// composables/useCounter.ts</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> UseCounterOptions</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  initialValue</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">  min</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">  max</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> UseCounterReturn</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  count</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  increment</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#B392F0;">  decrement</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#B392F0;">  reset</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#B392F0;">  set</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> useCounter</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#FFAB70;">  options</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> UseCounterOptions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {},</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> UseCounterReturn</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">initialValue</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">min</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">max</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(initialValue)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> increment</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (max </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> undefined</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> count.value </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> max) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count.value</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> decrement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (min </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> undefined</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> count.value </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> min) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count.value</span><span style="color:#F97583;">--</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> reset</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> initialValue</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> set</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (min </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> undefined</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> min) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> min</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (max </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> undefined</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> max) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> max</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count,</span></span>
<span class="line"><span style="color:#E1E4E8;">    increment,</span></span>
<span class="line"><span style="color:#E1E4E8;">    decrement,</span></span>
<span class="line"><span style="color:#E1E4E8;">    reset,</span></span>
<span class="line"><span style="color:#E1E4E8;">    set,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,34)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
