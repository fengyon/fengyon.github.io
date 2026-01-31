import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"AR 开发","description":"","frontmatter":{},"headers":[{"level":2,"title":"WebXR AR 概述","slug":"webxr-ar-概述","link":"#webxr-ar-概述","children":[]},{"level":2,"title":"WebXR AR 核心概念","slug":"webxr-ar-核心概念","link":"#webxr-ar-核心概念","children":[{"level":3,"title":"会话类型与模式","slug":"会话类型与模式","link":"#会话类型与模式","children":[]},{"level":3,"title":"环境理解与空间追踪","slug":"环境理解与空间追踪","link":"#环境理解与空间追踪","children":[]}]},{"level":2,"title":"开发环境配置","slug":"开发环境配置","link":"#开发环境配置","children":[{"level":3,"title":"基础开发设置","slug":"基础开发设置","link":"#基础开发设置","children":[]},{"level":3,"title":"DOM 叠加配置","slug":"dom-叠加配置","link":"#dom-叠加配置","children":[]}]},{"level":2,"title":"环境交互功能","slug":"环境交互功能","link":"#环境交互功能","children":[{"level":3,"title":"命中测试实现","slug":"命中测试实现","link":"#命中测试实现","children":[]},{"level":3,"title":"平面检测与锚点","slug":"平面检测与锚点","link":"#平面检测与锚点","children":[]}]},{"level":2,"title":"使用 Three.js 开发 AR 应用","slug":"使用-three-js-开发-ar-应用","link":"#使用-three-js-开发-ar-应用","children":[{"level":3,"title":"Three.js AR 集成","slug":"three-js-ar-集成","link":"#three-js-ar-集成","children":[]},{"level":3,"title":"光照估计集成","slug":"光照估计集成","link":"#光照估计集成","children":[]}]},{"level":2,"title":"使用 A-Frame 快速开发 AR","slug":"使用-a-frame-快速开发-ar","link":"#使用-a-frame-快速开发-ar","children":[{"level":3,"title":"A-Frame AR 基础","slug":"a-frame-ar-基础","link":"#a-frame-ar-基础","children":[]},{"level":3,"title":"A-Frame AR 组件开发","slug":"a-frame-ar-组件开发","link":"#a-frame-ar-组件开发","children":[]}]},{"level":2,"title":"基于标记的 AR 体验","slug":"基于标记的-ar-体验","link":"#基于标记的-ar-体验","children":[{"level":3,"title":"图像识别与跟踪","slug":"图像识别与跟踪","link":"#图像识别与跟踪","children":[]}]},{"level":2,"title":"性能优化与最佳实践","slug":"性能优化与最佳实践","link":"#性能优化与最佳实践","children":[{"level":3,"title":"AR 性能优化策略","slug":"ar-性能优化策略","link":"#ar-性能优化策略","children":[]},{"level":3,"title":"用户体验最佳实践","slug":"用户体验最佳实践","link":"#用户体验最佳实践","children":[]}]}],"relativePath":"web-3d/webxr/ar.md","filePath":"web-3d/webxr/ar.md"}'),o={name:"web-3d/webxr/ar.md"};function e(t,s,c,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /web-3d/webxr/ar.md for this page in Markdown format</div><h1 id="ar-开发" tabindex="-1">AR 开发 <a class="header-anchor" href="#ar-开发" aria-label="Permalink to &quot;AR 开发&quot;">​</a></h1><h2 id="webxr-ar-概述" tabindex="-1">WebXR AR 概述 <a class="header-anchor" href="#webxr-ar-概述" aria-label="Permalink to &quot;WebXR AR 概述&quot;">​</a></h2><p>WebXR AR 是一套允许在浏览器中创建<strong>增强现实体验</strong>的开放标准，它将数字内容叠加到用户对真实世界的实时视图上。与虚拟现实创造完全数字化的环境不同，AR 开发专注于将虚拟对象无缝集成到物理环境中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>WebXR AR 技术栈</span></span>
<span class="line"><span>├── 设备层 (智能手机、AR眼镜、平板电脑等)</span></span>
<span class="line"><span>├── 浏览器层 (支持 WebXR AR 的现代浏览器)</span></span>
<span class="line"><span>├── WebXR Device API (核心标准)</span></span>
<span class="line"><span>├── 3D 图形库 (Three.js, A-Frame, Babylon.js 等)</span></span>
<span class="line"><span>└── 应用层 (电商、教育、导航等 AR 体验)</span></span></code></pre></div><h2 id="webxr-ar-核心概念" tabindex="-1">WebXR AR 核心概念 <a class="header-anchor" href="#webxr-ar-核心概念" aria-label="Permalink to &quot;WebXR AR 核心概念&quot;">​</a></h2><h3 id="会话类型与模式" tabindex="-1">会话类型与模式 <a class="header-anchor" href="#会话类型与模式" aria-label="Permalink to &quot;会话类型与模式&quot;">​</a></h3><p>WebXR AR 主要使用 <code>immersive-ar</code> 会话类型，与 VR 的 <code>immersive-vr</code> 会话区分。这种会话类型让开发者能够访问设备摄像头并将 3D 内容叠加到现实世界视图上。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 检测 AR 支持性</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> checkARSupport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (navigator.xr) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> supported</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">isSessionSupported</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immersive-ar&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`AR supported: \${</span><span style="color:#E1E4E8;">supported</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> supported;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启动 AR 会话</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> startARSession</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> session</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">requestSession</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immersive-ar&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      requiredFeatures: [</span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hit-test&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      optionalFeatures: [</span><span style="color:#9ECBFF;">&#39;dom-overlay&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;light-estimation&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> session;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;AR session failed:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="环境理解与空间追踪" tabindex="-1">环境理解与空间追踪 <a class="header-anchor" href="#环境理解与空间追踪" aria-label="Permalink to &quot;环境理解与空间追踪&quot;">​</a></h3><p>AR 应用的核心是理解真实环境并将虚拟内容准确放置其中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>空间追踪层级</span></span>
<span class="line"><span>├── 命中测试 (Hit Test)</span></span>
<span class="line"><span>│   └── 检测视线与真实表面的交点</span></span>
<span class="line"><span>├── 平面检测 (Plane Detection)</span></span>
<span class="line"><span>│   └── 识别水平/垂直表面(地面、墙壁)</span></span>
<span class="line"><span>├── 锚点 (Anchors)</span></span>
<span class="line"><span>│   └── 将虚拟对象锁定在真实空间位置</span></span>
<span class="line"><span>└── 光照估计 (Light Estimation)</span></span>
<span class="line"><span>    └── 匹配虚拟与真实环境光照条件</span></span></code></pre></div><h2 id="开发环境配置" tabindex="-1">开发环境配置 <a class="header-anchor" href="#开发环境配置" aria-label="Permalink to &quot;开发环境配置&quot;">​</a></h2><h3 id="基础开发设置" tabindex="-1">基础开发设置 <a class="header-anchor" href="#基础开发设置" aria-label="Permalink to &quot;基础开发设置&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ARApplication</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 初始化 Three.js 场景</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Scene</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.camera </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PerspectiveCamera</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">WebGLRenderer</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">      alpha: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.xr.enabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.renderer.domElement);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查 AR 支持并启动</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkARSupport</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupARSession</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkARSupport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> navigator.xr </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">isSessionSupported</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immersive-ar&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> setupARSession</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 配置 AR 会话选项</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> session</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">requestSession</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immersive-ar&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      requiredFeatures: [</span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hit-test&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      optionalFeatures: [</span><span style="color:#9ECBFF;">&#39;dom-overlay&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">setSession</span><span style="color:#E1E4E8;">(session);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 设置参考空间</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.referenceSpace </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">requestReferenceSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 启动渲染循环</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setAnimationLoop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.render.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.scene, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.camera);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="dom-叠加配置" tabindex="-1">DOM 叠加配置 <a class="header-anchor" href="#dom-叠加配置" aria-label="Permalink to &quot;DOM 叠加配置&quot;">​</a></h3><p>DOM 叠加允许将 HTML 元素集成到 AR 体验中：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#B392F0;"> html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    .ar-overlay</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">fixed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">rgba</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0.7</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">white</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ar-overlay&quot;</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ar-overlay&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;AR 控制面板&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;add-object&quot;</span><span style="color:#E1E4E8;">&gt;添加物体&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">    import</span><span style="color:#E1E4E8;"> ARApp </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./ar-app.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> ARApp</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 在 AR 应用中启用 DOM 叠加</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> setupDOMOverlay</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">session</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> overlayElement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ar-overlay&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (session.updateRenderState) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">updateRenderState</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      domOverlay: { root: overlayElement }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  overlayElement.style.display </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;block&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="环境交互功能" tabindex="-1">环境交互功能 <a class="header-anchor" href="#环境交互功能" aria-label="Permalink to &quot;环境交互功能&quot;">​</a></h2><h3 id="命中测试实现" tabindex="-1">命中测试实现 <a class="header-anchor" href="#命中测试实现" aria-label="Permalink to &quot;命中测试实现&quot;">​</a></h3><p>命中测试允许用户通过点击屏幕将虚拟对象放置到真实表面：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { XRHitTestSource } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ARHitTest</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">session</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">scene</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">camera</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.session </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> session;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scene;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.camera </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> camera;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.hitTestSource </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupHitTest</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> setupHitTest</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建命中测试源</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> space</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session.</span><span style="color:#B392F0;">requestReferenceSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;viewer&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.hitTestSource </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session.</span><span style="color:#B392F0;">requestHitTestSource</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">      space </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加点击事件监听</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.canvas </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.domElement;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.canvas.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onClick.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> onClick</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.hitTestSource) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 转换点击坐标到标准化设备坐标</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> rect</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.canvas.</span><span style="color:#B392F0;">getBoundingClientRect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> x</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (event.clientX </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> rect.left) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> rect.width </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> y</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;">(event.clientY </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> rect.top) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> rect.height </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 执行命中测试</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hitTestResults</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.frame.</span><span style="color:#B392F0;">getHitTestResults</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.hitTestSource);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (hitTestResults.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> hit</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> hitTestResults[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">placeObjectAtHit</span><span style="color:#E1E4E8;">(hit);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  placeObjectAtHit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">hit</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建变换矩阵来放置对象</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> pose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> hit.</span><span style="color:#B392F0;">getPose</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.referenceSpace);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> matrix</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Matrix4</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">fromArray</span><span style="color:#E1E4E8;">(pose.transform.matrix);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建并放置虚拟对象</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> geometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshBasicMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0xff0000</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cube</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(geometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    cube.</span><span style="color:#B392F0;">applyMatrix4</span><span style="color:#E1E4E8;">(matrix);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(cube);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  update</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">frame</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.frame </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> frame;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="平面检测与锚点" tabindex="-1">平面检测与锚点 <a class="header-anchor" href="#平面检测与锚点" aria-label="Permalink to &quot;平面检测与锚点&quot;">​</a></h3><p>平面检测自动识别环境中的表面，锚点则用于持久化虚拟对象的位置：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ARPlaneDetection</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">session</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">scene</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.session </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> session;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scene;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.anchors </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupPlaneDetection</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> setupPlaneDetection</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 启用平面检测功能</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.session.updateWorldTrackingState) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session.</span><span style="color:#B392F0;">updateWorldTrackingState</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        planeDetectionState: { enabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 监听平面检测事件</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.session.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;planesdetected&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onPlanesDetected.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onPlanesDetected</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> detectedPlanes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> event.detectedPlanes;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    detectedPlanes.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">plane</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createVisualAnchor</span><span style="color:#E1E4E8;">(plane);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> createVisualAnchor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">plane</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 为检测到的平面创建视觉锚点</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> anchor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session.</span><span style="color:#B392F0;">createAnchor</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      plane.centerPose, </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.referenceSpace</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建平面可视化</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> planeGeometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PlaneGeometry</span><span style="color:#E1E4E8;">(plane.extents.width, plane.extents.height);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> planeMaterial</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshBasicMaterial</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">      color: </span><span style="color:#79B8FF;">0x00ff00</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      opacity: </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      transparent: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> planeMesh</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(planeGeometry, planeMaterial);</span></span>
<span class="line"><span style="color:#E1E4E8;">    planeMesh.rotation.x </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;">Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 水平放置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 将平面与锚点关联</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.anchors.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({ anchor, mesh: planeMesh });</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(planeMesh);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  updateAnchors</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">frame</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 更新所有锚点的位置</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.anchors.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">anchor</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">mesh</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> anchorPose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> frame.</span><span style="color:#B392F0;">getPose</span><span style="color:#E1E4E8;">(anchor.anchorSpace, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.referenceSpace);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (anchorPose) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        mesh.matrix.</span><span style="color:#B392F0;">fromArray</span><span style="color:#E1E4E8;">(anchorPose.transform.matrix);</span></span>
<span class="line"><span style="color:#E1E4E8;">        mesh.matrix.</span><span style="color:#B392F0;">decompose</span><span style="color:#E1E4E8;">(mesh.position, mesh.quaternion, mesh.scale);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="使用-three-js-开发-ar-应用" tabindex="-1">使用 Three.js 开发 AR 应用 <a class="header-anchor" href="#使用-three-js-开发-ar-应用" aria-label="Permalink to &quot;使用 Three.js 开发 AR 应用&quot;">​</a></h2><h3 id="three-js-ar-集成" tabindex="-1">Three.js AR 集成 <a class="header-anchor" href="#three-js-ar-集成" aria-label="Permalink to &quot;Three.js AR 集成&quot;">​</a></h3><p>Three.js 提供了强大的 WebXR AR 支持，简化了复杂 3D 内容的创建过程：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ARButton } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three/addons/webxr/ARButton.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ThreeJSARExample</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建场景</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Scene</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建相机</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.camera </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PerspectiveCamera</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">70</span><span style="color:#E1E4E8;">, window.innerWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> window.innerHeight, </span><span style="color:#79B8FF;">0.01</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建渲染器</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">WebGLRenderer</span><span style="color:#E1E4E8;">({ antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, alpha: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(window.devicePixelRatio);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.xr.enabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.renderer.domElement);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加 AR 按钮</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> arButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ARButton.</span><span style="color:#B392F0;">createButton</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.renderer, { </span></span>
<span class="line"><span style="color:#E1E4E8;">      requiredFeatures: [</span><span style="color:#9ECBFF;">&#39;hit-test&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      optionalFeatures: [</span><span style="color:#9ECBFF;">&#39;dom-overlay&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      domOverlay: { root: document.body }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(arButton);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 设置场景内容</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupScene</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 启动渲染循环</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setAnimationLoop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.render.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupScene</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 添加环境光</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> light</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">AmbientLight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(light);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> directionalLight</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DirectionalLight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    directionalLight.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(directionalLight);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建可放置的 3D 对象</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createPlaceableObjects</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createPlaceableObjects</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建立方体</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> geometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshNormalMaterial</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cube </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(geometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建球体</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sphereGeometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">SphereGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.05</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sphereMaterial</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshBasicMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0xff0000</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.sphere </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(sphereGeometry, sphereMaterial);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 初始时隐藏对象</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cube.visible </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.sphere.visible </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.cube);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.sphere);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupHitTesting</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> hitTestSource </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> localReferenceSpace </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> onSelect</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.cube.visible) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 克隆当前对象并添加到场景</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> clone</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cube.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        clone.visible </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(clone);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;select&#39;</span><span style="color:#E1E4E8;">, onSelect);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> onSessionStart</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 设置命中测试</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> session</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">getSession</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      localReferenceSpace </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">requestReferenceSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> viewerSpace</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">requestReferenceSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;viewer&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      hitTestSource </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">requestHitTestSource</span><span style="color:#E1E4E8;">({ space: viewerSpace });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 启动命中测试循环</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hitTestLoop</span><span style="color:#E1E4E8;">(hitTestSource, localReferenceSpace);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sessionstart&#39;</span><span style="color:#E1E4E8;">, onSessionStart);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  hitTestLoop</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">hitTestSource</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">referenceSpace</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> onXRFrame</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">time</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">frame</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> hitTestResults</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> frame.</span><span style="color:#B392F0;">getHitTestResults</span><span style="color:#E1E4E8;">(hitTestSource);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (hitTestResults.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> hit</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> hitTestResults[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> pose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> hit.</span><span style="color:#B392F0;">getPose</span><span style="color:#E1E4E8;">(referenceSpace);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 更新对象位置</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.cube.visible </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.cube.position.</span><span style="color:#B392F0;">setFromMatrixPosition</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#F97583;">          new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Matrix4</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">fromArray</span><span style="color:#E1E4E8;">(pose.transform.matrix)</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.cube.visible </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setAnimationLoop</span><span style="color:#E1E4E8;">(onXRFrame);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.scene, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.camera);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化 AR 应用</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> ThreeJSARExample</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="光照估计集成" tabindex="-1">光照估计集成 <a class="header-anchor" href="#光照估计集成" aria-label="Permalink to &quot;光照估计集成&quot;">​</a></h3><p>光照估计让虚拟对象的光照条件与真实环境匹配：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ARLightEstimation</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">session</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">scene</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.session </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> session;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scene;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.lightProbe </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">LightProbe</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lightProbe);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupLightEstimation</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> setupLightEstimation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 请求光照估计功能</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> session</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">getSession</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (session.requestLightProbe) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> lightProbe</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">requestLightProbe</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">lightProbeUpdate</span><span style="color:#E1E4E8;">(lightProbe);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  lightProbeUpdate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">lightProbe</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 更新光照探头数据</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> shArray</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.lightProbe.sh.coefficients;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      shArray[i].</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(lightProbe.sphericalHarmonicsCoefficients[i </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    lightProbe.sphericalHarmonicsCoefficients[i </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 3</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    lightProbe.sphericalHarmonicsCoefficients[i </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 3</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.lightProbe.intensity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> lightProbe.primaryLightIntensity;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.lightProbe.sh.needsUpdate </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="使用-a-frame-快速开发-ar" tabindex="-1">使用 A-Frame 快速开发 AR <a class="header-anchor" href="#使用-a-frame-快速开发-ar" aria-label="Permalink to &quot;使用 A-Frame 快速开发 AR&quot;">​</a></h2><h3 id="a-frame-ar-基础" tabindex="-1">A-Frame AR 基础 <a class="header-anchor" href="#a-frame-ar-基础" aria-label="Permalink to &quot;A-Frame AR 基础&quot;">​</a></h3><p>A-Frame 提供了声明式的 AR 开发方式，极大简化了 AR 场景的创建过程：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#B392F0;"> html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://aframe.io/releases/1.4.0/aframe.min.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://aframe.io/releases/1.4.0/aframe-ar.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">a-scene</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">    ar</span></span>
<span class="line"><span style="color:#B392F0;">    embedded</span></span>
<span class="line"><span style="color:#B392F0;">    vr-mode-ui</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;enabled: false&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    device-orientation-permission-ui</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;enabled: false&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    xr-mode-ui</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;enabled: false&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- AR 场景内容 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-box</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 0.5 -2&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      rotation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 45 0&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#4CC3D9&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      scale</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.5 0.5 0.5&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      ar-place-on-plane</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;minVisibility: 0.5;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#85E89D;">a-box</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-sphere</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1 0.5 -2&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      radius</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.3&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#EF2D5E&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      ar-place-on-plane</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;minVisibility: 0.5;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#85E89D;">a-sphere</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-cylinder</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;-1 0.5 -2&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      radius</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.2&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.5&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#FFC65D&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      ar-place-on-plane</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;minVisibility: 0.5;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#85E89D;">a-cylinder</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 平面检测可视化 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-entity</span><span style="color:#B392F0;"> ar-plane-detection-visualization</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a-entity</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- AR 相机 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-entity</span><span style="color:#B392F0;"> camera</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a-entity</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">a-scene</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="a-frame-ar-组件开发" tabindex="-1">A-Frame AR 组件开发 <a class="header-anchor" href="#a-frame-ar-组件开发" aria-label="Permalink to &quot;A-Frame AR 组件开发&quot;">​</a></h3><p>创建自定义 A-Frame 组件来扩展 AR 功能：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 自定义 AR 交互组件</span></span>
<span class="line"><span style="color:#79B8FF;">AFRAME</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">registerComponent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ar-interaction&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  schema: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: { type: </span><span style="color:#9ECBFF;">&#39;color&#39;</span><span style="color:#E1E4E8;">, default: </span><span style="color:#9ECBFF;">&#39;#4CC3D9&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    hoverColor: { type: </span><span style="color:#9ECBFF;">&#39;color&#39;</span><span style="color:#E1E4E8;">, default: </span><span style="color:#9ECBFF;">&#39;#EF2D5E&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  init</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.originalColor </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.data.color;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isSelected </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onClick.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fusing&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onFusing.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onClick</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">evt</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 切换选择状态</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isSelected </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isSelected;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isSelected) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;material&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;color&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.data.hoverColor);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;animation&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        property: </span><span style="color:#9ECBFF;">&#39;scale&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        to: </span><span style="color:#9ECBFF;">&#39;1.2 1.2 1.2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        dur: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        easing: </span><span style="color:#9ECBFF;">&#39;easeInOutQuad&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;material&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;color&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.originalColor);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;animation&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        property: </span><span style="color:#9ECBFF;">&#39;scale&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        to: </span><span style="color:#9ECBFF;">&#39;1 1 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        dur: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        easing: </span><span style="color:#9ECBFF;">&#39;easeInOutQuad&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onFusing</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">evt</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 当视线注视对象时的反馈</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isSelected) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;material&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;color&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#FFC65D&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在 HTML 中使用自定义组件</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">a-box</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">  position</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;0 0.5 -2&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  color</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;#4CC3D9&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  ar-interaction</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;hoverColor: #EF2D5E&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  ar-place-on-plane</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#79B8FF;">a-box</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="基于标记的-ar-体验" tabindex="-1">基于标记的 AR 体验 <a class="header-anchor" href="#基于标记的-ar-体验" aria-label="Permalink to &quot;基于标记的 AR 体验&quot;">​</a></h2><h3 id="图像识别与跟踪" tabindex="-1">图像识别与跟踪 <a class="header-anchor" href="#图像识别与跟踪" aria-label="Permalink to &quot;图像识别与跟踪&quot;">​</a></h3><p>基于标记的 AR 使用特定图像来触发和定位 AR 内容：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ImageTrackingAR</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">session</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">scene</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.session </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> session;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scene;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.trackedImages </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupImageTracking</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> setupImageTracking</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 启用图像跟踪</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> session</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">getSession</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (session.updateTrackedImageScores) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">updateTrackedImageScores</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        imageTracking: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 监听图像跟踪事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    session.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;image-tracking&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onImageTracking.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onImageTracking</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> trackedImages</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> event.trackedImages;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    trackedImages.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">trackedImage</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (trackedImage.trackingState </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;tracked&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showARContent</span><span style="color:#E1E4E8;">(trackedImage);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hideARContent</span><span style="color:#E1E4E8;">(trackedImage);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> showARContent</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">trackedImage</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> imageId</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> trackedImage.imageIndex;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.trackedImages.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(imageId)) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 创建与图像关联的 AR 内容</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> arContent</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createARContentForImage</span><span style="color:#E1E4E8;">(imageId);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.trackedImages.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(imageId, arContent);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(arContent);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> arContent</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.trackedImages.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(imageId);</span></span>
<span class="line"><span style="color:#E1E4E8;">    arContent.visible </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 更新位置以匹配跟踪图像</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> pose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> trackedImage.</span><span style="color:#B392F0;">getImageSpacePose</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.referenceSpace);</span></span>
<span class="line"><span style="color:#E1E4E8;">    arContent.matrix.</span><span style="color:#B392F0;">fromArray</span><span style="color:#E1E4E8;">(pose.transform.matrix);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createARContentForImage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">imageId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 根据不同的图像 ID 创建不同的 AR 内容</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> group</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Group</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 示例：创建围绕图像的 3D 边框</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> geometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.01</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshBasicMaterial</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">      color: </span><span style="color:#79B8FF;">0x00ff00</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      transparent: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      opacity: </span><span style="color:#79B8FF;">0.5</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> border</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(geometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">    group.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(border);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加 3D 文字说明</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> textGeometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">TextGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;AR 内容&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      size: </span><span style="color:#79B8FF;">0.05</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      height: </span><span style="color:#79B8FF;">0.01</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> textMaterial</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshBasicMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> text</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(textGeometry, textMaterial);</span></span>
<span class="line"><span style="color:#E1E4E8;">    text.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    group.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(text);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    group.visible </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> group;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  hideARContent</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">trackedImage</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> imageId</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> trackedImage.imageIndex;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> arContent</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.trackedImages.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(imageId);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (arContent) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      arContent.visible </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="性能优化与最佳实践" tabindex="-1">性能优化与最佳实践 <a class="header-anchor" href="#性能优化与最佳实践" aria-label="Permalink to &quot;性能优化与最佳实践&quot;">​</a></h2><h3 id="ar-性能优化策略" tabindex="-1">AR 性能优化策略 <a class="header-anchor" href="#ar-性能优化策略" aria-label="Permalink to &quot;AR 性能优化策略&quot;">​</a></h3><p>AR 应用对性能要求极高，需要特别关注优化：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> AROptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">renderer</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">scene</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> renderer;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scene;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupOptimizations</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupOptimizations</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置适当的渲染参数</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(window.devicePixelRatio, </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.outputEncoding </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.sRGBEncoding;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 启用纹理压缩</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupTextureCompression</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 设置细节层级 (LOD)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupLODSystem</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupTextureCompression</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 配置纹理压缩以减少内存使用</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> gl</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查支持的纹理压缩格式</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> extensions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      astc: gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_compressed_texture_astc&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      etc: gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_compressed_texture_etc&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      s3tc: gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_compressed_texture_s3tc&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.preferredFormat </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">selectBestFormat</span><span style="color:#E1E4E8;">(extensions);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupLODSystem</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 为复杂对象设置细节层级</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">child</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (child.isMesh </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> child.geometry) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> lod</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">LOD</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 根据距离添加不同细节层级的模型</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (child.geometry.boundingSphere) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> radius</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> child.geometry.boundingSphere.radius;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#6A737D;">          // 高细节模型 (近距离)</span></span>
<span class="line"><span style="color:#E1E4E8;">          lod.</span><span style="color:#B392F0;">addLevel</span><span style="color:#E1E4E8;">(child, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#6A737D;">          // 中细节模型 (中距离)</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> mediumDetail</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> child.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          mediumDetail.geometry </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">simplifyGeometry</span><span style="color:#E1E4E8;">(child.geometry, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          lod.</span><span style="color:#B392F0;">addLevel</span><span style="color:#E1E4E8;">(mediumDetail, radius </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#6A737D;">          // 低细节模型 (远距离)</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> lowDetail</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> child.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          lowDetail.geometry </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">simplifyGeometry</span><span style="color:#E1E4E8;">(child.geometry, </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          lod.</span><span style="color:#B392F0;">addLevel</span><span style="color:#E1E4E8;">(lowDetail, radius </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(lod);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  simplifyGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">geometry</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">ratio</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 几何体简化逻辑 (实际项目中可使用专业简化库)</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> geometry;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  adjustQualityBasedOnPerformance</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 基于帧率动态调整质量</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.performanceMonitor.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">performance</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (performance.fps </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 45</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reduceQuality</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (performance.fps </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 55</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">increaseQuality</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  reduceQuality</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 降低渲染质量</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.shadowMap.enabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  increaseQuality</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 提高渲染质量</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(window.devicePixelRatio, </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.shadowMap.enabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 性能监测器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ARPerformanceMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.frameTimes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.lastTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  update</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> currentTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> delta</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> currentTime </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.lastTime;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.lastTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.frameTimes.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(delta);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.frameTimes.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 60</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.frameTimes.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> averageFrameTime</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.frameTimes.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.frameTimes.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> fps</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1000</span><span style="color:#F97583;"> /</span><span style="color:#E1E4E8;"> averageFrameTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">({ fps, averageFrameTime });</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">({ fps: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">, averageFrameTime: </span><span style="color:#79B8FF;">16.67</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="用户体验最佳实践" tabindex="-1">用户体验最佳实践 <a class="header-anchor" href="#用户体验最佳实践" aria-label="Permalink to &quot;用户体验最佳实践&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ARUXBestPractices</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupUserGuidance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupComfortFeatures</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupUserGuidance</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 提供 AR 使用指导</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showInitialInstructions</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupTutorial</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  showInitialInstructions</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> instructions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    instructions.className </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;ar-instructions&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    instructions.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;h3&gt;AR 体验指南&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;p&gt;• 在光线充足的环境中使用&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;p&gt;• 缓慢移动设备以识别表面&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;p&gt;• 点击屏幕放置虚拟对象&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;button id=&quot;start-ar&quot;&gt;开始体验&lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(instructions);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;start-ar&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      instructions.style.display </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startARSession</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupTutorial</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置交互式教程</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tutorialSteps </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;寻找一个平坦的表面&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;缓慢移动手机直到出现网格&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;点击网格放置虚拟对象&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;尝试与对象进行交互&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.currentStep </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showTutorialStep</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  showTutorialStep</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 显示当前教程步骤</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> tutorial</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    tutorial.className </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;ar-tutorial&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    tutorial.textContent </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.tutorialSteps[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentStep];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(tutorial);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 3秒后自动进入下一步</span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tutorial.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.currentStep</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentStep </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.tutorialSteps.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showTutorialStep</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupComfortFeatures</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置舒适性功能</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupMotionWarning</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupRestBreaks</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupMotionWarning</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 运动敏感警告</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> warning</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    warning.className </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;motion-warning&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    warning.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;p&gt;如果您感到晕眩或不适，请立即停止使用&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;p&gt;建议每次使用不超过30分钟&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(warning);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 10秒后自动隐藏</span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      warning.style.opacity </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;0&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> warning.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(), </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>通过合理运用这些技术和最佳实践，开发者可以创建出既技术先进又用户友好的 WebXR AR 体验，将数字内容无缝融合到用户的真实环境中。</p>`,51)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
