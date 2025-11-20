import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"nuxtjs 中间件","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是中间件","slug":"什么是中间件","link":"#什么是中间件","children":[]},{"level":2,"title":"中间件类型","slug":"中间件类型","link":"#中间件类型","children":[]},{"level":2,"title":"工作原理","slug":"工作原理","link":"#工作原理","children":[]},{"level":2,"title":"定义和使用","slug":"定义和使用","link":"#定义和使用","children":[{"level":3,"title":"创建命名中间件","slug":"创建命名中间件","link":"#创建命名中间件","children":[]},{"level":3,"title":"页面中使用中间件","slug":"页面中使用中间件","link":"#页面中使用中间件","children":[]},{"level":3,"title":"匿名中间件","slug":"匿名中间件","link":"#匿名中间件","children":[]}]},{"level":2,"title":"中间件效果","slug":"中间件效果","link":"#中间件效果","children":[]}],"relativePath":"framework/nuxtjs/middleware.md","filePath":"framework/nuxtjs/middleware.md"}'),e={name:"framework/nuxtjs/middleware.md"};function o(t,s,c,i,r,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/nuxtjs/middleware.md for this page in Markdown format</div><h1 id="nuxtjs-中间件" tabindex="-1">nuxtjs 中间件 <a class="header-anchor" href="#nuxtjs-中间件" aria-label="Permalink to &quot;nuxtjs 中间件&quot;">​</a></h1><p>Nuxt.js 中间件是在页面渲染前执行的函数，用于处理通用逻辑，如认证检查、数据预加载或权限验证。它允许您在路由导航前后注入自定义代码，确保用户请求按预期处理。</p><h2 id="什么是中间件" tabindex="-1">什么是中间件 <a class="header-anchor" href="#什么是中间件" aria-label="Permalink to &quot;什么是中间件&quot;">​</a></h2><p>中间件是 Nuxt 应用中的一层处理程序，位于路由和页面组件之间。它可以访问上下文对象 (如 <code>route</code>、<code>redirect</code> 等)，让您控制导航流程。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端请求</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>路由匹配</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>中间件执行（可多个）</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>页面组件渲染</span></span></code></pre></div><p>如果中间件中调用 <code>redirect</code>，流程会中断并跳转：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>中间件执行</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    |--- 条件满足 ---&gt; 重定向到其他页面</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>继续渲染原页面</span></span></code></pre></div><h2 id="中间件类型" tabindex="-1">中间件类型 <a class="header-anchor" href="#中间件类型" aria-label="Permalink to &quot;中间件类型&quot;">​</a></h2><p>Nuxt.js 支持三种中间件：</p><ul><li><strong>匿名中间件</strong>：直接在页面中定义，仅对该页面生效。</li><li><strong>命名中间件</strong>：在 <code>middleware/</code> 目录创建文件，通过名称在页面中引用。</li><li><strong>全局中间件</strong>：以 <code>.global</code> 后缀命名的中间件，自动在每个页面运行。</li></ul><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>middleware/</span></span>
<span class="line"><span>  |-- auth.global.js    (全局中间件，所有页面自动运行)</span></span>
<span class="line"><span>  |-- log.js           (命名中间件，需手动引用)</span></span></code></pre></div><p>页面使用示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>页面组件</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>  |-- 匿名中间件 (内联定义)</span></span>
<span class="line"><span>  |-- 命名中间件 (通过 middleware 属性引用)</span></span>
<span class="line"><span>  |-- 全局中间件 (自动应用)</span></span></code></pre></div><h2 id="工作原理" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理" aria-label="Permalink to &quot;工作原理&quot;">​</a></h2><p>中间件按顺序执行，每个中间件可以异步操作。执行顺序为：全局中间件 → 命名中间件 → 匿名中间件。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>请求进入</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>全局中间件执行</span></span>
<span class="line"><span>    |-- 例如：身份验证</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>命名中间件执行（按页面定义顺序）</span></span>
<span class="line"><span>    |-- 例如：权限检查</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>匿名中间件执行（页面内定义）</span></span>
<span class="line"><span>    |-- 例如：数据加载</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>页面渲染</span></span></code></pre></div><p>如果任何中间件调用 <code>redirect</code> 或抛出错误，流程立即终止：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>中间件执行</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    |-- 检测未登录 --[redirect]--&gt; 登录页面</span></span>
<span class="line"><span>    |-- 发生错误 --[error]--&gt; 错误页面</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>正常继续</span></span></code></pre></div><h2 id="定义和使用" tabindex="-1">定义和使用 <a class="header-anchor" href="#定义和使用" aria-label="Permalink to &quot;定义和使用&quot;">​</a></h2><h3 id="创建命名中间件" tabindex="-1">创建命名中间件 <a class="header-anchor" href="#创建命名中间件" aria-label="Permalink to &quot;创建命名中间件&quot;">​</a></h3><p>在 <code>middleware/</code> 目录下创建文件，例如 <code>auth.js</code>：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">route</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">redirect</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 纯文本示意图：检查路由</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果访问 /admin 且未登录，重定向到 /login</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (route.path </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;/admin&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">isAuthenticated) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> redirect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/login&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="页面中使用中间件" tabindex="-1">页面中使用中间件 <a class="header-anchor" href="#页面中使用中间件" aria-label="Permalink to &quot;页面中使用中间件&quot;">​</a></h3><p>在页面组件中通过 <code>middleware</code> 属性引用：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  middleware: [</span><span style="color:#9ECBFF;">&#39;auth&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;log&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 执行顺序：auth → log</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="匿名中间件" tabindex="-1">匿名中间件 <a class="header-anchor" href="#匿名中间件" aria-label="Permalink to &quot;匿名中间件&quot;">​</a></h3><p>直接在页面中定义：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  middleware</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">store</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">redirect</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 示意图：条件检查</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果 store 中无数据，重定向</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">store.state.user) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#B392F0;"> redirect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="中间件效果" tabindex="-1">中间件效果 <a class="header-anchor" href="#中间件效果" aria-label="Permalink to &quot;中间件效果&quot;">​</a></h2><p>中间件常用于：</p><ul><li><strong>认证保护</strong>：限制未登录用户访问特定页面。</li><li><strong>日志记录</strong>：跟踪页面访问。</li><li><strong>数据预取</strong>：在页面渲染前加载必要数据。</li></ul><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>用户请求 /dashboard</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>auth 中间件运行</span></span>
<span class="line"><span>    |-- 检查 token</span></span>
<span class="line"><span>    |-- 无效？--[redirect]--&gt; /login</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>dashboard 页面渲染</span></span></code></pre></div><p>通过中间件，您可以构建安全、高效的 Nuxt 应用，确保逻辑在路由级别统一处理。</p>`,38)])])}const E=a(e,[["render",o]]);export{h as __pageData,E as default};
