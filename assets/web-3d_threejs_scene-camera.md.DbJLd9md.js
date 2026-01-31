import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const y=JSON.parse('{"title":"Three.js 入门","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是 Three.js？","slug":"什么是-three-js","link":"#什么是-three-js","children":[]},{"level":2,"title":"为什么选择 Three.js？","slug":"为什么选择-three-js","link":"#为什么选择-three-js","children":[]},{"level":2,"title":"核心架构解析","slug":"核心架构解析","link":"#核心架构解析","children":[{"level":3,"title":"场景图结构","slug":"场景图结构","link":"#场景图结构","children":[]},{"level":3,"title":"渲染循环机制","slug":"渲染循环机制","link":"#渲染循环机制","children":[]}]},{"level":2,"title":"核心组件详解","slug":"核心组件详解","link":"#核心组件详解","children":[{"level":3,"title":"场景 (Scene)","slug":"场景-scene","link":"#场景-scene","children":[]},{"level":3,"title":"相机系统","slug":"相机系统","link":"#相机系统","children":[]},{"level":3,"title":"几何体 (Geometry)","slug":"几何体-geometry","link":"#几何体-geometry","children":[]},{"level":3,"title":"材质系统","slug":"材质系统","link":"#材质系统","children":[]},{"level":3,"title":"光源类型","slug":"光源类型","link":"#光源类型","children":[]}]},{"level":2,"title":"关键特性深度解析","slug":"关键特性深度解析","link":"#关键特性深度解析","children":[{"level":3,"title":"坐标系系统","slug":"坐标系系统","link":"#坐标系系统","children":[]},{"level":3,"title":"矩阵变换链","slug":"矩阵变换链","link":"#矩阵变换链","children":[]},{"level":3,"title":"着色器定制","slug":"着色器定制","link":"#着色器定制","children":[]},{"level":3,"title":"后期处理通道","slug":"后期处理通道","link":"#后期处理通道","children":[]}]},{"level":2,"title":"实战入门示例","slug":"实战入门示例","link":"#实战入门示例","children":[{"level":3,"title":"基础场景搭建","slug":"基础场景搭建","link":"#基础场景搭建","children":[]},{"level":3,"title":"性能优化要点","slug":"性能优化要点","link":"#性能优化要点","children":[]},{"level":3,"title":"资源加载模式","slug":"资源加载模式","link":"#资源加载模式","children":[]}]}],"relativePath":"web-3d/threejs/scene-camera.md","filePath":"web-3d/threejs/scene-camera.md"}'),e={name:"web-3d/threejs/scene-camera.md"};function o(c,s,t,i,r,d){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /web-3d/threejs/scene-camera.md for this page in Markdown format</div><h1 id="three-js-入门" tabindex="-1">Three.js 入门 <a class="header-anchor" href="#three-js-入门" aria-label="Permalink to &quot;Three.js 入门&quot;">​</a></h1><h2 id="什么是-three-js" tabindex="-1">什么是 Three.js？ <a class="header-anchor" href="#什么是-three-js" aria-label="Permalink to &quot;什么是 Three.js？&quot;">​</a></h2><p>Three.js 是一个基于 WebGL 的 JavaScript 3D 图形库，它通过封装底层图形接口让开发者能够用更简洁的代码在浏览器中创建交互式 3D 体验。它充当了 WebGL 复杂性的抽象层，使 3D 编程变得像操作高级对象一样直观。</p><h2 id="为什么选择-three-js" tabindex="-1">为什么选择 Three.js？ <a class="header-anchor" href="#为什么选择-three-js" aria-label="Permalink to &quot;为什么选择 Three.js？&quot;">​</a></h2><ul><li><strong>开发效率</strong>：原生 WebGL 需要数百行代码的基础渲染，Three.js 只需几十行</li><li><strong>功能集成</strong>：内置几何体、材质系统、光影计算和模型加载器</li><li><strong>跨平台能力</strong>：基于 Web 标准，支持桌面/移动端浏览器</li><li><strong>扩展生态</strong>：物理引擎、后期处理、控件系统等可选模块</li></ul><h2 id="核心架构解析" tabindex="-1">核心架构解析 <a class="header-anchor" href="#核心架构解析" aria-label="Permalink to &quot;核心架构解析&quot;">​</a></h2><h3 id="场景图结构" tabindex="-1">场景图结构 <a class="header-anchor" href="#场景图结构" aria-label="Permalink to &quot;场景图结构&quot;">​</a></h3><p>Three.js 采用树状场景图管理所有对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Scene (根容器)</span></span>
<span class="line"><span>    ├── PerspectiveCamera (视角相机)</span></span>
<span class="line"><span>    ├── AmbientLight (环境光)</span></span>
<span class="line"><span>    ├── DirectionalLight (定向光)</span></span>
<span class="line"><span>    └── Group (组对象)</span></span>
<span class="line"><span>        ├── Mesh (网格实例)</span></span>
<span class="line"><span>        │   ├── BoxGeometry (立方体几何)</span></span>
<span class="line"><span>        │   └── MeshStandardMaterial (标准材质)</span></span>
<span class="line"><span>        └── Mesh</span></span>
<span class="line"><span>            ├── SphereGeometry (球体几何)</span></span>
<span class="line"><span>            └── MeshPhysicalMaterial (物理材质)</span></span></code></pre></div><h3 id="渲染循环机制" tabindex="-1">渲染循环机制 <a class="header-anchor" href="#渲染循环机制" aria-label="Permalink to &quot;渲染循环机制&quot;">​</a></h3><p>核心渲染流程示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始化 → 资源加载 → 场景构建</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>主循环开始 → 更新矩阵 → 执行动画</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>渲染通道 → 相机裁剪 → 着色器执行</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>帧缓冲 → 屏幕绘制 → 循环继续</span></span></code></pre></div><h2 id="核心组件详解" tabindex="-1">核心组件详解 <a class="header-anchor" href="#核心组件详解" aria-label="Permalink to &quot;核心组件详解&quot;">​</a></h2><h3 id="场景-scene" tabindex="-1">场景 (Scene) <a class="header-anchor" href="#场景-scene" aria-label="Permalink to &quot;场景 (Scene)&quot;">​</a></h3><p>场景是所有 3D 对象的容器，管理渲染层级和雾效等全局属性。它就像虚拟摄影棚：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>    +-------------------+</span></span>
<span class="line"><span>    |      Scene        |</span></span>
<span class="line"><span>    | +---------------+ |</span></span>
<span class="line"><span>    | |    Objects    | |</span></span>
<span class="line"><span>    | | +-----------+ | |</span></span>
<span class="line"><span>    | | |   Mesh    | | |</span></span>
<span class="line"><span>    | | +-----------+ | |</span></span>
<span class="line"><span>    | +---------------+ |</span></span>
<span class="line"><span>    +-------------------+</span></span></code></pre></div><h3 id="相机系统" tabindex="-1">相机系统 <a class="header-anchor" href="#相机系统" aria-label="Permalink to &quot;相机系统&quot;">​</a></h3><p><strong>透视相机</strong> (最常用)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>      视锥体示意图</span></span>
<span class="line"><span>        /|\\</span></span>
<span class="line"><span>       / | \\</span></span>
<span class="line"><span>      /  |  \\  近裁剪面</span></span>
<span class="line"><span>     /   |   \\   /</span></span>
<span class="line"><span>    /    |    \\ /</span></span>
<span class="line"><span>   /     |     \\</span></span>
<span class="line"><span>  /      |      \\</span></span>
<span class="line"><span> /       |       \\</span></span>
<span class="line"><span>/________|________\\ 远裁剪面</span></span>
<span class="line"><span>   相机位置</span></span></code></pre></div><p><strong>正交相机</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>+-------------------+</span></span>
<span class="line"><span>|                   |</span></span>
<span class="line"><span>|   uniform scale   |</span></span>
<span class="line"><span>|                   |</span></span>
<span class="line"><span>+-------------------+</span></span></code></pre></div><h3 id="几何体-geometry" tabindex="-1">几何体 (Geometry) <a class="header-anchor" href="#几何体-geometry" aria-label="Permalink to &quot;几何体 (Geometry)&quot;">​</a></h3><p>定义物体形状数据结构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>BoxGeometry (立方体)</span></span>
<span class="line"><span>    ▲</span></span>
<span class="line"><span>    │ vertices: [x,y,z,...]</span></span>
<span class="line"><span>    │ faces: [a,b,c,...]</span></span>
<span class="line"><span>    │ uvs: [u,v,...]</span></span>
<span class="line"><span>    ▼</span></span>
<span class="line"><span>BufferGeometry (高效格式)</span></span>
<span class="line"><span>    ▲</span></span>
<span class="line"><span>    │ attributes: {</span></span>
<span class="line"><span>    │   position: Float32Array,</span></span>
<span class="line"><span>    │   normal: Float32Array,</span></span>
<span class="line"><span>    │   uv: Float32Array</span></span>
<span class="line"><span>    │ }</span></span></code></pre></div><p>立方体线框示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>    +-----+</span></span>
<span class="line"><span>   /     /|</span></span>
<span class="line"><span>  +-----+ |</span></span>
<span class="line"><span>  |     | +</span></span>
<span class="line"><span>  |     |/</span></span>
<span class="line"><span>  +-----+</span></span></code></pre></div><h3 id="材质系统" tabindex="-1">材质系统 <a class="header-anchor" href="#材质系统" aria-label="Permalink to &quot;材质系统&quot;">​</a></h3><p>材质类型对比：</p><ul><li><strong>BasicMaterial</strong>：基础材质，无视光照<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>表面着色：直接显示颜色/纹理</span></span>
<span class="line"><span>光照影响：无</span></span>
<span class="line"><span>性能开销：低</span></span></code></pre></div></li><li><strong>StandardMaterial</strong>：基于物理渲染 (PBR)<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>表面着色：漫反射 + 高光反射</span></span>
<span class="line"><span>光照影响：漫反射/镜面反射/环境光遮蔽</span></span>
<span class="line"><span>物理属性：金属度/粗糙度</span></span></code></pre></div></li></ul><h3 id="光源类型" tabindex="-1">光源类型 <a class="header-anchor" href="#光源类型" aria-label="Permalink to &quot;光源类型&quot;">​</a></h3><p>光照模型示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>环境光</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>全局均匀照明</span></span>
<span class="line"><span>    +</span></span>
<span class="line"><span>平行光</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>方向性阴影</span></span>
<span class="line"><span>    +</span></span>
<span class="line"><span>点光源</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>径向衰减照明</span></span></code></pre></div><h2 id="关键特性深度解析" tabindex="-1">关键特性深度解析 <a class="header-anchor" href="#关键特性深度解析" aria-label="Permalink to &quot;关键特性深度解析&quot;">​</a></h2><h3 id="坐标系系统" tabindex="-1">坐标系系统 <a class="header-anchor" href="#坐标系系统" aria-label="Permalink to &quot;坐标系系统&quot;">​</a></h3><p>Three.js 使用右手坐标系：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>    y ▲</span></span>
<span class="line"><span>     │</span></span>
<span class="line"><span>     │   / z</span></span>
<span class="line"><span>     │  /</span></span>
<span class="line"><span>     │ /</span></span>
<span class="line"><span>     └───────▶ x</span></span></code></pre></div><h3 id="矩阵变换链" tabindex="-1">矩阵变换链 <a class="header-anchor" href="#矩阵变换链" aria-label="Permalink to &quot;矩阵变换链&quot;">​</a></h3><p>对象变换流程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>本地坐标 → 模型矩阵 → 世界坐标</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>视图矩阵 → 相机空间</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>投影矩阵 → 裁剪空间</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>透视除法 → 标准化设备坐标</span></span></code></pre></div><h3 id="着色器定制" tabindex="-1">着色器定制 <a class="header-anchor" href="#着色器定制" aria-label="Permalink to &quot;着色器定制&quot;">​</a></h3><p>可编程渲染管线支持：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>顶点着色器</span></span>
<span class="line"><span>输入：顶点位置/法线/UV</span></span>
<span class="line"><span>处理：坐标变换</span></span>
<span class="line"><span>输出：裁剪空间坐标</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>片元着色器</span></span>
<span class="line"><span>输入：插值后的变量</span></span>
<span class="line"><span>处理：颜色计算</span></span>
<span class="line"><span>输出：最终像素颜色</span></span></code></pre></div><h3 id="后期处理通道" tabindex="-1">后期处理通道 <a class="header-anchor" href="#后期处理通道" aria-label="Permalink to &quot;后期处理通道&quot;">​</a></h3><p>渲染效果叠加流程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>主场景渲染 → 颜色缓冲</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>效果通道1 → 亮度过滤</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>效果通道2 → 高斯模糊</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>合成通道 → 屏幕输出</span></span></code></pre></div><h2 id="实战入门示例" tabindex="-1">实战入门示例 <a class="header-anchor" href="#实战入门示例" aria-label="Permalink to &quot;实战入门示例&quot;">​</a></h2><h3 id="基础场景搭建" tabindex="-1">基础场景搭建 <a class="header-anchor" href="#基础场景搭建" aria-label="Permalink to &quot;基础场景搭建&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 1. 创建场景容器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> scene</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Scene</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 初始化透视相机（视野角度，宽高比，近裁剪面，远裁剪面）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> camera</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PerspectiveCamera</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#79B8FF;">  75</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  window.innerWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> window.innerHeight,</span></span>
<span class="line"><span style="color:#79B8FF;">  0.1</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#79B8FF;">  1000</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 实例化WebGL渲染器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> renderer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">WebGLRenderer</span><span style="color:#E1E4E8;">({ antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">renderer.</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#E1E4E8;">document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(renderer.domElement);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 4. 创建立方体几何（宽度，高度，深度，分段数）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> geometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 5. 创建PBR材质</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">  color: </span><span style="color:#79B8FF;">0x2194ce</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  roughness: </span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  metalness: </span><span style="color:#79B8FF;">0.8</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 6. 生成网格对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> cube</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(geometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(cube);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 7. 添加环境光照</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ambientLight</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">AmbientLight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(ambientLight);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 8. 添加定向光源</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> directionalLight</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DirectionalLight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">directionalLight.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(directionalLight);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 9. 调整相机位置</span></span>
<span class="line"><span style="color:#E1E4E8;">camera.position.z </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 10. 渲染循环实现</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> animate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">  requestAnimationFrame</span><span style="color:#E1E4E8;">(animate);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 旋转变换：每帧绕Y轴旋转0.01弧度</span></span>
<span class="line"><span style="color:#E1E4E8;">  cube.rotation.y </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 0.01</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 执行渲染</span></span>
<span class="line"><span style="color:#E1E4E8;">  renderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(scene, camera);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">animate</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="性能优化要点" tabindex="-1">性能优化要点 <a class="header-anchor" href="#性能优化要点" aria-label="Permalink to &quot;性能优化要点&quot;">​</a></h3><ul><li><strong>几何体合并</strong>：减少绘制调用</li><li><strong>纹理图集</strong>：合并小纹理</li><li><strong>LOD 系统</strong>：根据距离切换细节层级</li><li><strong>视锥裁剪</strong>：自动剔除不可见对象</li><li><strong>实例化渲染</strong>：大量重复对象优化</li></ul><h3 id="资源加载模式" tabindex="-1">资源加载模式 <a class="header-anchor" href="#资源加载模式" aria-label="Permalink to &quot;资源加载模式&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// GLTF模型加载示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> loader</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">GLTFLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">loader.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;model.gltf&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">gltf</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(gltf.scene);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 遍历场景图调整材质</span></span>
<span class="line"><span style="color:#E1E4E8;">  gltf.scene.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node.isMesh) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      node.material.roughness </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0.5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div>`,53)])])}const h=n(e,[["render",o]]);export{y as __pageData,h as default};
