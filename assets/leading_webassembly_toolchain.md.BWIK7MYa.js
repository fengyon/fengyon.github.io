import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"WASM 工具链","description":"","frontmatter":{},"headers":[{"level":2,"title":"工具链概述","slug":"工具链概述","link":"#工具链概述","children":[]},{"level":2,"title":"核心编译工具","slug":"核心编译工具","link":"#核心编译工具","children":[{"level":3,"title":"Emscripten","slug":"emscripten","link":"#emscripten","children":[]},{"level":3,"title":"Rust WASM 工具链","slug":"rust-wasm-工具链","link":"#rust-wasm-工具链","children":[]},{"level":3,"title":"多语言工具链支持","slug":"多语言工具链支持","link":"#多语言工具链支持","children":[]}]},{"level":2,"title":"运行时与虚拟机","slug":"运行时与虚拟机","link":"#运行时与虚拟机","children":[{"level":3,"title":"WasmEdge","slug":"wasmedge","link":"#wasmedge","children":[]},{"level":3,"title":"浏览器运行时","slug":"浏览器运行时","link":"#浏览器运行时","children":[]}]},{"level":2,"title":"辅助开发工具","slug":"辅助开发工具","link":"#辅助开发工具","children":[{"level":3,"title":"WABT (WebAssembly Binary Toolkit)","slug":"wabt-webassembly-binary-toolkit","link":"#wabt-webassembly-binary-toolkit","children":[]},{"level":3,"title":"二进制分析工具","slug":"二进制分析工具","link":"#二进制分析工具","children":[]}]},{"level":2,"title":"调试与测试工具","slug":"调试与测试工具","link":"#调试与测试工具","children":[{"level":3,"title":"调试支持","slug":"调试支持","link":"#调试支持","children":[]},{"level":3,"title":"模糊测试工具","slug":"模糊测试工具","link":"#模糊测试工具","children":[]}]},{"level":2,"title":"高级工具链特性","slug":"高级工具链特性","link":"#高级工具链特性","children":[{"level":3,"title":"LLVM 集成","slug":"llvm-集成","link":"#llvm-集成","children":[]},{"level":3,"title":"跨语言互操作","slug":"跨语言互操作","link":"#跨语言互操作","children":[]}]},{"level":2,"title":"性能优化工具","slug":"性能优化工具","link":"#性能优化工具","children":[{"level":3,"title":"性能分析","slug":"性能分析","link":"#性能分析","children":[]}]}],"relativePath":"leading/webassembly/toolchain.md","filePath":"leading/webassembly/toolchain.md"}'),o={name:"leading/webassembly/toolchain.md"};function e(c,s,t,r,E,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /leading/webassembly/toolchain.md for this page in Markdown format</div><h1 id="wasm-工具链" tabindex="-1">WASM 工具链 <a class="header-anchor" href="#wasm-工具链" aria-label="Permalink to &quot;WASM 工具链&quot;">​</a></h1><h2 id="工具链概述" tabindex="-1">工具链概述 <a class="header-anchor" href="#工具链概述" aria-label="Permalink to &quot;工具链概述&quot;">​</a></h2><p>WebAssembly 工具链是一套完整的编译、构建和调试工具集合，它将各种编程语言源代码转换为可在 WebAssembly 虚拟机中执行的二进制格式。工具链的设计遵循模块化原则，支持多语言输入和多样化输出目标。</p><p><strong>核心工具链流程：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>高级语言代码 (C/C++/Rust/等)</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>    [语言特定编译器]</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>    LLVM 中间表示 (IR)</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>  [WASM 后端代码生成]</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>   .wasm 二进制模块</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>  [运行时加载与执行]</span></span></code></pre></div><h2 id="核心编译工具" tabindex="-1">核心编译工具 <a class="header-anchor" href="#核心编译工具" aria-label="Permalink to &quot;核心编译工具&quot;">​</a></h2><h3 id="emscripten" tabindex="-1">Emscripten <a class="header-anchor" href="#emscripten" aria-label="Permalink to &quot;Emscripten&quot;">​</a></h3><p>Emscripten 是基于 LLVM 的完整工具链，专门用于将 C/C++ 代码编译为 WebAssembly。它提供了丰富的系统库支持和 JavaScript 胶水代码生成。</p><h4 id="安装与配置" tabindex="-1">安装与配置 <a class="header-anchor" href="#安装与配置" aria-label="Permalink to &quot;安装与配置&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 获取 emsdk</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#9ECBFF;"> clone</span><span style="color:#9ECBFF;"> https://github.com/emscripten-core/emsdk.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#9ECBFF;"> emsdk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装最新工具链</span></span>
<span class="line"><span style="color:#B392F0;">./emsdk</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> latest</span></span>
<span class="line"><span style="color:#B392F0;">./emsdk</span><span style="color:#9ECBFF;"> activate</span><span style="color:#9ECBFF;"> latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置环境变量</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#9ECBFF;"> ./emsdk_env.sh</span></span></code></pre></div><h4 id="核心-api-与使用" tabindex="-1">核心 API 与使用 <a class="header-anchor" href="#核心-api-与使用" aria-label="Permalink to &quot;核心 API 与使用&quot;">​</a></h4><p>Emscripten 提供了多种与 JavaScript 环境交互的 API：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;emscripten.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导出函数供 JavaScript 调用</span></span>
<span class="line"><span style="color:#E1E4E8;">EMSCRIPTEN_KEEPALIVE</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> add</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> a</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 Emscripten 的文件系统 API</span></span>
<span class="line"><span style="color:#E1E4E8;">EMSCRIPTEN_KEEPALIVE</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#B392F0;"> process_file</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    FILE</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> file </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> fopen</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;data.txt&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;r&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (file) {</span></span>
<span class="line"><span style="color:#F97583;">        char</span><span style="color:#FFAB70;"> buffer</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#B392F0;">        fgets</span><span style="color:#E1E4E8;">(buffer, </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(buffer), file);</span></span>
<span class="line"><span style="color:#B392F0;">        printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;文件内容: </span><span style="color:#79B8FF;">%s\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, buffer);</span></span>
<span class="line"><span style="color:#B392F0;">        fclose</span><span style="color:#E1E4E8;">(file);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 异步 JavaScript 交互</span></span>
<span class="line"><span style="color:#E1E4E8;">EMSCRIPTEN_KEEPALIVE</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#B392F0;"> async_operation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 通过 EM_ASM 直接执行 JavaScript 代码</span></span>
<span class="line"><span style="color:#B392F0;">    EM_ASM</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;从 WASM 中调用 JavaScript&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">        fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/data&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(response </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(data </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data));</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">    printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Emscripten 应用已启动</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h4 id="编译命令示例" tabindex="-1">编译命令示例 <a class="header-anchor" href="#编译命令示例" aria-label="Permalink to &quot;编译命令示例&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 基础编译为 HTML</span></span>
<span class="line"><span style="color:#B392F0;">emcc</span><span style="color:#9ECBFF;"> main.c</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> index.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅生成 WASM 和 JavaScript 胶水代码</span></span>
<span class="line"><span style="color:#B392F0;">emcc</span><span style="color:#9ECBFF;"> main.c</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> main.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 优化级别选择</span></span>
<span class="line"><span style="color:#B392F0;">emcc</span><span style="color:#9ECBFF;"> main.c</span><span style="color:#79B8FF;"> -O3</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> main.js</span><span style="color:#6A737D;">           # 最高优化级别</span></span>
<span class="line"><span style="color:#B392F0;">emcc</span><span style="color:#9ECBFF;"> main.c</span><span style="color:#79B8FF;"> -Os</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> main.js</span><span style="color:#6A737D;">           # 体积优先优化</span></span>
<span class="line"><span style="color:#B392F0;">emcc</span><span style="color:#9ECBFF;"> main.c</span><span style="color:#79B8FF;"> -s</span><span style="color:#9ECBFF;"> WASM=</span><span style="color:#79B8FF;">1</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> main.js</span><span style="color:#6A737D;">     # 仅生成 WASM</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启用文件系统支持</span></span>
<span class="line"><span style="color:#B392F0;">emcc</span><span style="color:#9ECBFF;"> main.c</span><span style="color:#79B8FF;"> -s</span><span style="color:#9ECBFF;"> FORCE_FILESYSTEM=</span><span style="color:#79B8FF;">1</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> main.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 导出函数列表</span></span>
<span class="line"><span style="color:#B392F0;">emcc</span><span style="color:#9ECBFF;"> main.c</span><span style="color:#79B8FF;"> -s</span><span style="color:#9ECBFF;"> EXPORTED_FUNCTIONS=&#39;[&quot;_add&quot;, &quot;_process_file&quot;]&#39;</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> main.js</span></span></code></pre></div><h3 id="rust-wasm-工具链" tabindex="-1">Rust WASM 工具链 <a class="header-anchor" href="#rust-wasm-工具链" aria-label="Permalink to &quot;Rust WASM 工具链&quot;">​</a></h3><p>Rust 语言对 WebAssembly 提供了原生支持，通过 wasm-pack 等工具可以高效地编译为 WASM 模块。</p><h4 id="工具链安装" tabindex="-1">工具链安装 <a class="header-anchor" href="#工具链安装" aria-label="Permalink to &quot;工具链安装&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 安装 Rust WASM 目标</span></span>
<span class="line"><span style="color:#B392F0;">rustup</span><span style="color:#9ECBFF;"> target</span><span style="color:#9ECBFF;"> add</span><span style="color:#9ECBFF;"> wasm32-unknown-unknown</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装 wasm-pack</span></span>
<span class="line"><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> https://rustwasm.github.io/wasm-pack/installer/init.sh</span><span style="color:#79B8FF;"> -sSf</span><span style="color:#F97583;"> |</span><span style="color:#B392F0;"> sh</span></span></code></pre></div><h4 id="cargo-配置与代码示例" tabindex="-1">Cargo 配置与代码示例 <a class="header-anchor" href="#cargo-配置与代码示例" aria-label="Permalink to &quot;Cargo 配置与代码示例&quot;">​</a></h4><p>在 <code>Cargo.toml</code> 中添加依赖：</p><div class="language-toml"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">package</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">name = </span><span style="color:#9ECBFF;">&quot;rust-wasm-example&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">version = </span><span style="color:#9ECBFF;">&quot;0.1.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">edition = </span><span style="color:#9ECBFF;">&quot;2021&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">lib</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">crate-type = [</span><span style="color:#9ECBFF;">&quot;cdylib&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">dependencies</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">wasm-bindgen = </span><span style="color:#9ECBFF;">&quot;0.2&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">dependencies</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">web-sys</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">version = </span><span style="color:#9ECBFF;">&quot;0.3&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">features = [</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;Document&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;Element&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;HtmlElement&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;Window&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;Console&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre></div><p>Rust 源代码实现：</p><div class="language-rust"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#B392F0;"> wasm_bindgen</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">prelude</span><span style="color:#F97583;">::*</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#B392F0;"> web_sys</span><span style="color:#F97583;">::</span><span style="color:#E1E4E8;">console;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 wasm_bindgen 宏导出函数</span></span>
<span class="line"><span style="color:#E1E4E8;">#[wasm_bindgen]</span></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#F97583;"> struct</span><span style="color:#B392F0;"> Calculator</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    value</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> i32</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">#[wasm_bindgen]</span></span>
<span class="line"><span style="color:#F97583;">impl</span><span style="color:#B392F0;"> Calculator</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    #[wasm_bindgen(constructor)]</span></span>
<span class="line"><span style="color:#F97583;">    pub</span><span style="color:#F97583;"> fn</span><span style="color:#B392F0;"> new</span><span style="color:#E1E4E8;">(initial_value</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> i32</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;"> Calculator</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        Calculator</span><span style="color:#E1E4E8;"> { value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> initial_value }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    #[wasm_bindgen]</span></span>
<span class="line"><span style="color:#F97583;">    pub</span><span style="color:#F97583;"> fn</span><span style="color:#B392F0;"> add</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;mut</span><span style="color:#79B8FF;"> self</span><span style="color:#E1E4E8;">, n</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> i32</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;"> i32</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        self</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">value </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#B392F0;">        console</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">log_1</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#B392F0;">format!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;计算器当前值: {}&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">self</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">value)</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">into</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#79B8FF;">        self</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">value</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    #[wasm_bindgen]</span></span>
<span class="line"><span style="color:#F97583;">    pub</span><span style="color:#F97583;"> fn</span><span style="color:#B392F0;"> get_value</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;"> i32</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        self</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">value</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 直接导出函数</span></span>
<span class="line"><span style="color:#E1E4E8;">#[wasm_bindgen]</span></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#F97583;"> fn</span><span style="color:#B392F0;"> greet</span><span style="color:#E1E4E8;">(name</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> &amp;</span><span style="color:#B392F0;">str</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;"> String</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    format!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Hello, {}!&quot;</span><span style="color:#E1E4E8;">, name)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理复杂数据类型</span></span>
<span class="line"><span style="color:#E1E4E8;">#[wasm_bindgen]</span></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#F97583;"> fn</span><span style="color:#B392F0;"> process_array</span><span style="color:#E1E4E8;">(data</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> &amp;</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">i32</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;"> Vec</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">i32</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">iter</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">x</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h4 id="构建命令" tabindex="-1">构建命令 <a class="header-anchor" href="#构建命令" aria-label="Permalink to &quot;构建命令&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 使用 wasm-pack 构建</span></span>
<span class="line"><span style="color:#B392F0;">wasm-pack</span><span style="color:#9ECBFF;"> build</span><span style="color:#79B8FF;"> --target</span><span style="color:#9ECBFF;"> web</span><span style="color:#79B8FF;"> --release</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用 cargo 直接构建</span></span>
<span class="line"><span style="color:#B392F0;">cargo</span><span style="color:#9ECBFF;"> build</span><span style="color:#79B8FF;"> --target</span><span style="color:#9ECBFF;"> wasm32-unknown-unknown</span><span style="color:#79B8FF;"> --release</span></span></code></pre></div><h3 id="多语言工具链支持" tabindex="-1">多语言工具链支持 <a class="header-anchor" href="#多语言工具链支持" aria-label="Permalink to &quot;多语言工具链支持&quot;">​</a></h3><p>除了 C/C++ 和 Rust，WebAssembly 工具链还支持多种编程语言：</p><p><strong>Ruby 工具链示例 (Ruvy)：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 使用 Ruvy 将 Ruby 编译为 WASM</span></span>
<span class="line"><span style="color:#B392F0;">cargo</span><span style="color:#9ECBFF;"> run</span><span style="color:#79B8FF;"> --package=cli</span><span style="color:#9ECBFF;"> ruby_examples/hello_world.rb</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> index.wasm</span></span></code></pre></div><p>Ruvy 利用 wasi-vfs 将 Ruby 解释器和源文件打包到单个 WASM 模块中，提升了性能并简化了部署。</p><h2 id="运行时与虚拟机" tabindex="-1">运行时与虚拟机 <a class="header-anchor" href="#运行时与虚拟机" aria-label="Permalink to &quot;运行时与虚拟机&quot;">​</a></h2><h3 id="wasmedge" tabindex="-1">WasmEdge <a class="header-anchor" href="#wasmedge" aria-label="Permalink to &quot;WasmEdge&quot;">​</a></h3><p>WasmEdge 是一个高性能的 WebAssembly 运行时，支持服务器端和边缘计算场景。它提供了丰富的插件系统扩展功能。</p><h4 id="插件架构" tabindex="-1">插件架构 <a class="header-anchor" href="#插件架构" aria-label="Permalink to &quot;插件架构&quot;">​</a></h4><p>WasmEdge 的插件系统提供了多种扩展功能：</p><p><strong>插件启用示例：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 构建带有 TensorFlow 插件的 WasmEdge</span></span>
<span class="line"><span style="color:#B392F0;">cmake</span><span style="color:#79B8FF;"> -DCMAKE_BUILD_TYPE=Release</span><span style="color:#79B8FF;"> -DWASMEDGE_PLUGIN_TENSORFLOW=ON</span><span style="color:#9ECBFF;"> ..</span></span>
<span class="line"><span style="color:#B392F0;">make</span><span style="color:#79B8FF;"> -j</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启用 WASI-NN 插件用于机器学习推理</span></span>
<span class="line"><span style="color:#B392F0;">wasmedge</span><span style="color:#79B8FF;"> --enable-nn</span><span style="color:#9ECBFF;"> ./ml_model.wasm</span></span></code></pre></div><h4 id="集成使用示例" tabindex="-1">集成使用示例 <a class="header-anchor" href="#集成使用示例" aria-label="Permalink to &quot;集成使用示例&quot;">​</a></h4><div class="language-rust"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#B392F0;"> wasmedge_sdk</span><span style="color:#F97583;">::</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#B392F0;">    config</span><span style="color:#F97583;">::</span><span style="color:#E1E4E8;">{</span><span style="color:#B392F0;">CommonConfigOptions</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">ConfigBuilder</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    params,</span></span>
<span class="line"><span style="color:#B392F0;">    plugin</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">PluginManager</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">    Executor</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">ImportObjectBuilder</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">WasmVal</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建 WasmEdge 执行环境</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> config </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> ConfigBuilder</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">CommonConfigOptions</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">bulk_memory_operations</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#F97583;">    .</span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">    .</span><span style="color:#B392F0;">unwrap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#F97583;"> mut</span><span style="color:#E1E4E8;"> executor </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> Executor</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Some</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">config), </span><span style="color:#B392F0;">None</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#F97583;"> mut</span><span style="color:#E1E4E8;"> store </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> Store</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 加载 WASM 模块</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> module </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> wasmedge_sdk</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">Module</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">from_file</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Some</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">config), </span><span style="color:#9ECBFF;">&quot;app.wasm&quot;</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 注册模块并执行</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> instance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> store</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">register_named_module</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;mut</span><span style="color:#E1E4E8;"> executor, </span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">module)</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 调用导出函数</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> instance</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">func</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;add&quot;</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;mut</span><span style="color:#E1E4E8;"> executor, </span><span style="color:#B392F0;">params!</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">))</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;计算结果: {:?}&quot;</span><span style="color:#E1E4E8;">, result);</span></span></code></pre></div><h3 id="浏览器运行时" tabindex="-1">浏览器运行时 <a class="header-anchor" href="#浏览器运行时" aria-label="Permalink to &quot;浏览器运行时&quot;">​</a></h3><p>现代浏览器内置了 WebAssembly 运行时，通过 JavaScript API 进行交互：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 流式实例化 WASM 模块</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> loadWASMModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">importObject</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">instance</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> WebAssembly.</span><span style="color:#B392F0;">instantiateStreaming</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            response, </span></span>
<span class="line"><span style="color:#E1E4E8;">            importObject</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> instance;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 回退到缓冲方式</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> bytes</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">arrayBuffer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">instance</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> WebAssembly.</span><span style="color:#B392F0;">instantiate</span><span style="color:#E1E4E8;">(bytes, importObject);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> instance;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建内存共享环境</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> memory</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> WebAssembly.</span><span style="color:#B392F0;">Memory</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">    initial: </span><span style="color:#79B8FF;">256</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    maximum: </span><span style="color:#79B8FF;">65536</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> importObject</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    env: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        memory,</span></span>
<span class="line"><span style="color:#B392F0;">        abort</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">line</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">column</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM 异常: \${</span><span style="color:#E1E4E8;">msg</span><span style="color:#9ECBFF;">} at \${</span><span style="color:#E1E4E8;">file</span><span style="color:#9ECBFF;">}:\${</span><span style="color:#E1E4E8;">line</span><span style="color:#9ECBFF;">}:\${</span><span style="color:#E1E4E8;">column</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    wasi_snapshot_preview1: {</span></span>
<span class="line"><span style="color:#6A737D;">        // WASI 系统调用接口</span></span>
<span class="line"><span style="color:#B392F0;">        proc_exit</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`WASM 程序退出，代码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#B392F0;">loadWASMModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;calculator.wasm&#39;</span><span style="color:#E1E4E8;">, importObject)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">instance</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> calculator</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> instance.exports;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> calculator.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`计算结果: \${</span><span style="color:#E1E4E8;">result</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span></code></pre></div><h2 id="辅助开发工具" tabindex="-1">辅助开发工具 <a class="header-anchor" href="#辅助开发工具" aria-label="Permalink to &quot;辅助开发工具&quot;">​</a></h2><h3 id="wabt-webassembly-binary-toolkit" tabindex="-1">WABT (WebAssembly Binary Toolkit) <a class="header-anchor" href="#wabt-webassembly-binary-toolkit" aria-label="Permalink to &quot;WABT (WebAssembly Binary Toolkit)&quot;">​</a></h3><p>WABT 是一套用于处理 WebAssembly 二进制文件的工具集，包括反汇编、验证和格式转换等功能。</p><p><strong>工具链组成：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>.wasm 二进制文件</span></span>
<span class="line"><span>    ↓ wasm2wat    ← 反汇编为文本格式</span></span>
<span class="line"><span>.wat 文本文件</span></span>
<span class="line"><span>    ↓ wat2wasm    ← 重新汇编为二进制</span></span>
<span class="line"><span>.wasm 二进制文件</span></span>
<span class="line"><span>    ↓ wasm-objdump ← 分析模块结构</span></span>
<span class="line"><span>模块结构信息</span></span></code></pre></div><h4 id="常用命令示例" tabindex="-1">常用命令示例 <a class="header-anchor" href="#常用命令示例" aria-label="Permalink to &quot;常用命令示例&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 将 WASM 反汇编为可读的文本格式</span></span>
<span class="line"><span style="color:#B392F0;">wasm2wat</span><span style="color:#9ECBFF;"> module.wasm</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> module.wat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将 WAT 文本格式汇编为 WASM</span></span>
<span class="line"><span style="color:#B392F0;">wat2wasm</span><span style="color:#9ECBFF;"> module.wat</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> module.wasm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 分析 WASM 模块信息</span></span>
<span class="line"><span style="color:#B392F0;">wasm-objdump</span><span style="color:#79B8FF;"> -x</span><span style="color:#9ECBFF;"> module.wasm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 验证 WASM 模块有效性</span></span>
<span class="line"><span style="color:#B392F0;">wasm-validate</span><span style="color:#9ECBFF;"> module.wasm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 剥离调试信息</span></span>
<span class="line"><span style="color:#B392F0;">wasm-strip</span><span style="color:#9ECBFF;"> module.wasm</span></span></code></pre></div><h3 id="二进制分析工具" tabindex="-1">二进制分析工具 <a class="header-anchor" href="#二进制分析工具" aria-label="Permalink to &quot;二进制分析工具&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 使用 WebAssembly JavaScript API 分析模块</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> analyzeModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">wasmUrl</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(wasmUrl);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> buffer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">arrayBuffer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> module</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> WebAssembly.</span><span style="color:#B392F0;">compile</span><span style="color:#E1E4E8;">(buffer);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 获取模块自定义段信息</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sections</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> WebAssembly.Module.</span><span style="color:#B392F0;">customSections</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;自定义段:&quot;</span><span style="color:#E1E4E8;">, sections);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 分析导入/导出</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> imports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> WebAssembly.Module.</span><span style="color:#B392F0;">imports</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> WebAssembly.Module.</span><span style="color:#B392F0;">exports</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;导入声明:&quot;</span><span style="color:#E1E4E8;">, imports);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;导出声明:&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { imports, exports, sections };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="调试与测试工具" tabindex="-1">调试与测试工具 <a class="header-anchor" href="#调试与测试工具" aria-label="Permalink to &quot;调试与测试工具&quot;">​</a></h2><h3 id="调试支持" tabindex="-1">调试支持 <a class="header-anchor" href="#调试支持" aria-label="Permalink to &quot;调试支持&quot;">​</a></h3><p>现代 WebAssembly 工具链提供了完善的调试支持：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 使用 Emscripten 生成调试信息</span></span>
<span class="line"><span style="color:#B392F0;">emcc</span><span style="color:#79B8FF;"> -g4</span><span style="color:#9ECBFF;"> main.c</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> main.js</span><span style="color:#6A737D;">    # 包含完整调试信息</span></span>
<span class="line"><span style="color:#B392F0;">emcc</span><span style="color:#79B8FF;"> -gsource-map</span><span style="color:#9ECBFF;"> main.c</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> main.js</span><span style="color:#6A737D;">  # 生成源映射</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在浏览器开发者工具中调试</span></span>
<span class="line"><span style="color:#6A737D;"># 设置断点并单步执行 WASM 代码</span></span></code></pre></div><h3 id="模糊测试工具" tabindex="-1">模糊测试工具 <a class="header-anchor" href="#模糊测试工具" aria-label="Permalink to &quot;模糊测试工具&quot;">​</a></h3><p>WasmFuzzer 是针对 WebAssembly 虚拟机的专用模糊测试工具，支持对 WASM 模块进行自动化测试和漏洞发现。</p><p><strong>WasmFuzzer 架构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始 WASM 种子模块</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>[变异引擎] ← 多种变异策略</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>变异后的 WASM 模块</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>[WASM 虚拟机执行]</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>覆盖率分析 &amp; 崩溃检测</span></span></code></pre></div><h4 id="测试集成示例" tabindex="-1">测试集成示例 <a class="header-anchor" href="#测试集成示例" aria-label="Permalink to &quot;测试集成示例&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 简单的 WASM 模块测试框架</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> WASMTestRunner</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.modules </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.testCases </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> loadTestModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> instance</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> loadWASMModule</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, instance);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> instance;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    addTestCase</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">inputs</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">expected</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.testCases.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            moduleName,</span></span>
<span class="line"><span style="color:#E1E4E8;">            functionName,</span></span>
<span class="line"><span style="color:#E1E4E8;">            inputs,</span></span>
<span class="line"><span style="color:#E1E4E8;">            expected</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    runTests</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> testCase</span><span style="color:#F97583;"> of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.testCases) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> module</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(testCase.moduleName);</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> func</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">[testCase.functionName];</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> func</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">testCase.inputs);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> passed</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> testCase.expected;</span></span>
<span class="line"><span style="color:#E1E4E8;">            results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                testCase,</span></span>
<span class="line"><span style="color:#E1E4E8;">                result,</span></span>
<span class="line"><span style="color:#E1E4E8;">                passed</span></span>
<span class="line"><span style="color:#E1E4E8;">            });</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`测试 \${</span><span style="color:#E1E4E8;">testCase</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">passed</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;通过&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;失败&#39;}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> runner</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WASMTestRunner</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> runner.</span><span style="color:#B392F0;">loadTestModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;math&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;math_ops.wasm&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">runner.</span><span style="color:#B392F0;">addTestCase</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;math&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;add&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">runner.</span><span style="color:#B392F0;">runTests</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="高级工具链特性" tabindex="-1">高级工具链特性 <a class="header-anchor" href="#高级工具链特性" aria-label="Permalink to &quot;高级工具链特性&quot;">​</a></h2><h3 id="llvm-集成" tabindex="-1">LLVM 集成 <a class="header-anchor" href="#llvm-集成" aria-label="Permalink to &quot;LLVM 集成&quot;">​</a></h3><p>WebAssembly 工具链深度集成 LLVM 优化框架，提供先进的代码优化能力。</p><p><strong>优化流程示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>LLVM IR 中间表示</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>[LLVM 优化管道]</span></span>
<span class="line"><span>    ├── 死代码消除 (DCE)</span></span>
<span class="line"><span>    ├── 函数内联</span></span>
<span class="line"><span>    ├── 常量传播  </span></span>
<span class="line"><span>    ├── 全局优化</span></span>
<span class="line"><span>    └── 指令选择</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>优化后的 WASM 代码</span></span></code></pre></div><h3 id="跨语言互操作" tabindex="-1">跨语言互操作 <a class="header-anchor" href="#跨语言互操作" aria-label="Permalink to &quot;跨语言互操作&quot;">​</a></h3><p>现代 WASM 工具链支持复杂的跨语言调用场景：</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// C++ 代码调用 JavaScript 函数</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;emscripten.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;string&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">extern</span><span style="color:#9ECBFF;"> &quot;C&quot;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 从 JavaScript 导入函数</span></span>
<span class="line"><span style="color:#F97583;">    extern</span><span style="color:#F97583;"> int</span><span style="color:#B392F0;"> js_add</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> a</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> b</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    extern</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> js_log_message</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">const</span><span style="color:#F97583;"> char*</span><span style="color:#FFAB70;"> message</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">EMSCRIPTEN_KEEPALIVE</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#B392F0;"> process_data</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">const</span><span style="color:#F97583;"> char*</span><span style="color:#FFAB70;"> input</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 调用 JavaScript 函数</span></span>
<span class="line"><span style="color:#F97583;">    int</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> js_add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    std</span><span style="color:#E1E4E8;">::string message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;处理结果: &quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    message </span><span style="color:#F97583;">+=</span><span style="color:#B392F0;"> std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">to_string</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 记录日志到 JavaScript 控制台</span></span>
<span class="line"><span style="color:#B392F0;">    js_log_message</span><span style="color:#E1E4E8;">(message.</span><span style="color:#B392F0;">c_str</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>对应的 JavaScript 胶水代码：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// JavaScript 环境提供导入函数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> importObject</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    env: {</span></span>
<span class="line"><span style="color:#B392F0;">        js_add</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b,</span></span>
<span class="line"><span style="color:#B392F0;">        js_log_message</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">messagePtr</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> UTF8ToString</span><span style="color:#E1E4E8;">(messagePtr);</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WASM 日志:&#39;</span><span style="color:#E1E4E8;">, message);</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        memory: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> WebAssembly.</span><span style="color:#B392F0;">Memory</span><span style="color:#E1E4E8;">({ initial: </span><span style="color:#79B8FF;">256</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="性能优化工具" tabindex="-1">性能优化工具 <a class="header-anchor" href="#性能优化工具" aria-label="Permalink to &quot;性能优化工具&quot;">​</a></h2><h3 id="性能分析" tabindex="-1">性能分析 <a class="header-anchor" href="#性能分析" aria-label="Permalink to &quot;性能分析&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// WASM 性能分析工具函数</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> WASMProfiler</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">instance</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.instance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> instance;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.memory </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> instance.exports.memory;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.performanceMarks </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    startTimer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">operationName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.performanceMarks.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(operationName, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            startTime: performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            memoryUsage: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.memory.buffer.byteLength</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    endTimer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">operationName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> mark</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.performanceMarks.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(operationName);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (mark) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> endTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> endTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> mark.startTime;</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> memoryDelta</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.memory.buffer.byteLength </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> mark.memoryUsage;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`操作 \${</span><span style="color:#E1E4E8;">operationName</span><span style="color:#9ECBFF;">}: </span></span>
<span class="line"><span style="color:#9ECBFF;">                耗时: \${</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms</span></span>
<span class="line"><span style="color:#9ECBFF;">                内存变化: \${</span><span style="color:#E1E4E8;">memoryDelta</span><span style="color:#9ECBFF;">} 字节\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 分析函数调用性能</span></span>
<span class="line"><span style="color:#B392F0;">    profileFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">funcName</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startTimer</span><span style="color:#E1E4E8;">(funcName);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.instance.exports[funcName](</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">endTimer</span><span style="color:#E1E4E8;">(funcName);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>通过这套完整的工具链生态系统，开发者可以高效地构建、优化和部署 WebAssembly 应用，充分利用 WASM 的性能优势和安全特性。</p>`,77)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
