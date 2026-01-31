import{_ as n,c as a,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"字符串算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是字符串算法","slug":"什么是字符串算法","link":"#什么是字符串算法","children":[]},{"level":2,"title":"字符串匹配算法","slug":"字符串匹配算法","link":"#字符串匹配算法","children":[{"level":3,"title":"朴素字符串匹配","slug":"朴素字符串匹配","link":"#朴素字符串匹配","children":[]},{"level":3,"title":"KMP 算法","slug":"kmp-算法","link":"#kmp-算法","children":[]},{"level":3,"title":"Boyer-Moore 算法","slug":"boyer-moore-算法","link":"#boyer-moore-算法","children":[]}]},{"level":2,"title":"字符串搜索数据结构","slug":"字符串搜索数据结构","link":"#字符串搜索数据结构","children":[{"level":3,"title":"Trie 树","slug":"trie-树","link":"#trie-树","children":[]},{"level":3,"title":"Aho-Corasick 算法","slug":"aho-corasick-算法","link":"#aho-corasick-算法","children":[]}]},{"level":2,"title":"字符串相似度算法","slug":"字符串相似度算法","link":"#字符串相似度算法","children":[{"level":3,"title":"编辑距离","slug":"编辑距离","link":"#编辑距离","children":[]},{"level":3,"title":"最长公共子序列","slug":"最长公共子序列","link":"#最长公共子序列","children":[]}]},{"level":2,"title":"高级字符串算法","slug":"高级字符串算法","link":"#高级字符串算法","children":[{"level":3,"title":"Rabin-Karp 算法","slug":"rabin-karp-算法","link":"#rabin-karp-算法","children":[]},{"level":3,"title":"后缀数组","slug":"后缀数组","link":"#后缀数组","children":[]}]}],"relativePath":"basic/algorithm/string.md","filePath":"basic/algorithm/string.md"}'),o={name:"basic/algorithm/string.md"};function e(c,s,t,E,r,y){return p(),a("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/algorithm/string.md for this page in Markdown format</div><h1 id="字符串算法" tabindex="-1">字符串算法 <a class="header-anchor" href="#字符串算法" aria-label="Permalink to &quot;字符串算法&quot;">​</a></h1><h2 id="什么是字符串算法" tabindex="-1">什么是字符串算法 <a class="header-anchor" href="#什么是字符串算法" aria-label="Permalink to &quot;什么是字符串算法&quot;">​</a></h2><p>字符串算法是专门处理文本数据的一系列计算方法，解决字符串匹配、搜索、比较和转换等问题。字符串作为最常见的数据类型之一，其高效处理直接影响搜索引擎、文本编辑器和数据分析系统的性能。</p><p>特点：</p><ul><li>文本处理：专注于字符序列的操作和分析</li><li>模式匹配：在文本中快速定位特定模式</li><li>效率关键：处理大规模文本时性能差异显著</li><li>应用广泛：从简单搜索到复杂生物信息学分析</li></ul><p>示意图 (字符串基本操作)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>文本: &quot;hello world&quot;</span></span>
<span class="line"><span>模式: &quot;world&quot;</span></span>
<span class="line"><span>        ↓ 字符串匹配</span></span>
<span class="line"><span>位置: 6</span></span></code></pre></div><h2 id="字符串匹配算法" tabindex="-1">字符串匹配算法 <a class="header-anchor" href="#字符串匹配算法" aria-label="Permalink to &quot;字符串匹配算法&quot;">​</a></h2><h3 id="朴素字符串匹配" tabindex="-1">朴素字符串匹配 <a class="header-anchor" href="#朴素字符串匹配" aria-label="Permalink to &quot;朴素字符串匹配&quot;">​</a></h3><p>逐个比较文本和模式的每个字符，是最简单直接的匹配方法。</p><p>特点：</p><ul><li>简单直观：算法逻辑易于理解和实现</li><li>无预处理：不需要对模式或文本进行预处理</li><li>效率低下：最坏情况时间复杂度 O(mn)</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 朴素字符串匹配算法</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> naiveStringSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> text.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> positions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 遍历所有可能的起始位置</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> j;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (text[i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> j] </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> pattern[j]) {</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 如果整个模式匹配成功</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> m) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      positions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    positions,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons,</span></span>
<span class="line"><span style="color:#E1E4E8;">    patternLength: m,</span></span>
<span class="line"><span style="color:#E1E4E8;">    textLength: n</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 优化版朴素匹配 - 在发现不匹配时立即停止</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> optimizedNaiveSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> text.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> positions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> matched </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (text[i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> j] </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> pattern[j]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        matched </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 提前终止内层循环</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (matched) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      positions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    positions,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons,</span></span>
<span class="line"><span style="color:#E1E4E8;">    efficiency: comparisons </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> m) </span><span style="color:#6A737D;">// 比较效率</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (朴素匹配过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>文本:    &quot;ABABDABACDABABCABAB&quot;</span></span>
<span class="line"><span>模式:    &quot;ABABC&quot;</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>i=0: ABABD ≠ ABABC → 不匹配</span></span>
<span class="line"><span>i=1: BABDA ≠ ABABC → 不匹配  </span></span>
<span class="line"><span>i=2: ABDAB ≠ ABABC → 不匹配</span></span>
<span class="line"><span>i=3: DABAC ≠ ABABC → 不匹配</span></span>
<span class="line"><span>i=4: ABACD ≠ ABABC → 不匹配</span></span>
<span class="line"><span>i=5: BACDA ≠ ABABC → 不匹配</span></span>
<span class="line"><span>i=6: ACDAB ≠ ABABC → 不匹配</span></span>
<span class="line"><span>i=7: CDABA ≠ ABABC → 不匹配</span></span>
<span class="line"><span>i=8: DABAB ≠ ABABC → 不匹配</span></span>
<span class="line"><span>i=9: ABABC = ABABC → 匹配位置9</span></span>
<span class="line"><span>i=10: BABCA ≠ ABABC → 不匹配</span></span>
<span class="line"><span>...</span></span></code></pre></div><h3 id="kmp-算法" tabindex="-1">KMP 算法 <a class="header-anchor" href="#kmp-算法" aria-label="Permalink to &quot;KMP 算法&quot;">​</a></h3><p>利用部分匹配表避免重复比较，实现高效的字符串匹配。</p><p>特点：</p><ul><li>部分匹配：构建前缀函数避免回溯</li><li>线性时间：预处理 O(m)，匹配 O(n)</li><li>无回溯：文本指针只前进不后退</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// KMP算法实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> kmpSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> text.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (m </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> { positions: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], comparisons: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 构建部分匹配表</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> lps</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> computeLPSArray</span><span style="color:#E1E4E8;">(pattern);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> positions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 文本索引</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 模式索引</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (pattern[j] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> text[i]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> m) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 找到匹配</span></span>
<span class="line"><span style="color:#E1E4E8;">      positions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> j);</span></span>
<span class="line"><span style="color:#E1E4E8;">      j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> lps[j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> pattern[j] </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> text[i]) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 不匹配时利用LPS表跳过</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> lps[j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    positions,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons,</span></span>
<span class="line"><span style="color:#E1E4E8;">    lpsTable: lps</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 计算最长前缀后缀表</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> computeLPSArray</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> lps</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(m).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> length </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 当前最长前缀后缀长度</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (pattern[i] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> pattern[length]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      length</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      lps[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> length;</span></span>
<span class="line"><span style="color:#E1E4E8;">      i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (length </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> lps[length </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        lps[i] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> lps;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 可视化LPS表构建过程</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> visualizeLPS</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> lps</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> computeLPSArray</span><span style="color:#E1E4E8;">(pattern);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> steps</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`构建模式 &quot;\${</span><span style="color:#E1E4E8;">pattern</span><span style="color:#9ECBFF;">}&quot; 的LPS表:\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> prefix </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, lps[i]);</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> suffix </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> lps[i] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    steps.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      index: i,</span></span>
<span class="line"><span style="color:#E1E4E8;">      character: pattern[i],</span></span>
<span class="line"><span style="color:#E1E4E8;">      lpsValue: lps[i],</span></span>
<span class="line"><span style="color:#E1E4E8;">      prefix,</span></span>
<span class="line"><span style="color:#E1E4E8;">      suffix,</span></span>
<span class="line"><span style="color:#E1E4E8;">      match: prefix </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> suffix</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> steps;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (KMP 算法 LPS 表)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模式: &quot;ABABC&quot;</span></span>
<span class="line"><span>LPS表构建:</span></span>
<span class="line"><span>i=0: &quot;A&quot; → LPS[0]=0</span></span>
<span class="line"><span>i=1: &quot;AB&quot; → 前缀&quot;A&quot;≠后缀&quot;B&quot; → LPS[1]=0  </span></span>
<span class="line"><span>i=2: &quot;ABA&quot; → 前缀&quot;A&quot;=后缀&quot;A&quot; → LPS[2]=1</span></span>
<span class="line"><span>i=3: &quot;ABAB&quot; → 前缀&quot;AB&quot;≠后缀&quot;AB&quot;? 检查: </span></span>
<span class="line"><span>     前缀&quot;A&quot;=后缀&quot;B&quot;? 不匹配 → LPS[3]=0? </span></span>
<span class="line"><span>     但前缀&quot;AB&quot;=后缀&quot;AB&quot;? 实际: LPS[3]=2</span></span>
<span class="line"><span>i=4: &quot;ABABC&quot; → 前缀&quot;ABC&quot;≠后缀&quot;ABC&quot;? 检查:</span></span>
<span class="line"><span>     前缀&quot;A&quot;=后缀&quot;C&quot;? 不匹配 → LPS[4]=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最终LPS: [0,0,1,2,0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>匹配过程:</span></span>
<span class="line"><span>文本: &quot;ABABDABACDABABCABAB&quot;</span></span>
<span class="line"><span>模式: &quot;ABABC&quot;</span></span>
<span class="line"><span>i=0,j=0: A=A → i=1,j=1</span></span>
<span class="line"><span>i=1,j=1: B=B → i=2,j=2  </span></span>
<span class="line"><span>i=2,j=2: A=A → i=3,j=3</span></span>
<span class="line"><span>i=3,j=3: B=B → i=4,j=4</span></span>
<span class="line"><span>i=4,j=4: D≠C → 不匹配，j=LPS[3]=2</span></span>
<span class="line"><span>继续比较 i=4,j=2: D≠A → j=LPS[1]=0</span></span>
<span class="line"><span>继续比较 i=4,j=0: D≠A → i=5</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>直到找到匹配</span></span></code></pre></div><h3 id="boyer-moore-算法" tabindex="-1">Boyer-Moore 算法 <a class="header-anchor" href="#boyer-moore-算法" aria-label="Permalink to &quot;Boyer-Moore 算法&quot;">​</a></h3><p>从模式末尾开始比较，利用坏字符和好后缀规则实现大幅跳跃。</p><p>特点：</p><ul><li>反向比较：从模式末尾开始匹配</li><li>启发跳跃：利用坏字符和好后缀规则跳过多个位置</li><li>实践高效：在实际应用中通常比 KMP 更快</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Boyer-Moore算法实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> boyerMooreSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> text.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (m </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> { positions: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], comparisons: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 预处理：坏字符表</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> badCharTable</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> buildBadCharTable</span><span style="color:#E1E4E8;">(pattern);</span></span>
<span class="line"><span style="color:#6A737D;">  // 预处理：好后缀表</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> goodSuffixTable</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> buildGoodSuffixTable</span><span style="color:#E1E4E8;">(pattern);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> positions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> shift </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (shift </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> m) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 从右向左比较</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> pattern[j] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> text[shift </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> j]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 找到匹配</span></span>
<span class="line"><span style="color:#E1E4E8;">      positions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(shift);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 使用好后缀规则决定下一个移位</span></span>
<span class="line"><span style="color:#E1E4E8;">      shift </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> (shift </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> badCharTable[text.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(shift </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> m)] </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 不匹配，计算两个规则建议的移位，取较大值</span></span>
<span class="line"><span style="color:#E1E4E8;">      comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> badCharShift</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> badCharTable[text.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(shift </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> j)];</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> goodSuffixShift</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> goodSuffixTable[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      shift </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(badCharShift, goodSuffixShift));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    positions,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons,</span></span>
<span class="line"><span style="color:#E1E4E8;">    badCharTable,</span></span>
<span class="line"><span style="color:#E1E4E8;">    goodSuffixTable</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 构建坏字符表</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> buildBadCharTable</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> table</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">256</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// ASCII字符表</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    table[pattern.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(i)] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> table;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 构建好后缀表</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> buildGoodSuffixTable</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> table</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(m).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> suffixes</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(m).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 计算后缀数组</span></span>
<span class="line"><span style="color:#E1E4E8;">  suffixes[m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> g </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> f </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> g </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> suffixes[i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> f] </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> g) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      suffixes[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> suffixes[i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> f];</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> g) g </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">      f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      while</span><span style="color:#E1E4E8;"> (g </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> pattern[g] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> pattern[g </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> f]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        g</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      suffixes[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> f </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> g;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 构建好后缀表</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    table[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (suffixes[i] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> i; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (table[j] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> m) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          table[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    table[m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> suffixes[i]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> table;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (Boyer-Moore 算法)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>文本:    &quot;ABAAABCDBBABCDEF&quot;</span></span>
<span class="line"><span>模式:    &quot;ABCD&quot;</span></span>
<span class="line"><span>坏字符表: A:0, B:1, C:2, D:3, 其他:-1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第一次比较(shift=0):</span></span>
<span class="line"><span>文本: ABAAABCD...</span></span>
<span class="line"><span>模式: ABCD</span></span>
<span class="line"><span>      ↑ 从右比较: D≠A → 坏字符&#39;A&#39;在模式位置0</span></span>
<span class="line"><span>     移位 = 坏字符位置3 - 表中位置0 = 3 → shift=3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第二次比较(shift=3):</span></span>
<span class="line"><span>文本: ABAAABCD...</span></span>
<span class="line"><span>模式:    ABCD</span></span>
<span class="line"><span>            ↑ 从右比较: D=D, C=C, B=B, A=A → 完全匹配</span></span>
<span class="line"><span>找到匹配位置3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第三次比较(shift=7):</span></span>
<span class="line"><span>文本: ABAAABCDBBABCDEF</span></span>
<span class="line"><span>模式:        ABCD</span></span>
<span class="line"><span>                 ↑ 从右比较: D≠B → 坏字符&#39;B&#39;在模式位置1</span></span>
<span class="line"><span>     移位 = 坏字符位置3 - 表中位置1 = 2 → shift=9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>继续比较直到结束...</span></span></code></pre></div><h2 id="字符串搜索数据结构" tabindex="-1">字符串搜索数据结构 <a class="header-anchor" href="#字符串搜索数据结构" aria-label="Permalink to &quot;字符串搜索数据结构&quot;">​</a></h2><h3 id="trie-树" tabindex="-1">Trie 树 <a class="header-anchor" href="#trie-树" aria-label="Permalink to &quot;Trie 树&quot;">​</a></h3><p>前缀树，用于高效存储和检索字符串集合。</p><p>特点：</p><ul><li>前缀共享：相同前缀的字符串共享节点</li><li>快速检索：搜索时间复杂度 O(m)，m 为模式长度</li><li>空间优化：压缩版本可减少内存使用</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Trie节点类</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> TrieNode</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.children </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isEndOfWord </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.frequency </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 词频统计</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Trie树实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> Trie</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.root </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TrieNode</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.size </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 存储的单词数量</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 插入单词</span></span>
<span class="line"><span style="color:#B392F0;">  insert</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">word</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> currentNode </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> char</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> word) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">currentNode.children.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(char)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        currentNode.children.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(char, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> TrieNode</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentNode.children.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(char);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">currentNode.isEndOfWord) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.size</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    currentNode.isEndOfWord </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    currentNode.frequency</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 搜索单词</span></span>
<span class="line"><span style="color:#B392F0;">  search</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">word</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> currentNode </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> char</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> word) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">currentNode.children.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(char)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> { found: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, frequency: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentNode.children.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(char);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      found: currentNode.isEndOfWord,</span></span>
<span class="line"><span style="color:#E1E4E8;">      frequency: currentNode.frequency</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 前缀搜索</span></span>
<span class="line"><span style="color:#B392F0;">  startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">prefix</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> currentNode </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> char</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> prefix) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">currentNode.children.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(char)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentNode.children.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(char);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取所有以给定前缀开头的单词</span></span>
<span class="line"><span style="color:#B392F0;">  getWordsWithPrefix</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">prefix</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> currentNode </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 导航到前缀的最后一个节点</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> char</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> prefix) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">currentNode.children.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(char)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> results; </span><span style="color:#6A737D;">// 前缀不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentNode.children.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(char);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 收集所有单词</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">collectWords</span><span style="color:#E1E4E8;">(currentNode, prefix, results);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 递归收集单词</span></span>
<span class="line"><span style="color:#B392F0;">  collectWords</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">currentWord</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node.isEndOfWord) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        word: currentWord,</span></span>
<span class="line"><span style="color:#E1E4E8;">        frequency: node.frequency</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">char</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">childNode</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> node.children) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">collectWords</span><span style="color:#E1E4E8;">(childNode, currentWord </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> char, results);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 删除单词</span></span>
<span class="line"><span style="color:#B392F0;">  delete</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">word</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">deleteRecursive</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.root, word, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  deleteRecursive</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">word</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">depth</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">node) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (depth </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> word.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (node.isEndOfWord) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        node.isEndOfWord </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.size</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> node.children.size </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> char</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> word[depth];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> childNode</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> node.children.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(char);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">childNode) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> shouldDeleteChild</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">deleteRecursive</span><span style="color:#E1E4E8;">(childNode, word, depth </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (shouldDeleteChild) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      node.children.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(char);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> node.children.size </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">node.isEndOfWord;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (Trie 树结构)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>插入单词: &quot;cat&quot;, &quot;car&quot;, &quot;card&quot;, &quot;dog&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Trie结构:</span></span>
<span class="line"><span>    root</span></span>
<span class="line"><span>    /  \\</span></span>
<span class="line"><span>   c    d</span></span>
<span class="line"><span>  /      \\</span></span>
<span class="line"><span> a        o</span></span>
<span class="line"><span>/ \\        \\</span></span>
<span class="line"><span>t* r*       g*</span></span>
<span class="line"><span>   |</span></span>
<span class="line"><span>   d*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* 表示单词结束节点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>搜索过程:</span></span>
<span class="line"><span>搜索 &quot;car&quot;: root → c → a → r* → 找到</span></span>
<span class="line"><span>搜索 &quot;cat&quot;: root → c → a → t* → 找到  </span></span>
<span class="line"><span>搜索 &quot;ca&quot;: root → c → a → 前缀存在</span></span>
<span class="line"><span>搜索 &quot;cab&quot;: root → c → a → 无b子节点 → 未找到</span></span></code></pre></div><h3 id="aho-corasick-算法" tabindex="-1">Aho-Corasick 算法 <a class="header-anchor" href="#aho-corasick-算法" aria-label="Permalink to &quot;Aho-Corasick 算法&quot;">​</a></h3><p>多模式匹配算法，在 Trie 基础上添加失败指针实现高效多模式搜索。</p><p>特点：</p><ul><li>多模式匹配：同时搜索多个模式串</li><li>自动机转换：将 Trie 扩展为有限状态自动机</li><li>线性时间：预处理后可在 O(n + m + z) 时间内完成搜索</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Aho-Corasick算法实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> AhoCorasick</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.root </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TrieNode</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isBuilt </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 添加模式</span></span>
<span class="line"><span style="color:#B392F0;">  addPattern</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> currentNode </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> char</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> pattern) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">currentNode.children.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(char)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        currentNode.children.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(char, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> TrieNode</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentNode.children.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(char);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    currentNode.isEndOfWord </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    currentNode.output </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pattern; </span><span style="color:#6A737D;">// 存储完整模式</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isBuilt </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 构建失败指针</span></span>
<span class="line"><span style="color:#B392F0;">  buildFailureLinks</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> queue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 第一层节点的失败指针指向root</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">char</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">child</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root.children) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      child.fail </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root;</span></span>
<span class="line"><span style="color:#E1E4E8;">      queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 广度优先构建失败指针</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (queue.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> currentNode</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">char</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">child</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> currentNode.children) {</span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> failNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentNode.fail;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 沿着失败指针链找到有char子节点的节点</span></span>
<span class="line"><span style="color:#F97583;">        while</span><span style="color:#E1E4E8;"> (failNode </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">failNode.children.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(char)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          failNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> failNode.fail;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (failNode.children.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(char)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          child.fail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> failNode.children.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(char);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          child.fail </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 如果失败指针指向的节点是输出节点，继承输出</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (child.fail.isEndOfWord </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">child.output) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          child.output </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> child.fail.output;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isBuilt </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 搜索文本中的所有模式</span></span>
<span class="line"><span style="color:#B392F0;">  search</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isBuilt) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">buildFailureLinks</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> currentNode </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> text.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> char</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> text[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 沿着失败指针链找到有当前字符子节点的节点</span></span>
<span class="line"><span style="color:#F97583;">      while</span><span style="color:#E1E4E8;"> (currentNode </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">currentNode.children.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(char)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        currentNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentNode.fail;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (currentNode.children.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(char)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        currentNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentNode.children.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(char);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 检查当前节点及其失败指针链上的输出</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> outputNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentNode;</span></span>
<span class="line"><span style="color:#F97583;">      while</span><span style="color:#E1E4E8;"> (outputNode </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (outputNode.isEndOfWord) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            pattern: outputNode.output,</span></span>
<span class="line"><span style="color:#E1E4E8;">            position: i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> outputNode.output.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            index: i</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        outputNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> outputNode.fail;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (Aho-Corasick 自动机)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模式: &quot;he&quot;, &quot;she&quot;, &quot;his&quot;, &quot;hers&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>构建的自动机:</span></span>
<span class="line"><span>状态0 (root) --h--&gt; 状态1 --e--&gt; 状态2 (输出: &quot;he&quot;)</span></span>
<span class="line"><span>          --s--&gt; 状态3 --h--&gt; 状态4 --e--&gt; 状态5 (输出: &quot;she&quot;)</span></span>
<span class="line"><span>状态1 --i--&gt; 状态6 --s--&gt; 状态7 (输出: &quot;his&quot;)  </span></span>
<span class="line"><span>状态1 --e--&gt; 状态2</span></span>
<span class="line"><span>状态4 --r--&gt; 状态8 --s--&gt; 状态9 (输出: &quot;hers&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>失败指针:</span></span>
<span class="line"><span>状态2.fail → 状态8 (因为&quot;e&quot;在root无子节点，但状态8有&quot;e&quot;? 实际构建更复杂)</span></span>
<span class="line"><span>状态5.fail → 状态2 (最长后缀匹配)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>搜索文本 &quot;shers&quot;:</span></span>
<span class="line"><span>s: 状态0→3</span></span>
<span class="line"><span>h: 状态3→4</span></span>
<span class="line"><span>e: 状态4→5 → 输出&quot;she&quot;位置2</span></span>
<span class="line"><span>r: 状态5→状态2.fail=状态8 → 状态8</span></span>
<span class="line"><span>s: 状态8→9 → 输出&quot;hers&quot;位置3</span></span>
<span class="line"><span>找到 &quot;she&quot;和&quot;hers&quot;</span></span></code></pre></div><h2 id="字符串相似度算法" tabindex="-1">字符串相似度算法 <a class="header-anchor" href="#字符串相似度算法" aria-label="Permalink to &quot;字符串相似度算法&quot;">​</a></h2><h3 id="编辑距离" tabindex="-1">编辑距离 <a class="header-anchor" href="#编辑距离" aria-label="Permalink to &quot;编辑距离&quot;">​</a></h3><p>衡量两个字符串的相似度，通过计算从一个字符串转换到另一个字符串所需的最少操作次数。</p><p>特点：</p><ul><li>操作计数：插入、删除、替换操作的最小次数</li><li>动态规划：使用表格存储子问题解</li><li>应用广泛：拼写检查、生物信息学、自然语言处理</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 编辑距离算法</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> editDistance</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">str2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> str1.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> str2.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 创建DP表格</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: m </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 初始化边界条件</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp[i][</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i; </span><span style="color:#6A737D;">// 从str1[0..i]到空字符串需要i次删除</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j; </span><span style="color:#6A737D;">// 从空字符串到str2[0..j]需要j次插入</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 填充DP表格</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (str1[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> str2[j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 字符相同，不需要操作</span></span>
<span class="line"><span style="color:#E1E4E8;">        dp[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 取插入、删除、替换操作的最小值</span></span>
<span class="line"><span style="color:#E1E4E8;">        dp[i][j] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          dp[i][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">],    </span><span style="color:#6A737D;">// 插入</span></span>
<span class="line"><span style="color:#E1E4E8;">          dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j],    </span><span style="color:#6A737D;">// 删除  </span></span>
<span class="line"><span style="color:#E1E4E8;">          dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 替换</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    distance: dp[m][n],</span></span>
<span class="line"><span style="color:#E1E4E8;">    dpTable: dp,</span></span>
<span class="line"><span style="color:#E1E4E8;">    operations: </span><span style="color:#B392F0;">reconstructOperations</span><span style="color:#E1E4E8;">(dp, str1, str2)</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 重建操作序列</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> reconstructOperations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dp</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">str1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">str2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> operations</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dp.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> str1[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> str2[j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 字符相同，无操作</span></span>
<span class="line"><span style="color:#E1E4E8;">      operations.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">({ type: </span><span style="color:#9ECBFF;">&#39;match&#39;</span><span style="color:#E1E4E8;">, char: str1[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] });</span></span>
<span class="line"><span style="color:#E1E4E8;">      i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> dp[i][j];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> ===</span><span style="color:#E1E4E8;"> current) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 替换操作</span></span>
<span class="line"><span style="color:#E1E4E8;">        operations.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;replace&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">          from: str1[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">], </span></span>
<span class="line"><span style="color:#E1E4E8;">          to: str2[j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> dp[i][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> ===</span><span style="color:#E1E4E8;"> current) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 插入操作</span></span>
<span class="line"><span style="color:#E1E4E8;">        operations.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;insert&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">          char: str2[j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> ===</span><span style="color:#E1E4E8;"> current) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 删除操作</span></span>
<span class="line"><span style="color:#E1E4E8;">        operations.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;delete&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">          char: str1[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> operations;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带权编辑距离（不同的操作有不同的代价）</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> weightedEditDistance</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">str2</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">costs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">insert</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">delete</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">del</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">replace</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> costs;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> str1.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> str2.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: m </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp[i][</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> del;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> insert;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (str1[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> str2[j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        dp[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        dp[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          dp[i][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> insert,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> del,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> replace</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> dp[m][n];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (编辑距离 DP 表格)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>字符串1: &quot;kitten&quot;</span></span>
<span class="line"><span>字符串2: &quot;sitting&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DP表格:</span></span>
<span class="line"><span>    &quot;&quot; s i t t i n g</span></span>
<span class="line"><span>&quot;&quot;   0 1 2 3 4 5 6 7</span></span>
<span class="line"><span>k    1 1 2 3 4 5 6 7  </span></span>
<span class="line"><span>i    2 2 1 2 3 4 5 6</span></span>
<span class="line"><span>t    3 3 2 1 2 3 4 5</span></span>
<span class="line"><span>t    4 4 3 2 1 2 3 4</span></span>
<span class="line"><span>e    5 5 4 3 2 2 3 4</span></span>
<span class="line"><span>n    6 6 5 4 3 3 2 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>编辑距离 = 3</span></span>
<span class="line"><span>操作序列:</span></span>
<span class="line"><span>k → s (替换)</span></span>
<span class="line"><span>- → i (插入)</span></span>
<span class="line"><span>e → i (替换)</span></span></code></pre></div><h3 id="最长公共子序列" tabindex="-1">最长公共子序列 <a class="header-anchor" href="#最长公共子序列" aria-label="Permalink to &quot;最长公共子序列&quot;">​</a></h3><p>找到两个序列的最长公共子序列，不要求连续但保持相对顺序。</p><p>特点：</p><ul><li>相对顺序：子序列元素保持原有顺序</li><li>动态规划：经典的二维动态规划问题</li><li>应用广泛：版本控制、生物序列比对</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 最长公共子序列</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> longestCommonSubsequence</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">str2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> str1.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> str2.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // DP表格，dp[i][j]表示str1[0..i-1]和str2[0..j-1]的LCS长度</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: m </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 填充DP表格</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (str1[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> str2[j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        dp[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        dp[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j], dp[i][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 重建LCS</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> lcs</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> reconstructLCS</span><span style="color:#E1E4E8;">(dp, str1, str2);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    length: dp[m][n],</span></span>
<span class="line"><span style="color:#E1E4E8;">    sequence: lcs,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dpTable: dp</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 重建LCS序列</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> reconstructLCS</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dp</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">str1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">str2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dp.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> lcs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (str1[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> str2[j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      lcs.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">(str1[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> dp[i][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> lcs.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多序列LCS</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> multipleLCS</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sequences</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (sequences.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (sequences.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> sequences[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> lcs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sequences[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> sequences.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> longestCommonSubsequence</span><span style="color:#E1E4E8;">(lcs, sequences[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    lcs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> result.sequence;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (lcs.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 没有公共子序列</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> lcs;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (LCS DP 表格)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>字符串1: &quot;ABCDGH&quot;</span></span>
<span class="line"><span>字符串2: &quot;AEDFHR&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DP表格:</span></span>
<span class="line"><span>    &quot;&quot; A E D F H R</span></span>
<span class="line"><span>&quot;&quot;   0 0 0 0 0 0 0</span></span>
<span class="line"><span>A    0 1 1 1 1 1 1  </span></span>
<span class="line"><span>B    0 1 1 1 1 1 1</span></span>
<span class="line"><span>C    0 1 1 1 1 1 1</span></span>
<span class="line"><span>D    0 1 1 2 2 2 2</span></span>
<span class="line"><span>G    0 1 1 2 2 2 2</span></span>
<span class="line"><span>H    0 1 1 2 2 3 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LCS长度 = 3</span></span>
<span class="line"><span>LCS序列: &quot;ADH&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重建过程:</span></span>
<span class="line"><span>从(6,6)=3开始</span></span>
<span class="line"><span>H=H → 加入H → 移动到(5,5)</span></span>
<span class="line"><span>D≠F → 比较(4,5)=2和(5,4)=2 → 选择(4,5)</span></span>
<span class="line"><span>D=D → 加入D → 移动到(3,3)  </span></span>
<span class="line"><span>A=A → 加入A → 移动到(2,2)</span></span>
<span class="line"><span>完成，LCS=&quot;ADH&quot;</span></span></code></pre></div><h2 id="高级字符串算法" tabindex="-1">高级字符串算法 <a class="header-anchor" href="#高级字符串算法" aria-label="Permalink to &quot;高级字符串算法&quot;">​</a></h2><h3 id="rabin-karp-算法" tabindex="-1">Rabin-Karp 算法 <a class="header-anchor" href="#rabin-karp-算法" aria-label="Permalink to &quot;Rabin-Karp 算法&quot;">​</a></h3><p>使用哈希函数进行字符串匹配，通过滚动哈希实现高效搜索。</p><p>特点：</p><ul><li>哈希匹配：使用哈希值快速比较</li><li>滚动哈希：常数时间更新哈希值</li><li>多模式支持：天然支持多模式搜索</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Rabin-Karp算法</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> rabinKarpSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">prime</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 101</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> text.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> positions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> comparisons </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (m </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> { positions, comparisons };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 计算pattern哈希和第一个窗口哈希</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> patternHash </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> textHash </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> h </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // h = (d^(m-1)) % prime</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    h </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (h </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 256</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> prime;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 计算初始哈希值</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    patternHash </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">256</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> patternHash </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(i)) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> prime;</span></span>
<span class="line"><span style="color:#E1E4E8;">    textHash </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">256</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> textHash </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> text.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(i)) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> prime;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 滑动窗口</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 哈希值匹配时进行精确比较</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (patternHash </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> textHash) {</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> match </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        comparisons</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (text[i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> j] </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> pattern[j]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          match </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">          break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (match) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        positions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算下一个窗口的哈希值</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> m) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      textHash </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">256</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> (textHash </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> text.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(i) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> h) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                 text.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> m)) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> prime;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 处理负哈希值</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (textHash </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        textHash </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> prime;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    positions,</span></span>
<span class="line"><span style="color:#E1E4E8;">    comparisons,</span></span>
<span class="line"><span style="color:#E1E4E8;">    hashCollisions: comparisons </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> positions.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> m</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多模式Rabin-Karp</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> rabinKarpMultiple</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">patterns</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">prime</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 101</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> patternHashes</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 预计算所有模式的哈希值</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> pattern</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> patterns) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> hash </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      hash </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">256</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> hash </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(i)) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> prime;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    patternHashes.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(pattern, hash);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">patterns.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> p.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> text.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> textHash </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> h </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    h </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (h </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 256</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> prime;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    textHash </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">256</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> textHash </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> text.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(i)) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> prime;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 检查第一个窗口</span></span>
<span class="line"><span style="color:#B392F0;">  checkWindow</span><span style="color:#E1E4E8;">(text, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, textHash, patternHashes, results);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 滑动窗口</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    textHash </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">256</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> (textHash </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> text.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> h) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">               text.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> prime;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (textHash </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      textHash </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> prime;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    checkWindow</span><span style="color:#E1E4E8;">(text, i, textHash, patternHashes, results);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> checkWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">position</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">textHash</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">patternHashes</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">pattern</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">patternHash</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> patternHashes) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (textHash </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> patternHash) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 哈希匹配，进行精确比较</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> match </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (text[position </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> j] </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> pattern[j]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          match </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">          break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (match) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          pattern,</span></span>
<span class="line"><span style="color:#E1E4E8;">          position</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (Rabin-Karp 滚动哈希)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>文本: &quot;ABCDEFG&quot;</span></span>
<span class="line"><span>模式: &quot;CDE&quot;</span></span>
<span class="line"><span>素数: 101</span></span>
<span class="line"><span></span></span>
<span class="line"><span>计算模式哈希:</span></span>
<span class="line"><span>C:67, D:68, E:69</span></span>
<span class="line"><span>hash = (256*(256*67 + 68) + 69) % 101</span></span>
<span class="line"><span>     = (256*(17152 + 68) + 69) % 101</span></span>
<span class="line"><span>     = (256*17220 + 69) % 101</span></span>
<span class="line"><span>     = (4408320 + 69) % 101 = 4408389 % 101 = 35</span></span>
<span class="line"><span></span></span>
<span class="line"><span>文本窗口哈希:</span></span>
<span class="line"><span>窗口&quot;ABC&quot;: (256*(256*65 + 66) + 67) % 101 = 33</span></span>
<span class="line"><span>窗口&quot;BCD&quot;: </span></span>
<span class="line"><span>  新哈希 = (256*(33 - 65*h) + 68) % 101</span></span>
<span class="line"><span>  h = (256^(2)) % 101 = 65536 % 101 = 88</span></span>
<span class="line"><span>  新哈希 = (256*(33 - 65*88) + 68) % 101</span></span>
<span class="line"><span>        = (256*(33 - 5720) + 68) % 101</span></span>
<span class="line"><span>        = (256*(-5687) + 68) % 101</span></span>
<span class="line"><span>        = (-1455360 + 68) % 101 = -1455292 % 101</span></span>
<span class="line"><span>        = -1455292 + 14405*101 = 35 (调整后)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>哈希匹配35=35，进行精确比较&quot;CDE&quot;=&quot;CDE&quot; → 匹配位置2</span></span></code></pre></div><h3 id="后缀数组" tabindex="-1">后缀数组 <a class="header-anchor" href="#后缀数组" aria-label="Permalink to &quot;后缀数组&quot;">​</a></h3><p>存储字符串所有后缀的排序数组，支持高效字符串搜索和分析。</p><p>特点：</p><ul><li>后缀排序：所有后缀按字典序排列</li><li>高效搜索：支持 O(m log n) 时间复杂度的模式搜索</li><li>空间优化：相比后缀树更节省空间</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 后缀数组实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> SuffixArray</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.text </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> text;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.suffixArray </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">buildSuffixArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.lcpArray </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">buildLCPArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 构建后缀数组</span></span>
<span class="line"><span style="color:#B392F0;">  buildSuffixArray</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.text.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> suffixes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 存储所有后缀及其起始索引</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      suffixes.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        index: i,</span></span>
<span class="line"><span style="color:#E1E4E8;">        suffix: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.text.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(i)</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 按后缀字典序排序</span></span>
<span class="line"><span style="color:#E1E4E8;">    suffixes.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.suffix.</span><span style="color:#B392F0;">localeCompare</span><span style="color:#E1E4E8;">(b.suffix));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 提取索引数组</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> suffixes.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">s</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> s.index);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 构建LCP（最长公共前缀）数组</span></span>
<span class="line"><span style="color:#B392F0;">  buildLCPArray</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.text.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> lcp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(n).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inverseSuffix</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(n);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 构建逆后缀数组</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      inverseSuffix[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.suffixArray[i]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (inverseSuffix[i] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        k </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> j</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.suffixArray[inverseSuffix[i] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 计算LCP</span></span>
<span class="line"><span style="color:#F97583;">      while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">             this</span><span style="color:#E1E4E8;">.text[i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> k] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.text[j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> k]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        k</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      lcp[inverseSuffix[i]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> k;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (k </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) k</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> lcp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 在后缀数组中搜索模式</span></span>
<span class="line"><span style="color:#B392F0;">  search</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.text.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> positions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 二分搜索找到模式的范围</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> left </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 找到左边界</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((left </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> right) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> suffix</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.text.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.suffixArray[mid]);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> comparison</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> suffix.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, m).</span><span style="color:#B392F0;">localeCompare</span><span style="color:#E1E4E8;">(pattern);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> start</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> left;</span></span>
<span class="line"><span style="color:#E1E4E8;">    right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 找到右边界</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((left </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> right) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> suffix</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.text.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.suffixArray[mid]);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> comparison</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> suffix.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, m).</span><span style="color:#B392F0;">localeCompare</span><span style="color:#E1E4E8;">(pattern);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (comparison </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> end</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> right;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 收集所有匹配位置</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> start; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> end; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      positions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.suffixArray[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      positions: positions.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b),</span></span>
<span class="line"><span style="color:#E1E4E8;">      count: positions.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      range: [start, end]</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取最长重复子串</span></span>
<span class="line"><span style="color:#B392F0;">  getLongestRepeatedSubstring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> maxLength </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> maxIndex </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.lcpArray.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lcpArray[i] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> maxLength) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxLength </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.lcpArray[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (maxLength </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> startIndex</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.suffixArray[maxIndex];</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.text.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(startIndex, startIndex </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> maxLength);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取所有重复子串</span></span>
<span class="line"><span style="color:#B392F0;">  getAllRepeatedSubstrings</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">minLength</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> substrings</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.lcpArray.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lcpArray[i] </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> minLength) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> startIndex</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.suffixArray[i];</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> substring</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.text.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(startIndex, startIndex </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.lcpArray[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">substrings.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(substring)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          substrings.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(substring, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        substrings.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(substring).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(startIndex);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(substrings.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">substring</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">positions</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">      substring,</span></span>
<span class="line"><span style="color:#E1E4E8;">      positions,</span></span>
<span class="line"><span style="color:#E1E4E8;">      length: substring.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">    }));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (后缀数组构建)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>文本: &quot;BANANA&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所有后缀:</span></span>
<span class="line"><span>0: &quot;BANANA&quot;</span></span>
<span class="line"><span>1: &quot;ANANA&quot; </span></span>
<span class="line"><span>2: &quot;NANA&quot;</span></span>
<span class="line"><span>3: &quot;ANA&quot;</span></span>
<span class="line"><span>4: &quot;NA&quot;</span></span>
<span class="line"><span>5: &quot;A&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>排序后后缀数组:</span></span>
<span class="line"><span>索引 后缀</span></span>
<span class="line"><span>5    &quot;A&quot;</span></span>
<span class="line"><span>3    &quot;ANA&quot;</span></span>
<span class="line"><span>1    &quot;ANANA&quot;</span></span>
<span class="line"><span>0    &quot;BANANA&quot;</span></span>
<span class="line"><span>4    &quot;NA&quot;</span></span>
<span class="line"><span>2    &quot;NANA&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>后缀数组: [5, 3, 1, 0, 4, 2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LCP数组: [0, 1, 3, 0, 0, 2]</span></span>
<span class="line"><span>解释: </span></span>
<span class="line"><span>SA[0]和SA[1]: &quot;A&quot;和&quot;ANA&quot; → LCP=1 (&quot;A&quot;)</span></span>
<span class="line"><span>SA[1]和SA[2]: &quot;ANA&quot;和&quot;ANANA&quot; → LCP=3 (&quot;ANA&quot;)</span></span>
<span class="line"><span>SA[2]和SA[3]: &quot;ANANA&quot;和&quot;BANANA&quot; → LCP=0</span></span>
<span class="line"><span>SA[3]和SA[4]: &quot;BANANA&quot;和&quot;NA&quot; → LCP=0  </span></span>
<span class="line"><span>SA[4]和SA[5]: &quot;NA&quot;和&quot;NANA&quot; → LCP=2 (&quot;NA&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>搜索&quot;ANA&quot;:</span></span>
<span class="line"><span>二分查找找到范围[1,2] → 位置3,1</span></span></code></pre></div>`,75)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
