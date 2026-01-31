import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Vue 动态组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是动态组件？","slug":"什么是动态组件","link":"#什么是动态组件","children":[]},{"level":2,"title":"动态组件的好处","slug":"动态组件的好处","link":"#动态组件的好处","children":[]},{"level":2,"title":"定义动态组件","slug":"定义动态组件","link":"#定义动态组件","children":[{"level":3,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[]}]},{"level":2,"title":"使用动态组件","slug":"使用动态组件","link":"#使用动态组件","children":[{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"使用组件对象引用","slug":"使用组件对象引用","link":"#使用组件对象引用","children":[]},{"level":3,"title":"带参数的动态组件","slug":"带参数的动态组件","link":"#带参数的动态组件","children":[]},{"level":3,"title":"保持组件状态 (keep-alive)","slug":"保持组件状态-keep-alive","link":"#保持组件状态-keep-alive","children":[]},{"level":3,"title":"完整的示例项目","slug":"完整的示例项目","link":"#完整的示例项目","children":[]}]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"relativePath":"framework/vue/dynamic-component.md","filePath":"framework/vue/dynamic-component.md"}'),o={name:"framework/vue/dynamic-component.md"};function e(t,s,c,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/vue/dynamic-component.md for this page in Markdown format</div><h1 id="vue-动态组件" tabindex="-1">Vue 动态组件 <a class="header-anchor" href="#vue-动态组件" aria-label="Permalink to &quot;Vue 动态组件&quot;">​</a></h1><h2 id="什么是动态组件" tabindex="-1">什么是动态组件？ <a class="header-anchor" href="#什么是动态组件" aria-label="Permalink to &quot;什么是动态组件？&quot;">​</a></h2><p>动态组件是 Vue 中一个强大的功能，它允许您在不同的组件之间动态切换，而无需在模板中硬编码特定的组件名称。通过动态组件，您可以根据应用程序的状态、用户交互或其他条件来动态决定要渲染哪个组件。</p><h2 id="动态组件的好处" tabindex="-1">动态组件的好处 <a class="header-anchor" href="#动态组件的好处" aria-label="Permalink to &quot;动态组件的好处&quot;">​</a></h2><ol><li><strong>灵活性</strong> - 根据运行时条件动态切换组件</li><li><strong>代码简洁</strong> - 避免使用大量的 <code>v-if</code>/<code>v-else</code> 条件渲染</li><li><strong>可维护性</strong> - 组件逻辑更清晰，易于扩展</li><li><strong>复用性</strong> - 同一位置可以渲染不同的组件</li></ol><h2 id="定义动态组件" tabindex="-1">定义动态组件 <a class="header-anchor" href="#定义动态组件" aria-label="Permalink to &quot;定义动态组件&quot;">​</a></h2><h3 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-label="Permalink to &quot;基本语法&quot;">​</a></h3><p>使用 Vue 的 <code>&lt;component&gt;</code> 元素配合 <code>:is</code> 属性来定义动态组件：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">component</span><span style="color:#B392F0;"> :is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentComponent&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">component</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="使用动态组件" tabindex="-1">使用动态组件 <a class="header-anchor" href="#使用动态组件" aria-label="Permalink to &quot;使用动态组件&quot;">​</a></h2><h3 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentComponent = &#39;ComponentA&#39;&quot;</span><span style="color:#E1E4E8;">&gt;显示组件 A&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentComponent = &#39;ComponentB&#39;&quot;</span><span style="color:#E1E4E8;">&gt;显示组件 B&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">component</span><span style="color:#B392F0;"> :is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentComponent&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">component</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ComponentA </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./ComponentA.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ComponentB </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./ComponentB.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentComponent</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ComponentA&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="使用组件对象引用" tabindex="-1">使用组件对象引用 <a class="header-anchor" href="#使用组件对象引用" aria-label="Permalink to &quot;使用组件对象引用&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentComponent = CompA&quot;</span><span style="color:#E1E4E8;">&gt;显示组件 A&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentComponent = CompB&quot;</span><span style="color:#E1E4E8;">&gt;显示组件 B&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">component</span><span style="color:#B392F0;"> :is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentComponent&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">component</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, shallowRef } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> CompA </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./ComponentA.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> CompB </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./ComponentB.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentComponent</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> shallowRef</span><span style="color:#E1E4E8;">(CompA)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="带参数的动态组件" tabindex="-1">带参数的动态组件 <a class="header-anchor" href="#带参数的动态组件" aria-label="Permalink to &quot;带参数的动态组件&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tabs&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">        v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tab in tabs&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        :key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tab.name&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentTab = tab.name&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        :class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ active: currentTab === tab.name }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{ tab.label }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">component</span></span>
<span class="line"><span style="color:#B392F0;">      :is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentTabComponent&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      :message</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentMessage&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      @custom-event</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleCustomEvent&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, computed } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> HomePage </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./components/HomePage.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> AboutPage </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./components/AboutPage.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ContactPage </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./components/ContactPage.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tabs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;HomePage&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;首页&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;AboutPage&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;关于&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;ContactPage&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;联系&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentTab</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;HomePage&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentMessage</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;欢迎使用动态组件！&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 计算当前组件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentTabComponent</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  switch</span><span style="color:#E1E4E8;"> (currentTab.value) {</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;HomePage&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> HomePage</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;AboutPage&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> AboutPage</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;ContactPage&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> ContactPage</span></span>
<span class="line"><span style="color:#F97583;">    default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> HomePage</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> handleCustomEvent</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;收到自定义事件:&#39;</span><span style="color:#E1E4E8;">, data)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#B392F0;"> scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.tabs</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  margin-bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.tabs</span><span style="color:#85E89D;"> button</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> 20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  margin-right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> solid</span><span style="color:#79B8FF;"> #ccc</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">white</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  cursor</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">pointer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.tabs</span><span style="color:#85E89D;"> button</span><span style="color:#B392F0;">.active</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#007bff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">white</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#007bff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="保持组件状态-keep-alive" tabindex="-1">保持组件状态 (keep-alive) <a class="header-anchor" href="#保持组件状态-keep-alive" aria-label="Permalink to &quot;保持组件状态 (keep-alive)&quot;">​</a></h3><p>使用 <code>&lt;keep-alive&gt;</code> 包裹动态组件可以保持组件状态，避免重复渲染：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentView = &#39;UserList&#39;&quot;</span><span style="color:#E1E4E8;">&gt;用户列表&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentView = &#39;UserForm&#39;&quot;</span><span style="color:#E1E4E8;">&gt;用户表单&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">keep-alive</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">component</span><span style="color:#B392F0;"> :is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentView&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">component</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">keep-alive</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> UserList </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./components/UserList.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> UserForm </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./components/UserForm.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentView</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;UserList&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="完整的示例项目" tabindex="-1">完整的示例项目 <a class="header-anchor" href="#完整的示例项目" aria-label="Permalink to &quot;完整的示例项目&quot;">​</a></h3><p><strong>App.vue</strong></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;Vue 动态组件示例&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;controls&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">        v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;view in views&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        :key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;view.id&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selectView(view.id)&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        :class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ active: currentViewId === view.id }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{ view.name }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;component-container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">keep-alive</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">component</span></span>
<span class="line"><span style="color:#B392F0;">          :is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentView.component&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          v-bind</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentView.props&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          @view-change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleViewChange&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">keep-alive</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, computed } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> WelcomePage </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./components/WelcomePage.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> UserProfile </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./components/UserProfile.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> SettingsPanel </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./components/SettingsPanel.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 视图配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> views</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&#39;welcome&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;欢迎页&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    component: WelcomePage,</span></span>
<span class="line"><span style="color:#E1E4E8;">    props: { title: </span><span style="color:#9ECBFF;">&#39;欢迎使用动态组件&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&#39;profile&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;用户资料&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    component: UserProfile,</span></span>
<span class="line"><span style="color:#E1E4E8;">    props: { userId: </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">, editable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&#39;settings&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;设置&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    component: SettingsPanel,</span></span>
<span class="line"><span style="color:#E1E4E8;">    props: { theme: </span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentViewId</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;welcome&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 计算当前视图</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentView</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> views.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">view</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> view.id </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> currentViewId.value) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> views[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> selectView</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">viewId</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  currentViewId.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> viewId</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> handleViewChange</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">newViewId</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (views.</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">view</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> view.id </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> newViewId)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    currentViewId.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newViewId</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#B392F0;"> scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.app</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">800</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#79B8FF;"> auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.controls</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.controls</span><span style="color:#85E89D;"> button</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> 15</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  margin-right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> solid</span><span style="color:#79B8FF;"> #ddd</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#f5f5f5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  cursor</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">pointer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">4</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.controls</span><span style="color:#85E89D;"> button</span><span style="color:#B392F0;">.active</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#007bff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">white</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#007bff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.component-container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> solid</span><span style="color:#79B8FF;"> #eee</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  min-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>WelcomePage.vue</strong></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;welcome-page&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;{{ title }}&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;这是一个欢迎页面，演示动态组件的使用。&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;goToProfile&quot;</span><span style="color:#E1E4E8;">&gt;前往用户资料&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;欢迎&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> emit</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineEmits</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;view-change&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> goToProfile</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;view-change&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;profile&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#B392F0;"> scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.welcome-page</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><strong>组件注册</strong> - 确保动态使用的组件已经被正确导入和注册</li><li><strong>性能考虑</strong> - 对于频繁切换的组件，使用 <code>shallowRef</code> 和 <code>keep-alive</code> 优化性能</li><li><strong>Props 传递</strong> - 使用 <code>v-bind</code> 传递 props 到动态组件</li><li><strong>事件处理</strong> - 动态组件可以正常触发和监听事件</li></ol>`,27)])])}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
