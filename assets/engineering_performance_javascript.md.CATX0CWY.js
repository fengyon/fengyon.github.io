import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"JavaScript 性能优化","description":"","frontmatter":{},"headers":[{"level":2,"title":"JavaScript 性能基础","slug":"javascript-performance-basics","link":"#javascript-performance-basics","children":[]},{"level":2,"title":"代码分割与懒加载","slug":"code-splitting-lazy-loading","link":"#code-splitting-lazy-loading","children":[]},{"level":2,"title":"长任务分割与调度","slug":"long-task-splitting-scheduling","link":"#long-task-splitting-scheduling","children":[]},{"level":2,"title":"内存管理与垃圾回收","slug":"memory-management-garbage-collection","link":"#memory-management-garbage-collection","children":[]},{"level":2,"title":"函数优化与执行效率","slug":"function-optimization-execution-efficiency","link":"#function-optimization-execution-efficiency","children":[]},{"level":2,"title":"DOM 操作优化","slug":"dom-manipulation-optimization","link":"#dom-manipulation-optimization","children":[]},{"level":2,"title":"异步操作优化","slug":"async-operations-optimization","link":"#async-operations-optimization","children":[]},{"level":2,"title":"模块与打包优化","slug":"module-bundling-optimization","link":"#module-bundling-optimization","children":[]},{"level":2,"title":"性能监控与检测","slug":"performance-monitoring-detection","link":"#performance-monitoring-detection","children":[]}],"relativePath":"engineering/performance/javascript.md","filePath":"engineering/performance/javascript.md"}'),o={name:"engineering/performance/javascript.md"};function e(t,s,c,r,E,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/performance/javascript.md for this page in Markdown format</div><h1 id="javascript-性能优化" tabindex="-1">JavaScript 性能优化 <a class="header-anchor" href="#javascript-性能优化" aria-label="Permalink to &quot;JavaScript 性能优化&quot;">​</a></h1><h2 id="javascript-performance-basics" tabindex="-1">JavaScript 性能基础 <a class="header-anchor" href="#javascript-performance-basics" aria-label="Permalink to &quot;JavaScript 性能基础 {#javascript-performance-basics}&quot;">​</a></h2><p>JavaScript 性能优化关注执行效率、内存管理和运行时特性。现代 JavaScript 引擎采用即时编译、内联缓存和隐藏类优化等技术，但代码编写方式仍显著影响最终性能。优化核心是减少主线程阻塞，避免长任务导致的界面冻结。</p><p>特点：JavaScript 优化需要在开发效率和运行时性能间平衡。微优化在特定场景有效，但架构级优化通常收益更大。理解 V8 引擎工作机制是高效优化的前提。</p><p>示意图： JavaScript 执行流程： 解析 → 字节码生成 → 解释执行 → 热点识别 → 优化编译 → 反优化 性能陷阱：类型变化 → 隐藏类失效 | 大对象分配 → 垃圾回收压力 | 同步操作 → 主线程阻塞</p><h2 id="code-splitting-lazy-loading" tabindex="-1">代码分割与懒加载 <a class="header-anchor" href="#code-splitting-lazy-loading" aria-label="Permalink to &quot;代码分割与懒加载 {#code-splitting-lazy-loading}&quot;">​</a></h2><p>代码分割将应用拆分为按需加载的块，减少初始包体积。动态 import() 实现路由级和组件级分割，Webpack SplitChunksPlugin 提取公共依赖。懒加载延迟非关键资源加载时机，提升首屏性能。</p><p>特点：分割粒度影响加载性能和缓存效率。过细分割增加请求开销，过粗分割失去按需加载优势。预加载关键包，预获取可能使用的包。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 路由级代码分割</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> Home</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> lazy</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./pages/Home&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> About</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> lazy</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./pages/About&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件级懒加载</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> HeavyComponent</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> lazy</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">  import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/HeavyComponent&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">module</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.HeavyComponent</span></span>
<span class="line"><span style="color:#E1E4E8;">  }))</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 预加载策略</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> preloadMap</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/about&#39;</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./pages/About&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/contact&#39;</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./pages/Contact&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 鼠标悬停时预加载</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> onLinkHover</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">route</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (preloadMap[route] </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">preloaded[route]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    preloadMap[route]();</span></span>
<span class="line"><span style="color:#E1E4E8;">    preloaded[route] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="long-task-splitting-scheduling" tabindex="-1">长任务分割与调度 <a class="header-anchor" href="#long-task-splitting-scheduling" aria-label="Permalink to &quot;长任务分割与调度 {#long-task-splitting-scheduling}&quot;">​</a></h2><p>长任务 (超过 50ms 的连续执行) 阻塞主线程，导致界面无响应。通过任务分解、异步执行和空闲期调度，将长任务拆分为可中断的短任务。requestIdleCallback 在浏览器空闲期执行低优先级任务，requestAnimationFrame 确保动画流畅。</p><p>特点：任务分割需要考虑任务原子性和状态一致性。调度策略应基于任务优先级和用户交互状态。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 使用requestIdleCallback分割任务</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> processLargeData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> chunkSize</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> processChunk</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">deadline</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (index </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> deadline.</span><span style="color:#B392F0;">timeRemaining</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 处理数据块</span></span>
<span class="line"><span style="color:#B392F0;">      processItem</span><span style="color:#E1E4E8;">(data[index]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      index</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (index </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 继续在下一个空闲期处理</span></span>
<span class="line"><span style="color:#B392F0;">      requestIdleCallback</span><span style="color:#E1E4E8;">(processChunk);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 全部完成</span></span>
<span class="line"><span style="color:#B392F0;">      callback</span><span style="color:#E1E4E8;">?.();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  requestIdleCallback</span><span style="color:#E1E4E8;">(processChunk);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用requestAnimationFrame优化动画计算</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> smoothAnimation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> startTime </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> animate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">timestamp</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">startTime) startTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> timestamp;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> progress</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> timestamp </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算下一帧状态（保持轻量）</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newPosition</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> calculatePosition</span><span style="color:#E1E4E8;">(progress);</span></span>
<span class="line"><span style="color:#B392F0;">    updateElementPosition</span><span style="color:#E1E4E8;">(newPosition);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (progress </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">      requestAnimationFrame</span><span style="color:#E1E4E8;">(animate);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  requestAnimationFrame</span><span style="color:#E1E4E8;">(animate);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 任务优先级调度</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> TaskScheduler</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.highPriorityTasks </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.lowPriorityTasks </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isProcessing </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  addTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">task</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">priority</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;low&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> queue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> priority </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;high&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.highPriorityTasks </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.lowPriorityTasks;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(task);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleProcessing</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  scheduleProcessing</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isProcessing) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.highPriorityTasks.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processHighPriority</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lowPriorityTasks.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processLowPriority</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  processHighPriority</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isProcessing </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.highPriorityTasks.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 同步执行高优先级任务</span></span>
<span class="line"><span style="color:#B392F0;">    task</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.highPriorityTasks.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 继续处理下一个高优先级任务</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processHighPriority</span><span style="color:#E1E4E8;">(), </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.isProcessing </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleProcessing</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  processLowPriority</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isProcessing </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    requestIdleCallback</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">deadline</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lowPriorityTasks.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> deadline.</span><span style="color:#B392F0;">timeRemaining</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.lowPriorityTasks.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">        task</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.isProcessing </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lowPriorityTasks.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ||</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.highPriorityTasks.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleProcessing</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="memory-management-garbage-collection" tabindex="-1">内存管理与垃圾回收 <a class="header-anchor" href="#memory-management-garbage-collection" aria-label="Permalink to &quot;内存管理与垃圾回收 {#memory-management-garbage-collection}&quot;">​</a></h2><p>JavaScript 内存管理基于自动垃圾回收，但不当引用仍导致内存泄漏。优化策略包括及时释放引用、避免全局变量、使用对象池复用对象。WeakMap 和 WeakSet 不阻止垃圾回收，适合缓存场景。</p><p>特点：内存优化重点是识别和防止泄漏，而非微观管理。性能分析工具监控内存使用模式，发现异常增长。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 对象池实现</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ObjectPool</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">createFn</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">resetFn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> obj) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.createFn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> createFn;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.resetFn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> resetFn;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.freeList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.count </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  acquire</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.freeList.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.freeList.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createFn</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  release</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resetFn</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.freeList.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 使用示例：向量对象池</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#FFAB70;"> vectorPool</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ObjectPool</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ x: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">vec</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { vec.x </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; vec.y </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 避免内存泄漏的模式</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> createEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handler</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">/* 处理逻辑 */</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  element.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, handler);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 提供清理方法</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    element.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, handler);</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用WeakMap做缓存（不阻止垃圾回收）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> weakCache</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WeakMap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> getExpensiveValue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">weakCache.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(object)) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> computeExpensiveValue</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">    weakCache.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(object, value);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> weakCache.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="function-optimization-execution-efficiency" tabindex="-1">函数优化与执行效率 <a class="header-anchor" href="#function-optimization-execution-efficiency" aria-label="Permalink to &quot;函数优化与执行效率 {#function-optimization-execution-efficiency}&quot;">​</a></h2><p>函数级别优化包括减少重复计算、优化热路径和使用高效算法。记忆化缓存计算结果，内联小函数减少调用开销，避免在热循环中创建对象。</p><p>特点：函数优化应基于性能分析数据，避免过早优化。关注算法复杂度，但实际性能受常数因子和硬件特性影响。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 记忆化优化</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> memoize</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> cache</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(args);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (cache.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> fn.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"><span style="color:#E1E4E8;">    cache.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, result);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 防抖与节流优化频繁调用</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> debounce</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">wait</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">immediate</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> timeout;</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> executedFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> later</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      timeout </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">immediate) func.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> callNow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> immediate </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">timeout;</span></span>
<span class="line"><span style="color:#B392F0;">    clearTimeout</span><span style="color:#E1E4E8;">(timeout);</span></span>
<span class="line"><span style="color:#E1E4E8;">    timeout </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(later, wait);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (callNow) func.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> throttle</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">limit</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> inThrottle;</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">inThrottle) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      func.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"><span style="color:#E1E4E8;">      inThrottle </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> inThrottle </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">, limit);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 热路径优化：减少函数调用和对象创建</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> optimizedHotPath</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 预先计算长度避免重复访问</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> len</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 使用局部变量缓存频繁访问的属性</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">property</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> len; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 内联简单计算，避免函数调用开销</span></span>
<span class="line"><span style="color:#E1E4E8;">    result </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> property[i] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> property[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="dom-manipulation-optimization" tabindex="-1">DOM 操作优化 <a class="header-anchor" href="#dom-manipulation-optimization" aria-label="Permalink to &quot;DOM 操作优化 {#dom-manipulation-optimization}&quot;">​</a></h2><p>DOM 操作是 JavaScript 性能主要瓶颈。优化策略包括批量更新、减少重排重绘、使用文档碎片和事件委托。虚拟 DOM 库通过差异比对最小化实际 DOM 操作。</p><p>特点：DOM 访问比 JavaScript 执行慢几个数量级。读写分离减少布局抖动，离线操作避免中间渲染。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 批量DOM更新</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> batchDOMUpdates</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">elements</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">updates</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 触发批量更新前</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> fragment</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createDocumentFragment</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  updates.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">update</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> element</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(update.tag);</span></span>
<span class="line"><span style="color:#E1E4E8;">    element.textContent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> update.content;</span></span>
<span class="line"><span style="color:#E1E4E8;">    fragment.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 单次插入到DOM</span></span>
<span class="line"><span style="color:#E1E4E8;">  container.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(fragment);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 减少重排重绘</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> efficientStyleChanges</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 触发一次重排</span></span>
<span class="line"><span style="color:#E1E4E8;">  element.style.display </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 批量修改样式（不会触发重排）</span></span>
<span class="line"><span style="color:#E1E4E8;">  element.style.width </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;100px&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  element.style.height </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;200px&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  element.style.padding </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;10px&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 触发一次重排</span></span>
<span class="line"><span style="color:#E1E4E8;">  element.style.display </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;block&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用requestAnimationFrame集合DOM更新</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> scheduledUpdate </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> pendingUpdates</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> scheduleUpdate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  pendingUpdates.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">scheduledUpdate) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    scheduledUpdate </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    requestAnimationFrame</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      scheduledUpdate </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> updates</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(pendingUpdates);</span></span>
<span class="line"><span style="color:#E1E4E8;">      pendingUpdates.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      updates.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">update</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> update</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 事件委托优化</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (event.target.tagName </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;LI&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 处理列表项点击，无需为每个li绑定监听器</span></span>
<span class="line"><span style="color:#B392F0;">    handleItemClick</span><span style="color:#E1E4E8;">(event.target);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="async-operations-optimization" tabindex="-1">异步操作优化 <a class="header-anchor" href="#async-operations-optimization" aria-label="Permalink to &quot;异步操作优化 {#async-operations-optimization}&quot;">​</a></h2><p>异步代码优化关注 Promise 性能、异步函数开销和并发控制。避免 Promise 构造函数重复执行同步代码，优化 async/await 使用模式，限制并发请求数量。</p><p>特点：异步操作优化减少微任务队列压力，避免内存泄漏。错误处理不影响性能关键路径。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Promise优化模式</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PromiseOptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 缓存Promise结果</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#FFAB70;"> cache</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> cachedAsyncOperation</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">operation</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> promise</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> operation</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">finally</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 可选的缓存过期策略</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(key), </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, promise);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> promise;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 并发控制</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> limitedConcurrency</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tasks</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">limit</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> executing</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> tasks) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (executing.size </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> limit) {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">race</span><span style="color:#E1E4E8;">(executing);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> promise</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> task</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">finally</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        executing.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(promise);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      executing.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(promise);</span></span>
<span class="line"><span style="color:#E1E4E8;">      results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(promise);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(results);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 优化的async/await模式</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> optimizedAsyncFlow</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 并行发起不依赖的请求</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">user</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">settings</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#B392F0;">    fetchUser</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#B392F0;">    fetchSettings</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 避免不必要的await</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> validationPromise</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> validateUser</span><span style="color:#E1E4E8;">(user);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> processingPromise</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> processSettings</span><span style="color:#E1E4E8;">(settings);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 需要结果时再await</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">isValid</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">processedSettings</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    validationPromise,</span></span>
<span class="line"><span style="color:#E1E4E8;">    processingPromise</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { user: isValid </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> user </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">, settings: processedSettings };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="module-bundling-optimization" tabindex="-1">模块与打包优化 <a class="header-anchor" href="#module-bundling-optimization" aria-label="Permalink to &quot;模块与打包优化 {#module-bundling-optimization}&quot;">​</a></h2><p>模块系统优化关注 Tree Shaking 效果、循环引用处理和动态导入开销。使用 ES 模块确保静态分析，避免运行时动态导入影响关键路径。</p><p>特点：模块结构影响打包工具优化能力。深层嵌套导入增加解析开销，Barrel 文件 (索引文件) 可能阻碍 Tree Shaking。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 优化模块结构</span></span>
<span class="line"><span style="color:#6A737D;">// 避免：</span></span>
<span class="line"><span style="color:#6A737D;">// export * from &#39;./utils&#39;;</span><span style="color:#6A737D;"> // 阻碍Tree Shaking</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 推荐：明确导出</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { formatDate } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./dateUtils&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { debounce } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./functionUtils&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { storage } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./storageUtils&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 动态导入优化</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> getHeavyModule</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> modulePromise </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">modulePromise) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 预加载但不阻塞</span></span>
<span class="line"><span style="color:#E1E4E8;">      modulePromise </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./heavyModule.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">module</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> module</span><span style="color:#E1E4E8;">.default)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          modulePromise </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 失败时重置</span></span>
<span class="line"><span style="color:#F97583;">          throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> modulePromise;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用Intersection Observer触发动态加载</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> lazyLoadModule</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">modulePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> observer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> IntersectionObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    entries.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entry</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (entry.isIntersecting) {</span></span>
<span class="line"><span style="color:#B392F0;">        import</span><span style="color:#E1E4E8;">(modulePath).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">module</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          callback</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.default);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        observer.</span><span style="color:#B392F0;">unobserve</span><span style="color:#E1E4E8;">(entry.target);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="performance-monitoring-detection" tabindex="-1">性能监控与检测 <a class="header-anchor" href="#performance-monitoring-detection" aria-label="Permalink to &quot;性能监控与检测 {#performance-monitoring-detection}&quot;">​</a></h2><p>运行时性能监控识别实际性能瓶颈。Performance API 测量具体操作耗时，Long Tasks API 检测阻塞任务，Memory API 监控内存使用。</p><p>特点：性能监控应同时关注实验室数据和真实用户数据。监控代码本身需要优化，避免影响测量结果。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 性能测量工具</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PerformanceMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#FFAB70;"> measurements</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> startMeasure</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.measurements.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      startTime: performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      startMemory: performance.memory?.usedJSHeapSize</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> endMeasure</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> measurement</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.measurements.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">measurement) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> measurement.startTime;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memoryUsed</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.memory </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      performance.memory.usedJSHeapSize </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> measurement.startMemory </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.measurements.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(name);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { duration, memoryUsed };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 自动测量函数执行</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> measureFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startMeasure</span><span style="color:#E1E4E8;">(fn.name);</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> fn.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(context, args);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">endMeasure</span><span style="color:#E1E4E8;">(fn.name);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> result.duration </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Slow function \${</span><span style="color:#E1E4E8;">fn</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">result</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 长任务监控</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;PerformanceObserver&#39;</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> window) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> observer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PerformanceObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">list</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.</span><span style="color:#B392F0;">getEntries</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">entry</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (entry.duration </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Long task detected:&#39;</span><span style="color:#E1E4E8;">, entry);</span></span>
<span class="line"><span style="color:#6A737D;">        // 上报到监控系统</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">({ entryTypes: [</span><span style="color:#9ECBFF;">&#39;longtask&#39;</span><span style="color:#E1E4E8;">] });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 内存监控</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> monitorMemory</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (performance.memory) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memory</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.memory;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> used</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> memory.usedJSHeapSize;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> limit</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> memory.jsHeapSizeLimit;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (used </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> limit </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0.9</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;High memory usage detected&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setInterval</span><span style="color:#E1E4E8;">(monitorMemory, </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">);</span></span></code></pre></div>`,38)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
