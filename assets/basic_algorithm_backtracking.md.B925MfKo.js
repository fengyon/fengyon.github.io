import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"回溯算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是回溯算法","slug":"什么是回溯算法","link":"#什么是回溯算法","children":[]},{"level":2,"title":"回溯算法核心概念","slug":"回溯算法核心概念","link":"#回溯算法核心概念","children":[{"level":3,"title":"状态空间树","slug":"状态空间树","link":"#状态空间树","children":[]},{"level":3,"title":"剪枝函数","slug":"剪枝函数","link":"#剪枝函数","children":[]}]},{"level":2,"title":"回溯算法模板","slug":"回溯算法模板","link":"#回溯算法模板","children":[{"level":3,"title":"通用回溯框架","slug":"通用回溯框架","link":"#通用回溯框架","children":[]},{"level":3,"title":"迭代回溯实现","slug":"迭代回溯实现","link":"#迭代回溯实现","children":[]}]},{"level":2,"title":"经典回溯问题","slug":"经典回溯问题","link":"#经典回溯问题","children":[{"level":3,"title":"N 皇后问题","slug":"n-皇后问题","link":"#n-皇后问题","children":[]},{"level":3,"title":"数独求解","slug":"数独求解","link":"#数独求解","children":[]}]},{"level":2,"title":"回溯优化技巧","slug":"回溯优化技巧","link":"#回溯优化技巧","children":[{"level":3,"title":"约束传播","slug":"约束传播","link":"#约束传播","children":[]},{"level":3,"title":"记忆化回溯","slug":"记忆化回溯","link":"#记忆化回溯","children":[]}]},{"level":2,"title":"回溯与其它算法对比","slug":"回溯与其它算法对比","link":"#回溯与其它算法对比","children":[{"level":3,"title":"回溯 vs 动态规划","slug":"回溯-vs-动态规划","link":"#回溯-vs-动态规划","children":[]},{"level":3,"title":"回溯应用场景识别","slug":"回溯应用场景识别","link":"#回溯应用场景识别","children":[]}]}],"relativePath":"basic/algorithm/backtracking.md","filePath":"basic/algorithm/backtracking.md"}'),o={name:"basic/algorithm/backtracking.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/algorithm/backtracking.md for this page in Markdown format</div><h1 id="回溯算法" tabindex="-1">回溯算法 <a class="header-anchor" href="#回溯算法" aria-label="Permalink to &quot;回溯算法&quot;">​</a></h1><h2 id="什么是回溯算法" tabindex="-1">什么是回溯算法 <a class="header-anchor" href="#什么是回溯算法" aria-label="Permalink to &quot;什么是回溯算法&quot;">​</a></h2><p>回溯算法是一种通过试错来寻找问题解决方案的算法。它通过深度优先搜索的方式系统地探索所有可能的候选解，当发现当前路径不可能得到正确解时，立即回溯并尝试其他路径。</p><p>特点：</p><ul><li>系统性搜索：遍历所有可能的解空间</li><li>剪枝优化：在搜索过程中提前排除无效路径</li><li>递归实现：自然地使用递归进行状态探索和回退</li><li>通用性强：适用于组合、排列、子集等各类搜索问题</li></ul><p>示意图 (回溯搜索树)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>开始</span></span>
<span class="line"><span>  ├── 选择A → 深入 → 失败 → 回溯</span></span>
<span class="line"><span>  ├── 选择B → 深入 → 成功 → 记录解</span></span>
<span class="line"><span>  └── 选择C → 深入 → 剪枝 → 回溯</span></span></code></pre></div><h2 id="回溯算法核心概念" tabindex="-1">回溯算法核心概念 <a class="header-anchor" href="#回溯算法核心概念" aria-label="Permalink to &quot;回溯算法核心概念&quot;">​</a></h2><h3 id="状态空间树" tabindex="-1">状态空间树 <a class="header-anchor" href="#状态空间树" aria-label="Permalink to &quot;状态空间树&quot;">​</a></h3><p>回溯算法将问题解空间组织成树形结构，每个节点代表一个部分解，叶子节点代表完整解。</p><p>特点：</p><ul><li>深度优先：沿着分支深入到底再回溯</li><li>路径表示：从根到叶子的路径代表一个候选解</li><li>节点扩展：每个节点可能产生多个子节点</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 状态空间树的通用表示</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> StateSpaceNode</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">parent</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">choice</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.state </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> state;        </span><span style="color:#6A737D;">// 当前状态</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent;      </span><span style="color:#6A737D;">// 父节点</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.choice </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> choice;      </span><span style="color:#6A737D;">// 导致当前状态的决策</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.children </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];        </span><span style="color:#6A737D;">// 子节点</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.level </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> parent.level </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 深度</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 判断是否为解节点</span></span>
<span class="line"><span style="color:#B392F0;">  isSolution</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;isSolution must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 生成可能的下一步选择</span></span>
<span class="line"><span style="color:#B392F0;">  getPossibleChoices</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;getPossibleChoices must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 应用选择生成新状态</span></span>
<span class="line"><span style="color:#B392F0;">  applyChoice</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">choice</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;applyChoice must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (状态空间树结构)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>根节点(初始状态)</span></span>
<span class="line"><span>  ├── 选择1 → 状态A</span></span>
<span class="line"><span>  │   ├── 选择1.1 → 状态A1</span></span>
<span class="line"><span>  │   └── 选择1.2 → 状态A2</span></span>
<span class="line"><span>  ├── 选择2 → 状态B</span></span>
<span class="line"><span>  │   ├── 选择2.1 → 状态B1</span></span>
<span class="line"><span>  │   └── 选择2.2 → 状态B2</span></span>
<span class="line"><span>  └── 选择3 → 状态C</span></span></code></pre></div><h3 id="剪枝函数" tabindex="-1">剪枝函数 <a class="header-anchor" href="#剪枝函数" aria-label="Permalink to &quot;剪枝函数&quot;">​</a></h3><p>剪枝函数在搜索过程中提前识别并排除不可能产生有效解的路径，大幅提升算法效率。</p><p>特点：</p><ul><li>可行性剪枝：排除违反约束条件的分支</li><li>最优性剪枝：在优化问题中排除非最优分支</li><li>重复性剪枝：避免搜索相同状态多次</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 剪枝策略管理器</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> PruningStrategy</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> feasibilityPrune</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">constraints</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查当前状态是否满足所有约束</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> constraint</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> constraints) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">constraint</span><span style="color:#E1E4E8;">(state)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 需要剪枝</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 不需要剪枝</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> optimalityPrune</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">bestSoFar</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">isMaximization</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查当前状态是否可能优于已知最优解</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (bestSoFar </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentValue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> state.</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (isMaximization) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> currentValue </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> state.</span><span style="color:#B392F0;">getPotential</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> bestSoFar;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> currentValue </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> state.</span><span style="color:#B392F0;">getPotential</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> bestSoFar;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> symmetryPrune</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">visitedStates</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查是否已经访问过等价状态</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> stateKey</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> state.</span><span style="color:#B392F0;">getCanonicalForm</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (visitedStates.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(stateKey)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    visitedStates.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(stateKey);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// N皇后问题的剪枝函数示例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> nQueensPrune</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">col</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 检查列冲突</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> row; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (board[i][col] </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Q&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 检查左上对角线</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> row </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> col </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">, j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (board[i][j] </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Q&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 检查右上对角线</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> row </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> col </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> board.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">, j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (board[i][j] </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Q&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 不需要剪枝</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (剪枝效果)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>完整搜索树:</span></span>
<span class="line"><span>根</span></span>
<span class="line"><span>├── A → A1 → A2 → 解1</span></span>
<span class="line"><span>├── B → B1 → ✗ (剪枝)</span></span>
<span class="line"><span>├── C → ✗ (剪枝) </span></span>
<span class="line"><span>└── D → D1 → D2 → 解2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>剪枝后实际搜索:</span></span>
<span class="line"><span>根</span></span>
<span class="line"><span>├── A → A1 → A2 → 解1</span></span>
<span class="line"><span>└── D → D1 → D2 → 解2</span></span>
<span class="line"><span>跳过B、C分支，节省大量计算</span></span></code></pre></div><h2 id="回溯算法模板" tabindex="-1">回溯算法模板 <a class="header-anchor" href="#回溯算法模板" aria-label="Permalink to &quot;回溯算法模板&quot;">​</a></h2><h3 id="通用回溯框架" tabindex="-1">通用回溯框架 <a class="header-anchor" href="#通用回溯框架" aria-label="Permalink to &quot;通用回溯框架&quot;">​</a></h3><p>回溯算法遵循固定的模式：选择、递归、撤销选择。</p><p>特点：</p><ul><li>三步骤：做出选择 → 递归探索 → 撤销选择</li><li>路径维护：在递归过程中维护当前选择路径</li><li>结果收集：在叶子节点或满足条件时记录解</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 通用回溯模板</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> backtrackTemplate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> currentSolution</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> backtrack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">decisionPoint</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 1. 检查是否找到解</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">isSolution</span><span style="color:#E1E4E8;">(currentSolution, problem)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">currentSolution]);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 2. 遍历所有可能选择</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> choices</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> generateChoices</span><span style="color:#E1E4E8;">(decisionPoint, currentSolution, problem);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> choice</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> choices) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 3. 剪枝：检查选择是否可行</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">isValidChoice</span><span style="color:#E1E4E8;">(choice, currentSolution, problem)) {</span></span>
<span class="line"><span style="color:#F97583;">        continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 4. 做出选择</span></span>
<span class="line"><span style="color:#B392F0;">      makeChoice</span><span style="color:#E1E4E8;">(choice, currentSolution, problem);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 5. 递归探索</span></span>
<span class="line"><span style="color:#B392F0;">      backtrack</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">nextDecisionPoint</span><span style="color:#E1E4E8;">(decisionPoint, choice));</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 6. 撤销选择</span></span>
<span class="line"><span style="color:#B392F0;">      undoChoice</span><span style="color:#E1E4E8;">(choice, currentSolution, problem);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  backtrack</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">initialDecisionPoint</span><span style="color:#E1E4E8;">(problem));</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 具体实现的示例 - 排列问题</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> permutations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">nums</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> used</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(nums.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> backtrack</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 找到完整排列</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (current.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#E1E4E8;"> nums.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">current]);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> nums.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 剪枝：跳过已使用的元素</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (used[i]) </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 做出选择</span></span>
<span class="line"><span style="color:#E1E4E8;">      used[i] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      current.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(nums[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 递归探索</span></span>
<span class="line"><span style="color:#B392F0;">      backtrack</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 撤销选择</span></span>
<span class="line"><span style="color:#E1E4E8;">      current.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      used[i] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  backtrack</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (回溯过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>排列[1,2,3]的回溯：</span></span>
<span class="line"><span>开始: []</span></span>
<span class="line"><span>选择1: [1]</span></span>
<span class="line"><span>  选择2: [1,2] </span></span>
<span class="line"><span>    选择3: [1,2,3] → 记录解</span></span>
<span class="line"><span>    撤销3: [1,2]</span></span>
<span class="line"><span>  撤销2: [1]</span></span>
<span class="line"><span>  选择3: [1,3]</span></span>
<span class="line"><span>    选择2: [1,3,2] → 记录解</span></span>
<span class="line"><span>    撤销2: [1,3]</span></span>
<span class="line"><span>  撤销3: [1]</span></span>
<span class="line"><span>撤销1: []</span></span>
<span class="line"><span>选择2: [2] ... (继续)</span></span></code></pre></div><h3 id="迭代回溯实现" tabindex="-1">迭代回溯实现 <a class="header-anchor" href="#迭代回溯实现" aria-label="Permalink to &quot;迭代回溯实现&quot;">​</a></h3><p>使用显式栈模拟递归过程，避免递归深度限制并提供更多控制。</p><p>特点：</p><ul><li>显式栈：手动管理搜索状态</li><li>避免递归：解决深度过大时的栈溢出问题</li><li>灵活控制：可以更精细地控制搜索过程</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 迭代回溯框架</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> iterativeBacktrack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> stack</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [{</span></span>
<span class="line"><span style="color:#E1E4E8;">    state: problem.initialState,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    nextChoiceIndex: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  }];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (stack.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> stack[stack.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查是否还有未尝试的选择</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> choices</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> problem.</span><span style="color:#B392F0;">getChoices</span><span style="color:#E1E4E8;">(current.state);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (current.nextChoiceIndex </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> choices.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 当前节点的所有选择都已尝试，回溯</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 获取下一个选择</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> choice</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> choices[current.nextChoiceIndex];</span></span>
<span class="line"><span style="color:#E1E4E8;">    current.nextChoiceIndex</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查选择是否有效</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">problem.</span><span style="color:#B392F0;">isValidChoice</span><span style="color:#E1E4E8;">(choice, current.state, current.path)) {</span></span>
<span class="line"><span style="color:#F97583;">      continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 应用选择</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newState</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> problem.</span><span style="color:#B392F0;">applyChoice</span><span style="color:#E1E4E8;">(choice, current.state);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newPath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">current.path, choice];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查是否找到解</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (problem.</span><span style="color:#B392F0;">isSolution</span><span style="color:#E1E4E8;">(newState, newPath)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        state: newState,</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: newPath</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 如果只需要一个解，可以在这里返回</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (problem.findOne) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 继续探索</span></span>
<span class="line"><span style="color:#E1E4E8;">    stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      state: newState,</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: newPath,</span></span>
<span class="line"><span style="color:#E1E4E8;">      nextChoiceIndex: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用迭代回溯解决子集问题</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> subsetsIterative</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">nums</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [[]];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> stack</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [{</span></span>
<span class="line"><span style="color:#E1E4E8;">    index: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: []</span></span>
<span class="line"><span style="color:#E1E4E8;">  }];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (stack.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> current.index; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> nums.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> newPath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">current.path, nums[i]];</span></span>
<span class="line"><span style="color:#E1E4E8;">      results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(newPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 只添加索引更大的元素，避免重复</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> &lt;</span><span style="color:#E1E4E8;"> nums.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          index: i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: newPath</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (迭代回溯栈状态)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始栈: [{index:0, path:[]}]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>弹出: {index:0, path:[]}</span></span>
<span class="line"><span>生成: [1], [1,2], [1,2,3], [1,3]</span></span>
<span class="line"><span>入栈: {index:2, path:[1]}, {index:3, path:[1,2]}, {index:3, path:[1]}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>弹出: {index:3, path:[1]} → 生成[1,3]</span></span>
<span class="line"><span>弹出: {index:3, path:[1,2]} → 生成[1,2,3]  </span></span>
<span class="line"><span>弹出: {index:2, path:[1]} → 生成[1,2]</span></span>
<span class="line"><span>继续处理其他分支...</span></span></code></pre></div><h2 id="经典回溯问题" tabindex="-1">经典回溯问题 <a class="header-anchor" href="#经典回溯问题" aria-label="Permalink to &quot;经典回溯问题&quot;">​</a></h2><h3 id="n-皇后问题" tabindex="-1">N 皇后问题 <a class="header-anchor" href="#n-皇后问题" aria-label="Permalink to &quot;N 皇后问题&quot;">​</a></h3><p>在 N×N 棋盘上放置 N 个皇后，使得它们互不攻击，展示约束满足问题的回溯解法。</p><p>特点：</p><ul><li>约束满足：每个皇后不能在同一行、列、对角线</li><li>逐行放置：天然适合按行回溯</li><li>对称性剪枝：利用对称性减少搜索空间</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// N皇后问题回溯解法</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> solveNQueens</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> board</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: n }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(n).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> backtrack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 所有行都放置完成，找到解</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (row </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> n) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(board.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> row.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)));</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> col </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; col </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; col</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 剪枝：检查当前位置是否安全</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">isSafe</span><span style="color:#E1E4E8;">(board, row, col)) {</span></span>
<span class="line"><span style="color:#F97583;">        continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 放置皇后</span></span>
<span class="line"><span style="color:#E1E4E8;">      board[row][col] </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;Q&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 递归放置下一行</span></span>
<span class="line"><span style="color:#B392F0;">      backtrack</span><span style="color:#E1E4E8;">(row </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 撤销选择</span></span>
<span class="line"><span style="color:#E1E4E8;">      board[row][col] </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;.&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> isSafe</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">col</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> board.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查列</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> row; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (board[i][col] </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Q&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查左上对角线</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> row </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> col </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">, j</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (board[i][j] </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Q&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查右上对角线</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> row </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> col </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">, j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (board[i][j] </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Q&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  backtrack</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 优化的N皇后解法 - 使用位运算</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> solveNQueensBitwise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> backtrack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">columns</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">diagonals1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">diagonals2</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">solution</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (row </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> n) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">solution]);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算可用的位置</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> availablePositions </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ((</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> &lt;&lt;</span><span style="color:#E1E4E8;"> n) </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">                           ~</span><span style="color:#E1E4E8;">(columns </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> diagonals1 </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> diagonals2);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (availablePositions </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 获取最低位的1（最右边的可用位置）</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> position</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> availablePositions </span><span style="color:#F97583;">&amp;</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;">availablePositions;</span></span>
<span class="line"><span style="color:#6A737D;">      // 移除这个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">      availablePositions </span><span style="color:#F97583;">&amp;=</span><span style="color:#E1E4E8;"> availablePositions </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 计算列索引</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> col</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">log2</span><span style="color:#E1E4E8;">(position);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 记录当前选择</span></span>
<span class="line"><span style="color:#E1E4E8;">      solution.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(col);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 递归，更新约束</span></span>
<span class="line"><span style="color:#B392F0;">      backtrack</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        row </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        columns </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> position,</span></span>
<span class="line"><span style="color:#E1E4E8;">        (diagonals1 </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> position) </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        (diagonals2 </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> position) </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        solution</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 回溯</span></span>
<span class="line"><span style="color:#E1E4E8;">      solution.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  backtrack</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 将数字解转换为棋盘表示</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">solution</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    solution.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">col</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;.&#39;</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">repeat</span><span style="color:#E1E4E8;">(col) </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;Q&#39;</span><span style="color:#F97583;"> +</span><span style="color:#9ECBFF;"> &#39;.&#39;</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">repeat</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> col </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (4 皇后问题搜索)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>第0行: 尝试列0,1,2,3</span></span>
<span class="line"><span>选择列0:</span></span>
<span class="line"><span>  第1行: 列0,1冲突 → 尝试列2,3</span></span>
<span class="line"><span>  选择列2:</span></span>
<span class="line"><span>    第2行: 列0,1,2,3都冲突 → 回溯</span></span>
<span class="line"><span>  选择列3:</span></span>
<span class="line"><span>    第2行: 列1安全 → 放置</span></span>
<span class="line"><span>      第3行: 列0,1,2,3都冲突 → 回溯</span></span>
<span class="line"><span>选择列1:</span></span>
<span class="line"><span>  第1行: 列3安全 → 放置</span></span>
<span class="line"><span>    第2行: 列0安全 → 放置</span></span>
<span class="line"><span>      第3行: 列2安全 → 找到解</span></span>
<span class="line"><span>继续搜索其他解...</span></span></code></pre></div><h3 id="数独求解" tabindex="-1">数独求解 <a class="header-anchor" href="#数独求解" aria-label="Permalink to &quot;数独求解&quot;">​</a></h3><p>使用回溯算法解决数独难题，展示约束传播与回溯的结合。</p><p>特点：</p><ul><li>多约束：行、列、九宫格都需要满足数字唯一</li><li>启发式：可以选择最少可能值的格子优先填充</li><li>高效剪枝：尽早发现冲突并回溯</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 数独求解器</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> SudokuSolver</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> solve</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">backtrack</span><span style="color:#E1E4E8;">(board);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> backtrack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> emptyCell</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">findEmptyCell</span><span style="color:#E1E4E8;">(board);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 没有空格子，数独已解决</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">emptyCell) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">col</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> emptyCell;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 尝试所有可能的数字</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; num </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; num</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isValid</span><span style="color:#E1E4E8;">(board, row, col, num)) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 放置数字</span></span>
<span class="line"><span style="color:#E1E4E8;">        board[row][col] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> num;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 递归求解</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">backtrack</span><span style="color:#E1E4E8;">(board)) {</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 回溯</span></span>
<span class="line"><span style="color:#E1E4E8;">        board[row][col] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 无解</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> findEmptyCell</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (board[i][j] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> [i, j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> isValid</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">col</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">num</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查行</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (board[row][j] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> num) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查列</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (board[i][col] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> num) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查3x3宫格</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> boxRow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(row </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> boxCol</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(col </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (board[boxRow </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> i][boxCol </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> j] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> num) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 使用MRV（最小剩余值）启发式的优化版本</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> solveWithMRV</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> emptyCells</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">findAllEmptyCells</span><span style="color:#E1E4E8;">(board);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (emptyCells.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 数独已解决</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 选择约束最多的格子（MRV启发式）</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">col</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">possibleValues</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">selectMostConstrainedCell</span><span style="color:#E1E4E8;">(board, emptyCells);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> num</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> possibleValues) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      board[row][col] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> num;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">solveWithMRV</span><span style="color:#E1E4E8;">(board)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      board[row][col] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> findAllEmptyCells</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> emptyCells</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (board[i][j] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          emptyCells.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">([i, j]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> emptyCells;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> selectMostConstrainedCell</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">emptyCells</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> bestCell </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> minPossibleValues </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 大于9</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">col</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> emptyCells) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> possibleValues</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getPossibleValues</span><span style="color:#E1E4E8;">(board, row, col);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (possibleValues.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#E1E4E8;"> minPossibleValues) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        minPossibleValues </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> possibleValues.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        bestCell </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [row, col, possibleValues];</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> bestCell;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getPossibleValues</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">col</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> possible</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 移除行中已存在的数字</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      possible.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(board[row][j]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 移除列中已存在的数字</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      possible.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(board[i][col]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 移除宫格中已存在的数字</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> boxRow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(row </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> boxCol</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(col </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        possible.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(board[boxRow </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> i][boxCol </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> j]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(possible);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (数独求解过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始数独:</span></span>
<span class="line"><span>5 3 0 | 0 7 0 | 0 0 0</span></span>
<span class="line"><span>6 0 0 | 1 9 5 | 0 0 0</span></span>
<span class="line"><span>0 9 8 | 0 0 0 | 0 6 0</span></span>
<span class="line"><span>------+------+------</span></span>
<span class="line"><span>8 0 0 | 0 6 0 | 0 0 3</span></span>
<span class="line"><span>4 0 0 | 8 0 3 | 0 0 1</span></span>
<span class="line"><span>7 0 0 | 0 2 0 | 0 0 6</span></span>
<span class="line"><span>------+------+------</span></span>
<span class="line"><span>0 6 0 | 0 0 0 | 2 8 0</span></span>
<span class="line"><span>0 0 0 | 4 1 9 | 0 0 5</span></span>
<span class="line"><span>0 0 0 | 0 8 0 | 0 7 9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>求解步骤:</span></span>
<span class="line"><span>1. 找到(0,2)可能值: 1,2,4 → 尝试1</span></span>
<span class="line"><span>2. 继续填充直到冲突 → 回溯到(0,2)尝试2</span></span>
<span class="line"><span>3. 最终找到有效填充...</span></span></code></pre></div><h2 id="回溯优化技巧" tabindex="-1">回溯优化技巧 <a class="header-anchor" href="#回溯优化技巧" aria-label="Permalink to &quot;回溯优化技巧&quot;">​</a></h2><h3 id="约束传播" tabindex="-1">约束传播 <a class="header-anchor" href="#约束传播" aria-label="Permalink to &quot;约束传播&quot;">​</a></h3><p>在做出选择后立即传播约束，减少后续搜索空间。</p><p>特点：</p><ul><li>前向检查：提前发现并排除未来冲突</li><li>维护域：跟踪每个变量的可能取值</li><li>深度剪枝：在搜索早期排除大量无效分支</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 使用约束传播的回溯 - 以数独为例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> ConstraintPropagation</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> solveWithPropagation</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 初始化每个格子的可能值域</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> domains</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initializeDomains</span><span style="color:#E1E4E8;">(board);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">backtrackWithDomains</span><span style="color:#E1E4E8;">(board, domains);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> initializeDomains</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> domains</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">i</span><span style="color:#9ECBFF;">},\${</span><span style="color:#E1E4E8;">j</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (board[i][j] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          domains[key] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          domains[key] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">([board[i][j]]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 初始约束传播</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">propagateConstraints</span><span style="color:#E1E4E8;">(board, domains);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> domains;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> backtrackWithDomains</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">domains</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> emptyCell</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">findEmptyCellWithMRV</span><span style="color:#E1E4E8;">(domains);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">emptyCell) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 解决完成</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">col</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> emptyCell;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">row</span><span style="color:#9ECBFF;">},\${</span><span style="color:#E1E4E8;">col</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> possibleValues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(domains[key]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> possibleValues) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 保存当前域状态以便回溯</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> domainsBackup</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">cloneDomains</span><span style="color:#E1E4E8;">(domains);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 赋值并传播约束</span></span>
<span class="line"><span style="color:#E1E4E8;">      board[row][col] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">      domains[key] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">([value]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">propagateFromCell</span><span style="color:#E1E4E8;">(board, domains, row, col) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">backtrackWithDomains</span><span style="color:#E1E4E8;">(board, domains)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 回溯：恢复域状态</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">restoreDomains</span><span style="color:#E1E4E8;">(domains, domainsBackup);</span></span>
<span class="line"><span style="color:#E1E4E8;">      board[row][col] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> propagateFromCell</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">board</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">domains</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">col</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> board[row][col];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 传播到同一行</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> col </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeFromDomain</span><span style="color:#E1E4E8;">(domains, row, j, value)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 域为空，冲突</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 传播到同一列</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> row </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeFromDomain</span><span style="color:#E1E4E8;">(domains, i, col, value)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 传播到同一宫格</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> boxRow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(row </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> boxCol</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(col </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> r</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> boxRow </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> i, </span><span style="color:#79B8FF;">c</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> boxCol </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> j;</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (r </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> row </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> c </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> col </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeFromDomain</span><span style="color:#E1E4E8;">(domains, r, c, value)) {</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> removeFromDomain</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">domains</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">col</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">row</span><span style="color:#9ECBFF;">},\${</span><span style="color:#E1E4E8;">col</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (domains[key].</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(value)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      domains[key].</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> domains[key].size </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 返回域是否非空</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (约束传播效果)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>赋值前:</span></span>
<span class="line"><span>格子(0,2)域: {1,2,3,4,5,6,7,8,9}</span></span>
<span class="line"><span>同行(0,x)域受影响</span></span>
<span class="line"><span>同列(x,2)域受影响  </span></span>
<span class="line"><span>同宫格域受影响</span></span>
<span class="line"><span></span></span>
<span class="line"><span>赋值(0,2)=1后:</span></span>
<span class="line"><span>格子(0,2)域: {1}</span></span>
<span class="line"><span>同行(0,3)域移除1 → {2,3,4,5,6,7,8,9}</span></span>
<span class="line"><span>同列(1,2)域移除1 → {2,3,4,5,6,7,8,9}</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>提前发现冲突，减少后续搜索</span></span></code></pre></div><h3 id="记忆化回溯" tabindex="-1">记忆化回溯 <a class="header-anchor" href="#记忆化回溯" aria-label="Permalink to &quot;记忆化回溯&quot;">​</a></h3><p>存储已计算的状态结果，避免重复计算相同子问题。</p><p>特点：</p><ul><li>状态缓存：存储子问题的解</li><li>重复检测：识别相同的搜索状态</li><li>性能提升：显著减少计算量</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 带记忆化的回溯 - 以正则表达式匹配为例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> MemoizedBacktrack</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> isMatch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, s, p, memo);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> dfs</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">j</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">memo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">i</span><span style="color:#9ECBFF;">},\${</span><span style="color:#E1E4E8;">j</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查记忆化结果</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (memo.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> memo.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 模式串已用完</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> p.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> s.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      memo.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, result);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查当前字符是否匹配</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> firstMatch</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> s.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> (p[j] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> s[i] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> p[j] </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;.&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 处理&#39;*&#39;通配符</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> &lt;</span><span style="color:#E1E4E8;"> p.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> p[j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;*&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 两种情况：匹配0次或匹配1次</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">(i, j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">, s, p, memo) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">               (firstMatch </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, j, s, p, memo));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 普通字符匹配</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> firstMatch </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, s, p, memo);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    memo.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, result);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 括号生成问题的记忆化回溯</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> generateParenthesisMemoized</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> memo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> generate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">open</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">close</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">open</span><span style="color:#9ECBFF;">},\${</span><span style="color:#E1E4E8;">close</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (memo.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> memo.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (open </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> close </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 可以添加左括号的条件</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (open </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> leftResults</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> generate</span><span style="color:#E1E4E8;">(open </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, close);</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> leftResults) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;(&#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> result);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 可以添加右括号的条件：右括号数量不能超过左括号</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (close </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> open) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> rightResults</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> generate</span><span style="color:#E1E4E8;">(open, close </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> rightResults) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;)&#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> result);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    memo.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, results);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> generate</span><span style="color:#E1E4E8;">(n, n);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (记忆化避免重复计算)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>生成2对括号:</span></span>
<span class="line"><span>状态(2,2)</span></span>
<span class="line"><span>  ├── 加&#39;(&#39; → 状态(1,2)</span></span>
<span class="line"><span>  │   ├── 加&#39;(&#39; → 状态(0,2)</span></span>
<span class="line"><span>  │   │   ├── 加&#39;)&#39; → 状态(0,1)</span></span>
<span class="line"><span>  │   │   │   └── 加&#39;)&#39; → 状态(0,0) → [&quot;()()&quot;]</span></span>
<span class="line"><span>  │   │   └── 记忆化状态(0,2)</span></span>
<span class="line"><span>  │   └── 加&#39;)&#39; → 状态(1,1)</span></span>
<span class="line"><span>  │       ├── 加&#39;(&#39; → 状态(0,1) ← 从记忆化获取</span></span>
<span class="line"><span>  │       └── 加&#39;)&#39; → 状态(1,0) → 无效</span></span>
<span class="line"><span>  └── 记忆化状态(2,2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>避免重复计算状态(0,1), (0,2)等</span></span></code></pre></div><h2 id="回溯与其它算法对比" tabindex="-1">回溯与其它算法对比 <a class="header-anchor" href="#回溯与其它算法对比" aria-label="Permalink to &quot;回溯与其它算法对比&quot;">​</a></h2><h3 id="回溯-vs-动态规划" tabindex="-1">回溯 vs 动态规划 <a class="header-anchor" href="#回溯-vs-动态规划" aria-label="Permalink to &quot;回溯 vs 动态规划&quot;">​</a></h3><p>回溯和动态规划都用于解决组合优化问题，但适用场景和策略不同。</p><p>对比特点：</p><ul><li>问题类型：回溯适合求所有解，DP 适合求最优解</li><li>时间复杂度：回溯通常指数级，DP 通常多项式级</li><li>空间使用：回溯使用调用栈，DP 使用表格</li><li>适用条件：回溯通用性强，DP 需要最优子结构</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 同一问题的回溯和DP解法对比 - 硬币找零</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> CoinChangeComparison</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 回溯解法 - 找零的所有可能方式</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> coinChangeBacktrack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">coins</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    function</span><span style="color:#B392F0;"> backtrack</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">start</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">remaining</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (remaining </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">current]);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (remaining </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> start; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> coins.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        current.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(coins[i]);</span></span>
<span class="line"><span style="color:#B392F0;">        backtrack</span><span style="color:#E1E4E8;">(i, remaining </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> coins[i]); </span><span style="color:#6A737D;">// 允许重复使用</span></span>
<span class="line"><span style="color:#E1E4E8;">        current.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    backtrack</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, amount);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // DP解法 - 找零的最少硬币数</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> coinChangeDP</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">coins</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(amount </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Infinity</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> amount; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> coin</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> coins) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> coin </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          dp[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(dp[i], dp[i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> coin] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> dp[amount] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> Infinity</span><span style="color:#F97583;"> ?</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> :</span><span style="color:#E1E4E8;"> dp[amount];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (算法选择指南)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>问题特征                 推荐算法</span></span>
<span class="line"><span>需要所有解              → 回溯</span></span>
<span class="line"><span>需要最优解              → 动态规划</span></span>
<span class="line"><span>约束满足问题            → 回溯 + 剪枝</span></span>
<span class="line"><span>有重叠子问题            → 动态规划</span></span>
<span class="line"><span>解空间巨大但解稀少      → 回溯 + 强力剪枝</span></span>
<span class="line"><span>问题规模较小            → 回溯</span></span>
<span class="line"><span>问题规模较大            → 动态规划</span></span></code></pre></div><h3 id="回溯应用场景识别" tabindex="-1">回溯应用场景识别 <a class="header-anchor" href="#回溯应用场景识别" aria-label="Permalink to &quot;回溯应用场景识别&quot;">​</a></h3><p>识别适合使用回溯算法的问题特征和模式。</p><p>适用场景特征：</p><ul><li>组合问题：需要生成所有组合、排列、子集</li><li>约束满足：问题有明确的约束条件</li><li>决策序列：问题可以建模为一系列决策</li><li>解验证易：容易验证部分解或完整解的有效性</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 回溯适用性分析器</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> BacktrackSuitability</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> isSuitable</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> checks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hasDecisionSequence</span><span style="color:#E1E4E8;">(problem),</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hasClearConstraints</span><span style="color:#E1E4E8;">(problem),</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hasFiniteChoices</span><span style="color:#E1E4E8;">(problem),</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">canPruneEarly</span><span style="color:#E1E4E8;">(problem),</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">needsAllSolutions</span><span style="color:#E1E4E8;">(problem)</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> checks.</span><span style="color:#B392F0;">every</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">check</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> check);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> hasDecisionSequence</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 问题是否能分解为一系列决策</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> problem.decisions </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> problem.decisions.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> hasClearConstraints</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 是否有明确的约束可用于剪枝</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> problem.constraints </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> problem.constraints.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> hasFiniteChoices</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 每个决策点的选择是否有限</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> problem.choiceLimit </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> problem.choiceLimit </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 合理上限</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> canPruneEarly</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 是否能在搜索早期识别无效路径</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> problem.earlyTermination </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> needsAllSolutions</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 是否需要所有解而非单个解</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> problem.requireAllSolutions </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 问题模式匹配</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> recognizePattern</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> patterns</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;permutations&#39;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">arrange</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">order</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">permut</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;combinations&#39;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">combinations</span><span style="color:#F97583;">?|</span><span style="color:#DBEDFF;">choose</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">from</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;subsets&#39;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">subsets</span><span style="color:#F97583;">?|</span><span style="color:#DBEDFF;">all</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">possibilities</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;constraint-satisfaction&#39;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">constraint</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">satisfy</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">fit</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">requirements</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;path-finding&#39;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">paths</span><span style="color:#F97583;">?|</span><span style="color:#DBEDFF;">routes</span><span style="color:#F97583;">?|</span><span style="color:#DBEDFF;">ways</span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">pattern</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">regex</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(patterns)) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (regex.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(problem.description)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> pattern;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;unknown&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (回溯适用问题分类)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>回溯适用问题</span></span>
<span class="line"><span>├── 组合问题</span></span>
<span class="line"><span>│   ├── 排列生成</span></span>
<span class="line"><span>│   ├── 组合生成  </span></span>
<span class="line"><span>│   └── 子集生成</span></span>
<span class="line"><span>├── 约束满足问题</span></span>
<span class="line"><span>│   ├── N皇后</span></span>
<span class="line"><span>│   ├── 数独</span></span>
<span class="line"><span>│   └── 图着色</span></span>
<span class="line"><span>├── 路径查找问题</span></span>
<span class="line"><span>│   ├── 迷宫求解</span></span>
<span class="line"><span>│   ├── 哈密顿路径</span></span>
<span class="line"><span>│   └── 骑士巡游</span></span>
<span class="line"><span>└── 决策序列问题</span></span>
<span class="line"><span>    ├── 括号生成</span></span>
<span class="line"><span>    ├── 电话号码字母组合</span></span>
<span class="line"><span>    └── 单词搜索</span></span></code></pre></div>`,83)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
