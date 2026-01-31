import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"网站渲染优化","description":"","frontmatter":{},"headers":[{"level":2,"title":"渲染基础概念","slug":"rendering-basics","link":"#rendering-basics","children":[]},{"level":2,"title":"关键渲染路径优化","slug":"critical-rendering-path","link":"#critical-rendering-path","children":[]},{"level":2,"title":"服务器端渲染优化","slug":"server-side-rendering","link":"#server-side-rendering","children":[]},{"level":2,"title":"客户端渲染优化","slug":"client-side-rendering","link":"#client-side-rendering","children":[]},{"level":2,"title":"静态站点生成优化","slug":"static-site-generation","link":"#static-site-generation","children":[]},{"level":2,"title":"图片与媒体优化","slug":"image-and-media-optimization","link":"#image-and-media-optimization","children":[]},{"level":2,"title":"性能监控与调试","slug":"performance-monitoring","link":"#performance-monitoring","children":[]},{"level":2,"title":"资源加载优化","slug":"resource-loading-optimization","link":"#resource-loading-optimization","children":[]}],"relativePath":"engineering/seo/renderer.md","filePath":"engineering/seo/renderer.md"}'),o={name:"engineering/seo/renderer.md"};function e(t,s,c,r,E,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/seo/renderer.md for this page in Markdown format</div><h1 id="网站渲染优化" tabindex="-1">网站渲染优化 <a class="header-anchor" href="#网站渲染优化" aria-label="Permalink to &quot;网站渲染优化&quot;">​</a></h1><h2 id="rendering-basics" tabindex="-1">渲染基础概念 <a class="header-anchor" href="#rendering-basics" aria-label="Permalink to &quot;渲染基础概念 {#rendering-basics}&quot;">​</a></h2><p>网站渲染优化关注如何提升页面在浏览器中的绘制速度和交互响应性。现代 web 渲染涉及关键渲染路径优化，包括 HTML 解析、CSSOM 构建、布局、绘制和合成等阶段。优化目标是通过减少阻塞资源和最小化主线程工作量，实现快速的首屏渲染和流畅的用户交互。</p><p>特点：渲染优化需要平衡“加载性能”与“运行时性能”。它关注真实用户指标 (Core Web Vitals) 而非单纯的技术指标。优化策略需针对不同渲染模式 (CSR、SSR、SSG) 量身定制。</p><p>示意图： HTML 下载 -&gt; DOM 构建 + CSSOM 构建 -&gt; 渲染树 -&gt; 布局 -&gt; 绘制 -&gt; 合成 ↓ JavaScript 执行可能阻塞解析 ↓ CSS 阻塞渲染，JS 可能阻塞 DOM 构建</p><h2 id="critical-rendering-path" tabindex="-1">关键渲染路径优化 <a class="header-anchor" href="#critical-rendering-path" aria-label="Permalink to &quot;关键渲染路径优化 {#critical-rendering-path}&quot;">​</a></h2><p>关键渲染路径 (CRP) 是浏览器将 HTML、CSS 和 JavaScript 转换为像素的步骤序列。优化核心在于优先加载可视区域内容，延迟非关键资源。通过最小化关键资源数量、减少关键字节数和缩短关键路径长度来加速首屏渲染。</p><p>特点：CRP 优化强调资源加载优先级管理。关键 CSS 应内联，非关键 CSS 异步加载。JavaScript 使用 defer 或 async 避免解析阻塞。</p><p>示意图： 关键路径：HTML -&gt; 关键 CSS -&gt; 首屏内容渲染 非关键路径：非关键 CSS、JS、图片 -&gt; 延迟加载 优化后路径变短：内联关键 CSS + defer JS -&gt; 更快首屏</p><h2 id="server-side-rendering" tabindex="-1">服务器端渲染优化 <a class="header-anchor" href="#server-side-rendering" aria-label="Permalink to &quot;服务器端渲染优化 {#server-side-rendering}&quot;">​</a></h2><p>SSR 在服务器生成完整 HTML，减少客户端渲染工作量。优化重点包括组件级缓存、流式响应和预取数据。Next.js、Nuxt.js 等框架内置 SSR 优化，但需合理配置缓存策略和负载均衡。</p><p>特点：SSR 改善首屏加载和 SEO，但增加服务器压力。优化需要在 TTFB (首字节时间) 和缓存效率间平衡。静态部分预渲染，动态部分按需渲染。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Next.js SSR优化示例</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getServerSideProps } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;next&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> getServerSideProps</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 数据预取 - 减少客户端请求</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com/data&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> products</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 设置缓存头 - 减少服务器压力</span></span>
<span class="line"><span style="color:#E1E4E8;">  context.res.</span><span style="color:#B392F0;">setHeader</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;Cache-Control&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;public, s-maxage=10, stale-while-revalidate=59&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    props: { products },</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 流式渲染组件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Suspense } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> Page</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">products</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Suspense</span><span style="color:#B392F0;"> fallback</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Loading...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">ProductList</span><span style="color:#B392F0;"> products</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{products} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">Suspense</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="client-side-rendering" tabindex="-1">客户端渲染优化 <a class="header-anchor" href="#client-side-rendering" aria-label="Permalink to &quot;客户端渲染优化 {#client-side-rendering}&quot;">​</a></h2><p>CSR 优化关注减少 JavaScript 包体积、优化运行时性能和实现渐进式渲染。代码分割按需加载组件，虚拟滚动优化长列表，Web Worker 处理复杂计算避免主线程阻塞。</p><p>特点：CSR 优化核心是“按需加载”和“计算卸载”。监控运行时性能，识别并优化缓慢组件。使用生产模式构建和 Tree Shaking 减少包体积。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// React.lazy 代码分割</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { lazy, Suspense } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> HeavyComponent</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> lazy</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./HeavyComponent&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Suspense</span><span style="color:#B392F0;"> fallback</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Loading...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">HeavyComponent</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">Suspense</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 虚拟滚动优化 - 使用react-window</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { FixedSizeList </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> List } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react-window&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> VirtualizedList</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">items</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">List</span></span>
<span class="line"><span style="color:#B392F0;">    height</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">    itemCount</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{items.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">    itemSize</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">    itemData</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{items}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {({ </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">style</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> style</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{style}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {data[index].name}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#79B8FF;">List</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> VirtualizedList;</span></span></code></pre></div><h2 id="static-site-generation" tabindex="-1">静态站点生成优化 <a class="header-anchor" href="#static-site-generation" aria-label="Permalink to &quot;静态站点生成优化 {#static-site-generation}&quot;">​</a></h2><p>SSG 在构建时生成静态 HTML，提供最佳加载性能。优化策略包括增量静态再生、按需重新验证和智能缓存。Next.js、Gatsby 等框架支持混合渲染模式，结合 SSG 速度和动态内容灵活性。</p><p>特点：SSG 优化重点是构建时间优化和 CDN 分发。大型站点采用增量构建，仅更新变更内容。预生成关键页面，非关键页面按需生成。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Next.js SSG with ISR (增量静态再生)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getStaticProps } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;next&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> getStaticProps</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com/posts&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> posts</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    props: { posts },</span></span>
<span class="line"><span style="color:#6A737D;">    // 每60秒重新生成页面</span></span>
<span class="line"><span style="color:#E1E4E8;">    revalidate: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Gatsby 页面生成优化</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { graphql } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;gatsby&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> query</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> graphql</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">  query {</span></span>
<span class="line"><span style="color:#9ECBFF;">    allMarkdownRemark(limit: 1000) {</span></span>
<span class="line"><span style="color:#9ECBFF;">      nodes {</span></span>
<span class="line"><span style="color:#9ECBFF;">        fields {</span></span>
<span class="line"><span style="color:#9ECBFF;">          slug</span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"><span style="color:#9ECBFF;">        frontmatter {</span></span>
<span class="line"><span style="color:#9ECBFF;">          title</span></span>
<span class="line"><span style="color:#9ECBFF;">          date</span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"><span style="color:#9ECBFF;">      }</span></span>
<span class="line"><span style="color:#9ECBFF;">    }</span></span>
<span class="line"><span style="color:#9ECBFF;">  }</span></span>
<span class="line"><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> config</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 动态导入重型组件，减少主包体积</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> HeavyComponent</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../components/Heavy&#39;</span><span style="color:#E1E4E8;">)).default;</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    component: HeavyComponent,</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="image-and-media-optimization" tabindex="-1">图片与媒体优化 <a class="header-anchor" href="#image-and-media-optimization" aria-label="Permalink to &quot;图片与媒体优化 {#image-and-media-optimization}&quot;">​</a></h2><p>现代图片优化包括响应式图片、下一代格式 (WebP/AVIF) 和懒加载。使用 sharp 进行图片处理，Intersection Observer 实现视口触发加载，picture 元素提供格式回退。</p><p>特点：图片优化平衡视觉质量和加载速度。根据设备像素比和视口尺寸提供合适尺寸。视频使用预加载提示和懒加载。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 图片懒加载与响应式处理</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useEffect, useRef, useState } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> LazyImage</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">alt</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">width</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">height</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">isLoaded</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setIsLoaded</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">isInView</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setIsInView</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> imgRef</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useRef</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  useEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> observer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> IntersectionObserver</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">entry</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (entry.isIntersecting) {</span></span>
<span class="line"><span style="color:#B392F0;">        setIsInView</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        observer.</span><span style="color:#B392F0;">disconnect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(imgRef.current);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> observer.</span><span style="color:#B392F0;">disconnect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, []);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> ref</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{imgRef}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {isInView </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">img</span></span>
<span class="line"><span style="color:#B392F0;">          src</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{src}</span></span>
<span class="line"><span style="color:#B392F0;">          alt</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{alt}</span></span>
<span class="line"><span style="color:#B392F0;">          width</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{width}</span></span>
<span class="line"><span style="color:#B392F0;">          height</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{height}</span></span>
<span class="line"><span style="color:#B392F0;">          loading</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;lazy&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          onLoad</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setIsLoaded</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)}</span></span>
<span class="line"><span style="color:#B392F0;">          style</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{{ opacity: isLoaded </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> 0.3</span><span style="color:#E1E4E8;"> }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      )}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用sharp进行图片优化 (Node.js环境)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> sharp </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;sharp&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> optimizeImage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">inputPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">outputPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  await</span><span style="color:#B392F0;"> sharp</span><span style="color:#E1E4E8;">(inputPath)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">resize</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">, { fit: </span><span style="color:#9ECBFF;">&#39;inside&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">webp</span><span style="color:#E1E4E8;">({ quality: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">toFile</span><span style="color:#E1E4E8;">(outputPath);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成多种尺寸用于srcset</span></span>
<span class="line"><span style="color:#F97583;">  await</span><span style="color:#B392F0;"> sharp</span><span style="color:#E1E4E8;">(inputPath)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">resize</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">webp</span><span style="color:#E1E4E8;">({ quality: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">toFile</span><span style="color:#E1E4E8;">(outputPath.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.webp&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;-600.webp&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="performance-monitoring" tabindex="-1">性能监控与调试 <a class="header-anchor" href="#performance-monitoring" aria-label="Permalink to &quot;性能监控与调试 {#performance-monitoring}&quot;">​</a></h2><p>使用 Performance API 测量真实用户指标，Web Vitals 库标准化核心指标收集。Chrome DevTools Performance 面板分析运行时性能，Lighthouse 进行综合质量评估。</p><p>特点：性能监控关注真实场景而非实验室环境。长期趋势分析识别性能回归。用户体验分段分析 (慢速设备、弱网条件)。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Web Vitals 核心指标监控</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getCLS, getFID, getLCP, getFCP, getTTFB } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;web-vitals&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> sendToAnalytics</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">metric</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> body</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: metric.name,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: metric.value,</span></span>
<span class="line"><span style="color:#E1E4E8;">    rating: metric.rating,</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 发送到分析服务</span></span>
<span class="line"><span style="color:#B392F0;">  fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/analytics&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    body: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(body),</span></span>
<span class="line"><span style="color:#E1E4E8;">    headers: { </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">getCLS</span><span style="color:#E1E4E8;">(sendToAnalytics);</span></span>
<span class="line"><span style="color:#B392F0;">getFID</span><span style="color:#E1E4E8;">(sendToAnalytics);</span></span>
<span class="line"><span style="color:#B392F0;">getLCP</span><span style="color:#E1E4E8;">(sendToAnalytics);</span></span>
<span class="line"><span style="color:#B392F0;">getFCP</span><span style="color:#E1E4E8;">(sendToAnalytics);</span></span>
<span class="line"><span style="color:#B392F0;">getTTFB</span><span style="color:#E1E4E8;">(sendToAnalytics);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自定义性能测量</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> measurePerf</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">metricName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> callback.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 记录到性能时间线</span></span>
<span class="line"><span style="color:#E1E4E8;">    performance.</span><span style="color:#B392F0;">measure</span><span style="color:#E1E4E8;">(metricName, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      start: startTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">      end: performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">metricName</span><span style="color:#9ECBFF;">} took \${</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> optimizedFunction</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> measurePerf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;heavyCalculation&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 复杂计算</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> heavyCalculation</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="resource-loading-optimization" tabindex="-1">资源加载优化 <a class="header-anchor" href="#resource-loading-optimization" aria-label="Permalink to &quot;资源加载优化 {#resource-loading-optimization}&quot;">​</a></h2><p>资源加载优化通过预加载、预连接和懒加载策略优化资源获取时机。使用 Resource Hints (preload、prefetch、preconnect) 指导浏览器优先级，Service Worker 实现智能缓存。</p><p>特点：资源优化基于用户行为预测。关键资源预加载，可能资源预连接，非关键资源懒加载。缓存策略区分静态资源和 API 响应。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 资源提示管理</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> useResourceHints</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">  useEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 预连接关键第三方域名</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> preconnectLinks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;https://fonts.googleapis.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;https://cdn.example.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    preconnectLinks.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> link</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.rel </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;preconnect&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.href </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> url;</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.head.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(link);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 预加载关键图片</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> criticalImages</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;/images/hero-image.webp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;/images/logo.svg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    criticalImages.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">src</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> link</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.rel </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;preload&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.href </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> src;</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.as </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;image&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.head.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(link);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Service Worker 缓存策略</span></span>
<span class="line"><span style="color:#6A737D;">// sw.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> CACHE_NAME</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;v1&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> STATIC_CACHE</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;static-v1&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> staticAssets</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/styles/main.css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/scripts/app.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">self.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;install&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  event.</span><span style="color:#B392F0;">waitUntil</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">STATIC_CACHE</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">cache</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">addAll</span><span style="color:#E1E4E8;">(staticAssets))</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">self.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fetch&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  event.</span><span style="color:#B392F0;">respondWith</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    caches.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(event.request)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 缓存优先策略 for 静态资源</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (response) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> response;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(event.request).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">          // 动态资源网络优先，然后缓存</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (event.request.url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> responseClone</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CACHE_NAME</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">              .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">cache</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(event.request, responseClone));</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> response;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div>`,34)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
