import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"内存管理","description":"","frontmatter":{},"headers":[{"level":2,"title":"内存管理的重要性","slug":"内存管理的重要性","link":"#内存管理的重要性","children":[]},{"level":2,"title":"Web 3D 内存架构","slug":"web-3d-内存架构","link":"#web-3d-内存架构","children":[{"level":3,"title":"内存组成结构","slug":"内存组成结构","link":"#内存组成结构","children":[]},{"level":3,"title":"内存生命周期","slug":"内存生命周期","link":"#内存生命周期","children":[]}]},{"level":2,"title":"几何体内存管理","slug":"几何体内存管理","link":"#几何体内存管理","children":[{"level":3,"title":"几何体内存结构","slug":"几何体内存结构","link":"#几何体内存结构","children":[]},{"level":3,"title":"几何体优化策略","slug":"几何体优化策略","link":"#几何体优化策略","children":[]},{"level":3,"title":"几何体内存池","slug":"几何体内存池","link":"#几何体内存池","children":[]}]},{"level":2,"title":"纹理内存管理","slug":"纹理内存管理","link":"#纹理内存管理","children":[{"level":3,"title":"纹理内存优化","slug":"纹理内存优化","link":"#纹理内存优化","children":[]},{"level":3,"title":"纹理压缩与格式选择","slug":"纹理压缩与格式选择","link":"#纹理压缩与格式选择","children":[]}]},{"level":2,"title":"材质内存管理","slug":"材质内存管理","link":"#材质内存管理","children":[{"level":3,"title":"材质共享与重用","slug":"材质共享与重用","link":"#材质共享与重用","children":[]}]},{"level":2,"title":"场景图内存管理","slug":"场景图内存管理","link":"#场景图内存管理","children":[{"level":3,"title":"对象生命周期管理","slug":"对象生命周期管理","link":"#对象生命周期管理","children":[]}]},{"level":2,"title":"内存监控与分析","slug":"内存监控与分析","link":"#内存监控与分析","children":[{"level":3,"title":"实时内存监控","slug":"实时内存监控","link":"#实时内存监控","children":[]}]},{"level":2,"title":"自动化内存管理","slug":"自动化内存管理","link":"#自动化内存管理","children":[{"level":3,"title":"智能垃圾回收","slug":"智能垃圾回收","link":"#智能垃圾回收","children":[]}]}],"relativePath":"web-3d/performance/memory.md","filePath":"web-3d/performance/memory.md"}'),o={name:"web-3d/performance/memory.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /web-3d/performance/memory.md for this page in Markdown format</div><h1 id="内存管理" tabindex="-1">内存管理 <a class="header-anchor" href="#内存管理" aria-label="Permalink to &quot;内存管理&quot;">​</a></h1><h2 id="内存管理的重要性" tabindex="-1">内存管理的重要性 <a class="header-anchor" href="#内存管理的重要性" aria-label="Permalink to &quot;内存管理的重要性&quot;">​</a></h2><p>在 Web 3D 应用中，内存管理直接关系到应用性能、稳定性和用户体验。不当的内存使用会导致页面卡顿、崩溃，特别是在移动设备和低配置硬件上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>内存问题演进过程</span></span>
<span class="line"><span>正常状态 → 内存泄漏 → 内存膨胀 → 性能下降 → 应用崩溃</span></span>
<span class="line"><span>    ↓          ↓          ↓          ↓          ↓</span></span>
<span class="line"><span> 稳定运行  对象未释放  资源积累  帧率下降  程序终止</span></span></code></pre></div><h2 id="web-3d-内存架构" tabindex="-1">Web 3D 内存架构 <a class="header-anchor" href="#web-3d-内存架构" aria-label="Permalink to &quot;Web 3D 内存架构&quot;">​</a></h2><h3 id="内存组成结构" tabindex="-1">内存组成结构 <a class="header-anchor" href="#内存组成结构" aria-label="Permalink to &quot;内存组成结构&quot;">​</a></h3><p>Web 3D 应用内存主要由以下几个部分组成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>应用内存组成</span></span>
<span class="line"><span>JavaScript 堆内存</span></span>
<span class="line"><span>├── Three.js 对象实例</span></span>
<span class="line"><span>├── 几何体数据 (CPU 侧)</span></span>
<span class="line"><span>├── 材质配置信息</span></span>
<span class="line"><span>└── 应用逻辑数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GPU 内存</span></span>
<span class="line"><span>├── 顶点缓冲区 (VBO)</span></span>
<span class="line"><span>├── 纹理数据</span></span>
<span class="line"><span>├── 帧缓冲区 (FBO)</span></span>
<span class="line"><span>├── 着色器程序</span></span>
<span class="line"><span>└── 索引缓冲区 (IBO)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>系统内存</span></span>
<span class="line"><span>├── 图像解码缓存</span></span>
<span class="line"><span>├── 音频缓冲区</span></span>
<span class="line"><span>└── 其他资源缓存</span></span></code></pre></div><h3 id="内存生命周期" tabindex="-1">内存生命周期 <a class="header-anchor" href="#内存生命周期" aria-label="Permalink to &quot;内存生命周期&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MemoryLifecycle</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.memoryStates </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  trackObject</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> lifecycle</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      created: performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      references: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      size: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateObjectSize</span><span style="color:#E1E4E8;">(object),</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: object.</span><span style="color:#79B8FF;">constructor</span><span style="color:#E1E4E8;">.name</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.memoryStates.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(object, lifecycle);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> lifecycle;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  addReference</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> lifecycle</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.memoryStates.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (lifecycle) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      lifecycle.references</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  removeReference</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> lifecycle</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.memoryStates.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (lifecycle) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      lifecycle.references</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (lifecycle.references </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleForCleanup</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  scheduleForCleanup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 延迟清理，避免频繁的垃圾回收</span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.memoryStates.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(object)?.references </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disposeObject</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  disposeObject</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (object.dispose </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> object.dispose </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      object.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.memoryStates.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="几何体内存管理" tabindex="-1">几何体内存管理 <a class="header-anchor" href="#几何体内存管理" aria-label="Permalink to &quot;几何体内存管理&quot;">​</a></h2><h3 id="几何体内存结构" tabindex="-1">几何体内存结构 <a class="header-anchor" href="#几何体内存结构" aria-label="Permalink to &quot;几何体内存结构&quot;">​</a></h3><p>Three.js 几何体在内存中的典型结构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>BufferGeometry 内存布局</span></span>
<span class="line"><span>├── attributes (属性缓冲区)</span></span>
<span class="line"><span>│   ├── position: Float32Array (顶点位置)</span></span>
<span class="line"><span>│   ├── normal: Float32Array (法线向量)</span></span>
<span class="line"><span>│   ├── uv: Float32Array (纹理坐标)</span></span>
<span class="line"><span>│   └── color: Float32Array (顶点颜色)</span></span>
<span class="line"><span>├── index: Uint16Array/Uint32Array (顶点索引)</span></span>
<span class="line"><span>└── 元数据 (边界框、边界球等)</span></span></code></pre></div><h3 id="几何体优化策略" tabindex="-1">几何体优化策略 <a class="header-anchor" href="#几何体优化策略" aria-label="Permalink to &quot;几何体优化策略&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> GeometryManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.geometries </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.referenceCounts </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createOptimizedGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">originalGeometry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 移除重复顶点</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mergedGeometry</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">mergeVertices</span><span style="color:#E1E4E8;">(originalGeometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 量化顶点数据</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> quantizedGeometry</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">quantizeGeometry</span><span style="color:#E1E4E8;">(mergedGeometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 压缩索引数据</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> compressedGeometry</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compressIndices</span><span style="color:#E1E4E8;">(quantizedGeometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> compressedGeometry;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  mergeVertices</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">geometry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 使用 Three.js 的合并顶点工具</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mergedGeometry</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> geometry.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    mergedGeometry.</span><span style="color:#B392F0;">mergeVertices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> mergedGeometry;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  quantizeGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">geometry</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">precision</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 量化顶点数据以减少内存占用</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> positionAttribute</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> geometry.</span><span style="color:#B392F0;">getAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;position&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> array</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> positionAttribute.array;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> array.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 将浮点数转换为定点数</span></span>
<span class="line"><span style="color:#E1E4E8;">      array[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(array[i] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> precision) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> precision;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    positionAttribute.needsUpdate </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> geometry;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  compressIndices</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">geometry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> indexAttribute</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> geometry.</span><span style="color:#B392F0;">getIndex</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">indexAttribute) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> geometry;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> array</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> indexAttribute.array;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查是否可以使用更小的数据类型</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> maxIndex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">array);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (maxIndex </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 65535</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 使用 Uint16Array 代替 Uint32Array</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> newArray</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint16Array</span><span style="color:#E1E4E8;">(array);</span></span>
<span class="line"><span style="color:#E1E4E8;">      geometry.</span><span style="color:#B392F0;">setIndex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BufferAttribute</span><span style="color:#E1E4E8;">(newArray, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> geometry;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 几何体实例化</span></span>
<span class="line"><span style="color:#B392F0;">  createInstancedGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">baseGeometry</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">instanceCount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> instancedGeometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">InstancedBufferGeometry</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 复制基础几何体的属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    instancedGeometry.</span><span style="color:#B392F0;">copy</span><span style="color:#E1E4E8;">(baseGeometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加实例化属性</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> instanceMatrix</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">InstancedBufferAttribute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> Float32Array</span><span style="color:#E1E4E8;">(instanceCount </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 16</span><span style="color:#E1E4E8;">), </span><span style="color:#79B8FF;">16</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    instancedGeometry.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;instanceMatrix&#39;</span><span style="color:#E1E4E8;">, instanceMatrix);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> instancedGeometry;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="几何体内存池" tabindex="-1">几何体内存池 <a class="header-anchor" href="#几何体内存池" aria-label="Permalink to &quot;几何体内存池&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> GeometryPool</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pools </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.usedGeometries </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">parameters</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getGeometryKey</span><span style="color:#E1E4E8;">(type, parameters);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pools.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.pools.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> pool</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pools.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> geometry;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (pool.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      geometry </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pool.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      geometry </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createGeometry</span><span style="color:#E1E4E8;">(type, parameters);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.usedGeometries.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(geometry);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> geometry;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  returnGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">geometry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.usedGeometries.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(geometry)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.usedGeometries.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(geometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 重置几何体状态</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resetGeometry</span><span style="color:#E1E4E8;">(geometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getGeometryKeyFromInstance</span><span style="color:#E1E4E8;">(geometry);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pools.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key)) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.pools.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(geometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">parameters</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (type) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;box&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">parameters);</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;sphere&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">SphereGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">parameters);</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;plane&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PlaneGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">parameters);</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Unknown geometry type: \${</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getGeometryKey</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">parameters</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}_\${</span><span style="color:#E1E4E8;">parameters</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;_&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getGeometryKeyFromInstance</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">geometry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 根据几何体特征生成键值</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (geometry </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> params</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> geometry.parameters;</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> \`box_\${</span><span style="color:#E1E4E8;">params</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">width</span><span style="color:#9ECBFF;">}_\${</span><span style="color:#E1E4E8;">params</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">height</span><span style="color:#9ECBFF;">}_\${</span><span style="color:#E1E4E8;">params</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">depth</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 其他几何体类型的处理...</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  resetGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">geometry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 重置几何体的变换和自定义属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry.rotation.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry.scale.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 清除自定义属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry.userData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  cleanup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 清理长时间未使用的几何体</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> now</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> maxAge</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 60000</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 1分钟</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">pool</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pools) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pool.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> geometry</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pool[i];</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (now </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> geometry.userData.lastUsed </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> maxAge) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          geometry.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          pool.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(i, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="纹理内存管理" tabindex="-1">纹理内存管理 <a class="header-anchor" href="#纹理内存管理" aria-label="Permalink to &quot;纹理内存管理&quot;">​</a></h2><h3 id="纹理内存优化" tabindex="-1">纹理内存优化 <a class="header-anchor" href="#纹理内存优化" aria-label="Permalink to &quot;纹理内存优化&quot;">​</a></h3><p>纹理通常是 Web 3D 应用中最大的内存消耗者：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> TextureManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.textures </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.textureCache </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.memoryBudget </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 256</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 256MB 纹理内存预算</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.currentMemoryUsage </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadTexture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cacheKey</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getTextureCacheKey</span><span style="color:#E1E4E8;">(url, options);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查缓存</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.textureCache.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(cacheKey)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.textureCache.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(cacheKey);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查内存预算</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkMemoryBudget</span><span style="color:#E1E4E8;">(options.estimatedSize)) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">freeMemory</span><span style="color:#E1E4E8;">(options.estimatedSize);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> texture</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadTextureInternal</span><span style="color:#E1E4E8;">(url, options);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算实际内存使用量</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memoryUsage</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateTextureMemory</span><span style="color:#E1E4E8;">(texture);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.currentMemoryUsage </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> memoryUsage;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    texture.userData.memoryUsage </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> memoryUsage;</span></span>
<span class="line"><span style="color:#E1E4E8;">    texture.userData.lastUsed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.textureCache.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(cacheKey, texture);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> texture;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  calculateTextureMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">texture</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> texture.image </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> texture;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> bytesPerPixel </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 默认 RGBA</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (texture.format </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.RGBFormat) bytesPerPixel </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (texture.format </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.RGBAFormat) bytesPerPixel </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (texture.format </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.LuminanceFormat) bytesPerPixel </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> width </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> height </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> bytesPerPixel;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  checkMemoryBudget</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">requiredSize</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.currentMemoryUsage </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> requiredSize </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.memoryBudget;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> freeMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">requiredSize</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> textures</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.textureCache.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.userData.lastUsed </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.userData.lastUsed);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> freedMemory </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> texture</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> textures) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (freedMemory </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> requiredSize) </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 释放最久未使用的纹理</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.currentMemoryUsage </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> texture.userData.memoryUsage;</span></span>
<span class="line"><span style="color:#E1E4E8;">      freedMemory </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> texture.userData.memoryUsage;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      texture.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 从缓存中移除</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">cachedTexture</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.textureCache) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (cachedTexture </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> texture) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.textureCache.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#F97583;">          break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getTextureCacheKey</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">url</span><span style="color:#9ECBFF;">}_\${</span><span style="color:#79B8FF;">JSON</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">options</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadTextureInternal</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> loader</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">TextureLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      loader.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        url,</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#FFAB70;">texture</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">          // 应用优化设置</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">optimizeTexture</span><span style="color:#E1E4E8;">(texture, options);</span></span>
<span class="line"><span style="color:#B392F0;">          resolve</span><span style="color:#E1E4E8;">(texture);</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#79B8FF;">        undefined</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        reject</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  optimizeTexture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">texture</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 启用 MIP 映射</span></span>
<span class="line"><span style="color:#E1E4E8;">    texture.generateMipmaps </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    texture.minFilter </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.LinearMipmapLinearFilter;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 设置适当的包装模式</span></span>
<span class="line"><span style="color:#E1E4E8;">    texture.wrapS </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.wrapS </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.ClampToEdgeWrapping;</span></span>
<span class="line"><span style="color:#E1E4E8;">    texture.wrapT </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.wrapT </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.ClampToEdgeWrapping;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 压缩纹理如果支持</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (options.compressed </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">supportsTextureCompression</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compressTexture</span><span style="color:#E1E4E8;">(texture);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 限制最大尺寸</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (options.maxSize) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">limitTextureSize</span><span style="color:#E1E4E8;">(texture, options.maxSize);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  supportsTextureCompression</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> canvas</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;canvas&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> gl</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> canvas.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webgl&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> !!</span><span style="color:#E1E4E8;">(gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_compressed_texture_astc&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">              gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_compressed_texture_s3tc&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="纹理压缩与格式选择" tabindex="-1">纹理压缩与格式选择 <a class="header-anchor" href="#纹理压缩与格式选择" aria-label="Permalink to &quot;纹理压缩与格式选择&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>纹理格式内存对比</span></span>
<span class="line"><span>格式             质量     内存占用   兼容性</span></span>
<span class="line"><span>RGBA (未压缩)   最高      100%      所有设备</span></span>
<span class="line"><span>RGB            高        75%       所有设备</span></span>
<span class="line"><span>ASTC 4x4       高        25%       现代设备</span></span>
<span class="line"><span>S3TC/DXT5      中        25%       PC/部分移动设备</span></span>
<span class="line"><span>PVRTC 4bpp     中        25%       iOS 设备</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> TextureCompressor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.supportedFormats </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">detectSupportedFormats</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  detectSupportedFormats</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> canvas</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;canvas&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> gl</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> canvas.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webgl&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> formats</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_compressed_texture_astc&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      formats.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;astc&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_compressed_texture_s3tc&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      formats.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;s3tc&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_compressed_texture_etc&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      formats.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;etc&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_compressed_texture_pvrtc&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      formats.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;pvrtc&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> formats;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getOptimalFormat</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">quality</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;medium&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> formatPreferences</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      high: [</span><span style="color:#9ECBFF;">&#39;astc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;s3tc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;etc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pvrtc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;rgba&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      medium: [</span><span style="color:#9ECBFF;">&#39;s3tc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;etc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pvrtc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;astc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;rgb&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      low: [</span><span style="color:#9ECBFF;">&#39;pvrtc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;etc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;s3tc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;astc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;rgb&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> preferences</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> formatPreferences[quality];</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> preferences.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">format</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.supportedFormats.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(format)) </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;rgba&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> compressTexture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">texture</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">format</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (format </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;rgba&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> texture; </span><span style="color:#6A737D;">// 无需压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 在实际项目中，这里会调用压缩服务或使用预压缩的纹理</span></span>
<span class="line"><span style="color:#6A737D;">    // 返回压缩后的纹理对象</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> texture;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="材质内存管理" tabindex="-1">材质内存管理 <a class="header-anchor" href="#材质内存管理" aria-label="Permalink to &quot;材质内存管理&quot;">​</a></h2><h3 id="材质共享与重用" tabindex="-1">材质共享与重用 <a class="header-anchor" href="#材质共享与重用" aria-label="Permalink to &quot;材质共享与重用&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MaterialManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.materialTemplates </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.materialInstances </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.materialVariants </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createMaterialTemplate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">baseParameters</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> template</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type,</span></span>
<span class="line"><span style="color:#E1E4E8;">      baseParameters,</span></span>
<span class="line"><span style="color:#E1E4E8;">      instances: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      variantCache: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.materialTemplates.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(type, template);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> template;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getMaterial</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">variantParameters</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> template</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.materialTemplates.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(type);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">template) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Material template not found: \${</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查变体缓存</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> variantKey</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getVariantKey</span><span style="color:#E1E4E8;">(variantParameters);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (template.variantCache.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(variantKey)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> template.variantCache.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(variantKey);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建新变体</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> parameters</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">template.baseParameters, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">variantParameters };</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createMaterialInstance</span><span style="color:#E1E4E8;">(template.type, parameters);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    template.variantCache.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(variantKey, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">    template.instances.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(material);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.materialInstances.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(material, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      template,</span></span>
<span class="line"><span style="color:#E1E4E8;">      variantKey,</span></span>
<span class="line"><span style="color:#E1E4E8;">      referenceCount: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> material;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createMaterialInstance</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">parameters</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (type) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;standard&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">(parameters);</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;physical&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshPhysicalMaterial</span><span style="color:#E1E4E8;">(parameters);</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;basic&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshBasicMaterial</span><span style="color:#E1E4E8;">(parameters);</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Unknown material type: \${</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getVariantKey</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">parameters</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(parameters);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  addReference</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> info</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.materialInstances.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(material);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (info) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      info.referenceCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  removeReference</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> info</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.materialInstances.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(material);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (info) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      info.referenceCount</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (info.referenceCount </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleMaterialCleanup</span><span style="color:#E1E4E8;">(material);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  scheduleMaterialCleanup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 延迟清理，避免频繁创建销毁</span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> info</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.materialInstances.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(material);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (info </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> info.referenceCount </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disposeMaterial</span><span style="color:#E1E4E8;">(material);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 5秒后清理</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  disposeMaterial</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> info</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.materialInstances.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(material);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (info) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 从模板中移除</span></span>
<span class="line"><span style="color:#E1E4E8;">      info.template.instances.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(material);</span></span>
<span class="line"><span style="color:#E1E4E8;">      info.template.variantCache.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(info.variantKey);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 销毁材质</span></span>
<span class="line"><span style="color:#E1E4E8;">      material.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.materialInstances.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(material);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 批量材质更新</span></span>
<span class="line"><span style="color:#B392F0;">  updateMaterialParameters</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">parameterUpdates</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> template</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.materialTemplates.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(type);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">template) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 更新所有实例</span></span>
<span class="line"><span style="color:#E1E4E8;">    template.instances.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(material, parameterUpdates);</span></span>
<span class="line"><span style="color:#E1E4E8;">      material.needsUpdate </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="场景图内存管理" tabindex="-1">场景图内存管理 <a class="header-anchor" href="#场景图内存管理" aria-label="Permalink to &quot;场景图内存管理&quot;">​</a></h2><h3 id="对象生命周期管理" tabindex="-1">对象生命周期管理 <a class="header-anchor" href="#对象生命周期管理" aria-label="Permalink to &quot;对象生命周期管理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SceneGraphManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scene</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scene;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.objectRegistry </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.dependencyGraph </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  addObject</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">parent</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.scene) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    parent.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 注册对象及其依赖</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">registerObject</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 建立依赖关系</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">buildDependencyGraph</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> object;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  registerObject</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> objectInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      object,</span></span>
<span class="line"><span style="color:#E1E4E8;">      references: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      dependencies: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      dependents: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      memoryUsage: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateObjectMemory</span><span style="color:#E1E4E8;">(object)</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.objectRegistry.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(object, objectInfo);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 递归注册子对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    object.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">child</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (child </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> object) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">registerObject</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  calculateObjectMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> memory </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (object.geometry) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateGeometryMemory</span><span style="color:#E1E4E8;">(object.geometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (object.material) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateMaterialMemory</span><span style="color:#E1E4E8;">(object.material);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 其他内存计算...</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> memory;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  calculateGeometryMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">geometry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> memory </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算属性缓冲区内存</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> name</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> geometry.attributes) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> attribute</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> geometry.attributes[name];</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> attribute.array.byteLength;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算索引缓冲区内存</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (geometry.index) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> geometry.index.array.byteLength;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> memory;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  calculateMaterialMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 材质本身内存较小，主要计算纹理内存</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> memory </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> textures</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      material.map,</span></span>
<span class="line"><span style="color:#E1E4E8;">      material.normalMap,</span></span>
<span class="line"><span style="color:#E1E4E8;">      material.roughnessMap,</span></span>
<span class="line"><span style="color:#E1E4E8;">      material.metalnessMap,</span></span>
<span class="line"><span style="color:#E1E4E8;">      material.envMap</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    textures.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">texture</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (texture </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> texture.userData?.memoryUsage) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        memory </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> texture.userData.memoryUsage;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> memory;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  buildDependencyGraph</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dependencies</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 收集几何体和材质依赖</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (object.geometry) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dependencies.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(object.geometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (object.material) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(object.material)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        object.material.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mat</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> dependencies.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(mat));</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        dependencies.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(object.material);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 收集纹理依赖</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">collectTextureDependencies</span><span style="color:#E1E4E8;">(object, dependencies);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.dependencyGraph.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(object, dependencies);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 更新依赖对象的被依赖关系</span></span>
<span class="line"><span style="color:#E1E4E8;">    dependencies.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dep</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> depInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.objectRegistry.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(dep);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (depInfo) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        depInfo.dependents.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  collectTextureDependencies</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dependencies</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> object.material;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">material) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> materials</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(material) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> material </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [material];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    materials.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mat</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> textureProperties</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;map&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;normalMap&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;roughnessMap&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;metalnessMap&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;envMap&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      textureProperties.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">prop</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (mat[prop]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          dependencies.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(mat[prop]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  removeObject</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> objectInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.objectRegistry.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">objectInfo) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    objectInfo.references</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (objectInfo.references </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disposeObjectTree</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  disposeObjectTree</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> objectInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.objectRegistry.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">objectInfo) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 从父级移除</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (object.parent) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      object.parent.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 处理依赖关系</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dependencies</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.dependencyGraph.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(object) </span><span style="color:#F97583;">||</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    dependencies.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dep</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> depInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.objectRegistry.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(dep);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (depInfo) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        depInfo.dependents.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 如果没有其他依赖者，安排清理</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (depInfo.dependents.size </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleResourceCleanup</span><span style="color:#E1E4E8;">(dep);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 递归处理子对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    object.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">child</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (child </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> object) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeObject</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 清理对象本身</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.objectRegistry.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.dependencyGraph.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  scheduleResourceCleanup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 延迟清理资源</span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> info</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.objectRegistry.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(resource);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (info </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> info.dependents.size </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disposeResource</span><span style="color:#E1E4E8;">(resource);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  disposeResource</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (resource.dispose </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> resource.dispose </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      resource.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.objectRegistry.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(resource);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.dependencyGraph.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(resource);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="内存监控与分析" tabindex="-1">内存监控与分析 <a class="header-anchor" href="#内存监控与分析" aria-label="Permalink to &quot;内存监控与分析&quot;">​</a></h2><h3 id="实时内存监控" tabindex="-1">实时内存监控 <a class="header-anchor" href="#实时内存监控" aria-label="Permalink to &quot;实时内存监控&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MemoryMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalJSHeap: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      usedJSHeap: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      jsHeapLimit: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      gpuMemory: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      objectCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      geometryMemory: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      textureMemory: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.history </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.maxHistorySize </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 300</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 保存300个采样点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startMonitoring</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  startMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 定期采样内存状态</span></span>
<span class="line"><span style="color:#B392F0;">    setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sampleMemory</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  sampleMemory</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取 JavaScript 堆内存</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (performance.memory) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.metrics.totalJSHeap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.memory.totalJSHeapSize;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.metrics.usedJSHeap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.memory.usedJSHeapSize;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.metrics.jsHeapLimit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.memory.jsHeapLimit;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 估算 GPU 内存</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.gpuMemory </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">estimateGPUMemory</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 记录历史</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.maxHistorySize) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查内存泄漏</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkMemoryLeaks</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  estimateGPUMemory</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> memory </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 遍历场景估算 GPU 内存</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (object.geometry) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        memory </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateGeometryGPUMemory</span><span style="color:#E1E4E8;">(object.geometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (object.material) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        memory </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateMaterialGPUMemory</span><span style="color:#E1E4E8;">(object.material);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> memory;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  calculateGeometryGPUMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">geometry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> memory </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> name</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> geometry.attributes) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> attribute</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> geometry.attributes[name];</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> attribute.array.byteLength;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (geometry.index) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> geometry.index.array.byteLength;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> memory;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  calculateMaterialGPUMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> memory </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> materials</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(material) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> material </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [material];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    materials.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mat</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> textures</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [mat.map, mat.normalMap, mat.roughnessMap, mat.metalnessMap, mat.envMap];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      textures.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">texture</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (texture </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> texture.image) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> width</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> texture.image.width </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> texture.image.videoWidth;</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> height</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> texture.image.height </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> texture.image.videoHeight;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#F97583;">          let</span><span style="color:#E1E4E8;"> bytesPerPixel </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// RGBA</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (texture.format </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.RGBFormat) bytesPerPixel </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (texture.format </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.LuminanceFormat) bytesPerPixel </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#E1E4E8;">          memory </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> width </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> height </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> bytesPerPixel;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#6A737D;">          // MIP maps 占用额外 1/3 内存</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (texture.generateMipmaps) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            memory </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> (width </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> height </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> bytesPerPixel) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> memory;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  checkMemoryLeaks</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> recent</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> oldest</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> recentAvg</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateAverage</span><span style="color:#E1E4E8;">(recent);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> oldestAvg</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateAverage</span><span style="color:#E1E4E8;">(oldest);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 如果内存使用持续增长，可能存在内存泄漏</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> growthRate</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (recentAvg.usedJSHeap </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> oldestAvg.usedJSHeap) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> oldestAvg.usedJSHeap;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (growthRate </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0.1</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 增长超过10%</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">triggerMemoryWarning</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Possible memory leak detected&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  calculateAverage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">samples</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sum</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> samples.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">acc</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">sample</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">      usedJSHeap: acc.usedJSHeap </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> sample.usedJSHeap,</span></span>
<span class="line"><span style="color:#E1E4E8;">      gpuMemory: acc.gpuMemory </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> sample.gpuMemory</span></span>
<span class="line"><span style="color:#E1E4E8;">    }), { usedJSHeap: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, gpuMemory: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      usedJSHeap: sum.usedJSHeap </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> samples.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      gpuMemory: sum.gpuMemory </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> samples.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  triggerMemoryWarning</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Memory Warning: \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 触发内存清理</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.onMemoryWarning </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">onMemoryWarning</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getMemoryReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> peak</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">findPeakMemory</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      current,</span></span>
<span class="line"><span style="color:#E1E4E8;">      peak,</span></span>
<span class="line"><span style="color:#E1E4E8;">      trends: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">analyzeMemoryTrends</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      recommendations: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateRecommendations</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  findPeakMemory</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">peak</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">sample</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">      usedJSHeap: Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(peak.usedJSHeap, sample.usedJSHeap),</span></span>
<span class="line"><span style="color:#E1E4E8;">      gpuMemory: Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(peak.gpuMemory, sample.gpuMemory)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }), { usedJSHeap: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, gpuMemory: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  analyzeMemoryTrends</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> recent</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> trend</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      jsHeap: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateTrend</span><span style="color:#E1E4E8;">(recent.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">h</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> h.usedJSHeap)),</span></span>
<span class="line"><span style="color:#E1E4E8;">      gpuMemory: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateTrend</span><span style="color:#E1E4E8;">(recent.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">h</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> h.gpuMemory))</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> trend;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  calculateTrend</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">values</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (values.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;stable&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> first</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> values[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> last</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> values[values.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> change</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (last </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> first) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> first;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (change </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0.05</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;increasing&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (change </span><span style="color:#F97583;">&lt;</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">0.05</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;decreasing&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;stable&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  generateRecommendations</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> recommendations</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.usedJSHeap </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.jsHeapLimit </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0.8</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      recommendations.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;JavaScript heap near limit. Consider reducing object count.&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.textureMemory </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 200</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      recommendations.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;High texture memory usage. Consider using texture compression.&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.geometryMemory </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      recommendations.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;High geometry memory usage. Consider using LOD or geometry compression.&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> recommendations;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="自动化内存管理" tabindex="-1">自动化内存管理 <a class="header-anchor" href="#自动化内存管理" aria-label="Permalink to &quot;自动化内存管理&quot;">​</a></h2><h3 id="智能垃圾回收" tabindex="-1">智能垃圾回收 <a class="header-anchor" href="#智能垃圾回收" aria-label="Permalink to &quot;智能垃圾回收&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SmartGarbageCollector</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scene</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">memoryMonitor</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scene;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.memoryMonitor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> memoryMonitor;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cleanupThresholds </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      jsHeap: </span><span style="color:#79B8FF;">0.8</span><span style="color:#E1E4E8;">,    </span><span style="color:#6A737D;">// 80% of heap limit</span></span>
<span class="line"><span style="color:#E1E4E8;">      gpuMemory: </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 300MB</span></span>
<span class="line"><span style="color:#E1E4E8;">      inactivityTime: </span><span style="color:#79B8FF;">30000</span><span style="color:#6A737D;"> // 30 seconds</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.inactiveObjects </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startCleanupCycle</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  startCleanupCycle</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">    setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">performCleanup</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 每10秒检查一次</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  performCleanup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memoryState</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.memoryMonitor.</span><span style="color:#B392F0;">getMemoryReport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查是否需要紧急清理</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">needsEmergencyCleanup</span><span style="color:#E1E4E8;">(memoryState)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emergencyCleanup</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 常规清理</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">shouldPerformCleanup</span><span style="color:#E1E4E8;">(memoryState)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">standardCleanup</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 清理长时间未使用的对象</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">cleanupInactiveObjects</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  needsEmergencyCleanup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">memoryState</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> memoryState.current.usedJSHeap </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cleanupThresholds.jsHeap </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> memoryState.current.jsHeapLimit;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  shouldPerformCleanup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">memoryState</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> memoryState.current.usedJSHeap </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cleanupThresholds.jsHeap </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0.7</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> memoryState.current.jsHeapLimit </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">           memoryState.current.gpuMemory </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cleanupThresholds.gpuMemory </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0.8</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  emergencyCleanup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Performing emergency memory cleanup&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 1. 释放所有缓存</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">clearAllCaches</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 2. 移除不可见对象</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeInvisibleObjects</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 3. 降低渲染质量</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reduceRenderQuality</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 4. 强制垃圾回收 (如果环境支持)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">forceGarbageCollection</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  standardCleanup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Performing standard memory cleanup&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 1. 清理长时间未使用的纹理</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">cleanupUnusedTextures</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 2. 合并小几何体</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">mergeSmallGeometries</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 3. 释放未引用的材质</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">cleanupUnusedMaterials</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  cleanupInactiveObjects</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> now</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">lastUsed</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.inactiveObjects) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (now </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> lastUsed </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cleanupThresholds.inactivityTime) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disposeObject</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.inactiveObjects.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  markObjectInactive</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.inactiveObjects.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(object, performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  markObjectActive</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.inactiveObjects.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  clearAllCaches</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 清理所有缓存系统</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.Cache) {</span></span>
<span class="line"><span style="color:#79B8FF;">      THREE</span><span style="color:#E1E4E8;">.Cache.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 清理自定义缓存</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.textureManager?.textureCache.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.geometryPool?.</span><span style="color:#B392F0;">cleanup</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  removeInvisibleObjects</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> objectsToRemove</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">object.visible </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> object.userData?.disposable) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        objectsToRemove.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    objectsToRemove.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disposeObject</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  reduceRenderQuality</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 降低渲染质量以节省内存</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.shadowMap.enabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 降低纹理质量</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (object.material) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> materials</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(object.material) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> object.material </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [object.material];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        materials.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (material.map) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            material.map.anisotropy </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  forceGarbageCollection</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在某些环境中可以触发垃圾回收</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (window.gc) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.</span><span style="color:#B392F0;">gc</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  cleanupUnusedTextures</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> now</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> maxAge</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 60000</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 1分钟</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.textureManager?.textureCache.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">texture</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (now </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> texture.userData.lastUsed </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> maxAge) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.textureManager.</span><span style="color:#B392F0;">freeTexture</span><span style="color:#E1E4E8;">(texture);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  mergeSmallGeometries</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 合并小的静态几何体以减少绘制调用和内存占用</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> smallGeometries</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (object.isMesh </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          object.geometry </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          object.geometry.attributes.position.count </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#F97583;"> &amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">          object.static) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        smallGeometries.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (smallGeometries.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">mergeGeometryGroup</span><span style="color:#E1E4E8;">(smallGeometries);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  disposeObject</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (object.geometry) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      object.geometry.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (object.material) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> materials</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(object.material) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> object.material </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [object.material];</span></span>
<span class="line"><span style="color:#E1E4E8;">      materials.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> material.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (object.dispose </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> object.dispose </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      object.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,38)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
