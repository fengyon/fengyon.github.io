import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"WebGPU API","description":"","frontmatter":{},"headers":[{"level":2,"title":"概述与设计理念","slug":"概述与设计理念","link":"#概述与设计理念","children":[]},{"level":2,"title":"环境架构与初始化","slug":"环境架构与初始化","link":"#环境架构与初始化","children":[{"level":3,"title":"初始化流程","slug":"初始化流程","link":"#初始化流程","children":[]},{"level":3,"title":"架构示意图","slug":"架构示意图","link":"#架构示意图","children":[]}]},{"level":2,"title":"核心对象模型","slug":"核心对象模型","link":"#核心对象模型","children":[{"level":3,"title":"适配器与设备","slug":"适配器与设备","link":"#适配器与设备","children":[]},{"level":3,"title":"画布配置","slug":"画布配置","link":"#画布配置","children":[]}]},{"level":2,"title":"资源管理系统","slug":"资源管理系统","link":"#资源管理系统","children":[{"level":3,"title":"缓冲区","slug":"缓冲区","link":"#缓冲区","children":[]},{"level":3,"title":"纹理与采样器","slug":"纹理与采样器","link":"#纹理与采样器","children":[]}]},{"level":2,"title":"着色器系统","slug":"着色器系统","link":"#着色器系统","children":[{"level":3,"title":"着色器模块创建","slug":"着色器模块创建","link":"#着色器模块创建","children":[]},{"level":3,"title":"计算着色器","slug":"计算着色器","link":"#计算着色器","children":[]}]},{"level":2,"title":"绑定组与管线布局","slug":"绑定组与管线布局","link":"#绑定组与管线布局","children":[{"level":3,"title":"绑定组布局","slug":"绑定组布局","link":"#绑定组布局","children":[]},{"level":3,"title":"绑定组创建","slug":"绑定组创建","link":"#绑定组创建","children":[]}]},{"level":2,"title":"管道创建与配置","slug":"管道创建与配置","link":"#管道创建与配置","children":[{"level":3,"title":"渲染管道","slug":"渲染管道","link":"#渲染管道","children":[]},{"level":3,"title":"计算管道","slug":"计算管道","link":"#计算管道","children":[]}]},{"level":2,"title":"命令编码与执行","slug":"命令编码与执行","link":"#命令编码与执行","children":[{"level":3,"title":"渲染通道编码","slug":"渲染通道编码","link":"#渲染通道编码","children":[]},{"level":3,"title":"计算通道编码","slug":"计算通道编码","link":"#计算通道编码","children":[]},{"level":3,"title":"命令提交","slug":"命令提交","link":"#命令提交","children":[]}]},{"level":2,"title":"高级特性与扩展","slug":"高级特性与扩展","link":"#高级特性与扩展","children":[{"level":3,"title":"扩展支持","slug":"扩展支持","link":"#扩展支持","children":[]},{"level":3,"title":"异步操作与映射","slug":"异步操作与映射","link":"#异步操作与映射","children":[]}]},{"level":2,"title":"错误处理与调试","slug":"错误处理与调试","link":"#错误处理与调试","children":[{"level":3,"title":"错误回调","slug":"错误回调","link":"#错误回调","children":[]},{"level":3,"title":"调试标签","slug":"调试标签","link":"#调试标签","children":[]}]},{"level":2,"title":"性能最佳实践","slug":"性能最佳实践","link":"#性能最佳实践","children":[{"level":3,"title":"资源管理","slug":"资源管理","link":"#资源管理","children":[]},{"level":3,"title":"管线状态重用","slug":"管线状态重用","link":"#管线状态重用","children":[]}]}],"relativePath":"web-3d/webgpu/api.md","filePath":"web-3d/webgpu/api.md"}'),e={name:"web-3d/webgpu/api.md"};function o(c,s,t,r,E,i){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /web-3d/webgpu/api.md for this page in Markdown format</div><h1 id="webgpu-api" tabindex="-1">WebGPU API <a class="header-anchor" href="#webgpu-api" aria-label="Permalink to &quot;WebGPU API&quot;">​</a></h1><p>WebGPU API 是一种全新的 Web 图形 API，作为 WebGL 的继承者，它完全从头开始设计，更接近 Vulkan、Metal 和 Direct3D 等现代图形 API。与主要基于 OpenGL 的 WebGL 不同，WebGPU 提供了更底层、更高效的 GPU 控制方式，不仅支持图形渲染，还首次在 Web 环境中引入了通用 GPU 计算能力。</p><h2 id="概述与设计理念" tabindex="-1">概述与设计理念 <a class="header-anchor" href="#概述与设计理念" aria-label="Permalink to &quot;概述与设计理念&quot;">​</a></h2><p>WebGPU 是一个低层级 API，虽然需要程序员完成更多工作，但提供了更强大的功能和更高的效率。其设计借鉴了现代图形 API 的最佳实践，包括显式的资源管理、预编译的管线状态和高效的绑定模型。</p><p><strong>设计特点</strong>：</p><ul><li><strong>显式控制</strong>：相比 WebGL 的隐式状态管理，WebGPU 要求开发者显式定义所有资源和状态</li><li><strong>跨平台一致性</strong>：基于 Vulkan、Metal 和 Direct3D 12 等现代图形 API 的共同特性设计</li><li><strong>安全优先</strong>：在提供高性能的同时，确保 Web 环境的安全性</li><li><strong>计算与图形统一</strong>：首次在 Web 平台同时提供图形渲染和通用计算能力</li></ul><h2 id="环境架构与初始化" tabindex="-1">环境架构与初始化 <a class="header-anchor" href="#环境架构与初始化" aria-label="Permalink to &quot;环境架构与初始化&quot;">​</a></h2><p>WebGPU 应用程序环境包含两个主要部分：JavaScript 端和 GPU 端。JavaScript 端在 CPU 上执行，而 WebGPU 的计算和渲染操作则在 GPU 上执行。这两种处理器拥有各自专用的内存，但也通过一些共享内存来进行数据交换和消息传递。</p><h3 id="初始化流程" tabindex="-1">初始化流程 <a class="header-anchor" href="#初始化流程" aria-label="Permalink to &quot;初始化流程&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 初始化 WebGPU</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> initWebGPU</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">navigator.gpu) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;WebGPU 不支持&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 获取适配器</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> adapter </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.gpu.</span><span style="color:#B392F0;">requestAdapter</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">adapter) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;无法获取 WebGPU 适配器&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 获取设备</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> device </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> adapter.</span><span style="color:#B392F0;">requestDevice</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 配置画布</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> canvas </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;webgpuCanvas&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> context </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> canvas.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;webgpu&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    context.</span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        device: device,</span></span>
<span class="line"><span style="color:#E1E4E8;">        format: navigator.gpu.</span><span style="color:#B392F0;">getPreferredCanvasFormat</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        alphaMode: </span><span style="color:#9ECBFF;">&quot;premultiplied&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { device, context, canvas };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="架构示意图" tabindex="-1">架构示意图 <a class="header-anchor" href="#架构示意图" aria-label="Permalink to &quot;架构示意图&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>JavaScript应用 (CPU端)</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>    WebGPU API</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>  适配器 → 设备</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>  命令编码与资源管理</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>  管道与着色器</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>  GPU执行 (GPU端)</span></span></code></pre></div><h2 id="核心对象模型" tabindex="-1">核心对象模型 <a class="header-anchor" href="#核心对象模型" aria-label="Permalink to &quot;核心对象模型&quot;">​</a></h2><h3 id="适配器与设备" tabindex="-1">适配器与设备 <a class="header-anchor" href="#适配器与设备" aria-label="Permalink to &quot;适配器与设备&quot;">​</a></h3><p>适配器 (Adapter) 代表物理 GPU 硬件的抽象，而设备 (Device) 则是开发者与 GPU 功能交互的主要接口。</p><p><strong>对象关系</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>GPUAdapter → GPUDevice → 各种GPU资源</span></span>
<span class="line"><span>     ↓           ↓          ↓</span></span>
<span class="line"><span> 硬件抽象     逻辑连接   缓冲区/纹理/管道</span></span></code></pre></div><h3 id="画布配置" tabindex="-1">画布配置 <a class="header-anchor" href="#画布配置" aria-label="Permalink to &quot;画布配置&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 获取和配置画布</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> canvas</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webgpu-canvas&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> context</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> canvas.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webgpu&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置画布上下文</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> canvasFormat</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> navigator.gpu.</span><span style="color:#B392F0;">getPreferredCanvasFormat</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">context.</span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    device: device,</span></span>
<span class="line"><span style="color:#E1E4E8;">    format: canvasFormat,</span></span>
<span class="line"><span style="color:#E1E4E8;">    alphaMode: </span><span style="color:#9ECBFF;">&#39;premultiplied&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    usage: GPUTextureUsage.</span><span style="color:#79B8FF;">RENDER_ATTACHMENT</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> GPUTextureUsage.</span><span style="color:#79B8FF;">COPY_SRC</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="资源管理系统" tabindex="-1">资源管理系统 <a class="header-anchor" href="#资源管理系统" aria-label="Permalink to &quot;资源管理系统&quot;">​</a></h2><h3 id="缓冲区" tabindex="-1">缓冲区 <a class="header-anchor" href="#缓冲区" aria-label="Permalink to &quot;缓冲区&quot;">​</a></h3><p>缓冲区是 GPU 内存中的灵活内存块，可用于存储各种数据。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建顶点缓冲区</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertexBuffer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createBuffer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    size: vertices.byteLength,</span></span>
<span class="line"><span style="color:#E1E4E8;">    usage: GPUBufferUsage.</span><span style="color:#79B8FF;">VERTEX</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> GPUBufferUsage.</span><span style="color:#79B8FF;">COPY_DST</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    mappedAtCreation: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 填充数据</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Float32Array</span><span style="color:#E1E4E8;">(vertexBuffer.</span><span style="color:#B392F0;">getMappedRange</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(vertices);</span></span>
<span class="line"><span style="color:#E1E4E8;">vertexBuffer.</span><span style="color:#B392F0;">unmap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建统一缓冲区</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> uniformBuffer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createBuffer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    size: </span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 矩阵大小</span></span>
<span class="line"><span style="color:#E1E4E8;">    usage: GPUBufferUsage.</span><span style="color:#79B8FF;">UNIFORM</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> GPUBufferUsage.</span><span style="color:#79B8FF;">COPY_DST</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建存储缓冲区（用于计算着色器）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> storageBuffer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createBuffer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    size: </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    usage: GPUBufferUsage.</span><span style="color:#79B8FF;">STORAGE</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> GPUBufferUsage.</span><span style="color:#79B8FF;">COPY_SRC</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="纹理与采样器" tabindex="-1">纹理与采样器 <a class="header-anchor" href="#纹理与采样器" aria-label="Permalink to &quot;纹理与采样器&quot;">​</a></h3><p>纹理表示图像数据，支持多种维度和格式。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建纹理</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> texture</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createTexture</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    size: [</span><span style="color:#79B8FF;">512</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">512</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    format: </span><span style="color:#9ECBFF;">&#39;rgba8unorm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    usage: GPUTextureUsage.</span><span style="color:#79B8FF;">TEXTURE_BINDING</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">           GPUTextureUsage.</span><span style="color:#79B8FF;">COPY_DST</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">           GPUTextureUsage.</span><span style="color:#79B8FF;">RENDER_ATTACHMENT</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 从图像加载纹理数据</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> image</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;texture.png&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">blob</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">blob</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> createImageBitmap</span><span style="color:#E1E4E8;">(blob));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">device.queue.</span><span style="color:#B392F0;">copyExternalImageToTexture</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    { source: image },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { texture: texture },</span></span>
<span class="line"><span style="color:#E1E4E8;">    [image.width, image.height]</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建采样器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> sampler</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createSampler</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    magFilter: </span><span style="color:#9ECBFF;">&#39;linear&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minFilter: </span><span style="color:#9ECBFF;">&#39;linear&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    addressModeU: </span><span style="color:#9ECBFF;">&#39;repeat&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    addressModeV: </span><span style="color:#9ECBFF;">&#39;repeat&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="着色器系统" tabindex="-1">着色器系统 <a class="header-anchor" href="#着色器系统" aria-label="Permalink to &quot;着色器系统&quot;">​</a></h2><p>WebGPU 使用 WGSL (WebGPU Shading Language) 作为其着色器语言。</p><h3 id="着色器模块创建" tabindex="-1">着色器模块创建 <a class="header-anchor" href="#着色器模块创建" aria-label="Permalink to &quot;着色器模块创建&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建着色器模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> shaderModule</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createShaderModule</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    code: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">        struct VertexInput {</span></span>
<span class="line"><span style="color:#9ECBFF;">            @location(0) position: vec3&lt;f32&gt;,</span></span>
<span class="line"><span style="color:#9ECBFF;">            @location(1) color: vec3&lt;f32&gt;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">        struct VertexOutput {</span></span>
<span class="line"><span style="color:#9ECBFF;">            @builtin(position) position: vec4&lt;f32&gt;,</span></span>
<span class="line"><span style="color:#9ECBFF;">            @location(0) color: vec3&lt;f32&gt;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">        @vertex</span></span>
<span class="line"><span style="color:#9ECBFF;">        fn vs_main(input: VertexInput) -&gt; VertexOutput {</span></span>
<span class="line"><span style="color:#9ECBFF;">            var output: VertexOutput;</span></span>
<span class="line"><span style="color:#9ECBFF;">            output.position = vec4&lt;f32&gt;(input.position, 1.0);</span></span>
<span class="line"><span style="color:#9ECBFF;">            output.color = input.color;</span></span>
<span class="line"><span style="color:#9ECBFF;">            return output;</span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">        @fragment</span></span>
<span class="line"><span style="color:#9ECBFF;">        fn fs_main(input: VertexOutput) -&gt; @location(0) vec4&lt;f32&gt; {</span></span>
<span class="line"><span style="color:#9ECBFF;">            return vec4&lt;f32&gt;(input.color, 1.0);</span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="计算着色器" tabindex="-1">计算着色器 <a class="header-anchor" href="#计算着色器" aria-label="Permalink to &quot;计算着色器&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 计算着色器模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> computeShaderModule</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createShaderModule</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    code: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">        @group(0) @binding(0) var&lt;storage, read&gt; input: array&lt;f32&gt;;</span></span>
<span class="line"><span style="color:#9ECBFF;">        @group(0) @binding(1) var&lt;storage, read_write&gt; output: array&lt;f32&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">        @compute @workgroup_size(64)</span></span>
<span class="line"><span style="color:#9ECBFF;">        fn cs_main(@builtin(global_invocation_id) global_id: vec3&lt;u32&gt;) {</span></span>
<span class="line"><span style="color:#9ECBFF;">            let index = global_id.x;</span></span>
<span class="line"><span style="color:#9ECBFF;">            if (index &lt; arrayLength(&amp;output)) {</span></span>
<span class="line"><span style="color:#9ECBFF;">                output[index] = input[index] * 2.0;</span></span>
<span class="line"><span style="color:#9ECBFF;">            }</span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="绑定组与管线布局" tabindex="-1">绑定组与管线布局 <a class="header-anchor" href="#绑定组与管线布局" aria-label="Permalink to &quot;绑定组与管线布局&quot;">​</a></h2><h3 id="绑定组布局" tabindex="-1">绑定组布局 <a class="header-anchor" href="#绑定组布局" aria-label="Permalink to &quot;绑定组布局&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建绑定组布局</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> bindGroupLayout</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createBindGroupLayout</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    entries: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            binding: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            visibility: GPUShaderStage.</span><span style="color:#79B8FF;">VERTEX</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> GPUShaderStage.</span><span style="color:#79B8FF;">FRAGMENT</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            buffer: { type: </span><span style="color:#9ECBFF;">&#39;uniform&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            binding: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            visibility: GPUShaderStage.</span><span style="color:#79B8FF;">FRAGMENT</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            texture: { sampleType: </span><span style="color:#9ECBFF;">&#39;float&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            binding: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            visibility: GPUShaderStage.</span><span style="color:#79B8FF;">FRAGMENT</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            sampler: { type: </span><span style="color:#9ECBFF;">&#39;filtering&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            binding: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            visibility: GPUShaderStage.</span><span style="color:#79B8FF;">COMPUTE</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            buffer: { type: </span><span style="color:#9ECBFF;">&#39;read-only-storage&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            binding: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            visibility: GPUShaderStage.</span><span style="color:#79B8FF;">COMPUTE</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            buffer: { type: </span><span style="color:#9ECBFF;">&#39;storage&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建管线布局</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> pipelineLayout</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createPipelineLayout</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    bindGroupLayouts: [bindGroupLayout]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="绑定组创建" tabindex="-1">绑定组创建 <a class="header-anchor" href="#绑定组创建" aria-label="Permalink to &quot;绑定组创建&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建绑定组</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> bindGroup</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createBindGroup</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    layout: bindGroupLayout,</span></span>
<span class="line"><span style="color:#E1E4E8;">    entries: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            binding: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            resource: { buffer: uniformBuffer }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            binding: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            resource: texture.</span><span style="color:#B392F0;">createView</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            binding: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            resource: sampler</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            binding: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            resource: { buffer: inputBuffer }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            binding: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            resource: { buffer: outputBuffer }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="管道创建与配置" tabindex="-1">管道创建与配置 <a class="header-anchor" href="#管道创建与配置" aria-label="Permalink to &quot;管道创建与配置&quot;">​</a></h2><h3 id="渲染管道" tabindex="-1">渲染管道 <a class="header-anchor" href="#渲染管道" aria-label="Permalink to &quot;渲染管道&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建渲染管道</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> renderPipeline</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createRenderPipeline</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    layout: pipelineLayout,</span></span>
<span class="line"><span style="color:#E1E4E8;">    vertex: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        module: shaderModule,</span></span>
<span class="line"><span style="color:#E1E4E8;">        entryPoint: </span><span style="color:#9ECBFF;">&#39;vs_main&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        buffers: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                arrayStride: </span><span style="color:#79B8FF;">24</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 6个float * 4字节</span></span>
<span class="line"><span style="color:#E1E4E8;">                attributes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        format: </span><span style="color:#9ECBFF;">&#39;float32x3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        offset: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        shaderLocation: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        format: </span><span style="color:#9ECBFF;">&#39;float32x3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        offset: </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        shaderLocation: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                ]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    fragment: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        module: shaderModule,</span></span>
<span class="line"><span style="color:#E1E4E8;">        entryPoint: </span><span style="color:#9ECBFF;">&#39;fs_main&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        targets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                format: canvasFormat</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    primitive: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        topology: </span><span style="color:#9ECBFF;">&#39;triangle-list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        cullMode: </span><span style="color:#9ECBFF;">&#39;back&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    depthStencil: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        format: </span><span style="color:#9ECBFF;">&#39;depth24plus-stencil8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        depthWriteEnabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        depthCompare: </span><span style="color:#9ECBFF;">&#39;less&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="计算管道" tabindex="-1">计算管道 <a class="header-anchor" href="#计算管道" aria-label="Permalink to &quot;计算管道&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建计算管道</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> computePipeline</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createComputePipeline</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    layout: pipelineLayout,</span></span>
<span class="line"><span style="color:#E1E4E8;">    compute: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        module: computeShaderModule,</span></span>
<span class="line"><span style="color:#E1E4E8;">        entryPoint: </span><span style="color:#9ECBFF;">&#39;cs_main&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="命令编码与执行" tabindex="-1">命令编码与执行 <a class="header-anchor" href="#命令编码与执行" aria-label="Permalink to &quot;命令编码与执行&quot;">​</a></h2><h3 id="渲染通道编码" tabindex="-1">渲染通道编码 <a class="header-anchor" href="#渲染通道编码" aria-label="Permalink to &quot;渲染通道编码&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建命令编码器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> commandEncoder</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createCommandEncoder</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 开始渲染通道</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> renderPass</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> commandEncoder.</span><span style="color:#B392F0;">beginRenderPass</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    colorAttachments: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            view: context.</span><span style="color:#B392F0;">getCurrentTexture</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">createView</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            loadOp: </span><span style="color:#9ECBFF;">&#39;clear&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            storeOp: </span><span style="color:#9ECBFF;">&#39;store&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            clearValue: [</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    depthStencilAttachment: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        view: depthTexture.</span><span style="color:#B392F0;">createView</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        depthLoadOp: </span><span style="color:#9ECBFF;">&#39;clear&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        depthStoreOp: </span><span style="color:#9ECBFF;">&#39;store&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        depthClearValue: </span><span style="color:#79B8FF;">1.0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置管道和绘制</span></span>
<span class="line"><span style="color:#E1E4E8;">renderPass.</span><span style="color:#B392F0;">setPipeline</span><span style="color:#E1E4E8;">(renderPipeline);</span></span>
<span class="line"><span style="color:#E1E4E8;">renderPass.</span><span style="color:#B392F0;">setVertexBuffer</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, vertexBuffer);</span></span>
<span class="line"><span style="color:#E1E4E8;">renderPass.</span><span style="color:#B392F0;">setBindGroup</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, bindGroup);</span></span>
<span class="line"><span style="color:#E1E4E8;">renderPass.</span><span style="color:#B392F0;">draw</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 3个顶点，1个实例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 结束渲染通道</span></span>
<span class="line"><span style="color:#E1E4E8;">renderPass.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="计算通道编码" tabindex="-1">计算通道编码 <a class="header-anchor" href="#计算通道编码" aria-label="Permalink to &quot;计算通道编码&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 开始计算通道</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> computePass</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> commandEncoder.</span><span style="color:#B392F0;">beginComputePass</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置计算管道和资源</span></span>
<span class="line"><span style="color:#E1E4E8;">computePass.</span><span style="color:#B392F0;">setPipeline</span><span style="color:#E1E4E8;">(computePipeline);</span></span>
<span class="line"><span style="color:#E1E4E8;">computePass.</span><span style="color:#B392F0;">setBindGroup</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, bindGroup);</span></span>
<span class="line"><span style="color:#E1E4E8;">computePass.</span><span style="color:#B392F0;">dispatchWorkgroups</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">ceil</span><span style="color:#E1E4E8;">(elementCount </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 64</span><span style="color:#E1E4E8;">), </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 结束计算通道</span></span>
<span class="line"><span style="color:#E1E4E8;">computePass.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="命令提交" tabindex="-1">命令提交 <a class="header-anchor" href="#命令提交" aria-label="Permalink to &quot;命令提交&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 完成编码并提交</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> commandBuffer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> commandEncoder.</span><span style="color:#B392F0;">finish</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">device.queue.</span><span style="color:#B392F0;">submit</span><span style="color:#E1E4E8;">([commandBuffer]);</span></span></code></pre></div><h2 id="高级特性与扩展" tabindex="-1">高级特性与扩展 <a class="header-anchor" href="#高级特性与扩展" aria-label="Permalink to &quot;高级特性与扩展&quot;">​</a></h2><h3 id="扩展支持" tabindex="-1">扩展支持 <a class="header-anchor" href="#扩展支持" aria-label="Permalink to &quot;扩展支持&quot;">​</a></h3><p>WebGPU 支持多种扩展，用于访问特定硬件功能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 检查扩展支持</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> adapter</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.gpu.</span><span style="color:#B392F0;">requestAdapter</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> features</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> adapter.features;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 请求特定扩展</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> device</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> adapter.</span><span style="color:#B392F0;">requestDevice</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    requiredFeatures: [</span><span style="color:#9ECBFF;">&#39;shader-f16&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;timestamp-query&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用半精度浮点数扩展</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (features.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;shader-f16&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 使用半精度着色器</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="异步操作与映射" tabindex="-1">异步操作与映射 <a class="header-anchor" href="#异步操作与映射" aria-label="Permalink to &quot;异步操作与映射&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 异步映射缓冲区读取</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> readBuffer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">buffer</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> device.queue.</span><span style="color:#B392F0;">onSubmittedWorkDone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> readbackBuffer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createBuffer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        size: buffer.size,</span></span>
<span class="line"><span style="color:#E1E4E8;">        usage: GPUBufferUsage.</span><span style="color:#79B8FF;">COPY_DST</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;"> GPUBufferUsage.</span><span style="color:#79B8FF;">MAP_READ</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> commandEncoder</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createCommandEncoder</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    commandEncoder.</span><span style="color:#B392F0;">copyBufferToBuffer</span><span style="color:#E1E4E8;">(buffer, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, readbackBuffer, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, buffer.size);</span></span>
<span class="line"><span style="color:#E1E4E8;">    device.queue.</span><span style="color:#B392F0;">submit</span><span style="color:#E1E4E8;">([commandEncoder.</span><span style="color:#B392F0;">finish</span><span style="color:#E1E4E8;">()]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> readbackBuffer.</span><span style="color:#B392F0;">mapAsync</span><span style="color:#E1E4E8;">(GPUMapMode.</span><span style="color:#79B8FF;">READ</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Float32Array</span><span style="color:#E1E4E8;">(readbackBuffer.</span><span style="color:#B392F0;">getMappedRange</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Float32Array</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    readbackBuffer.</span><span style="color:#B392F0;">unmap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="错误处理与调试" tabindex="-1">错误处理与调试 <a class="header-anchor" href="#错误处理与调试" aria-label="Permalink to &quot;错误处理与调试&quot;">​</a></h2><h3 id="错误回调" tabindex="-1">错误回调 <a class="header-anchor" href="#错误回调" aria-label="Permalink to &quot;错误回调&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 设置未捕获的错误处理</span></span>
<span class="line"><span style="color:#E1E4E8;">device.</span><span style="color:#B392F0;">pushErrorScope</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;validation&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">device.</span><span style="color:#B392F0;">pushErrorScope</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;out-of-memory&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">device.</span><span style="color:#B392F0;">pushErrorScope</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;internal&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 绘制操作...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 弹出错误范围</span></span>
<span class="line"><span style="color:#E1E4E8;">device.</span><span style="color:#B392F0;">popErrorScope</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;捕获到GPU错误:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="调试标签" tabindex="-1">调试标签 <a class="header-anchor" href="#调试标签" aria-label="Permalink to &quot;调试标签&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 为对象添加调试标签</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> buffer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createBuffer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;顶点缓冲区&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    size: </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    usage: GPUBufferUsage.</span><span style="color:#79B8FF;">VERTEX</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> commandEncoder</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">createCommandEncoder</span><span style="color:#E1E4E8;">({ label: </span><span style="color:#9ECBFF;">&#39;主命令编码器&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">commandEncoder.</span><span style="color:#B392F0;">pushDebugGroup</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;渲染三角形&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 渲染命令...</span></span>
<span class="line"><span style="color:#E1E4E8;">commandEncoder.</span><span style="color:#B392F0;">popDebugGroup</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="性能最佳实践" tabindex="-1">性能最佳实践 <a class="header-anchor" href="#性能最佳实践" aria-label="Permalink to &quot;性能最佳实践&quot;">​</a></h2><h3 id="资源管理" tabindex="-1">资源管理 <a class="header-anchor" href="#资源管理" aria-label="Permalink to &quot;资源管理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 资源池管理</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ResourcePool</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.device </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> device;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.buffers </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.textures </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    createBuffer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">descriptor</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> buffer</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.device.</span><span style="color:#B392F0;">createBuffer</span><span style="color:#E1E4E8;">(descriptor);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.buffers.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(buffer);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> buffer;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    destroyBuffer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">buffer</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.buffers.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(buffer)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            buffer.</span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.buffers.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(buffer);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 类似的纹理管理方法...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用资源池</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> resourcePool</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ResourcePool</span><span style="color:#E1E4E8;">(device);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tempBuffer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> resourcePool.</span><span style="color:#B392F0;">createBuffer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    size: </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    usage: GPUBufferUsage.</span><span style="color:#79B8FF;">UNIFORM</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    mappedAtCreation: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="管线状态重用" tabindex="-1">管线状态重用 <a class="header-anchor" href="#管线状态重用" aria-label="Permalink to &quot;管线状态重用&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 管线缓存</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PipelineCache</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.device </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> device;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.renderPipelines </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.computePipelines </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    getRenderPipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">descriptor</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.renderPipelines.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key)) {</span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.renderPipelines.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.device.</span><span style="color:#B392F0;">createRenderPipeline</span><span style="color:#E1E4E8;">(descriptor));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderPipelines.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    getComputePipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">descriptor</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.computePipelines.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key)) {</span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.computePipelines.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.device.</span><span style="color:#B392F0;">createComputePipeline</span><span style="color:#E1E4E8;">(descriptor));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.computePipelines.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>WebGPU API 通过其现代化的设计、显式的资源控制和高效的命令执行机制，为 Web 平台带来了前所未有的图形和计算性能。虽然学习曲线相对陡峭，但其清晰的架构和强大的能力使其成为下一代 Web 图形和计算应用的理想选择。</p>`,67)])])}const d=n(e,[["render",o]]);export{F as __pageData,d as default};
