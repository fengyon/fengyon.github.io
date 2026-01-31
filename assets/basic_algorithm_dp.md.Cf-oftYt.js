import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"动态规划 DP","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是动态规划","slug":"什么是动态规划","link":"#什么是动态规划","children":[]},{"level":2,"title":"动态规划核心要素","slug":"动态规划核心要素","link":"#动态规划核心要素","children":[{"level":3,"title":"状态定义","slug":"状态定义","link":"#状态定义","children":[]},{"level":3,"title":"状态转移方程","slug":"状态转移方程","link":"#状态转移方程","children":[]}]},{"level":2,"title":"动态规划实现方法","slug":"动态规划实现方法","link":"#动态规划实现方法","children":[{"level":3,"title":"自顶向下 - 记忆化搜索","slug":"自顶向下-记忆化搜索","link":"#自顶向下-记忆化搜索","children":[]},{"level":3,"title":"自底向上 - 表格填充","slug":"自底向上-表格填充","link":"#自底向上-表格填充","children":[]}]},{"level":2,"title":"经典动态规划问题","slug":"经典动态规划问题","link":"#经典动态规划问题","children":[{"level":3,"title":"最长公共子序列 (LCS)","slug":"最长公共子序列-lcs","link":"#最长公共子序列-lcs","children":[]},{"level":3,"title":"最长递增子序列 (LIS)","slug":"最长递增子序列-lis","link":"#最长递增子序列-lis","children":[]}]},{"level":2,"title":"动态规划优化技巧","slug":"动态规划优化技巧","link":"#动态规划优化技巧","children":[{"level":3,"title":"状态压缩","slug":"状态压缩","link":"#状态压缩","children":[]},{"level":3,"title":"状态重新定义","slug":"状态重新定义","link":"#状态重新定义","children":[]}]},{"level":2,"title":"动态规划解题框架","slug":"动态规划解题框架","link":"#动态规划解题框架","children":[{"level":3,"title":"问题分析步骤","slug":"问题分析步骤","link":"#问题分析步骤","children":[]},{"level":3,"title":"调试与验证","slug":"调试与验证","link":"#调试与验证","children":[]}]}],"relativePath":"basic/algorithm/dp.md","filePath":"basic/algorithm/dp.md"}'),o={name:"basic/algorithm/dp.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/algorithm/dp.md for this page in Markdown format</div><h1 id="动态规划-dp" tabindex="-1">动态规划 DP <a class="header-anchor" href="#动态规划-dp" aria-label="Permalink to &quot;动态规划 DP&quot;">​</a></h1><h2 id="什么是动态规划" tabindex="-1">什么是动态规划 <a class="header-anchor" href="#什么是动态规划" aria-label="Permalink to &quot;什么是动态规划&quot;">​</a></h2><p>动态规划是通过将复杂问题分解为相互重叠的子问题，并存储子问题的解来避免重复计算的高效算法范式。其核心思想是“记住过去的结果”来优化未来计算。</p><p>特点：</p><ul><li>重叠子问题：子问题被多次重复计算</li><li>最优子结构：问题的最优解包含子问题的最优解</li><li>状态存储：使用表格或数组存储中间结果</li><li>递推关系：通过状态转移方程描述问题演进</li></ul><p>示意图 (斐波那契数列计算对比)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>递归方法（大量重复）：</span></span>
<span class="line"><span>fib(5)</span></span>
<span class="line"><span>├── fib(4)</span></span>
<span class="line"><span>│   ├── fib(3)</span></span>
<span class="line"><span>│   │   ├── fib(2)</span></span>
<span class="line"><span>│   │   └── fib(1)</span></span>
<span class="line"><span>│   └── fib(2)</span></span>
<span class="line"><span>└── fib(3)</span></span>
<span class="line"><span>    ├── fib(2)</span></span>
<span class="line"><span>    └── fib(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>动态规划（无重复）：</span></span>
<span class="line"><span>fib[0]=0, fib[1]=1</span></span>
<span class="line"><span>fib[2]=fib[1]+fib[0]=1</span></span>
<span class="line"><span>fib[3]=fib[2]+fib[1]=2</span></span>
<span class="line"><span>fib[4]=fib[3]+fib[2]=3</span></span>
<span class="line"><span>fib[5]=fib[4]+fib[3]=5</span></span></code></pre></div><h2 id="动态规划核心要素" tabindex="-1">动态规划核心要素 <a class="header-anchor" href="#动态规划核心要素" aria-label="Permalink to &quot;动态规划核心要素&quot;">​</a></h2><h3 id="状态定义" tabindex="-1">状态定义 <a class="header-anchor" href="#状态定义" aria-label="Permalink to &quot;状态定义&quot;">​</a></h3><p>状态是描述问题子集的变量，需要完整刻画子问题的特征。</p><p>特点：</p><ul><li>完备性：状态应包含解决问题的足够信息</li><li>无后效性：未来状态只与当前状态有关，与如何到达当前状态无关</li><li>维度选择：根据问题复杂度选择一维、二维或多维状态</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 不同问题的状态定义示例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> stateExamples</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 斐波那契：一维状态，dp[i]表示第i个斐波那契数</span></span>
<span class="line"><span style="color:#B392F0;">  fibonacci</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; dp[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> dp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 背包问题：二维状态，dp[i][w]表示前i个物品在容量w下的最大价值</span></span>
<span class="line"><span style="color:#B392F0;">  knapsack</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">items</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">capacity</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> items.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: n </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(capacity </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> dp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 最长公共子序列：二维状态，dp[i][j]表示X前i字符和Y前j字符的LCS长度</span></span>
<span class="line"><span style="color:#B392F0;">  lcs</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">text1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">text2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> text1.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> text2.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: m </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> dp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="状态转移方程" tabindex="-1">状态转移方程 <a class="header-anchor" href="#状态转移方程" aria-label="Permalink to &quot;状态转移方程&quot;">​</a></h3><p>状态转移方程描述状态之间的递推关系，是动态规划的灵魂。</p><p>特点：</p><ul><li>数学表达：用公式描述状态演进规律</li><li>边界条件：定义初始状态和终止条件</li><li>递推方向：确定状态计算的顺序依赖</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 经典问题的状态转移方程实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> StateTransition</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 斐波那契：F(n) = F(n-1) + F(n-2)</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> fibonacci</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> prev2 </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">, prev1 </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> prev1 </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> prev2;</span></span>
<span class="line"><span style="color:#E1E4E8;">      prev2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prev1;</span></span>
<span class="line"><span style="color:#E1E4E8;">      prev1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> current;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> prev1;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 爬楼梯：dp[i] = dp[i-1] + dp[i-2]</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> climbStairs</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; dp[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dp[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> dp[n];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (状态转移可视化)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>斐波那契状态转移：</span></span>
<span class="line"><span>状态: dp[0] dp[1] dp[2] dp[3] dp[4] dp[5]</span></span>
<span class="line"><span>初始:  0     1     -     -     -     -</span></span>
<span class="line"><span>步骤1:          →   1     -     -     -    (dp[2]=dp[1]+dp[0])</span></span>
<span class="line"><span>步骤2:               →   2     -     -    (dp[3]=dp[2]+dp[1])</span></span>
<span class="line"><span>步骤3:                    →   3     -    (dp[4]=dp[3]+dp[2])</span></span>
<span class="line"><span>步骤4:                         →   5    (dp[5]=dp[4]+dp[3])</span></span></code></pre></div><h2 id="动态规划实现方法" tabindex="-1">动态规划实现方法 <a class="header-anchor" href="#动态规划实现方法" aria-label="Permalink to &quot;动态规划实现方法&quot;">​</a></h2><h3 id="自顶向下-记忆化搜索" tabindex="-1">自顶向下 - 记忆化搜索 <a class="header-anchor" href="#自顶向下-记忆化搜索" aria-label="Permalink to &quot;自顶向下 - 记忆化搜索&quot;">​</a></h3><p>从原问题出发，递归分解为子问题，使用备忘录存储已计算结果。</p><p>特点：</p><ul><li>递归思维：符合问题自然的分解方式</li><li>惰性计算：只计算需要的子问题</li><li>代码直观：易于理解和实现</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 记忆化搜索实现斐波那契</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> memoizedFibonacci</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">memo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (memo.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(n)) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> memo.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(n);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> memoizedFibonacci</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, memo) </span><span style="color:#F97583;">+</span><span style="color:#B392F0;"> memoizedFibonacci</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">, memo);</span></span>
<span class="line"><span style="color:#E1E4E8;">  memo.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(n, result);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 记忆化搜索实现背包问题</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> memoizedKnapsack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">weights</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">values</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">capacity</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> memo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> dfs</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">remainingCapacity</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> weights.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> remainingCapacity </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">i</span><span style="color:#9ECBFF;">},\${</span><span style="color:#E1E4E8;">remainingCapacity</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (memo.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key)) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> memo.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 不选当前物品</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> maxValue </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> dfs</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, remainingCapacity);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 选当前物品（如果容量允许）</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (weights[i] </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> remainingCapacity) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      maxValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxValue,</span></span>
<span class="line"><span style="color:#E1E4E8;">        values[i] </span><span style="color:#F97583;">+</span><span style="color:#B392F0;"> dfs</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, remainingCapacity </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> weights[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    memo.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, maxValue);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> maxValue;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> dfs</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, capacity);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (记忆化搜索调用过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>knapsack(0,5)</span></span>
<span class="line"><span>├── 不选物品0: knapsack(1,5) → 查表/计算</span></span>
<span class="line"><span>└── 选物品0: 价值10 + knapsack(1,3) → 查表/计算</span></span>
<span class="line"><span></span></span>
<span class="line"><span>计算结果存入: memo[&quot;0,5&quot;] = max(不选价值, 选择价值)</span></span></code></pre></div><h3 id="自底向上-表格填充" tabindex="-1">自底向上 - 表格填充 <a class="header-anchor" href="#自底向上-表格填充" aria-label="Permalink to &quot;自底向上 - 表格填充&quot;">​</a></h3><p>从最小子问题开始，逐步构建更大问题的解，填充 DP 表格。</p><p>特点：</p><ul><li>迭代计算：避免递归开销</li><li>完整计算：计算所有子问题</li><li>空间优化：通常可以优化状态存储</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 自底向上实现0-1背包问题</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> bottomUpKnapsack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">weights</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">values</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">capacity</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> weights.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: n </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(capacity </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 填充DP表格</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> w </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; w </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> capacity; w</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 不选第i个物品</span></span>
<span class="line"><span style="color:#E1E4E8;">      dp[i][w] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][w];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 选第i个物品（如果容量允许）</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (w </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> weights[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        dp[i][w] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          dp[i][w],</span></span>
<span class="line"><span style="color:#E1E4E8;">          values[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][w </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> weights[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]]</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxValue: dp[n][capacity],</span></span>
<span class="line"><span style="color:#E1E4E8;">    dpTable: dp</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (背包问题 DP 表格)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>容量:   0   1   2   3   4   5</span></span>
<span class="line"><span>物品0: [0,  0,  0,  0,  0,  0]  // 初始化</span></span>
<span class="line"><span>物品1: [0,  0,  0,  0,  10, 10] // 物品1(重量4,价值10)</span></span>
<span class="line"><span>物品2: [0,  0,  0,  5,  10, 10] // 物品2(重量3,价值5)</span></span>
<span class="line"><span>物品3: [0,  0,  0,  5,  10, 15] // 物品3(重量1,价值5)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dp[3][5] = max(dp[2][5], 价值5 + dp[2][4]) = max(10, 5+10)=15</span></span></code></pre></div><h2 id="经典动态规划问题" tabindex="-1">经典动态规划问题 <a class="header-anchor" href="#经典动态规划问题" aria-label="Permalink to &quot;经典动态规划问题&quot;">​</a></h2><h3 id="最长公共子序列-lcs" tabindex="-1">最长公共子序列 (LCS) <a class="header-anchor" href="#最长公共子序列-lcs" aria-label="Permalink to &quot;最长公共子序列 (LCS)&quot;">​</a></h3><p>找到两个序列的最长公共子序列，展示二维 DP 的典型应用。</p><p>特点：</p><ul><li>序列比对：比较两个序列的相似度</li><li>字符匹配：根据字符是否相等决定状态转移</li><li>路径回溯：通过 DP 表格回溯构造最优解</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 最长公共子序列</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> longestCommonSubsequence</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">text2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> text1.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> text2.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: m </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 填充DP表格</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (text1[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> text2[j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        dp[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        dp[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j], dp[i][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 回溯构造LCS</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> lcs </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m, j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (text1[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> text2[j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      lcs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> text1[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> lcs;</span></span>
<span class="line"><span style="color:#E1E4E8;">      i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">][j] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> dp[i][j </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    length: dp[m][n],</span></span>
<span class="line"><span style="color:#E1E4E8;">    sequence: lcs,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dpTable: dp</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (LCS 状态转移)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>文本1: &quot;ABCD&quot;, 文本2: &quot;ACBD&quot;</span></span>
<span class="line"><span>DP表格:</span></span>
<span class="line"><span>    &quot;&quot; A C B D</span></span>
<span class="line"><span>&quot;&quot;   0 0 0 0 0</span></span>
<span class="line"><span>A    0 1 1 1 1  </span></span>
<span class="line"><span>B    0 1 1 2 2</span></span>
<span class="line"><span>C    0 1 2 2 2</span></span>
<span class="line"><span>D    0 1 2 2 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>状态转移：</span></span>
<span class="line"><span>- 字符相等: dp[i][j] = dp[i-1][j-1] + 1</span></span>
<span class="line"><span>- 字符不等: dp[i][j] = max(dp[i-1][j], dp[i][j-1])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LCS: &quot;ABD&quot; 或 &quot;ACD&quot;，长度3</span></span></code></pre></div><h3 id="最长递增子序列-lis" tabindex="-1">最长递增子序列 (LIS) <a class="header-anchor" href="#最长递增子序列-lis" aria-label="Permalink to &quot;最长递增子序列 (LIS)&quot;">​</a></h3><p>找到序列中最长的严格递增子序列，展示一维 DP 的优化技巧。</p><p>特点：</p><ul><li>单序列分析：在单个序列中寻找模式</li><li>二分优化：使用耐心排序优化到 O(n log n)</li><li>多种解法：DP、贪心+二分等不同方法</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 最长递增子序列 - O(n²) DP解法</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> longestIncreasingSubsequence</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">nums</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (nums.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(nums.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> maxLength </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> nums.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> i; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (nums[i] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> nums[j]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        dp[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(dp[i], dp[j] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxLength </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(maxLength, dp[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> maxLength;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 最长递增子序列 - O(n log n) 优化解法</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> optimizedLIS</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">nums</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> tails</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];  </span><span style="color:#6A737D;">// tails[i]表示长度为i+1的LIS的最小结尾值</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> num</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> nums) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 二分查找插入位置</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> left </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">, right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tails.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> mid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((left </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> right) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (tails[mid] </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> num) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mid;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> tails.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tails.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(num);  </span><span style="color:#6A737D;">// 扩展LIS</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tails[left] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> num;  </span><span style="color:#6A737D;">// 替换为更小的结尾值</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> tails.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (耐心排序过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>序列: [10, 9, 2, 5, 3, 7, 101, 18]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>堆栈演进:</span></span>
<span class="line"><span>数字10: [10]</span></span>
<span class="line"><span>数字9:  [9]        (替换10)</span></span>
<span class="line"><span>数字2:  [2]        (替换9) </span></span>
<span class="line"><span>数字5:  [2, 5]     (新建堆栈)</span></span>
<span class="line"><span>数字3:  [2, 3]     (替换5)</span></span>
<span class="line"><span>数字7:  [2, 3, 7]  (新建堆栈)</span></span>
<span class="line"><span>数字101:[2, 3, 7, 101] (新建堆栈)</span></span>
<span class="line"><span>数字18: [2, 3, 7, 18]  (替换101)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LIS长度: 4 (如 [2,3,7,18] 或 [2,3,7,101])</span></span></code></pre></div><h2 id="动态规划优化技巧" tabindex="-1">动态规划优化技巧 <a class="header-anchor" href="#动态规划优化技巧" aria-label="Permalink to &quot;动态规划优化技巧&quot;">​</a></h2><h3 id="状态压缩" tabindex="-1">状态压缩 <a class="header-anchor" href="#状态压缩" aria-label="Permalink to &quot;状态压缩&quot;">​</a></h3><p>通过观察状态依赖关系，减少 DP 数组的维度，节省空间。</p><p>特点：</p><ul><li>空间优化：将 O(n²) 空间降为 O(n) 或 O(1)</li><li>滚动数组：只保留必要的状态层</li><li>位压缩：使用位运算表示状态</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 背包问题空间优化 - 滚动数组</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> optimizedKnapsack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">weights</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">values</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">capacity</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> weights.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(capacity </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 逆序更新，避免覆盖前一状态</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> w </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> capacity; w </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> weights[i]; w</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dp[w] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(dp[w], values[i] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> dp[w </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> weights[i]]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> dp[capacity];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 爬楼梯空间优化 - 只用三个变量</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> optimizedClimbStairs</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> prev2 </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// dp[i-2]</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> prev1 </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// dp[i-1]</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> current;    </span><span style="color:#6A737D;">// dp[i]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prev1 </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> prev2;</span></span>
<span class="line"><span style="color:#E1E4E8;">    prev2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prev1;</span></span>
<span class="line"><span style="color:#E1E4E8;">    prev1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> current;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> current;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (背包问题状态压缩)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>未优化：二维数组</span></span>
<span class="line"><span>i=0: [0,0,0,0,10,10] </span></span>
<span class="line"><span>i=1: [0,0,0,5,10,10]  ← 需要保存前一行</span></span>
<span class="line"><span>i=2: [0,0,0,5,10,15]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>优化后：一维数组，逆序更新</span></span>
<span class="line"><span>初始: [0,0,0,0,0,0]</span></span>
<span class="line"><span>处理物品0后: [0,0,0,0,10,10]  </span></span>
<span class="line"><span>处理物品1后: [0,0,0,5,10,10]   ← 逆序更新避免覆盖</span></span>
<span class="line"><span>处理物品2后: [0,0,0,5,10,15]</span></span></code></pre></div><h3 id="状态重新定义" tabindex="-1">状态重新定义 <a class="header-anchor" href="#状态重新定义" aria-label="Permalink to &quot;状态重新定义&quot;">​</a></h3><p>有时重新定义状态可以简化状态转移方程或降低复杂度。</p><p>特点：</p><ul><li>视角转换：从不同角度理解问题</li><li>简化转移：使状态转移更直接</li><li>降维打击：将高维问题转化为低维</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 股票买卖问题 - 状态机DP</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> maxProfit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">prices</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> prices.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 状态定义：dp[i][0]表示第i天不持有股票的最大利润</span></span>
<span class="line"><span style="color:#6A737D;">  //          dp[i][1]表示第i天持有股票的最大利润</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> dp0 </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;           </span><span style="color:#6A737D;">// 初始不持有，利润为0</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> dp1 </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;">prices[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];  </span><span style="color:#6A737D;">// 初始持有，需要购买，利润为负</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newDp0</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(dp0, dp1 </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> prices[i]);  </span><span style="color:#6A737D;">// 卖出或保持</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newDp1</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(dp1, dp0 </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> prices[i]);  </span><span style="color:#6A737D;">// 买入或保持</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp0 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newDp0;</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newDp1;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> dp0;  </span><span style="color:#6A737D;">// 最后不持有股票才能获得最大利润</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (股票买卖状态转移)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>价格: [7,1,5,3,6,4]</span></span>
<span class="line"><span>状态转移:</span></span>
<span class="line"><span>天数 价格 不持有dp0      持有dp1</span></span>
<span class="line"><span>0    7    0             -7</span></span>
<span class="line"><span>1    1    max(0,-7+1)=0 max(-7,0-1)=-1</span></span>
<span class="line"><span>2    5    max(0,-1+5)=4 max(-1,0-5)=-1</span></span>
<span class="line"><span>3    3    max(4,-1+3)=4 max(-1,4-3)=1</span></span>
<span class="line"><span>4    6    max(4,1+6)=7  max(1,4-6)=1</span></span>
<span class="line"><span>5    4    max(7,1+4)=7  max(1,7-4)=3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最大利润: 7 (第2天买入1，第3天卖出5，第4天买入3，第5天卖出6)</span></span></code></pre></div><h2 id="动态规划解题框架" tabindex="-1">动态规划解题框架 <a class="header-anchor" href="#动态规划解题框架" aria-label="Permalink to &quot;动态规划解题框架&quot;">​</a></h2><h3 id="问题分析步骤" tabindex="-1">问题分析步骤 <a class="header-anchor" href="#问题分析步骤" aria-label="Permalink to &quot;问题分析步骤&quot;">​</a></h3><p>系统化的 DP 问题分析方法，确保正确识别和解决问题。</p><p>分析流程：</p><ol><li>判断是否具有最优子结构</li><li>定义合适的状态变量</li><li>推导状态转移方程</li><li>确定初始条件和边界</li><li>选择实现方法 (自顶向下/自底向上)</li><li>考虑空间优化可能性</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 通用DP解题模板</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> DPTemplate</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> solve</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 1. 状态定义</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> state</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">defineState</span><span style="color:#E1E4E8;">(problem);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 2. 初始条件</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initializeState</span><span style="color:#E1E4E8;">(state, problem);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 3. 状态转移</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> condition</span><span style="color:#F97583;"> of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getTransitionOrder</span><span style="color:#E1E4E8;">(problem)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateState</span><span style="color:#E1E4E8;">(state, condition, problem);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 4. 提取结果</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">extractResult</span><span style="color:#E1E4E8;">(state, problem);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> defineState</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 根据问题特性定义状态结构</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;defineState must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> initializeState</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置初始状态和边界条件</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;initializeState must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getTransitionOrder</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 确定状态转移的顺序</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;getTransitionOrder must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> updateState</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">condition</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 根据状态转移方程更新状态</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;updateState must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> extractResult</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 从最终状态提取问题答案</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;extractResult must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="调试与验证" tabindex="-1">调试与验证 <a class="header-anchor" href="#调试与验证" aria-label="Permalink to &quot;调试与验证&quot;">​</a></h3><p>DP 算法的调试技巧和验证方法，确保正确性。</p><p>调试策略：</p><ul><li>打印 DP 表格：可视化状态演进过程</li><li>小规模测试：先用简单例子验证</li><li>边界检查：特别注意边界条件处理</li><li>对比验证：与暴力解法或已知结果对比</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// DP调试工具函数</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> DPDebugger</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 打印DP表格（适用于二维DP）</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> printDPTable</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dp</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">rowLabels</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [], </span><span style="color:#FFAB70;">colLabels</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DP Table:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 打印列标签</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (colLabels.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;    &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> colLabels.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">label</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        label.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">padStart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      ).</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 打印表格内容</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> dp.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> row </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (rowLabels.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#E1E4E8;"> i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        row </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> rowLabels[i].</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">padStart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39; &#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        row </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> i.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">padStart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39; &#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      row </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> dp[i].</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> val.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">padStart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(row);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 验证DP结果与暴力解的一致性</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> verifyWithBruteForce</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dpSolver</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">bruteForceSolver</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">testCases</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> testCase</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> testCases) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> dpResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> dpSolver</span><span style="color:#E1E4E8;">(testCase);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> bruteResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> bruteForceSolver</span><span style="color:#E1E4E8;">(testCase);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (dpResult </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> bruteResult) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Test case failed:\`</span><span style="color:#E1E4E8;">, testCase);</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`DP result: \${</span><span style="color:#E1E4E8;">dpResult</span><span style="color:#9ECBFF;">}, Brute force: \${</span><span style="color:#E1E4E8;">bruteResult</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;All test cases passed!&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,77)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
