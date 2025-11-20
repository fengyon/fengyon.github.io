import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"Electron 集成 C++/Rust/NAPI","description":"","frontmatter":{},"headers":[{"level":2,"title":"集成概述","slug":"集成概述","link":"#集成概述","children":[]},{"level":2,"title":"N-API 核心技术","slug":"n-api-核心技术","link":"#n-api-核心技术","children":[{"level":3,"title":"N-API 架构解析","slug":"n-api-架构解析","link":"#n-api-架构解析","children":[]},{"level":3,"title":"环境配置与工具链","slug":"环境配置与工具链","link":"#环境配置与工具链","children":[]},{"level":3,"title":"基本 N-API 模块开发","slug":"基本-n-api-模块开发","link":"#基本-n-api-模块开发","children":[]}]},{"level":2,"title":"C++ 模块集成","slug":"c-模块集成","link":"#c-模块集成","children":[{"level":3,"title":"C++ 模块架构设计","slug":"c-模块架构设计","link":"#c-模块架构设计","children":[]},{"level":3,"title":"完整 C++ 模块示例","slug":"完整-c-模块示例","link":"#完整-c-模块示例","children":[]},{"level":3,"title":"C++ 模块的 Electron 集成","slug":"c-模块的-electron-集成","link":"#c-模块的-electron-集成","children":[]}]},{"level":2,"title":"Rust 语言集成","slug":"rust-语言集成","link":"#rust-语言集成","children":[{"level":3,"title":"Rust 与 N-API 集成架构","slug":"rust-与-n-api-集成架构","link":"#rust-与-n-api-集成架构","children":[]},{"level":3,"title":"napi-rs 项目配置","slug":"napi-rs-项目配置","link":"#napi-rs-项目配置","children":[]},{"level":3,"title":"Rust 模块实现","slug":"rust-模块实现","link":"#rust-模块实现","children":[]},{"level":3,"title":"Rust 模块的 Electron 包装器","slug":"rust-模块的-electron-包装器","link":"#rust-模块的-electron-包装器","children":[]}]},{"level":2,"title":"高级集成模式","slug":"高级集成模式","link":"#高级集成模式","children":[{"level":3,"title":"多线程与异步处理","slug":"多线程与异步处理","link":"#多线程与异步处理","children":[]},{"level":3,"title":"性能监控与优化","slug":"性能监控与优化","link":"#性能监控与优化","children":[]}]},{"level":2,"title":"安全最佳实践","slug":"安全最佳实践","link":"#安全最佳实践","children":[{"level":3,"title":"安全的模块加载","slug":"安全的模块加载","link":"#安全的模块加载","children":[]},{"level":3,"title":"进程间通信安全","slug":"进程间通信安全","link":"#进程间通信安全","children":[]}]}],"relativePath":"special/electron/native.md","filePath":"special/electron/native.md"}'),o={name:"special/electron/native.md"};function e(c,s,E,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/electron/native.md for this page in Markdown format</div><h1 id="electron-集成-c-rust-napi" tabindex="-1">Electron 集成 C++/Rust/NAPI <a class="header-anchor" href="#electron-集成-c-rust-napi" aria-label="Permalink to &quot;Electron 集成 C++/Rust/NAPI&quot;">​</a></h1><h2 id="集成概述" tabindex="-1">集成概述 <a class="header-anchor" href="#集成概述" aria-label="Permalink to &quot;集成概述&quot;">​</a></h2><p>Electron 与 C++/Rust/NAPI 的集成是现代桌面应用开发中的重要技术模式，它结合了 Web 技术的<strong>快速开发能力</strong>和系统级语言的<strong>高性能优势</strong>。这种集成模式允许开发者在 Electron 的渲染进程和主进程中直接调用原生代码，实现对计算密集型任务、硬件操作和现有原生库的深度集成。</p><p>集成架构的核心在于通过 <strong>N-API</strong> 建立 JavaScript 与原生代码之间的通信桥梁：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Electron 应用 (JavaScript/TypeScript)</span></span>
<span class="line"><span>    ↑↓ Node.js 绑定层</span></span>
<span class="line"><span>原生模块 (C++/Rust) ← N-API 接口</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>系统资源 (硬件/文件系统/原生库)</span></span></code></pre></div><p>这种架构既保持了 Electron 的跨平台特性，又突破了 Web 技术在性能上的限制，为开发高性能桌面应用提供了完美解决方案。</p><h2 id="n-api-核心技术" tabindex="-1">N-API 核心技术 <a class="header-anchor" href="#n-api-核心技术" aria-label="Permalink to &quot;N-API 核心技术&quot;">​</a></h2><h3 id="n-api-架构解析" tabindex="-1">N-API 架构解析 <a class="header-anchor" href="#n-api-架构解析" aria-label="Permalink to &quot;N-API 架构解析&quot;">​</a></h3><p>N-API 是 Node.js 提供的<strong>稳定的抽象层</strong>，它隔离了 JavaScript 运行时与原生模块的底层实现，确保原生模块在不同 Node.js 版本 (包括 Electron 内置的 Node.js) 中的二进制兼容性。</p><p><strong>N-API 在 Electron 中的层次结构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>渲染进程 (JavaScript) ←→ 主进程 (Node.js)</span></span>
<span class="line"><span>                            ↑</span></span>
<span class="line"><span>                      N-API 抽象层</span></span>
<span class="line"><span>                            ↑</span></span>
<span class="line"><span>                      V8/Node.js ABI</span></span>
<span class="line"><span>                            ↑</span></span>
<span class="line"><span>                    原生模块 (.node 文件)</span></span></code></pre></div><h3 id="环境配置与工具链" tabindex="-1">环境配置与工具链 <a class="header-anchor" href="#环境配置与工具链" aria-label="Permalink to &quot;环境配置与工具链&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// scripts/napi-setup.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFileSync, writeFileSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> NAPISetup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkPrerequisites</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  checkPrerequisites</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> prerequisites</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;node-gyp&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node-gyp --version&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;Python 3.8+&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;python --version&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;C++ Build Tools&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkVisualStudio</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> missing</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(prerequisites)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(([, </span><span style="color:#FFAB70;">exists</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">exists)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> name);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (missing.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`缺少必要的开发环境: \${</span><span style="color:#E1E4E8;">missing</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  checkCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(command, { stdio: </span><span style="color:#9ECBFF;">&#39;ignore&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  checkVisualStudio</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.platform </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;where cl&#39;</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;ignore&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  createBindingConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bindingGyp</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      targets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          target_name: moduleName,</span></span>
<span class="line"><span style="color:#E1E4E8;">          sources: [</span></span>
<span class="line"><span style="color:#9ECBFF;">            &#39;src/addon.cpp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">            &#39;src/native-wrapper.cpp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          include_dirs: [</span></span>
<span class="line"><span style="color:#9ECBFF;">            &#39;&lt;!@(node -p &quot;require(</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">node</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">addon</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">api\\\\</span><span style="color:#9ECBFF;">&#39;).include&quot;)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          dependencies: [</span></span>
<span class="line"><span style="color:#9ECBFF;">            &#39;&lt;!@(node -p &quot;require(</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">node</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">addon</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">api\\\\</span><span style="color:#9ECBFF;">&#39;).gyp&quot;)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          defines: [</span></span>
<span class="line"><span style="color:#9ECBFF;">            &#39;NAPI_DISABLE_CPP_EXCEPTIONS&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          cflags: [</span><span style="color:#9ECBFF;">&#39;-std=c++14&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          conditions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            [</span><span style="color:#9ECBFF;">&#39;OS==&quot;mac&quot;&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#9ECBFF;">              &#39;xcode_settings&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">                &#39;OTHER_CPLUSPLUSFLAGS&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;-std=c++14&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;-stdlib=libc++&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }]</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;binding.gyp&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(bindingGyp, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ binding.gyp 配置文件已生成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> rebuildForElectron</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取 Electron 的 Node.js 版本信息</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> electronVersion</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.versions.electron;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> nodeVersion</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.versions.node;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🔨 为 Electron 重新编译原生模块...\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`   Electron: \${</span><span style="color:#E1E4E8;">electronVersion</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`   Node.js: \${</span><span style="color:#E1E4E8;">nodeVersion</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npx electron-rebuild -v \${</span><span style="color:#E1E4E8;">electronVersion</span><span style="color:#9ECBFF;">} -n \${</span><span style="color:#E1E4E8;">nodeVersion</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 原生模块编译成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ 编译失败:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> napiSetup</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> NAPISetup</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="基本-n-api-模块开发" tabindex="-1">基本 N-API 模块开发 <a class="header-anchor" href="#基本-n-api-模块开发" aria-label="Permalink to &quot;基本 N-API 模块开发&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// native-module/src/addon.cpp</span></span>
<span class="line"><span style="color:#E1E4E8;">#include </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">napi.h</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">#include </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">vector</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">#include </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">thread</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 简单的计算函数：斐波那契数列</span></span>
<span class="line"><span style="color:#E1E4E8;">int </span><span style="color:#B392F0;">fibonacci</span><span style="color:#E1E4E8;">(int n) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> fibonacci</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#B392F0;"> fibonacci</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// N-API 包装函数</span></span>
<span class="line"><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Value </span><span style="color:#B392F0;">CalculateFibonacci</span><span style="color:#E1E4E8;">(const Napi::CallbackInfo</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> info) {</span></span>
<span class="line"><span style="color:#B392F0;">    Napi</span><span style="color:#E1E4E8;">::Env env </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info.</span><span style="color:#B392F0;">Env</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 参数验证</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (info.</span><span style="color:#B392F0;">Length</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        Napi</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">TypeError</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, </span><span style="color:#9ECBFF;">&quot;需要参数 n&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">ThrowAsJavaScriptException</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> env.</span><span style="color:#B392F0;">Null</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">info[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">IsNumber</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#B392F0;">        Napi</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">TypeError</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, </span><span style="color:#9ECBFF;">&quot;参数 n 必须是数字&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">ThrowAsJavaScriptException</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> env.</span><span style="color:#B392F0;">Null</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    int n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Number</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">Int32Value</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 输入验证</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        Napi</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">RangeError</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, </span><span style="color:#9ECBFF;">&quot;参数 n 不能为负数&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">ThrowAsJavaScriptException</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> env.</span><span style="color:#B392F0;">Null</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 45</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        Napi</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">RangeError</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, </span><span style="color:#9ECBFF;">&quot;参数 n 不能大于 45 (防止阻塞事件循环)&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">ThrowAsJavaScriptException</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> env.</span><span style="color:#B392F0;">Null</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 调用原生函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    int result </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> fibonacci</span><span style="color:#E1E4E8;">(n);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> Napi::Number::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, result);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 异步工作结构体</span></span>
<span class="line"><span style="color:#E1E4E8;">struct </span><span style="color:#B392F0;">FibonacciWorker</span><span style="color:#E1E4E8;"> : </span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::AsyncWorker {</span></span>
<span class="line"><span style="color:#E1E4E8;">    int n;</span></span>
<span class="line"><span style="color:#E1E4E8;">    int result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    FibonacciWorker</span><span style="color:#E1E4E8;">(Napi::Function</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> callback, int n)</span></span>
<span class="line"><span style="color:#E1E4E8;">        : </span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">AsyncWorker</span><span style="color:#E1E4E8;">(callback), </span><span style="color:#B392F0;">n</span><span style="color:#E1E4E8;">(n), </span><span style="color:#B392F0;">result</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    void</span><span style="color:#B392F0;"> Execute</span><span style="color:#E1E4E8;">() override {</span></span>
<span class="line"><span style="color:#6A737D;">        // 在工作线程中执行计算，不会阻塞事件循环</span></span>
<span class="line"><span style="color:#E1E4E8;">        result </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> fibonacci</span><span style="color:#E1E4E8;">(n);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    void</span><span style="color:#B392F0;"> OnOK</span><span style="color:#E1E4E8;">() override {</span></span>
<span class="line"><span style="color:#B392F0;">        Napi</span><span style="color:#E1E4E8;">::HandleScope </span><span style="color:#B392F0;">scope</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Env</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#B392F0;">        Callback</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">Call</span><span style="color:#E1E4E8;">({ </span><span style="color:#B392F0;">Env</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">Null</span><span style="color:#E1E4E8;">(), Napi::Number::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Env</span><span style="color:#E1E4E8;">(), result) });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 异步版本斐波那契计算</span></span>
<span class="line"><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Value </span><span style="color:#B392F0;">CalculateFibonacciAsync</span><span style="color:#E1E4E8;">(const Napi::CallbackInfo</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> info) {</span></span>
<span class="line"><span style="color:#B392F0;">    Napi</span><span style="color:#E1E4E8;">::Env env </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info.</span><span style="color:#B392F0;">Env</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (info.</span><span style="color:#B392F0;">Length</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        Napi</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">TypeError</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, </span><span style="color:#9ECBFF;">&quot;需要参数 n 和回调函数&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">ThrowAsJavaScriptException</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> env.</span><span style="color:#B392F0;">Null</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    int n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Number</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">Int32Value</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">    Napi</span><span style="color:#E1E4E8;">::Function callback </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Function</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    FibonacciWorker</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> worker </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> FibonacciWorker</span><span style="color:#E1E4E8;">(callback, n);</span></span>
<span class="line"><span style="color:#E1E4E8;">    worker</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">Queue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> env.</span><span style="color:#B392F0;">Undefined</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模块初始化</span></span>
<span class="line"><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Object </span><span style="color:#B392F0;">Init</span><span style="color:#E1E4E8;">(Napi::Env env, Napi::Object </span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    exports</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;calculateFibonacci&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">                Napi::Function::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, CalculateFibonacci));</span></span>
<span class="line"><span style="color:#79B8FF;">    exports</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;calculateFibonacciAsync&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">                Napi::Function::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, CalculateFibonacciAsync));</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> exports</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">NODE_API_MODULE</span><span style="color:#E1E4E8;">(native_module, Init)</span></span></code></pre></div><h2 id="c-模块集成" tabindex="-1">C++ 模块集成 <a class="header-anchor" href="#c-模块集成" aria-label="Permalink to &quot;C++ 模块集成&quot;">​</a></h2><h3 id="c-模块架构设计" tabindex="-1">C++ 模块架构设计 <a class="header-anchor" href="#c-模块架构设计" aria-label="Permalink to &quot;C++ 模块架构设计&quot;">​</a></h3><p>C++ 与 Electron 的集成主要通过 <strong>Node.js 原生插件</strong>实现，这些插件编译为 <code>.node</code> 文件，可以直接在 Electron 进程中加载。</p><p><strong>C++ 模块加载流程：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>C++ 源代码 (.cpp) → node-gyp 编译 → 原生模块 (.node)</span></span>
<span class="line"><span>                                                    ↓</span></span>
<span class="line"><span>                                              require() 加载</span></span>
<span class="line"><span>                                                    ↓</span></span>
<span class="line"><span>                                           JavaScript 调用接口</span></span></code></pre></div><h3 id="完整-c-模块示例" tabindex="-1">完整 C++ 模块示例 <a class="header-anchor" href="#完整-c-模块示例" aria-label="Permalink to &quot;完整 C++ 模块示例&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// native-module/src/advanced-calc.cpp</span></span>
<span class="line"><span style="color:#E1E4E8;">#include </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">napi.h</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">#include </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">vector</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">#include </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">algorithm</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">#include </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">thread</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">#include </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">chrono</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 性能密集型计算：矩阵乘法</span></span>
<span class="line"><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Value </span><span style="color:#B392F0;">MatrixMultiply</span><span style="color:#E1E4E8;">(const Napi::CallbackInfo</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> info) {</span></span>
<span class="line"><span style="color:#B392F0;">    Napi</span><span style="color:#E1E4E8;">::Env env </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info.</span><span style="color:#B392F0;">Env</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 获取输入矩阵</span></span>
<span class="line"><span style="color:#B392F0;">    Napi</span><span style="color:#E1E4E8;">::Array matrixA </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Array</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">    Napi</span><span style="color:#E1E4E8;">::Array matrixB </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Array</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    size_t rowsA </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> matrixA.</span><span style="color:#B392F0;">Length</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    size_t colsA </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> matrixA.</span><span style="color:#B392F0;">Get</span><span style="color:#E1E4E8;">(0u).As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Array</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">Length</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    size_t rowsB </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> matrixB.</span><span style="color:#B392F0;">Length</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    size_t colsB </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> matrixB.</span><span style="color:#B392F0;">Get</span><span style="color:#E1E4E8;">(0u).As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Array</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">Length</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 验证矩阵维度</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (colsA </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> rowsB) {</span></span>
<span class="line"><span style="color:#B392F0;">        Napi</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, </span><span style="color:#9ECBFF;">&quot;矩阵维度不匹配&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">ThrowAsJavaScriptException</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> env.</span><span style="color:#B392F0;">Null</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建结果矩阵</span></span>
<span class="line"><span style="color:#B392F0;">    Napi</span><span style="color:#E1E4E8;">::Array result </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> Napi</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, rowsA);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 执行矩阵乘法</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (size_t i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> rowsA; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        Napi</span><span style="color:#E1E4E8;">::Array row </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> matrixA.</span><span style="color:#B392F0;">Get</span><span style="color:#E1E4E8;">(i).As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Array</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">        Napi</span><span style="color:#E1E4E8;">::Array resultRow </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> Napi</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, colsB);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (size_t j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> colsB; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            double sum </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0.0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#F97583;">            for</span><span style="color:#E1E4E8;"> (size_t k </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> colsA; k</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                double a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> row.</span><span style="color:#B392F0;">Get</span><span style="color:#E1E4E8;">(k).As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Number</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">DoubleValue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">                Napi</span><span style="color:#E1E4E8;">::Array bRow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> matrixB.</span><span style="color:#B392F0;">Get</span><span style="color:#E1E4E8;">(k).As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Array</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">                double b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> bRow.</span><span style="color:#B392F0;">Get</span><span style="color:#E1E4E8;">(j).As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Number</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">DoubleValue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">                sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            resultRow.</span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">(j, Napi::Number::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, sum));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        result.</span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">(i, resultRow);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 图像处理：简单的灰度转换</span></span>
<span class="line"><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Value </span><span style="color:#B392F0;">ConvertToGrayscale</span><span style="color:#E1E4E8;">(const Napi::CallbackInfo</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> info) {</span></span>
<span class="line"><span style="color:#B392F0;">    Napi</span><span style="color:#E1E4E8;">::Env env </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info.</span><span style="color:#B392F0;">Env</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    Napi</span><span style="color:#E1E4E8;">::Uint8Array imageData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Uint8Array</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    size_t width </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Number</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">Uint32Value</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    size_t height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">].As</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Number</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">Uint32Value</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    uint8_t</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> imageData.</span><span style="color:#B392F0;">Data</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    size_t dataLength </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> imageData.</span><span style="color:#B392F0;">ElementLength</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 处理图像数据 (RGBA 转灰度)</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (size_t i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> dataLength; i </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        uint8_t r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        uint8_t g </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">        uint8_t b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 灰度公式</span></span>
<span class="line"><span style="color:#E1E4E8;">        uint8_t gray </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> static_cast</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">uint8_t</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#79B8FF;">0.299</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> r </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 0.587</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> g </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 0.114</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> b);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        data[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gray;     </span><span style="color:#6A737D;">// R</span></span>
<span class="line"><span style="color:#E1E4E8;">        data[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gray; </span><span style="color:#6A737D;">// G</span></span>
<span class="line"><span style="color:#E1E4E8;">        data[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gray; </span><span style="color:#6A737D;">// B</span></span>
<span class="line"><span style="color:#6A737D;">        // A 通道保持不变</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> imageData;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化函数</span></span>
<span class="line"><span style="color:#B392F0;">Napi</span><span style="color:#E1E4E8;">::Object </span><span style="color:#B392F0;">Init</span><span style="color:#E1E4E8;">(Napi::Env env, Napi::Object </span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    exports</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;matrixMultiply&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">                Napi::Function::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, MatrixMultiply));</span></span>
<span class="line"><span style="color:#79B8FF;">    exports</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;convertToGrayscale&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">                Napi::Function::</span><span style="color:#B392F0;">New</span><span style="color:#E1E4E8;">(env, ConvertToGrayscale));</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> exports</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">NODE_API_MODULE</span><span style="color:#E1E4E8;">(advanced_calc, Init)</span></span></code></pre></div><h3 id="c-模块的-electron-集成" tabindex="-1">C++ 模块的 Electron 集成 <a class="header-anchor" href="#c-模块的-electron-集成" aria-label="Permalink to &quot;C++ 模块的 Electron 集成&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/native-module-loader.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { contextBridge, ipcRenderer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> NativeModuleLoader</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.modules </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 安全地加载原生模块</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 主进程编译的原生模块</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> nativeAddon</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadSecureModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;advanced-calc&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;calculator&#39;</span><span style="color:#E1E4E8;">, nativeAddon);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 原生模块加载成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ 原生模块加载失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">fallbackToJavaScript</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadSecureModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在生产环境中，通过主进程验证模块完整性</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> isVerified</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;verify-native-module&#39;</span><span style="color:#E1E4E8;">, moduleName);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isVerified) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`模块 \${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">} 验证失败\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 动态导入原生模块</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> modulePath</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`./build/Release/\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}.node\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(modulePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  fallbackToJavaScript</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;⚠️ 使用 JavaScript 回退实现&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // JavaScript 回退实现</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;calculator&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">      matrixMultiply</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">matrixA</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">matrixB</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // JavaScript 实现的矩阵乘法（性能较低）</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> rowsA</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> matrixA.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> colsA</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> matrixA[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> colsB</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> matrixB[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> rowsA; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          result[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">          for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> colsB; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">            let</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">            for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> colsA; k</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> matrixA[i][k] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> matrixB[k][j];</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            result[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sum;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#B392F0;">      convertToGrayscale</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">imageData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">width</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">height</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // JavaScript 实现的灰度转换</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(imageData);</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> r</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data[i];</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> g</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> b</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> gray</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0.299</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> r </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 0.587</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> g </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 0.114</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#E1E4E8;">          data[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gray;</span></span>
<span class="line"><span style="color:#E1E4E8;">          data[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gray;</span></span>
<span class="line"><span style="color:#E1E4E8;">          data[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gray;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> data;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 暴露安全的 API 到渲染进程</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> loader</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> NativeModuleLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;nativeModules&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">  getCalculator</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> loader.</span><span style="color:#B392F0;">getModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;calculator&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">  isNativeAvailable</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> loader.modules.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;calculator&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="rust-语言集成" tabindex="-1">Rust 语言集成 <a class="header-anchor" href="#rust-语言集成" aria-label="Permalink to &quot;Rust 语言集成&quot;">​</a></h2><h3 id="rust-与-n-api-集成架构" tabindex="-1">Rust 与 N-API 集成架构 <a class="header-anchor" href="#rust-与-n-api-集成架构" aria-label="Permalink to &quot;Rust 与 N-API 集成架构&quot;">​</a></h3><p>Rust 通过 <strong>napi-rs</strong> 框架与 Electron 集成，提供了内存安全和零成本抽象的优势。</p><p><strong>Rust 集成架构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Rust 代码 → napi-rs 绑定 → Node.js 兼容模块</span></span>
<span class="line"><span>                                          ↓</span></span>
<span class="line"><span>                                    Electron 应用</span></span></code></pre></div><h3 id="napi-rs-项目配置" tabindex="-1">napi-rs 项目配置 <a class="header-anchor" href="#napi-rs-项目配置" aria-label="Permalink to &quot;napi-rs 项目配置&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// rust-module/Cargo.toml</span></span>
<span class="line"><span style="color:#E1E4E8;">[package]</span></span>
<span class="line"><span style="color:#E1E4E8;">name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;electron-rust-module&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">version </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;0.1.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">edition </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;2021&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[lib]</span></span>
<span class="line"><span style="color:#E1E4E8;">crate</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">type </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;cdylib&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[dependencies]</span></span>
<span class="line"><span style="color:#E1E4E8;">napi </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;2.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">napi</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">derive </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;2.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">tokio </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { version </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;1.0&quot;</span><span style="color:#E1E4E8;">, features </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;full&quot;</span><span style="color:#E1E4E8;">] }</span></span>
<span class="line"><span style="color:#E1E4E8;">image </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;0.24.0&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[build</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">dependencies]</span></span>
<span class="line"><span style="color:#E1E4E8;">napi</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">build </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;1.0&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[package.metadata.napi]</span></span>
<span class="line"><span style="color:#E1E4E8;">name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;electron_rust_module&quot;</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// rust-module/build.rs</span></span>
<span class="line"><span style="color:#E1E4E8;">fn </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">    napi_build</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="rust-模块实现" tabindex="-1">Rust 模块实现 <a class="header-anchor" href="#rust-模块实现" aria-label="Permalink to &quot;Rust 模块实现&quot;">​</a></h3><div class="language-rust"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// rust-module/src/lib.rs</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#B392F0;"> napi_derive</span><span style="color:#F97583;">::</span><span style="color:#E1E4E8;">napi;</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#B392F0;"> napi</span><span style="color:#F97583;">::</span><span style="color:#E1E4E8;">{</span><span style="color:#B392F0;">bindgen_prelude</span><span style="color:#F97583;">::*</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">JsUint8Array</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">JsUnknown</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#B392F0;"> image</span><span style="color:#F97583;">::</span><span style="color:#E1E4E8;">{</span><span style="color:#B392F0;">ImageBuffer</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Rgba</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#B392F0;"> std</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">convert</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">TryInto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 高性能计算：并行图像处理</span></span>
<span class="line"><span style="color:#E1E4E8;">#[napi]</span></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#B392F0;"> process_image_async</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  image_data</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> JsUint8Array</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> u32</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> u32</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  callback</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> napi</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">JsFunction</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;"> Result</span><span style="color:#E1E4E8;">&lt;()&gt; {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> image_data</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">into_value</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  napi</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">bindgen_prelude</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">spawn</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#F97583;"> move</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在 Tokio 运行时中处理图像</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> process_image_internal</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">data, width, height)</span><span style="color:#F97583;">.await</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 回调 JavaScript</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> callback_result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> callback</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">None</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">[result]);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#F97583;"> let</span><span style="color:#B392F0;"> Err</span><span style="color:#E1E4E8;">(e) </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> callback_result {</span></span>
<span class="line"><span style="color:#B392F0;">      eprintln!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;回调调用失败: {}&quot;</span><span style="color:#E1E4E8;">, e);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  Ok</span><span style="color:#E1E4E8;">(())</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> fn</span><span style="color:#B392F0;"> process_image_internal</span><span style="color:#E1E4E8;">(data</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> &amp;</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">u8</span><span style="color:#E1E4E8;">], width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> u32</span><span style="color:#E1E4E8;">, height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> u32</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;"> JsUnknown</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 使用 image crate 处理图像</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#F97583;"> let</span><span style="color:#B392F0;"> Ok</span><span style="color:#E1E4E8;">(img) </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> ImageBuffer</span><span style="color:#F97583;">::</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Rgba</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">u8</span><span style="color:#E1E4E8;">&gt;, _&gt;</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">from_raw</span><span style="color:#E1E4E8;">(width, height, data</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">to_vec</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 应用图像处理算法（示例：反转颜色）</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> processed</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> ImageBuffer</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Rgba</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">u8</span><span style="color:#E1E4E8;">&gt;, </span><span style="color:#B392F0;">Vec</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">u8</span><span style="color:#E1E4E8;">&gt;&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> img</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">pixels</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">p</span><span style="color:#F97583;">|</span><span style="color:#B392F0;"> Rgba</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">255</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> p[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">255</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> p[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">255</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> p[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">], p[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]]))</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">collect</span><span style="color:#F97583;">::</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Vec</span><span style="color:#E1E4E8;">&lt;_&gt;&gt;()</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">try_into</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">unwrap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 转换回 JavaScript 可用的格式</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result_data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> processed</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">into_raw</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">    napi</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">Env</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">from_raw</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">unsafe</span><span style="color:#E1E4E8;"> { </span><span style="color:#B392F0;">napi</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">sys</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">napi_env</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">() })</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">create_uint8_array</span><span style="color:#E1E4E8;">(result_data)</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">unwrap</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">into_unknown</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    napi</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">Env</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">from_raw</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">unsafe</span><span style="color:#E1E4E8;"> { </span><span style="color:#B392F0;">napi</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">sys</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">napi_env</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">() })</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">get_undefined</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">unwrap</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">into_unknown</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// CPU 密集型计算：物理模拟</span></span>
<span class="line"><span style="color:#E1E4E8;">#[napi]</span></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#B392F0;"> physics_simulation</span><span style="color:#E1E4E8;">(particles</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> u32</span><span style="color:#E1E4E8;">, steps</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> u32</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;"> u32</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#F97583;"> mut</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#B392F0;">u32</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 简化的物理模拟计算</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> step </span><span style="color:#F97583;">in</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">steps {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> particle </span><span style="color:#F97583;">in</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">particles {</span></span>
<span class="line"><span style="color:#6A737D;">      // 模拟一些计算密集型操作</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> result</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">wrapping_add</span><span style="color:#E1E4E8;">(step</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">wrapping_mul</span><span style="color:#E1E4E8;">(particle));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  result</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 结构体示例</span></span>
<span class="line"><span style="color:#E1E4E8;">#[napi]</span></span>
<span class="line"><span style="color:#F97583;">struct</span><span style="color:#B392F0;"> DataProcessor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  multiplier</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> f64</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">#[napi]</span></span>
<span class="line"><span style="color:#F97583;">impl</span><span style="color:#B392F0;"> DataProcessor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  #[napi(constructor)]</span></span>
<span class="line"><span style="color:#F97583;">  pub</span><span style="color:#F97583;"> fn</span><span style="color:#B392F0;"> new</span><span style="color:#E1E4E8;">(multiplier</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> f64</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-&gt;</span><span style="color:#79B8FF;"> Self</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    DataProcessor</span><span style="color:#E1E4E8;"> { multiplier }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  #[napi]</span></span>
<span class="line"><span style="color:#F97583;">  pub</span><span style="color:#F97583;"> fn</span><span style="color:#B392F0;"> process</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">, data</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Vec</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">f64</span><span style="color:#E1E4E8;">&gt;) </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;"> Vec</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">f64</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">into_iter</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">x</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> self</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">multiplier)</span></span>
<span class="line"><span style="color:#F97583;">      .</span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  #[napi]</span></span>
<span class="line"><span style="color:#F97583;">  pub</span><span style="color:#F97583;"> fn</span><span style="color:#B392F0;"> process_async</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">, data</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Vec</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">f64</span><span style="color:#E1E4E8;">&gt;) </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;"> napi</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">bindgen_prelude</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Vec</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">f64</span><span style="color:#E1E4E8;">&gt;&gt; {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> multiplier </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> self</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">multiplier;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    napi</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">bindgen_prelude</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">Promise</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">move</span><span style="color:#F97583;"> |</span><span style="color:#E1E4E8;">resolve, _</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      napi</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">bindgen_prelude</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">spawn</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#F97583;"> move</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 异步处理</span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> result</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Vec</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">f64</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">into_iter</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">          .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">x</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> multiplier)</span></span>
<span class="line"><span style="color:#F97583;">          .</span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        resolve</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Ok</span><span style="color:#E1E4E8;">(result));</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模块初始化</span></span>
<span class="line"><span style="color:#E1E4E8;">#[napi]</span></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#F97583;"> fn</span><span style="color:#B392F0;"> init</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;"> napi</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">Result</span><span style="color:#E1E4E8;">&lt;()&gt; {</span></span>
<span class="line"><span style="color:#B392F0;">  Ok</span><span style="color:#E1E4E8;">(())</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="rust-模块的-electron-包装器" tabindex="-1">Rust 模块的 Electron 包装器 <a class="header-anchor" href="#rust-模块的-electron-包装器" aria-label="Permalink to &quot;Rust 模块的 Electron 包装器&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/rust-module-adapter.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { join, dirname } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;url&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> RustModuleAdapter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.module </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isInitialized </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.__dirname </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isInitialized) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 动态导入 Rust 模块</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> modulePath</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.__dirname, </span><span style="color:#9ECBFF;">&#39;../rust-module/index.node&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.module </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> import</span><span style="color:#E1E4E8;">(modulePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 初始化模块</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.isInitialized </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ Rust 模块初始化成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ Rust 模块初始化失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processImage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">imageData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">width</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">height</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureInitialized</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">processImageAsync</span><span style="color:#E1E4E8;">(imageData, width, height, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (err) </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(err);</span></span>
<span class="line"><span style="color:#F97583;">        else</span><span style="color:#B392F0;"> resolve</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  physicsSimulation</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">particles</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">steps</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isInitialized) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Rust 模块未初始化&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">physicsSimulation</span><span style="color:#E1E4E8;">(particles, steps);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  createDataProcessor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">multiplier</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isInitialized) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Rust 模块未初始化&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.module.</span><span style="color:#B392F0;">DataProcessor</span><span style="color:#E1E4E8;">(multiplier);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> ensureInitialized</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isInitialized) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 单例实例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> rustModule</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> RustModuleAdapter</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在预加载脚本中安全暴露</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> exposeRustModule</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;rustModule&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">    processImage</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">imageData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">width</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">height</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      rustModule.</span><span style="color:#B392F0;">processImage</span><span style="color:#E1E4E8;">(imageData, width, height),</span></span>
<span class="line"><span style="color:#B392F0;">    physicsSimulation</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">particles</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">steps</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      rustModule.</span><span style="color:#B392F0;">physicsSimulation</span><span style="color:#E1E4E8;">(particles, steps),</span></span>
<span class="line"><span style="color:#B392F0;">    createDataProcessor</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">multiplier</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      rustModule.</span><span style="color:#B392F0;">createDataProcessor</span><span style="color:#E1E4E8;">(multiplier),</span></span>
<span class="line"><span style="color:#B392F0;">    isAvailable</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> rustModule.isInitialized</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="高级集成模式" tabindex="-1">高级集成模式 <a class="header-anchor" href="#高级集成模式" aria-label="Permalink to &quot;高级集成模式&quot;">​</a></h2><h3 id="多线程与异步处理" tabindex="-1">多线程与异步处理 <a class="header-anchor" href="#多线程与异步处理" aria-label="Permalink to &quot;多线程与异步处理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/thread-manager.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Worker, isMainThread, parentPort, workerData } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;worker_threads&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> NativeThreadManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workers </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.taskQueue </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 创建专用工作线程</span></span>
<span class="line"><span style="color:#B392F0;">  createWorker</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">taskType</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Worker</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> URL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./native-worker.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url), {</span></span>
<span class="line"><span style="color:#E1E4E8;">      workerData: { moduleName, taskType },</span></span>
<span class="line"><span style="color:#E1E4E8;">      stdout: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stderr: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> workerId</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">taskType</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">Date</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">now</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(workerId, worker);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleWorkerResult</span><span style="color:#E1E4E8;">(workerId, result);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`工作线程 \${</span><span style="color:#E1E4E8;">workerId</span><span style="color:#9ECBFF;">} 错误:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(workerId);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (code </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`工作线程 \${</span><span style="color:#E1E4E8;">workerId</span><span style="color:#9ECBFF;">} 退出，代码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(workerId);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> workerId;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 提交任务到工作线程</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> submitTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">workerId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">taskData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">timeout</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 30000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> taskId</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`task-\${</span><span style="color:#E1E4E8;">Date</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">now</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">Math</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">random</span><span style="color:#9ECBFF;">().</span><span style="color:#B392F0;">toString</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">36</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">substr</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">, </span><span style="color:#79B8FF;">9</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> timeoutId</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`任务 \${</span><span style="color:#E1E4E8;">taskId</span><span style="color:#9ECBFF;">} 执行超时\`</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(taskId);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, timeout);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(taskId, { resolve, reject, timeoutId });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(workerId);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">worker) {</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`工作线程 \${</span><span style="color:#E1E4E8;">workerId</span><span style="color:#9ECBFF;">} 不存在\`</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      worker.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({ taskId, data: taskData });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleWorkerResult</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">workerId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">taskId</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(taskId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">task) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`未知任务 ID: \${</span><span style="color:#E1E4E8;">taskId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    clearTimeout</span><span style="color:#E1E4E8;">(task.timeoutId);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(taskId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      task.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(error));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      task.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 优雅关闭所有工作线程</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> shutdown</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> shutdownPromises</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">worker</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        worker.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> resolve</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">        worker.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({ type: </span><span style="color:#9ECBFF;">&#39;shutdown&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 强制终止（如果 5 秒内没有正常退出）</span></span>
<span class="line"><span style="color:#B392F0;">        setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (worker.threadId) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            worker.</span><span style="color:#B392F0;">terminate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#B392F0;">          resolve</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(shutdownPromises);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 所有工作线程已关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> threadManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> NativeThreadManager</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/native-worker.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { workerData, parentPort, isMainThread } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;worker_threads&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { rustModule } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./rust-module-adapter.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { nativeModuleLoader } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./native-module-loader.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> NativeWorker</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">taskType</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.moduleName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> moduleName;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.taskType </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> taskType;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isShuttingDown </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 初始化相应的原生模块</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moduleName </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;rust&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> rustModule.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moduleName </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;cpp&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> nativeModuleLoader.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 工作线程初始化完成: \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">taskType</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;工作线程初始化失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">taskData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isShuttingDown) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;工作线程正在关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      switch</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.taskType) {</span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;image-processing&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processImageTask</span><span style="color:#E1E4E8;">(taskData);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;physics-simulation&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processPhysicsTask</span><span style="color:#E1E4E8;">(taskData);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;matrix-calculation&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processMatrixTask</span><span style="color:#E1E4E8;">(taskData);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">          throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`未知任务类型: \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">taskType</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`任务处理失败:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processImageTask</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">imageData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">width</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">height</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">operation</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moduleName </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;rust&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> processor</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> rustModule.</span><span style="color:#B392F0;">createDataProcessor</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> processedData</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> processor.</span><span style="color:#B392F0;">process_async</span><span style="color:#E1E4E8;">(Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(imageData));</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(processedData);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> calculator</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> nativeModuleLoader.</span><span style="color:#B392F0;">getModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;calculator&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> calculator.</span><span style="color:#B392F0;">convertToGrayscale</span><span style="color:#E1E4E8;">(imageData, width, height);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processPhysicsTask</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">particles</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">steps</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moduleName </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;rust&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> rustModule.</span><span style="color:#B392F0;">physicsSimulation</span><span style="color:#E1E4E8;">(particles, steps);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 回退到 JavaScript 实现</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> step </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; step </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> steps; step</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> particle </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; particle </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> particles; particle</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          result </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> step </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> particle;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processMatrixTask</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">matrixA</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">matrixB</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> calculator</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> nativeModuleLoader.</span><span style="color:#B392F0;">getModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;calculator&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> calculator.</span><span style="color:#B392F0;">matrixMultiply</span><span style="color:#E1E4E8;">(matrixA, matrixB);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 工作线程主逻辑</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isMainThread) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> NativeWorker</span><span style="color:#E1E4E8;">(workerData.moduleName, workerData.taskType);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  parentPort.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (message.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;shutdown&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      worker.isShuttingDown </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">taskId</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> message;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> worker.</span><span style="color:#B392F0;">processTask</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">      parentPort.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({ taskId, data: result });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      parentPort.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">        taskId, </span></span>
<span class="line"><span style="color:#E1E4E8;">        error: error.message </span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="性能监控与优化" tabindex="-1">性能监控与优化 <a class="header-anchor" href="#性能监控与优化" aria-label="Permalink to &quot;性能监控与优化&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/performance-monitor.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { performance, PerformanceObserver } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;perf_hooks&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> NativeModulePerformanceMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PerformanceObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">list</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processMetrics</span><span style="color:#E1E4E8;">(list.</span><span style="color:#B392F0;">getEntries</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startMonitoring</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  startMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">({ entryTypes: [</span><span style="color:#9ECBFF;">&#39;measure&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">] });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 包装原生函数调用以进行性能监控</span></span>
<span class="line"><span style="color:#B392F0;">  instrumentNativeFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">nativeFunction</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> startMark</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">}-start\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> endMark</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">}-end\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> measureName</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      performance.</span><span style="color:#B392F0;">mark</span><span style="color:#E1E4E8;">(startMark);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> nativeFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#E1E4E8;">        performance.</span><span style="color:#B392F0;">mark</span><span style="color:#E1E4E8;">(endMark);</span></span>
<span class="line"><span style="color:#E1E4E8;">        performance.</span><span style="color:#B392F0;">measure</span><span style="color:#E1E4E8;">(measureName, startMark, endMark);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordSuccess</span><span style="color:#E1E4E8;">(moduleName, functionName);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        performance.</span><span style="color:#B392F0;">mark</span><span style="color:#E1E4E8;">(endMark);</span></span>
<span class="line"><span style="color:#E1E4E8;">        performance.</span><span style="color:#B392F0;">measure</span><span style="color:#E1E4E8;">(measureName, startMark, endMark);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordError</span><span style="color:#E1E4E8;">(moduleName, functionName, error);</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  processMetrics</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    entries.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entry</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">functionName</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> entry.name.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName)) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(moduleName, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> moduleMetrics</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(moduleName);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">moduleMetrics.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(functionName)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        moduleMetrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(functionName, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          callCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          totalTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          averageTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          errorCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          successCount: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> metrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> moduleMetrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(functionName);</span></span>
<span class="line"><span style="color:#E1E4E8;">      metrics.callCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      metrics.totalTime </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> entry.duration;</span></span>
<span class="line"><span style="color:#E1E4E8;">      metrics.averageTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> metrics.totalTime </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> metrics.callCount;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  recordSuccess</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateMetrics</span><span style="color:#E1E4E8;">(moduleName, functionName, </span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  recordError</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateMetrics</span><span style="color:#E1E4E8;">(moduleName, functionName, </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`原生函数调用错误 [\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">}]:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updateMetrics</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(moduleName, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> moduleMetrics</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(moduleName);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">moduleMetrics.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(functionName)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      moduleMetrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(functionName, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        callCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        totalTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        averageTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        errorCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        successCount: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> metrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> moduleMetrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(functionName);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;success&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      metrics.successCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;error&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      metrics.errorCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成性能报告</span></span>
<span class="line"><span style="color:#B392F0;">  generateReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      modules: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">functions</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      report.modules[moduleName] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">metrics</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> functions) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        report.modules[moduleName][functionName] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          ...</span><span style="color:#E1E4E8;">metrics,</span></span>
<span class="line"><span style="color:#E1E4E8;">          successRate: metrics.callCount </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">            (metrics.successCount </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> metrics.callCount) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> report;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 检查性能问题</span></span>
<span class="line"><span style="color:#B392F0;">  checkPerformanceIssues</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> issues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateReport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">functions</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(report.modules)) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">metrics</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(functions)) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 检查平均执行时间是否过长</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (metrics.averageTime </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 1秒</span></span>
<span class="line"><span style="color:#E1E4E8;">          issues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;PERFORMANCE&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            module: moduleName,</span></span>
<span class="line"><span style="color:#E1E4E8;">            function: functionName,</span></span>
<span class="line"><span style="color:#E1E4E8;">            message: </span><span style="color:#9ECBFF;">\`函数执行时间过长: \${</span><span style="color:#E1E4E8;">metrics</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">averageTime</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            severity: </span><span style="color:#9ECBFF;">&#39;WARNING&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 检查错误率是否过高</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (metrics.successRate </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 90</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          issues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;RELIABILITY&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            module: moduleName,</span></span>
<span class="line"><span style="color:#E1E4E8;">            function: functionName,</span></span>
<span class="line"><span style="color:#E1E4E8;">            message: </span><span style="color:#9ECBFF;">\`函数错误率过高: \${</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">100</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> metrics</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">successRate</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}%\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            severity: </span><span style="color:#9ECBFF;">&#39;ERROR&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> issues;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> performanceMonitor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> NativeModulePerformanceMonitor</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="安全最佳实践" tabindex="-1">安全最佳实践 <a class="header-anchor" href="#安全最佳实践" aria-label="Permalink to &quot;安全最佳实践&quot;">​</a></h2><h3 id="安全的模块加载" tabindex="-1">安全的模块加载 <a class="header-anchor" href="#安全的模块加载" aria-label="Permalink to &quot;安全的模块加载&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/secure-module-loader.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createHash } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;crypto&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFileSync, statSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { join } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SecureModuleLoader</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.trustedHashes </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadTrustedHashes</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  loadTrustedHashes</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 加载受信任的模块哈希值</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> hashes</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">        readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;../trusted-modules.json&#39;</span><span style="color:#E1E4E8;">), </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.trustedHashes </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">(Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(hashes));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;无法加载受信任模块列表，使用空列表&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.trustedHashes </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 验证模块完整性</span></span>
<span class="line"><span style="color:#B392F0;">  verifyModuleIntegrity</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">modulePath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> fileStats</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> statSync</span><span style="color:#E1E4E8;">(modulePath);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> fileBuffer</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> readFileSync</span><span style="color:#E1E4E8;">(modulePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 计算哈希值</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> hash</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createHash</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sha256&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(fileBuffer).</span><span style="color:#B392F0;">digest</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> expectedHash</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.trustedHashes.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(modulePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">expectedHash) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`模块 \${</span><span style="color:#E1E4E8;">modulePath</span><span style="color:#9ECBFF;">} 不在受信任列表中\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (hash </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> expectedHash) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`模块 \${</span><span style="color:#E1E4E8;">modulePath</span><span style="color:#9ECBFF;">} 哈希值不匹配\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 模块 \${</span><span style="color:#E1E4E8;">modulePath</span><span style="color:#9ECBFF;">} 验证成功\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`模块验证失败:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 安全加载模块</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadSecureModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">modulePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">fallbackImplementation</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在生产环境中验证模块完整性</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> isVerified</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">verifyModuleIntegrity</span><span style="color:#E1E4E8;">(modulePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isVerified) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`⚠️ 模块验证失败，使用回退实现\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (fallbackImplementation) {</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> fallbackImplementation;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`模块验证失败且无回退实现\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 动态导入模块</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> module</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> import</span><span style="color:#E1E4E8;">(modulePath);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> module</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`模块加载失败:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (fallbackImplementation) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> fallbackImplementation;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 添加新的受信任模块</span></span>
<span class="line"><span style="color:#B392F0;">  addTrustedModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">modulePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">expectedHash</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">expectedHash) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> fileBuffer</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> readFileSync</span><span style="color:#E1E4E8;">(modulePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">      expectedHash </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> createHash</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sha256&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(fileBuffer).</span><span style="color:#B392F0;">digest</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.trustedHashes.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(modulePath, expectedHash);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 更新受信任模块文件</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">saveTrustedHashes</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  saveTrustedHashes</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hashesObject</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">fromEntries</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.trustedHashes);</span></span>
<span class="line"><span style="color:#B392F0;">    writeFileSync</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">      join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;../trusted-modules.json&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#79B8FF;">      JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(hashesObject, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> secureModuleLoader</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SecureModuleLoader</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="进程间通信安全" tabindex="-1">进程间通信安全 <a class="header-anchor" href="#进程间通信安全" aria-label="Permalink to &quot;进程间通信安全&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/secure-ipc.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ipcMain, ipcRenderer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createHash, randomBytes, createCipheriv, createDecipheriv } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;crypto&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SecureIPC</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.sessionKey </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.initialized </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 初始化安全会话</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> initializeSecureSession</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.initialized) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 生成会话密钥</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.sessionKey </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> randomBytes</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> ipcMain </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;undefined&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 主进程：等待渲染进程连接</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupMainProcessSecurity</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 渲染进程：请求会话密钥</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupRendererProcessSecurity</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.initialized </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupMainProcessSecurity</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;secure-session-request&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 验证渲染进程来源</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> senderUrl</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> URL</span><span style="color:#E1E4E8;">(event.senderFrame.url);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (senderUrl.origin </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;file://&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">senderUrl.hostname.</span><span style="color:#B392F0;">endsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.trusted.com&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        event.senderFrame.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;secure-session-error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;未授权的来源&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 发送加密的会话密钥</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">encryptData</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.sessionKey.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> setupRendererProcessSecurity</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> encryptedKey</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;secure-session-request&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> decryptedKey</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">decryptData</span><span style="color:#E1E4E8;">(encryptedKey);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.sessionKey </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(decryptedKey, </span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 安全会话已建立&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;安全会话建立失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 加密数据</span></span>
<span class="line"><span style="color:#B392F0;">  encryptData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> iv</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> randomBytes</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cipher</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createCipheriv</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aes-256-gcm&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.sessionKey, iv);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> encrypted </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(data), </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    encrypted </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">final</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> authTag</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">getAuthTag</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      iv: iv.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: encrypted,</span></span>
<span class="line"><span style="color:#E1E4E8;">      authTag: authTag.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 解密数据</span></span>
<span class="line"><span style="color:#B392F0;">  decryptData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">encryptedData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">iv</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">authTag</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> encryptedData;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> decipher</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createDecipheriv</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;aes-256-gcm&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.sessionKey, </span></span>
<span class="line"><span style="color:#E1E4E8;">      Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(iv, </span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    decipher.</span><span style="color:#B392F0;">setAuthTag</span><span style="color:#E1E4E8;">(Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(authTag, </span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> decrypted </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> decipher.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(data, </span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    decrypted </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> decipher.</span><span style="color:#B392F0;">final</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(decrypted);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 安全地调用原生函数</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> secureNativeCall</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureInitialized</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> request</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      module: moduleName,</span></span>
<span class="line"><span style="color:#E1E4E8;">      function: functionName,</span></span>
<span class="line"><span style="color:#E1E4E8;">      args: args,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      nonce: </span><span style="color:#B392F0;">randomBytes</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 加密请求</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> encryptedRequest</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">encryptData</span><span style="color:#E1E4E8;">(request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 通过安全的 IPC 发送请求</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> encryptedResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;secure-native-call&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        encryptedRequest</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 解密响应</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">decryptData</span><span style="color:#E1E4E8;">(encryptedResponse);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (response.error) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(response.error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> response.result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`安全原生调用失败 [\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">}]:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> ensureInitialized</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.initialized) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initializeSecureSession</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> secureIPC</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SecureIPC</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><p>通过系统化的架构设计和严格的安全实践，C++/Rust/NAPI 与 Electron 的集成能够为桌面应用带来显著的性能提升和功能扩展，同时确保应用的稳定性和安全性。</p>`,49)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
