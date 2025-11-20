import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"贪心算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是贪心算法","slug":"什么是贪心算法","link":"#什么是贪心算法","children":[]},{"level":2,"title":"贪心算法核心特性","slug":"贪心算法核心特性","link":"#贪心算法核心特性","children":[{"level":3,"title":"贪心选择性质","slug":"贪心选择性质","link":"#贪心选择性质","children":[]},{"level":3,"title":"最优子结构","slug":"最优子结构","link":"#最优子结构","children":[]}]},{"level":2,"title":"贪心算法证明技术","slug":"贪心算法证明技术","link":"#贪心算法证明技术","children":[{"level":3,"title":"交换论证","slug":"交换论证","link":"#交换论证","children":[]},{"level":3,"title":"归纳证明","slug":"归纳证明","link":"#归纳证明","children":[]}]},{"level":2,"title":"经典贪心算法问题","slug":"经典贪心算法问题","link":"#经典贪心算法问题","children":[{"level":3,"title":"分数背包问题","slug":"分数背包问题","link":"#分数背包问题","children":[]},{"level":3,"title":"硬币找零问题","slug":"硬币找零问题","link":"#硬币找零问题","children":[]}]},{"level":2,"title":"贪心算法应用模式","slug":"贪心算法应用模式","link":"#贪心算法应用模式","children":[{"level":3,"title":"区间类问题","slug":"区间类问题","link":"#区间类问题","children":[]},{"level":3,"title":"调度类问题","slug":"调度类问题","link":"#调度类问题","children":[]}]},{"level":2,"title":"贪心算法局限性","slug":"贪心算法局限性","link":"#贪心算法局限性","children":[{"level":3,"title":"贪心陷阱","slug":"贪心陷阱","link":"#贪心陷阱","children":[]},{"level":3,"title":"识别适用条件","slug":"识别适用条件","link":"#识别适用条件","children":[]}]}],"relativePath":"basic/algorithm/greedy.md","filePath":"basic/algorithm/greedy.md"}'),o={name:"basic/algorithm/greedy.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/algorithm/greedy.md for this page in Markdown format</div><h1 id="贪心算法" tabindex="-1">贪心算法 <a class="header-anchor" href="#贪心算法" aria-label="Permalink to &quot;贪心算法&quot;">​</a></h1><h2 id="什么是贪心算法" tabindex="-1">什么是贪心算法 <a class="header-anchor" href="#什么是贪心算法" aria-label="Permalink to &quot;什么是贪心算法&quot;">​</a></h2><p>贪心算法是一种在每一步选择中都采取当前状态下最优决策的算法策略。它期望通过局部最优选择的累积来达到全局最优解，通常简单高效但不保证得到绝对最优解。</p><p>特点：</p><ul><li>局部最优：每步只考虑当前最佳选择</li><li>不可回溯：一旦做出选择就不再 reconsider</li><li>高效简单：通常时间复杂度较低，实现简单</li><li>适用范围：需要问题具有贪心选择性质</li></ul><p>示意图 (找零钱问题)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>目标: 找零41分，硬币有25分、10分、5分、1分</span></span>
<span class="line"><span>贪心选择:</span></span>
<span class="line"><span>41 → 选25分 (剩余16)</span></span>
<span class="line"><span>16 → 选10分 (剩余6)  </span></span>
<span class="line"><span>6 → 选5分 (剩余1)</span></span>
<span class="line"><span>1 → 选1分 (完成)</span></span>
<span class="line"><span>硬币数: 4 (25+10+5+1)</span></span></code></pre></div><h2 id="贪心算法核心特性" tabindex="-1">贪心算法核心特性 <a class="header-anchor" href="#贪心算法核心特性" aria-label="Permalink to &quot;贪心算法核心特性&quot;">​</a></h2><h3 id="贪心选择性质" tabindex="-1">贪心选择性质 <a class="header-anchor" href="#贪心选择性质" aria-label="Permalink to &quot;贪心选择性质&quot;">​</a></h3><p>每个局部最优选择能够导向全局最优解，这是贪心算法可行的理论基础。</p><p>特点：</p><ul><li>当前最优：每一步的选择都是当前状态下的最佳选择</li><li>无后效性：选择后不会影响后续步骤的可行性</li><li>自包含：选择只依赖于当前状态，不依赖未来选择</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 活动选择问题 - 展示贪心选择性质</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> activitySelection</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">activities</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 按结束时间排序</span></span>
<span class="line"><span style="color:#E1E4E8;">  activities.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.end </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.end);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> selected</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> lastEnd </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">Infinity</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> activity</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> activities) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 贪心选择：总是选择结束最早且不冲突的活动</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (activity.start </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> lastEnd) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      selected.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(activity);</span></span>
<span class="line"><span style="color:#E1E4E8;">      lastEnd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> activity.end;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> selected;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 示例数据</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> sampleActivities</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;A&#39;</span><span style="color:#E1E4E8;">, start: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, end: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;B&#39;</span><span style="color:#E1E4E8;">, start: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, end: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;C&#39;</span><span style="color:#E1E4E8;">, start: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, end: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;D&#39;</span><span style="color:#E1E4E8;">, start: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, end: </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;E&#39;</span><span style="color:#E1E4E8;">, start: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, end: </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;F&#39;</span><span style="color:#E1E4E8;">, start: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, end: </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;G&#39;</span><span style="color:#E1E4E8;">, start: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, end: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;H&#39;</span><span style="color:#E1E4E8;">, start: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, end: </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;I&#39;</span><span style="color:#E1E4E8;">, start: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, end: </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;J&#39;</span><span style="color:#E1E4E8;">, start: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, end: </span><span style="color:#79B8FF;">14</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre></div><p>示意图 (活动选择贪心过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>活动按结束时间排序: C(0-6), A(1-4), B(3-5), E(3-9), F(5-9), D(5-7), G(6-10), H(8-11), I(8-12), J(2-14)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>贪心选择:</span></span>
<span class="line"><span>初始: lastEnd = -∞</span></span>
<span class="line"><span>选A(1-4): 不冲突, lastEnd=4</span></span>
<span class="line"><span>选D(5-7): 不冲突, lastEnd=7  </span></span>
<span class="line"><span>选H(8-11): 不冲突, lastEnd=11</span></span>
<span class="line"><span>最终选择: A, D, H (3个活动)</span></span></code></pre></div><h3 id="最优子结构" tabindex="-1">最优子结构 <a class="header-anchor" href="#最优子结构" aria-label="Permalink to &quot;最优子结构&quot;">​</a></h3><p>问题的最优解包含其子问题的最优解，这是动态规划和贪心算法共有的性质。</p><p>特点：</p><ul><li>问题分解：大问题可以分解为相似小问题</li><li>解的组合：子问题最优解能组合成原问题最优解</li><li>递归适用：适合用递归或迭代方式求解</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 霍夫曼编码 - 展示最优子结构</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> HuffmanNode</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">char</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">freq</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">left</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">right</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.char </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> char;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.freq </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> freq;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> left;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> right;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> buildHuffmanTree</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">frequencies</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> nodes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(frequencies)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">char</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">freq</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> HuffmanNode</span><span style="color:#E1E4E8;">(char, freq));</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 贪心选择：总是合并频率最小的两个节点</span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (nodes.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nodes.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.freq </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.freq);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> left</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> nodes.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> right</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> nodes.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> merged</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> HuffmanNode</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#79B8FF;">      null</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      left.freq </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> right.freq, </span></span>
<span class="line"><span style="color:#E1E4E8;">      left, </span></span>
<span class="line"><span style="color:#E1E4E8;">      right</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    nodes.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(merged);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> nodes[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> generateHuffmanCodes</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> codes</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">node) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node.char </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      codes.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(node.char, code);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    traverse</span><span style="color:#E1E4E8;">(node.left, code </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;0&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    traverse</span><span style="color:#E1E4E8;">(node.right, code </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;1&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  traverse</span><span style="color:#E1E4E8;">(root, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> codes;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (霍夫曼编码构建)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>字符频率: A:5, B:9, C:12, D:13, E:16, F:45</span></span>
<span class="line"><span></span></span>
<span class="line"><span>构建过程:</span></span>
<span class="line"><span>1. 合并A(5)和B(9) → 节点14</span></span>
<span class="line"><span>2. 合并C(12)和D(13) → 节点25  </span></span>
<span class="line"><span>3. 合并14和25 → 节点39</span></span>
<span class="line"><span>4. 合并E(16)和F(45) → 节点61</span></span>
<span class="line"><span>5. 合并39和61 → 根节点100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>编码结果:</span></span>
<span class="line"><span>A:1100, B:1101, C:100, D:101, E:111, F:0</span></span></code></pre></div><h2 id="贪心算法证明技术" tabindex="-1">贪心算法证明技术 <a class="header-anchor" href="#贪心算法证明技术" aria-label="Permalink to &quot;贪心算法证明技术&quot;">​</a></h2><h3 id="交换论证" tabindex="-1">交换论证 <a class="header-anchor" href="#交换论证" aria-label="Permalink to &quot;交换论证&quot;">​</a></h3><p>通过证明任何最优解都可以通过交换操作转换为贪心解，来证明贪心选择的正确性。</p><p>特点：</p><ul><li>解转换：展示如何将任意解改进为贪心解</li><li>不劣化：证明交换操作不会使解变差</li><li>通用性强：适用于多种贪心算法证明</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 区间调度问题 - 交换论证示例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> intervalScheduling</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">intervals</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 贪心策略：选择结束最早的区间</span></span>
<span class="line"><span style="color:#E1E4E8;">  intervals.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.end </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.end);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> schedule</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> lastEnd </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">Infinity</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> interval</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> intervals) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (interval.start </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> lastEnd) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      schedule.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(interval);</span></span>
<span class="line"><span style="color:#E1E4E8;">      lastEnd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> interval.end;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> schedule;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 交换论证的模拟验证</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> validateGreedyChoice</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">intervals</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">greedySolution</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 假设存在一个最优解O，比贪心解G多包含一个区间</span></span>
<span class="line"><span style="color:#6A737D;">  // 我们可以用贪心选择的第一个区间替换O中的第一个区间</span></span>
<span class="line"><span style="color:#6A737D;">  // 由于贪心选择结束最早，替换后不会产生冲突且数量不变</span></span>
<span class="line"><span style="color:#6A737D;">  // 重复此过程，最终O会被转换为G，证明G也是最优解</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> greedyCount</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> greedySolution.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> maxPossible </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> currentEnd </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">Infinity</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 模拟可能的最大区间数</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> interval</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> intervals.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.end </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.end)) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (interval.start </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> currentEnd) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      maxPossible</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentEnd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> interval.end;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> greedyCount </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> maxPossible;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (交换论证过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>假设最优解O: [A,C,E], 贪心解G: [B,D,F]</span></span>
<span class="line"><span>其中B结束时间早于A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>交换论证:</span></span>
<span class="line"><span>1. 用B替换O中的A → O&#39;=[B,C,E] (仍然可行，因为B结束更早)</span></span>
<span class="line"><span>2. 重复替换过程...</span></span>
<span class="line"><span>最终O转换为G，证明G也是最优解</span></span></code></pre></div><h3 id="归纳证明" tabindex="-1">归纳证明 <a class="header-anchor" href="#归纳证明" aria-label="Permalink to &quot;归纳证明&quot;">​</a></h3><p>使用数学归纳法证明贪心算法在每个步骤都保持最优性。</p><p>特点：</p><ul><li>基础情况：证明初始选择是最优的</li><li>归纳步骤：假设前 k 步最优，证明第 k+步也最优</li><li>严谨数学：提供严格的数学证明框架</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 最小生成树Prim算法 - 归纳证明示例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> primMST</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">nodes</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">edges</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> graph;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> mst</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> inMST</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> minHeap</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MinHeap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 基础情况：从任意节点开始</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> startNode</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> nodes[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  inMST.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(startNode);</span></span>
<span class="line"><span style="color:#B392F0;">  addEdgesToHeap</span><span style="color:#E1E4E8;">(startNode, edges, minHeap, inMST);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 归纳步骤：每次添加最小权重的安全边</span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (inMST.size </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> nodes.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">minHeap.</span><span style="color:#B392F0;">isEmpty</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">from</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">to</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">weight</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> minHeap.</span><span style="color:#B392F0;">extractMin</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">inMST.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(to)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      mst.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ from, to, weight });</span></span>
<span class="line"><span style="color:#E1E4E8;">      inMST.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(to);</span></span>
<span class="line"><span style="color:#B392F0;">      addEdgesToHeap</span><span style="color:#E1E4E8;">(to, edges, minHeap, inMST);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> mst;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 辅助函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> addEdgesToHeap</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">minHeap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">inMST</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> edge</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> edges) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> ((edge.from </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> node </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">inMST.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(edge.to)) </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">        (edge.to </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> node </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">inMST.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(edge.from))) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      minHeap.</span><span style="color:#B392F0;">insert</span><span style="color:#E1E4E8;">(edge);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (Prim 算法归纳证明)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>基础步骤: 单个节点构成的树是最小生成树</span></span>
<span class="line"><span>归纳假设: 前k个节点已构成最小生成子树</span></span>
<span class="line"><span>归纳步骤: 添加最小权重的割边，保持最小生成树性质</span></span>
<span class="line"><span></span></span>
<span class="line"><span>图:</span></span>
<span class="line"><span>  A---1---B</span></span>
<span class="line"><span>  |       |</span></span>
<span class="line"><span>  4       2</span></span>
<span class="line"><span>  |       |</span></span>
<span class="line"><span>  C---3---D</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MST构建:</span></span>
<span class="line"><span>开始{A} → 添加边AB(1) → {A,B} </span></span>
<span class="line"><span>→ 添加边BD(2) → {A,B,D}</span></span>
<span class="line"><span>→ 添加边DC(3) → {A,B,D,C}</span></span>
<span class="line"><span>总权重: 1+2+3=6</span></span></code></pre></div><h2 id="经典贪心算法问题" tabindex="-1">经典贪心算法问题 <a class="header-anchor" href="#经典贪心算法问题" aria-label="Permalink to &quot;经典贪心算法问题&quot;">​</a></h2><h3 id="分数背包问题" tabindex="-1">分数背包问题 <a class="header-anchor" href="#分数背包问题" aria-label="Permalink to &quot;分数背包问题&quot;">​</a></h3><p>在背包容量有限的情况下，选择价值密度最高的物品，允许分割物品。</p><p>特点：</p><ul><li>物品可分：可以取物品的一部分</li><li>价值密度：按价值/重量比率排序</li><li>绝对最优：贪心策略能得到全局最优解</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 分数背包问题</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> fractionalKnapsack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">items</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">capacity</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 计算价值密度并排序</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> itemsWithDensity</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> items.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#E1E4E8;">item,</span></span>
<span class="line"><span style="color:#E1E4E8;">    density: item.value </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> item.weight</span></span>
<span class="line"><span style="color:#E1E4E8;">  }));</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  itemsWithDensity.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> b.density </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a.density);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> remainingCapacity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> capacity;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> totalValue </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> selected</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 贪心选择：优先选择价值密度高的物品</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> item</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> itemsWithDensity) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (remainingCapacity </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (item.weight </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> remainingCapacity) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 取完整物品</span></span>
<span class="line"><span style="color:#E1E4E8;">      selected.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">item,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fraction: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        selectedValue: item.value</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalValue </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> item.value;</span></span>
<span class="line"><span style="color:#E1E4E8;">      remainingCapacity </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> item.weight;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 取部分物品</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> fraction</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> remainingCapacity </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> item.weight;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> selectedValue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> item.value </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> fraction;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      selected.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">item,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fraction,</span></span>
<span class="line"><span style="color:#E1E4E8;">        selectedValue</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalValue </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> selectedValue;</span></span>
<span class="line"><span style="color:#E1E4E8;">      remainingCapacity </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalValue,</span></span>
<span class="line"><span style="color:#E1E4E8;">    selectedItems: selected,</span></span>
<span class="line"><span style="color:#E1E4E8;">    remainingCapacity</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (分数背包贪心选择)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>物品: </span></span>
<span class="line"><span>A: 重量10, 价值60, 密度6.0</span></span>
<span class="line"><span>B: 重量20, 价值100, 密度5.0  </span></span>
<span class="line"><span>C: 重量30, 价值120, 密度4.0</span></span>
<span class="line"><span>背包容量: 50</span></span>
<span class="line"><span></span></span>
<span class="line"><span>贪心选择:</span></span>
<span class="line"><span>1. 取全部A: 价值60, 剩余容量40</span></span>
<span class="line"><span>2. 取全部B: 价值100, 剩余容量20  </span></span>
<span class="line"><span>3. 取2/3的C: 价值80, 剩余容量0</span></span>
<span class="line"><span>总价值: 60+100+80=240 (最优解)</span></span></code></pre></div><h3 id="硬币找零问题" tabindex="-1">硬币找零问题 <a class="header-anchor" href="#硬币找零问题" aria-label="Permalink to &quot;硬币找零问题&quot;">​</a></h3><p>用最少数量的硬币凑出指定金额，适用于特定面额系统。</p><p>特点：</p><ul><li>面额依赖：结果正确性取决于硬币面额</li><li>贪心适用条件：面额满足贪心性质时才最优</li><li>现实应用：现金交易系统中的找零</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 硬币找零问题</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> coinChangeGreedy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">coins</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 按面额降序排序</span></span>
<span class="line"><span style="color:#E1E4E8;">  coins.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> remaining </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> amount;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 贪心选择：总是选择当前可用的最大面额</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> coin</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> coins) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (remaining </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(remaining </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> coin);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (count </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(coin, count);</span></span>
<span class="line"><span style="color:#E1E4E8;">      remaining </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> coin;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    coinsUsed: result,</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalCoins: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(result.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">count</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> count, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    remainingAmount: remaining</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 验证硬币系统是否具有贪心性质</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> isGreedyCoinSystem</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">coins</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> sortedCoins</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">coins].</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> sortedCoins.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查每个硬币是否小于前面所有硬币的最小公倍数</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> prevCoins</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> sortedCoins.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, i);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> maxAmount</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> prevCoins.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 对每个金额测试贪心解是否最优</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> amount </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sortedCoins[i]; amount </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> maxAmount </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> sortedCoins[i]; amount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> greedyResult</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> coinChangeGreedy</span><span style="color:#E1E4E8;">(amount, sortedCoins.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> dpResult</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> coinChangeDP</span><span style="color:#E1E4E8;">(amount, sortedCoins.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (greedyResult.totalCoins </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> dpResult.totalCoins) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (硬币找零对比)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>标准系统[25,10,5,1]: 贪心最优</span></span>
<span class="line"><span>金额41: 25+10+5+1=4个硬币 ✓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>非标准系统[25,10,1]: 贪心最优  </span></span>
<span class="line"><span>金额30: 25+1+1+1+1+1=6个硬币，但10+10+10=3个硬币更优 ✗</span></span>
<span class="line"><span></span></span>
<span class="line"><span>非标准系统[1,3,4]: 贪心非最优</span></span>
<span class="line"><span>金额6: 贪心4+1+1=3个硬币，但3+3=2个硬币更优 ✗</span></span></code></pre></div><h2 id="贪心算法应用模式" tabindex="-1">贪心算法应用模式 <a class="header-anchor" href="#贪心算法应用模式" aria-label="Permalink to &quot;贪心算法应用模式&quot;">​</a></h2><h3 id="区间类问题" tabindex="-1">区间类问题 <a class="header-anchor" href="#区间类问题" aria-label="Permalink to &quot;区间类问题&quot;">​</a></h3><p>处理时间区间、空间区间等的选择与调度问题。</p><p>特点：</p><ul><li>区间排序：通常需要按开始或结束时间排序</li><li>冲突检测：检查区间是否重叠</li><li>资源分配：将区间分配给有限的资源</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 无重叠区间问题 - 移除最少数量的区间使剩余区间不重叠</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> eraseOverlapIntervals</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">intervals</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (intervals.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 按结束时间排序</span></span>
<span class="line"><span style="color:#E1E4E8;">  intervals.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.end </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.end);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> lastEnd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> intervals[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].end;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 贪心选择：保留结束最早的区间，移除冲突的区间</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> intervals.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (intervals[i].start </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> lastEnd) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 冲突，需要移除</span></span>
<span class="line"><span style="color:#E1E4E8;">      count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 不冲突，更新最后结束时间</span></span>
<span class="line"><span style="color:#E1E4E8;">      lastEnd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> intervals[i].end;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> count;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 会议室分配问题</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> minMeetingRooms</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">intervals</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> starts</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> intervals.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">i</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> i.start).</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> ends</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> intervals.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">i</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> i.end).</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> rooms </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> endPointer </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 贪心策略：按时间线扫描，遇到开始时间需要房间，遇到结束时间释放房间</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> starts.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (starts[i] </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> ends[endPointer]) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 需要新房间</span></span>
<span class="line"><span style="color:#E1E4E8;">      rooms</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 可以复用房间，移动结束指针</span></span>
<span class="line"><span style="color:#E1E4E8;">      endPointer</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> rooms;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (无重叠区间选择)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>区间: [1,2], [2,3], [3,4], [1,3]</span></span>
<span class="line"><span>按结束时间排序: [1,2], [2,3], [1,3], [3,4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>贪心选择:</span></span>
<span class="line"><span>保留[1,2], lastEnd=2</span></span>
<span class="line"><span>跳过[2,3]? 开始2&gt;=lastEnd=2 → 保留, lastEnd=3</span></span>
<span class="line"><span>跳过[1,3]? 开始1&lt;lastEnd=3 → 移除</span></span>
<span class="line"><span>跳过[3,4]? 开始3&gt;=lastEnd=3 → 保留</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最终保留: [1,2], [2,3], [3,4] 移除1个区间</span></span></code></pre></div><h3 id="调度类问题" tabindex="-1">调度类问题 <a class="header-anchor" href="#调度类问题" aria-label="Permalink to &quot;调度类问题&quot;">​</a></h3><p>处理任务调度、作业安排等优化问题。</p><p>特点：</p><ul><li>截止时间：考虑任务的截止时间约束</li><li>惩罚避免：尽量减少超时或延迟</li><li>资源优化：最大化资源利用率</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 任务调度问题 - 单机最大收益调度</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> jobScheduling</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">jobs</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 按截止时间排序</span></span>
<span class="line"><span style="color:#E1E4E8;">  jobs.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.deadline </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.deadline);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> selected</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> minHeap</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MinHeap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> currentTime </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> job</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> jobs) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (currentTime </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> job.duration </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> job.deadline) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 可以安排此任务</span></span>
<span class="line"><span style="color:#E1E4E8;">      minHeap.</span><span style="color:#B392F0;">insert</span><span style="color:#E1E4E8;">(job);</span></span>
<span class="line"><span style="color:#E1E4E8;">      selected.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(job);</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentTime </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> job.duration;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (minHeap.</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 检查是否可以用当前任务替换堆中耗时最长的任务</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> longestJob</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> minHeap.</span><span style="color:#B392F0;">peek</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (longestJob.duration </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> job.duration) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        minHeap.</span><span style="color:#B392F0;">extractMin</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        minHeap.</span><span style="color:#B392F0;">insert</span><span style="color:#E1E4E8;">(job);</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(selected.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(longestJob), </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, job);</span></span>
<span class="line"><span style="color:#E1E4E8;">        currentTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> longestJob.duration </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> job.duration;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    scheduledJobs: selected,</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalJobs: selected.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalDuration: currentTime</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 延迟调度问题 - 最小化最大延迟</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> minimizeMaxLateness</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">jobs</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 按截止时间排序（最早截止时间优先）</span></span>
<span class="line"><span style="color:#E1E4E8;">  jobs.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.deadline </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.deadline);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> currentTime </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> maxLateness </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> schedule</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> job</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> jobs) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> completionTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> currentTime </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> job.duration;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> lateness</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, completionTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> job.deadline);</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxLateness </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(maxLateness, lateness);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    schedule.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      job: job.id,</span></span>
<span class="line"><span style="color:#E1E4E8;">      start: currentTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">      completion: completionTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lateness</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    currentTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> completionTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    schedule,</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxLateness</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (最早截止时间优先调度)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>任务: </span></span>
<span class="line"><span>A: 时长3, 截止6</span></span>
<span class="line"><span>B: 时长2, 截止7  </span></span>
<span class="line"><span>C: 时长1, 截止5</span></span>
<span class="line"><span>D: 时长4, 截止9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EDD调度: C→A→B→D</span></span>
<span class="line"><span>时间线:</span></span>
<span class="line"><span>0-1: C (延迟0, 截止5)</span></span>
<span class="line"><span>1-4: A (延迟0, 截止6) </span></span>
<span class="line"><span>4-6: B (延迟0, 截止7)</span></span>
<span class="line"><span>6-10: D (延迟1, 截止9)</span></span>
<span class="line"><span>最大延迟: 1</span></span></code></pre></div><h2 id="贪心算法局限性" tabindex="-1">贪心算法局限性 <a class="header-anchor" href="#贪心算法局限性" aria-label="Permalink to &quot;贪心算法局限性&quot;">​</a></h2><h3 id="贪心陷阱" tabindex="-1">贪心陷阱 <a class="header-anchor" href="#贪心陷阱" aria-label="Permalink to &quot;贪心陷阱&quot;">​</a></h3><p>贪心算法在某些问题中会陷入局部最优，无法得到全局最优解。</p><p>特点：</p><ul><li>短视决策：当前最优可能阻塞更好的未来选择</li><li>路径依赖：早期选择限制后续选择空间</li><li>问题结构：不满足贪心选择性质的问题</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 0-1背包问题 - 贪心算法失败案例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> greedy01Knapsack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">items</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">capacity</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 尝试三种贪心策略</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 策略1: 按价值排序</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> byValue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">items].</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> b.value </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a.value);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result1</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> applyGreedyStrategy</span><span style="color:#E1E4E8;">(byValue, capacity);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 策略2: 按重量排序（轻的优先）</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> byWeight</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">items].</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.weight </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.weight);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result2</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> applyGreedyStrategy</span><span style="color:#E1E4E8;">(byWeight, capacity);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 策略3: 按价值密度排序</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> byDensity</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">items].</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    (b.value </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> b.weight) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> (a.value </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> a.weight)</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result3</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> applyGreedyStrategy</span><span style="color:#E1E4E8;">(byDensity, capacity);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 返回最佳结果</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [result1, result2, result3];</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">best</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">current</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    current.totalValue </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> best.totalValue </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> current </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> best</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> applyGreedyStrategy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">items</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">capacity</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> remaining </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> capacity;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> totalValue </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> selected</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> item</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> items) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (item.weight </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> remaining) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      selected.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(item);</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalValue </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> item.value;</span></span>
<span class="line"><span style="color:#E1E4E8;">      remaining </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> item.weight;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { selected, totalValue, remaining };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对比动态规划解</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> dp01Knapsack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">items</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">capacity</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> items.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(capacity </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> w </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> capacity; w </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> items[i].weight; w</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dp[w] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(dp[w], items[i].value </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> dp[w </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> items[i].weight]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> dp[capacity];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (0-1 背包贪心失败)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>物品: </span></span>
<span class="line"><span>A: 重量3, 价值5, 密度1.67</span></span>
<span class="line"><span>B: 重量2, 价值3, 密度1.50</span></span>
<span class="line"><span>C: 重量1, 价值2, 密度2.00</span></span>
<span class="line"><span>背包容量: 4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>贪心按密度: C(密度2.0) → A(密度1.67) → 总价值7</span></span>
<span class="line"><span>但最优解: B + C → 重量3, 价值5 ✗</span></span>
<span class="line"><span>或: A + C → 重量4, 价值7 ✓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>动态规划得到真正最优解</span></span></code></pre></div><h3 id="识别适用条件" tabindex="-1">识别适用条件 <a class="header-anchor" href="#识别适用条件" aria-label="Permalink to &quot;识别适用条件&quot;">​</a></h3><p>判断问题是否适合使用贪心算法的准则和方法。</p><p>适用条件：</p><ol><li>贪心选择性质：局部最优能导向全局最优</li><li>最优子结构：问题可分解为子问题</li><li>无后效性：选择不影响后续决策空间</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 贪心算法适用性检查</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> GreedySuitability</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> canUseGreedy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problemType</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">constraints</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> checks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;coin-change&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.checkCoinSystem,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;interval-scheduling&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.checkIntervalProperties,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;fractional-knapsack&#39;</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 总是适用</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;01-knapsack&#39;</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 总是不适用</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;minimum-spanning-tree&#39;</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> checker</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> checks[problemType];</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> checker </span><span style="color:#F97583;">?</span><span style="color:#B392F0;"> checker</span><span style="color:#E1E4E8;">(constraints) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generalCheck</span><span style="color:#E1E4E8;">(constraints);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> checkCoinSystem</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">coins</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查硬币系统是否规范（如美国硬币系统）</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> standardSystems</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 美分</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 欧元等</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> standardSystems.</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">system</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      arraysEqual</span><span style="color:#E1E4E8;">(system.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, coins.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">), coins)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> checkIntervalProperties</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">intervals</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查区间问题是否具有贪心性质</span></span>
<span class="line"><span style="color:#6A737D;">    // 对于区间调度，按结束时间排序总是最优</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> generalCheck</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">constraints</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 通用检查：问题是否具有最优子结构和贪心选择性质</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">hasOptimalSubstructure</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">hasGreedyChoice</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> constraints;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> hasOptimalSubstructure </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> hasGreedyChoice;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 贪心与动态规划选择指南</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> selectAlgorithm</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">constraints</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">requirements</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> problem;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (GreedySuitability.</span><span style="color:#B392F0;">canUseGreedy</span><span style="color:#E1E4E8;">(type, constraints)) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      algorithm: </span><span style="color:#9ECBFF;">&#39;greedy&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      reason: </span><span style="color:#9ECBFF;">&#39;问题满足贪心选择性质和最优子结构&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      complexity: </span><span style="color:#9ECBFF;">&#39;通常O(n log n)或更好&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      algorithm: </span><span style="color:#9ECBFF;">&#39;dynamic-programming&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      reason: </span><span style="color:#9ECBFF;">&#39;问题需要全局最优解，贪心可能陷入局部最优&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      complexity: </span><span style="color:#9ECBFF;">&#39;通常O(n²)或O(nW)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (算法选择决策树)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>问题类型?</span></span>
<span class="line"><span>├── 组合优化 → 有贪心选择性质? → 是 → 使用贪心</span></span>
<span class="line"><span>│               ↓否</span></span>
<span class="line"><span>│               使用动态规划</span></span>
<span class="line"><span>├── 调度问题 → 可排序解决? → 是 → 使用贪心  </span></span>
<span class="line"><span>│               ↓否</span></span>
<span class="line"><span>│               使用其他方法</span></span>
<span class="line"><span>└── 图论问题 → 最小生成树/最短路? → 是 → 使用贪心</span></span>
<span class="line"><span>                  ↓否</span></span>
<span class="line"><span>                  使用其他算法</span></span></code></pre></div>`,83)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
