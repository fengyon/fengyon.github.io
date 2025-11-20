import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"React Concurrent","description":"","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"核心并发 API","slug":"核心并发-api","link":"#核心并发-api","children":[{"level":3,"title":"use Hook","slug":"use-hook","link":"#use-hook","children":[]},{"level":3,"title":"Suspense","slug":"suspense","link":"#suspense","children":[]},{"level":3,"title":"useDeferredValue","slug":"usedeferredvalue","link":"#usedeferredvalue","children":[]},{"level":3,"title":"startTransition","slug":"starttransition","link":"#starttransition","children":[]},{"level":3,"title":"useTransition","slug":"usetransition","link":"#usetransition","children":[]}]}],"relativePath":"framework/react/concurrent.md","filePath":"framework/react/concurrent.md"}'),o={name:"framework/react/concurrent.md"};function e(t,s,c,r,E,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/react/concurrent.md for this page in Markdown format</div><h1 id="react-concurrent" tabindex="-1">React Concurrent <a class="header-anchor" href="#react-concurrent" aria-label="Permalink to &quot;React Concurrent&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>React 19 引入了强大的 Concurrent (并发) 特性，让应用能够保持响应性，同时提供更流畅的用户体验。这些特性允许 React 在渲染过程中中断和恢复工作，优先处理更紧急的更新。</p><h2 id="核心并发-api" tabindex="-1">核心并发 API <a class="header-anchor" href="#核心并发-api" aria-label="Permalink to &quot;核心并发 API&quot;">​</a></h2><h3 id="use-hook" tabindex="-1">use Hook <a class="header-anchor" href="#use-hook" aria-label="Permalink to &quot;use Hook&quot;">​</a></h3><p><code>use</code> 是一个新的 React Hook，用于读取类似 Promise 或 context 的资源值。</p><h4 id="api-说明" tabindex="-1">API 说明 <a class="header-anchor" href="#api-说明" aria-label="Permalink to &quot;API 说明&quot;">​</a></h4><ul><li><strong>参数</strong>：接受 Promise 或 React context</li><li><strong>返回值</strong>：直接返回解析后的值 (如果是 Promise)</li><li><strong>特性</strong>：与 Suspense 天然集成，在 Promise pending 时会触发最近的 Suspense 边界</li></ul><h4 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h4><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { use, Suspense } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 异步数据获取函数</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> fetchUserData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`/api/users/\${</span><span style="color:#E1E4E8;">userId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> UserProfile</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#6A737D;">  // use Hook 直接读取 Promise</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> userData</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> use</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fetchUserData</span><span style="color:#E1E4E8;">(userId))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{userData.name}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;{userData.email}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">Suspense</span><span style="color:#B392F0;"> fallback</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Loading user...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">UserProfile</span><span style="color:#B392F0;"> userId</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;123&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#79B8FF;">Suspense</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="suspense" tabindex="-1">Suspense <a class="header-anchor" href="#suspense" aria-label="Permalink to &quot;Suspense&quot;">​</a></h3><p>Suspense 允许组件在等待异步操作时“暂停”渲染，并显示降级 UI。</p><h4 id="api-说明-1" tabindex="-1">API 说明 <a class="header-anchor" href="#api-说明-1" aria-label="Permalink to &quot;API 说明&quot;">​</a></h4><ul><li><strong>fallback</strong>：在子组件加载期间显示的 UI</li><li><strong>children</strong>：需要异步加载的组件</li><li><strong>用途</strong>：数据获取、代码分割、图片加载等异步场景</li></ul><h4 id="示例代码-1" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码-1" aria-label="Permalink to &quot;示例代码&quot;">​</a></h4><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Suspense, useState } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模拟异步组件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> AsyncComponent</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> use</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fetchData</span><span style="color:#E1E4E8;">()) </span><span style="color:#6A737D;">// 假设 fetchData 返回 Promise</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Loaded: {data}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 图片预加载组件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> LazyImage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">alt</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> imagePromise</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> img</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Image</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      img.</span><span style="color:#B392F0;">onload</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> resolve</span><span style="color:#E1E4E8;">(src)</span></span>
<span class="line"><span style="color:#E1E4E8;">      img.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> src</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">img</span><span style="color:#B392F0;"> src</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{imagePromise} </span><span style="color:#B392F0;">alt</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{alt} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Gallery</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">currentImage</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setCurrentImage</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setCurrentImage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;image1.jpg&#39;</span><span style="color:#E1E4E8;">)}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Load Image 1</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      {currentImage </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">Suspense</span><span style="color:#B392F0;"> fallback</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Loading image...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#79B8FF;">LazyImage</span><span style="color:#B392F0;"> src</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{currentImage} </span><span style="color:#B392F0;">alt</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Gallery item&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#79B8FF;">Suspense</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      )}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Suspense</span><span style="color:#B392F0;"> fallback</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Loading component...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">AsyncComponent</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">Suspense</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="usedeferredvalue" tabindex="-1">useDeferredValue <a class="header-anchor" href="#usedeferredvalue" aria-label="Permalink to &quot;useDeferredValue&quot;">​</a></h3><p><code>useDeferredValue</code> 返回一个延迟更新的值，用于延迟更新不太紧急的部分。</p><h4 id="api-说明-2" tabindex="-1">API 说明 <a class="header-anchor" href="#api-说明-2" aria-label="Permalink to &quot;API 说明&quot;">​</a></h4><ul><li><strong>参数</strong>：需要延迟的值</li><li><strong>返回值</strong>：延迟版本的值</li><li><strong>使用场景</strong>：搜索输入、复杂图表更新等需要性能优化的场景</li></ul><h4 id="示例代码-2" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码-2" aria-label="Permalink to &quot;示例代码&quot;">​</a></h4><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useState, useDeferredValue, useMemo } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> SearchComponent</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">query</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setQuery</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">  // 延迟搜索查询，让输入更流畅</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> deferredQuery</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useDeferredValue</span><span style="color:#E1E4E8;">(query)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 模拟昂贵的搜索计算</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> searchResults</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useMemo</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> expensiveSearch</span><span style="color:#E1E4E8;">(deferredQuery)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [deferredQuery])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">        value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{query}</span></span>
<span class="line"><span style="color:#B392F0;">        onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setQuery</span><span style="color:#E1E4E8;">(e.target.value)}</span></span>
<span class="line"><span style="color:#B392F0;">        placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Search...&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#6A737D;">/* 搜索结果会延迟更新，不阻塞输入 */</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">SearchResults</span><span style="color:#B392F0;"> results</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{searchResults} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> expensiveSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">query</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 模拟昂贵的搜索操作</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> items.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    item.name.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(query.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">()),</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="starttransition" tabindex="-1">startTransition <a class="header-anchor" href="#starttransition" aria-label="Permalink to &quot;startTransition&quot;">​</a></h3><p><code>startTransition</code> 用于将状态更新标记为非紧急过渡更新。</p><h4 id="api-说明-3" tabindex="-1">API 说明 <a class="header-anchor" href="#api-说明-3" aria-label="Permalink to &quot;API 说明&quot;">​</a></h4><ul><li><strong>参数</strong>：包含状态更新函数的回调</li><li><strong>特性</strong>：标记的更新可以被更紧急的更新中断</li><li><strong>使用场景</strong>：页面导航、标签切换等不需要立即响应的更新</li></ul><h4 id="示例代码-3" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码-3" aria-label="Permalink to &quot;示例代码&quot;">​</a></h4><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useState, startTransition } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Navigation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">tab</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setTab</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">isPending</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">startTransition</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useTransition</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleTabChange</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">newTab</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 使用 startTransition 标记非紧急更新</span></span>
<span class="line"><span style="color:#B392F0;">    startTransition</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setTab</span><span style="color:#E1E4E8;">(newTab)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">          onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> handleTabChange</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">)}</span></span>
<span class="line"><span style="color:#B392F0;">          disabled</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{isPending}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          Home {isPending </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#9ECBFF;"> &#39;(loading...)&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">          onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> handleTabChange</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;profile&#39;</span><span style="color:#E1E4E8;">)}</span></span>
<span class="line"><span style="color:#B392F0;">          disabled</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{isPending}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          Profile {isPending </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#9ECBFF;"> &#39;(loading...)&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {tab </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;home&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">HomeTab</span><span style="color:#E1E4E8;"> /&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">        {tab </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;profile&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">ProfileTab</span><span style="color:#E1E4E8;"> /&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 或者使用独立的 startTransition</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> handleUrgentAction</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 紧急更新立即执行</span></span>
<span class="line"><span style="color:#B392F0;">  setUrgentValue</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;new value&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 非紧急更新使用 startTransition</span></span>
<span class="line"><span style="color:#B392F0;">  startTransition</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    setNonUrgentValue</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;new value&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="usetransition" tabindex="-1">useTransition <a class="header-anchor" href="#usetransition" aria-label="Permalink to &quot;useTransition&quot;">​</a></h3><p><code>useTransition</code> 返回一个过渡状态和启动函数，用于跟踪过渡的进行状态。</p><h4 id="api-说明-4" tabindex="-1">API 说明 <a class="header-anchor" href="#api-说明-4" aria-label="Permalink to &quot;API 说明&quot;">​</a></h4><ul><li><strong>返回值</strong>：<code>[isPending, startTransition]</code><ul><li><code>isPending</code>：布尔值，表示过渡是否在进行中</li><li><code>startTransition</code>：启动过渡的函数</li></ul></li><li><strong>优势</strong>：提供过渡状态，可以据此显示加载指示器</li></ul><h4 id="示例代码-4" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码-4" aria-label="Permalink to &quot;示例代码&quot;">​</a></h4><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useState, useTransition } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> ProductList</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">filter</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setFilter</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">isPending</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">startTransition</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useTransition</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleFilterChange</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">newFilter</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 使用过渡更新，保持界面响应</span></span>
<span class="line"><span style="color:#B392F0;">    startTransition</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setFilter</span><span style="color:#E1E4E8;">(newFilter)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#6A737D;">/* 搜索输入 - 立即响应 */</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">SearchInput</span></span>
<span class="line"><span style="color:#B392F0;">        onFilterChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleFilterChange}</span></span>
<span class="line"><span style="color:#B392F0;">        disabled</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{isPending}</span></span>
<span class="line"><span style="color:#E1E4E8;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#6A737D;">/* 显示加载状态 */</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      {isPending </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Updating results...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#6A737D;">/* 产品列表 - 延迟更新 */</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">ProductItems</span><span style="color:#B392F0;"> filter</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{filter} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> SearchInput</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">onFilterChange</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">disabled</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">inputValue</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setInputValue</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleChange</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> e.target.value</span></span>
<span class="line"><span style="color:#B392F0;">    setInputValue</span><span style="color:#E1E4E8;">(value) </span><span style="color:#6A737D;">// 立即更新输入框</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 过滤操作使用过渡</span></span>
<span class="line"><span style="color:#B392F0;">    onFilterChange</span><span style="color:#E1E4E8;">(value)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">      type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{inputValue}</span></span>
<span class="line"><span style="color:#B392F0;">      onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleChange}</span></span>
<span class="line"><span style="color:#B392F0;">      disabled</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{disabled}</span></span>
<span class="line"><span style="color:#B392F0;">      placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Search products...&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,35)])])}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
