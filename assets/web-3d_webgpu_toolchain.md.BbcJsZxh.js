import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"WebGPU 工具链","description":"","frontmatter":{},"headers":[{"level":2,"title":"核心概念与架构","slug":"核心概念与架构","link":"#核心概念与架构","children":[]},{"level":2,"title":"开发环境与构建工具","slug":"开发环境与构建工具","link":"#开发环境与构建工具","children":[{"level":3,"title":"浏览器支持与检测","slug":"浏览器支持与检测","link":"#浏览器支持与检测","children":[]},{"level":3,"title":"模块化开发配置","slug":"模块化开发配置","link":"#模块化开发配置","children":[]}]},{"level":2,"title":"核心库与框架","slug":"核心库与框架","link":"#核心库与框架","children":[{"level":3,"title":"wgpu 核心库","slug":"wgpu-核心库","link":"#wgpu-核心库","children":[]},{"level":3,"title":"图形框架集成","slug":"图形框架集成","link":"#图形框架集成","children":[]}]},{"level":2,"title":"着色器工具链","slug":"着色器工具链","link":"#着色器工具链","children":[{"level":3,"title":"WGSL 语言支持","slug":"wgsl-语言支持","link":"#wgsl-语言支持","children":[]},{"level":3,"title":"着色器预处理工具","slug":"着色器预处理工具","link":"#着色器预处理工具","children":[]}]},{"level":2,"title":"资源管理工具","slug":"资源管理工具","link":"#资源管理工具","children":[{"level":3,"title":"缓冲区管理","slug":"缓冲区管理","link":"#缓冲区管理","children":[]},{"level":3,"title":"纹理工具库","slug":"纹理工具库","link":"#纹理工具库","children":[]}]},{"level":2,"title":"计算工具链","slug":"计算工具链","link":"#计算工具链","children":[{"level":3,"title":"GPU 计算框架","slug":"gpu-计算框架","link":"#gpu-计算框架","children":[]},{"level":3,"title":"并行计算示例","slug":"并行计算示例","link":"#并行计算示例","children":[]}]},{"level":2,"title":"调试与性能分析工具","slug":"调试与性能分析工具","link":"#调试与性能分析工具","children":[{"level":3,"title":"错误处理与验证","slug":"错误处理与验证","link":"#错误处理与验证","children":[]},{"level":3,"title":"性能监控","slug":"性能监控","link":"#性能监控","children":[]}]},{"level":2,"title":"跨平台开发工具链","slug":"跨平台开发工具链","link":"#跨平台开发工具链","children":[{"level":3,"title":"Emscripten 集成","slug":"emscripten-集成","link":"#emscripten-集成","children":[]},{"level":3,"title":"原生绑定与 Web 集成","slug":"原生绑定与-web-集成","link":"#原生绑定与-web-集成","children":[]}]},{"level":2,"title":"构建工具与工作流","slug":"构建工具与工作流","link":"#构建工具与工作流","children":[{"level":3,"title":"模块打包配置","slug":"模块打包配置","link":"#模块打包配置","children":[]},{"level":3,"title":"开发服务器配置","slug":"开发服务器配置","link":"#开发服务器配置","children":[]}]}],"relativePath":"web-3d/webgpu/toolchain.md","filePath":"web-3d/webgpu/toolchain.md"}'),o={name:"web-3d/webgpu/toolchain.md"};function e(c,s,t,r,E,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /web-3d/webgpu/toolchain.md for this page in Markdown format</div><h1 id="webgpu-工具链" tabindex="-1">WebGPU 工具链 <a class="header-anchor" href="#webgpu-工具链" aria-label="Permalink to &quot;WebGPU 工具链&quot;">​</a></h1><p>WebGPU 工具链是现代图形和计算应用开发的核心支撑体系，它提供了一系列库、框架和开发工具，帮助开发者高效地构建基于 WebGPU 的应用程序。与传统的 WebGL 工具链相比，WebGPU 工具链更加注重性能、类型安全和跨平台一致性，为复杂图形渲染和通用 GPU 计算提供了坚实基础。</p><h2 id="核心概念与架构" tabindex="-1">核心概念与架构 <a class="header-anchor" href="#核心概念与架构" aria-label="Permalink to &quot;核心概念与架构&quot;">​</a></h2><p>WebGPU 工具链围绕现代图形 API 设计原则构建，其架构分层清晰，各组件职责明确。理解这一架构对于有效使用工具链至关重要。</p><p><strong>工具链架构示意图</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>应用层</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>框架层 (Three.js, Babylon.js 等)</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>中间件层 (wgpu, Dawn 绑定)</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>原生实现层 (Dawn, wgpu-native)</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>系统驱动层 (Vulkan, Metal, D3D12)</span></span></code></pre></div><p>这种分层设计使得开发者可以在不同抽象级别上工作，既可以使用高级框架快速原型开发，也可以使用底层 API 进行精细控制。</p><h2 id="开发环境与构建工具" tabindex="-1">开发环境与构建工具 <a class="header-anchor" href="#开发环境与构建工具" aria-label="Permalink to &quot;开发环境与构建工具&quot;">​</a></h2><h3 id="浏览器支持与检测" tabindex="-1">浏览器支持与检测 <a class="header-anchor" href="#浏览器支持与检测" aria-label="Permalink to &quot;浏览器支持与检测&quot;">​</a></h3><p>在现代浏览器中使用 WebGPU 前，需要检测支持情况并初始化环境：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 检测 WebGPU 支持</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> checkWebGPUSupport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">navigator.gpu) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WebGPU 不受此浏览器支持&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> adapter</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.gpu.</span><span style="color:#B392F0;">requestAdapter</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">adapter) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;无法获取 WebGPU 适配器&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> device</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> adapter.</span><span style="color:#B392F0;">requestDevice</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { adapter, device };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="模块化开发配置" tabindex="-1">模块化开发配置 <a class="header-anchor" href="#模块化开发配置" aria-label="Permalink to &quot;模块化开发配置&quot;">​</a></h3><p>使用 ES 模块进行 WebGPU 开发的基本配置：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// package.json 中的典型配置</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vite&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vite build&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;dependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;webgpu-utils&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^1.0.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="核心库与框架" tabindex="-1">核心库与框架 <a class="header-anchor" href="#核心库与框架" aria-label="Permalink to &quot;核心库与框架&quot;">​</a></h2><h3 id="wgpu-核心库" tabindex="-1">wgpu 核心库 <a class="header-anchor" href="#wgpu-核心库" aria-label="Permalink to &quot;wgpu 核心库&quot;">​</a></h3><p>wgpu 是 WebGPU API 的 Rust 实现，也被多种语言绑定使用。它提供了跨平台的 WebGPU 实现，是许多工具链的基础。</p><p><strong>特性概览</strong>：</p><ul><li>跨平台支持 (Vulkan，Metal，D3D12，OpenGL)</li><li>内存安全的设计</li><li>完整的图形和计算管线支持</li></ul><h3 id="图形框架集成" tabindex="-1">图形框架集成 <a class="header-anchor" href="#图形框架集成" aria-label="Permalink to &quot;图形框架集成&quot;">​</a></h3><h4 id="three-js-webgpu-后端" tabindex="-1">Three.js WebGPU 后端 <a class="header-anchor" href="#three-js-webgpu-后端" aria-label="Permalink to &quot;Three.js WebGPU 后端&quot;">​</a></h4><p>Three.js 提供了 WebGPU 后端，允许在熟悉的 Three.js API 下使用 WebGPU：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { WebGPURenderer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three/addons/renderers/webgpu/WebGPURenderer.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> createWebGPURenderer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> canvas</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;canvas&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> renderer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WebGPURenderer</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">        canvas,</span></span>
<span class="line"><span style="color:#E1E4E8;">        antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> renderer.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> scene</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Scene</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> camera</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PerspectiveCamera</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">, window.innerWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> window.innerHeight, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 在此添加 Three.js 对象...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { renderer, scene, camera };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h4 id="babylon-js-webgpu-支持" tabindex="-1">Babylon.js WebGPU 支持 <a class="header-anchor" href="#babylon-js-webgpu-支持" aria-label="Permalink to &quot;Babylon.js WebGPU 支持&quot;">​</a></h4><p>Babylon.js 深度集成了 WebGPU 支持：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Engine } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;@babylonjs/core/Engines/engine&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Scene } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &quot;@babylonjs/core/scene&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> createBabylonJSApp</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> canvas</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;renderCanvas&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> engine</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Engine</span><span style="color:#E1E4E8;">(canvas, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adaptToDeviceRatio: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        enableWebGPU: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> scene</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Scene</span><span style="color:#E1E4E8;">(engine);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 设置场景内容...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    engine.</span><span style="color:#B392F0;">runRenderLoop</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        scene.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { engine, scene };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="着色器工具链" tabindex="-1">着色器工具链 <a class="header-anchor" href="#着色器工具链" aria-label="Permalink to &quot;着色器工具链&quot;">​</a></h2><h3 id="wgsl-语言支持" tabindex="-1">WGSL 语言支持 <a class="header-anchor" href="#wgsl-语言支持" aria-label="Permalink to &quot;WGSL 语言支持&quot;">​</a></h3><p>WGSL (WebGPU Shading Language) 是 WebGPU 的着色语言，工具链提供了多种处理 WGSL 的方式：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 运行时着色器编译</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> createShaderModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">shaderCode</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> shaderModule</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createShaderModule</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        code: shaderCode,</span></span>
<span class="line"><span style="color:#E1E4E8;">        compilationHints: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                entryPoint: </span><span style="color:#9ECBFF;">&quot;vertexMain&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                layout: </span><span style="color:#9ECBFF;">&quot;auto&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                entryPoint: </span><span style="color:#9ECBFF;">&quot;fragmentMain&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">                layout: </span><span style="color:#9ECBFF;">&quot;auto&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查编译错误</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> compilationInfo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> shaderModule.</span><span style="color:#B392F0;">getCompilationInfo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (compilationInfo.messages.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;着色器编译警告:&quot;</span><span style="color:#E1E4E8;">, compilationInfo.messages);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> shaderModule;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="着色器预处理工具" tabindex="-1">着色器预处理工具 <a class="header-anchor" href="#着色器预处理工具" aria-label="Permalink to &quot;着色器预处理工具&quot;">​</a></h3><p>使用模板字符串和标签函数进行着色器预处理：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 简单的着色器模板系统</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> wgsl</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">strings</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">values</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> strings.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        result </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> strings[i];</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> values.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            result </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> values[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> vertexShader</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> wgsl</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    @vertex</span></span>
<span class="line"><span style="color:#9ECBFF;">    fn vertexMain(@location(0) position: vec3&lt;f32&gt;) -&gt; @builtin(position) vec4&lt;f32&gt; {</span></span>
<span class="line"><span style="color:#9ECBFF;">        return vec4&lt;f32&gt;(\${</span><span style="color:#79B8FF;">JSON</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#9ECBFF;">([</span><span style="color:#79B8FF;">1.0</span><span style="color:#9ECBFF;">, </span><span style="color:#79B8FF;">1.0</span><span style="color:#9ECBFF;">, </span><span style="color:#79B8FF;">1.0</span><span style="color:#9ECBFF;">])</span><span style="color:#9ECBFF;">}, 1.0);</span></span>
<span class="line"><span style="color:#9ECBFF;">    }</span></span>
<span class="line"><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><h2 id="资源管理工具" tabindex="-1">资源管理工具 <a class="header-anchor" href="#资源管理工具" aria-label="Permalink to &quot;资源管理工具&quot;">​</a></h2><h3 id="缓冲区管理" tabindex="-1">缓冲区管理 <a class="header-anchor" href="#缓冲区管理" aria-label="Permalink to &quot;缓冲区管理&quot;">​</a></h3><p>高效的缓冲区管理是 WebGPU 应用性能的关键：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> BufferPool</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">initialSize</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.device </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> device;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.buffers </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initializePools</span><span style="color:#E1E4E8;">(initialSize);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    initializePools</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">initialSize</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> bufferTypes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { usage: GPUBufferUsage.</span><span style="color:#79B8FF;">VERTEX</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;vertex&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { usage: GPUBufferUsage.</span><span style="color:#79B8FF;">INDEX</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;index&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { usage: GPUBufferUsage.</span><span style="color:#79B8FF;">UNIFORM</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;uniform&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { usage: GPUBufferUsage.</span><span style="color:#79B8FF;">STORAGE</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;storage&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> type</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> bufferTypes) {</span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.buffers.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(type.usage, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    getBuffer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">size</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">usage</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">mapped</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 尝试从池中获取合适缓冲区</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> pool</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.buffers.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(usage) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> pool.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> buffer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pool[i];</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (buffer.size </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> size </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">buffer.destroyed) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pool.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(i, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">                return</span><span style="color:#E1E4E8;"> buffer;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 创建新缓冲区</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> buffer</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.device.</span><span style="color:#B392F0;">createBuffer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            size: Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(size, </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 最小大小</span></span>
<span class="line"><span style="color:#E1E4E8;">            usage,</span></span>
<span class="line"><span style="color:#E1E4E8;">            mappedAtCreation: mapped</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> buffer;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    returnBuffer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">buffer</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">usage</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> pool</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.buffers.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(usage) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">        pool.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(buffer);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="纹理工具库" tabindex="-1">纹理工具库 <a class="header-anchor" href="#纹理工具库" aria-label="Permalink to &quot;纹理工具库&quot;">​</a></h3><p>纹理处理工具简化了 WebGPU 纹理操作：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> TextureUtils</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> createTextureFromImage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">imageUrl</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">usage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> GPUTextureUsage.</span><span style="color:#79B8FF;">TEXTURE_BINDING</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> GPUTextureUsage.</span><span style="color:#79B8FF;">COPY_DST</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(imageUrl);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> blob</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">blob</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> imageBitmap</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> createImageBitmap</span><span style="color:#E1E4E8;">(blob);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> texture</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createTexture</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            size: [imageBitmap.width, imageBitmap.height, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            format: </span><span style="color:#9ECBFF;">&#39;rgba8unorm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            usage</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        device.queue.</span><span style="color:#B392F0;">copyExternalImageToTexture</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            { source: imageBitmap },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { texture },</span></span>
<span class="line"><span style="color:#E1E4E8;">            [imageBitmap.width, imageBitmap.height]</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> texture;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#B392F0;"> createEmptyTexture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">width</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">height</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">format</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;rgba8unorm&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createTexture</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            size: [width, height, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            format,</span></span>
<span class="line"><span style="color:#E1E4E8;">            usage: GPUTextureUsage.</span><span style="color:#79B8FF;">TEXTURE_BINDING</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                   GPUTextureUsage.</span><span style="color:#79B8FF;">COPY_DST</span><span style="color:#F97583;"> |</span></span>
<span class="line"><span style="color:#E1E4E8;">                   GPUTextureUsage.</span><span style="color:#79B8FF;">RENDER_ATTACHMENT</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="计算工具链" tabindex="-1">计算工具链 <a class="header-anchor" href="#计算工具链" aria-label="Permalink to &quot;计算工具链&quot;">​</a></h2><h3 id="gpu-计算框架" tabindex="-1">GPU 计算框架 <a class="header-anchor" href="#gpu-计算框架" aria-label="Permalink to &quot;GPU 计算框架&quot;">​</a></h3><p>通用计算是 WebGPU 的重要应用场景，以下是一个简单的计算调度框架：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> ComputeScheduler</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.device </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> device;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.pipelines </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.bindGroupLayouts </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> createComputePipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">shaderCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">entryPoint</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">label</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> shaderModule</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.device.</span><span style="color:#B392F0;">createShaderModule</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            code: shaderCode</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> pipeline</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.device.</span><span style="color:#B392F0;">createComputePipelineAsync</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            layout: </span><span style="color:#9ECBFF;">&#39;auto&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            compute: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                module: shaderModule,</span></span>
<span class="line"><span style="color:#E1E4E8;">                entryPoint</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            label</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.pipelines.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(label, pipeline);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> pipeline;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    createBindGroup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pipeline</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">resources</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">label</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> bindGroup</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.device.</span><span style="color:#B392F0;">createBindGroup</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            layout: pipeline.</span><span style="color:#B392F0;">getBindGroupLayout</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            entries: resources.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resource</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">                binding,</span></span>
<span class="line"><span style="color:#E1E4E8;">                resource</span></span>
<span class="line"><span style="color:#E1E4E8;">            })),</span></span>
<span class="line"><span style="color:#E1E4E8;">            label</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> bindGroup;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">encoder</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pipeline</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">bindGroup</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">workgroupCount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> pass</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> encoder.</span><span style="color:#B392F0;">beginComputePass</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        pass.</span><span style="color:#B392F0;">setPipeline</span><span style="color:#E1E4E8;">(pipeline);</span></span>
<span class="line"><span style="color:#E1E4E8;">        pass.</span><span style="color:#B392F0;">setBindGroup</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, bindGroup);</span></span>
<span class="line"><span style="color:#E1E4E8;">        pass.</span><span style="color:#B392F0;">dispatchWorkgroups</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">workgroupCount);</span></span>
<span class="line"><span style="color:#E1E4E8;">        pass.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="并行计算示例" tabindex="-1">并行计算示例 <a class="header-anchor" href="#并行计算示例" aria-label="Permalink to &quot;并行计算示例&quot;">​</a></h3><p>使用计算着色器进行并行数据处理：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 并行归约计算示例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> reductionShader</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">    @group(0) @binding(0) var&lt;storage, read&gt; input: array&lt;f32&gt;;</span></span>
<span class="line"><span style="color:#9ECBFF;">    @group(0) @binding(1) var&lt;storage, read_write&gt; output: array&lt;f32&gt;;</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span></span>
<span class="line"><span style="color:#9ECBFF;">    @compute @workgroup_size(64)</span></span>
<span class="line"><span style="color:#9ECBFF;">    fn reduce(@builtin(global_invocation_id) global_id: vec3&lt;u32&gt;) {</span></span>
<span class="line"><span style="color:#9ECBFF;">        let index = global_id.x;</span></span>
<span class="line"><span style="color:#9ECBFF;">        var value = input[index];</span></span>
<span class="line"><span style="color:#9ECBFF;">        </span></span>
<span class="line"><span style="color:#9ECBFF;">        // 简单的归约操作</span></span>
<span class="line"><span style="color:#9ECBFF;">        for (var i = 1u; i &lt; 64u; i++) {</span></span>
<span class="line"><span style="color:#9ECBFF;">            if (index % (i * 2u) == 0u &amp;&amp; index + i &lt; arrayLength(&amp;input)) {</span></span>
<span class="line"><span style="color:#9ECBFF;">                value += input[index + i];</span></span>
<span class="line"><span style="color:#9ECBFF;">            }</span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"><span style="color:#9ECBFF;">        </span></span>
<span class="line"><span style="color:#9ECBFF;">        output[index] = value;</span></span>
<span class="line"><span style="color:#9ECBFF;">    }</span></span>
<span class="line"><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> performReduction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">inputData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> scheduler</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ComputeScheduler</span><span style="color:#E1E4E8;">(device);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> pipeline</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> scheduler.</span><span style="color:#B392F0;">createComputePipeline</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        reductionShader, </span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;reduce&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;reductionPipeline&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建输入/输出缓冲区</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inputBuffer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createBuffer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        size: inputData.byteLength,</span></span>
<span class="line"><span style="color:#E1E4E8;">        usage: GPUBufferUsage.</span><span style="color:#79B8FF;">STORAGE</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> GPUBufferUsage.</span><span style="color:#79B8FF;">COPY_DST</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        mappedAtCreation: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    device.queue.</span><span style="color:#B392F0;">writeBuffer</span><span style="color:#E1E4E8;">(inputBuffer, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, inputData);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> outputBuffer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createBuffer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        size: inputData.byteLength,</span></span>
<span class="line"><span style="color:#E1E4E8;">        usage: GPUBufferUsage.</span><span style="color:#79B8FF;">STORAGE</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> GPUBufferUsage.</span><span style="color:#79B8FF;">COPY_SRC</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        mappedAtCreation: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bindGroup</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> scheduler.</span><span style="color:#B392F0;">createBindGroup</span><span style="color:#E1E4E8;">(pipeline, [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { buffer: inputBuffer },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { buffer: outputBuffer }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ], </span><span style="color:#9ECBFF;">&#39;reductionBindGroup&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> encoder</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createCommandEncoder</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    scheduler.</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(encoder, pipeline, bindGroup, [</span></span>
<span class="line"><span style="color:#E1E4E8;">        Math.</span><span style="color:#B392F0;">ceil</span><span style="color:#E1E4E8;">(inputData.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 64</span><span style="color:#E1E4E8;">), </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> commandBuffer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> encoder.</span><span style="color:#B392F0;">finish</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    device.queue.</span><span style="color:#B392F0;">submit</span><span style="color:#E1E4E8;">([commandBuffer]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> outputBuffer;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="调试与性能分析工具" tabindex="-1">调试与性能分析工具 <a class="header-anchor" href="#调试与性能分析工具" aria-label="Permalink to &quot;调试与性能分析工具&quot;">​</a></h2><h3 id="错误处理与验证" tabindex="-1">错误处理与验证 <a class="header-anchor" href="#错误处理与验证" aria-label="Permalink to &quot;错误处理与验证&quot;">​</a></h3><p>WebGPU 提供了详细的错误处理机制：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> WebGPUDebugger</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> setupErrorScopes</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 设置错误范围</span></span>
<span class="line"><span style="color:#E1E4E8;">        device.</span><span style="color:#B392F0;">pushErrorScope</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;validation&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        device.</span><span style="color:#B392F0;">pushErrorScope</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;out-of-memory&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        device.</span><span style="color:#B392F0;">pushErrorScope</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;internal&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            async</span><span style="color:#B392F0;"> checkErrors</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">                const</span><span style="color:#79B8FF;"> validationError</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">popErrorScope</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">                const</span><span style="color:#79B8FF;"> oomError</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">popErrorScope</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">                const</span><span style="color:#79B8FF;"> internalError</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">popErrorScope</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span></span>
<span class="line"><span style="color:#F97583;">                return</span><span style="color:#E1E4E8;"> { validationError, oomError, internalError };</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#B392F0;"> addDebugLabels</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">label</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (object </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> object.label </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;string&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            object.label </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> label;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="性能监控" tabindex="-1">性能监控 <a class="header-anchor" href="#性能监控" aria-label="Permalink to &quot;性能监控&quot;">​</a></h3><p>性能监控工具帮助优化 WebGPU 应用：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> PerformanceMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.markers </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.queries </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> setupTimestampQuery</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">count</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> querySet</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createQuerySet</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;timestamp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            count</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> queryBuffer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createBuffer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            size: count </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 8</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 每个时间戳 8 字节</span></span>
<span class="line"><span style="color:#E1E4E8;">            usage: GPUBufferUsage.</span><span style="color:#79B8FF;">QUERY_RESOLVE</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                   GPUBufferUsage.</span><span style="color:#79B8FF;">COPY_SRC</span><span style="color:#F97583;"> |</span></span>
<span class="line"><span style="color:#E1E4E8;">                   GPUBufferUsage.</span><span style="color:#79B8FF;">COPY_DST</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.queries.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;timestamps&#39;</span><span style="color:#E1E4E8;">, { querySet, buffer: queryBuffer, count });</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> { querySet, buffer: queryBuffer };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    recordTimestamp</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pass</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> query</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.queries.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;timestamps&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (query </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> query.count) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pass.</span><span style="color:#B392F0;">writeTimestamp</span><span style="color:#E1E4E8;">(query.querySet, index);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="跨平台开发工具链" tabindex="-1">跨平台开发工具链 <a class="header-anchor" href="#跨平台开发工具链" aria-label="Permalink to &quot;跨平台开发工具链&quot;">​</a></h2><h3 id="emscripten-集成" tabindex="-1">Emscripten 集成 <a class="header-anchor" href="#emscripten-集成" aria-label="Permalink to &quot;Emscripten 集成&quot;">​</a></h3><p>Emscripten 允许将原生代码编译为 WebAssembly 并与 WebGPU 交互：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Emscripten 编译示例配置</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> emscriptenConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 启用 WebGPU 支持</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;sUSE_WEBGPU&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;sASYNCIFY&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 预加载资源</span></span>
<span class="line"><span style="color:#E1E4E8;">    preloadFiles: [</span><span style="color:#9ECBFF;">&#39;shaders/**/*.wgsl&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 模块初始化</span></span>
<span class="line"><span style="color:#B392F0;">    onRuntimeInitialized</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WebGPU WASM 模块已初始化&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="原生绑定与-web-集成" tabindex="-1">原生绑定与 Web 集成 <a class="header-anchor" href="#原生绑定与-web-集成" aria-label="Permalink to &quot;原生绑定与 Web 集成&quot;">​</a></h3><p>使用 Dawn 或 wgpu-native 进行原生开发：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 原生绑定的 JavaScript 接口</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> NativeWebGPUBinding</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> loadNativeBindings</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">            // 尝试加载原生模块</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> module</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./webgpu-native.js&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#79B8FF;"> module</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;原生绑定不可用，回退到 Web 实现&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> createDevice</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">preferNative</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (preferNative) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> native</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadNativeBindings</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (native) {</span></span>
<span class="line"><span style="color:#F97583;">                return</span><span style="color:#E1E4E8;"> native.</span><span style="color:#B392F0;">createDevice</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 回退到 Web 实现</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#B392F0;"> checkWebGPUSupport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="构建工具与工作流" tabindex="-1">构建工具与工作流 <a class="header-anchor" href="#构建工具与工作流" aria-label="Permalink to &quot;构建工具与工作流&quot;">​</a></h2><h3 id="模块打包配置" tabindex="-1">模块打包配置 <a class="header-anchor" href="#模块打包配置" aria-label="Permalink to &quot;模块打包配置&quot;">​</a></h3><p>现代 JavaScript 打包工具对 WebGPU 的支持：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vite&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#B392F0;"> defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        target: </span><span style="color:#9ECBFF;">&#39;es2020&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        rollupOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            external: [], </span><span style="color:#6A737D;">// WebGPU API 是全局的，不需要打包</span></span>
<span class="line"><span style="color:#E1E4E8;">            output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                format: </span><span style="color:#9ECBFF;">&#39;esm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                inlineDynamicImports: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    optimizeDeps: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        exclude: [</span><span style="color:#9ECBFF;">&#39;webgpu-utils&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 排除需要优化的依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="开发服务器配置" tabindex="-1">开发服务器配置 <a class="header-anchor" href="#开发服务器配置" aria-label="Permalink to &quot;开发服务器配置&quot;">​</a></h3><p>针对 WebGPU 开发的专用服务器配置：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// dev-server.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createServer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;http&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { join } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> createWebGPUServer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">port</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 3000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> server</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createServer</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> url</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> req.url </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;/&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;/index.html&#39;</span><span style="color:#F97583;"> :</span><span style="color:#E1E4E8;"> req.url;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> filePath</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">, url);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> content</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(filePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#6A737D;">            // 设置适当的 MIME 类型</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (filePath.</span><span style="color:#B392F0;">endsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.wgsl&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                res.</span><span style="color:#B392F0;">setHeader</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;text/plain&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (filePath.</span><span style="color:#B392F0;">endsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.js&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                res.</span><span style="color:#B392F0;">setHeader</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;application/javascript&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            res.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(content);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            res.statusCode </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 404</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            res.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;File not found&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    server.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(port, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WebGPU 开发服务器运行在 http://localhost:\${</span><span style="color:#E1E4E8;">port</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> server;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,69)])])}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
