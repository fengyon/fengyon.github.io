import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Transformers.js","description":"","frontmatter":{},"headers":[{"level":2,"title":"概述与核心价值","slug":"概述与核心价值","link":"#概述与核心价值","children":[]},{"level":2,"title":"核心架构与技术特点","slug":"核心架构与技术特点","link":"#核心架构与技术特点","children":[{"level":3,"title":"运行时架构","slug":"运行时架构","link":"#运行时架构","children":[]},{"level":3,"title":"技术特点","slug":"技术特点","link":"#技术特点","children":[]}]},{"level":2,"title":"环境安装与配置","slug":"环境安装与配置","link":"#环境安装与配置","children":[{"level":3,"title":"安装与导入","slug":"安装与导入","link":"#安装与导入","children":[]},{"level":3,"title":"运行环境检测","slug":"运行环境检测","link":"#运行环境检测","children":[]}]},{"level":2,"title":"核心 API 与常用任务","slug":"核心-api-与常用任务","link":"#核心-api-与常用任务","children":[{"level":3,"title":"Pipeline API","slug":"pipeline-api","link":"#pipeline-api","children":[]},{"level":3,"title":"自定义模型与预处理","slug":"自定义模型与预处理","link":"#自定义模型与预处理","children":[]}]},{"level":2,"title":"计算机视觉与多模态应用","slug":"计算机视觉与多模态应用","link":"#计算机视觉与多模态应用","children":[{"level":3,"title":"图像分类","slug":"图像分类","link":"#图像分类","children":[]},{"level":3,"title":"多模态管道","slug":"多模态管道","link":"#多模态管道","children":[]}]},{"level":2,"title":"性能优化与高级功能","slug":"性能优化与高级功能","link":"#性能优化与高级功能","children":[{"level":3,"title":"WebGPU 加速","slug":"webgpu-加速","link":"#webgpu-加速","children":[]},{"level":3,"title":"模型量化与优化","slug":"模型量化与优化","link":"#模型量化与优化","children":[]}]},{"level":2,"title":"生态系统集成","slug":"生态系统集成","link":"#生态系统集成","children":[{"level":3,"title":"与 Hugging Face Hub 集成","slug":"与-hugging-face-hub-集成","link":"#与-hugging-face-hub-集成","children":[]},{"level":3,"title":"实际应用案例","slug":"实际应用案例","link":"#实际应用案例","children":[]}]}],"relativePath":"leading/ai-web/transformers.md","filePath":"leading/ai-web/transformers.md"}'),o={name:"leading/ai-web/transformers.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /leading/ai-web/transformers.md for this page in Markdown format</div><h1 id="transformers-js" tabindex="-1">Transformers.js <a class="header-anchor" href="#transformers-js" aria-label="Permalink to &quot;Transformers.js&quot;">​</a></h1><h2 id="概述与核心价值" tabindex="-1">概述与核心价值 <a class="header-anchor" href="#概述与核心价值" aria-label="Permalink to &quot;概述与核心价值&quot;">​</a></h2><p>Transformers.js 是一个基于 JavaScript 的开源库，允许在浏览器和 Node.js 中直接运行 Hugging Face 的 Transformer 模型，无需服务器依赖。它将最先进的机器学习能力引入 JavaScript 开发环境，支持自然语言处理、计算机视觉、音频处理和多模态任务。</p><p><strong>核心价值示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Python训练框架 → ONNX转换 → Transformers.js → 浏览器/Node.js部署</span></span>
<span class="line"><span>    ↓                   ↓           ↓               ↓</span></span>
<span class="line"><span>PyTorch/TensorFlow   .onnx文件    JavaScript    前端应用</span></span>
<span class="line"><span>                   模型格式       运行时        边缘设备</span></span></code></pre></div><h2 id="核心架构与技术特点" tabindex="-1">核心架构与技术特点 <a class="header-anchor" href="#核心架构与技术特点" aria-label="Permalink to &quot;核心架构与技术特点&quot;">​</a></h2><h3 id="运行时架构" tabindex="-1">运行时架构 <a class="header-anchor" href="#运行时架构" aria-label="Permalink to &quot;运行时架构&quot;">​</a></h3><p>Transformers.js 采用多层架构设计，通过 ONNX 运行时在浏览器中执行模型。该库支持多种后端，包括 WebAssembly、WebGPU 和 WebNN，可根据运行环境自动选择最佳执行路径。</p><p><strong>架构示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[输入数据] → [预处理] → [ONNX模型] → [推理引擎] → [后处理] → [输出结果]</span></span>
<span class="line"><span>     ↓          ↓          ↓           ↓           ↓         ↓</span></span>
<span class="line"><span>  文本/图像   分词器    计算图表示   ONNX Runtime  格式转换   预测结果</span></span>
<span class="line"><span>                        序列化     硬件加速             结构化数据</span></span></code></pre></div><h3 id="技术特点" tabindex="-1">技术特点 <a class="header-anchor" href="#技术特点" aria-label="Permalink to &quot;技术特点&quot;">​</a></h3><p>Transformers.js 具有几个突出的技术特点：即时反馈能力，用户输入数据后模型直接在浏览器中处理，无需等待服务器响应；隐私保护特性，所有数据处理都在客户端完成，敏感信息不会离开用户设备；轻量级部署，模型直接下载并执行于客户端，减少了服务器负担和带宽消耗；多模态支持，涵盖文本、图像、音频等多种数据类型。</p><h2 id="环境安装与配置" tabindex="-1">环境安装与配置 <a class="header-anchor" href="#环境安装与配置" aria-label="Permalink to &quot;环境安装与配置&quot;">​</a></h2><h3 id="安装与导入" tabindex="-1">安装与导入 <a class="header-anchor" href="#安装与导入" aria-label="Permalink to &quot;安装与导入&quot;">​</a></h3><p>通过 npm 安装 Transformers.js：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> @xenova/transformers</span></span></code></pre></div><p>ESM 导入方式：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pipeline, Tensor, env } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@xenova/transformers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置环境变量</span></span>
<span class="line"><span style="color:#E1E4E8;">env.allowLocalModels </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">env.backends.onnx.wasm.numThreads </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><h3 id="运行环境检测" tabindex="-1">运行环境检测 <a class="header-anchor" href="#运行环境检测" aria-label="Permalink to &quot;运行环境检测&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { env } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@xenova/transformers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> EnvironmentDetector</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#B392F0;"> checkCapabilities</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> capabilities</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hasWebGPU: </span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> navigator </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;undefined&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                       navigator.gpu </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> undefined</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            hasWASM: </span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> WebAssembly </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            backends: env.backends</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;环境能力检测:&#39;</span><span style="color:#E1E4E8;">, capabilities);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> capabilities;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> optimizeForHardware</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> caps</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkCapabilities</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (caps.hasWebGPU) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            env.backends.onnx.preferredOutputDevice </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;gpu&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;已启用 WebGPU 加速&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;使用 WASM 后端&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化环境检测</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> EnvironmentDetector.</span><span style="color:#B392F0;">optimizeForHardware</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="核心-api-与常用任务" tabindex="-1">核心 API 与常用任务 <a class="header-anchor" href="#核心-api-与常用任务" aria-label="Permalink to &quot;核心 API 与常用任务&quot;">​</a></h2><h3 id="pipeline-api" tabindex="-1">Pipeline API <a class="header-anchor" href="#pipeline-api" aria-label="Permalink to &quot;Pipeline API&quot;">​</a></h3><p>Pipeline 是 Transformers.js 最核心的 API，它封装了完整的模型推理流程，包括预处理、推理和后处理步骤。</p><p><strong>Pipeline 工作流程示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>原始输入 → [任务识别] → [模型加载] → [输入预处理] → [推理执行] → [结果解析] → 结构化输出</span></span>
<span class="line"><span>    ↓          ↓           ↓           ↓           ↓          ↓           ↓</span></span>
<span class="line"><span>  文本数据   文本分类    自动下载    分词/标准化    ONNX运行   概率计算    标签/分数</span></span></code></pre></div><p>代码示例：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pipeline } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@xenova/transformers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> TransformersPipeline</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.pipes </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 初始化管道</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> initPipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">task</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">modelId</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> modelId </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> { model: modelId } </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> pipe</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipeline</span><span style="color:#E1E4E8;">(task, options);</span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.pipes.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(task, pipe);</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">task</span><span style="color:#9ECBFF;">} 管道初始化完成\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> pipe;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`管道初始化失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">            throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 情感分析</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> analyzeSentiment</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> pipe </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pipes.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sentiment-analysis&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">pipe) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pipe </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initPipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sentiment-analysis&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipe</span><span style="color:#E1E4E8;">(text);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">result</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: result.label,</span></span>
<span class="line"><span style="color:#E1E4E8;">            score: Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(result.score </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            sentiment: result.score </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0.5</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;积极&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;消极&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 文本生成</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> generateText</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">prompt</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">maxLength</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> pipe </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pipes.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;text-generation&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">pipe) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pipe </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initPipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;text-generation&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Xenova/distilgpt2&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipe</span><span style="color:#E1E4E8;">(prompt, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            max_new_tokens: maxLength,</span></span>
<span class="line"><span style="color:#E1E4E8;">            temperature: </span><span style="color:#79B8FF;">0.7</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            do_sample: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> results[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].generated_text;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 问答系统</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> answerQuestion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">question</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> pipe </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pipes.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;question-answering&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">pipe) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pipe </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initPipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;question-answering&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipe</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            question: question,</span></span>
<span class="line"><span style="color:#E1E4E8;">            context: context</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            answer: result.answer,</span></span>
<span class="line"><span style="color:#E1E4E8;">            confidence: Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(result.score </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start: result.start,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end: result.end</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> demo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> pipelineManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TransformersPipeline</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 情感分析示例</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sentiment</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> pipelineManager.</span><span style="color:#B392F0;">analyzeSentiment</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;I love this product!&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;情感分析:&#39;</span><span style="color:#E1E4E8;">, sentiment);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 文本生成示例</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> generated</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> pipelineManager.</span><span style="color:#B392F0;">generateText</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Once upon a time&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;生成文本:&#39;</span><span style="color:#E1E4E8;">, generated);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 问答示例</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> qa</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> pipelineManager.</span><span style="color:#B392F0;">answerQuestion</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;What is the capital of France?&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;Paris is the capital and most populous city of France.&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;问答结果:&#39;</span><span style="color:#E1E4E8;">, qa);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="自定义模型与预处理" tabindex="-1">自定义模型与预处理 <a class="header-anchor" href="#自定义模型与预处理" aria-label="Permalink to &quot;自定义模型与预处理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AutoTokenizer, AutoModelForSequenceClassification, Tensor } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@xenova/transformers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CustomTextClassifier</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.tokenizer </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.model </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.labels </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;负面&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;正面&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> initialize</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">modelId</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;Xenova/distilbert-base-uncased-finetuned-sst-2-english&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;加载自定义分类器...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 并行加载 tokenizer 和模型</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.tokenizer, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.model] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">            AutoTokenizer.</span><span style="color:#B392F0;">from_pretrained</span><span style="color:#E1E4E8;">(modelId),</span></span>
<span class="line"><span style="color:#E1E4E8;">            AutoModelForSequenceClassification.</span><span style="color:#B392F0;">from_pretrained</span><span style="color:#E1E4E8;">(modelId)</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;自定义分类器加载完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> classify</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.tokenizer </span><span style="color:#F97583;">||</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.model) {</span></span>
<span class="line"><span style="color:#F97583;">            await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 手动分词处理</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> inputs</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">tokenizer</span><span style="color:#E1E4E8;">(text, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            padding: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            truncation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            return_tensors: </span><span style="color:#9ECBFF;">&#39;js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 执行推理</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> outputs</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">model</span><span style="color:#E1E4E8;">(inputs);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 处理输出</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> logits</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> outputs.logits;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> probabilities</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">softmax</span><span style="color:#E1E4E8;">(Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(logits.data));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> probabilities.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">prob</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.labels[index] </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> \`类别 \${</span><span style="color:#E1E4E8;">index</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            score: Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(prob </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 100</span></span>
<span class="line"><span style="color:#E1E4E8;">        }));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 按分数排序</span></span>
<span class="line"><span style="color:#E1E4E8;">        results.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> b.score </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a.score);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    softmax</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">arr</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> max</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">arr);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> exp</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">exp</span><span style="color:#E1E4E8;">(x </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> max));</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> sum</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> exp.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> exp.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> sum);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 批量处理</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> classifyBatch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">texts</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> text</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> texts) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">classify</span><span style="color:#E1E4E8;">(text);</span></span>
<span class="line"><span style="color:#E1E4E8;">            results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                text: text,</span></span>
<span class="line"><span style="color:#E1E4E8;">                prediction: result[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">            });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用自定义分类器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> classifierDemo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> classifier</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CustomTextClassifier</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> singleResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> classifier.</span><span style="color:#B392F0;">classify</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;This movie is fantastic!&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;单条分类:&#39;</span><span style="color:#E1E4E8;">, singleResult);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> batchResults</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> classifier.</span><span style="color:#B392F0;">classifyBatch</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;I love this product!&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;This is terrible.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;It is okay, not great.&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;批量分类:&#39;</span><span style="color:#E1E4E8;">, batchResults);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="计算机视觉与多模态应用" tabindex="-1">计算机视觉与多模态应用 <a class="header-anchor" href="#计算机视觉与多模态应用" aria-label="Permalink to &quot;计算机视觉与多模态应用&quot;">​</a></h2><h3 id="图像分类" tabindex="-1">图像分类 <a class="header-anchor" href="#图像分类" aria-label="Permalink to &quot;图像分类&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pipeline, Tensor } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@xenova/transformers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ImageProcessor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.classifier </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.detector </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">        // 初始化图像分类管道</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.classifier </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;image-classification&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 初始化零样本分类管道</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.zeroShot </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;zero-shot-image-classification&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;图像处理器初始化完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 基础图像分类</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> classifyImage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">imageElement</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.classifier) </span><span style="color:#F97583;">await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">classifier</span><span style="color:#E1E4E8;">(imageElement);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 返回前3个结果</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 零样本图像分类</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> zeroShotClassification</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">imageElement</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">candidateLabels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zeroShot) </span><span style="color:#F97583;">await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">zeroShot</span><span style="color:#E1E4E8;">(imageElement, candidateLabels);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">result</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: result.label,</span></span>
<span class="line"><span style="color:#E1E4E8;">            score: Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(result.score </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 100</span></span>
<span class="line"><span style="color:#E1E4E8;">        }));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 从URL加载并分类图像</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> classifyImageFromUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">imageUrl</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> img</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Image</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            img.crossOrigin </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;anonymous&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            img.</span><span style="color:#B392F0;">onload</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">                try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">                    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">classifyImage</span><span style="color:#E1E4E8;">(img);</span></span>
<span class="line"><span style="color:#B392F0;">                    resolve</span><span style="color:#E1E4E8;">(results);</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">                    reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            };</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            img.onerror </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> reject;</span></span>
<span class="line"><span style="color:#E1E4E8;">            img.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> imageUrl;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 图像处理示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> imageDemo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> processor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ImageProcessor</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 零样本分类示例</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> imageElement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test-image&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> zeroShotResults</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> processor.</span><span style="color:#B392F0;">zeroShotClassification</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        imageElement,</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span><span style="color:#9ECBFF;">&#39;animal&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;human&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;landscape&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;building&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;food&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;零样本分类:&#39;</span><span style="color:#E1E4E8;">, zeroShotResults);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="多模态管道" tabindex="-1">多模态管道 <a class="header-anchor" href="#多模态管道" aria-label="Permalink to &quot;多模态管道&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pipeline } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@xenova/transformers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MultimodalProcessor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">        // 初始化视觉问答管道</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.vqa </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;visual-question-answering&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 初始化文档问答管道  </span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.documentQA </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;document-question-answering&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;多模态处理器初始化完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 视觉问答</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> visualQuestionAnswering</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">imageElement</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">question</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.vqa) </span><span style="color:#F97583;">await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">vqa</span><span style="color:#E1E4E8;">(imageElement, question);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            answer: result.answer,</span></span>
<span class="line"><span style="color:#E1E4E8;">            score: Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(result.score </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 100</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 文档问答</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> documentQuestionAnswering</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">imageElement</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">question</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.documentQA) </span><span style="color:#F97583;">await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">documentQA</span><span style="color:#E1E4E8;">(imageElement, question);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="性能优化与高级功能" tabindex="-1">性能优化与高级功能 <a class="header-anchor" href="#性能优化与高级功能" aria-label="Permalink to &quot;性能优化与高级功能&quot;">​</a></h2><h3 id="webgpu-加速" tabindex="-1">WebGPU 加速 <a class="header-anchor" href="#webgpu-加速" aria-label="Permalink to &quot;WebGPU 加速&quot;">​</a></h3><p>Transformers.js v3 支持 WebGPU，提供了显著的性能提升。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { env, pipeline } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@xenova/transformers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> OptimizedPipeline</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> createOptimizedPipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">task</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">modelId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 配置 WebGPU 优先</span></span>
<span class="line"><span style="color:#E1E4E8;">        env.backends.onnx.preferredOutputDevice </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;gpu&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            model: modelId,</span></span>
<span class="line"><span style="color:#E1E4E8;">            quantized: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用量化模型</span></span>
<span class="line"><span style="color:#B392F0;">            progress_callback</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`加载进度: \${</span><span style="color:#E1E4E8;">Math</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">round</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">progress</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 100</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}%\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> pipe</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipeline</span><span style="color:#E1E4E8;">(task, options);</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`优化管道创建完成 (WebGPU: \${</span><span style="color:#E1E4E8;">env</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">backends</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">onnx</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">preferredOutputDevice</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;gpu&#39;})\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> pipe;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WebGPU 失败，回退到 WASM:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">            env.backends.onnx.preferredOutputDevice </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;cpu&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipeline</span><span style="color:#E1E4E8;">(task, options);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 批量处理优化</span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> processBatch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pipe</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">inputs</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">batchSize</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> inputs.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> batchSize) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> batch</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> inputs.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(i, i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> batchSize);</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> batchResults</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                batch.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">input</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> pipe</span><span style="color:#E1E4E8;">(input))</span></span>
<span class="line"><span style="color:#E1E4E8;">            );</span></span>
<span class="line"><span style="color:#E1E4E8;">            results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">batchResults);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#6A737D;">            // 避免阻塞主线程</span></span>
<span class="line"><span style="color:#F97583;">            await</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(resolve, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 性能监控</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PerformanceMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            inferenceTimes: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">            memoryUsage: []</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    startTimer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.startTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    endTimer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.startTime;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.metrics.inferenceTimes.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(duration);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> duration;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    getStats</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> times</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.inferenceTimes;</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (times.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> avg</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> times.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> times.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> max</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">times);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> min</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">times);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            averageTime: Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(avg </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            maxTime: Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(max </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            minTime: Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(min </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            totalRuns: times.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="模型量化与优化" tabindex="-1">模型量化与优化 <a class="header-anchor" href="#模型量化与优化" aria-label="Permalink to &quot;模型量化与优化&quot;">​</a></h3><p>Transformers.js v3 引入了新的量化格式，包括 8 位 (q8、int8、uint8) 和 4 位 (q4、bnb4、q4f16) 等选项。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pipeline, env } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@xenova/transformers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> QuantizedModelManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> loadQuantizedModel</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">task</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">modelId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">quantization</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;q4&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            model: modelId,</span></span>
<span class="line"><span style="color:#E1E4E8;">            quantized: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">            // 量化配置</span></span>
<span class="line"><span style="color:#E1E4E8;">            dtype: quantization,</span></span>
<span class="line"><span style="color:#E1E4E8;">            revision: </span><span style="color:#9ECBFF;">&#39;main&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 模型版本</span></span>
<span class="line"><span style="color:#6A737D;">            // 缓存配置</span></span>
<span class="line"><span style="color:#E1E4E8;">            cache_dir: </span><span style="color:#9ECBFF;">&#39;./models&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            local_files_only: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`加载量化模型: \${</span><span style="color:#E1E4E8;">modelId</span><span style="color:#9ECBFF;">}, 格式: \${</span><span style="color:#E1E4E8;">quantization</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> pipe</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipeline</span><span style="color:#E1E4E8;">(task, options);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> pipe;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 模型缓存管理</span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> manageCache</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> cacheStatus</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> env.</span><span style="color:#B392F0;">getCache</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;缓存状态:&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            size: cacheStatus.size,</span></span>
<span class="line"><span style="color:#E1E4E8;">            fileCount: cacheStatus.fileCount,</span></span>
<span class="line"><span style="color:#E1E4E8;">            location: cacheStatus.location</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 清理过期缓存</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> env.</span><span style="color:#B392F0;">cleanCache</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;缓存清理完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 量化模型使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> quantizedDemo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 加载 4-bit 量化模型</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> qaPipe</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> QuantizedModelManager.</span><span style="color:#B392F0;">loadQuantizedModel</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;question-answering&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;Xenova/distilbert-base-uncased-distilled-squad&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;q4&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> qaPipe</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        question: </span><span style="color:#9ECBFF;">&#39;What is the capital of France?&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        context: </span><span style="color:#9ECBFF;">&#39;Paris is the capital and most populous city of France.&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;量化模型结果:&#39;</span><span style="color:#E1E4E8;">, result);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="生态系统集成" tabindex="-1">生态系统集成 <a class="header-anchor" href="#生态系统集成" aria-label="Permalink to &quot;生态系统集成&quot;">​</a></h2><h3 id="与-hugging-face-hub-集成" tabindex="-1">与 Hugging Face Hub 集成 <a class="header-anchor" href="#与-hugging-face-hub-集成" aria-label="Permalink to &quot;与 Hugging Face Hub 集成&quot;">​</a></h3><p>Transformers.js 与 Hugging Face Hub 紧密集成，可以直接使用 Hub 上的模型。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pipeline, HfInference } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@xenova/transformers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> HuggingFaceIntegration</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">token</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.client </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> token </span><span style="color:#F97583;">?</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> HfInference</span><span style="color:#E1E4E8;">(token) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 搜索模型</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> searchModels</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">searchTerm</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">limit</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.client) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;未提供 Hugging Face token，使用匿名访问&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.client </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> HfInference</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> models</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.client.</span><span style="color:#B392F0;">listModels</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                search: searchTerm,</span></span>
<span class="line"><span style="color:#E1E4E8;">                limit: limit,</span></span>
<span class="line"><span style="color:#E1E4E8;">                sort: </span><span style="color:#9ECBFF;">&#39;downloads&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            });</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> models.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">model</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">                id: model.id,</span></span>
<span class="line"><span style="color:#E1E4E8;">                downloads: model.downloads,</span></span>
<span class="line"><span style="color:#E1E4E8;">                tags: model.tags,</span></span>
<span class="line"><span style="color:#E1E4E8;">                pipeline_tag: model.pipeline_tag</span></span>
<span class="line"><span style="color:#E1E4E8;">            }));</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;模型搜索失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 直接从 Hub 加载模型</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> loadFromHub</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">modelId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">task</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`从 Hub 加载模型: \${</span><span style="color:#E1E4E8;">modelId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 自动检测任务类型</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> actualTask</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> task </span><span style="color:#F97583;">||</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">detectTask</span><span style="color:#E1E4E8;">(modelId);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> pipe</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipeline</span><span style="color:#E1E4E8;">(actualTask, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            model: modelId,</span></span>
<span class="line"><span style="color:#E1E4E8;">            revision: </span><span style="color:#9ECBFF;">&#39;main&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> pipe;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> detectTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">modelId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 简化实现 - 实际应用中可以从模型配置推断</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (modelId.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;gpt&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> modelId.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;text-gen&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#9ECBFF;"> &#39;text-generation&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (modelId.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bert&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> modelId.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;class&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#9ECBFF;"> &#39;text-classification&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (modelId.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;clip&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> modelId.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;vision&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#9ECBFF;"> &#39;zero-shot-image-classification&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> &#39;text-classification&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 默认回退</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Hub 集成示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> hubDemo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hub</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> HuggingFaceIntegration</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 搜索文本分类模型</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> models</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> hub.</span><span style="color:#B392F0;">searchModels</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;text classification&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;搜索到的模型:&#39;</span><span style="color:#E1E4E8;">, models);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (models.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> pipe</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> hub.</span><span style="color:#B392F0;">loadFromHub</span><span style="color:#E1E4E8;">(models[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].id);</span></span>
<span class="line"><span style="color:#6A737D;">        // 使用模型...</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="实际应用案例" tabindex="-1">实际应用案例 <a class="header-anchor" href="#实际应用案例" aria-label="Permalink to &quot;实际应用案例&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pipeline } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@xenova/transformers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实时翻译应用</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> TranslatorApp</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.translator </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;translation&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            model: </span><span style="color:#9ECBFF;">&#39;Xenova/helsinki-translation-en-fr&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> translateText</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">targetLang</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;french&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.translator) </span><span style="color:#F97583;">await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">translator</span><span style="color:#E1E4E8;">(text, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            tgt_lang: targetLang</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> result[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].translation_text;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 智能客服系统</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ChatbotService</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.classifier </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;text-classification&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.generator </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> pipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;text-generation&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            model: </span><span style="color:#9ECBFF;">&#39;Xenova/distilgpt2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> processMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.classifier </span><span style="color:#F97583;">||</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.generator) </span><span style="color:#F97583;">await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 分析消息情感</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> sentiment</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">classifier</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 根据情感生成回复</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> prompt</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createPrompt</span><span style="color:#E1E4E8;">(message, sentiment[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].label);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generator</span><span style="color:#E1E4E8;">(prompt, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            max_new_tokens: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            temperature: </span><span style="color:#79B8FF;">0.7</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            response: response[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].generated_text,</span></span>
<span class="line"><span style="color:#E1E4E8;">            sentiment: sentiment[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].label,</span></span>
<span class="line"><span style="color:#E1E4E8;">            confidence: sentiment[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].score</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    createPrompt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">sentiment</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> \`用户消息: &quot;\${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}&quot; (情感: \${</span><span style="color:#E1E4E8;">sentiment</span><span style="color:#9ECBFF;">})</span></span>
<span class="line"><span style="color:#9ECBFF;">        助手回复:\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,48)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
