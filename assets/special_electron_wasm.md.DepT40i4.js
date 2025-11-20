import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"Electron 集成 WebAssembly","description":"","frontmatter":{},"headers":[{"level":2,"title":"集成概述","slug":"集成概述","link":"#集成概述","children":[]},{"level":2,"title":"WebAssembly 基础与工具链","slug":"webassembly-基础与工具链","link":"#webassembly-基础与工具链","children":[{"level":3,"title":"WebAssembly 架构解析","slug":"webassembly-架构解析","link":"#webassembly-架构解析","children":[]},{"level":3,"title":"Emscripten 工具链配置","slug":"emscripten-工具链配置","link":"#emscripten-工具链配置","children":[]},{"level":3,"title":"基础 C/C++ 模块开发","slug":"基础-c-c-模块开发","link":"#基础-c-c-模块开发","children":[]}]},{"level":2,"title":"Electron 中的 WebAssembly 集成","slug":"electron-中的-webassembly-集成","link":"#electron-中的-webassembly-集成","children":[{"level":3,"title":"基础 WASM 模块加载","slug":"基础-wasm-模块加载","link":"#基础-wasm-模块加载","children":[]},{"level":3,"title":"预加载脚本集成","slug":"预加载脚本集成","link":"#预加载脚本集成","children":[]}]},{"level":2,"title":"高级 WebAssembly 功能","slug":"高级-webassembly-功能","link":"#高级-webassembly-功能","children":[{"level":3,"title":"复杂数据结构处理","slug":"复杂数据结构处理","link":"#复杂数据结构处理","children":[]},{"level":3,"title":"性能优化与多线程","slug":"性能优化与多线程","link":"#性能优化与多线程","children":[]}]},{"level":2,"title":"实际应用场景","slug":"实际应用场景","link":"#实际应用场景","children":[{"level":3,"title":"图像处理与计算机视觉","slug":"图像处理与计算机视觉","link":"#图像处理与计算机视觉","children":[]},{"level":3,"title":"科学计算与数据分析","slug":"科学计算与数据分析","link":"#科学计算与数据分析","children":[]}]},{"level":2,"title":"性能监控与调试","slug":"性能监控与调试","link":"#性能监控与调试","children":[{"level":3,"title":"WASM 性能分析工具","slug":"wasm-性能分析工具","link":"#wasm-性能分析工具","children":[]}]}],"relativePath":"special/electron/wasm.md","filePath":"special/electron/wasm.md"}'),o={name:"special/electron/wasm.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/electron/wasm.md for this page in Markdown format</div><h1 id="electron-集成-webassembly" tabindex="-1">Electron 集成 WebAssembly <a class="header-anchor" href="#electron-集成-webassembly" aria-label="Permalink to &quot;Electron 集成 WebAssembly&quot;">​</a></h1><h2 id="集成概述" tabindex="-1">集成概述 <a class="header-anchor" href="#集成概述" aria-label="Permalink to &quot;集成概述&quot;">​</a></h2><p>Electron 与 WebAssembly 的集成将 Web 技术的<strong>快速开发能力</strong>与原生代码的<strong>高性能特性</strong>完美结合。这种集成模式允许开发者在 Electron 的渲染进程和主进程中直接调用编译为 WebAssembly 的 C/C++、Rust 或其他语言代码，实现对计算密集型任务、现有原生库和硬件加速功能的深度集成。</p><p>集成架构的核心在于通过 <strong>WebAssembly 运行时</strong>建立 JavaScript 与原生编译代码之间的高效执行环境：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Electron 应用 (JavaScript/TypeScript)</span></span>
<span class="line"><span>    ↑↓ WebAssembly JavaScript API</span></span>
<span class="line"><span>WebAssembly 运行时 (WASM 模块)</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>编译后的原生代码 (C/C++/Rust)</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>系统资源 (计算/内存/算法)</span></span></code></pre></div><h2 id="webassembly-基础与工具链" tabindex="-1">WebAssembly 基础与工具链 <a class="header-anchor" href="#webassembly-基础与工具链" aria-label="Permalink to &quot;WebAssembly 基础与工具链&quot;">​</a></h2><h3 id="webassembly-架构解析" tabindex="-1">WebAssembly 架构解析 <a class="header-anchor" href="#webassembly-架构解析" aria-label="Permalink to &quot;WebAssembly 架构解析&quot;">​</a></h3><p>WebAssembly 是一种<strong>可移植、体积小、加载快</strong>的二进制指令格式，为 Electron 应用提供了接近原生代码的执行性能。与传统的 JavaScript 相比，WebAssembly 在计算密集型任务上具有显著优势。</p><p><strong>WebAssembly 在 Electron 中的执行流程：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>源代码 (C/C++/Rust) → Emscripten 编译 → WASM 模块 + JavaScript 胶水代码</span></span>
<span class="line"><span>                                                      ↓</span></span>
<span class="line"><span>                                                Electron 加载执行</span></span>
<span class="line"><span>                                                      ↓</span></span>
<span class="line"><span>                                           JavaScript 与 WASM 交互</span></span></code></pre></div><h3 id="emscripten-工具链配置" tabindex="-1">Emscripten 工具链配置 <a class="header-anchor" href="#emscripten-工具链配置" aria-label="Permalink to &quot;Emscripten 工具链配置&quot;">​</a></h3><p>Emscripten 是将 C/C++ 代码编译为 WebAssembly 的核心工具链。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// scripts/emscripten-setup.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;child_process&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { existsSync, mkdirSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> EmscriptenSetup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkPrerequisites</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  checkPrerequisites</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> prerequisites</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;Emscripten&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;emcc --version&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;Python&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;python --version&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;Git&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;git --version&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> missing</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(prerequisites)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(([, </span><span style="color:#FFAB70;">exists</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">exists)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> name)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (missing.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`缺少必要的开发环境: \${</span><span style="color:#E1E4E8;">missing</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  checkCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(command, { stdio: </span><span style="color:#9ECBFF;">&#39;ignore&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> compileCToWasm</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sourceFile</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">outputName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> defaultOptions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      optimization: </span><span style="color:#9ECBFF;">&#39;-O2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      wasm: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      modularize: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      exportFunctions: [</span><span style="color:#9ECBFF;">&#39;_malloc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;_free&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      memoryModel: </span><span style="color:#9ECBFF;">&#39;MAXIMUM_MEMORY=512MB&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mergedOptions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">defaultOptions, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">options }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> command</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;emcc&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      sourceFile,</span></span>
<span class="line"><span style="color:#9ECBFF;">      \`-o \${</span><span style="color:#E1E4E8;">outputName</span><span style="color:#9ECBFF;">}.js\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      \`-s \${</span><span style="color:#E1E4E8;">mergedOptions</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">memoryModel</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      mergedOptions.optimization,</span></span>
<span class="line"><span style="color:#E1E4E8;">      mergedOptions.wasm </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;-s WASM=1&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      mergedOptions.modularize </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;-s MODULARIZE=1&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      \`-s EXPORTED_FUNCTIONS=&quot;[\${</span><span style="color:#E1E4E8;">mergedOptions</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">exportFunctions</span></span>
<span class="line"><span style="color:#9ECBFF;">        .</span><span style="color:#B392F0;">map</span><span style="color:#9ECBFF;">((</span><span style="color:#79B8FF;">f</span><span style="color:#9ECBFF;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;"> \`&#39;\${</span><span style="color:#E1E4E8;">f</span><span style="color:#9ECBFF;">}&#39;\`</span><span style="color:#9ECBFF;">)</span></span>
<span class="line"><span style="color:#9ECBFF;">        .</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;,&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}]&quot;\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;-s EXPORTED_RUNTIME_METHODS=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">[&#39;ccall&#39;, &#39;cwrap&#39;]</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(Boolean)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🔨 编译 \${</span><span style="color:#E1E4E8;">sourceFile</span><span style="color:#9ECBFF;">} 为 WebAssembly...\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(command, { stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ WebAssembly 编译成功&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ 编译失败:&#39;</span><span style="color:#E1E4E8;">, error.message)</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> emscriptenSetup</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> EmscriptenSetup</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h3 id="基础-c-c-模块开发" tabindex="-1">基础 C/C++ 模块开发 <a class="header-anchor" href="#基础-c-c-模块开发" aria-label="Permalink to &quot;基础 C/C++ 模块开发&quot;">​</a></h3><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// wasm-modules/src/core-calculations.cpp</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;emscripten.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;emscripten/bind.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;cmath&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;vector&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 高性能数学计算函数</span></span>
<span class="line"><span style="color:#F97583;">extern</span><span style="color:#9ECBFF;"> &quot;C&quot;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  EMSCRIPTEN_KEEPALIVE</span></span>
<span class="line"><span style="color:#F97583;">  double</span><span style="color:#B392F0;"> calculate_distance</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">double</span><span style="color:#FFAB70;"> x1</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">double</span><span style="color:#FFAB70;"> y1</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">double</span><span style="color:#FFAB70;"> x2</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">double</span><span style="color:#FFAB70;"> y2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">sqrt</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(x2 </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> x1, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#B392F0;"> std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(y2 </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> y1, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  EMSCRIPTEN_KEEPALIVE</span></span>
<span class="line"><span style="color:#F97583;">  int*</span><span style="color:#B392F0;"> fibonacci_sequence</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> nullptr</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    int*</span><span style="color:#E1E4E8;"> sequence </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int*</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">*</span><span style="color:#F97583;"> sizeof</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (sequence </span><span style="color:#F97583;">==</span><span style="color:#79B8FF;"> nullptr</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> nullptr</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) sequence[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) sequence[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      sequence[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sequence[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> sequence[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> sequence;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  EMSCRIPTEN_KEEPALIVE</span></span>
<span class="line"><span style="color:#F97583;">  void</span><span style="color:#B392F0;"> free_memory</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void*</span><span style="color:#FFAB70;"> pointer</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    free</span><span style="color:#E1E4E8;">(pointer);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 emscripten::bind 进行 C++ 类导出</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MatrixCalculator</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">private:</span></span>
<span class="line"><span style="color:#B392F0;">  std</span><span style="color:#E1E4E8;">::vector</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::vector</span><span style="color:#F97583;">&lt;double&gt;&gt;</span><span style="color:#E1E4E8;"> data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#B392F0;">  MatrixCalculator</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">const</span><span style="color:#B392F0;"> std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;">&gt;&gt;</span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;"> input</span><span style="color:#E1E4E8;">) : </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">(input) {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;">&gt;&gt; </span><span style="color:#B392F0;">multiply</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">const</span><span style="color:#B392F0;"> std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;">&gt;&gt;</span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;"> other</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    size_t</span><span style="color:#E1E4E8;"> rows </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    size_t</span><span style="color:#E1E4E8;"> cols </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> other[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    size_t</span><span style="color:#E1E4E8;"> inner </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> other.</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    std</span><span style="color:#E1E4E8;">::vector</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::vector</span><span style="color:#F97583;">&lt;double&gt;&gt;</span><span style="color:#B392F0;"> result</span><span style="color:#E1E4E8;">(rows, </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;">&gt;(cols, </span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">size_t</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> rows; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">size_t</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> cols; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">size_t</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> inner; k</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          result[i][j] </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> data[i][k] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> other[k][j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  double</span><span style="color:#B392F0;"> determinant</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 简化的行列式计算实现</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (data.</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">==</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> data[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">==</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> data[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">][</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> data[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">][</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> data[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">][</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> data[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">][</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 0.0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 绑定到 JavaScript</span></span>
<span class="line"><span style="color:#B392F0;">EMSCRIPTEN_BINDINGS</span><span style="color:#E1E4E8;">(matrix_calculator) {</span></span>
<span class="line"><span style="color:#B392F0;">  emscripten</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">class_</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">MatrixCalculator</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#9ECBFF;">&quot;MatrixCalculator&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">constructor</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">const</span><span style="color:#B392F0;"> std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;">&gt;&gt;</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">&gt;()</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;multiply&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#B392F0;">MatrixCalculator</span><span style="color:#E1E4E8;">::multiply)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;determinant&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#B392F0;">MatrixCalculator</span><span style="color:#E1E4E8;">::determinant);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="electron-中的-webassembly-集成" tabindex="-1">Electron 中的 WebAssembly 集成 <a class="header-anchor" href="#electron-中的-webassembly-集成" aria-label="Permalink to &quot;Electron 中的 WebAssembly 集成&quot;">​</a></h2><h3 id="基础-wasm-模块加载" tabindex="-1">基础 WASM 模块加载 <a class="header-anchor" href="#基础-wasm-模块加载" aria-label="Permalink to &quot;基础 WASM 模块加载&quot;">​</a></h3><p>在 Electron 中加载和初始化 WebAssembly 模块需要特定的模式和错误处理机制。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/wasm-loader.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs/promises&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { join, dirname } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;path&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;url&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> WASMLoader</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.modules </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loadingPromises </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.__dirname </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadWASMModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">wasmPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">jsPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(moduleName)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.loadingPromises.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.loadingPromises.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(moduleName)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> loadPromise</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initializeWASMModule</span><span style="color:#E1E4E8;">(wasmPath, jsPath)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">module</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(moduleName, </span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.loadingPromises.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(moduleName)</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ WASM 模块加载成功: \${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> module</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.loadingPromises.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(moduleName)</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`❌ WASM 模块加载失败: \${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loadingPromises.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(moduleName, loadPromise)</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> loadPromise</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> initializeWASMModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">wasmPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">jsPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 动态导入 Emscripten 生成的 JS 胶水代码</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> moduleFactory</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> import</span><span style="color:#E1E4E8;">(jsPath)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> moduleConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      wasmBinary: </span><span style="color:#F97583;">await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadWASMBinary</span><span style="color:#E1E4E8;">(wasmPath),</span></span>
<span class="line"><span style="color:#B392F0;">      onRuntimeInitialized</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WASM 运行时初始化完成&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#B392F0;">      print</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM: \${</span><span style="color:#E1E4E8;">text</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">      printErr</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM Error: \${</span><span style="color:#E1E4E8;">text</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> moduleFactory</span><span style="color:#E1E4E8;">(moduleConfig)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadWASMBinary</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">wasmPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> fullPath</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.__dirname, wasmPath)</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> wasmBuffer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(fullPath)</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> wasmBuffer</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;读取 WASM 二进制文件失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> callWASMFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> module</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getModule</span><span style="color:#E1E4E8;">(moduleName)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">[functionName]) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`函数 \${</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">} 在模块 \${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">} 中不存在\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> module</span><span style="color:#E1E4E8;">[functionName](</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args)</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM 函数调用失败 [\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">}]:\`</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> getModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName)) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM 模块未加载: \${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(moduleName)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 内存管理辅助函数</span></span>
<span class="line"><span style="color:#B392F0;">  createWASMMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">module</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">initial</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 256</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">maximum</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2048</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> WebAssembly.</span><span style="color:#B392F0;">Memory</span><span style="color:#E1E4E8;">({ initial, maximum })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 在 JavaScript 和 WASM 之间传递数据</span></span>
<span class="line"><span style="color:#B392F0;">  allocateString</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">module</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> encoder</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TextEncoder</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bytes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> encoder.</span><span style="color:#B392F0;">encode</span><span style="color:#E1E4E8;">(str)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ptr</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> module</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">_malloc</span><span style="color:#E1E4E8;">(bytes.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">HEAPU8</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(bytes, ptr)</span></span>
<span class="line"><span style="color:#79B8FF;">    module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">HEAPU8</span><span style="color:#E1E4E8;">[ptr </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> bytes.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#6A737D;"> // null terminator</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { ptr, length: bytes.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  freeString</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">module</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">ptr</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">._free) {</span></span>
<span class="line"><span style="color:#79B8FF;">      module</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">_free</span><span style="color:#E1E4E8;">(ptr)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> wasmLoader</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WASMLoader</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h3 id="预加载脚本集成" tabindex="-1">预加载脚本集成 <a class="header-anchor" href="#预加载脚本集成" aria-label="Permalink to &quot;预加载脚本集成&quot;">​</a></h3><p>在 Electron 的预加载脚本中安全地暴露 WASM 功能给渲染进程。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// preload/wasm-preload.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { contextBridge, ipcRenderer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { wasmLoader } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../lib/wasm-loader.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> WASMPreloadIntegration</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.initialized </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 预加载关键 WASM 模块</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">preloadCriticalModules</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.initialized </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ WASM 预加载初始化完成&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ WASM 预加载初始化失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> preloadCriticalModules</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> criticalModules</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;mathEngine&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        wasmPath: </span><span style="color:#9ECBFF;">&#39;../wasm/math-engine.wasm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        jsPath: </span><span style="color:#9ECBFF;">&#39;../wasm/math-engine.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;imageProcessor&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        wasmPath: </span><span style="color:#9ECBFF;">&#39;../wasm/image-processor.wasm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        jsPath: </span><span style="color:#9ECBFF;">&#39;../wasm/image-processor.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      criticalModules.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">wasmPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">jsPath</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> wasmLoader.</span><span style="color:#B392F0;">loadWASMModule</span><span style="color:#E1E4E8;">(name, wasmPath, jsPath)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  exposeToRenderer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> wasmAPI</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 模块状态检查</span></span>
<span class="line"><span style="color:#B392F0;">      isInitialized</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.initialized,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 数学计算功能</span></span>
<span class="line"><span style="color:#B392F0;">      calculateDistance</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">x1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">y1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">x2</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">y2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> wasmLoader.</span><span style="color:#B392F0;">callWASMFunction</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">          &#39;mathEngine&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">          &#39;calculate_distance&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          x1,</span></span>
<span class="line"><span style="color:#E1E4E8;">          y1,</span></span>
<span class="line"><span style="color:#E1E4E8;">          x2,</span></span>
<span class="line"><span style="color:#E1E4E8;">          y2</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">      fibonacciSequence</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> module</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> wasmLoader.</span><span style="color:#B392F0;">getModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mathEngine&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> ptr</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> module</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">_fibonacci_sequence</span><span style="color:#E1E4E8;">(n)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">ptr) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;内存分配失败&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> sequence</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">          for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            sequence.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">HEAP32</span><span style="color:#E1E4E8;">[ptr </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 4</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> i])</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> sequence</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">          module</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">_free_memory</span><span style="color:#E1E4E8;">(ptr)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 图像处理功能</span></span>
<span class="line"><span style="color:#B392F0;">      processImage</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">imageData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">width</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">height</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">operation</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> wasmLoader.</span><span style="color:#B392F0;">callWASMFunction</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">          &#39;imageProcessor&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">          &#39;process_image&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          imageData,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width,</span></span>
<span class="line"><span style="color:#E1E4E8;">          height,</span></span>
<span class="line"><span style="color:#E1E4E8;">          operation</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 安全地暴露到渲染进程</span></span>
<span class="line"><span style="color:#E1E4E8;">    contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;wasmAPI&#39;</span><span style="color:#E1E4E8;">, wasmAPI)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> wasmPreload</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WASMPreloadIntegration</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">wasmPreload.</span><span style="color:#B392F0;">exposeToRenderer</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h2 id="高级-webassembly-功能" tabindex="-1">高级 WebAssembly 功能 <a class="header-anchor" href="#高级-webassembly-功能" aria-label="Permalink to &quot;高级 WebAssembly 功能&quot;">​</a></h2><h3 id="复杂数据结构处理" tabindex="-1">复杂数据结构处理 <a class="header-anchor" href="#复杂数据结构处理" aria-label="Permalink to &quot;复杂数据结构处理&quot;">​</a></h3><p>处理 JavaScript 和 WebAssembly 之间的复杂数据交换。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/wasm-data-exchange.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> WASMDataExchange</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">wasmModule</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.module </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> wasmModule</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.allocations </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 传输数组到 WASM</span></span>
<span class="line"><span style="color:#B392F0;">  transferArrayToWASM</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">jsArray</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dataType</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;float&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> typeInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;int8&#39;</span><span style="color:#E1E4E8;">: { heap: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#79B8FF;">HEAP8</span><span style="color:#E1E4E8;">, bytesPerElement: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;int16&#39;</span><span style="color:#E1E4E8;">: { heap: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#79B8FF;">HEAP16</span><span style="color:#E1E4E8;">, bytesPerElement: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;int32&#39;</span><span style="color:#E1E4E8;">: { heap: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#79B8FF;">HEAP32</span><span style="color:#E1E4E8;">, bytesPerElement: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;float&#39;</span><span style="color:#E1E4E8;">: { heap: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#79B8FF;">HEAPF32</span><span style="color:#E1E4E8;">, bytesPerElement: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;double&#39;</span><span style="color:#E1E4E8;">: { heap: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#79B8FF;">HEAPF64</span><span style="color:#E1E4E8;">, bytesPerElement: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> info</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> typeInfo[dataType]</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">info) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`不支持的数据类型: \${</span><span style="color:#E1E4E8;">dataType</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bytes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> jsArray.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> info.bytesPerElement</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ptr</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">_malloc</span><span style="color:#E1E4E8;">(bytes)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">ptr) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;内存分配失败&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.allocations.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(ptr)</span></span>
<span class="line"><span style="color:#E1E4E8;">    info.heap.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(jsArray, ptr </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> info.bytesPerElement)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { ptr, length: jsArray.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">, dataType }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 从 WASM 检索数组</span></span>
<span class="line"><span style="color:#B392F0;">  retrieveArrayFromWASM</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ptr</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">length</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dataType</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;float&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> typeInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;int8&#39;</span><span style="color:#E1E4E8;">: { heap: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#79B8FF;">HEAP8</span><span style="color:#E1E4E8;">, bytesPerElement: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;int16&#39;</span><span style="color:#E1E4E8;">: { heap: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#79B8FF;">HEAP16</span><span style="color:#E1E4E8;">, bytesPerElement: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;int32&#39;</span><span style="color:#E1E4E8;">: { heap: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#79B8FF;">HEAP32</span><span style="color:#E1E4E8;">, bytesPerElement: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;float&#39;</span><span style="color:#E1E4E8;">: { heap: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#79B8FF;">HEAPF32</span><span style="color:#E1E4E8;">, bytesPerElement: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;double&#39;</span><span style="color:#E1E4E8;">: { heap: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#79B8FF;">HEAPF64</span><span style="color:#E1E4E8;">, bytesPerElement: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> info</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> typeInfo[dataType]</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">info) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`不支持的数据类型: \${</span><span style="color:#E1E4E8;">dataType</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> startIndex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ptr </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> info.bytesPerElement</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(info.heap[startIndex </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> i])</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 传输二维矩阵到 WASM</span></span>
<span class="line"><span style="color:#B392F0;">  transferMatrixToWASM</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">matrix</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dataType</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;float&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> flattened</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> matrix.</span><span style="color:#B392F0;">flat</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> arrayInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">transferArrayToWASM</span><span style="color:#E1E4E8;">(flattened, dataType)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">arrayInfo,</span></span>
<span class="line"><span style="color:#E1E4E8;">      rows: matrix.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cols: matrix[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 处理字符串数据</span></span>
<span class="line"><span style="color:#B392F0;">  transferStringToWASM</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> encoder</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TextEncoder</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bytes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> encoder.</span><span style="color:#B392F0;">encode</span><span style="color:#E1E4E8;">(str)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ptr</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">_malloc</span><span style="color:#E1E4E8;">(bytes.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">ptr) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;字符串内存分配失败&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.allocations.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(ptr)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#79B8FF;">HEAPU8</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(bytes, ptr)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#79B8FF;">HEAPU8</span><span style="color:#E1E4E8;">[ptr </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> bytes.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#6A737D;"> // Null terminator</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { ptr, length: bytes.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 清理内存</span></span>
<span class="line"><span style="color:#B392F0;">  free</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ptr</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.allocations.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(ptr)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">_free</span><span style="color:#E1E4E8;">(ptr)</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.allocations.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(ptr)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 清理所有分配的内存</span></span>
<span class="line"><span style="color:#B392F0;">  cleanup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ptr</span><span style="color:#F97583;"> of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.allocations) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">_free</span><span style="color:#E1E4E8;">(ptr)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.allocations.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 内存使用统计</span></span>
<span class="line"><span style="color:#B392F0;">  getMemoryUsage</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memory</span><span style="color:#F97583;"> =</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.module._get_memory_usage </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">_get_memory_usage</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      allocations: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.allocations.size,</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalMemory: memory </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> memory.total </span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;未知&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      usedMemory: memory </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> memory.used </span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;未知&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="性能优化与多线程" tabindex="-1">性能优化与多线程 <a class="header-anchor" href="#性能优化与多线程" aria-label="Permalink to &quot;性能优化与多线程&quot;">​</a></h3><p>利用 WebAssembly 的多线程能力提升性能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/wasm-thread-manager.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Worker } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;worker_threads&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> WASMThreadManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workers </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.taskQueue </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workerScript </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">      dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url)),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;wasm-worker.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 创建专用 WASM 工作线程</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> createWorker</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">workerId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">wasmPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">jsPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Worker</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.workerScript, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      workerData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        workerId,</span></span>
<span class="line"><span style="color:#E1E4E8;">        moduleName,</span></span>
<span class="line"><span style="color:#E1E4E8;">        wasmPath,</span></span>
<span class="line"><span style="color:#E1E4E8;">        jsPath,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(workerId, worker)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleWorkerResult</span><span style="color:#E1E4E8;">(workerId, result)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM 工作线程错误 [\${</span><span style="color:#E1E4E8;">workerId</span><span style="color:#9ECBFF;">}]:\`</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(workerId)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (code </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM 工作线程退出 [\${</span><span style="color:#E1E4E8;">workerId</span><span style="color:#9ECBFF;">}], 代码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(workerId)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 等待 worker 初始化完成</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      worker.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;online&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ WASM 工作线程就绪: \${</span><span style="color:#E1E4E8;">workerId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(workerId)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 提交任务到工作线程</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> submitTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">workerId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">taskType</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">timeout</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 30000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> taskId</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`task-\${</span><span style="color:#E1E4E8;">Date</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">now</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">Math</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">random</span><span style="color:#9ECBFF;">()</span></span>
<span class="line"><span style="color:#9ECBFF;">        .</span><span style="color:#B392F0;">toString</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">36</span><span style="color:#9ECBFF;">)</span></span>
<span class="line"><span style="color:#9ECBFF;">        .</span><span style="color:#B392F0;">substr</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">, </span><span style="color:#79B8FF;">9</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> timeoutId</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM 任务执行超时: \${</span><span style="color:#E1E4E8;">taskId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(taskId)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, timeout)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(taskId, { resolve, reject, timeoutId })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(workerId)</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">worker) {</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM 工作线程不存在: \${</span><span style="color:#E1E4E8;">workerId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#F97583;">        return</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      worker.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({ taskId, taskType, data })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleWorkerResult</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">workerId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">taskId</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(taskId)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">task) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`未知任务 ID: \${</span><span style="color:#E1E4E8;">taskId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">      return</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    clearTimeout</span><span style="color:#E1E4E8;">(task.timeoutId)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(taskId)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      task.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(error))</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      task.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 并行处理批量数据</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processBatchData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">workerId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dataArray</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">processFunction</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> batchPromises</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> dataArray.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">submitTask</span><span style="color:#E1E4E8;">(workerId, processFunction, { data, index })</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(batchPromises)</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.index </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.index).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> r.result)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 优雅关闭所有工作线程</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> shutdown</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> shutdownPromises</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        worker.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> resolve</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">        worker.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({ type: </span><span style="color:#9ECBFF;">&#39;shutdown&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 强制终止（如果 5 秒内没有正常退出）</span></span>
<span class="line"><span style="color:#B392F0;">        setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          worker.</span><span style="color:#B392F0;">terminate</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">          resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(shutdownPromises)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 所有 WASM 工作线程已关闭&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/wasm-worker.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { workerData, parentPort, isMainThread } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;worker_threads&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { wasmLoader } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./wasm-loader.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> WASMWorker</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">workerId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">wasmPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">jsPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workerId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> workerId</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.moduleName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> moduleName</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.wasmPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> wasmPath</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.jsPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> jsPath</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.module </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isShuttingDown </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.module </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> wasmLoader.</span><span style="color:#B392F0;">loadWASMModule</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.moduleName,</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.wasmPath,</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.jsPath</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ WASM 工作线程初始化完成: \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">workerId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 通知主线程初始化完成</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (parentPort) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        parentPort.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({ type: </span><span style="color:#9ECBFF;">&#39;initialized&#39;</span><span style="color:#E1E4E8;">, workerId: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.workerId })</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM 工作线程初始化失败: \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">workerId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">      process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">taskType</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isShuttingDown) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;工作线程正在关闭&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      switch</span><span style="color:#E1E4E8;"> (taskType) {</span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;matrix_multiply&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processMatrixMultiplication</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;image_filter&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processImageFilter</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;data_transform&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processDataTransform</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">          throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`未知任务类型: \${</span><span style="color:#E1E4E8;">taskType</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM 任务处理失败 [\${</span><span style="color:#E1E4E8;">taskType</span><span style="color:#9ECBFF;">}]:\`</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processMatrixMultiplication</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">matrixA</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">matrixB</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> exchange</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WASMDataExchange</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> matrixAInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> exchange.</span><span style="color:#B392F0;">transferMatrixToWASM</span><span style="color:#E1E4E8;">(matrixA)</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> matrixBInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> exchange.</span><span style="color:#B392F0;">transferMatrixToWASM</span><span style="color:#E1E4E8;">(matrixB)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> resultPtr</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">_multiply_matrices</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        matrixAInfo.ptr,</span></span>
<span class="line"><span style="color:#E1E4E8;">        matrixAInfo.rows,</span></span>
<span class="line"><span style="color:#E1E4E8;">        matrixAInfo.cols,</span></span>
<span class="line"><span style="color:#E1E4E8;">        matrixBInfo.ptr,</span></span>
<span class="line"><span style="color:#E1E4E8;">        matrixBInfo.rows,</span></span>
<span class="line"><span style="color:#E1E4E8;">        matrixBInfo.cols</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> exchange.</span><span style="color:#B392F0;">retrieveArrayFromWASM</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        resultPtr,</span></span>
<span class="line"><span style="color:#E1E4E8;">        matrixAInfo.rows </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> matrixBInfo.cols</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 重组为二维矩阵</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> resultMatrix</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> matrixAInfo.rows; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        resultMatrix.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          result.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> matrixBInfo.cols, (i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> matrixBInfo.cols)</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> resultMatrix</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      exchange.</span><span style="color:#B392F0;">cleanup</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processImageFilter</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">imageData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">width</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">height</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">filterType</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> exchange</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WASMDataExchange</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> imageInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> exchange.</span><span style="color:#B392F0;">transferArrayToWASM</span><span style="color:#E1E4E8;">(imageData, </span><span style="color:#9ECBFF;">&#39;int8&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> resultPtr</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">_apply_image_filter</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        imageInfo.ptr,</span></span>
<span class="line"><span style="color:#E1E4E8;">        width,</span></span>
<span class="line"><span style="color:#E1E4E8;">        height,</span></span>
<span class="line"><span style="color:#E1E4E8;">        filterType</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> resultData</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> exchange.</span><span style="color:#B392F0;">retrieveArrayFromWASM</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        resultPtr,</span></span>
<span class="line"><span style="color:#E1E4E8;">        imageData.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;int8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> resultData</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      exchange.</span><span style="color:#B392F0;">cleanup</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 工作线程主逻辑</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isMainThread </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> parentPort) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WASMWorker</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    workerData.workerId,</span></span>
<span class="line"><span style="color:#E1E4E8;">    workerData.moduleName,</span></span>
<span class="line"><span style="color:#E1E4E8;">    workerData.wasmPath,</span></span>
<span class="line"><span style="color:#E1E4E8;">    workerData.jsPath</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  parentPort.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (message.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;shutdown&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      worker.isShuttingDown </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#F97583;">      return</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">taskId</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">taskType</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> message</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> worker.</span><span style="color:#B392F0;">processTask</span><span style="color:#E1E4E8;">(taskType, data)</span></span>
<span class="line"><span style="color:#E1E4E8;">      parentPort.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({ taskId, data: result })</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      parentPort.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        taskId,</span></span>
<span class="line"><span style="color:#E1E4E8;">        error: error.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="实际应用场景" tabindex="-1">实际应用场景 <a class="header-anchor" href="#实际应用场景" aria-label="Permalink to &quot;实际应用场景&quot;">​</a></h2><h3 id="图像处理与计算机视觉" tabindex="-1">图像处理与计算机视觉 <a class="header-anchor" href="#图像处理与计算机视觉" aria-label="Permalink to &quot;图像处理与计算机视觉&quot;">​</a></h3><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// wasm-modules/src/image-processing.cpp</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;emscripten.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;emscripten/bind.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;algorithm&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;vector&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">extern</span><span style="color:#9ECBFF;"> &quot;C&quot;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  EMSCRIPTEN_KEEPALIVE</span></span>
<span class="line"><span style="color:#F97583;">  uint8_t*</span><span style="color:#B392F0;"> apply_grayscale_filter</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uint8_t*</span><span style="color:#FFAB70;"> imageData</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> width</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> height</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    int</span><span style="color:#E1E4E8;"> totalPixels </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> width </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> height </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // RGBA</span></span>
<span class="line"><span style="color:#F97583;">    uint8_t*</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">uint8_t*</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(totalPixels);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> totalPixels; i </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      uint8_t</span><span style="color:#E1E4E8;"> r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> imageData[i];</span></span>
<span class="line"><span style="color:#F97583;">      uint8_t</span><span style="color:#E1E4E8;"> g </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> imageData[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">      uint8_t</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> imageData[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 灰度转换公式</span></span>
<span class="line"><span style="color:#F97583;">      uint8_t</span><span style="color:#E1E4E8;"> gray </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">uint8_t</span><span style="color:#E1E4E8;">)(</span><span style="color:#79B8FF;">0.299</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> r </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 0.587</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> g </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 0.114</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> b);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      result[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gray;</span><span style="color:#6A737D;">     // R</span></span>
<span class="line"><span style="color:#E1E4E8;">      result[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gray;</span><span style="color:#6A737D;"> // G</span></span>
<span class="line"><span style="color:#E1E4E8;">      result[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gray;</span><span style="color:#6A737D;"> // B</span></span>
<span class="line"><span style="color:#E1E4E8;">      result[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> imageData[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">];</span><span style="color:#6A737D;"> // Alpha</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  EMSCRIPTEN_KEEPALIVE</span></span>
<span class="line"><span style="color:#F97583;">  uint8_t*</span><span style="color:#B392F0;"> apply_gaussian_blur</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uint8_t*</span><span style="color:#FFAB70;"> imageData</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> width</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> height</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">float</span><span style="color:#FFAB70;"> sigma</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    int</span><span style="color:#E1E4E8;"> totalPixels </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> width </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> height </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    uint8_t*</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">uint8_t*</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(totalPixels);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 简化的高斯模糊实现</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#F97583;"> int</span><span style="color:#E1E4E8;"> kernelSize </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    float</span><span style="color:#E1E4E8;"> kernel[kernelSize][kernelSize] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">26</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">26</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">41</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">26</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">26</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    float</span><span style="color:#E1E4E8;"> kernelSum </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 273.0</span><span style="color:#F97583;">f</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // 核值总和</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; y </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> height; y</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; x </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> width; x</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> channel </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; channel </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">; channel</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          float</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0.0</span><span style="color:#F97583;">f</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">          for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> ky </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">; ky </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; ky</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">            for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> kx </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">; kx </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; kx</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">              int</span><span style="color:#E1E4E8;"> px </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> kx, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">), width </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">              int</span><span style="color:#E1E4E8;"> py </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> ky, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">), height </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">              int</span><span style="color:#E1E4E8;"> pixelIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (py </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> width </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> px) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 4</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> channel;</span></span>
<span class="line"><span style="color:#F97583;">              float</span><span style="color:#E1E4E8;"> weight </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> kernel[ky </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">][kx </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> kernelSum;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">              sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> imageData[pixelIndex] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> weight;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">          int</span><span style="color:#E1E4E8;"> resultIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (y </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> width </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> x) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 4</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> channel;</span></span>
<span class="line"><span style="color:#E1E4E8;">          result[resultIndex] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">uint8_t</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(sum, </span><span style="color:#79B8FF;">0.0</span><span style="color:#F97583;">f</span><span style="color:#E1E4E8;">), </span><span style="color:#79B8FF;">255.0</span><span style="color:#F97583;">f</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">EMSCRIPTEN_BINDINGS</span><span style="color:#E1E4E8;">(image_processing) {</span></span>
<span class="line"><span style="color:#B392F0;">  emscripten</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;apply_grayscale_filter&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">apply_grayscale_filter);</span></span>
<span class="line"><span style="color:#B392F0;">  emscripten</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;apply_gaussian_blur&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">apply_gaussian_blur);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="科学计算与数据分析" tabindex="-1">科学计算与数据分析 <a class="header-anchor" href="#科学计算与数据分析" aria-label="Permalink to &quot;科学计算与数据分析&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// applications/scientific-computing.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { wasmLoader } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../lib/wasm-loader.js&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { WASMDataExchange } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../lib/wasm-data-exchange.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> ScientificComputing</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.module </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.initialized </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.module </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> wasmLoader.</span><span style="color:#B392F0;">loadWASMModule</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;scientific&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;../wasm/scientific.wasm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;../wasm/scientific.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.exchange </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WASMDataExchange</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.module)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.initialized </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 快速傅里叶变换</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> fft</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">signalData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureInitialized</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> signalInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.exchange.</span><span style="color:#B392F0;">transferArrayToWASM</span><span style="color:#E1E4E8;">(signalData, </span><span style="color:#9ECBFF;">&#39;float&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> resultPtr</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">_fft_transform</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        signalInfo.ptr,</span></span>
<span class="line"><span style="color:#E1E4E8;">        signalInfo.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.exchange.</span><span style="color:#B392F0;">retrieveArrayFromWASM</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        resultPtr,</span></span>
<span class="line"><span style="color:#E1E4E8;">        signalInfo.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;float&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 转换为复数表示 [real, imag, real, imag, ...]</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> complexResult</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> result.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        complexResult.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          real: result[i],</span></span>
<span class="line"><span style="color:#E1E4E8;">          imag: result[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> complexResult</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.exchange.</span><span style="color:#B392F0;">cleanup</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 数值积分</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> numericalIntegration</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">steps</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureInitialized</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 使用梯形法则进行数值积分</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> stepSize</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (b </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> steps</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> xValues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> steps; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      xValues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> stepSize)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> xInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.exchange.</span><span style="color:#B392F0;">transferArrayToWASM</span><span style="color:#E1E4E8;">(xValues, </span><span style="color:#9ECBFF;">&#39;float&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">_trapezoidal_integral</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        xInfo.ptr,</span></span>
<span class="line"><span style="color:#E1E4E8;">        xInfo.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        stepSize</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.exchange.</span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(xInfo.ptr)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 线性回归分析</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> linearRegression</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">xData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">yData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureInitialized</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> xInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.exchange.</span><span style="color:#B392F0;">transferArrayToWASM</span><span style="color:#E1E4E8;">(xData, </span><span style="color:#9ECBFF;">&#39;float&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> yInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.exchange.</span><span style="color:#B392F0;">transferArrayToWASM</span><span style="color:#E1E4E8;">(yData, </span><span style="color:#9ECBFF;">&#39;float&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> resultPtr</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">_linear_regression</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        xInfo.ptr,</span></span>
<span class="line"><span style="color:#E1E4E8;">        yInfo.ptr,</span></span>
<span class="line"><span style="color:#E1E4E8;">        xInfo.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.exchange.</span><span style="color:#B392F0;">retrieveArrayFromWASM</span><span style="color:#E1E4E8;">(resultPtr, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;float&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        slope: result[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        intercept: result[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.exchange.</span><span style="color:#B392F0;">cleanup</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> ensureInitialized</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.initialized) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="性能监控与调试" tabindex="-1">性能监控与调试 <a class="header-anchor" href="#性能监控与调试" aria-label="Permalink to &quot;性能监控与调试&quot;">​</a></h2><h3 id="wasm-性能分析工具" tabindex="-1">WASM 性能分析工具 <a class="header-anchor" href="#wasm-性能分析工具" aria-label="Permalink to &quot;WASM 性能分析工具&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/wasm-performance.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { performance, PerformanceObserver } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;perf_hooks&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> WASMPerformanceMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PerformanceObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">list</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processPerformanceEntries</span><span style="color:#E1E4E8;">(list.</span><span style="color:#B392F0;">getEntries</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startMonitoring</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  startMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">({ entryTypes: [</span><span style="color:#9ECBFF;">&#39;measure&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">] })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 包装 WASM 函数调用以进行性能监控</span></span>
<span class="line"><span style="color:#B392F0;">  instrumentWASMFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">wasmFunction</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> startMark</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`wasm-\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">}-start\`</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> endMark</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`wasm-\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">}-end\`</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> measureName</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`wasm-\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      performance.</span><span style="color:#B392F0;">mark</span><span style="color:#E1E4E8;">(startMark)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> wasmFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args)</span></span>
<span class="line"><span style="color:#E1E4E8;">        performance.</span><span style="color:#B392F0;">mark</span><span style="color:#E1E4E8;">(endMark)</span></span>
<span class="line"><span style="color:#E1E4E8;">        performance.</span><span style="color:#B392F0;">measure</span><span style="color:#E1E4E8;">(measureName, startMark, endMark)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordSuccess</span><span style="color:#E1E4E8;">(moduleName, functionName)</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        performance.</span><span style="color:#B392F0;">mark</span><span style="color:#E1E4E8;">(endMark)</span></span>
<span class="line"><span style="color:#E1E4E8;">        performance.</span><span style="color:#B392F0;">measure</span><span style="color:#E1E4E8;">(measureName, startMark, endMark)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordError</span><span style="color:#E1E4E8;">(moduleName, functionName, error)</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  processPerformanceEntries</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    entries.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">entry</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (entry.name.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;wasm-&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">functionName</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> entry.name.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName)) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(moduleName, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> moduleMetrics</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(moduleName)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">moduleMetrics.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(functionName)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          moduleMetrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(functionName, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            callCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            totalTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            averageTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            minTime: </span><span style="color:#79B8FF;">Infinity</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            maxTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            errorCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            successCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> metrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> moduleMetrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(functionName)</span></span>
<span class="line"><span style="color:#E1E4E8;">        metrics.callCount</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">        metrics.totalTime </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> entry.duration</span></span>
<span class="line"><span style="color:#E1E4E8;">        metrics.averageTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> metrics.totalTime </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> metrics.callCount</span></span>
<span class="line"><span style="color:#E1E4E8;">        metrics.minTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(metrics.minTime, entry.duration)</span></span>
<span class="line"><span style="color:#E1E4E8;">        metrics.maxTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(metrics.maxTime, entry.duration)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  recordSuccess</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateMetrics</span><span style="color:#E1E4E8;">(moduleName, functionName, </span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  recordError</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateMetrics</span><span style="color:#E1E4E8;">(moduleName, functionName, </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM 函数调用错误 [\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">}]:\`</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updateMetrics</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(moduleName, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> moduleMetrics</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(moduleName)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">moduleMetrics.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(functionName)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      moduleMetrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(functionName, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        callCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        totalTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        averageTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        minTime: </span><span style="color:#79B8FF;">Infinity</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        errorCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        successCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> metrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> moduleMetrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(functionName)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;success&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      metrics.successCount</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;error&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      metrics.errorCount</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成性能报告</span></span>
<span class="line"><span style="color:#B392F0;">  generatePerformanceReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      modules: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">functions</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      report.modules[moduleName] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">metrics</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> functions) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        report.modules[moduleName][functionName] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          ...</span><span style="color:#E1E4E8;">metrics,</span></span>
<span class="line"><span style="color:#E1E4E8;">          successRate:</span></span>
<span class="line"><span style="color:#E1E4E8;">            metrics.callCount </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#F97583;">              ?</span><span style="color:#E1E4E8;"> (metrics.successCount </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> metrics.callCount) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span></span>
<span class="line"><span style="color:#F97583;">              :</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> report</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 识别性能瓶颈</span></span>
<span class="line"><span style="color:#B392F0;">  identifyBottlenecks</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bottlenecks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generatePerformanceReport</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">functions</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(report.modules)) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">metrics</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(functions)) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (metrics.averageTime </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">          // 超过 100ms 认为是瓶颈</span></span>
<span class="line"><span style="color:#E1E4E8;">          bottlenecks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            module: moduleName,</span></span>
<span class="line"><span style="color:#E1E4E8;">            function: functionName,</span></span>
<span class="line"><span style="color:#E1E4E8;">            averageTime: metrics.averageTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">            callCount: metrics.callCount,</span></span>
<span class="line"><span style="color:#E1E4E8;">            severity: metrics.averageTime </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 500</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;HIGH&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;MEDIUM&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> bottlenecks.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> b.averageTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a.averageTime)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> wasmPerformance</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WASMPerformanceMonitor</span><span style="color:#E1E4E8;">()</span></span></code></pre></div>`,39)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
