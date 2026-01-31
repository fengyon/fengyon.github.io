import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"VR 开发","description":"","frontmatter":{},"headers":[{"level":2,"title":"WebXR VR 概述","slug":"webxr-vr-概述","link":"#webxr-vr-概述","children":[]},{"level":2,"title":"开发环境与设备要求","slug":"开发环境与设备要求","link":"#开发环境与设备要求","children":[{"level":3,"title":"硬件配置","slug":"硬件配置","link":"#硬件配置","children":[]},{"level":3,"title":"开发工具配置","slug":"开发工具配置","link":"#开发工具配置","children":[]}]},{"level":2,"title":"WebXR API 核心概念","slug":"webxr-api-核心概念","link":"#webxr-api-核心概念","children":[{"level":3,"title":"会话管理与生命周期","slug":"会话管理与生命周期","link":"#会话管理与生命周期","children":[]},{"level":3,"title":"渲染循环与帧更新","slug":"渲染循环与帧更新","link":"#渲染循环与帧更新","children":[]},{"level":3,"title":"空间追踪与参考空间","slug":"空间追踪与参考空间","link":"#空间追踪与参考空间","children":[]}]},{"level":2,"title":"使用 Three.js 进行 VR 开发","slug":"使用-three-js-进行-vr-开发","link":"#使用-three-js-进行-vr-开发","children":[{"level":3,"title":"Three.js WebXR 集成","slug":"three-js-webxr-集成","link":"#three-js-webxr-集成","children":[]},{"level":3,"title":"控制器与交互","slug":"控制器与交互","link":"#控制器与交互","children":[]}]},{"level":2,"title":"使用 A-Frame 快速开发","slug":"使用-a-frame-快速开发","link":"#使用-a-frame-快速开发","children":[{"level":3,"title":"A-Frame VR 基础","slug":"a-frame-vr-基础","link":"#a-frame-vr-基础","children":[]},{"level":3,"title":"A-Frame 组件开发","slug":"a-frame-组件开发","link":"#a-frame-组件开发","children":[]}]},{"level":2,"title":"性能优化技巧","slug":"性能优化技巧","link":"#性能优化技巧","children":[{"level":3,"title":"渲染优化","slug":"渲染优化","link":"#渲染优化","children":[]}]},{"level":2,"title":"高级 VR 功能","slug":"高级-vr-功能","link":"#高级-vr-功能","children":[{"level":3,"title":"手部追踪","slug":"手部追踪","link":"#手部追踪","children":[]},{"level":3,"title":"空间锚点与持久化","slug":"空间锚点与持久化","link":"#空间锚点与持久化","children":[]}]}],"relativePath":"web-3d/webxr/vr.md","filePath":"web-3d/webxr/vr.md"}'),o={name:"web-3d/webxr/vr.md"};function e(t,s,c,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /web-3d/webxr/vr.md for this page in Markdown format</div><h1 id="vr-开发" tabindex="-1">VR 开发 <a class="header-anchor" href="#vr-开发" aria-label="Permalink to &quot;VR 开发&quot;">​</a></h1><h2 id="webxr-vr-概述" tabindex="-1">WebXR VR 概述 <a class="header-anchor" href="#webxr-vr-概述" aria-label="Permalink to &quot;WebXR VR 概述&quot;">​</a></h2><p>WebXR VR 是一套允许在浏览器中创建<strong>沉浸式虚拟现实体验</strong>的开放标准。它让开发者能够直接通过网络为用户提供 VR 内容，用户无需安装额外应用即可通过 VR 设备体验。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>WebXR VR 技术栈</span></span>
<span class="line"><span>├── 设备层 (Oculus Rift, HTC Vive, Oculus Go 等)</span></span>
<span class="line"><span>├── 浏览器层 (支持 WebXR 的 Chrome, Firefox 等)</span></span>
<span class="line"><span>├── WebXR API (核心标准)</span></span>
<span class="line"><span>├── 3D 图形库 (Three.js, Babylon.js 等)</span></span>
<span class="line"><span>└── 应用层 (VR 网站、体验、游戏)</span></span></code></pre></div><h2 id="开发环境与设备要求" tabindex="-1">开发环境与设备要求 <a class="header-anchor" href="#开发环境与设备要求" aria-label="Permalink to &quot;开发环境与设备要求&quot;">​</a></h2><h3 id="硬件配置" tabindex="-1">硬件配置 <a class="header-anchor" href="#硬件配置" aria-label="Permalink to &quot;硬件配置&quot;">​</a></h3><p>开发 WebXR VR 应用需要满足以下硬件条件：</p><ul><li><strong>CPU</strong>：2 核 4 线程 1.8GHz 及以上</li><li><strong>内存</strong>：4GB 及以上</li><li><strong>显卡</strong>：入门级独立显卡及以上</li><li><strong>VR 设备</strong>：PC 端头显、一体式头显或移动端头显设备</li></ul><h3 id="开发工具配置" tabindex="-1">开发工具配置 <a class="header-anchor" href="#开发工具配置" aria-label="Permalink to &quot;开发工具配置&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 检测 WebXR 支持情况</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> checkVRSupport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">navigator.xr) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WebXR not supported&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> isVRSupported</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">isSessionSupported</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immersive-vr&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`VR supported: \${</span><span style="color:#E1E4E8;">isVRSupported</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> isVRSupported;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 调用检测</span></span>
<span class="line"><span style="color:#B392F0;">checkVRSupport</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">supported</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (supported) {</span></span>
<span class="line"><span style="color:#B392F0;">    initVRButton</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="webxr-api-核心概念" tabindex="-1">WebXR API 核心概念 <a class="header-anchor" href="#webxr-api-核心概念" aria-label="Permalink to &quot;WebXR API 核心概念&quot;">​</a></h2><h3 id="会话管理与生命周期" tabindex="-1">会话管理与生命周期 <a class="header-anchor" href="#会话管理与生命周期" aria-label="Permalink to &quot;会话管理与生命周期&quot;">​</a></h3><p>WebXR VR 体验围绕 <strong>XRSession</strong> 构建，管理整个 VR 体验的完整生命周期。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> xrSession </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> xrReferenceSpace </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 请求 VR 会话</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> requestVRSession</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> sessionOptions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    requiredFeatures: [</span><span style="color:#9ECBFF;">&#39;local-floor&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;bounded-floor&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    optionalFeatures: [</span><span style="color:#9ECBFF;">&#39;hand-tracking&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    xrSession </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">requestSession</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immersive-vr&#39;</span><span style="color:#E1E4E8;">, sessionOptions);</span></span>
<span class="line"><span style="color:#B392F0;">    setupXRSession</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Failed to start VR session:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置会话</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> setupXRSession</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建参考空间</span></span>
<span class="line"><span style="color:#E1E4E8;">  xrSession.</span><span style="color:#B392F0;">requestReferenceSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;local-floor&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">space</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    xrReferenceSpace </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> space;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 启动渲染循环</span></span>
<span class="line"><span style="color:#E1E4E8;">    xrSession.</span><span style="color:#B392F0;">requestAnimationFrame</span><span style="color:#E1E4E8;">(onXRAnimationFrame);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 处理会话结束</span></span>
<span class="line"><span style="color:#E1E4E8;">  xrSession.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;end&#39;</span><span style="color:#E1E4E8;">, onSessionEnd);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> onSessionEnd</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  xrSession </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  xrReferenceSpace </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;VR session ended&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="渲染循环与帧更新" tabindex="-1">渲染循环与帧更新 <a class="header-anchor" href="#渲染循环与帧更新" aria-label="Permalink to &quot;渲染循环与帧更新&quot;">​</a></h3><p>WebXR 使用特殊的 <strong>requestAnimationFrame</strong> 循环进行渲染。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> onXRAnimationFrame</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">time</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">xrFrame</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 继续请求下一帧</span></span>
<span class="line"><span style="color:#E1E4E8;">  xrSession.</span><span style="color:#B392F0;">requestAnimationFrame</span><span style="color:#E1E4E8;">(onXRAnimationFrame);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 获取观看者姿态</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> pose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> xrFrame.</span><span style="color:#B392F0;">getViewerPose</span><span style="color:#E1E4E8;">(xrReferenceSpace);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (pose) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 更新场景渲染</span></span>
<span class="line"><span style="color:#B392F0;">    renderXRFrame</span><span style="color:#E1E4E8;">(xrFrame, pose);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> renderXRFrame</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">xrFrame</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pose</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 绑定帧缓冲区</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> layer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> xrSession.renderState.baseLayer;</span></span>
<span class="line"><span style="color:#E1E4E8;">  gl.</span><span style="color:#B392F0;">bindFramebuffer</span><span style="color:#E1E4E8;">(gl.</span><span style="color:#79B8FF;">FRAMEBUFFER</span><span style="color:#E1E4E8;">, layer.framebuffer);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 为每个视图渲染场景</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> view</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> pose.views) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> viewport</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> layer.</span><span style="color:#B392F0;">getViewport</span><span style="color:#E1E4E8;">(view);</span></span>
<span class="line"><span style="color:#E1E4E8;">    gl.</span><span style="color:#B392F0;">viewport</span><span style="color:#E1E4E8;">(viewport.x, viewport.y, viewport.width, viewport.height);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    renderView</span><span style="color:#E1E4E8;">(view);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="空间追踪与参考空间" tabindex="-1">空间追踪与参考空间 <a class="header-anchor" href="#空间追踪与参考空间" aria-label="Permalink to &quot;空间追踪与参考空间&quot;">​</a></h3><p>WebXR 使用<strong>参考空间</strong>定义 VR 环境中的坐标系。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>参考空间类型层级</span></span>
<span class="line"><span>viewer-space</span></span>
<span class="line"><span>├── 基于头戴设备当前位置</span></span>
<span class="line"><span>├── 适合菜单和 UI 元素</span></span>
<span class="line"><span>└── 随头部移动而变化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>local-space</span></span>
<span class="line"><span>├── 稳定的原点位置</span></span>
<span class="line"><span>├── 适合房间尺度的体验</span></span>
<span class="line"><span>└── 支持有限的移动范围</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bounded-floor</span></span>
<span class="line"><span>├── 定义安全游玩区域</span></span>
<span class="line"><span>├── 显示边界网格</span></span>
<span class="line"><span>└── 防止用户碰撞实物</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unbounded-space</span></span>
<span class="line"><span>├── 支持大范围移动</span></span>
<span class="line"><span>├── 适合户外或大型场地</span></span>
<span class="line"><span>└── 需要外部追踪系统</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 初始化不同类型的参考空间</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> initializeReferenceSpaces</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">session</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> types</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;viewer&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;local-floor&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;bounded-floor&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> type</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> types) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> space</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">requestReferenceSpace</span><span style="color:#E1E4E8;">(type);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">} reference space created\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> space;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">} reference space not supported:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;No supported reference space type found&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="使用-three-js-进行-vr-开发" tabindex="-1">使用 Three.js 进行 VR 开发 <a class="header-anchor" href="#使用-three-js-进行-vr-开发" aria-label="Permalink to &quot;使用 Three.js 进行 VR 开发&quot;">​</a></h2><h3 id="three-js-webxr-集成" tabindex="-1">Three.js WebXR 集成 <a class="header-anchor" href="#three-js-webxr-集成" aria-label="Permalink to &quot;Three.js WebXR 集成&quot;">​</a></h3><p>Three.js 提供了完整的 WebXR VR 支持，大大简化了开发流程。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { VRButton } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three/addons/webxr/VRButton.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ThreeJSVRExample</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建场景</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Scene</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.background </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Color</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x444444</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建相机</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.camera </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PerspectiveCamera</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">, window.innerWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> window.innerHeight, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.camera.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1.6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建渲染器并启用 WebXR</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">WebGLRenderer</span><span style="color:#E1E4E8;">({ antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.xr.enabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 启用 XR</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.renderer.domElement);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加 VR 按钮</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(VRButton.</span><span style="color:#B392F0;">createButton</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.renderer));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 设置场景</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupScene</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 启动渲染循环</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setAnimationLoop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.render.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupScene</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 添加灯光</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> light</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DirectionalLight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    light.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(light);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ambient</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">AmbientLight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x404040</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(ambient);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加地板</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> floorGeometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PlaneGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> floorMaterial</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0x666666</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> floor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(floorGeometry, floorMaterial);</span></span>
<span class="line"><span style="color:#E1E4E8;">    floor.rotation.x </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;">Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(floor);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加交互对象</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> boxGeometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> boxMaterial</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0x00ff00</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.box </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(boxGeometry, boxMaterial);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.box.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.25</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.box);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加控制器</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.controller </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">getController</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.controller.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;selectstart&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onSelectStart.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.controller.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;selectend&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onSelectEnd.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.controller);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onSelectStart</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.box.material.color.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xff0000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onSelectEnd</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.box.material.color.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x00ff00</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.scene, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.camera);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化应用</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> ThreeJSVRExample</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="控制器与交互" tabindex="-1">控制器与交互 <a class="header-anchor" href="#控制器与交互" aria-label="Permalink to &quot;控制器与交互&quot;">​</a></h3><p>Three.js 提供了内置的控制器支持，便于实现 VR 交互。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { XRControllerModelFactory } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three/addons/webxr/XRControllerModelFactory.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> VRInteraction</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">renderer</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">scene</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> renderer;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scene;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.controllerModelFactory </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> XRControllerModelFactory</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupControllers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupControllers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置左右手控制器</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> controller</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">getController</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">      controller.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;selectstart&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onTriggerPress.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      controller.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;selectend&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onTriggerRelease.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      controller.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;squeezestart&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onGripPress.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      controller.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;squeezeend&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onGripRelease.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(controller);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 添加控制器模型</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> controllerGrip</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.xr.</span><span style="color:#B392F0;">getControllerGrip</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">      controllerGrip.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.controllerModelFactory.</span><span style="color:#B392F0;">createControllerModel</span><span style="color:#E1E4E8;">(controllerGrip));</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(controllerGrip);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 添加射线指示器</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> geometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BufferGeometry</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">setFromPoints</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#F97583;">        new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Vector3</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#F97583;">        new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Vector3</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> line</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Line</span><span style="color:#E1E4E8;">(geometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">      line.name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;line&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      line.scale.z </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      controller.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(line.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onTriggerPress</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> controller</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> event.target;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Trigger pressed on controller:&#39;</span><span style="color:#E1E4E8;">, controller);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 实现触发按钮按下逻辑</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleSelection</span><span style="color:#E1E4E8;">(controller);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onTriggerRelease</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 实现触发按钮释放逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Trigger released&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onGripPress</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 实现握柄按钮按下逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Grip pressed&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onGripRelease</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 实现握柄按钮释放逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Grip released&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  handleSelection</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">controller</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 实现选择交互逻辑</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> raycaster</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Raycaster</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> line</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> controller.</span><span style="color:#B392F0;">getObjectByName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    raycaster.</span><span style="color:#B392F0;">setFromXRController</span><span style="color:#E1E4E8;">(controller);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> intersects</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> raycaster.</span><span style="color:#B392F0;">intersectObjects</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.scene.children);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (intersects.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> object</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> intersects[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].object;</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Selected object:&#39;</span><span style="color:#E1E4E8;">, object);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="使用-a-frame-快速开发" tabindex="-1">使用 A-Frame 快速开发 <a class="header-anchor" href="#使用-a-frame-快速开发" aria-label="Permalink to &quot;使用 A-Frame 快速开发&quot;">​</a></h2><h3 id="a-frame-vr-基础" tabindex="-1">A-Frame VR 基础 <a class="header-anchor" href="#a-frame-vr-基础" aria-label="Permalink to &quot;A-Frame VR 基础&quot;">​</a></h3><p>A-Frame 提供了声明式的 VR 开发方式，让创建 WebXR VR 体验更加简单。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#B392F0;"> html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://aframe.io/releases/1.2.0/aframe.min.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">a-scene</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">    background</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color: #444444&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    embedded</span></span>
<span class="line"><span style="color:#B392F0;">    webxr</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;required: local-floor;&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    vr-mode-ui</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;enabled: true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 3D 场景内容 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-box</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 1 -3&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      rotation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 45 0&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#4CC3D9&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      shadow</span></span>
<span class="line"><span style="color:#B392F0;">      class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;clickable&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      event-set__click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;_color: #EF2D5E&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#85E89D;">a-box</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-sphere</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;-1 1.25 -3&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      radius</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.5&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#EF2D5E&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      shadow</span></span>
<span class="line"><span style="color:#B392F0;">      animation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;property: rotation; to: 0 360 0; loop: true; dur: 10000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#85E89D;">a-sphere</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-cylinder</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1 0.75 -3&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      radius</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.5&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.5&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#FFC65D&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      shadow</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#85E89D;">a-cylinder</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 地面 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-plane</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 0 -4&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      rotation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;-90 0 0&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;20&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;20&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#7BC8A4&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      shadow</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#85E89D;">a-plane</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 灯光 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-light</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ambient&quot;</span><span style="color:#B392F0;"> color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#445451&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a-light</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-light</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;directional&quot;</span><span style="color:#B392F0;"> position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;2 4 2&quot;</span><span style="color:#B392F0;"> intensity</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.5&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a-light</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- VR 控制器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-entity</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      laser-controls</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;hand: right&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      raycaster</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;objects: .clickable&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#85E89D;">a-entity</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-entity</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">      laser-controls</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;hand: left&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      raycaster</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;objects: .clickable&quot;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#85E89D;">a-entity</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 相机 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a-entity</span><span style="color:#B392F0;"> camera</span><span style="color:#B392F0;"> position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 1.6 0&quot;</span><span style="color:#B392F0;"> look-controls</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a-entity</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">a-scene</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="a-frame-组件开发" tabindex="-1">A-Frame 组件开发 <a class="header-anchor" href="#a-frame-组件开发" aria-label="Permalink to &quot;A-Frame 组件开发&quot;">​</a></h3><p>对于更复杂的交互，可以创建自定义 A-Frame 组件。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 自定义 VR 交互组件</span></span>
<span class="line"><span style="color:#79B8FF;">AFRAME</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">registerComponent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;vr-interaction&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  schema: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: { type: </span><span style="color:#9ECBFF;">&#39;color&#39;</span><span style="color:#E1E4E8;">, default: </span><span style="color:#9ECBFF;">&#39;#4CC3D9&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    hoverColor: { type: </span><span style="color:#9ECBFF;">&#39;color&#39;</span><span style="color:#E1E4E8;">, default: </span><span style="color:#9ECBFF;">&#39;#EF2D5E&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  init</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mouseenter&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onHoverStart.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mouseleave&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onHoverEnd.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onClick.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.originalColor </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.data.color;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onHoverStart</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;color&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.data.hoverColor);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onHoverEnd</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;color&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.originalColor);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onClick</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建点击效果动画</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;animation&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      property: </span><span style="color:#9ECBFF;">&#39;scale&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      to: </span><span style="color:#9ECBFF;">&#39;1.2 1.2 1.2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      dur: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      easing: </span><span style="color:#9ECBFF;">&#39;easeInOutQuad&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.el.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;animation&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        property: </span><span style="color:#9ECBFF;">&#39;scale&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        to: </span><span style="color:#9ECBFF;">&#39;1 1 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        dur: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        easing: </span><span style="color:#9ECBFF;">&#39;easeInOutQuad&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在 HTML 中使用自定义组件</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">a-box</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">  position</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;0 1 -3&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  color</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;#4CC3D9&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">  vr-interaction</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;hoverColor: #FFC65D&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#79B8FF;">a-box</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="性能优化技巧" tabindex="-1">性能优化技巧 <a class="header-anchor" href="#性能优化技巧" aria-label="Permalink to &quot;性能优化技巧&quot;">​</a></h2><h3 id="渲染优化" tabindex="-1">渲染优化 <a class="header-anchor" href="#渲染优化" aria-label="Permalink to &quot;渲染优化&quot;">​</a></h3><p>VR 应用对性能要求极高，必须保持稳定的高帧率。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> VROptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">renderer</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">scene</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> renderer;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scene;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupOptimizations</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupOptimizations</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置适当的像素比例</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(window.devicePixelRatio, </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 启用多重采样抗锯齿</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> gl</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (gl.</span><span style="color:#B392F0;">getContextAttributes</span><span style="color:#E1E4E8;">().antialias) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.renderer.antialias </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 配置渲染优化</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.shadowMap.enabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.shadowMap.type </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.PCFSoftShadowMap;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.outputColorSpace </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.SRGBColorSpace;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 设置适当的帧率限制</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.frameRateLimit </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 90</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 匹配头显刷新率</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  optimizeScene</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 应用场景级优化</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">mergeGeometries</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupLOD</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">optimizeTextures</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  mergeGeometries</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 合并相同材质的几何体以减少绘制调用</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> geometryMap</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">child</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (child.isMesh) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> child.material.uuid </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> child.geometry.type;</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">geometryMap.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          geometryMap.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        geometryMap.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 合并逻辑...</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupLOD</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置细节层级</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">child</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (child.isMesh </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> child.geometry.boundingSphere) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> lod</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">LOD</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 添加不同距离的细节层级</span></span>
<span class="line"><span style="color:#E1E4E8;">        lod.</span><span style="color:#B392F0;">addLevel</span><span style="color:#E1E4E8;">(child, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 可以在这里添加更多细节层级</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(lod);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  optimizeTextures</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 优化纹理设置</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">child</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (child.material) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> materials</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(child.material) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> child.material </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [child.material];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        materials.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (material.map) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            material.map.anisotropy </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.capabilities.</span><span style="color:#B392F0;">getMaxAnisotropy</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            material.map.minFilter </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.LinearMipmapLinearFilter;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  adjustQualityForPerformance</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 基于设备性能动态调整质量</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.xrSession) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">monitorFrameRate</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">actualFrameRate</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (actualFrameRate </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.frameRateLimit </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0.9</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reduceRenderQuality</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (actualFrameRate </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.frameRateLimit </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 1.1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">increaseRenderQuality</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> monitorFrameRate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> frameCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#B392F0;"> checkFrameRate</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        frameCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> elapsed</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (elapsed </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> frameRate</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> frameCount </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (elapsed </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">          resolve</span><span style="color:#E1E4E8;">(frameRate);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          requestAnimationFrame</span><span style="color:#E1E4E8;">(checkFrameRate);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#B392F0;">      checkFrameRate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  reduceRenderQuality</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 降低渲染质量以保持性能</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.shadowMap.autoUpdate </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 降低纹理质量</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">child</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (child.material </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> child.material.map) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        child.material.map.needsUpdate </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  increaseRenderQuality</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在性能允许时提高质量</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(window.devicePixelRatio, </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="高级-vr-功能" tabindex="-1">高级 VR 功能 <a class="header-anchor" href="#高级-vr-功能" aria-label="Permalink to &quot;高级 VR 功能&quot;">​</a></h2><h3 id="手部追踪" tabindex="-1">手部追踪 <a class="header-anchor" href="#手部追踪" aria-label="Permalink to &quot;手部追踪&quot;">​</a></h3><p>现代 WebXR 设备支持手部追踪，提供更自然的交互方式。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> HandTracking</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">session</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">scene</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.session </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> session;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scene;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.handMeshes </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupHandTracking</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> setupHandTracking</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.session.enabledFeatures.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hand-tracking&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 请求手部追踪功能</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> session</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.xr.</span><span style="color:#B392F0;">requestSession</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;immersive-vr&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        optionalFeatures: [</span><span style="color:#9ECBFF;">&#39;hand-tracking&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      session.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hand-tracking-start&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onHandTrackingStart.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      session.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hand-tracking-end&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.onHandTrackingEnd.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onHandTrackingStart</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hand</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> event.hand;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Hand tracking started:&#39;</span><span style="color:#E1E4E8;">, hand.handedness);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建手部可视化</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createHandMesh</span><span style="color:#E1E4E8;">(hand);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onHandTrackingEnd</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hand</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> event.hand;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Hand tracking ended:&#39;</span><span style="color:#E1E4E8;">, hand.handedness);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 清理手部可视化</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeHandMesh</span><span style="color:#E1E4E8;">(hand);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createHandMesh</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">hand</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建手部关节可视化</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> handGroup</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Group</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> hand.joints.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> jointGeometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">SphereGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.01</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> jointMaterial</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshBasicMaterial</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">        color: hand.handedness </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;left&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#79B8FF;"> 0x0000ff</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> 0xff0000</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> jointMesh</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(jointGeometry, jointMaterial);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      handGroup.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(jointMesh);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.handMeshes.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(hand, handGroup);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(handGroup);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  updateHandPoses</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">frame</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 更新手部关节位置</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">hand</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">handGroup</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.handMeshes) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> jointPoses</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> frame.</span><span style="color:#B392F0;">getJointPoses</span><span style="color:#E1E4E8;">(hand, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.referenceSpace);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> jointPoses.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> jointPose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> jointPoses[i];</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> jointMesh</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> handGroup.children[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (jointPose) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          jointMesh.matrix.</span><span style="color:#B392F0;">fromArray</span><span style="color:#E1E4E8;">(jointPose.transform.matrix);</span></span>
<span class="line"><span style="color:#E1E4E8;">          jointMesh.matrix.</span><span style="color:#B392F0;">decompose</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            jointMesh.position,</span></span>
<span class="line"><span style="color:#E1E4E8;">            jointMesh.quaternion,</span></span>
<span class="line"><span style="color:#E1E4E8;">            jointMesh.scale</span></span>
<span class="line"><span style="color:#E1E4E8;">          );</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="空间锚点与持久化" tabindex="-1">空间锚点与持久化 <a class="header-anchor" href="#空间锚点与持久化" aria-label="Permalink to &quot;空间锚点与持久化&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SpatialAnchors</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">session</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">scene</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.session </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> session;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scene;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.anchors </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> createAnchor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">position</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">rotation</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> anchor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session.</span><span style="color:#B392F0;">createAnchor</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#F97583;">        new</span><span style="color:#B392F0;"> XRRigidTransform</span><span style="color:#E1E4E8;">(position, rotation),</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.referenceSpace</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 创建可视化锚点</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> anchorMesh</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createAnchorMesh</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.anchors.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(anchor, anchorMesh);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(anchorMesh);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> anchor;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Failed to create anchor:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createAnchorMesh</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> geometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">SphereGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.05</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshBasicMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0xffff00</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mesh</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(geometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> mesh;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  updateAnchorPoses</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">frame</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 更新锚点位置</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">anchor</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">mesh</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.anchors) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> anchorPose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> frame.</span><span style="color:#B392F0;">getPose</span><span style="color:#E1E4E8;">(anchor.anchorSpace, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.referenceSpace);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (anchorPose) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        mesh.matrix.</span><span style="color:#B392F0;">fromArray</span><span style="color:#E1E4E8;">(anchorPose.transform.matrix);</span></span>
<span class="line"><span style="color:#E1E4E8;">        mesh.matrix.</span><span style="color:#B392F0;">decompose</span><span style="color:#E1E4E8;">(mesh.position, mesh.quaternion, mesh.scale);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,46)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
