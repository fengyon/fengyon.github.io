import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const d=JSON.parse('{"title":"nextjs 渲染模式","description":"","frontmatter":{},"headers":[{"level":2,"title":"渲染模式概览","slug":"渲染模式概览","link":"#渲染模式概览","children":[]},{"level":2,"title":"静态生成","slug":"静态生成","link":"#静态生成","children":[{"level":3,"title":"基本静态生成","slug":"基本静态生成","link":"#基本静态生成","children":[]},{"level":3,"title":"带数据的静态生成","slug":"带数据的静态生成","link":"#带数据的静态生成","children":[]}]},{"level":2,"title":"服务器端渲染","slug":"服务器端渲染","link":"#服务器端渲染","children":[{"level":3,"title":"基础 SSR","slug":"基础-ssr","link":"#基础-ssr","children":[]}]},{"level":2,"title":"客户端渲染","slug":"客户端渲染","link":"#客户端渲染","children":[{"level":3,"title":"CSR 实现","slug":"csr-实现","link":"#csr-实现","children":[]}]},{"level":2,"title":"增量静态再生","slug":"增量静态再生","link":"#增量静态再生","children":[{"level":3,"title":"ISR 配置","slug":"isr-配置","link":"#isr-配置","children":[]}]},{"level":2,"title":"流式渲染","slug":"流式渲染","link":"#流式渲染","children":[{"level":3,"title":"流式渲染实现","slug":"流式渲染实现","link":"#流式渲染实现","children":[]}]},{"level":2,"title":"混合渲染策略","slug":"混合渲染策略","link":"#混合渲染策略","children":[{"level":3,"title":"按路由选择渲染模式","slug":"按路由选择渲染模式","link":"#按路由选择渲染模式","children":[]}]},{"level":2,"title":"渲染模式选择指南","slug":"渲染模式选择指南","link":"#渲染模式选择指南","children":[{"level":3,"title":"性能对比","slug":"性能对比","link":"#性能对比","children":[]}]}],"relativePath":"framework/nextjs/rendering.md","filePath":"framework/nextjs/rendering.md"}'),e={name:"framework/nextjs/rendering.md"};function o(t,s,c,r,i,E){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/nextjs/rendering.md for this page in Markdown format</div><h1 id="nextjs-渲染模式" tabindex="-1">nextjs 渲染模式 <a class="header-anchor" href="#nextjs-渲染模式" aria-label="Permalink to &quot;nextjs 渲染模式&quot;">​</a></h1><p>Next.js 提供了多种渲染模式，让开发者可以根据不同场景选择最优的页面生成方式，平衡性能、新鲜度和用户体验。</p><h2 id="渲染模式概览" tabindex="-1">渲染模式概览 <a class="header-anchor" href="#渲染模式概览" aria-label="Permalink to &quot;渲染模式概览&quot;">​</a></h2><p>Next.js 主要支持四种渲染模式，分别适用于不同的使用场景：</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>渲染模式谱系：</span></span>
<span class="line"><span>客户端渲染 (CSR) ----- 混合渲染 ----- 服务端渲染 (SSR)</span></span>
<span class="line"><span>        │              │              │</span></span>
<span class="line"><span>        │              │              │</span></span>
<span class="line"><span>  静态生成 (SSG)   增量静态再生 (ISR)  流式渲染</span></span></code></pre></div><h2 id="静态生成" tabindex="-1">静态生成 <a class="header-anchor" href="#静态生成" aria-label="Permalink to &quot;静态生成&quot;">​</a></h2><p>静态生成在构建时生成 HTML 页面，这些页面可以被 CDN 缓存，提供最佳性能。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>构建时：</span></span>
<span class="line"><span>[数据获取] → [生成HTML] → [存储静态文件]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请求时：</span></span>
<span class="line"><span>用户请求 → CDN返回静态HTML → 极快加载</span></span></code></pre></div><h3 id="基本静态生成" tabindex="-1">基本静态生成 <a class="header-anchor" href="#基本静态生成" aria-label="Permalink to &quot;基本静态生成&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 页面内容在构建时确定</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> Home</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;欢迎访问首页&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="带数据的静态生成" tabindex="-1">带数据的静态生成 <a class="header-anchor" href="#带数据的静态生成" aria-label="Permalink to &quot;带数据的静态生成&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 在构建时获取数据</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> getStaticProps</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetchData</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    props: { data },</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Blog</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{data.posts.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">post</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">article</span><span style="color:#B392F0;"> key</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{post.id}&gt;{post.title}&lt;/</span><span style="color:#85E89D;">article</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>适用场景：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>静态生成适合：</span></span>
<span class="line"><span>- 营销页面</span></span>
<span class="line"><span>- 博客文章</span></span>
<span class="line"><span>- 产品展示</span></span>
<span class="line"><span>- 文档网站</span></span></code></pre></div><h2 id="服务器端渲染" tabindex="-1">服务器端渲染 <a class="header-anchor" href="#服务器端渲染" aria-label="Permalink to &quot;服务器端渲染&quot;">​</a></h2><p>服务器端渲染在每次请求时生成 HTML，确保内容最新。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>请求时：</span></span>
<span class="line"><span>用户请求 → 服务器获取数据 → 生成HTML → 返回给用户</span></span>
<span class="line"><span>        │</span></span>
<span class="line"><span>        └── 每次都是新鲜内容</span></span></code></pre></div><h3 id="基础-ssr" tabindex="-1">基础 SSR <a class="header-anchor" href="#基础-ssr" aria-label="Permalink to &quot;基础 SSR&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 每次请求时获取数据</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> getServerSideProps</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetchFreshData</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    props: { data },</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Profile</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;用户资料: {data.userInfo}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>适用场景：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>SSR适合：</span></span>
<span class="line"><span>- 个性化页面</span></span>
<span class="line"><span>- 实时数据展示</span></span>
<span class="line"><span>- 需要认证的页面</span></span>
<span class="line"><span>- 频繁更新的内容</span></span></code></pre></div><h2 id="客户端渲染" tabindex="-1">客户端渲染 <a class="header-anchor" href="#客户端渲染" aria-label="Permalink to &quot;客户端渲染&quot;">​</a></h2><p>客户端渲染在浏览器中执行 JavaScript 来渲染内容，类似传统 React 应用。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始加载：</span></span>
<span class="line"><span>服务器返回空HTML + JS包</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>浏览器执行JS → 获取数据 → 渲染内容</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>用户看到完整页面</span></span></code></pre></div><h3 id="csr-实现" tabindex="-1">CSR 实现 <a class="header-anchor" href="#csr-实现" aria-label="Permalink to &quot;CSR 实现&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#9ECBFF;">&#39;use client&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useState, useEffect } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Dashboard</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setData</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  useEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/data&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(setData);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, []);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">data) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;加载中...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{</span><span style="color:#6A737D;">/* 渲染数据 */</span><span style="color:#E1E4E8;">}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>适用场景：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>CSR适合：</span></span>
<span class="line"><span>- 高度交互的仪表板</span></span>
<span class="line"><span>- 不需要SEO的页面</span></span>
<span class="line"><span>- 实时更新的应用</span></span></code></pre></div><h2 id="增量静态再生" tabindex="-1">增量静态再生 <a class="header-anchor" href="#增量静态再生" aria-label="Permalink to &quot;增量静态再生&quot;">​</a></h2><p>ISR 允许在构建后更新静态页面，无需重新构建整个站点。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>首次访问：</span></span>
<span class="line"><span>用户A请求 → CDN无缓存 → 服务器生成页面 → 返回 + 缓存</span></span>
<span class="line"><span>        │</span></span>
<span class="line"><span>后续访问：</span></span>
<span class="line"><span>用户B请求 → CDN返回缓存 → 快速响应</span></span>
<span class="line"><span>        │</span></span>
<span class="line"><span>重新验证：</span></span>
<span class="line"><span>后台检查数据更新 → 必要时重新生成</span></span></code></pre></div><h3 id="isr-配置" tabindex="-1">ISR 配置 <a class="header-anchor" href="#isr-配置" aria-label="Permalink to &quot;ISR 配置&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> getStaticProps</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetchData</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    props: { data },</span></span>
<span class="line"><span style="color:#E1E4E8;">    revalidate: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 每60秒重新验证</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>适用场景：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>ISR适合：</span></span>
<span class="line"><span>- 电商产品页</span></span>
<span class="line"><span>- 新闻网站</span></span>
<span class="line"><span>- 频繁更新但不需要实时性的内容</span></span></code></pre></div><h2 id="流式渲染" tabindex="-1">流式渲染 <a class="header-anchor" href="#流式渲染" aria-label="Permalink to &quot;流式渲染&quot;">​</a></h2><p>流式渲染将页面分割为多个块，逐步发送到客户端，提升感知性能。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>传统渲染：</span></span>
<span class="line"><span>[等待所有数据] → [生成完整HTML] → [发送整个页面]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>流式渲染：</span></span>
<span class="line"><span>[部分数据就绪] → [发送第一个块] → 用户立即看到内容</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>[更多数据就绪] → [发送下一个块] → 逐步完善页面</span></span></code></pre></div><h3 id="流式渲染实现" tabindex="-1">流式渲染实现 <a class="header-anchor" href="#流式渲染实现" aria-label="Permalink to &quot;流式渲染实现&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Suspense } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> SlowComponent</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetchSlowData</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{data}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> Page</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;即时内容&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Suspense</span><span style="color:#B392F0;"> fallback</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;加载中...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">SlowComponent</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">Suspense</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="混合渲染策略" tabindex="-1">混合渲染策略 <a class="header-anchor" href="#混合渲染策略" aria-label="Permalink to &quot;混合渲染策略&quot;">​</a></h2><p>实际应用中，通常混合使用多种渲染模式。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>网站结构：</span></span>
<span class="line"><span>首页 (SSG) ----------- 产品页 (ISR)</span></span>
<span class="line"><span>  │                      │</span></span>
<span class="line"><span>  │                      │</span></span>
<span class="line"><span>博客 (SSG) ----------- 用户面板 (CSR)</span></span>
<span class="line"><span>  │                      │</span></span>
<span class="line"><span>  │                      │</span></span>
<span class="line"><span>新闻 (SSR) ----------- 实时数据 (SSR)</span></span></code></pre></div><h3 id="按路由选择渲染模式" tabindex="-1">按路由选择渲染模式 <a class="header-anchor" href="#按路由选择渲染模式" aria-label="Permalink to &quot;按路由选择渲染模式&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// app/ 目录结构示例：</span></span>
<span class="line"><span style="color:#E1E4E8;">app</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">├── page.js                 # 首页 </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> SSG</span></span>
<span class="line"><span style="color:#E1E4E8;">├── blog</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">│   ├── page.js            # 博客列表 </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> ISR</span></span>
<span class="line"><span style="color:#E1E4E8;">│   └── [slug]</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">│       └── page.js        # 博客文章 </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> SSG</span></span>
<span class="line"><span style="color:#E1E4E8;">├── news</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">│   └── page.js            # 新闻 </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> SSR</span></span>
<span class="line"><span style="color:#E1E4E8;">└── dashboard</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">    └── page.js            # 仪表板 </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> CSR</span></span></code></pre></div><h2 id="渲染模式选择指南" tabindex="-1">渲染模式选择指南 <a class="header-anchor" href="#渲染模式选择指南" aria-label="Permalink to &quot;渲染模式选择指南&quot;">​</a></h2><p>根据内容特性选择合适的渲染模式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>内容类型                 推荐模式</span></span>
<span class="line"><span>─────────────────────────────────────</span></span>
<span class="line"><span>几乎不变的内容            静态生成 (SSG)</span></span>
<span class="line"><span>定期更新的内容            增量静态再生 (ISR)</span></span>
<span class="line"><span>高度个性化的内容          服务器端渲染 (SSR)</span></span>
<span class="line"><span>需要SEO的动态内容         服务器端渲染 (SSR)</span></span>
<span class="line"><span>高度交互的应用界面        客户端渲染 (CSR)</span></span></code></pre></div><h3 id="性能对比" tabindex="-1">性能对比 <a class="header-anchor" href="#性能对比" aria-label="Permalink to &quot;性能对比&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>加载速度:    SSG &gt; ISR &gt; SSR &gt; CSR</span></span>
<span class="line"><span>内容新鲜度:  SSR &gt; ISR &gt; SSG &gt; CSR</span></span>
<span class="line"><span>开发复杂度:   CSR &gt; SSR &gt; ISR &gt; SSG</span></span>
<span class="line"><span>SEO友好度:   SSG = SSR &gt; ISR &gt; CSR</span></span></code></pre></div><p>Next.js 的多样化渲染模式让开发者能够为每个页面选择最合适的策略，在性能、用户体验和开发效率之间找到最佳平衡点。</p>`,59)])])}const u=a(e,[["render",o]]);export{d as __pageData,u as default};
