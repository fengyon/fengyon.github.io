import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"ONNX","description":"","frontmatter":{},"headers":[{"level":2,"title":"概述与核心价值","slug":"概述与核心价值","link":"#概述与核心价值","children":[]},{"level":2,"title":"核心架构与组件","slug":"核心架构与组件","link":"#核心架构与组件","children":[{"level":3,"title":"主要组件说明","slug":"主要组件说明","link":"#主要组件说明","children":[]}]},{"level":2,"title":"ONNX 模型结构","slug":"onnx-模型结构","link":"#onnx-模型结构","children":[]},{"level":2,"title":"ONNX Runtime JavaScript API","slug":"onnx-runtime-javascript-api","link":"#onnx-runtime-javascript-api","children":[{"level":3,"title":"环境安装与配置","slug":"环境安装与配置","link":"#环境安装与配置","children":[]}]},{"level":2,"title":"核心 API 使用示例","slug":"核心-api-使用示例","link":"#核心-api-使用示例","children":[{"level":3,"title":"张量操作 API","slug":"张量操作-api","link":"#张量操作-api","children":[]},{"level":3,"title":"推理会话管理","slug":"推理会话管理","link":"#推理会话管理","children":[]},{"level":3,"title":"模型推理执行","slug":"模型推理执行","link":"#模型推理执行","children":[]}]},{"level":2,"title":"常用开源库与工具","slug":"常用开源库与工具","link":"#常用开源库与工具","children":[{"level":3,"title":"ONNX Runtime Web 功能特性","slug":"onnx-runtime-web-功能特性","link":"#onnx-runtime-web-功能特性","children":[]},{"level":3,"title":"性能优化工具","slug":"性能优化工具","link":"#性能优化工具","children":[]}]},{"level":2,"title":"实际应用示例","slug":"实际应用示例","link":"#实际应用示例","children":[{"level":3,"title":"图像分类应用","slug":"图像分类应用","link":"#图像分类应用","children":[]}]},{"level":2,"title":"部署与优化策略","slug":"部署与优化策略","link":"#部署与优化策略","children":[{"level":3,"title":"模型格式优化","slug":"模型格式优化","link":"#模型格式优化","children":[]}]}],"relativePath":"leading/ai-web/onnx.md","filePath":"leading/ai-web/onnx.md"}'),o={name:"leading/ai-web/onnx.md"};function e(t,s,c,r,E,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /leading/ai-web/onnx.md for this page in Markdown format</div><h1 id="onnx" tabindex="-1">ONNX <a class="header-anchor" href="#onnx" aria-label="Permalink to &quot;ONNX&quot;">​</a></h1><h2 id="概述与核心价值" tabindex="-1">概述与核心价值 <a class="header-anchor" href="#概述与核心价值" aria-label="Permalink to &quot;概述与核心价值&quot;">​</a></h2><p>ONNX (Open Neural Network Exchange) 是一个开放的深度学习模型格式标准，它允许模型在不同的深度学习框架之间进行转换和共享。ONNX 由微软和 Facebook 于 2017 年共同推出，旨在促进不同深度学习框架之间的模型交换和互操作性。如今，ONNX 已经成为表示深度学习模型的实际标准，它还支持传统非神经网络机器学习模型，有望成为整个 AI 模型交换的标准。</p><p><strong>核心价值示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>多个训练框架 → ONNX 统一格式 → 多种部署环境</span></span>
<span class="line"><span>   ↓                    ↓               ↓</span></span>
<span class="line"><span>PyTorch            .onnx 文件      ONNX Runtime</span></span>
<span class="line"><span>TensorFlow                          TensorRT</span></span>
<span class="line"><span>MXNet                              Mobile Device</span></span></code></pre></div><h2 id="核心架构与组件" tabindex="-1">核心架构与组件 <a class="header-anchor" href="#核心架构与组件" aria-label="Permalink to &quot;核心架构与组件&quot;">​</a></h2><p>ONNX 生态系统由多个核心组件构成，每个组件在模型生命周期中扮演着特定角色。这些组件共同提供了从模型转换到推理部署的完整工具链。</p><p><strong>架构示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[训练框架] → [ONNX 转换器] → [ONNX 模型] → [ONNX Runtime] → [推理结果]</span></span>
<span class="line"><span>   ↓              ↓              ↓            ↓            ↓</span></span>
<span class="line"><span>PyTorch       torch.onnx    计算图表    跨平台引擎    预测输出</span></span>
<span class="line"><span>TensorFlow    tf2onnx      节点/边     硬件加速</span></span></code></pre></div><h3 id="主要组件说明" tabindex="-1">主要组件说明 <a class="header-anchor" href="#主要组件说明" aria-label="Permalink to &quot;主要组件说明&quot;">​</a></h3><ul><li><strong>ONNX 模型格式</strong>：由计算图 (Graph) 组成，包含节点 (Nodes)、输入输出 (Inputs/Outputs) 和初始值 (Initializers)</li><li><strong>ONNX Runtime</strong>：一个高性能推理引擎，用于执行 ONNX 模型</li><li><strong>ONNX Converter</strong>：用于将不同框架的模型转换为 ONNX 格式</li></ul><h2 id="onnx-模型结构" tabindex="-1">ONNX 模型结构 <a class="header-anchor" href="#onnx-模型结构" aria-label="Permalink to &quot;ONNX 模型结构&quot;">​</a></h2><p>ONNX 使用计算图来表示神经网络模型，这种抽象使得模型可以独立于具体的训练框架和硬件平台。</p><p><strong>模型结构示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>ONNX 模型</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>计算图 (Graph)</span></span>
<span class="line"><span>    ├── 输入 (Inputs)</span></span>
<span class="line"><span>    ├── 节点 (Nodes) - 运算符/操作</span></span>
<span class="line"><span>    ├── 输出 (Outputs)</span></span>
<span class="line"><span>    └── 初始值 (Initializers) - 权重参数</span></span></code></pre></div><p>每个计算节点代表一个操作 (如卷积、矩阵乘法等)，节点之间的边表示数据流。ONNX 定义了一组与环境和平台无关的标准格式，使得 AI 模型可以在不同的框架和环境下交互使用。</p><h2 id="onnx-runtime-javascript-api" tabindex="-1">ONNX Runtime JavaScript API <a class="header-anchor" href="#onnx-runtime-javascript-api" aria-label="Permalink to &quot;ONNX Runtime JavaScript API&quot;">​</a></h2><p>ONNX Runtime JavaScript API 是一个统一的 API，适用于所有 JavaScript 用法。它提供了在浏览器、Node.js 和 React Native 环境中运行 ONNX 模型的能力。</p><h3 id="环境安装与配置" tabindex="-1">环境安装与配置 <a class="header-anchor" href="#环境安装与配置" aria-label="Permalink to &quot;环境安装与配置&quot;">​</a></h3><p><strong>安装命令：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 安装最新发布版本</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> onnxruntime-web</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装夜间构建的开发版本</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> onnxruntime-web@dev</span></span></code></pre></div><p><strong>ESM 导入方式：</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 标准导入（推荐）</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> ort </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;onnxruntime-web&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// WebGPU 支持（实验性功能）</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> ort </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;onnxruntime-web/webgpu&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// WebNN 支持（实验性功能）</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> ort </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;onnxruntime-web/experimental&#39;</span></span></code></pre></div><h2 id="核心-api-使用示例" tabindex="-1">核心 API 使用示例 <a class="header-anchor" href="#核心-api-使用示例" aria-label="Permalink to &quot;核心 API 使用示例&quot;">​</a></h2><h3 id="张量操作-api" tabindex="-1">张量操作 API <a class="header-anchor" href="#张量操作-api" aria-label="Permalink to &quot;张量操作 API&quot;">​</a></h3><p>张量是 ONNX 中的基本数据结构，代表多维数组。在 JavaScript 中，张量操作是模型推理的基础。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> ort </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;onnxruntime-web&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建张量</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> createTensors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 从数组创建张量</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Float32Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> tensor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> ort.</span><span style="color:#B392F0;">Tensor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;float32&#39;</span><span style="color:#E1E4E8;">, data, [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`张量形状: [\${</span><span style="color:#E1E4E8;">tensor</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">dims</span><span style="color:#9ECBFF;">}]\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`数据类型: \${</span><span style="color:#E1E4E8;">tensor</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`数据值: \${</span><span style="color:#E1E4E8;">Array</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">from</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">tensor</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> tensor</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 张量运算示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> tensorOperations</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> a</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> ort.</span><span style="color:#B392F0;">Tensor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;float32&#39;</span><span style="color:#E1E4E8;">, Float32Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]), [</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> b</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> ort.</span><span style="color:#B392F0;">Tensor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;float32&#39;</span><span style="color:#E1E4E8;">, Float32Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">]), [</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 在实际应用中，张量运算通常通过模型推理进行</span></span>
<span class="line"><span style="color:#6A737D;">  // 这里演示如何准备输入数据</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> inputs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    input1: a,</span></span>
<span class="line"><span style="color:#E1E4E8;">    input2: b,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> inputs</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="推理会话管理" tabindex="-1">推理会话管理 <a class="header-anchor" href="#推理会话管理" aria-label="Permalink to &quot;推理会话管理&quot;">​</a></h3><p>InferenceSession 是 ONNX Runtime 的核心类，负责模型加载和执行推理。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> ort </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;onnxruntime-web&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ONNXModel</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.session </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 加载模型</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadModel</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">modelUrl</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        executionProviders: [</span><span style="color:#9ECBFF;">&#39;wasm&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 使用 WebAssembly 后端</span></span>
<span class="line"><span style="color:#E1E4E8;">        graphOptimizationLevel: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用所有图优化</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.session </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> ort.InferenceSession.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(modelUrl, options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 输出模型元信息</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> modelMeta</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session.sessionOptions</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;模型会话已创建&#39;</span><span style="color:#E1E4E8;">, modelMeta)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;模型加载失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取模型输入输出信息</span></span>
<span class="line"><span style="color:#B392F0;">  getModelInfo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.session) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;会话未初始化&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inputs</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session.inputNames</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> outputs</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session.outputNames</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;模型输入:&#39;</span><span style="color:#E1E4E8;">, inputs)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;模型输出:&#39;</span><span style="color:#E1E4E8;">, outputs)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    inputs.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> input</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session.inputs.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name)</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`输入 \${</span><span style="color:#E1E4E8;">index</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}, 形状: [\${</span><span style="color:#E1E4E8;">input</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">dims</span><span style="color:#9ECBFF;">}]\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { inputs, outputs }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="模型推理执行" tabindex="-1">模型推理执行 <a class="header-anchor" href="#模型推理执行" aria-label="Permalink to &quot;模型推理执行&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 继续 ONNXModel 类</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">async </span><span style="color:#B392F0;">runInference</span><span style="color:#E1E4E8;">(inputData) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.session) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;会话未初始化，请先调用 loadModel&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 准备输入数据</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> feeds</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(inputData)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            feeds[name] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> ort.</span><span style="color:#B392F0;">Tensor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;float32&#39;</span><span style="color:#E1E4E8;">, data.data, data.dims);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 执行推理</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(feeds);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> endTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`推理耗时: \${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">endTime</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> startTime</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} 毫秒\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 处理输出结果</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">tensor</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(results)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            output[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                data: tensor.data,</span></span>
<span class="line"><span style="color:#E1E4E8;">                dims: tensor.dims</span></span>
<span class="line"><span style="color:#E1E4E8;">            };</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> output;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;推理执行失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> modelDemo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> model</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ONNXModel</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> model.</span><span style="color:#B392F0;">loadModel</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://example.com/model.onnx&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> modelInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> model.</span><span style="color:#B392F0;">getModelInfo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 准备示例输入数据（根据实际模型调整）</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inputData</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        [modelInfo.inputs[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]]: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            data: Float32Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">224</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 224</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">            dims: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">224</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">224</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 示例形状</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> model.</span><span style="color:#B392F0;">runInference</span><span style="color:#E1E4E8;">(inputData);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="常用开源库与工具" tabindex="-1">常用开源库与工具 <a class="header-anchor" href="#常用开源库与工具" aria-label="Permalink to &quot;常用开源库与工具&quot;">​</a></h2><h3 id="onnx-runtime-web-功能特性" tabindex="-1">ONNX Runtime Web 功能特性 <a class="header-anchor" href="#onnx-runtime-web-功能特性" aria-label="Permalink to &quot;ONNX Runtime Web 功能特性&quot;">​</a></h3><p>ONNX Runtime Web 提供了多种执行提供程序 (Execution Providers)，以适应不同的运行环境和性能需求。</p><p><strong>支持的后端示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>ONNX Runtime Web</span></span>
<span class="line"><span>    ├── WebAssembly (WASM) - CPU, 广泛兼容</span></span>
<span class="line"><span>    ├── WebGL - GPU, 图形API加速</span></span>
<span class="line"><span>    ├── WebGPU - 下一代GPU计算 (实验性)</span></span>
<span class="line"><span>    └── WebNN - 神经网络专用API (实验性)</span></span></code></pre></div><h3 id="性能优化工具" tabindex="-1">性能优化工具 <a class="header-anchor" href="#性能优化工具" aria-label="Permalink to &quot;性能优化工具&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> ort </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;onnxruntime-web&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 性能优化配置</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> OptimizedONNX</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getOptimizedOptions</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 执行提供程序优先级</span></span>
<span class="line"><span style="color:#E1E4E8;">      executionProviders: [</span><span style="color:#9ECBFF;">&#39;webgpu&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;wasm&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 图优化级别</span></span>
<span class="line"><span style="color:#E1E4E8;">      graphOptimizationLevel: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 启用内存模式优化</span></span>
<span class="line"><span style="color:#E1E4E8;">      enableMemoryPattern: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 执行模式</span></span>
<span class="line"><span style="color:#E1E4E8;">      executionMode: </span><span style="color:#9ECBFF;">&#39;sequential&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 线程数配置（WASM后端）</span></span>
<span class="line"><span style="color:#E1E4E8;">      intraOpNumThreads: navigator.hardwareConcurrency </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 内存限制</span></span>
<span class="line"><span style="color:#E1E4E8;">      memoryLimit: </span><span style="color:#79B8FF;">512</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 512MB</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 环境标志配置</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> configureEnvironment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 配置全局环境标志</span></span>
<span class="line"><span style="color:#E1E4E8;">    ort.env.wasm.numThreads </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> navigator.hardwareConcurrency </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 4</span></span>
<span class="line"><span style="color:#E1E4E8;">    ort.env.wasm.proxy </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">    ort.env.logLevel </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;warning&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ONNX Runtime 环境配置完成&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;线程数:&#39;</span><span style="color:#E1E4E8;">, ort.env.wasm.numThreads)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 模型预热（减少首次推理延迟）</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> warmupModel</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">session</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">inputShape</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;开始模型预热...&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建预热数据</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> warmupData</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inputNames</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> session.inputNames</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> name</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> inputNames) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> inputInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> session.inputs.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name)</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> size</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> inputShape</span></span>
<span class="line"><span style="color:#F97583;">        ?</span><span style="color:#E1E4E8;"> inputShape</span></span>
<span class="line"><span style="color:#F97583;">        :</span><span style="color:#E1E4E8;"> inputInfo.dims.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> b, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      warmupData[name] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> ort.</span><span style="color:#B392F0;">Tensor</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;float32&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#F97583;">        new</span><span style="color:#B392F0;"> Float32Array</span><span style="color:#E1E4E8;">(size).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        inputInfo.dims</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 执行预热推理</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(warmupData)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;模型预热完成&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化配置</span></span>
<span class="line"><span style="color:#E1E4E8;">OptimizedONNX.</span><span style="color:#B392F0;">configureEnvironment</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h2 id="实际应用示例" tabindex="-1">实际应用示例 <a class="header-anchor" href="#实际应用示例" aria-label="Permalink to &quot;实际应用示例&quot;">​</a></h2><h3 id="图像分类应用" tabindex="-1">图像分类应用 <a class="header-anchor" href="#图像分类应用" aria-label="Permalink to &quot;图像分类应用&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> ort </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;onnxruntime-web&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ImageClassifier</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">modelUrl</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.modelUrl </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> modelUrl</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.session </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.preprocessedData </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.session </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> ort.InferenceSession.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.modelUrl, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      executionProviders: [</span><span style="color:#9ECBFF;">&#39;wasm&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 图像预处理</span></span>
<span class="line"><span style="color:#B392F0;">  preprocessImage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">imageElement</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> canvas</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;canvas&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ctx</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> canvas.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2d&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 调整大小为目标尺寸</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> targetSize</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">224</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">224</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    canvas.width </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> targetSize[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    canvas.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> targetSize[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    ctx.</span><span style="color:#B392F0;">drawImage</span><span style="color:#E1E4E8;">(imageElement, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, targetSize[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], targetSize[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取图像数据</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> imageData</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ctx.</span><span style="color:#B392F0;">getImageData</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, targetSize[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], targetSize[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 转换为 CHW 格式 (Channel-Height-Width) 并归一化</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Float32Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> targetSize[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> targetSize[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> imageData.data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> pixelIndex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 4</span></span>
<span class="line"><span style="color:#6A737D;">      // 归一化到 [0, 1] 范围</span></span>
<span class="line"><span style="color:#E1E4E8;">      data[pixelIndex] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> imageData.data[i] </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 255.0</span><span style="color:#6A737D;"> // R</span></span>
<span class="line"><span style="color:#E1E4E8;">      data[pixelIndex </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> targetSize[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> targetSize[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]] </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">        imageData.data[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 255.0</span><span style="color:#6A737D;"> // G</span></span>
<span class="line"><span style="color:#E1E4E8;">      data[pixelIndex </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> targetSize[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> targetSize[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]] </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">        imageData.data[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 255.0</span><span style="color:#6A737D;"> // B</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.preprocessedData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> data</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> classify</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">imageElement</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.session) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 预处理图像</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inputData</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">preprocessImage</span><span style="color:#E1E4E8;">(imageElement)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建输入张量</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inputTensor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> ort.</span><span style="color:#B392F0;">Tensor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;float32&#39;</span><span style="color:#E1E4E8;">, inputData, [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">224</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">224</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 执行推理</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.session.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.session.inputNames[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]]: inputTensor,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 处理输出</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> results[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.session.outputNames[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]]</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> predictions</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processOutput</span><span style="color:#E1E4E8;">(output)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> predictions</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  processOutput</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">outputTensor</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> probabilities</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(outputTensor.data)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> predictions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> probabilities.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">prob</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">      classId: index,</span></span>
<span class="line"><span style="color:#E1E4E8;">      probability: prob,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 按概率排序</span></span>
<span class="line"><span style="color:#E1E4E8;">    predictions.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> b.probability </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a.probability)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> predictions.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 返回前5个预测结果</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> classifier</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ImageClassifier</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mobilenet.onnx&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> imageElement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;input-image&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> classifier.</span><span style="color:#B392F0;">classify</span><span style="color:#E1E4E8;">(imageElement)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;分类结果:&#39;</span><span style="color:#E1E4E8;">, results)</span></span></code></pre></div><h2 id="部署与优化策略" tabindex="-1">部署与优化策略 <a class="header-anchor" href="#部署与优化策略" aria-label="Permalink to &quot;部署与优化策略&quot;">​</a></h2><h3 id="模型格式优化" tabindex="-1">模型格式优化 <a class="header-anchor" href="#模型格式优化" aria-label="Permalink to &quot;模型格式优化&quot;">​</a></h3><p>ONNX Runtime 支持 ORT 格式模型，这种格式可以优化模型二进制文件大小、加快初始化速度和降低峰值内存使用量。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> ort </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;onnxruntime-web&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ModelOptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 转换模型为 ORT 格式（通常在构建时进行）</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> convertToORTFormat</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">onnxModelUrl</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 注意：此转换通常在服务器端或构建时完成</span></span>
<span class="line"><span style="color:#6A737D;">    // 这里展示客户端的使用方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(onnxModelUrl)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> modelBuffer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">arrayBuffer</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 在实际应用中，ORT 格式转换通常需要后端服务</span></span>
<span class="line"><span style="color:#6A737D;">    // 或者使用 ONNX Runtime 的转换工具</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      \`原始模型大小: \${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">modelBuffer</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">byteLength</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> modelBuffer</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 模型量化（减小模型大小，提高推理速度）</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> quantizeModel</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">modelBuffer</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">quantizationType</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;uint8&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 量化通常在后端进行</span></span>
<span class="line"><span style="color:#6A737D;">    // 这里展示概念性代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`应用 \${</span><span style="color:#E1E4E8;">quantizationType</span><span style="color:#9ECBFF;">} 量化\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">    // 在实际实现中，这里会调用量化API</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> modelBuffer</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 性能监控</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PerformanceMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      loadTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      inferenceTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      memoryUsage: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      throughput: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  startLoadTimer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loadStartTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  endLoadTimer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.loadTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.loadStartTime</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  startInferenceTimer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.inferenceStartTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  endInferenceTimer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">batchSize</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inferenceTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.inferenceStartTime</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.inferenceTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> inferenceTime</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.throughput </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (batchSize </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> inferenceTime </span><span style="color:#6A737D;">// 样本/秒</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getMemoryUsage</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 注意：浏览器中内存监控受限</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (performance.memory) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.metrics.memoryUsage </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.memory.usedJSHeapSize</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>ONNX 通过提供一种通用的模型表示格式，极大地简化了深度学习模型的跨框架部署和优化。其丰富的生态系统和工具支持，使得 ONNX 成为深度学习领域中的重要工具之一，让开发者能够“训练一次，随处运行”。</p>`,48)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
