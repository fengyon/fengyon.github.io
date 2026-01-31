import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Vue 异步组件详解","description":"","frontmatter":{},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"好处","slug":"好处","link":"#好处","children":[]},{"level":2,"title":"定义异步组件","slug":"定义异步组件","link":"#定义异步组件","children":[{"level":3,"title":"基础定义","slug":"基础定义","link":"#基础定义","children":[]},{"level":3,"title":"高级配置","slug":"高级配置","link":"#高级配置","children":[]}]},{"level":2,"title":"完整示例","slug":"完整示例","link":"#完整示例","children":[{"level":3,"title":"基础使用示例","slug":"基础使用示例","link":"#基础使用示例","children":[]},{"level":3,"title":"带加载状态的异步组件","slug":"带加载状态的异步组件","link":"#带加载状态的异步组件","children":[]},{"level":3,"title":"条件加载的异步组件","slug":"条件加载的异步组件","link":"#条件加载的异步组件","children":[]},{"level":3,"title":"错误处理示例","slug":"错误处理示例","link":"#错误处理示例","children":[]}]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"framework/vue/async.md","filePath":"framework/vue/async.md"}'),o={name:"framework/vue/async.md"};function e(t,s,c,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/vue/async.md for this page in Markdown format</div><h1 id="vue-异步组件详解" tabindex="-1">Vue 异步组件详解 <a class="header-anchor" href="#vue-异步组件详解" aria-label="Permalink to &quot;Vue 异步组件详解&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>异步组件是 Vue 中一种延迟加载组件的方式。与常规组件在应用初始化时立即加载不同，异步组件只有在需要渲染时才会被加载，这可以显著提升应用的初始加载性能。</p><h2 id="好处" tabindex="-1">好处 <a class="header-anchor" href="#好处" aria-label="Permalink to &quot;好处&quot;">​</a></h2><ol><li><strong>代码分割</strong>：将大型应用拆分成更小的代码块</li><li><strong>按需加载</strong>：只在需要时加载组件，减少初始包大小</li><li><strong>更好的性能</strong>：加快初始加载速度，提升用户体验</li><li><strong>资源优化</strong>：减少不必要的资源下载</li></ol><h2 id="定义异步组件" tabindex="-1">定义异步组件 <a class="header-anchor" href="#定义异步组件" aria-label="Permalink to &quot;定义异步组件&quot;">​</a></h2><h3 id="基础定义" tabindex="-1">基础定义 <a class="header-anchor" href="#基础定义" aria-label="Permalink to &quot;基础定义&quot;">​</a></h3><p>使用 <code>defineAsyncComponent</code> 函数来定义异步组件：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">AsyncUserProfile</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 基础异步组件定义</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> AsyncUserProfile</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#F97583;">  import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/UserProfile.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="高级配置" tabindex="-1">高级配置 <a class="header-anchor" href="#高级配置" aria-label="Permalink to &quot;高级配置&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带有加载状态和错误处理的异步组件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> AsyncComplexComponent</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineAsyncComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">  // 加载函数</span></span>
<span class="line"><span style="color:#B392F0;">  loader</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/ComplexComponent.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 加载中显示的组件</span></span>
<span class="line"><span style="color:#B392F0;">  loadingComponent</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/LoadingSpinner.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 加载失败时显示的组件</span></span>
<span class="line"><span style="color:#B392F0;">  errorComponent</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/ErrorDisplay.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 延迟显示加载组件的时间（默认：200ms）</span></span>
<span class="line"><span style="color:#E1E4E8;">  delay: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 超时时间，超时会显示错误组件</span></span>
<span class="line"><span style="color:#E1E4E8;">  timeout: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 是否可挂起</span></span>
<span class="line"><span style="color:#E1E4E8;">  suspensible: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 错误处理函数</span></span>
<span class="line"><span style="color:#B392F0;">  onError</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">retry</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">fail</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">attempts</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (error.message.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">fetch</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> attempts </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 重试加载，最多重试3次</span></span>
<span class="line"><span style="color:#B392F0;">      retry</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 注意：retry/fail 类似于 promise 的 resolve/reject</span></span>
<span class="line"><span style="color:#B392F0;">      fail</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="完整示例" tabindex="-1">完整示例 <a class="header-anchor" href="#完整示例" aria-label="Permalink to &quot;完整示例&quot;">​</a></h2><h3 id="基础使用示例" tabindex="-1">基础使用示例 <a class="header-anchor" href="#基础使用示例" aria-label="Permalink to &quot;基础使用示例&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;用户管理&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;showProfile = !showProfile&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {{ showProfile ? &#39;隐藏&#39; : &#39;显示&#39; }}用户资料</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;showProfile&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">AsyncUserProfile</span><span style="color:#B392F0;"> :user-id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentUserId&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, defineAsyncComponent } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> showProfile</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentUserId</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 异步加载用户资料组件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> AsyncUserProfile</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#F97583;">  import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/UserProfile.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#B392F0;"> scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.app</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  font-family</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">Arial</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">sans-serif</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="带加载状态的异步组件" tabindex="-1">带加载状态的异步组件 <a class="header-anchor" href="#带加载状态的异步组件" aria-label="Permalink to &quot;带加载状态的异步组件&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dashboard&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;仪表板&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 使用 Suspense 包装异步组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">Suspense</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">AsyncDashboardWidgets</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">fallback</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">LoadingSpinner</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">Suspense</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 加载状态组件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> LoadingSpinner</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#F97583;">  import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/LoadingSpinner.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 主异步组件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> AsyncDashboardWidgets</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineAsyncComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  loader</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/DashboardWidgets.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  loadingComponent: LoadingSpinner,</span></span>
<span class="line"><span style="color:#E1E4E8;">  delay: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="条件加载的异步组件" tabindex="-1">条件加载的异步组件 <a class="header-anchor" href="#条件加载的异步组件" aria-label="Permalink to &quot;条件加载的异步组件&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;admin-panel&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">        v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tab in tabs&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        :key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tab.id&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;activeTab = tab.id&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        :class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ active: activeTab === tab.id }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{ tab.name }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tab-content&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">component</span><span style="color:#B392F0;"> :is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;getTabComponent(activeTab)&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, computed, defineAsyncComponent } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> activeTab</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;users&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tabs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#9ECBFF;">&#39;users&#39;</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;用户管理&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#9ECBFF;">&#39;settings&#39;</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;系统设置&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#9ECBFF;">&#39;reports&#39;</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;报表统计&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 动态导入不同的管理模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tabComponents</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  users: </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#F97583;">    import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/admin/UserManagement.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ),</span></span>
<span class="line"><span style="color:#E1E4E8;">  settings: </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#F97583;">    import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/admin/SystemSettings.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ),</span></span>
<span class="line"><span style="color:#E1E4E8;">  reports: </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#F97583;">    import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/admin/ReportsDashboard.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ),</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> getTabComponent</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">tabId</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> tabComponents[tabId]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="错误处理示例" tabindex="-1">错误处理示例 <a class="header-anchor" href="#错误处理示例" aria-label="Permalink to &quot;错误处理示例&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data-viewer&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;数据查看器&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">AsyncDataTable</span></span>
<span class="line"><span style="color:#B392F0;">      v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;!hasError&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      :data-source</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;apiEndpoint&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      @error</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleDataError&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ErrorFallback</span><span style="color:#B392F0;"> v-else</span><span style="color:#B392F0;"> :error</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentError&quot;</span><span style="color:#B392F0;"> @retry</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleRetry&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, defineAsyncComponent } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> hasError</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentError</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> apiEndpoint</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/data&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带错误处理的异步组件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> AsyncDataTable</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineAsyncComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  loader</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/DataTable.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  errorComponent: </span><span style="color:#B392F0;">defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#F97583;">    import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/ErrorFallback.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ),</span></span>
<span class="line"><span style="color:#B392F0;">  onError</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">retry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    currentError.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">    hasError.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;加载数据表格失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 错误回退组件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ErrorFallback</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#F97583;">  import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/ErrorFallback.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> handleDataError</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  currentError.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">  hasError.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> handleRetry</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  hasError.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">  currentError.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><ol><li><strong>合理使用</strong>：对大型组件或非关键组件使用异步加载</li><li><strong>预加载</strong>：在用户可能访问前预加载重要组件</li><li><strong>错误处理</strong>：始终提供适当的加载和错误状态</li><li><strong>性能监控</strong>：监控组件加载性能，优化过慢的加载</li></ol><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineAsyncComponent, onMounted } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 预加载策略</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> preloadComponents</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 在空闲时间预加载可能需要的组件</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;requestIdleCallback&#39;</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> window) {</span></span>
<span class="line"><span style="color:#B392F0;">    requestIdleCallback</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/HeavyComponent.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  preloadComponents</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 路由级别的懒加载（配合 Vue Router）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> AsyncHomePage</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#F97583;">  import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./views/HomePage.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> AsyncAboutPage</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> defineAsyncComponent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#F97583;">  import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./views/AboutPage.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>Vue 异步组件是优化应用性能的强大工具。通过 <code>defineAsyncComponent</code> 和 <code>script setup</code> 语法，我们可以轻松实现组件的按需加载，提升用户体验并减少初始加载时间。合理使用异步组件可以显著改善大型应用的性能表现。</p>`,26)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
