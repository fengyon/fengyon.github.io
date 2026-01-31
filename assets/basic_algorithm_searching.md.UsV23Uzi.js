import{_ as n,c as a,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"搜索算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是搜索算法","slug":"什么是搜索算法","link":"#什么是搜索算法","children":[]},{"level":2,"title":"搜索算法分类","slug":"搜索算法分类","link":"#搜索算法分类","children":[{"level":3,"title":"无序搜索","slug":"无序搜索","link":"#无序搜索","children":[]},{"level":3,"title":"有序搜索","slug":"有序搜索","link":"#有序搜索","children":[]}]},{"level":2,"title":"基本搜索算法","slug":"基本搜索算法","link":"#基本搜索算法","children":[{"level":3,"title":"线性搜索","slug":"线性搜索","link":"#线性搜索","children":[]},{"level":3,"title":"二分搜索","slug":"二分搜索","link":"#二分搜索","children":[]}]},{"level":2,"title":"高级搜索算法","slug":"高级搜索算法","link":"#高级搜索算法","children":[{"level":3,"title":"插值搜索","slug":"插值搜索","link":"#插值搜索","children":[]},{"level":3,"title":"指数搜索","slug":"指数搜索","link":"#指数搜索","children":[]}]},{"level":2,"title":"图搜索算法","slug":"图搜索算法","link":"#图搜索算法","children":[{"level":3,"title":"深度优先搜索 (DFS)","slug":"深度优先搜索-dfs","link":"#深度优先搜索-dfs","children":[]},{"level":3,"title":"广度优先搜索 (BFS)","slug":"广度优先搜索-bfs","link":"#广度优先搜索-bfs","children":[]}]},{"level":2,"title":"启发式搜索算法","slug":"启发式搜索算法","link":"#启发式搜索算法","children":[{"level":3,"title":"A*搜索","slug":"a-搜索","link":"#a-搜索","children":[]}]},{"level":2,"title":"搜索算法性能分析","slug":"搜索算法性能分析","link":"#搜索算法性能分析","children":[{"level":3,"title":"时间复杂度比较","slug":"时间复杂度比较","link":"#时间复杂度比较","children":[]},{"level":3,"title":"算法选择指南","slug":"算法选择指南","link":"#算法选择指南","children":[]}]}],"relativePath":"basic/algorithm/searching.md","filePath":"basic/algorithm/searching.md"}'),o={name:"basic/algorithm/searching.md"};function e(c,s,t,E,r,y){return p(),a("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/algorithm/searching.md for this page in Markdown format</div><h1 id="搜索算法" tabindex="-1">搜索算法 <a class="header-anchor" href="#搜索算法" aria-label="Permalink to &quot;搜索算法&quot;">​</a></h1><h2 id="什么是搜索算法" tabindex="-1">什么是搜索算法 <a class="header-anchor" href="#什么是搜索算法" aria-label="Permalink to &quot;什么是搜索算法&quot;">​</a></h2><p>搜索算法是在数据集合中查找特定元素或满足特定条件元素的计算过程。搜索是计算机科学中最基础且重要的操作之一，广泛应用于数据处理、人工智能、数据库系统等领域。</p><p>特点：</p><ul><li>目标导向：明确查找目标或搜索条件</li><li>效率关键：搜索性能直接影响系统响应速度</li><li>适用性广：从简单数组到复杂图结构都能应用</li><li>策略多样：根据数据结构特点选择不同搜索策略</li></ul><p>示意图 (搜索过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据集: [●, ●, ●, ●, ●, ●, ●, ●, ●, ●]</span></span>
<span class="line"><span>搜索目标: ★</span></span>
<span class="line"><span>搜索过程: 检查每个位置 → 找到目标位置</span></span>
<span class="line"><span>结果: [●, ●, ●, ★, ●, ●, ●, ●, ●, ●]</span></span></code></pre></div><h2 id="搜索算法分类" tabindex="-1">搜索算法分类 <a class="header-anchor" href="#搜索算法分类" aria-label="Permalink to &quot;搜索算法分类&quot;">​</a></h2><h3 id="无序搜索" tabindex="-1">无序搜索 <a class="header-anchor" href="#无序搜索" aria-label="Permalink to &quot;无序搜索&quot;">​</a></h3><p>在未排序的数据集中进行搜索，需要检查每个元素直到找到目标。</p><p>特点：</p><ul><li>通用性强：不要求数据有序</li><li>简单直观：算法逻辑容易理解</li><li>线性复杂度：最坏情况需要检查所有元素</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 无序搜索的通用接口</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> SearchAlgorithm</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> search</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;必须由具体搜索算法实现&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 通用比较函数</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> defaultCompare</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (a </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> b) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">?</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 通用相等判断</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> defaultEquals</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="有序搜索" tabindex="-1">有序搜索 <a class="header-anchor" href="#有序搜索" aria-label="Permalink to &quot;有序搜索&quot;">​</a></h3><p>在已排序的数据集中利用有序性进行高效搜索。</p><p>特点：</p><ul><li>效率高：利用有序性大幅减少比较次数</li><li>要求前提：数据必须预先排序</li><li>对数复杂度：二分搜索等算法达到 O(log n)</li></ul><p>示意图 (搜索算法分类)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>搜索算法</span></span>
<span class="line"><span>├── 无序搜索</span></span>
<span class="line"><span>│   ├── 线性搜索</span></span>
<span class="line"><span>│   ├── 跳跃搜索</span></span>
<span class="line"><span>│   └── 散列搜索</span></span>
<span class="line"><span>└── 有序搜索</span></span>
<span class="line"><span>    ├── 二分搜索</span></span>
<span class="line"><span>    ├── 插值搜索</span></span>
<span class="line"><span>    ├── 指数搜索</span></span>
<span class="line"><span>    └── 斐波那契搜索</span></span></code></pre></div><h2 id="基本搜索算法" tabindex="-1">基本搜索算法 <a class="header-anchor" href="#基本搜索算法" aria-label="Permalink to &quot;基本搜索算法&quot;">​</a></h2><h3 id="线性搜索" tabindex="-1">线性搜索 <a class="header-anchor" href="#线性搜索" aria-label="Permalink to &quot;线性搜索&quot;">​</a></h3><p>逐个检查数据集中的每个元素，直到找到目标或遍历完所有元素。</p><p>特点：</p><ul><li>简单直接：最容易理解和实现的搜索算法</li><li>无预处理：不需要数据预先排序或特殊结构</li><li>通用性强：适用于任何可遍历的数据结构</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 线性搜索实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> linearSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">equalsFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> SearchAlgorithm.defaultEquals) {</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">equalsFn</span><span style="color:#E1E4E8;">(array[i], target)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        index: i,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: array[i],</span></span>
<span class="line"><span style="color:#E1E4E8;">        comparisons: i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#6A737D;"> // 比较次数</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    index: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons: array.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 线性搜索的变体 - 查找所有匹配项</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> linearSearchAll</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">equalsFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> SearchAlgorithm.defaultEquals) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">equalsFn</span><span style="color:#E1E4E8;">(array[i], target)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        index: i,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: array[i]</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    results,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons,</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: results.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 哨兵线性搜索 - 减少比较次数</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> sentinelLinearSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">equalsFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> SearchAlgorithm.defaultEquals) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> { index: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, comparisons: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 保存最后一个元素</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> last</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array[n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#6A737D;">  // 将目标设置为最后一个元素（哨兵）</span></span>
<span class="line"><span style="color:#E1E4E8;">  array[n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> target;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">equalsFn</span><span style="color:#E1E4E8;">(array[i], target)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 恢复最后一个元素</span></span>
<span class="line"><span style="color:#E1E4E8;">  array[n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> last;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> ||</span><span style="color:#B392F0;"> equalsFn</span><span style="color:#E1E4E8;">(last, target)) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      index: i,</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: array[i],</span></span>
<span class="line"><span style="color:#E1E4E8;">      comparisons: comparisons </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    index: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons: comparisons </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (线性搜索过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数组: [5, 2, 8, 1, 9, 3, 7, 4]</span></span>
<span class="line"><span>搜索目标: 9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>搜索过程:</span></span>
<span class="line"><span>索引0: 5 ≠ 9 → 继续</span></span>
<span class="line"><span>索引1: 2 ≠ 9 → 继续</span></span>
<span class="line"><span>索引2: 8 ≠ 9 → 继续</span></span>
<span class="line"><span>索引3: 1 ≠ 9 → 继续</span></span>
<span class="line"><span>索引4: 9 = 9 → 找到目标</span></span>
<span class="line"><span></span></span>
<span class="line"><span>比较次数: 5</span></span>
<span class="line"><span>结果: 索引4, 值9</span></span></code></pre></div><h3 id="二分搜索" tabindex="-1">二分搜索 <a class="header-anchor" href="#二分搜索" aria-label="Permalink to &quot;二分搜索&quot;">​</a></h3><p>在有序数组中通过反复将搜索区间减半来快速定位目标元素。</p><p>特点：</p><ul><li>高效搜索：时间复杂度 O(log n)</li><li>要求有序：数据必须预先排序</li><li>分治策略：每次排除一半的搜索空间</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 二分搜索实现 - 迭代版本</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> binarySearchIterative</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> SearchAlgorithm.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> left </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((left </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> right) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> comparison</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[mid], target);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        index: mid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: array[mid],</span></span>
<span class="line"><span style="color:#E1E4E8;">        comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 目标在右半部分</span></span>
<span class="line"><span style="color:#E1E4E8;">      left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 目标在左半部分</span></span>
<span class="line"><span style="color:#E1E4E8;">      right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    index: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 二分搜索实现 - 递归版本</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> binarySearchRecursive</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> SearchAlgorithm.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> search</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">left</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">right</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">comparisons</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        index: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((left </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> right) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newComparisons</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> comparison</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[mid], target);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        index: mid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: array[mid],</span></span>
<span class="line"><span style="color:#E1E4E8;">        comparisons: newComparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#B392F0;"> search</span><span style="color:#E1E4E8;">(mid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, right, newComparisons);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#B392F0;"> search</span><span style="color:#E1E4E8;">(left, mid </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, newComparisons);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> search</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 二分搜索变体 - 查找第一个出现的位置</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> binarySearchFirst</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> SearchAlgorithm.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> left </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((left </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> right) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> comparison</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[mid], target);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid;</span></span>
<span class="line"><span style="color:#6A737D;">      // 继续在左半部分查找更早的出现</span></span>
<span class="line"><span style="color:#E1E4E8;">      right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    index: result,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: result </span><span style="color:#F97583;">!==</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> array[result] </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 二分搜索变体 - 查找最后一个出现的位置</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> binarySearchLast</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> SearchAlgorithm.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> left </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((left </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> right) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> comparison</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[mid], target);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid;</span></span>
<span class="line"><span style="color:#6A737D;">      // 继续在右半部分查找更晚的出现</span></span>
<span class="line"><span style="color:#E1E4E8;">      left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    index: result,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: result </span><span style="color:#F97583;">!==</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> array[result] </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (二分搜索过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>有序数组: [1, 2, 5, 8, 9, 13, 17, 21, 25]</span></span>
<span class="line"><span>搜索目标: 13</span></span>
<span class="line"><span></span></span>
<span class="line"><span>搜索过程:</span></span>
<span class="line"><span>初始区间: [0, 8]</span></span>
<span class="line"><span>mid = 4 → 值9 &lt; 13 → 搜索右半部分 [5, 8]</span></span>
<span class="line"><span>mid = 6 → 值17 &gt; 13 → 搜索左半部分 [5, 5]  </span></span>
<span class="line"><span>mid = 5 → 值13 = 13 → 找到目标</span></span>
<span class="line"><span></span></span>
<span class="line"><span>比较次数: 3</span></span>
<span class="line"><span>搜索路径: 9 → 17 → 13</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可视化:</span></span>
<span class="line"><span>[1,2,5,8,9,13,17,21,25]</span></span>
<span class="line"><span>         ↑ 第一次比较: 9 &lt; 13 → 向右</span></span>
<span class="line"><span>[1,2,5,8,9,13,17,21,25]</span></span>
<span class="line"><span>               ↑ 第二次比较: 17 &gt; 13 → 向左  </span></span>
<span class="line"><span>[1,2,5,8,9,13,17,21,25]</span></span>
<span class="line"><span>            ↑ 第三次比较: 13 = 13 → 找到</span></span></code></pre></div><h2 id="高级搜索算法" tabindex="-1">高级搜索算法 <a class="header-anchor" href="#高级搜索算法" aria-label="Permalink to &quot;高级搜索算法&quot;">​</a></h2><h3 id="插值搜索" tabindex="-1">插值搜索 <a class="header-anchor" href="#插值搜索" aria-label="Permalink to &quot;插值搜索&quot;">​</a></h3><p>在有序数组中根据目标值的分布估计其位置，适用于均匀分布的数据。</p><p>特点：</p><ul><li>自适应估计：根据值域分布预测目标位置</li><li>超线性性能：对于均匀分布数据性能优于二分搜索</li><li>分布敏感：性能依赖于数据的实际分布</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 插值搜索实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> interpolationSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> SearchAlgorithm.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> left </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> right </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> target </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> array[left] </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> target </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> array[right]) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 特殊情况：左右边界相等</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (array[left] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> array[right]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (array[left] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> target) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          index: left,</span></span>
<span class="line"><span style="color:#E1E4E8;">          value: array[left],</span></span>
<span class="line"><span style="color:#E1E4E8;">          comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算插值位置</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> position</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> left </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      ((target </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> array[left]) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (right </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> left)) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (array[right] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> array[left])</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> comparison</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[position], target);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        index: position,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: array[position],</span></span>
<span class="line"><span style="color:#E1E4E8;">        comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> position </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> position </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    index: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 安全的插值搜索 - 防止数值计算问题</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> safeInterpolationSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> SearchAlgorithm.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> low </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> high </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (low </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> high) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 防止除零和数值溢出</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (array[high] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> array[low]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (array[low] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> target) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> { index: low, value: array[low], comparisons };</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算插值位置，添加边界保护</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> low </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(((target </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> array[low]) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (high </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> low)) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (array[high] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> array[low])),</span></span>
<span class="line"><span style="color:#E1E4E8;">      high </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> low</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 确保mid在有效范围内</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> safeMid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(low, Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(mid, high));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> comparison</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[safeMid], target);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        index: safeMid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: array[safeMid],</span></span>
<span class="line"><span style="color:#E1E4E8;">        comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      low </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> safeMid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      high </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> safeMid </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    index: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (插值搜索 vs 二分搜索)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>均匀分布数组: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]</span></span>
<span class="line"><span>搜索目标: 65</span></span>
<span class="line"><span></span></span>
<span class="line"><span>二分搜索:</span></span>
<span class="line"><span>mid = 4 → 50 &lt; 65 → 搜索[5,9]</span></span>
<span class="line"><span>mid = 7 → 80 &gt; 65 → 搜索[5,6]  </span></span>
<span class="line"><span>mid = 5 → 60 &lt; 65 → 搜索[6,6]</span></span>
<span class="line"><span>mid = 6 → 70 &gt; 65 → 未找到</span></span>
<span class="line"><span>比较次数: 4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>插值搜索:</span></span>
<span class="line"><span>估计位置 = 0 + ((65-10)*(9-0))/(100-10) = 0 + (55*9)/90 = 5.5 → 位置5</span></span>
<span class="line"><span>值60 &lt; 65 → 搜索[6,9]</span></span>
<span class="line"><span>估计位置 = 6 + ((65-70)*(9-6))/(100-70) = 6 + (-5*3)/30 = 5.5 → 位置5(调整到6)</span></span>
<span class="line"><span>值70 &gt; 65 → 未找到</span></span>
<span class="line"><span>比较次数: 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意: 此例中插值搜索更快找到目标区域</span></span></code></pre></div><h3 id="指数搜索" tabindex="-1">指数搜索 <a class="header-anchor" href="#指数搜索" aria-label="Permalink to &quot;指数搜索&quot;">​</a></h3><p>先确定目标值可能存在的范围，然后在该范围内进行二分搜索。</p><p>特点：</p><ul><li>范围定位：快速确定搜索边界</li><li>无界搜索：适用于流数据或未知大小的数据集</li><li>高效结合：结合了线性扩展和二分搜索的优点</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 指数搜索实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> exponentialSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> SearchAlgorithm.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 如果数组为空</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      index: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      comparisons: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 如果第一个元素就是目标</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], target) </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      index: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: array[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 指数扩展确定范围</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> bound </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (bound </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[bound], target) </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    bound </span><span style="color:#F97583;">*=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 在确定的范围内进行二分搜索</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> left</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(bound </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> right</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(bound, n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> binaryResult</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> binarySearchInRange</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    array, target, left, right, compareFn, comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> binaryResult;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在指定范围内进行二分搜索</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> binarySearchInRange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">left</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">right</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">initialComparisons</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> currentLeft </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> left;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> currentRight </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> right;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> initialComparisons;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (currentLeft </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> currentRight) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((currentLeft </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> currentRight) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> comparison</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[mid], target);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        index: mid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: array[mid],</span></span>
<span class="line"><span style="color:#E1E4E8;">        comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentLeft </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentRight </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    index: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 适用于无限数据流的指数搜索</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> exponentialSearchInfinite</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">stream</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> SearchAlgorithm.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> bound </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 指数扩展直到找到可能包含目标的边界</span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> stream.</span><span style="color:#B392F0;">read</span><span style="color:#E1E4E8;">(bound);</span></span>
<span class="line"><span style="color:#E1E4E8;">      comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> comparison</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(value, target);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          index: bound,</span></span>
<span class="line"><span style="color:#E1E4E8;">          value,</span></span>
<span class="line"><span style="color:#E1E4E8;">          comparisons,</span></span>
<span class="line"><span style="color:#E1E4E8;">          found: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 找到上界，进行二分搜索</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      bound </span><span style="color:#F97583;">*=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 达到流末尾</span></span>
<span class="line"><span style="color:#F97583;">      break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 在[bound/2, bound]范围内搜索</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> left</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(bound </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> right</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> bound;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> left; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> right; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> stream.</span><span style="color:#B392F0;">read</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">      comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(value, target) </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          index: i,</span></span>
<span class="line"><span style="color:#E1E4E8;">          value,</span></span>
<span class="line"><span style="color:#E1E4E8;">          comparisons,</span></span>
<span class="line"><span style="color:#E1E4E8;">          found: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 达到流末尾</span></span>
<span class="line"><span style="color:#F97583;">      break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    index: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons,</span></span>
<span class="line"><span style="color:#E1E4E8;">    found: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (指数搜索过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>有序数组: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]</span></span>
<span class="line"><span>搜索目标: 17</span></span>
<span class="line"><span></span></span>
<span class="line"><span>指数扩展阶段:</span></span>
<span class="line"><span>检查索引1: 3 &lt; 17 → 继续</span></span>
<span class="line"><span>检查索引2: 5 &lt; 17 → 继续  </span></span>
<span class="line"><span>检查索引4: 9 &lt; 17 → 继续</span></span>
<span class="line"><span>检查索引8: 17 = 17? 不，先检查边界</span></span>
<span class="line"><span>现在bound=8, 前一个bound=4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>确定搜索范围: [bound/2=4, bound=8] → [4,8]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>二分搜索阶段:</span></span>
<span class="line"><span>在[4,8]内二分搜索:</span></span>
<span class="line"><span>mid=6 → 13 &lt; 17 → 搜索[7,8]</span></span>
<span class="line"><span>mid=7 → 15 &lt; 17 → 搜索[8,8]</span></span>
<span class="line"><span>mid=8 → 17 = 17 → 找到目标</span></span>
<span class="line"><span></span></span>
<span class="line"><span>总比较次数: 6 (扩展4次 + 二分2次)</span></span></code></pre></div><h2 id="图搜索算法" tabindex="-1">图搜索算法 <a class="header-anchor" href="#图搜索算法" aria-label="Permalink to &quot;图搜索算法&quot;">​</a></h2><h3 id="深度优先搜索-dfs" tabindex="-1">深度优先搜索 (DFS) <a class="header-anchor" href="#深度优先搜索-dfs" aria-label="Permalink to &quot;深度优先搜索 (DFS)&quot;">​</a></h3><p>沿着图的深度方向遍历，尽可能深地搜索图的分支。</p><p>特点：</p><ul><li>深度优先：先深入到最远的节点再回溯</li><li>栈结构：使用栈 (显式或隐式) 管理待访问节点</li><li>路径探索：适合寻找路径或连通分量</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 深度优先搜索实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> depthFirstSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">startNode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">targetNode</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> stack</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [startNode];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> parent</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 记录路径</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> steps </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(startNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">  parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startNode, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (stack.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentNode</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    steps</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 如果指定了目标节点且找到目标</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (targetNode </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> currentNode </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> targetNode) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        found: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        target: currentNode,</span></span>
<span class="line"><span style="color:#E1E4E8;">        steps,</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#B392F0;">reconstructPath</span><span style="color:#E1E4E8;">(parent, startNode, targetNode)</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 遍历邻居节点</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(currentNode);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(neighbor);</span></span>
<span class="line"><span style="color:#E1E4E8;">        parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor, currentNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">        stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(neighbor);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    found: targetNode </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> false</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    visited: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(visited),</span></span>
<span class="line"><span style="color:#E1E4E8;">    steps,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: targetNode </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> null</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// DFS递归实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> depthFirstSearchRecursive</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">startNode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">targetNode</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> parent</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> steps </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> dfs</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">currentNode</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    steps</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(currentNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查是否找到目标</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (targetNode </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> currentNode </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> targetNode) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> currentNode;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 递归访问邻居</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(currentNode);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor, currentNode);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> dfs</span><span style="color:#E1E4E8;">(neighbor);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (result) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startNode, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> dfs</span><span style="color:#E1E4E8;">(startNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    found: </span><span style="color:#F97583;">!!</span><span style="color:#E1E4E8;">result,</span></span>
<span class="line"><span style="color:#E1E4E8;">    target: result,</span></span>
<span class="line"><span style="color:#E1E4E8;">    steps,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: result </span><span style="color:#F97583;">?</span><span style="color:#B392F0;"> reconstructPath</span><span style="color:#E1E4E8;">(parent, startNode, result) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    visited: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(visited)</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 路径重建辅助函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> reconstructPath</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">parent</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">start</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> target;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (current </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">(current);</span></span>
<span class="line"><span style="color:#E1E4E8;">    current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(current);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> path;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (DFS 遍历过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>图结构:</span></span>
<span class="line"><span>    A</span></span>
<span class="line"><span>   / \\</span></span>
<span class="line"><span>  B   C</span></span>
<span class="line"><span> / \\   \\</span></span>
<span class="line"><span>D   E   F</span></span>
<span class="line"><span></span></span>
<span class="line"><span>从A开始的DFS:</span></span>
<span class="line"><span>栈状态: [A]</span></span>
<span class="line"><span>弹出A → 访问A</span></span>
<span class="line"><span>推入C, B → 栈: [C, B]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>弹出B → 访问B</span></span>
<span class="line"><span>推入E, D → 栈: [C, E, D]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>弹出D → 访问D → 栈: [C, E]</span></span>
<span class="line"><span>弹出E → 访问E → 栈: [C]</span></span>
<span class="line"><span>弹出C → 访问C</span></span>
<span class="line"><span>推入F → 栈: [F]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>弹出F → 访问F → 栈空</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问顺序: A → B → D → E → C → F</span></span></code></pre></div><h3 id="广度优先搜索-bfs" tabindex="-1">广度优先搜索 (BFS) <a class="header-anchor" href="#广度优先搜索-bfs" aria-label="Permalink to &quot;广度优先搜索 (BFS)&quot;">​</a></h3><p>按层次遍历图，先访问所有相邻节点再深入下一层。</p><p>特点：</p><ul><li>层次遍历：按距离起始节点的层次顺序访问</li><li>队列结构：使用队列管理待访问节点</li><li>最短路径：在无权图中能找到最短路径</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 广度优先搜索实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> breadthFirstSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">startNode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">targetNode</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> queue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [startNode];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> parent</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> distance</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 记录距离</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> steps </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(startNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">  parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startNode, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  distance.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startNode, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (queue.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentNode</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    steps</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 如果指定了目标节点且找到目标</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (targetNode </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> currentNode </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> targetNode) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        found: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        target: currentNode,</span></span>
<span class="line"><span style="color:#E1E4E8;">        steps,</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#B392F0;">reconstructPath</span><span style="color:#E1E4E8;">(parent, startNode, targetNode),</span></span>
<span class="line"><span style="color:#E1E4E8;">        distance: distance.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(currentNode)</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 遍历邻居节点</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(currentNode);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(neighbor);</span></span>
<span class="line"><span style="color:#E1E4E8;">        parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor, currentNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">        distance.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor, distance.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(currentNode) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(neighbor);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    found: targetNode </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> false</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    visited: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(visited),</span></span>
<span class="line"><span style="color:#E1E4E8;">    steps,</span></span>
<span class="line"><span style="color:#E1E4E8;">    distances: distance,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: targetNode </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> null</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带层级的BFS - 记录每层的节点</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> breadthFirstSearchWithLevels</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">startNode</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> queue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [{ node: startNode, level: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> levels</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 每层的节点</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> parent</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> steps </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(startNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">  parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startNode, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (queue.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">currentNode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">level</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">currentLevel</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    steps</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 初始化当前层级</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">levels.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(currentLevel)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      levels.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(currentLevel, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    levels.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(currentLevel).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(currentNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 遍历邻居</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(currentNode);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(neighbor);</span></span>
<span class="line"><span style="color:#E1E4E8;">        parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor, currentNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">        queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ node: neighbor, level: currentLevel </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    visited: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(visited),</span></span>
<span class="line"><span style="color:#E1E4E8;">    steps,</span></span>
<span class="line"><span style="color:#E1E4E8;">    levels: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(levels.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    parent</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (BFS 遍历过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>图结构:</span></span>
<span class="line"><span>    A</span></span>
<span class="line"><span>   / \\</span></span>
<span class="line"><span>  B   C</span></span>
<span class="line"><span> / \\   \\</span></span>
<span class="line"><span>D   E   F</span></span>
<span class="line"><span></span></span>
<span class="line"><span>从A开始的BFS:</span></span>
<span class="line"><span>队列状态: [A]</span></span>
<span class="line"><span>处理A → 访问A</span></span>
<span class="line"><span>加入B, C → 队列: [B, C]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>处理B → 访问B  </span></span>
<span class="line"><span>加入D, E → 队列: [C, D, E]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>处理C → 访问C</span></span>
<span class="line"><span>加入F → 队列: [D, E, F]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>处理D → 访问D → 队列: [E, F]</span></span>
<span class="line"><span>处理E → 访问E → 队列: [F]  </span></span>
<span class="line"><span>处理F → 访问F → 队列空</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问顺序: A → B → C → D → E → F</span></span>
<span class="line"><span>层次: </span></span>
<span class="line"><span>0: [A]</span></span>
<span class="line"><span>1: [B, C]</span></span>
<span class="line"><span>2: [D, E, F]</span></span></code></pre></div><h2 id="启发式搜索算法" tabindex="-1">启发式搜索算法 <a class="header-anchor" href="#启发式搜索算法" aria-label="Permalink to &quot;启发式搜索算法&quot;">​</a></h2><h3 id="a-搜索" tabindex="-1">A*搜索 <a class="header-anchor" href="#a-搜索" aria-label="Permalink to &quot;A*搜索&quot;">​</a></h3><p>结合 Dijkstra 算法和贪心最佳优先搜索，使用启发式函数指导搜索方向。</p><p>特点：</p><ul><li>代价敏感：综合考虑实际代价和预估代价</li><li>最优性保证：在可采纳启发式下能找到最优解</li><li>效率平衡：比 Dijkstra 更快，比贪心搜索更可靠</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// A*搜索算法实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> aStarSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">startNode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">targetNode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">heuristicFn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 开放集 - 待探索的节点</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> openSet</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PriorityQueue</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.fScore </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.fScore);</span></span>
<span class="line"><span style="color:#6A737D;">  // 关闭集 - 已探索的节点</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> closedSet</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">  // 从起点到当前节点的实际代价</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> gScore</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">  // 父节点映射</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> parent</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> steps </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 初始化</span></span>
<span class="line"><span style="color:#E1E4E8;">  gScore.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startNode, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  openSet.</span><span style="color:#B392F0;">enqueue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    node: startNode,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fScore: </span><span style="color:#B392F0;">heuristicFn</span><span style="color:#E1E4E8;">(startNode, targetNode)</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">openSet.</span><span style="color:#B392F0;">isEmpty</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    steps</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> openSet.</span><span style="color:#B392F0;">dequeue</span><span style="color:#E1E4E8;">().node;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 找到目标</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (current </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> targetNode) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        found: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        target: current,</span></span>
<span class="line"><span style="color:#E1E4E8;">        steps,</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#B392F0;">reconstructPath</span><span style="color:#E1E4E8;">(parent, startNode, targetNode),</span></span>
<span class="line"><span style="color:#E1E4E8;">        cost: gScore.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(current)</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    closedSet.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(current);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 探索邻居</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(current);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (closedSet.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor)) {</span></span>
<span class="line"><span style="color:#F97583;">        continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 计算从起点经current到neighbor的代价</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> tentativeGScore</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> gScore.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(current) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getCost</span><span style="color:#E1E4E8;">(current, neighbor);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">gScore.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> tentativeGScore </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> gScore.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(neighbor)) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 找到更优路径</span></span>
<span class="line"><span style="color:#E1E4E8;">        parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor, current);</span></span>
<span class="line"><span style="color:#E1E4E8;">        gScore.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor, tentativeGScore);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> fScore</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> tentativeGScore </span><span style="color:#F97583;">+</span><span style="color:#B392F0;"> heuristicFn</span><span style="color:#E1E4E8;">(neighbor, targetNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 如果邻居不在开放集中，加入</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">openSet.</span><span style="color:#B392F0;">contains</span><span style="color:#E1E4E8;">(neighbor)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          openSet.</span><span style="color:#B392F0;">enqueue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            node: neighbor,</span></span>
<span class="line"><span style="color:#E1E4E8;">            fScore</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 未找到路径</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    found: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    steps,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 优先队列实现（最小堆）</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PriorityQueue</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.heap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.compare </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> compareFn;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.nodeMap </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 快速查找节点</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  enqueue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(item);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.nodeMap.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(item.node, item);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bubbleUp</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  dequeue</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> min</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> end</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.nodeMap.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(min.node);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.heap[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> end;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sinkDown</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> min;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  isEmpty</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  contains</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.nodeMap.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(node);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  bubbleUp</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">idx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> element</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap[idx];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (idx </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> parentIdx</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((idx </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> parent</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap[parentIdx];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compare</span><span style="color:#E1E4E8;">(element, parent) </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.heap[parentIdx] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.heap[idx] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent;</span></span>
<span class="line"><span style="color:#E1E4E8;">      idx </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentIdx;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  sinkDown</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">idx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> length</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> element</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap[idx];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> leftChildIdx </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> idx </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> rightChildIdx </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> idx </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> swap </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> leftChild, rightChild;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (leftChildIdx </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> length) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        leftChild </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap[leftChildIdx];</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compare</span><span style="color:#E1E4E8;">(leftChild, element) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          swap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> leftChildIdx;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (rightChildIdx </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> length) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rightChild </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap[rightChildIdx];</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          (swap </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> null</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compare</span><span style="color:#E1E4E8;">(rightChild, element) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">          (swap </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> null</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compare</span><span style="color:#E1E4E8;">(rightChild, leftChild) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          swap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> rightChildIdx;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (swap </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.heap[idx] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap[swap];</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.heap[swap] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element;</span></span>
<span class="line"><span style="color:#E1E4E8;">      idx </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> swap;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (A*搜索过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>网格地图 (数字表示启发式代价):</span></span>
<span class="line"><span>S:起点, G:目标, #:障碍物</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  0  1  2  3  4</span></span>
<span class="line"><span>0 S  2  3  4  5</span></span>
<span class="line"><span>1 1  2  #  4  5  </span></span>
<span class="line"><span>2 2  3  4  5  G</span></span>
<span class="line"><span>3 3  4  5  6  7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A*搜索过程:</span></span>
<span class="line"><span>f(n) = g(n) + h(n)</span></span>
<span class="line"><span>g(n): 从起点到n的实际代价</span></span>
<span class="line"><span>h(n): 从n到目标的预估代价(曼哈顿距离)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>开放集演变:</span></span>
<span class="line"><span>初始: [S(f=0+4=4)]</span></span>
<span class="line"><span>处理S: 加入邻居(0,1)(f=1+3=4), (1,0)(f=1+5=6)</span></span>
<span class="line"><span>       开放集: [(0,1):4, (1,0):6]</span></span>
<span class="line"><span>处理(0,1): 加入(0,2)(f=2+4=6), (1,1)(f=2+4=6)</span></span>
<span class="line"><span>       开放集: [(1,0):6, (0,2):6, (1,1):6]</span></span>
<span class="line"><span>处理(1,0): 加入(2,0)(f=2+6=8) → 开放集: [(0,2):6, (1,1):6, (2,0):8]</span></span>
<span class="line"><span>... 继续直到找到目标</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最终路径: S → (0,1) → (1,1) → (2,2) → G</span></span></code></pre></div><h2 id="搜索算法性能分析" tabindex="-1">搜索算法性能分析 <a class="header-anchor" href="#搜索算法性能分析" aria-label="Permalink to &quot;搜索算法性能分析&quot;">​</a></h2><h3 id="时间复杂度比较" tabindex="-1">时间复杂度比较 <a class="header-anchor" href="#时间复杂度比较" aria-label="Permalink to &quot;时间复杂度比较&quot;">​</a></h3><p>不同搜索算法在各种数据结构下的时间效率分析。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 搜索算法性能测试工具</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> SearchBenchmark</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> benchmarkSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">searchFn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">testData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">iterations</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> iterations; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> searchFn</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">testData);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> endTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        time: endTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">        comparisons: result.comparisons </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        found: result.found </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> undefined</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> result.found </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> result.index </span><span style="color:#F97583;">!==</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> avgTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> r.time, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> iterations;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> avgComparisons</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> r.comparisons, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> iterations;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> successRate</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">r</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> r.found).</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> /</span><span style="color:#E1E4E8;"> iterations;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      avgTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">      avgComparisons,</span></span>
<span class="line"><span style="color:#E1E4E8;">      successRate,</span></span>
<span class="line"><span style="color:#E1E4E8;">      rawResults: results</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> compareAlgorithms</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">algorithms</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">testDataSets</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> comparisonResults</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">dataSetName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">testData</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(testDataSets)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      comparisonResults[dataSetName] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">algoName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">searchFn</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(algorithms)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        comparisonResults[dataSetName][algoName] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">benchmarkSearch</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          searchFn, </span></span>
<span class="line"><span style="color:#E1E4E8;">          testData</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> comparisonResults;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 生成测试数据</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> generateTestData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">size</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (type) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;sorted-array&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> sortedArray</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: size }, (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> i);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> target</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> options.target </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> undefined</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          options.target </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> size);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> [sortedArray, target];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;unsorted-array&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> unsortedArray</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: size }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> size)</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> unsortedTarget</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> options.target </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> undefined</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          options.target </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> unsortedArray[Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> size)];</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> [unsortedArray, unsortedTarget];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;graph&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">        // 生成测试图</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> graph</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateTestGraph</span><span style="color:#E1E4E8;">(size, options);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> startNode</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> options.startNode </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> targetNode</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> options.targetNode </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> size </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> [graph, startNode, targetNode];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Unknown test data type: \${</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> generateTestGraph</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">nodeCount</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 简单的网格图生成器</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> graph</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodes: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: nodeCount }, (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> i),</span></span>
<span class="line"><span style="color:#E1E4E8;">      edges: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#B392F0;">      getNeighbors</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.edges.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(node) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#B392F0;">      getCost</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">from</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 简单实现：所有边代价为1</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建网格连接</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> gridSize</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">ceil</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">sqrt</span><span style="color:#E1E4E8;">(nodeCount));</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> nodeCount; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> row</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> gridSize);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> col</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> gridSize;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 添加相邻节点</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (row </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) neighbors.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> gridSize); </span><span style="color:#6A737D;">// 上</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (row </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> gridSize </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> gridSize </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> nodeCount) neighbors.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> gridSize); </span><span style="color:#6A737D;">// 下</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (col </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) neighbors.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 左</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (col </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> gridSize </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> &lt;</span><span style="color:#E1E4E8;"> nodeCount) neighbors.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 右</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      graph.edges.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(i, neighbors);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> graph;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (搜索算法复杂度对比)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>算法          平均情况    最坏情况    空间复杂度   适用场景</span></span>
<span class="line"><span>线性搜索      O(n)        O(n)        O(1)       无序小数据集</span></span>
<span class="line"><span>二分搜索      O(log n)    O(log n)    O(1)       有序数组</span></span>
<span class="line"><span>插值搜索      O(log log n)O(n)        O(1)       均匀分布有序数据</span></span>
<span class="line"><span>指数搜索      O(log n)    O(log n)    O(1)       无界或流数据</span></span>
<span class="line"><span>深度优先搜索  O(V+E)      O(V+E)      O(V)       路径存在性，拓扑排序</span></span>
<span class="line"><span>广度优先搜索  O(V+E)      O(V+E)      O(V)       最短路径，连通分量</span></span>
<span class="line"><span>A*搜索       O(b^d)      O(b^d)      O(b^d)     路径规划，游戏AI</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其中:</span></span>
<span class="line"><span>V: 顶点数, E: 边数</span></span>
<span class="line"><span>b: 分支因子, d: 解深度</span></span></code></pre></div><h3 id="算法选择指南" tabindex="-1">算法选择指南 <a class="header-anchor" href="#算法选择指南" aria-label="Permalink to &quot;算法选择指南&quot;">​</a></h3><p>根据数据特征和搜索需求选择最合适的搜索算法。</p><p>选择策略：</p><ul><li>无序小数组：线性搜索</li><li>有序数组：二分搜索</li><li>均匀分布有序数据：插值搜索</li><li>流数据或未知大小：指数搜索</li><li>图路径搜索：BFS (最短路径) 或 DFS (路径存在)</li><li>带代价的路径规划：A*搜索</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 智能搜索算法选择器</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> SearchSelector</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> selectSearchAlgorithm</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">constraints</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      dataSorted</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      dataUniform</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      dataSize</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      needShortestPath</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      graphType</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      memoryLimit</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> constraints;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 数组搜索</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(data)) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> dataSize </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">dataSorted) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 100</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> linearSearch </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">selectUnsortedSearch</span><span style="color:#E1E4E8;">(n);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 有序数组</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> linearSearch;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (dataUniform </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> interpolationSearch;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> exponentialSearch;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> binarySearch;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 图搜索</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (graphType) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (needShortestPath) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> breadthFirstSearch;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (memoryLimit </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> memoryLimit </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> depthFirstSearch; </span><span style="color:#6A737D;">// DFS通常空间需求更小</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 默认使用BFS，因为它能找到最短路径</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> breadthFirstSearch;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 默认回退</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> linearSearch;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> selectUnsortedSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dataSize</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (dataSize </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> linearSearch;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 对于大无序数据集，考虑其他策略</span></span>
<span class="line"><span style="color:#6A737D;">    // 如建立索引或使用哈希表</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> linearSearch; </span><span style="color:#6A737D;">// 默认回退</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 根据问题特征推荐算法</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> recommendAlgorithm</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problemDescription</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> patterns</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;sorted.*array&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;二分搜索&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;unsorted.*small&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;线性搜索&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;uniform.*distributed&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;插值搜索&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;stream.*data&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;指数搜索&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;shortest.*path&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;广度优先搜索&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;path.*exists&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;深度优先搜索&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;optimal.*path&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;A*搜索&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;game.*ai&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;A*搜索&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;social.*network&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;广度优先搜索&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">pattern</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">recommendation</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(patterns)) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> RegExp</span><span style="color:#E1E4E8;">(pattern, </span><span style="color:#9ECBFF;">&#39;i&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(problemDescription)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> recommendation;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;线性搜索&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 默认推荐</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (搜索算法选择决策树)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据类型?</span></span>
<span class="line"><span>├── 数组 → 是否有序?</span></span>
<span class="line"><span>│   ├── 是 → 数据分布均匀? → 是 → 插值搜索</span></span>
<span class="line"><span>│   │   │                   ↓否</span></span>
<span class="line"><span>│   │   │                   数据量大? → 是 → 指数搜索</span></span>
<span class="line"><span>│   │   │                   ↓否</span></span>
<span class="line"><span>│   │   │                   二分搜索</span></span>
<span class="line"><span>│   │   ↓否  </span></span>
<span class="line"><span>│   │       数据量小? → 是 → 线性搜索</span></span>
<span class="line"><span>│   │       ↓否</span></span>
<span class="line"><span>│   │       考虑建立索引或使用哈希表</span></span>
<span class="line"><span>│   ↓</span></span>
<span class="line"><span>└── 图 → 需要最短路径? → 是 → 广度优先搜索</span></span>
<span class="line"><span>          ↓否</span></span>
<span class="line"><span>          内存受限? → 是 → 深度优先搜索</span></span>
<span class="line"><span>          ↓否</span></span>
<span class="line"><span>          有启发式信息? → 是 → A*搜索</span></span>
<span class="line"><span>          ↓否</span></span>
<span class="line"><span>          深度优先搜索</span></span></code></pre></div>`,86)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
