import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"排序算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是排序算法","slug":"什么是排序算法","link":"#什么是排序算法","children":[]},{"level":2,"title":"排序算法分类","slug":"排序算法分类","link":"#排序算法分类","children":[{"level":3,"title":"基于比较的排序","slug":"基于比较的排序","link":"#基于比较的排序","children":[]},{"level":3,"title":"非比较排序","slug":"非比较排序","link":"#非比较排序","children":[]}]},{"level":2,"title":"简单排序算法","slug":"简单排序算法","link":"#简单排序算法","children":[{"level":3,"title":"冒泡排序","slug":"冒泡排序","link":"#冒泡排序","children":[]},{"level":3,"title":"选择排序","slug":"选择排序","link":"#选择排序","children":[]},{"level":3,"title":"插入排序","slug":"插入排序","link":"#插入排序","children":[]}]},{"level":2,"title":"高效排序算法","slug":"高效排序算法","link":"#高效排序算法","children":[{"level":3,"title":"归并排序","slug":"归并排序","link":"#归并排序","children":[]},{"level":3,"title":"快速排序","slug":"快速排序","link":"#快速排序","children":[]},{"level":3,"title":"堆排序","slug":"堆排序","link":"#堆排序","children":[]}]},{"level":2,"title":"特殊排序算法","slug":"特殊排序算法","link":"#特殊排序算法","children":[{"level":3,"title":"希尔排序","slug":"希尔排序","link":"#希尔排序","children":[]},{"level":3,"title":"计数排序","slug":"计数排序","link":"#计数排序","children":[]}]},{"level":2,"title":"排序算法性能分析","slug":"排序算法性能分析","link":"#排序算法性能分析","children":[{"level":3,"title":"时间复杂度比较","slug":"时间复杂度比较","link":"#时间复杂度比较","children":[]},{"level":3,"title":"算法选择指南","slug":"算法选择指南","link":"#算法选择指南","children":[]}]}],"relativePath":"basic/algorithm/sorting.md","filePath":"basic/algorithm/sorting.md"}'),o={name:"basic/algorithm/sorting.md"};function e(c,s,r,E,t,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/algorithm/sorting.md for this page in Markdown format</div><h1 id="排序算法" tabindex="-1">排序算法 <a class="header-anchor" href="#排序算法" aria-label="Permalink to &quot;排序算法&quot;">​</a></h1><h2 id="什么是排序算法" tabindex="-1">什么是排序算法 <a class="header-anchor" href="#什么是排序算法" aria-label="Permalink to &quot;什么是排序算法&quot;">​</a></h2><p>排序算法是将一组数据按照特定顺序进行排列的算法。排序是计算机科学中最基本、最常用的操作之一，直接影响数据处理的效率和用户体验。</p><p>特点：</p><ul><li>顺序重排：将无序序列转换为有序序列</li><li>稳定性：相等元素的相对顺序在排序后保持不变</li><li>原地排序：是否需要在额外空间中进行排序</li><li>适应性：对已部分有序的数据排序效率更高</li></ul><p>示意图 (排序过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>输入: [5, 2, 8, 1, 9]</span></span>
<span class="line"><span>        ↓ 排序算法处理</span></span>
<span class="line"><span>输出: [1, 2, 5, 8, 9]</span></span></code></pre></div><h2 id="排序算法分类" tabindex="-1">排序算法分类 <a class="header-anchor" href="#排序算法分类" aria-label="Permalink to &quot;排序算法分类&quot;">​</a></h2><h3 id="基于比较的排序" tabindex="-1">基于比较的排序 <a class="header-anchor" href="#基于比较的排序" aria-label="Permalink to &quot;基于比较的排序&quot;">​</a></h3><p>通过比较元素间的大小关系来决定排序顺序，具有通用性强但效率有理论下限的特点。</p><p>特点：</p><ul><li>通用性：适用于任何可比较的数据类型</li><li>理论下限：比较排序的最优时间复杂度为 O(n log n)</li><li>灵活性：可以通过自定义比较函数适应不同排序需求</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 比较排序的通用接口</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> Comparator</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> defaultCompare</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (a </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> b) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">?</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> reverseCompare</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">compareFn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> -</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(a, b);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 通用排序函数模板</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> sort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 具体排序算法实现</span></span>
<span class="line"><span style="color:#F97583;">  throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;必须由具体排序算法实现&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="非比较排序" tabindex="-1">非比较排序 <a class="header-anchor" href="#非比较排序" aria-label="Permalink to &quot;非比较排序&quot;">​</a></h3><p>不通过比较元素大小，而是利用数据的特定属性进行排序，在线性时间内完成。</p><p>特点：</p><ul><li>线性时间：时间复杂度可达 O(n)</li><li>特定条件：依赖于数据的特定分布或属性</li><li>空间换时间：通常需要额外的存储空间</li></ul><p>示意图 (排序算法分类)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>排序算法</span></span>
<span class="line"><span>├── 比较排序</span></span>
<span class="line"><span>│   ├── O(n²): 冒泡、选择、插入</span></span>
<span class="line"><span>│   ├── O(n log n): 归并、快速、堆排序</span></span>
<span class="line"><span>│   └── 自适应: 希尔排序</span></span>
<span class="line"><span>└── 非比较排序</span></span>
<span class="line"><span>    ├── 计数排序</span></span>
<span class="line"><span>    ├── 桶排序</span></span>
<span class="line"><span>    └── 基数排序</span></span></code></pre></div><h2 id="简单排序算法" tabindex="-1">简单排序算法 <a class="header-anchor" href="#简单排序算法" aria-label="Permalink to &quot;简单排序算法&quot;">​</a></h2><h3 id="冒泡排序" tabindex="-1">冒泡排序 <a class="header-anchor" href="#冒泡排序" aria-label="Permalink to &quot;冒泡排序&quot;">​</a></h3><p>通过反复交换相邻的逆序元素，将最大元素“冒泡”到正确位置。</p><p>特点：</p><ul><li>稳定排序：相等元素不会交换位置</li><li>原地排序：只需要常数级别的额外空间</li><li>适应性：对已排序数组效率较高</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 冒泡排序实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> bubbleSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> swapped;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    swapped </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 每次遍历将最大元素冒泡到末尾</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> i; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[j], array[j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 交换相邻元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        [array[j], array[j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">], array[j]];</span></span>
<span class="line"><span style="color:#E1E4E8;">        swapped </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 如果本轮没有交换，说明数组已排序</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">swapped) </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 优化的冒泡排序 - 记录最后交换位置</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> optimizedBubbleSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> newN </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">], array[i]) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        [array[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">], array[i]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[i], array[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]];</span></span>
<span class="line"><span style="color:#E1E4E8;">        newN </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i; </span><span style="color:#6A737D;">// 记录最后交换的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newN; </span><span style="color:#6A737D;">// 下一轮只需比较到上次最后交换的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (冒泡排序过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始: [5, 2, 8, 1, 9]</span></span>
<span class="line"><span>第1轮:</span></span>
<span class="line"><span>  比较5-2 → 交换 → [2, 5, 8, 1, 9]</span></span>
<span class="line"><span>  比较5-8 → 保持 → [2, 5, 8, 1, 9] </span></span>
<span class="line"><span>  比较8-1 → 交换 → [2, 5, 1, 8, 9]</span></span>
<span class="line"><span>  比较8-9 → 保持 → [2, 5, 1, 8, 9]</span></span>
<span class="line"><span>第2轮:</span></span>
<span class="line"><span>  比较2-5 → 保持 → [2, 5, 1, 8, 9]</span></span>
<span class="line"><span>  比较5-1 → 交换 → [2, 1, 5, 8, 9]</span></span>
<span class="line"><span>  比较5-8 → 保持 → [2, 1, 5, 8, 9]</span></span>
<span class="line"><span>第3轮:</span></span>
<span class="line"><span>  比较2-1 → 交换 → [1, 2, 5, 8, 9]</span></span>
<span class="line"><span>完成排序</span></span></code></pre></div><h3 id="选择排序" tabindex="-1">选择排序 <a class="header-anchor" href="#选择排序" aria-label="Permalink to &quot;选择排序&quot;">​</a></h3><p>每次选择未排序部分的最小元素，放到已排序部分的末尾。</p><p>特点：</p><ul><li>不稳定排序：可能改变相等元素的相对顺序</li><li>原地排序：只需要常数级别的额外空间</li><li>简单直观：算法逻辑清晰易懂</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 选择排序实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> selectionSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在未排序部分寻找最小元素的索引</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> minIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[j], array[minIndex]) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        minIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 将最小元素交换到当前位置</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (minIndex </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      [array[i], array[minIndex]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[minIndex], array[i]];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 双向选择排序 - 同时找到最小和最大元素</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> bidirectionalSelectionSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> left </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> minIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> left;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> maxIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> right;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 在当前范围内找到最小和最大元素的索引</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> left; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> right; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[i], array[minIndex]) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        minIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[i], array[maxIndex]) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 将最小元素放到左边</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (minIndex </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> left) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      [array[left], array[minIndex]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[minIndex], array[left]];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 如果最大元素在left位置，更新maxIndex</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (maxIndex </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> left) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> minIndex;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 将最大元素放到右边</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (maxIndex </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      [array[right], array[maxIndex]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[maxIndex], array[right]];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    left</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    right</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (选择排序过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始: [5, 2, 8, 1, 9]</span></span>
<span class="line"><span>第1轮: 找到最小1 → 与5交换 → [1, 2, 8, 5, 9]</span></span>
<span class="line"><span>第2轮: 找到最小2 → 已在位置 → [1, 2, 8, 5, 9]  </span></span>
<span class="line"><span>第3轮: 找到最小5 → 与8交换 → [1, 2, 5, 8, 9]</span></span>
<span class="line"><span>第4轮: 找到最小8 → 已在位置 → [1, 2, 5, 8, 9]</span></span>
<span class="line"><span>完成排序</span></span></code></pre></div><h3 id="插入排序" tabindex="-1">插入排序 <a class="header-anchor" href="#插入排序" aria-label="Permalink to &quot;插入排序&quot;">​</a></h3><p>将每个元素插入到已排序部分的正确位置，类似于整理扑克牌。</p><p>特点：</p><ul><li>稳定排序：相等元素保持原有顺序</li><li>原地排序：只需要常数级别的额外空间</li><li>适应性：对几乎有序的数组效率很高</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 插入排序实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> insertionSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array[i];</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 将比current大的元素向右移动</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[j], current) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      array[j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">      j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 插入current到正确位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    array[j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> current;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 二分插入排序 - 使用二分查找找到插入位置</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> binaryInsertionSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 使用二分查找找到插入位置</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> left </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((left </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> right) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[mid], current) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 将元素向右移动，为插入腾出空间</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> left; j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      array[j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 插入元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    array[left] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> current;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (插入排序过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始: [5, 2, 8, 1, 9]</span></span>
<span class="line"><span>第1轮: 插入2 → [2, 5, 8, 1, 9]</span></span>
<span class="line"><span>第2轮: 插入8 → [2, 5, 8, 1, 9] </span></span>
<span class="line"><span>第3轮: 插入1 → [1, 2, 5, 8, 9]</span></span>
<span class="line"><span>第4轮: 插入9 → [1, 2, 5, 8, 9]</span></span>
<span class="line"><span>完成排序</span></span>
<span class="line"><span></span></span>
<span class="line"><span>插入过程细节(第3轮):</span></span>
<span class="line"><span>当前: [2,5,8], 要插入1</span></span>
<span class="line"><span>比较1-8 → 8右移 → [2,5,8,8]  </span></span>
<span class="line"><span>比较1-5 → 5右移 → [2,5,5,8]</span></span>
<span class="line"><span>比较1-2 → 2右移 → [2,2,5,8]</span></span>
<span class="line"><span>插入1到位置0 → [1,2,5,8]</span></span></code></pre></div><h2 id="高效排序算法" tabindex="-1">高效排序算法 <a class="header-anchor" href="#高效排序算法" aria-label="Permalink to &quot;高效排序算法&quot;">​</a></h2><h3 id="归并排序" tabindex="-1">归并排序 <a class="header-anchor" href="#归并排序" aria-label="Permalink to &quot;归并排序&quot;">​</a></h3><p>采用分治策略，将数组递归分成两半分别排序，然后合并两个有序数组。</p><p>特点：</p><ul><li>稳定排序：合并过程中保持相等元素的顺序</li><li>非原地排序：需要 O(n) 的额外空间</li><li>性能稳定：始终保证 O(n log n) 的时间复杂度</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 归并排序实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> mergeSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 分割数组</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> left</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, mid);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> right</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(mid);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 递归排序并合并</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> merge</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">    mergeSort</span><span style="color:#E1E4E8;">(left, compareFn),</span></span>
<span class="line"><span style="color:#B392F0;">    mergeSort</span><span style="color:#E1E4E8;">(right, compareFn),</span></span>
<span class="line"><span style="color:#E1E4E8;">    compareFn</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 合并两个有序数组</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> merge</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">left</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">right</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">, j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 比较两个数组的元素，按顺序合并</span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> left.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> right.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(left[i], right[j]) </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(left[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(right[j]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 添加剩余元素</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> result.</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(left.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(i)).</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(right.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(j));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 原地归并排序 - 减少空间使用</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> inPlaceMergeSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> sort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">low</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">high</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (high </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> low </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((low </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> high) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    sort</span><span style="color:#E1E4E8;">(low, mid);</span></span>
<span class="line"><span style="color:#B392F0;">    sort</span><span style="color:#E1E4E8;">(mid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, high);</span></span>
<span class="line"><span style="color:#B392F0;">    mergeInPlace</span><span style="color:#E1E4E8;">(low, mid, high);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> mergeInPlace</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">low</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">mid</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">high</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> low;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> high) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[i], array[j]) </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 将array[j]插入到array[i]的位置</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array[j];</span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 向右移动元素</span></span>
<span class="line"><span style="color:#F97583;">        while</span><span style="color:#E1E4E8;"> (index </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          array[index] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[index </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">          index</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        array[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">        i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        mid</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  sort</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (归并排序分治过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>原始数组: [5, 2, 8, 1, 9, 3, 7, 4]</span></span>
<span class="line"><span>分割:</span></span>
<span class="line"><span>[5,2,8,1] [9,3,7,4]</span></span>
<span class="line"><span>  ↓           ↓</span></span>
<span class="line"><span>[5,2] [8,1] [9,3] [7,4]</span></span>
<span class="line"><span> ↓     ↓     ↓     ↓</span></span>
<span class="line"><span>[5][2] [8][1] [9][3] [7][4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>合并:</span></span>
<span class="line"><span>[2,5] [1,8] [3,9] [4,7]</span></span>
<span class="line"><span>  ↓           ↓</span></span>
<span class="line"><span>[1,2,5,8]   [3,4,7,9]</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>    [1,2,3,4,5,7,8,9]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>合并过程细节:</span></span>
<span class="line"><span>左:[2,5] 右:[1,8]</span></span>
<span class="line"><span>比较2-1 → 取1 → [1]</span></span>
<span class="line"><span>比较2-8 → 取2 → [1,2]  </span></span>
<span class="line"><span>比较5-8 → 取5 → [1,2,5]</span></span>
<span class="line"><span>取剩余8 → [1,2,5,8]</span></span></code></pre></div><h3 id="快速排序" tabindex="-1">快速排序 <a class="header-anchor" href="#快速排序" aria-label="Permalink to &quot;快速排序&quot;">​</a></h3><p>选择基准元素，将数组划分为小于和大于基准的两部分，递归排序子数组。</p><p>特点：</p><ul><li>不稳定排序：可能改变相等元素的顺序</li><li>原地排序：平均情况下空间复杂度为 O(log n)</li><li>平均高效：平均情况下 O(n log n)，最坏 O(n²)</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 快速排序实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> quickSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> sort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">low</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">high</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (low </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> high) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 分区操作，返回基准位置</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> pivotIndex</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> partition</span><span style="color:#E1E4E8;">(low, high);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 递归排序基准左右两部分</span></span>
<span class="line"><span style="color:#B392F0;">      sort</span><span style="color:#E1E4E8;">(low, pivotIndex </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">      sort</span><span style="color:#E1E4E8;">(pivotIndex </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, high);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> partition</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">low</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">high</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 选择最后一个元素作为基准</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> pivot</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array[high];</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> low </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 小于基准的区域的边界</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> low; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> high; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[j], pivot) </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        [array[i], array[j]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[j], array[i]];</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 将基准放到正确位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    [array[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">], array[high]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[high], array[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]];</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  sort</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 三路快速排序 - 处理大量重复元素</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> quickSort3Way</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> sort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">low</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">high</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (high </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> low) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> lt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> low;      </span><span style="color:#6A737D;">// 小于基准的边界</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> gt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> high;     </span><span style="color:#6A737D;">// 大于基准的边界</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> low </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;   </span><span style="color:#6A737D;">// 当前检查的元素</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> pivot</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array[low];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> gt) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> cmp</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[i], pivot);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (cmp </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 当前元素小于基准，交换到lt区域</span></span>
<span class="line"><span style="color:#E1E4E8;">        [array[lt], array[i]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[i], array[lt]];</span></span>
<span class="line"><span style="color:#E1E4E8;">        lt</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (cmp </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 当前元素大于基准，交换到gt区域</span></span>
<span class="line"><span style="color:#E1E4E8;">        [array[i], array[gt]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[gt], array[i]];</span></span>
<span class="line"><span style="color:#E1E4E8;">        gt</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 当前元素等于基准，留在中间</span></span>
<span class="line"><span style="color:#E1E4E8;">        i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 递归排序小于和大于基准的区域</span></span>
<span class="line"><span style="color:#B392F0;">    sort</span><span style="color:#E1E4E8;">(low, lt </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    sort</span><span style="color:#E1E4E8;">(gt </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, high);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  sort</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 优化快速排序 - 三数取中法选择基准</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> optimizedQuickSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> sort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">low</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">high</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (high </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> low </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 小数组使用插入排序</span></span>
<span class="line"><span style="color:#B392F0;">      insertionSortRange</span><span style="color:#E1E4E8;">(array, low, high, compareFn);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 三数取中法选择基准</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((low </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> high) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[mid], array[low]) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      [array[low], array[mid]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[mid], array[low]];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[high], array[low]) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      [array[low], array[high]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[high], array[low]];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[high], array[mid]) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      [array[mid], array[high]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[high], array[mid]];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 将中位数放到high-1位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    [array[mid], array[high </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[high </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">], array[mid]];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> pivotIndex</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> partition</span><span style="color:#E1E4E8;">(low </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, high </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, array[high </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#B392F0;">    sort</span><span style="color:#E1E4E8;">(low, pivotIndex </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    sort</span><span style="color:#E1E4E8;">(pivotIndex </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, high);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> partition</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">low</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">high</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pivot</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> low;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> high </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      while</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i], pivot) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {}</span></span>
<span class="line"><span style="color:#F97583;">      while</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">compareFn</span><span style="color:#E1E4E8;">(array[</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">j], pivot) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> j) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        [array[i], array[j]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[j], array[i]];</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 恢复基准位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    [array[i], array[high]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[high], array[i]];</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  sort</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 插入排序的区间版本</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> insertionSortRange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">low</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">high</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> low </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> high; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array[i];</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> low </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[j], current) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      array[j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">      j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    array[j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> current;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (快速排序分区过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数组: [5, 2, 8, 1, 9, 3, 7, 4] 基准=4</span></span>
<span class="line"><span>分区过程:</span></span>
<span class="line"><span>i=-1, j=0: 5&gt;4 → 无操作</span></span>
<span class="line"><span>j=1: 2&lt;=4 → i=0, 交换arr[0]和arr[1] → [2,5,8,1,9,3,7,4]</span></span>
<span class="line"><span>j=2: 8&gt;4 → 无操作</span></span>
<span class="line"><span>j=3: 1&lt;=4 → i=1, 交换arr[1]和arr[3] → [2,1,8,5,9,3,7,4]</span></span>
<span class="line"><span>j=4: 9&gt;4 → 无操作  </span></span>
<span class="line"><span>j=5: 3&lt;=4 → i=2, 交换arr[2]和arr[5] → [2,1,3,5,9,8,7,4]</span></span>
<span class="line"><span>j=6: 7&gt;4 → 无操作</span></span>
<span class="line"><span>最后交换arr[3]和arr[7]: [2,1,3,4,9,8,7,5]</span></span>
<span class="line"><span>基准4位于正确位置，索引=3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>继续递归排序[2,1,3]和[9,8,7,5]</span></span></code></pre></div><h3 id="堆排序" tabindex="-1">堆排序 <a class="header-anchor" href="#堆排序" aria-label="Permalink to &quot;堆排序&quot;">​</a></h3><p>利用堆数据结构进行排序，将数组构建为最大堆，然后反复提取最大元素。</p><p>特点：</p><ul><li>不稳定排序：堆操作可能改变相等元素的顺序</li><li>原地排序：只需要常数级别的额外空间</li><li>性能稳定：始终保证 O(n log n) 的时间复杂度</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 堆排序实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> heapSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 构建最大堆</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    heapify</span><span style="color:#E1E4E8;">(array, n, i, compareFn);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 逐个提取最大元素</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 将当前最大元素（堆顶）移到数组末尾</span></span>
<span class="line"><span style="color:#E1E4E8;">    [array[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], array[i]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[i], array[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 对剩余元素重新堆化</span></span>
<span class="line"><span style="color:#B392F0;">    heapify</span><span style="color:#E1E4E8;">(array, i, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, compareFn);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 堆化函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> heapify</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> largest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;        </span><span style="color:#6A737D;">// 假设当前节点最大</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> left</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 左子节点</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> right</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 右子节点</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 如果左子节点存在且大于当前最大节点</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[left], array[largest]) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    largest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> left;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 如果右子节点存在且大于当前最大节点</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (right </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[right], array[largest]) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    largest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> right;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 如果最大节点不是当前节点，交换并继续堆化</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (largest </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    [array[i], array[largest]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[largest], array[i]];</span></span>
<span class="line"><span style="color:#B392F0;">    heapify</span><span style="color:#E1E4E8;">(array, n, largest, compareFn);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 最小堆排序（降序）</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> heapSortDescending</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> reverseCompare</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.</span><span style="color:#B392F0;">reverseCompare</span><span style="color:#E1E4E8;">(compareFn);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> heapSort</span><span style="color:#E1E4E8;">(array, reverseCompare);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (堆排序过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始数组: [5, 2, 8, 1, 9, 3]</span></span>
<span class="line"><span>构建最大堆:</span></span>
<span class="line"><span>      5</span></span>
<span class="line"><span>     / \\</span></span>
<span class="line"><span>    2   8</span></span>
<span class="line"><span>   / \\   \\</span></span>
<span class="line"><span>  1   9   3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>堆化过程:</span></span>
<span class="line"><span>从最后一个非叶子节点开始(索引1: 2)</span></span>
<span class="line"><span>2有子9 → 交换 → [5,9,8,1,2,3]</span></span>
<span class="line"><span>      5</span></span>
<span class="line"><span>     / \\</span></span>
<span class="line"><span>    9   8</span></span>
<span class="line"><span>   / \\   \\</span></span>
<span class="line"><span>  1   2   3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>堆化索引0: 5</span></span>
<span class="line"><span>5有子9和8, 9最大 → 交换5和9 → [9,5,8,1,2,3]</span></span>
<span class="line"><span>      9</span></span>
<span class="line"><span>     / \\</span></span>
<span class="line"><span>    5   8</span></span>
<span class="line"><span>   / \\   \\</span></span>
<span class="line"><span>  1   2   3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5有子2和1, 无需交换 → 堆构建完成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>排序过程:</span></span>
<span class="line"><span>交换9和3 → [3,5,8,1,2,9], 堆化前5个 → [8,5,3,1,2,9]</span></span>
<span class="line"><span>交换8和2 → [2,5,3,1,8,9], 堆化前4个 → [5,2,3,1,8,9]</span></span>
<span class="line"><span>交换5和1 → [1,2,3,5,8,9], 堆化前3个 → [3,2,1,5,8,9]</span></span>
<span class="line"><span>交换3和1 → [1,2,3,5,8,9], 堆化前2个 → [2,1,3,5,8,9]</span></span>
<span class="line"><span>交换2和1 → [1,2,3,5,8,9], 完成排序</span></span></code></pre></div><h2 id="特殊排序算法" tabindex="-1">特殊排序算法 <a class="header-anchor" href="#特殊排序算法" aria-label="Permalink to &quot;特殊排序算法&quot;">​</a></h2><h3 id="希尔排序" tabindex="-1">希尔排序 <a class="header-anchor" href="#希尔排序" aria-label="Permalink to &quot;希尔排序&quot;">​</a></h3><p>是插入排序的改进版，通过比较相距一定间隔的元素来工作，逐步减小间隔直到 1。</p><p>特点：</p><ul><li>不稳定排序：可能改变相等元素的顺序</li><li>原地排序：只需要常数级别的额外空间</li><li>增量序列：性能依赖于间隔序列的选择</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 希尔排序实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> shellSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 使用希尔增量序列: n/2, n/4, ..., 1</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> gap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">); gap </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; gap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(gap </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 对每个间隔进行插入排序</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gap; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> temp</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array[i];</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 对间隔为gap的元素进行插入排序</span></span>
<span class="line"><span style="color:#F97583;">      while</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> gap </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> gap], temp) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        array[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> gap];</span></span>
<span class="line"><span style="color:#E1E4E8;">        j </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> gap;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      array[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> temp;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用Knuth序列的希尔排序</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> shellSortKnuth</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">compareFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Comparator.defaultCompare) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 计算Knuth序列: 1, 4, 13, 40, 121, ...</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> gap </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (gap </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    gap </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 3</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> gap </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (gap </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gap; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i; j </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> gap </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#B392F0;"> compareFn</span><span style="color:#E1E4E8;">(array[j], array[j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> gap]) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> gap) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        [array[j], array[j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> gap]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> gap], array[j]];</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    gap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(gap </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (希尔排序过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数组: [5, 2, 8, 1, 9, 3, 7, 4]</span></span>
<span class="line"><span>初始间隔=4:</span></span>
<span class="line"><span>分组: [5,9] [2,3] [8,7] [1,4]</span></span>
<span class="line"><span>组内排序: [5,9] [2,3] [7,8] [1,4] → [5,2,7,1,9,3,8,4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>间隔=2:</span></span>
<span class="line"><span>分组: [5,7,9,8] [2,1,3,4]  </span></span>
<span class="line"><span>组内排序: [5,7,8,9] [1,2,3,4] → [5,1,7,2,8,3,9,4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>间隔=1:</span></span>
<span class="line"><span>直接插入排序 → [1,2,3,4,5,7,8,9]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分组排序过程(间隔=2时):</span></span>
<span class="line"><span>组1: 5,7,9,8 → 插入8: 9&gt;8 → 交换 → 5,7,8,9</span></span>
<span class="line"><span>组2: 2,1,3,4 → 插入1: 2&gt;1 → 交换 → 1,2,3,4</span></span></code></pre></div><h3 id="计数排序" tabindex="-1">计数排序 <a class="header-anchor" href="#计数排序" aria-label="Permalink to &quot;计数排序&quot;">​</a></h3><p>非比较排序算法，通过计数每个元素的出现次数来确定排序位置。</p><p>特点：</p><ul><li>稳定排序：可以设计为保持相等元素的顺序</li><li>非原地排序：需要额外的计数数组和输出数组</li><li>有限范围：只适用于整数且范围不大的情况</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 计数排序实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> countingSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 找到数组中的最小值和最大值</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> min </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> max </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (array[i] </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> min) min </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[i];</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (array[i] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> max) max </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> range</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> max </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(range).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 统计每个元素的出现次数</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count[array[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min]</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 计算累积次数（为了稳定性）</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> range; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count[i] </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> count[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 从后向前遍历，保持稳定性</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    output[count[array[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min] </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    count[array[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min]</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 将结果复制回原数组</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    array[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> output[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对象数组的计数排序（按特定键排序）</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> countingSortByKey</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">keyFn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 提取键值并找到范围</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> keys</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(keyFn);</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> min </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> keys[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> max </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> keys[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> keys.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (keys[i] </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> min) min </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> keys[i];</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (keys[i] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> max) max </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> keys[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> range</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> max </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(range).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 统计每个键值的出现次数</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> keys.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count[keys[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min]</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 计算累积次数</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> range; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count[i] </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> count[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 从后向前遍历，保持稳定性</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> keys[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    output[count[key </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min] </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    count[key </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min]</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 将结果复制回原数组</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    array[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> output[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (计数排序过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>输入: [2, 5, 3, 0, 2, 3, 0, 3]</span></span>
<span class="line"><span>范围: 0-5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>统计计数:</span></span>
<span class="line"><span>值: 0 1 2 3 4 5</span></span>
<span class="line"><span>计数: 2 0 2 3 0 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>计算累积计数:</span></span>
<span class="line"><span>值: 0 1 2 3 4 5  </span></span>
<span class="line"><span>累积: 2 2 4 7 7 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>从后向前放置:</span></span>
<span class="line"><span>最后一个3 → 位置7-1=6 → output[6]=3, 计数3变为6</span></span>
<span class="line"><span>倒数第二个0 → 位置2-1=1 → output[1]=0, 计数0变为1</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>最终output: [0,0,2,2,3,3,3,5]</span></span></code></pre></div><h2 id="排序算法性能分析" tabindex="-1">排序算法性能分析 <a class="header-anchor" href="#排序算法性能分析" aria-label="Permalink to &quot;排序算法性能分析&quot;">​</a></h2><h3 id="时间复杂度比较" tabindex="-1">时间复杂度比较 <a class="header-anchor" href="#时间复杂度比较" aria-label="Permalink to &quot;时间复杂度比较&quot;">​</a></h3><p>不同排序算法在各种情况下的时间效率分析。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 排序算法性能测试工具</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> SortBenchmark</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> timeSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sortFn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> start</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">    sortFn</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">array]); </span><span style="color:#6A737D;">// 使用副本避免修改原数组</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> end</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> end </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> start;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> compareAlgorithms</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">algorithms</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">sortFn</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(algorithms)) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 运行多次取平均值</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> totalTime </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> runs</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> runs; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        totalTime </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">timeSort</span><span style="color:#E1E4E8;">(sortFn, array);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      results[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> totalTime </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> runs;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 生成测试数据</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> generateTestData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">size</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (type) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;random&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: size }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> size)</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;sorted&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: size }, (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> i);</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;reverse&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: size }, (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> size </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;nearly-sorted&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> array</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: size }, (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> i);</span></span>
<span class="line"><span style="color:#6A737D;">        // 随机交换一些元素</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> size </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0.1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> a</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> size);</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> b</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> size);</span></span>
<span class="line"><span style="color:#E1E4E8;">          [array[a], array[b]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [array[b], array[a]];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Unknown data type: \${</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (时间复杂度对比表)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>算法        最好情况    平均情况    最坏情况    空间复杂度   稳定性</span></span>
<span class="line"><span>冒泡排序     O(n)       O(n²)      O(n²)      O(1)       稳定</span></span>
<span class="line"><span>选择排序     O(n²)      O(n²)      O(n²)      O(1)       不稳定</span></span>
<span class="line"><span>插入排序     O(n)       O(n²)      O(n²)      O(1)       稳定</span></span>
<span class="line"><span>希尔排序     O(n log n) O(n^1.3)   O(n²)      O(1)       不稳定</span></span>
<span class="line"><span>归并排序     O(n log n) O(n log n) O(n log n) O(n)       稳定</span></span>
<span class="line"><span>快速排序     O(n log n) O(n log n) O(n²)      O(log n)   不稳定</span></span>
<span class="line"><span>堆排序       O(n log n) O(n log n) O(n log n) O(1)       不稳定</span></span>
<span class="line"><span>计数排序     O(n + k)   O(n + k)   O(n + k)   O(k)       稳定</span></span></code></pre></div><h3 id="算法选择指南" tabindex="-1">算法选择指南 <a class="header-anchor" href="#算法选择指南" aria-label="Permalink to &quot;算法选择指南&quot;">​</a></h3><p>根据具体场景选择最合适的排序算法。</p><p>选择策略：</p><ul><li>小数组 (n &lt; 10)：插入排序</li><li>基本有序数组：插入排序或冒泡排序</li><li>随机大数组：快速排序或归并排序</li><li>需要稳定性：归并排序或插入排序</li><li>内存受限：堆排序或希尔排序</li><li>整数且范围小：计数排序</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 智能排序选择器</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> SortSelector</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> selectSortAlgorithm</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">constraints</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      requireStable</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      memorySensitive</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      dataType</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;comparable&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> constraints;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 小数组使用插入排序</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> insertionSort;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查是否基本有序</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isNearlySorted</span><span style="color:#E1E4E8;">(array) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">memorySensitive) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> insertionSort;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 整数且范围小的情况</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (dataType </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;integer&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hasSmallRange</span><span style="color:#E1E4E8;">(array)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> countingSort;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 需要稳定排序</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (requireStable) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> mergeSort;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 内存敏感</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (memorySensitive) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1000</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> shellSort </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> heapSort;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 默认使用快速排序</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> optimizedQuickSort;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> isNearlySorted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">threshold</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0.1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> inversions </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> maxInversions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> threshold;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (array[i] </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> array[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        inversions</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (inversions </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> maxInversions) {</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> hasSmallRange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">maxRange</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (array.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> min </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> max </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (array[i] </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> min) min </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[i];</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (array[i] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> max) max </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 如果范围已经超过阈值，提前返回</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (max </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> maxRange) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (max </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min) </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> maxRange;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (算法选择决策树)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数组大小?</span></span>
<span class="line"><span>├── n ≤ 10 → 插入排序</span></span>
<span class="line"><span>├── n ≤ 50 → 基本有序? → 是 → 插入排序</span></span>
<span class="line"><span>│           ↓否</span></span>
<span class="line"><span>│           希尔排序</span></span>
<span class="line"><span>├── n ≤ 1000 → 需要稳定? → 是 → 归并排序</span></span>
<span class="line"><span>│             ↓否</span></span>
<span class="line"><span>│             快速排序</span></span>
<span class="line"><span>└── n &gt; 1000 → 整数小范围? → 是 → 计数排序</span></span>
<span class="line"><span>                ↓否</span></span>
<span class="line"><span>                需要稳定? → 是 → 归并排序</span></span>
<span class="line"><span>                ↓否  </span></span>
<span class="line"><span>                内存敏感? → 是 → 堆排序</span></span>
<span class="line"><span>                ↓否</span></span>
<span class="line"><span>                快速排序</span></span></code></pre></div>`,92)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
