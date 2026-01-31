import{_ as n,c as a,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"图算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是图算法","slug":"什么是图算法","link":"#什么是图算法","children":[]},{"level":2,"title":"图的基本表示","slug":"图的基本表示","link":"#图的基本表示","children":[{"level":3,"title":"邻接矩阵","slug":"邻接矩阵","link":"#邻接矩阵","children":[]},{"level":3,"title":"邻接表","slug":"邻接表","link":"#邻接表","children":[]}]},{"level":2,"title":"图遍历算法","slug":"图遍历算法","link":"#图遍历算法","children":[{"level":3,"title":"深度优先搜索 (DFS)","slug":"深度优先搜索-dfs","link":"#深度优先搜索-dfs","children":[]},{"level":3,"title":"广度优先搜索 (BFS)","slug":"广度优先搜索-bfs","link":"#广度优先搜索-bfs","children":[]}]},{"level":2,"title":"最短路径算法","slug":"最短路径算法","link":"#最短路径算法","children":[{"level":3,"title":"Dijkstra 算法","slug":"dijkstra-算法","link":"#dijkstra-算法","children":[]},{"level":3,"title":"Bellman-Ford 算法","slug":"bellman-ford-算法","link":"#bellman-ford-算法","children":[]}]},{"level":2,"title":"最小生成树算法","slug":"最小生成树算法","link":"#最小生成树算法","children":[{"level":3,"title":"Prim 算法","slug":"prim-算法","link":"#prim-算法","children":[]},{"level":3,"title":"Kruskal 算法","slug":"kruskal-算法","link":"#kruskal-算法","children":[]}]},{"level":2,"title":"拓扑排序","slug":"拓扑排序","link":"#拓扑排序","children":[]},{"level":2,"title":"连通分量算法","slug":"连通分量算法","link":"#连通分量算法","children":[{"level":3,"title":"无向图连通分量","slug":"无向图连通分量","link":"#无向图连通分量","children":[]},{"level":3,"title":"强连通分量 (Kosaraju 算法)","slug":"强连通分量-kosaraju-算法","link":"#强连通分量-kosaraju-算法","children":[]}]}],"relativePath":"basic/algorithm/graph.md","filePath":"basic/algorithm/graph.md"}'),o={name:"basic/algorithm/graph.md"};function e(t,s,c,r,E,y){return p(),a("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/algorithm/graph.md for this page in Markdown format</div><h1 id="图算法" tabindex="-1">图算法 <a class="header-anchor" href="#图算法" aria-label="Permalink to &quot;图算法&quot;">​</a></h1><h2 id="什么是图算法" tabindex="-1">什么是图算法 <a class="header-anchor" href="#什么是图算法" aria-label="Permalink to &quot;什么是图算法&quot;">​</a></h2><p>图算法是专门用于处理图结构数据的计算方法。图由顶点和边组成，能够表示各种复杂关系网络，如社交网络、交通系统、知识图谱等。图算法解决路径查找、连通性分析、网络流优化等核心问题。</p><p>特点：</p><ul><li>关系建模：表达实体间的复杂关联</li><li>网络分析：揭示系统结构和动态特性</li><li>算法多样：从简单遍历到复杂优化问题</li><li>应用广泛：社交网络、推荐系统、路由规划</li></ul><p>示意图 (基本图结构)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>A —— B</span></span>
<span class="line"><span>|    |</span></span>
<span class="line"><span>C —— D</span></span></code></pre></div><h2 id="图的基本表示" tabindex="-1">图的基本表示 <a class="header-anchor" href="#图的基本表示" aria-label="Permalink to &quot;图的基本表示&quot;">​</a></h2><h3 id="邻接矩阵" tabindex="-1">邻接矩阵 <a class="header-anchor" href="#邻接矩阵" aria-label="Permalink to &quot;邻接矩阵&quot;">​</a></h3><p>使用二维数组表示图的连接关系，矩阵元素表示顶点间的边。</p><p>特点：</p><ul><li>直接访问：快速判断任意两顶点是否相邻</li><li>空间开销：需要 O(V²) 空间，适合稠密图</li><li>权值表示：可直接存储边的权重信息</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 邻接矩阵实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> AdjacencyMatrix</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vertexCount</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">directed</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.vertexCount </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vertexCount;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.directed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> directed;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.matrix </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: vertexCount }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(vertexCount).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  addEdge</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">weight</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.matrix[source][target] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> weight;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.directed) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.matrix[target][source] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> weight;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  removeEdge</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.matrix[source][target] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.directed) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.matrix[target][source] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  hasEdge</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.matrix[source][target] </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getNeighbors</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.vertexCount; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.matrix[vertex][i] </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        neighbors.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ vertex: i, weight: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.matrix[vertex][i] });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> neighbors;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getWeight</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.matrix[source][target];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (邻接矩阵)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>图结构：</span></span>
<span class="line"><span>0 -- 1</span></span>
<span class="line"><span>|    |</span></span>
<span class="line"><span>2 -- 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>邻接矩阵：</span></span>
<span class="line"><span>  0 1 2 3</span></span>
<span class="line"><span>0 0 1 1 0</span></span>
<span class="line"><span>1 1 0 0 1</span></span>
<span class="line"><span>2 1 0 0 1</span></span>
<span class="line"><span>3 0 1 1 0</span></span></code></pre></div><h3 id="邻接表" tabindex="-1">邻接表 <a class="header-anchor" href="#邻接表" aria-label="Permalink to &quot;邻接表&quot;">​</a></h3><p>为每个顶点维护一个邻居列表，存储相连的顶点及边信息。</p><p>特点：</p><ul><li>空间高效：仅存储实际存在的边，适合稀疏图</li><li>遍历优化：直接获取顶点的所有邻居</li><li>灵活扩展：易于动态添加删除顶点和边</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 邻接表实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> AdjacencyList</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">directed</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.directed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> directed;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.adjacencyList </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  addVertex</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(vertex)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(vertex, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  addEdge</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">weight</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addVertex</span><span style="color:#E1E4E8;">(source);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addVertex</span><span style="color:#E1E4E8;">(target);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(source).</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(target, weight);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.directed) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(target).</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(source, weight);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  removeEdge</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(source)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(source).</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(target);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.directed </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(target)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(target).</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(source);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  hasEdge</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(source) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">           this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(source).</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(target);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getNeighbors</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(vertex)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(vertex).</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">neighbor</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">weight</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ vertex: neighbor, weight }));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getWeight</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(source) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(source).</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(target)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(source).</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(target);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getVertices</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.adjacencyList.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (邻接表)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>图结构：</span></span>
<span class="line"><span>0 -- 1</span></span>
<span class="line"><span>|    |</span></span>
<span class="line"><span>2 -- 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>邻接表：</span></span>
<span class="line"><span>0: {1: 1, 2: 1}</span></span>
<span class="line"><span>1: {0: 1, 3: 1}</span></span>
<span class="line"><span>2: {0: 1, 3: 1}</span></span>
<span class="line"><span>3: {1: 1, 2: 1}</span></span></code></pre></div><h2 id="图遍历算法" tabindex="-1">图遍历算法 <a class="header-anchor" href="#图遍历算法" aria-label="Permalink to &quot;图遍历算法&quot;">​</a></h2><h3 id="深度优先搜索-dfs" tabindex="-1">深度优先搜索 (DFS) <a class="header-anchor" href="#深度优先搜索-dfs" aria-label="Permalink to &quot;深度优先搜索 (DFS)&quot;">​</a></h3><p>沿着图的深度方向遍历，尽可能深地探索每个分支。</p><p>特点：</p><ul><li>递归深度：使用栈结构 (显式或隐式) 管理遍历顺序</li><li>路径探索：适合寻找路径和连通分量</li><li>回溯机制：自然支持回溯搜索</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// DFS递归实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> depthFirstSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">startVertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> discoveryOrder</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> finishOrder</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> parent</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> time </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> dfs</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    time</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">    discoveryOrder.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor.vertex)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor.vertex, vertex);</span></span>
<span class="line"><span style="color:#B392F0;">        dfs</span><span style="color:#E1E4E8;">(neighbor.vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    time</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    finishOrder.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startVertex, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">  dfs</span><span style="color:#E1E4E8;">(startVertex);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    discoveryOrder,</span></span>
<span class="line"><span style="color:#E1E4E8;">    finishOrder,</span></span>
<span class="line"><span style="color:#E1E4E8;">    parent,</span></span>
<span class="line"><span style="color:#E1E4E8;">    visited: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(visited)</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// DFS迭代实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> depthFirstSearchIterative</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">startVertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> stack</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [startVertex];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> discoveryOrder</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> parent</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(startVertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">  parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startVertex, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (stack.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentVertex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    discoveryOrder.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(currentVertex);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(currentVertex);</span></span>
<span class="line"><span style="color:#6A737D;">    // 逆序入栈以保证与递归版本顺序一致</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> neighbors.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> neighbors[i];</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor.vertex)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(neighbor.vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">        parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor.vertex, currentVertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">        stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(neighbor.vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    discoveryOrder,</span></span>
<span class="line"><span style="color:#E1E4E8;">    parent,</span></span>
<span class="line"><span style="color:#E1E4E8;">    visited: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(visited)</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// DFS应用：检测环</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> hasCycle</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> recursionStack</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> dfs</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (recursionStack.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(vertex)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 发现环</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(vertex)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">    recursionStack.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">(neighbor.vertex)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    recursionStack.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(vertex) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#B392F0;"> dfs</span><span style="color:#E1E4E8;">(vertex)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (DFS 遍历过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>图结构：</span></span>
<span class="line"><span>A — B — C</span></span>
<span class="line"><span>|   |   |</span></span>
<span class="line"><span>D — E — F</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DFS遍历顺序（从A开始）：</span></span>
<span class="line"><span>A → B → C → F → E → D</span></span>
<span class="line"><span></span></span>
<span class="line"><span>栈状态变化：</span></span>
<span class="line"><span>初始: [A]</span></span>
<span class="line"><span>弹出A → 访问A → 推入D, B → [D, B]</span></span>
<span class="line"><span>弹出B → 访问B → 推入E, C → [D, E, C]</span></span>
<span class="line"><span>弹出C → 访问C → 推入F → [D, E, F]</span></span>
<span class="line"><span>弹出F → 访问F → 推入E(已访问) → [D, E]</span></span>
<span class="line"><span>弹出E → 访问E → 推入D(已访问) → [D]</span></span>
<span class="line"><span>弹出D → 访问D → 栈空</span></span></code></pre></div><h3 id="广度优先搜索-bfs" tabindex="-1">广度优先搜索 (BFS) <a class="header-anchor" href="#广度优先搜索-bfs" aria-label="Permalink to &quot;广度优先搜索 (BFS)&quot;">​</a></h3><p>按层次遍历图，先访问所有相邻顶点再深入下一层。</p><p>特点：</p><ul><li>层次遍历：使用队列管理遍历顺序</li><li>最短路径：在无权图中能找到最短路径</li><li>系统扩展：均匀探索所有方向</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// BFS实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> breadthFirstSearch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">startVertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> queue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [startVertex];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> discoveryOrder</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> parent</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> distance</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(startVertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">  parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startVertex, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  distance.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startVertex, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (queue.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentVertex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    discoveryOrder.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(currentVertex);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(currentVertex);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor.vertex)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(neighbor.vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">        parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor.vertex, currentVertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">        distance.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor.vertex, distance.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(currentVertex) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(neighbor.vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    discoveryOrder,</span></span>
<span class="line"><span style="color:#E1E4E8;">    parent,</span></span>
<span class="line"><span style="color:#E1E4E8;">    distance,</span></span>
<span class="line"><span style="color:#E1E4E8;">    visited: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(visited)</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// BFS应用：最短路径（无权图）</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> shortestPathBFS</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">startVertex</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">targetVertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> queue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [startVertex];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> parent</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> distance</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(startVertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">  parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startVertex, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  distance.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startVertex, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (queue.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentVertex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (currentVertex </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> targetVertex) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 重建路径</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> targetVertex;</span></span>
<span class="line"><span style="color:#F97583;">      while</span><span style="color:#E1E4E8;"> (node </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">(node);</span></span>
<span class="line"><span style="color:#E1E4E8;">        node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(node);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path,</span></span>
<span class="line"><span style="color:#E1E4E8;">        distance: distance.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(targetVertex)</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(currentVertex);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor.vertex)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(neighbor.vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">        parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor.vertex, currentVertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">        distance.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor.vertex, distance.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(currentVertex) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(neighbor.vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 没有路径</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (BFS 遍历过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>图结构：</span></span>
<span class="line"><span>A — B — C</span></span>
<span class="line"><span>|   |   |</span></span>
<span class="line"><span>D — E — F</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BFS遍历顺序（从A开始）：</span></span>
<span class="line"><span>A → B → D → C → E → F</span></span>
<span class="line"><span></span></span>
<span class="line"><span>队列状态变化：</span></span>
<span class="line"><span>初始: [A]</span></span>
<span class="line"><span>处理A → 加入B, D → [B, D]</span></span>
<span class="line"><span>处理B → 加入C, E → [D, C, E]</span></span>
<span class="line"><span>处理D → 加入E(已加入) → [C, E]</span></span>
<span class="line"><span>处理C → 加入F → [E, F]</span></span>
<span class="line"><span>处理E → 加入F(已加入) → [F]</span></span>
<span class="line"><span>处理F → 队列空</span></span>
<span class="line"><span></span></span>
<span class="line"><span>层次结构：</span></span>
<span class="line"><span>层级0: A</span></span>
<span class="line"><span>层级1: B, D</span></span>
<span class="line"><span>层级2: C, E</span></span>
<span class="line"><span>层级3: F</span></span></code></pre></div><h2 id="最短路径算法" tabindex="-1">最短路径算法 <a class="header-anchor" href="#最短路径算法" aria-label="Permalink to &quot;最短路径算法&quot;">​</a></h2><h3 id="dijkstra-算法" tabindex="-1">Dijkstra 算法 <a class="header-anchor" href="#dijkstra-算法" aria-label="Permalink to &quot;Dijkstra 算法&quot;">​</a></h3><p>解决带权图的单源最短路径问题，要求权重非负。</p><p>特点：</p><ul><li>贪心策略：每次选择当前距离最小的顶点</li><li>非负权重：不能处理负权边</li><li>最优子结构：最短路径的子路径也是最短的</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Dijkstra算法实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> dijkstra</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">startVertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> distances</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> previous</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> priorityQueue</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MinPriorityQueue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 初始化距离</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    distances.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(vertex, </span><span style="color:#79B8FF;">Infinity</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  distances.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startVertex, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  priorityQueue.</span><span style="color:#B392F0;">enqueue</span><span style="color:#E1E4E8;">(startVertex, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">priorityQueue.</span><span style="color:#B392F0;">isEmpty</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">currentVertex</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">priority</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">currentDistance</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> priorityQueue.</span><span style="color:#B392F0;">dequeue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(currentVertex)) {</span></span>
<span class="line"><span style="color:#F97583;">      continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(currentVertex);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(currentVertex);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor.vertex)) {</span></span>
<span class="line"><span style="color:#F97583;">        continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> newDistance</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> currentDistance </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> neighbor.weight;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (newDistance </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> distances.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(neighbor.vertex)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        distances.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor.vertex, newDistance);</span></span>
<span class="line"><span style="color:#E1E4E8;">        previous.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor.vertex, currentVertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">        priorityQueue.</span><span style="color:#B392F0;">enqueue</span><span style="color:#E1E4E8;">(neighbor.vertex, newDistance);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { distances, previous };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 从Dijkstra结果重建路径</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> reconstructPath</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">previous</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">startVertex</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">targetVertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> targetVertex;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (current </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> undefined</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">(current);</span></span>
<span class="line"><span style="color:#E1E4E8;">    current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> previous.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(current);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 检查路径是否有效</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (path[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> startVertex) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> path;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 没有路径</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 最小优先队列实现</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MinPriorityQueue</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.heap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.elementToIndex </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  enqueue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">priority</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ element, priority });</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.elementToIndex.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(element, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bubbleUp</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  dequeue</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> min</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> end</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.elementToIndex.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(min.element);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.heap[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> end;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.elementToIndex.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(end.element, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sinkDown</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> min;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  isEmpty</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  bubbleUp</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">idx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> element</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap[idx];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (idx </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> parentIdx</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((idx </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> parent</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap[parentIdx];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (element.priority </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> parent.priority) </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.heap[parentIdx] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.heap[idx] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.elementToIndex.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(element.element, parentIdx);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.elementToIndex.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(parent.element, idx);</span></span>
<span class="line"><span style="color:#E1E4E8;">      idx </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentIdx;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
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
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (leftChild.priority </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> element.priority) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          swap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> leftChildIdx;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (rightChildIdx </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> length) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rightChild </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap[rightChildIdx];</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          (swap </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> null</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> rightChild.priority </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> element.priority) </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">          (swap </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> null</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> rightChild.priority </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> leftChild.priority)</span></span>
<span class="line"><span style="color:#E1E4E8;">        ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          swap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> rightChildIdx;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (swap </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.heap[idx] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.heap[swap];</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.heap[swap] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.elementToIndex.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(element.element, swap);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.elementToIndex.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.heap[idx].element, idx);</span></span>
<span class="line"><span style="color:#E1E4E8;">      idx </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> swap;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (Dijkstra 算法过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>带权图：</span></span>
<span class="line"><span>    A</span></span>
<span class="line"><span>  1/ \\4</span></span>
<span class="line"><span>  B — C</span></span>
<span class="line"><span>  2\\ /3</span></span>
<span class="line"><span>    D</span></span>
<span class="line"><span></span></span>
<span class="line"><span>从A到各顶点的最短路径：</span></span>
<span class="line"><span>A: 0</span></span>
<span class="line"><span>B: 1 (A→B)</span></span>
<span class="line"><span>C: 4 (A→C) 或 3 (A→B→D→C)</span></span>
<span class="line"><span>D: 3 (A→B→D)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Dijkstra步骤：</span></span>
<span class="line"><span>初始: 距离{A:0, B:∞, C:∞, D:∞}</span></span>
<span class="line"><span>处理A → 更新B:1, C:4 → 距离{B:1, C:4, D:∞}</span></span>
<span class="line"><span>处理B → 更新D:1+2=3 → 距离{C:4, D:3}</span></span>
<span class="line"><span>处理D → 更新C:3+3=6(但4&lt;6，不更新) → 距离{C:4}</span></span>
<span class="line"><span>处理C → 完成</span></span></code></pre></div><h3 id="bellman-ford-算法" tabindex="-1">Bellman-Ford 算法 <a class="header-anchor" href="#bellman-ford-算法" aria-label="Permalink to &quot;Bellman-Ford 算法&quot;">​</a></h3><p>处理带负权边的单源最短路径，并能检测负权环。</p><p>特点：</p><ul><li>负权处理：能够处理负权边</li><li>负环检测：检测图中是否存在负权环</li><li>动态规划：通过松弛操作逐步逼近最优解</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Bellman-Ford算法实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> bellmanFord</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">startVertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> distances</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> previous</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 初始化</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    distances.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(vertex, </span><span style="color:#79B8FF;">Infinity</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  distances.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(startVertex, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取所有边</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> edges</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      edges.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        source: vertex,</span></span>
<span class="line"><span style="color:#E1E4E8;">        target: neighbor.vertex,</span></span>
<span class="line"><span style="color:#E1E4E8;">        weight: neighbor.weight</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 松弛操作 |V| - 1 次</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> updated </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> edge</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> edges) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> newDistance</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> distances.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(edge.source) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> edge.weight;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (newDistance </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> distances.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(edge.target)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        distances.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(edge.target, newDistance);</span></span>
<span class="line"><span style="color:#E1E4E8;">        previous.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(edge.target, edge.source);</span></span>
<span class="line"><span style="color:#E1E4E8;">        updated </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 如果没有更新，提前终止</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">updated) </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 检查负权环</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> edge</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> edges) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (distances.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(edge.source) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> edge.weight </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> distances.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(edge.target)) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;图中存在负权环&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { distances, previous };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (Bellman-Ford 松弛过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>带负权图：</span></span>
<span class="line"><span>A --2--&gt; B --1--&gt; C</span></span>
<span class="line"><span> \\       |       /</span></span>
<span class="line"><span>  \\ -3   4    -2</span></span>
<span class="line"><span>   \\     |     /</span></span>
<span class="line"><span>    ---- D ----</span></span>
<span class="line"><span></span></span>
<span class="line"><span>从A开始：</span></span>
<span class="line"><span>初始: dist[A]=0, 其他∞</span></span>
<span class="line"><span>第1轮松弛:</span></span>
<span class="line"><span>  A→B: 0+2=2 &lt; ∞ → dist[B]=2</span></span>
<span class="line"><span>  A→D: 0+(-3)=-3 &lt; ∞ → dist[D]=-3</span></span>
<span class="line"><span>  B→C: 2+1=3 &lt; ∞ → dist[C]=3</span></span>
<span class="line"><span>  B→D: 2+4=6 &gt; -3 → 不更新</span></span>
<span class="line"><span>  D→C: -3+(-2)=-5 &lt; 3 → dist[C]=-5</span></span>
<span class="line"><span>第2轮松弛:</span></span>
<span class="line"><span>  B→C: 2+1=3 &gt; -5 → 不更新</span></span>
<span class="line"><span>  D→C: -3+(-2)=-5 = -5 → 不更新</span></span>
<span class="line"><span>完成</span></span></code></pre></div><h2 id="最小生成树算法" tabindex="-1">最小生成树算法 <a class="header-anchor" href="#最小生成树算法" aria-label="Permalink to &quot;最小生成树算法&quot;">​</a></h2><h3 id="prim-算法" tabindex="-1">Prim 算法 <a class="header-anchor" href="#prim-算法" aria-label="Permalink to &quot;Prim 算法&quot;">​</a></h3><p>通过逐步添加最小权重边来构建最小生成树。</p><p>特点：</p><ul><li>贪心策略：每次选择连接树和非树节点的最小边</li><li>稠密图适用：在稠密图中效率较高</li><li>类似 Dijkstra：使用优先队列管理候选边</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Prim算法实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> prim</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> mst</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> minHeap</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MinPriorityQueue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 从任意顶点开始</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> startVertex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(startVertex);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 将起始顶点的边加入堆</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> startNeighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(startVertex);</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> startNeighbors) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    minHeap.</span><span style="color:#B392F0;">enqueue</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      { from: startVertex, to: neighbor.vertex, weight: neighbor.weight },</span></span>
<span class="line"><span style="color:#E1E4E8;">      neighbor.weight</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">minHeap.</span><span style="color:#B392F0;">isEmpty</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> visited.size </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">edge</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> minHeap.</span><span style="color:#B392F0;">dequeue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(edge.to)) {</span></span>
<span class="line"><span style="color:#F97583;">      continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 添加边到MST</span></span>
<span class="line"><span style="color:#E1E4E8;">    mst.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(edge);</span></span>
<span class="line"><span style="color:#E1E4E8;">    visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(edge.to);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 将新顶点的边加入堆</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newNeighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(edge.to);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> newNeighbors) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor.vertex)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        minHeap.</span><span style="color:#B392F0;">enqueue</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          { from: edge.to, to: neighbor.vertex, weight: neighbor.weight },</span></span>
<span class="line"><span style="color:#E1E4E8;">          neighbor.weight</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> mst;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 计算MST总权重</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> calculateMSTWeight</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mst</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> mst.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">total</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">edge</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> total </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> edge.weight, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (Prim 算法过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>带权图：</span></span>
<span class="line"><span>    A</span></span>
<span class="line"><span>  1/ \\4</span></span>
<span class="line"><span>  B — C</span></span>
<span class="line"><span>  2\\ /3</span></span>
<span class="line"><span>    D</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Prim构建过程：</span></span>
<span class="line"><span>从A开始：</span></span>
<span class="line"><span>选择最小边AB(1) → MST: [AB]</span></span>
<span class="line"><span>从{A,B}出发：</span></span>
<span class="line"><span>候选边: AC(4), BD(2) → 选择BD(2) → MST: [AB, BD]</span></span>
<span class="line"><span>从{A,B,D}出发：</span></span>
<span class="line"><span>候选边: AC(4), DC(3) → 选择DC(3) → MST: [AB, BD, DC]</span></span>
<span class="line"><span>完成，总权重: 1+2+3=6</span></span></code></pre></div><h3 id="kruskal-算法" tabindex="-1">Kruskal 算法 <a class="header-anchor" href="#kruskal-算法" aria-label="Permalink to &quot;Kruskal 算法&quot;">​</a></h3><p>通过排序所有边并逐步添加不形成环的边来构建最小生成树。</p><p>特点：</p><ul><li>边排序：先对所有边按权重排序</li><li>并查集：使用并查集高效检测环</li><li>稀疏图适用：在稀疏图中效率较高</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Kruskal算法实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> kruskal</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> mst</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> edges</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 收集所有边</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 避免重复添加无向图的边</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (graph.directed </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> vertex </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> neighbor.vertex) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        edges.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          source: vertex,</span></span>
<span class="line"><span style="color:#E1E4E8;">          target: neighbor.vertex,</span></span>
<span class="line"><span style="color:#E1E4E8;">          weight: neighbor.weight</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 按权重排序边</span></span>
<span class="line"><span style="color:#E1E4E8;">  edges.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.weight </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.weight);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> unionFind</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> UnionFind</span><span style="color:#E1E4E8;">(graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> edge</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> edges) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">unionFind.</span><span style="color:#B392F0;">connected</span><span style="color:#E1E4E8;">(edge.source, edge.target)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      mst.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(edge);</span></span>
<span class="line"><span style="color:#E1E4E8;">      unionFind.</span><span style="color:#B392F0;">union</span><span style="color:#E1E4E8;">(edge.source, edge.target);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 如果已经找到V-1条边，提前终止</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (mst.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> mst;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 并查集实现</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> UnionFind</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vertices</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.parent </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.rank </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> vertices) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(vertex, vertex);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.rank.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(vertex, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.parent.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(x) </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> x) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(x, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.parent.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(x))); </span><span style="color:#6A737D;">// 路径压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.parent.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(x);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  union</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">y</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> rootX</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(x);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> rootY</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(y);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (rootX </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> rootY) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 按秩合并</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.rank.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(rootX) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.rank.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(rootY)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(rootX, rootY);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.rank.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(rootX) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.rank.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(rootY)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(rootY, rootX);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.parent.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(rootY, rootX);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.rank.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(rootX, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.rank.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(rootX) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  connected</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">y</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(x) </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(y);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (Kruskal 算法过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>边按权重排序：AB(1), BD(2), CD(3), AC(4), BC(5)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Kruskal步骤：</span></span>
<span class="line"><span>选择AB(1) → 不形成环 → MST: [AB]</span></span>
<span class="line"><span>选择BD(2) → 不形成环 → MST: [AB, BD]  </span></span>
<span class="line"><span>选择CD(3) → 不形成环 → MST: [AB, BD, CD]</span></span>
<span class="line"><span>选择AC(4) → 形成环(A-B-D-C-A) → 跳过</span></span>
<span class="line"><span>选择BC(5) → 形成环 → 跳过</span></span>
<span class="line"><span>完成，总权重: 1+2+3=6</span></span></code></pre></div><h2 id="拓扑排序" tabindex="-1">拓扑排序 <a class="header-anchor" href="#拓扑排序" aria-label="Permalink to &quot;拓扑排序&quot;">​</a></h2><p>对有向无环图进行线性排序，使得对于每条边 (u→v)，u 在 v 之前。</p><p>特点：</p><ul><li>DAG 专用：只能应用于有向无环图</li><li>依赖解析：表示任务间的前置关系</li><li>多解可能：一个 DAG 可能有多个有效排序</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Kahn算法（基于入度）</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> topologicalSortKahn</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">graph.directed) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;拓扑排序只适用于有向图&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> inDegree</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> queue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 计算入度</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    inDegree.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(vertex, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      inDegree.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor.vertex, inDegree.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(neighbor.vertex) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 入度为0的顶点入队</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">vertex</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">degree</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> inDegree) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (degree </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (queue.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(current);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(current);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      inDegree.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(neighbor.vertex, inDegree.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(neighbor.vertex) </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (inDegree.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(neighbor.vertex) </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(neighbor.vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 检查是否有环</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (result.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> !==</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;图中存在环，无法进行拓扑排序&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// DFS方法拓扑排序</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> topologicalSortDFS</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">graph.directed) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;拓扑排序只适用于有向图&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> temp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 临时标记，用于检测环</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> dfs</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vertex</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (temp.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(vertex)) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;图中存在环&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(vertex)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    temp.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#B392F0;">      dfs</span><span style="color:#E1E4E8;">(neighbor.vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    temp.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">    visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">    result.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">(vertex); </span><span style="color:#6A737D;">// 在开头添加，实现逆后序</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(vertex)) {</span></span>
<span class="line"><span style="color:#B392F0;">      dfs</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (拓扑排序)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>有向无环图：</span></span>
<span class="line"><span>A → B → C</span></span>
<span class="line"><span>↓       ↓</span></span>
<span class="line"><span>D → E → F</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拓扑排序结果：</span></span>
<span class="line"><span>有效排序1: A, B, D, C, E, F</span></span>
<span class="line"><span>有效排序2: A, D, B, E, C, F</span></span>
<span class="line"><span>无效排序: C, A, ... (违反C必须在A之后)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Kahn算法过程：</span></span>
<span class="line"><span>初始入度: A:0, B:1, C:1, D:1, E:2, F:2</span></span>
<span class="line"><span>队列: [A]</span></span>
<span class="line"><span>处理A → 更新B:0, D:0 → 队列: [B, D]</span></span>
<span class="line"><span>处理B → 更新C:0, E:1 → 队列: [D, C]</span></span>
<span class="line"><span>处理D → 更新E:0 → 队列: [C, E]</span></span>
<span class="line"><span>处理C → 更新F:1 → 队列: [E, F]</span></span>
<span class="line"><span>处理E → 更新F:0 → 队列: [F]</span></span>
<span class="line"><span>处理F → 完成</span></span></code></pre></div><h2 id="连通分量算法" tabindex="-1">连通分量算法 <a class="header-anchor" href="#连通分量算法" aria-label="Permalink to &quot;连通分量算法&quot;">​</a></h2><h3 id="无向图连通分量" tabindex="-1">无向图连通分量 <a class="header-anchor" href="#无向图连通分量" aria-label="Permalink to &quot;无向图连通分量&quot;">​</a></h3><p>查找无向图中的连通分量，识别相互连接的顶点集合。</p><p>特点：</p><ul><li>连通性分析：识别图中的独立组件</li><li>DFS/BFS 应用：使用遍历算法标记连通分量</li><li>网络分析：用于社交网络、图像分割等</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 使用DFS查找连通分量</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> connectedComponents</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (graph.directed) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连通分量算法适用于无向图&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> components</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(vertex)) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> component</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#B392F0;">      dfsComponent</span><span style="color:#E1E4E8;">(graph, vertex, visited, component);</span></span>
<span class="line"><span style="color:#E1E4E8;">      components.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(component);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> components;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> dfsComponent</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">vertex</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">component</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">  component.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor.vertex)) {</span></span>
<span class="line"><span style="color:#B392F0;">      dfsComponent</span><span style="color:#E1E4E8;">(graph, neighbor.vertex, visited, component);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用并查集查找连通分量</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> unionFindComponents</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (graph.directed) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连通分量算法适用于无向图&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> unionFind</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> UnionFind</span><span style="color:#E1E4E8;">(graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 合并所有边连接的顶点</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      unionFind.</span><span style="color:#B392F0;">union</span><span style="color:#E1E4E8;">(vertex, neighbor.vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 收集连通分量</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> componentsMap</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> root</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> unionFind.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">componentsMap.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(root)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      componentsMap.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(root, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    componentsMap.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(root).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(componentsMap.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (连通分量)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>无向图：</span></span>
<span class="line"><span>A — B   C — D</span></span>
<span class="line"><span>|   |   |   |</span></span>
<span class="line"><span>E — F   G — H</span></span>
<span class="line"><span></span></span>
<span class="line"><span>连通分量：</span></span>
<span class="line"><span>组件1: [A, B, E, F] (通过边连接)</span></span>
<span class="line"><span>组件2: [C, D, G, H] (通过边连接)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DFS过程：</span></span>
<span class="line"><span>从A开始DFS → 访问A,B,E,F → 组件1完成</span></span>
<span class="line"><span>从C开始DFS → 访问C,D,G,H → 组件2完成</span></span></code></pre></div><h3 id="强连通分量-kosaraju-算法" tabindex="-1">强连通分量 (Kosaraju 算法) <a class="header-anchor" href="#强连通分量-kosaraju-算法" aria-label="Permalink to &quot;强连通分量 (Kosaraju 算法)&quot;">​</a></h3><p>查找有向图中的强连通分量，其中任意两顶点相互可达。</p><p>特点：</p><ul><li>有向图分析：识别有向图中的紧密连接组件</li><li>两次 DFS：使用正向和反向图进行遍历</li><li>应用广泛：用于编译器优化、电路设计等</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Kosaraju算法查找强连通分量</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> kosarajuSCC</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">graph.directed) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;强连通分量算法适用于有向图&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> visited</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> stack</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 第一次DFS：记录完成时间</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(vertex)) {</span></span>
<span class="line"><span style="color:#B392F0;">      dfsFirstPass</span><span style="color:#E1E4E8;">(graph, vertex, visited, stack);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 构建反向图</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> reversedGraph</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> reverseGraph</span><span style="color:#E1E4E8;">(graph);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 第二次DFS：按完成时间逆序遍历</span></span>
<span class="line"><span style="color:#E1E4E8;">  visited.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> scc</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (stack.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(vertex)) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> component</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#B392F0;">      dfsSecondPass</span><span style="color:#E1E4E8;">(reversedGraph, vertex, visited, component);</span></span>
<span class="line"><span style="color:#E1E4E8;">      scc.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(component);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> scc;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> dfsFirstPass</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">vertex</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stack</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor.vertex)) {</span></span>
<span class="line"><span style="color:#B392F0;">      dfsFirstPass</span><span style="color:#E1E4E8;">(graph, neighbor.vertex, visited, stack);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> dfsSecondPass</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">vertex</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">component</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  visited.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">  component.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">visited.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(neighbor.vertex)) {</span></span>
<span class="line"><span style="color:#B392F0;">      dfsSecondPass</span><span style="color:#E1E4E8;">(graph, neighbor.vertex, visited, component);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> reverseGraph</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> reversed</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> AdjacencyList</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 添加所有顶点</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    reversed.</span><span style="color:#B392F0;">addVertex</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 反转所有边</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getVertices</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> neighbors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> graph.</span><span style="color:#B392F0;">getNeighbors</span><span style="color:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> neighbor</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> neighbors) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      reversed.</span><span style="color:#B392F0;">addEdge</span><span style="color:#E1E4E8;">(neighbor.vertex, vertex, neighbor.weight);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> reversed;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (强连通分量)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>有向图：</span></span>
<span class="line"><span>A → B → C → D</span></span>
<span class="line"><span>↑   ↓   ↑   ↓</span></span>
<span class="line"><span>E ← F   G → H</span></span>
<span class="line"><span></span></span>
<span class="line"><span>强连通分量：</span></span>
<span class="line"><span>SCC1: [A, E, F, B] (相互可达)</span></span>
<span class="line"><span>SCC2: [C, G] (相互可达)  </span></span>
<span class="line"><span>SCC3: [D] (单独顶点)</span></span>
<span class="line"><span>SCC4: [H] (单独顶点)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Kosaraju过程：</span></span>
<span class="line"><span>第一次DFS（完成顺序）: D, H, C, G, B, F, E, A</span></span>
<span class="line"><span>反向图DFS: </span></span>
<span class="line"><span>  从A开始 → 找到SCC1: [A, B, E, F]</span></span>
<span class="line"><span>  从C开始 → 找到SCC2: [C, G] </span></span>
<span class="line"><span>  从D开始 → 找到SCC3: [D]</span></span>
<span class="line"><span>  从H开始 → 找到SCC4: [H]</span></span></code></pre></div>`,90)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
