import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"WebXR 基础","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是 WebXR？","slug":"什么是-webxr","link":"#什么是-webxr","children":[]},{"level":2,"title":"WebXR 核心概念","slug":"webxr-核心概念","link":"#webxr-核心概念","children":[{"level":3,"title":"设备与会话","slug":"设备与会话","link":"#设备与会话","children":[]},{"level":3,"title":"会话类型示意图","slug":"会话类型示意图","link":"#会话类型示意图","children":[]}]},{"level":2,"title":"渲染与视图管理","slug":"渲染与视图管理","link":"#渲染与视图管理","children":[{"level":3,"title":"渲染循环","slug":"渲染循环","link":"#渲染循环","children":[]},{"level":3,"title":"视图系统架构","slug":"视图系统架构","link":"#视图系统架构","children":[]}]},{"level":2,"title":"空间追踪与参考空间","slug":"空间追踪与参考空间","link":"#空间追踪与参考空间","children":[{"level":3,"title":"参考空间类型","slug":"参考空间类型","link":"#参考空间类型","children":[]},{"level":3,"title":"空间关系示意图","slug":"空间关系示意图","link":"#空间关系示意图","children":[]}]},{"level":2,"title":"输入设备处理","slug":"输入设备处理","link":"#输入设备处理","children":[{"level":3,"title":"控制器输入","slug":"控制器输入","link":"#控制器输入","children":[]},{"level":3,"title":"输入类型架构","slug":"输入类型架构","link":"#输入类型架构","children":[]}]},{"level":2,"title":"集成 Three.js 开发","slug":"集成-three-js-开发","link":"#集成-three-js-开发","children":[{"level":3,"title":"Three.js WebXR 集成","slug":"three-js-webxr-集成","link":"#three-js-webxr-集成","children":[]},{"level":3,"title":"使用 A-Frame 快速开发","slug":"使用-a-frame-快速开发","link":"#使用-a-frame-快速开发","children":[]}]},{"level":2,"title":"性能优化与最佳实践","slug":"性能优化与最佳实践","link":"#性能优化与最佳实践","children":[{"level":3,"title":"渲染优化","slug":"渲染优化","link":"#渲染优化","children":[]},{"level":3,"title":"用户体验最佳实践","slug":"用户体验最佳实践","link":"#用户体验最佳实践","children":[]}]},{"level":2,"title":"设备兼容性与检测","slug":"设备兼容性与检测","link":"#设备兼容性与检测","children":[{"level":3,"title":"功能检测","slug":"功能检测","link":"#功能检测","children":[]}]}],"relativePath":"web-3d/webxr/basic.md","filePath":"web-3d/webxr/basic.md"}'),o={name:"web-3d/webxr/basic.md"};function e(t,s,c,r,E,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /web-3d/webxr/basic.md for this page in Markdown format</div><h1 id="webxr-基础" tabindex="-1">WebXR 基础 <a class="header-anchor" href="#webxr-基础" aria-label="Permalink to &quot;WebXR 基础&quot;">​</a></h1><h2 id="什么是-webxr" tabindex="-1">什么是 WebXR？ <a class="header-anchor" href="#什么是-webxr" aria-label="Permalink to &quot;什么是 WebXR？&quot;">​</a></h2><p><strong>WebXR</strong> 是一个用于在网页上实现<strong>混合现实</strong> (包括虚拟现实 VR 和增强现实 AR) 技术的开放标准。它由 W3C 制定，取代了已弃用的 WebVR 规范，允许开发者通过浏览器直接访问 VR 和 AR 设备，创建跨平台的沉浸式体验。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>WebXR 生态系统</span></span>
<span class="line"><span>├── 设备支持</span></span>
<span class="line"><span>│   ├── VR 头显 (Oculus Rift, HTC Vive 等)</span></span>
<span class="line"><span>│   ├── AR 眼镜 (Microsoft HoloLens 等)</span></span>
<span class="line"><span>│   └── 移动设备 (智能手机 + Cardboard 等)</span></span>
<span class="line"><span>├── 技术基础</span></span>
<span class="line"><span>│   ├── WebGL/WebGPU 渲染</span></span>
<span class="line"><span>│   ├：设备传感器 API</span></span>
<span class="line"><span>│   └：浏览器集成</span></span>
<span class="line"><span>└── 应用场景</span></span>
<span class="line"><span>    ├── 虚拟展示</span></span>
<span class="line"><span>    ├── 交互培训</span></span>
<span class="line"><span>    ├── 沉浸游戏</span></span>
<span class="line"><span>    └── 教育应用</span></span></code></pre></div><h2 id="webxr-核心概念" tabindex="-1">WebXR 核心概念 <a class="header-anchor" href="#webxr-核心概念" aria-label="Permalink to &quot;WebXR 核心概念&quot;">​</a></h2><h3 id="设备与会话" tabindex="-1">设备与会话 <a class="header-anchor" href="#设备与会话" aria-label="Permalink to &quot;设备与会话&quot;">​</a></h3><p>WebXR 的核心是<strong>设备</strong> (XRDevice) 和<strong>会话</strong> (XRSession) 的概念。设备代表物理硬件，会话管理应用程序与设备的交互状态。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 设备检测与会话管理</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> initializeWebXR</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">navigator.xr) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WebXR not supported&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 检查设备支持能力</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> isVRSupported</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">isSessionSupported</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immersive-vr&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> isARSupported</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">isSessionSupported</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immersive-ar&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`VR supported: \${</span><span style="color:#E1E4E8;">isVRSupported</span><span style="color:#9ECBFF;">}, AR supported: \${</span><span style="color:#E1E4E8;">isARSupported</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启动 VR 会话</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> startVRSession</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> session</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">requestSession</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immersive-vr&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    requiredFeatures: [</span><span style="color:#9ECBFF;">&#39;local-floor&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;bounded-floor&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    optionalFeatures: [</span><span style="color:#9ECBFF;">&#39;hand-tracking&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> session</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="会话类型示意图" tabindex="-1">会话类型示意图 <a class="header-anchor" href="#会话类型示意图" aria-label="Permalink to &quot;会话类型示意图&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>WebXR 会话类型</span></span>
<span class="line"><span>├── inline (内联)</span></span>
<span class="line"><span>│   └── 在普通网页中显示 3D 内容</span></span>
<span class="line"><span>├── immersive-vr (沉浸式 VR)</span></span>
<span class="line"><span>│   └── 完全沉浸的虚拟环境</span></span>
<span class="line"><span>└── immersive-ar (沉浸式 AR)</span></span>
<span class="line"><span>    └── 数字内容叠加到真实世界</span></span></code></pre></div><h2 id="渲染与视图管理" tabindex="-1">渲染与视图管理 <a class="header-anchor" href="#渲染与视图管理" aria-label="Permalink to &quot;渲染与视图管理&quot;">​</a></h2><h3 id="渲染循环" tabindex="-1">渲染循环 <a class="header-anchor" href="#渲染循环" aria-label="Permalink to &quot;渲染循环&quot;">​</a></h3><p>WebXR 使用特殊的渲染循环来处理立体渲染和设备姿态更新：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> WebXRApp</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">WebGLRenderer</span><span style="color:#E1E4E8;">({ antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.xr.enabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Scene</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.camera </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PerspectiveCamera</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建渲染循环</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setAnimationLoop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.animate.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> startSession</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> session</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">requestSession</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immersive-vr&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">setSession</span><span style="color:#E1E4E8;">(session)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  animate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">time</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">frame</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (frame) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> pose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> frame.</span><span style="color:#B392F0;">getViewerPose</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.referenceSpace)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (pose) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 更新每个视图的渲染</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> view</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> pose.views) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> viewport</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">getViewport</span><span style="color:#E1E4E8;">(view)</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setViewport</span><span style="color:#E1E4E8;">(viewport)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">          // 应用视图变换并渲染</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.camera.matrix.</span><span style="color:#B392F0;">fromArray</span><span style="color:#E1E4E8;">(view.transform.matrix)</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.camera.projectionMatrix.</span><span style="color:#B392F0;">fromArray</span><span style="color:#E1E4E8;">(view.projectionMatrix)</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.camera.</span><span style="color:#B392F0;">updateMatrixWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.scene, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.camera)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="视图系统架构" tabindex="-1">视图系统架构 <a class="header-anchor" href="#视图系统架构" aria-label="Permalink to &quot;视图系统架构&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>WebXR 视图系统</span></span>
<span class="line"><span>XRFrame</span></span>
<span class="line"><span>└── XRViewerPose</span></span>
<span class="line"><span>    ├── XRView (左眼)</span></span>
<span class="line"><span>    │   ├── 变换矩阵</span></span>
<span class="line"><span>    │   └── 投影矩阵</span></span>
<span class="line"><span>    └── XRView (右眼)</span></span>
<span class="line"><span>        ├── 变换矩阵</span></span>
<span class="line"><span>        └── 投影矩阵</span></span></code></pre></div><h2 id="空间追踪与参考空间" tabindex="-1">空间追踪与参考空间 <a class="header-anchor" href="#空间追踪与参考空间" aria-label="Permalink to &quot;空间追踪与参考空间&quot;">​</a></h2><h3 id="参考空间类型" tabindex="-1">参考空间类型 <a class="header-anchor" href="#参考空间类型" aria-label="Permalink to &quot;参考空间类型&quot;">​</a></h3><p>WebXR 使用<strong>参考空间</strong>来定义坐标系和追踪空间：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 初始化参考空间</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> setupReferenceSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">session</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取不同类型的参考空间</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> viewerSpace</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">requestReferenceSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;viewer&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> localSpace</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">requestReferenceSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> localFloorSpace</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">requestReferenceSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;local-floor&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> boundedSpace</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">requestReferenceSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bounded-floor&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> unboundedSpace</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">requestReferenceSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;unbounded&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> localFloorSpace </span><span style="color:#6A737D;">// 最常用的类型</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理姿态更新</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> updatePose</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">frame</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">referenceSpace</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> pose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> frame.</span><span style="color:#B392F0;">getViewerPose</span><span style="color:#E1E4E8;">(referenceSpace)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (pose) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取头部位置和方向</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> position</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pose.transform.position</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> orientation</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pose.transform.orientation</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 应用到头戴设备显示</span></span>
<span class="line"><span style="color:#B392F0;">    updateCamera</span><span style="color:#E1E4E8;">(position, orientation)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="空间关系示意图" tabindex="-1">空间关系示意图 <a class="header-anchor" href="#空间关系示意图" aria-label="Permalink to &quot;空间关系示意图&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>参考空间层级</span></span>
<span class="line"><span>viewer-space (观察者空间)</span></span>
<span class="line"><span>├── 基于头戴设备当前位置</span></span>
<span class="line"><span>├── 适合菜单和 UI 元素</span></span>
<span class="line"><span>└── 随头部移动而变化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>local-space (局部空间)</span></span>
<span class="line"><span>├── 稳定的原点位置</span></span>
<span class="line"><span>├── 适合房间尺度的体验</span></span>
<span class="line"><span>└── 支持有限的移动范围</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bounded-floor (有边界地面)</span></span>
<span class="line"><span>├── 定义安全游玩区域</span></span>
<span class="line"><span>├── 显示边界网格</span></span>
<span class="line"><span>└── 防止用户碰撞实物</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unbounded-space (无边界空间)</span></span>
<span class="line"><span>├── 支持大范围移动</span></span>
<span class="line"><span>├── 适合户外或大型场地</span></span>
<span class="line"><span>└── 需要外部追踪系统</span></span></code></pre></div><h2 id="输入设备处理" tabindex="-1">输入设备处理 <a class="header-anchor" href="#输入设备处理" aria-label="Permalink to &quot;输入设备处理&quot;">​</a></h2><h3 id="控制器输入" tabindex="-1">控制器输入 <a class="header-anchor" href="#控制器输入" aria-label="Permalink to &quot;控制器输入&quot;">​</a></h3><p>WebXR 支持多种输入设备，包括手柄、手势和触控输入：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> InputManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">session</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.session </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> session</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.inputSources </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    session.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;inputsourceschange&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.onInputSourcesChange.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">    session.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;selectstart&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onSelectStart.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    session.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;selectend&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onSelectEnd.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onInputSourcesChange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 处理输入设备连接/断开</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> inputSource</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> event.added) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.inputSources.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(inputSource, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        handedness: inputSource.handenedness,</span></span>
<span class="line"><span style="color:#E1E4E8;">        targetRayMode: inputSource.targetRayMode,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> inputSource</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> event.removed) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.inputSources.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(inputSource)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onSelectStart</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inputSource</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> event.inputSource</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Input selected: \${</span><span style="color:#E1E4E8;">inputSource</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">handenedness</span><span style="color:#9ECBFF;">} hand\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 处理选择开始（如抓取、按钮按下）</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleGrabStart</span><span style="color:#E1E4E8;">(inputSource)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onSelectEnd</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 处理选择结束</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleGrabEnd</span><span style="color:#E1E4E8;">(event.inputSource)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  update</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">frame</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">referenceSpace</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 更新所有输入设备的状态</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> inputSource</span><span style="color:#F97583;"> of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.inputSources.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> gripPose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> frame.</span><span style="color:#B392F0;">getPose</span><span style="color:#E1E4E8;">(inputSource.gripSpace, referenceSpace)</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> targetRayPose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> frame.</span><span style="color:#B392F0;">getPose</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        inputSource.targetRaySpace,</span></span>
<span class="line"><span style="color:#E1E4E8;">        referenceSpace</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (gripPose) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateControllerModel</span><span style="color:#E1E4E8;">(inputSource, gripPose)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (targetRayPose) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updatePointerRay</span><span style="color:#E1E4E8;">(inputSource, targetRayPose)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="输入类型架构" tabindex="-1">输入类型架构 <a class="header-anchor" href="#输入类型架构" aria-label="Permalink to &quot;输入类型架构&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>WebXR 输入系统</span></span>
<span class="line"><span>XRInputSource</span></span>
<span class="line"><span>├── handedness (左右手)</span></span>
<span class="line"><span>│   ├── none</span></span>
<span class="line"><span>│   ├── left</span></span>
<span class="line"><span>│   └── right</span></span>
<span class="line"><span>├── targetRayMode (目标射线模式)</span></span>
<span class="line"><span>│   ├── gaze (凝视)</span></span>
<span class="line"><span>│   ├── tracked-pointer (追踪指针)</span></span>
<span class="line"><span>│   └── screen (屏幕)</span></span>
<span class="line"><span>└── 输入能力</span></span>
<span class="line"><span>    ├── 选择按钮</span></span>
<span class="line"><span>    ├── 抓取按钮</span></span>
<span class="line"><span>    ├── 触摸板</span></span>
<span class="line"><span>    └── 手势追踪</span></span></code></pre></div><h2 id="集成-three-js-开发" tabindex="-1">集成 Three.js 开发 <a class="header-anchor" href="#集成-three-js-开发" aria-label="Permalink to &quot;集成 Three.js 开发&quot;">​</a></h2><h3 id="three-js-webxr-集成" tabindex="-1">Three.js WebXR 集成 <a class="header-anchor" href="#three-js-webxr-集成" aria-label="Permalink to &quot;Three.js WebXR 集成&quot;">​</a></h3><p>Three.js 提供了完整的 WebXR 支持，简化了开发流程：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { VRButton } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three/addons/webxr/VRButton.js&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ARButton } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three/addons/webxr/ARButton.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ThreeJSWebXRExample</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建场景</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Scene</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.background </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Color</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x444444</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建相机</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.camera </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PerspectiveCamera</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#79B8FF;">      50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.innerWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> window.innerHeight,</span></span>
<span class="line"><span style="color:#79B8FF;">      0.1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      100</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.camera.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1.6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建渲染器并启用 WebXR</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">WebGLRenderer</span><span style="color:#E1E4E8;">({ antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">(window.innerWidth, window.innerHeight)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.xr.enabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.renderer.domElement)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 添加 XR 按钮</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(VRButton.</span><span style="color:#B392F0;">createButton</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.renderer))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 添加场景内容</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupScene</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 启动渲染循环</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setAnimationLoop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.render.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupScene</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 添加灯光</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> light</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DirectionalLight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    light.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(light)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 添加地板</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> floorGeometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PlaneGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> floorMaterial</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0x666666</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> floor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(floorGeometry, floorMaterial)</span></span>
<span class="line"><span style="color:#E1E4E8;">    floor.rotation.x </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;">Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 2</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(floor)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 添加交互对象</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> boxGeometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> boxMaterial</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0x00ff00</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.box </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(boxGeometry, boxMaterial)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.box.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.25</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.box)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 添加控制器</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.controller </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">getController</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.controller.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;selectstart&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.onSelectStart.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.controller.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;selectend&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onSelectEnd.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.controller)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onSelectStart</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 开始交互</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.box.material.color.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xff0000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onSelectEnd</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 结束交互</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.box.material.color.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x00ff00</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.scene, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.camera)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> ThreeJSWebXRExample</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h3 id="使用-a-frame-快速开发" tabindex="-1">使用 A-Frame 快速开发 <a class="header-anchor" href="#使用-a-frame-快速开发" aria-label="Permalink to &quot;使用 A-Frame 快速开发&quot;">​</a></h3><p>A-Frame 提供了声明式的 WebXR 开发方式：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#B392F0;"> html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://aframe.io/releases/1.4.0/aframe.min.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-scene</span></span>
<span class="line"><span style="color:#B392F0;">      background</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color: #444444&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      embedded</span></span>
<span class="line"><span style="color:#B392F0;">      webxr</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;required: local-floor; optional: hand-tracking&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      vr-mode-ui</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;enabled: true&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      xr-mode-ui</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;enabled: true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#6A737D;">      &lt;!-- 3D 场景内容 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">a-box</span><span style="color:#B392F0;"> position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 1 -3&quot;</span><span style="color:#B392F0;"> rotation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 45 0&quot;</span><span style="color:#B392F0;"> color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#4CC3D9&quot;</span><span style="color:#B392F0;"> shadow</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a-box</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">a-sphere</span></span>
<span class="line"><span style="color:#B392F0;">        position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;-1 1.25 -3&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        radius</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.5&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#EF2D5E&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        shadow</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;&lt;/</span><span style="color:#85E89D;">a-sphere</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">a-cylinder</span></span>
<span class="line"><span style="color:#B392F0;">        position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1 0.75 -3&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        radius</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.5&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.5&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#FFC65D&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        shadow</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;&lt;/</span><span style="color:#85E89D;">a-cylinder</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      &lt;!-- 地面 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">a-plane</span></span>
<span class="line"><span style="color:#B392F0;">        position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 0 -4&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        rotation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;-90 0 0&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;20&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;20&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#7BC8A4&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        shadow</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;&lt;/</span><span style="color:#85E89D;">a-plane</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      &lt;!-- 灯光 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">a-light</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ambient&quot;</span><span style="color:#B392F0;"> color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#445451&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a-light</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">a-light</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;directional&quot;</span><span style="color:#B392F0;"> position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;2 4 2&quot;</span><span style="color:#B392F0;"> intensity</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.5&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a-light</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      &lt;!-- 控制器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">a-entity</span></span>
<span class="line"><span style="color:#B392F0;">        laser-controls</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;hand: right&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        raycaster</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;objects: .interactive&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;&lt;/</span><span style="color:#85E89D;">a-entity</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">a-scene</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="性能优化与最佳实践" tabindex="-1">性能优化与最佳实践 <a class="header-anchor" href="#性能优化与最佳实践" aria-label="Permalink to &quot;性能优化与最佳实践&quot;">​</a></h2><h3 id="渲染优化" tabindex="-1">渲染优化 <a class="header-anchor" href="#渲染优化" aria-label="Permalink to &quot;渲染优化&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> WebXROptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">renderer</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> renderer</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupOptimizations</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupOptimizations</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置适当的像素比例</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(window.devicePixelRatio, </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 启用多重采样抗锯齿</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> gl</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (gl.</span><span style="color:#B392F0;">getContextAttributes</span><span style="color:#E1E4E8;">().antialias) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.renderer.antialias </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 配置渲染优化</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.shadowMap.enabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.shadowMap.type </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.PCFSoftShadowMap</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 设置适当的帧率限制</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.frameRateLimit </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 90</span><span style="color:#6A737D;"> // 匹配头显刷新率</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  adjustQualityForPerformance</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 基于设备性能动态调整质量</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> xrSession</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">getSession</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (xrSession) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> layer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> xrSession.renderState.baseLayer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 监控帧率并动态调整</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">monitorFrameRate</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">actualFrameRate</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (actualFrameRate </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.frameRateLimit </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0.9</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reduceRenderQuality</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  reduceRenderQuality</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 降低渲染质量以保持性能</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 减少阴影质量</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.shadowMap.autoUpdate </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 可以在这里添加更多优化策略</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> monitorFrameRate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> frameCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#B392F0;"> checkFrameRate</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        frameCount</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> elapsed</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (elapsed </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">          // 测量 1 秒</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> frameRate</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> frameCount </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (elapsed </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">          resolve</span><span style="color:#E1E4E8;">(frameRate)</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          requestAnimationFrame</span><span style="color:#E1E4E8;">(checkFrameRate)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">      checkFrameRate</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="用户体验最佳实践" tabindex="-1">用户体验最佳实践 <a class="header-anchor" href="#用户体验最佳实践" aria-label="Permalink to &quot;用户体验最佳实践&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> UXBestPractices</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupUserComfort</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupUserComfort</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 防止运动不适</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupComfortMode</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 提供用户引导</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">provideTutorial</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 设置适当的移动机制</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupMovementSystems</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupComfortMode</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 添加舒适模式选项</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.comfortMode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      snapTurn: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 瞬时转向</span></span>
<span class="line"><span style="color:#E1E4E8;">      teleportation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 传送移动</span></span>
<span class="line"><span style="color:#E1E4E8;">      vignette: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 移动时边缘变暗</span></span>
<span class="line"><span style="color:#E1E4E8;">      comfortMode: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 减少移动效果</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">applyComfortSettings</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  provideTutorial</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 首次体验引导</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hasSeenTutorial</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showTutorial</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">markTutorialSeen</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupMovementSystems</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 提供多种移动选项</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.movementModes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      teleport: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.teleportMovement.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      smooth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.smoothMovement.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      armSwinger: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.armSwingerMovement.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 默认使用最舒适的移动方式</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.currentMovementMode </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;teleport&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  teleportMovement</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">targetPosition</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 实现传送移动逻辑</span></span>
<span class="line"><span style="color:#6A737D;">    // 显示传送弧线</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showTeleportArc</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 瞬时移动，减少晕动症</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.player.position.</span><span style="color:#B392F0;">copy</span><span style="color:#E1E4E8;">(targetPosition)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="设备兼容性与检测" tabindex="-1">设备兼容性与检测 <a class="header-anchor" href="#设备兼容性与检测" aria-label="Permalink to &quot;设备兼容性与检测&quot;">​</a></h2><h3 id="功能检测" tabindex="-1">功能检测 <a class="header-anchor" href="#功能检测" aria-label="Permalink to &quot;功能检测&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> WebXRCompatibility</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> checkCompatibility</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> compatibilityReport</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      webXRSupported: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      vrSupported: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      arSupported: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      features: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      limitations: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 基础 WebXR 支持检测</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">navigator.xr) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      compatibilityReport.limitations.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;WebXR not available in this browser&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> compatibilityReport</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    compatibilityReport.webXRSupported </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检测 VR 支持</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      compatibilityReport.vrSupported </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">isSessionSupported</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;immersive-vr&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      compatibilityReport.limitations.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;VR not supported: &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> error.message)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检测 AR 支持</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      compatibilityReport.arSupported </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">isSessionSupported</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;immersive-ar&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      compatibilityReport.limitations.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;AR not supported: &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> error.message)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检测特定功能支持</span></span>
<span class="line"><span style="color:#E1E4E8;">    compatibilityReport.features </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">detectFeatures</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> compatibilityReport</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> detectFeatures</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> features</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 测试会话以检测可用功能</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sessionTypes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;immersive-vr&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;immersive-ar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;inline&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> sessionType</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> sessionTypes) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">isSessionSupported</span><span style="color:#E1E4E8;">(sessionType)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        features[sessionType] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getSessionFeatures</span><span style="color:#E1E4E8;">(sessionType)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> features</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> getSessionFeatures</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sessionType</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 这里可以添加更详细的功能检测</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      localFloor: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boundedFloor: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      handTracking: </span><span style="color:#F97583;">await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkHandTrackingSupport</span><span style="color:#E1E4E8;">(sessionType),</span></span>
<span class="line"><span style="color:#E1E4E8;">      layers: </span><span style="color:#F97583;">await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkLayerSupport</span><span style="color:#E1E4E8;">(sessionType),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> checkHandTrackingSupport</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sessionType</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检测手部追踪支持</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> session</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">requestSession</span><span style="color:#E1E4E8;">(sessionType, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        optionalFeatures: [</span><span style="color:#9ECBFF;">&#39;hand-tracking&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      session.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,44)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
