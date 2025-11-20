import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"渲染性能优化","description":"","frontmatter":{},"headers":[{"level":2,"title":"渲染基础概念","slug":"rendering-fundamentals","link":"#rendering-fundamentals","children":[]},{"level":2,"title":"关键渲染路径优化","slug":"critical-rendering-path","link":"#critical-rendering-path","children":[]},{"level":2,"title":"布局与重排优化","slug":"layout-and-reflow","link":"#layout-and-reflow","children":[]},{"level":2,"title":"绘制与重绘优化","slug":"paint-and-repaint","link":"#paint-and-repaint","children":[]},{"level":2,"title":"合成层优化","slug":"composite-layer","link":"#composite-layer","children":[]},{"level":2,"title":"CSS 性能优化","slug":"css-performance","link":"#css-performance","children":[]},{"level":2,"title":"JavaScript 渲染优化","slug":"javascript-rendering","link":"#javascript-rendering","children":[]},{"level":2,"title":"图片与媒体渲染优化","slug":"image-and-media","link":"#image-and-media","children":[]},{"level":2,"title":"字体渲染优化","slug":"font-rendering","link":"#font-rendering","children":[]},{"level":2,"title":"渲染性能监控","slug":"rendering-performance-monitoring","link":"#rendering-performance-monitoring","children":[]}],"relativePath":"engineering/performance/rendering.md","filePath":"engineering/performance/rendering.md"}'),o={name:"engineering/performance/rendering.md"};function e(t,s,c,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/performance/rendering.md for this page in Markdown format</div><h1 id="渲染性能优化" tabindex="-1">渲染性能优化 <a class="header-anchor" href="#渲染性能优化" aria-label="Permalink to &quot;渲染性能优化&quot;">​</a></h1><h2 id="rendering-fundamentals" tabindex="-1">渲染基础概念 <a class="header-anchor" href="#rendering-fundamentals" aria-label="Permalink to &quot;渲染基础概念 {#rendering-fundamentals}&quot;">​</a></h2><p>浏览器渲染是将 HTML、CSS 和 JavaScript 转换为用户可见像素的复杂过程。现代浏览器采用多阶段渲染流水线：解析、样式计算、布局、绘制和合成。理解这些阶段是优化渲染性能的基础。</p><p>特点：渲染性能优化关注<strong>减少计算量</strong>和<strong>避免重复工作</strong>。优化策略需要针对不同渲染阶段的特点，平衡视觉质量和执行效率。</p><p>示意图： 渲染流水线： HTML 解析 → DOM 构建 → CSS 解析 → 样式计算 → 布局 → 绘制 → 合成 性能瓶颈： 重排 (Layout) &gt; 重绘 (Paint) &gt; 合成 (Composite) 优化目标：减少重排 → 减少重绘 → 提升合成效率</p><h2 id="critical-rendering-path" tabindex="-1">关键渲染路径优化 <a class="header-anchor" href="#critical-rendering-path" aria-label="Permalink to &quot;关键渲染路径优化 {#critical-rendering-path}&quot;">​</a></h2><p>关键渲染路径是从接收 HTML 到首次渲染的时间线。优化核心是<strong>优先显示关键内容</strong>，通过资源优先级控制、CSS 和 JavaScript 优化，最小化首屏渲染时间。</p><p>特点：关键路径优化强调<strong>资源加载顺序</strong>和<strong>执行时机</strong>。阻塞渲染的资源应内联或异步加载，非关键内容延迟处理。</p><p>示意图： 关键路径时间线： HTML 下载 → DOM 构建 → CSSOM 构建 → JavaScript 执行 → 渲染树 → 布局 → 绘制 优化策略： CSS 内联关键样式 + 异步加载非关键 CSS JavaScript 使用 async/defer 避免阻塞 图片懒加载 + 字体加载优化</p><h2 id="layout-and-reflow" tabindex="-1">布局与重排优化 <a class="header-anchor" href="#layout-and-reflow" aria-label="Permalink to &quot;布局与重排优化 {#layout-and-reflow}&quot;">​</a></h2><p>布局 (重排) 是计算元素几何信息的过程，代价昂贵。触发条件包括：尺寸变化、位置变化、内容变化和窗口调整。优化策略包括批量读写、使用 transform 替代位置调整、避免强制同步布局。</p><p>特点：布局优化核心是<strong>读写分离</strong>和<strong>样式计算最小化</strong>。现代浏览器通过队列机制批量处理样式变更，但强制同步布局会破坏这种优化。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 避免强制同步布局</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> efficientLayoutUpdates</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 不良模式：读写交替导致强制布局</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> items.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 读取（触发布局）</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> height</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> items[i].offsetHeight;</span></span>
<span class="line"><span style="color:#6A737D;">    // 写入（再次触发布局）</span></span>
<span class="line"><span style="color:#E1E4E8;">    items[i].style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> height </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 10</span><span style="color:#F97583;"> +</span><span style="color:#9ECBFF;"> &#39;px&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 优化模式：批量读写</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> heights</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#6A737D;">  // 批量读取</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> items.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    heights.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(items[i].offsetHeight);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 批量写入</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> items.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    items[i].style.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> heights[i] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 10</span><span style="color:#F97583;"> +</span><span style="color:#9ECBFF;"> &#39;px&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用FastDOM模式</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> FastDOM</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#FFAB70;"> reads</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#FFAB70;"> writes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> scheduleRead</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.reads.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(fn);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleFlush</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> scheduleWrite</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.writes.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(fn);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleFlush</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> scheduleFlush</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.scheduled) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.scheduled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">      requestAnimationFrame</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 先执行所有读取</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.reads.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> fn</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.reads.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 再执行所有写入</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.writes.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> fn</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.writes.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.scheduled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="paint-and-repaint" tabindex="-1">绘制与重绘优化 <a class="header-anchor" href="#paint-and-repaint" aria-label="Permalink to &quot;绘制与重绘优化 {#paint-and-repaint}&quot;">​</a></h2><p>绘制是将布局信息转换为像素的过程，重绘是更新元素视觉属性 (颜色、背景等)。优化策略包括减少绘制区域、使用 CSS 硬件加速、避免昂贵属性和使用 will-change 提示。</p><p>特点：绘制优化关注<strong>绘制复杂度</strong>和<strong>区域大小</strong>。使用 Chrome DevTools 的 Paint Flashing 可以识别重绘区域，针对性优化。</p><p>示意图： 绘制性能影响因素： 绘制区域大小 ← 样式复杂度 ← 浏览器优化能力 优化技术： 减少 DOM 数量 + 使用 opacity/transform + 图层提升 + 避免 box-shadow 过度使用</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 绘制优化实践</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> optimizePainting</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 使用transform和opacity触发合成层</span></span>
<span class="line"><span style="color:#6A737D;">  // 这些属性不会触发重绘</span></span>
<span class="line"><span style="color:#E1E4E8;">  element.style.transform </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;translateX(100px)&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  element.style.opacity </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;0.5&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 避免在动画中修改布局属性</span></span>
<span class="line"><span style="color:#6A737D;">  // 不良：触发重排和重绘</span></span>
<span class="line"><span style="color:#6A737D;">  // element.style.width = &#39;200px&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 使用will-change预提示浏览器</span></span>
<span class="line"><span style="color:#E1E4E8;">  element.style.willChange </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;transform&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 动画结束后移除will-change</span></span>
<span class="line"><span style="color:#E1E4E8;">  element.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;transitionend&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    element.style.willChange </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;auto&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 减少绘制区域技术</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> reducePaintAreas</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 使用clip-path限制绘制区域</span></span>
<span class="line"><span style="color:#E1E4E8;">  element.style.clipPath </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;circle(50% at 50% 50%)&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 对于固定位置元素，使用contain属性</span></span>
<span class="line"><span style="color:#E1E4E8;">  element.style.contain </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;layout paint style&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="composite-layer" tabindex="-1">合成层优化 <a class="header-anchor" href="#composite-layer" aria-label="Permalink to &quot;合成层优化 {#composite-layer}&quot;">​</a></h2><p>合成是将多个图层组合为最终画面的过程。通过创建独立合成层，可以避免不必要的重绘和重排。优化策略包括合理使用 transform、opacity、will-change 和合理管理图层数量。</p><p>特点：合成层优化平衡<strong>性能收益</strong>和<strong>内存开销</strong>。过多的合成层会增加内存使用和管理成本，需要针对性创建。</p><p>示意图： 合成层创建条件： transform3d/opacity/will-change/filter/video/canvas 图层树：根图层 → 子图层 → 孙子图层 合成过程：图层光栅化 → 图层组合 → 屏幕显示</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 合成层管理</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> LayerManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.activeLayers </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 创建合成层用于动画</span></span>
<span class="line"><span style="color:#B392F0;">  promoteToLayer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reason</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;animation&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (reason </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;animation&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      element.style.transform </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;translateZ(0)&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (reason </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;will-change&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      element.style.willChange </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;transform&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.activeLayers.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 自动清理长时间未使用的图层</span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.activeLayers.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(element)) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">demoteFromLayer</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 降级合成层</span></span>
<span class="line"><span style="color:#B392F0;">  demoteFromLayer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    element.style.transform </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    element.style.willChange </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;auto&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.activeLayers.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 批量管理图层</span></span>
<span class="line"><span style="color:#B392F0;">  optimizeLayers</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">elements</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 对需要频繁更新的元素创建图层</span></span>
<span class="line"><span style="color:#E1E4E8;">    elements.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">needsFrequentUpdates</span><span style="color:#E1E4E8;">(element)) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">promoteToLayer</span><span style="color:#E1E4E8;">(element, </span><span style="color:#9ECBFF;">&#39;animation&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  needsFrequentUpdates</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检测元素是否在动画或频繁更新</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> computedStyle</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.</span><span style="color:#B392F0;">getComputedStyle</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> computedStyle.animationName </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">           computedStyle.transitionProperty </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="css-performance" tabindex="-1">CSS 性能优化 <a class="header-anchor" href="#css-performance" aria-label="Permalink to &quot;CSS 性能优化 {#css-performance}&quot;">​</a></h2><p>CSS 性能影响样式计算、布局和绘制各个阶段。优化策略包括选择器性能优化、减少样式复杂度、使用高效属性和避免样式计算阻塞。</p><p>特点：CSS 优化关注<strong>选择器效率</strong>和<strong>样式计算成本</strong>。现代浏览器优化了大部分选择器性能，但深层嵌套和通用选择器仍需避免。</p><p>示意图： 选择器性能排序： ID 选择器 &gt; 类选择器 &gt; 标签选择器 &gt; 通用选择器 样式计算：匹配选择器 → 计算特异性 → 应用样式 优化重点：减少选择器复杂度 + 避免频繁修改样式 + 使用 CSS 变量</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* CSS优化示例 */</span></span>
<span class="line"><span style="color:#6A737D;">/* 不良：过于复杂的选择器 */</span></span>
<span class="line"><span style="color:#B392F0;">.container</span><span style="color:#85E89D;"> ul</span><span style="color:#85E89D;"> li</span><span style="color:#85E89D;"> a</span><span style="color:#85E89D;"> span</span><span style="color:#B392F0;">.highlight</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#79B8FF;">  color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">; </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 优化：使用类选择器 */</span></span>
<span class="line"><span style="color:#B392F0;">.text-highlight</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#79B8FF;">  color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">; </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 使用CSS变量减少计算 */</span></span>
<span class="line"><span style="color:#B392F0;">:root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  --primary-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#007bff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">  --spacing-unit</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--primary-color</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--spacing-unit</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 使用contain属性限制样式计算范围 */</span></span>
<span class="line"><span style="color:#B392F0;">.isolated-component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  contain</span><span style="color:#E1E4E8;">: layout </span><span style="color:#79B8FF;">style</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 高效动画属性 */</span></span>
<span class="line"><span style="color:#B392F0;">.efficient-animation</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  /* 使用transform和opacity */</span></span>
<span class="line"><span style="color:#79B8FF;">  transition</span><span style="color:#E1E4E8;">: transform </span><span style="color:#79B8FF;">0.3</span><span style="color:#F97583;">s</span><span style="color:#79B8FF;"> ease</span><span style="color:#E1E4E8;">, opacity </span><span style="color:#79B8FF;">0.3</span><span style="color:#F97583;">s</span><span style="color:#79B8FF;"> ease</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.expensive-animation</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  /* 避免使用布局属性动画 */</span></span>
<span class="line"><span style="color:#79B8FF;">  transition</span><span style="color:#E1E4E8;">: width </span><span style="color:#79B8FF;">0.3</span><span style="color:#F97583;">s</span><span style="color:#79B8FF;"> ease</span><span style="color:#E1E4E8;">, height </span><span style="color:#79B8FF;">0.3</span><span style="color:#F97583;">s</span><span style="color:#79B8FF;"> ease</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="javascript-rendering" tabindex="-1">JavaScript 渲染优化 <a class="header-anchor" href="#javascript-rendering" aria-label="Permalink to &quot;JavaScript 渲染优化 {#javascript-rendering}&quot;">​</a></h2><p>JavaScript 执行可能阻塞渲染，优化策略包括任务分割、异步执行、使用 requestAnimationFrame 和减少 DOM 操作。现代框架的虚拟 DOM 和增量更新机制也显著提升渲染性能。</p><p>特点：JavaScript 渲染优化核心是<strong>减少主线程阻塞时间</strong>和<strong>优化 DOM 操作</strong>。将任务分解为小块，在浏览器空闲期执行非关键任务。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 使用requestAnimationFrame优化渲染</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> AnimationOptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.animations </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.frameId </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 注册动画更新函数</span></span>
<span class="line"><span style="color:#B392F0;">  registerAnimation</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">updateFn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.animations.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, updateFn);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleFrame</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 调度动画帧</span></span>
<span class="line"><span style="color:#B392F0;">  scheduleFrame</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.frameId) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.frameId </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> requestAnimationFrame</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.updateAnimations.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 更新所有动画</span></span>
<span class="line"><span style="color:#B392F0;">  updateAnimations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">timestamp</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.animations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updateFn</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      updateFn</span><span style="color:#E1E4E8;">(timestamp);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.frameId </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.animations.size </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleFrame</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 停止动画</span></span>
<span class="line"><span style="color:#B392F0;">  stopAnimation</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.animations.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 优化DOM操作批次</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> batchDOMOperations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">operations</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 使用文档片段批量操作</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> fragment</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createDocumentFragment</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  operations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">op</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> element</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(op.tag);</span></span>
<span class="line"><span style="color:#E1E4E8;">    element.textContent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> op.content;</span></span>
<span class="line"><span style="color:#E1E4E8;">    fragment.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 单次插入到DOM</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;container&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(fragment);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用微任务批量更新</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> scheduleMicrotaskUpdate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updateFn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> scheduled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">scheduled) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      scheduled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        scheduled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">        updateFn</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="image-and-media" tabindex="-1">图片与媒体渲染优化 <a class="header-anchor" href="#image-and-media" aria-label="Permalink to &quot;图片与媒体渲染优化 {#image-and-media}&quot;">​</a></h2><p>图片和媒体资源是渲染性能的重要影响因素。优化策略包括格式选择、响应式图片、懒加载和渐进式加载。现代图片格式如 WebP 和 AVIF 提供更好的压缩效率。</p><p>特点：图片优化平衡<strong>视觉质量</strong>和<strong>加载性能</strong>。根据设备能力和网络条件提供合适的资源版本。</p><p>示意图： 图片优化策略： 格式选择 (WebP/AVIF) → 尺寸适配 (响应式) → 压缩质量 (80-85%) → 加载时机 (懒加载) 性能收益：减少 60-80%图片体积 + 更快首屏渲染</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 响应式图片优化</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ResponsiveImageLoader</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.breakpoints </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1920</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.formats </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;webp&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;avif&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;jpg&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 生成图片srcset</span></span>
<span class="line"><span style="color:#B392F0;">  generateSrcSet</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">basePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">imageName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> srcset</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.formats.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">format</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      srcset[format] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.breakpoints.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">width</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#9ECBFF;">        \`\${</span><span style="color:#E1E4E8;">basePath</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#E1E4E8;">imageName</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">width</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">format</span><span style="color:#9ECBFF;">} \${</span><span style="color:#E1E4E8;">width</span><span style="color:#9ECBFF;">}w\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      ).</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> srcset;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 懒加载图片</span></span>
<span class="line"><span style="color:#B392F0;">  setupLazyLoading</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">images</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> observer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> IntersectionObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      entries.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entry</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (entry.isIntersecting) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> img</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> entry.target;</span></span>
<span class="line"><span style="color:#E1E4E8;">          img.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> img.dataset.src;</span></span>
<span class="line"><span style="color:#E1E4E8;">          img.classList.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;lazy&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          observer.</span><span style="color:#B392F0;">unobserve</span><span style="color:#E1E4E8;">(img);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    images.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">img</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(img);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 渐进式图片加载</span></span>
<span class="line"><span style="color:#B392F0;">  setupProgressiveLoading</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">container</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 先加载低质量占位图</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> placeholder</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createLowQualityPlaceholder</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    container.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(placeholder);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 然后加载高质量图片</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadHighQualityImage</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">highResImg</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      container.</span><span style="color:#B392F0;">replaceChild</span><span style="color:#E1E4E8;">(highResImg, placeholder);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="font-rendering" tabindex="-1">字体渲染优化 <a class="header-anchor" href="#font-rendering" aria-label="Permalink to &quot;字体渲染优化 {#font-rendering}&quot;">​</a></h2><p>字体加载和渲染影响文本显示性能和视觉稳定性。优化策略包括字体显示控制、子集化、预加载和 FOUT/FOIT 管理。使用 font-display 属性控制字体加载行为。</p><p>特点：字体优化关注<strong>加载时机</strong>和<strong>渲染行为</strong>。避免布局偏移和不可见文本闪烁，提供平滑的字体加载体验。</p><p>示意图： 字体加载时间线： 字体请求 → 字体阻塞期 → 交换期 → 失败期 font-display 控制： block：阻塞文本显示 | swap：立即回退 | optional：可能不显示 优化目标：最小化布局偏移 + 快速显示内容</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 字体加载优化 */</span></span>
<span class="line"><span style="color:#F97583;">@font-face</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  font-family</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;OptimizedFont&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  src</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;font.woff2&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#79B8FF;">format</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;woff2&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#79B8FF;">       url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;font.woff&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#79B8FF;">format</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;woff&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">  font-display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">swap</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 使用系统字体立即显示，然后交换 */</span></span>
<span class="line"><span style="color:#79B8FF;">  font-weight</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  unicode-range</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">U+000-5FF</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 拉丁字符子集 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 预加载关键字体 */</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;"> rel=&quot;preload&quot; href=&quot;</span><span style="color:#85E89D;">critical-font</span><span style="color:#E1E4E8;">.woff2&quot; as=&quot;font&quot; type=&quot;font/woff2&quot; crossorigin</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 使用CSS大小调整避免布局偏移 */</span></span>
<span class="line"><span style="color:#B392F0;">.text-element</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">clamp</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2.5</span><span style="color:#F97583;">vw</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">  line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1.4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 字体加载完成后的优化 */</span></span>
<span class="line"><span style="color:#B392F0;">.font-loaded</span><span style="color:#B392F0;"> .text-element</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  font-family</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;OptimizedFont&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">system-ui</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 字体加载状态管理</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> FontLoadManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loadedFonts </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 监控字体加载</span></span>
<span class="line"><span style="color:#B392F0;">  monitorFontLoad</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fontFamily</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> font</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> FontFaceObserver</span><span style="color:#E1E4E8;">(fontFamily);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    font.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.loadedFonts.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(fontFamily);</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.documentElement.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fonts-loaded&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 触发字体加载完成事件</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">onFontLoaded</span><span style="color:#E1E4E8;">(fontFamily);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Font \${</span><span style="color:#E1E4E8;">fontFamily</span><span style="color:#9ECBFF;">} failed to load:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onFontLoaded</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fontFamily</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 更新CSS变量或触发重新渲染</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.documentElement.style.</span><span style="color:#B392F0;">setProperty</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;--font-loaded&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 预连接字体域名</span></span>
<span class="line"><span style="color:#B392F0;">  preconnectFontHosts</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">hosts</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    hosts.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">host</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> link</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.rel </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;preconnect&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.href </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> host;</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.crossOrigin </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;anonymous&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.head.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(link);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="rendering-performance-monitoring" tabindex="-1">渲染性能监控 <a class="header-anchor" href="#rendering-performance-monitoring" aria-label="Permalink to &quot;渲染性能监控 {#rendering-performance-monitoring}&quot;">​</a></h2><p>实时监控渲染性能指标，识别瓶颈和优化机会。使用 Performance API、Frame Timing API 和自定义指标跟踪渲染性能。</p><p>特点：渲染监控关注<strong>真实用户数据</strong>和<strong>关键性能指标</strong>。结合实验室测试和现场监控，全面了解渲染性能状况。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 渲染性能监控</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> RenderingMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 监控帧率</span></span>
<span class="line"><span style="color:#B392F0;">  startFrameRateMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> lastTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> frameCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> checkFrames</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> currentTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      frameCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (currentTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> lastTime </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> fps</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">((frameCount </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (currentTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> lastTime));</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordMetric</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fps&#39;</span><span style="color:#E1E4E8;">, fps);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        frameCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        lastTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 低帧率警告</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (fps </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 30</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reportLowFPS</span><span style="color:#E1E4E8;">(fps);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#B392F0;">      requestAnimationFrame</span><span style="color:#E1E4E8;">(checkFrames);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    requestAnimationFrame</span><span style="color:#E1E4E8;">(checkFrames);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 监控布局偏移</span></span>
<span class="line"><span style="color:#B392F0;">  startLayoutShiftMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> clsValue </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PerformanceObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">list</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> entry</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> list.</span><span style="color:#B392F0;">getEntries</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">entry.hadRecentInput) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          clsValue </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> entry.value;</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordMetric</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cls&#39;</span><span style="color:#E1E4E8;">, clsValue);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">({ type: </span><span style="color:#9ECBFF;">&#39;layout-shift&#39;</span><span style="color:#E1E4E8;">, buffered: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 记录渲染指标</span></span>
<span class="line"><span style="color:#B392F0;">  recordMetric</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(name)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      value,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 生成性能报告</span></span>
<span class="line"><span style="color:#B392F0;">  generateReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">values</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> recentValues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> values.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 最近100个样本</span></span>
<span class="line"><span style="color:#E1E4E8;">      report[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        current: recentValues[recentValues.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]?.value,</span></span>
<span class="line"><span style="color:#E1E4E8;">        average: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateAverage</span><span style="color:#E1E4E8;">(recentValues),</span></span>
<span class="line"><span style="color:#E1E4E8;">        min: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateMin</span><span style="color:#E1E4E8;">(recentValues),</span></span>
<span class="line"><span style="color:#E1E4E8;">        max: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateMax</span><span style="color:#E1E4E8;">(recentValues),</span></span>
<span class="line"><span style="color:#E1E4E8;">        trend: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateTrend</span><span style="color:#E1E4E8;">(recentValues)</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> report;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 监控强制同步布局</span></span>
<span class="line"><span style="color:#B392F0;">  monitorForcedSyncLayout</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> originalOffsetHeight</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">getOwnPropertyDescriptor</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#79B8FF;">      HTMLElement</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;offsetHeight&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ).get;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">HTMLElement</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;offsetHeight&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">      get</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> originalOffsetHeight.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">        // 检测到在样式修改后立即读取布局属性</span></span>
<span class="line"><span style="color:#E1E4E8;">        performance.</span><span style="color:#B392F0;">mark</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;forced-sync-layout&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,48)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
