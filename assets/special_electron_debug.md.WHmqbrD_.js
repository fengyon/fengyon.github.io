import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"Electron 调试","description":"","frontmatter":{},"headers":[{"level":2,"title":"调试概述","slug":"调试概述","link":"#调试概述","children":[]},{"level":2,"title":"开发工具配置","slug":"开发工具配置","link":"#开发工具配置","children":[{"level":3,"title":"开发环境搭建","slug":"开发环境搭建","link":"#开发环境搭建","children":[]},{"level":3,"title":"环境变量配置","slug":"环境变量配置","link":"#环境变量配置","children":[]}]},{"level":2,"title":"主进程调试","slug":"主进程调试","link":"#主进程调试","children":[{"level":3,"title":"命令行调试","slug":"命令行调试","link":"#命令行调试","children":[]},{"level":3,"title":"Chrome DevTools 连接","slug":"chrome-devtools-连接","link":"#chrome-devtools-连接","children":[]},{"level":3,"title":"VS Code 调试配置","slug":"vs-code-调试配置","link":"#vs-code-调试配置","children":[]},{"level":3,"title":"程序化调试控制","slug":"程序化调试控制","link":"#程序化调试控制","children":[]}]},{"level":2,"title":"渲染进程调试","slug":"渲染进程调试","link":"#渲染进程调试","children":[{"level":3,"title":"开发者工具集成","slug":"开发者工具集成","link":"#开发者工具集成","children":[]},{"level":3,"title":"渲染进程调试集成","slug":"渲染进程调试集成","link":"#渲染进程调试集成","children":[]}]},{"level":2,"title":"预加载脚本调试","slug":"预加载脚本调试","link":"#预加载脚本调试","children":[{"level":3,"title":"上下文隔离调试","slug":"上下文隔离调试","link":"#上下文隔离调试","children":[]}]},{"level":2,"title":"性能调试与分析","slug":"性能调试与分析","link":"#性能调试与分析","children":[{"level":3,"title":"性能监控集成","slug":"性能监控集成","link":"#性能监控集成","children":[]},{"level":3,"title":"内存泄漏检测","slug":"内存泄漏检测","link":"#内存泄漏检测","children":[]}]},{"level":2,"title":"网络调试","slug":"网络调试","link":"#网络调试","children":[{"level":3,"title":"网络请求监控","slug":"网络请求监控","link":"#网络请求监控","children":[]}]},{"level":2,"title":"调试工具集成","slug":"调试工具集成","link":"#调试工具集成","children":[{"level":3,"title":"综合调试管理器","slug":"综合调试管理器","link":"#综合调试管理器","children":[]},{"level":3,"title":"调试界面集成","slug":"调试界面集成","link":"#调试界面集成","children":[]}]},{"level":2,"title":"生产环境调试","slug":"生产环境调试","link":"#生产环境调试","children":[{"level":3,"title":"远程调试配置","slug":"远程调试配置","link":"#远程调试配置","children":[]}]}],"relativePath":"special/electron/debug.md","filePath":"special/electron/debug.md"}'),o={name:"special/electron/debug.md"};function e(t,s,c,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/electron/debug.md for this page in Markdown format</div><h1 id="electron-调试" tabindex="-1">Electron 调试 <a class="header-anchor" href="#electron-调试" aria-label="Permalink to &quot;Electron 调试&quot;">​</a></h1><h2 id="调试概述" tabindex="-1">调试概述 <a class="header-anchor" href="#调试概述" aria-label="Permalink to &quot;调试概述&quot;">​</a></h2><p>Electron 调试是一个多层次、多进程的复杂过程，涉及<strong>主进程</strong>、<strong>渲染进程</strong>、<strong>预加载脚本</strong>和<strong>原生模块</strong>等多个执行环境。与传统的 Web 应用调试不同，Electron 应用需要同时处理 Node.js 运行时和 Chromium 渲染引擎的调试需求，这要求开发者掌握跨环境调试技术。</p><p>Electron 的特殊架构决定了其调试工作的分布性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>主进程调试 (Node.js 环境)</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>    | IPC 通信跟踪</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>渲染进程调试 (Chromium DevTools)</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>预加载脚本调试 (上下文隔离)</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>原生模块调试 (Native Addons)</span></span></code></pre></div><p>有效的 Electron 调试需要在这些不同层面都具备相应的工具和技术支持。</p><h2 id="开发工具配置" tabindex="-1">开发工具配置 <a class="header-anchor" href="#开发工具配置" aria-label="Permalink to &quot;开发工具配置&quot;">​</a></h2><h3 id="开发环境搭建" tabindex="-1">开发环境搭建 <a class="header-anchor" href="#开发环境搭建" aria-label="Permalink to &quot;开发环境搭建&quot;">​</a></h3><p>配置合适的开发环境是高效调试的基础，需要集成代码编辑器、终端和调试工具。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// package.json - 开发脚本配置</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;electron-app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;start&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;electron .&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;NODE_ENV=development electron .&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;debug&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;electron --inspect=9222 .&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;debug-brk&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;electron --inspect-brk=9222 .&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;devtools&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;electron --remote-debugging-port=8315 .&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;test&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;NODE_ENV=test electron .&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;devDependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;electron&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^22.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;electron-builder&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^23.6.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="环境变量配置" tabindex="-1">环境变量配置 <a class="header-anchor" href="#环境变量配置" aria-label="Permalink to &quot;环境变量配置&quot;">​</a></h3><p>通过环境变量控制调试行为，实现开发和生产环境的差异化配置。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// config/debug-config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { app } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> DebugConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isDevelopment </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isDebug </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">DEBUG</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;true&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isTest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;test&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getDebugOptions</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> baseOptions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      enableDevTools: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDevelopment </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.isDebug,</span></span>
<span class="line"><span style="color:#E1E4E8;">      enableReload: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDevelopment,</span></span>
<span class="line"><span style="color:#E1E4E8;">      enableLogging: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDevelopment </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.isDebug,</span></span>
<span class="line"><span style="color:#E1E4E8;">      enablePerformanceMonitor: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDevelopment</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 开发环境特定的调试选项</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDevelopment) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">baseOptions,</span></span>
<span class="line"><span style="color:#E1E4E8;">        devToolsMode: </span><span style="color:#9ECBFF;">&#39;detach&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        consoleLevel: </span><span style="color:#9ECBFF;">&#39;verbose&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        nodeIntegrationInWorker: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> baseOptions;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupEnvironment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDevelopment) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 设置开发环境变量</span></span>
<span class="line"><span style="color:#E1E4E8;">      process.env.</span><span style="color:#79B8FF;">ELECTRON_IS_DEV</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;1&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      process.env.</span><span style="color:#79B8FF;">ELECTRON_DEBUG</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;true&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 启用更详细的日志</span></span>
<span class="line"><span style="color:#E1E4E8;">      process.env.</span><span style="color:#79B8FF;">DEBUG</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;electron*,node*&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 禁用硬件加速以提高调试性能</span></span>
<span class="line"><span style="color:#E1E4E8;">      app.</span><span style="color:#B392F0;">disableHardwareAcceleration</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> DebugConfig;</span></span></code></pre></div><h2 id="主进程调试" tabindex="-1">主进程调试 <a class="header-anchor" href="#主进程调试" aria-label="Permalink to &quot;主进程调试&quot;">​</a></h2><h3 id="命令行调试" tabindex="-1">命令行调试 <a class="header-anchor" href="#命令行调试" aria-label="Permalink to &quot;命令行调试&quot;">​</a></h3><p>使用 Node.js 内置的调试器通过命令行参数启动 Electron 主进程调试。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 启动调试，在9222端口监听</span></span>
<span class="line"><span style="color:#B392F0;">electron</span><span style="color:#79B8FF;"> --inspect=9222</span><span style="color:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动调试并在第一行中断</span></span>
<span class="line"><span style="color:#B392F0;">electron</span><span style="color:#79B8FF;"> --inspect-brk=9222</span><span style="color:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 指定IP地址进行远程调试</span></span>
<span class="line"><span style="color:#B392F0;">electron</span><span style="color:#79B8FF;"> --inspect=0.0.0.0:9222</span><span style="color:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启用远程调试</span></span>
<span class="line"><span style="color:#B392F0;">electron</span><span style="color:#79B8FF;"> --remote-debugging-port=8315</span><span style="color:#9ECBFF;"> .</span></span></code></pre></div><h3 id="chrome-devtools-连接" tabindex="-1">Chrome DevTools 连接 <a class="header-anchor" href="#chrome-devtools-连接" aria-label="Permalink to &quot;Chrome DevTools 连接&quot;">​</a></h3><p>通过 Chrome 浏览器连接到 Electron 主进程进行调试。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 在 Chrome 地址栏输入：</span></span>
<span class="line"><span style="color:#B392F0;">chrome</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//inspect</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置发现目标</span></span>
<span class="line"><span style="color:#6A737D;">// 添加 localhost:9222 到 Target discovery settings</span></span></code></pre></div><p>调试界面示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Chrome DevTools</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    | 连接到 localhost:9222</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>Electron 主进程</span></span>
<span class="line"><span>    ├── Sources (源代码调试)</span></span>
<span class="line"><span>    ├── Console (控制台输出)</span></span>
<span class="line"><span>    ├── Memory (内存分析)</span></span>
<span class="line"><span>    └── Performance (性能分析)</span></span></code></pre></div><h3 id="vs-code-调试配置" tabindex="-1">VS Code 调试配置 <a class="header-anchor" href="#vs-code-调试配置" aria-label="Permalink to &quot;VS Code 调试配置&quot;">​</a></h3><p>配置 VS Code 的 launch.json 文件实现集成调试体验。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0.2.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;configurations&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Debug Main Process&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;request&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;launch&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;cwd&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;\${workspaceFolder}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;runtimeExecutable&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;\${workspaceFolder}/node_modules/.bin/electron&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;windows&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#79B8FF;">        &quot;runtimeExecutable&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;\${workspaceFolder}/node_modules/.bin/electron.cmd&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;args&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;--remote-debugging-port=9223&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;env&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#79B8FF;">        &quot;NODE_ENV&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;development&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">        &quot;ELECTRON_IS_DEV&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;console&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;integratedTerminal&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;protocol&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;inspector&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;sourceMaps&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;timeout&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20000</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Attach to Main Process&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;request&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;attach&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;port&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">9222</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;timeout&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;localRoot&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;\${workspaceFolder}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;remoteRoot&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;sourceMaps&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Debug Renderer Process&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;chrome&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;request&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;attach&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;port&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">9223</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;webRoot&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;\${workspaceFolder}/src&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;sourceMaps&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;timeout&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20000</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;compounds&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Debug All&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;configurations&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;Debug Main Process&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;Debug Renderer Process&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;stopAll&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="程序化调试控制" tabindex="-1">程序化调试控制 <a class="header-anchor" href="#程序化调试控制" aria-label="Permalink to &quot;程序化调试控制&quot;">​</a></h3><p>在代码中动态控制调试行为，实现条件断点和调试输出。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// debug/main-process-debug.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { app, BrowserWindow } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> util </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;util&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MainProcessDebug</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.debugEnabled </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.breakpoints </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 条件调试输出</span></span>
<span class="line"><span style="color:#B392F0;">  debugLog</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.debugEnabled) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> timestamp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> formattedMessage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> util.</span><span style="color:#B392F0;">format</span><span style="color:#E1E4E8;">(message, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[MAIN \${</span><span style="color:#E1E4E8;">timestamp</span><span style="color:#9ECBFF;">}] \${</span><span style="color:#E1E4E8;">formattedMessage</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 内存使用监控</span></span>
<span class="line"><span style="color:#B392F0;">  logMemoryUsage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">context</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.debugEnabled) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> memoryUsage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">debugLog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Memory Usage %s:&#39;</span><span style="color:#E1E4E8;">, context, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rss: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memoryUsage</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">rss</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        heapTotal: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memoryUsage</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">heapTotal</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        heapUsed: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memoryUsage</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">heapUsed</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        external: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memoryUsage</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">external</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 进程信息监控</span></span>
<span class="line"><span style="color:#B392F0;">  logProcessInfo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.debugEnabled) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">debugLog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Process Info:&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        pid: process.pid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        platform: process.platform,</span></span>
<span class="line"><span style="color:#E1E4E8;">        arch: process.arch,</span></span>
<span class="line"><span style="color:#E1E4E8;">        version: process.version,</span></span>
<span class="line"><span style="color:#E1E4E8;">        electronVersion: process.versions.electron,</span></span>
<span class="line"><span style="color:#E1E4E8;">        chromeVersion: process.versions.chrome</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // IPC 通信跟踪</span></span>
<span class="line"><span style="color:#B392F0;">  setupIPCDebugging</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ipcMain</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.debugEnabled) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> originalHandle</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ipcMain.handle;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">listener</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> originalHandle.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(ipcMain, channel, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[IPC →] \${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> listener</span><span style="color:#E1E4E8;">(event, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[IPC ←] \${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">} (\${</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">}ms)\`</span><span style="color:#E1E4E8;">, result);</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[IPC ✗] \${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">} (\${</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">}ms)\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">          throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 窗口创建调试</span></span>
<span class="line"><span style="color:#B392F0;">  debugWindowCreation</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.debugEnabled) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">debugLog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Creating window:&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      id: window.id,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        width: options.width,</span></span>
<span class="line"><span style="color:#E1E4E8;">        height: options.height,</span></span>
<span class="line"><span style="color:#E1E4E8;">        webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          nodeIntegration: options.webPreferences?.nodeIntegration,</span></span>
<span class="line"><span style="color:#E1E4E8;">          contextIsolation: options.webPreferences?.contextIsolation,</span></span>
<span class="line"><span style="color:#E1E4E8;">          enableRemoteModule: options.webPreferences?.enableRemoteModule</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 监听窗口事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ready-to-show&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">debugLog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Window ready to show:&#39;</span><span style="color:#E1E4E8;">, { id: window.id });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;closed&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">debugLog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Window closed:&#39;</span><span style="color:#E1E4E8;">, { id: window.id });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    window.webContents.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;did-finish-load&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">debugLog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Window finished loading:&#39;</span><span style="color:#E1E4E8;">, { id: window.id });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> MainProcessDebug;</span></span></code></pre></div><h2 id="渲染进程调试" tabindex="-1">渲染进程调试 <a class="header-anchor" href="#渲染进程调试" aria-label="Permalink to &quot;渲染进程调试&quot;">​</a></h2><h3 id="开发者工具集成" tabindex="-1">开发者工具集成 <a class="header-anchor" href="#开发者工具集成" aria-label="Permalink to &quot;开发者工具集成&quot;">​</a></h3><p>在渲染进程中集成开发者工具，支持动态打开和配置。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// debug/renderer-debug.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> RendererDebug</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isDevelopment </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.devToolsOpened </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.consoleHistory </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 初始化渲染进程调试</span></span>
<span class="line"><span style="color:#B392F0;">  initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDevelopment) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupConsoleOverride</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupErrorHandling</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">injectDebugHelpers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 打开开发者工具</span></span>
<span class="line"><span style="color:#B392F0;">  openDevTools</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDevelopment </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.devToolsOpened) {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">remote</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electron&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> currentWindow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> remote.</span><span style="color:#B392F0;">getCurrentWindow</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        currentWindow.webContents.</span><span style="color:#B392F0;">openDevTools</span><span style="color:#E1E4E8;">({ mode: </span><span style="color:#9ECBFF;">&#39;detach&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.devToolsOpened </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">debug</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;开发者工具已打开&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;无法打开开发者工具:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 重写 console 方法进行增强</span></span>
<span class="line"><span style="color:#B392F0;">  setupConsoleOverride</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> originalConsole</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      log: console.log,</span></span>
<span class="line"><span style="color:#E1E4E8;">      error: console.error,</span></span>
<span class="line"><span style="color:#E1E4E8;">      warn: console.warn,</span></span>
<span class="line"><span style="color:#E1E4E8;">      info: console.info,</span></span>
<span class="line"><span style="color:#E1E4E8;">      debug: console.debug</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 重写 console.log</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.consoleHistory.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;log&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        args: args.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">arg</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">safeStringify</span><span style="color:#E1E4E8;">(arg))</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      originalConsole.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 重写 console.error</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.consoleHistory.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        args: args.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">arg</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">safeStringify</span><span style="color:#E1E4E8;">(arg))</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      originalConsole.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 保存原始方法供外部访问</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.originalConsole </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> originalConsole;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 安全序列化对象</span></span>
<span class="line"><span style="color:#B392F0;">  safeStringify</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(obj, (</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">          // 处理循环引用</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (key </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> value.</span><span style="color:#79B8FF;">constructor</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Window&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">              return</span><span style="color:#9ECBFF;"> &#39;[Window]&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (key </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> value.</span><span style="color:#79B8FF;">constructor</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Document&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">              return</span><span style="color:#9ECBFF;"> &#39;[Document]&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#B392F0;"> String</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> \`[Unserializable: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}]\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 设置错误处理</span></span>
<span class="line"><span style="color:#B392F0;">  setupErrorHandling</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;全局错误:&#39;</span><span style="color:#E1E4E8;">, event.error);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logErrorToServer</span><span style="color:#E1E4E8;">(event.error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;unhandledrejection&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;未处理的 Promise 拒绝:&#39;</span><span style="color:#E1E4E8;">, event.reason);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logErrorToServer</span><span style="color:#E1E4E8;">(event.reason);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 重写 window.onerror</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> originalOnError</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.onerror;</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">onerror</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">lineno</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">colno</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;窗口错误:&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        message, source, lineno, colno, error</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (originalOnError) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> originalOnError.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(window, message, source, lineno, colno, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 注入调试辅助函数</span></span>
<span class="line"><span style="color:#B392F0;">  injectDebugHelpers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 全局调试对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.__DEBUG__ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 获取控制台历史</span></span>
<span class="line"><span style="color:#B392F0;">      getConsoleHistory</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.consoleHistory],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 清空控制台历史</span></span>
<span class="line"><span style="color:#B392F0;">      clearConsoleHistory</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.consoleHistory </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 性能测量工具</span></span>
<span class="line"><span style="color:#B392F0;">      measure</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> start</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> fn</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> end</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`⏱️ \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">end</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> start</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 内存快照</span></span>
<span class="line"><span style="color:#B392F0;">      memorySnapshot</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (performance.memory) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> memory</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.memory;</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            used: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">usedJSHeapSize</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1048576</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            total: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">totalJSHeapSize</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1048576</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            limit: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">jsHeapSizeLimit</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1048576</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span></span>
<span class="line"><span style="color:#E1E4E8;">          };</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> &#39;内存信息不可用&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // DOM 元素统计</span></span>
<span class="line"><span style="color:#B392F0;">      domStats</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          elements: document.</span><span style="color:#B392F0;">getElementsByTagName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          nodes: document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          memory: window.performance.memory</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 添加键盘快捷键</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;keydown&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // Ctrl+Shift+I 打开开发者工具</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (event.ctrlKey </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> event.shiftKey </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> event.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;I&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        event.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">openDevTools</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // Ctrl+Shift+L 清空控制台</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (event.ctrlKey </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> event.shiftKey </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> event.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;L&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        event.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 记录错误到服务器（开发环境）</span></span>
<span class="line"><span style="color:#B392F0;">  logErrorToServer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDevelopment) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> errorInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: error.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack: error.stack,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      url: window.location.href,</span></span>
<span class="line"><span style="color:#E1E4E8;">      userAgent: navigator.userAgent</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 在实际应用中，这里可以发送到错误收集服务</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;错误信息:&#39;</span><span style="color:#E1E4E8;">, errorInfo);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> RendererDebug;</span></span></code></pre></div><h3 id="渲染进程调试集成" tabindex="-1">渲染进程调试集成 <a class="header-anchor" href="#渲染进程调试集成" aria-label="Permalink to &quot;渲染进程调试集成&quot;">​</a></h3><p>在主窗口中集成渲染进程调试功能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js - 渲染进程调试集成</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { app, BrowserWindow } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MainProcessDebug </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./debug/main-process-debug.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mainDebug</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MainProcessDebug</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> createWindow</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> mainWindow</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      enableRemoteModule: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#6A737D;">      // 开发环境启用调试功能</span></span>
<span class="line"><span style="color:#E1E4E8;">      devTools: mainDebug.debugEnabled,</span></span>
<span class="line"><span style="color:#E1E4E8;">      webSecurity: </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">mainDebug.debugEnabled </span><span style="color:#6A737D;">// 开发环境禁用web安全以方便调试</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 调试窗口创建</span></span>
<span class="line"><span style="color:#E1E4E8;">  mainDebug.</span><span style="color:#B392F0;">debugWindowCreation</span><span style="color:#E1E4E8;">(mainWindow, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      contextIsolation: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 开发环境自动打开开发者工具</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (mainDebug.debugEnabled) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mainWindow.webContents.</span><span style="color:#B392F0;">openDevTools</span><span style="color:#E1E4E8;">({ mode: </span><span style="color:#9ECBFF;">&#39;detach&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 监听开发者工具事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    mainWindow.webContents.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;devtools-opened&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      mainDebug.</span><span style="color:#B392F0;">debugLog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;开发者工具已打开&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    mainWindow.webContents.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;devtools-closed&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      mainDebug.</span><span style="color:#B392F0;">debugLog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;开发者工具已关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  mainWindow.</span><span style="color:#B392F0;">loadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;index.html&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">whenReady</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  mainDebug.</span><span style="color:#B392F0;">setupEnvironment</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  mainDebug.</span><span style="color:#B392F0;">logProcessInfo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">  createWindow</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="预加载脚本调试" tabindex="-1">预加载脚本调试 <a class="header-anchor" href="#预加载脚本调试" aria-label="Permalink to &quot;预加载脚本调试&quot;">​</a></h2><h3 id="上下文隔离调试" tabindex="-1">上下文隔离调试 <a class="header-anchor" href="#上下文隔离调试" aria-label="Permalink to &quot;上下文隔离调试&quot;">​</a></h3><p>预加载脚本运行在特殊的上下文中，需要特定的调试技术。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// preload.js - 预加载脚本调试</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { contextBridge, ipcRenderer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PreloadDebug</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isDevelopment </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDevelopment) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupPreloadDebugging</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupPreloadDebugging</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 预加载脚本特定的控制台输出</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> originalLog</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> console.log;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      originalLog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[PRELOAD]&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // IPC 通信调试</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">debugIPC</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 错误处理</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupErrorHandling</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  debugIPC</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> originalInvoke</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ipcRenderer.invoke;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[IPC → PRELOAD] \${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> originalInvoke.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(ipcRenderer, channel, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">result</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[IPC ← PRELOAD] \${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, result);</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[IPC ✗ PRELOAD] \${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">          throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 调试事件监听器</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> originalOn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ipcRenderer.on;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcRenderer.</span><span style="color:#B392F0;">on</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">listener</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[IPC ☁ PRELOAD] 监听 \${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> originalOn.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(ipcRenderer, channel, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[IPC ← PRELOAD] \${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#B392F0;"> listener</span><span style="color:#E1E4E8;">(event, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupErrorHandling</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[PRELOAD ERROR]&#39;</span><span style="color:#E1E4E8;">, event.error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 暴露调试工具到渲染进程</span></span>
<span class="line"><span style="color:#E1E4E8;">    contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;preloadDebug&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">      getPreloadInfo</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">        isDevelopment: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDevelopment,</span></span>
<span class="line"><span style="color:#E1E4E8;">        nodeVersion: process.versions.node,</span></span>
<span class="line"><span style="color:#E1E4E8;">        electronVersion: process.versions.electron,</span></span>
<span class="line"><span style="color:#E1E4E8;">        chromeVersion: process.versions.chrome</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#B392F0;">      testIPC</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;debug-test&#39;</span><span style="color:#E1E4E8;">, { test: </span><span style="color:#9ECBFF;">&#39;preload-debug&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化预加载调试</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> PreloadDebug</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 暴露安全的 API 到渲染进程</span></span>
<span class="line"><span style="color:#E1E4E8;">contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electronAPI&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#6A737D;">  // 正常的 API 暴露...</span></span>
<span class="line"><span style="color:#B392F0;">  openFile</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dialog:openFile&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#6A737D;">  // ... 其他 API</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="性能调试与分析" tabindex="-1">性能调试与分析 <a class="header-anchor" href="#性能调试与分析" aria-label="Permalink to &quot;性能调试与分析&quot;">​</a></h2><h3 id="性能监控集成" tabindex="-1">性能监控集成 <a class="header-anchor" href="#性能监控集成" aria-label="Permalink to &quot;性能监控集成&quot;">​</a></h3><p>集成性能监控工具，分析应用性能瓶颈。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// debug/performance-debug.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PerformanceDebug</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.performanceEntries </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.enabled </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 开始性能测量</span></span>
<span class="line"><span style="color:#B392F0;">  startMeasure</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.enabled) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      startTime: performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      startMemory: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getMemoryUsage</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      startHrtime: process.</span><span style="color:#B392F0;">hrtime</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 结束性能测量</span></span>
<span class="line"><span style="color:#B392F0;">  endMeasure</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.enabled </span><span style="color:#F97583;">||</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(name)) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> metric</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> endTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> endTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> metric.startTime;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memoryDiff</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getMemoryUsage</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> performanceEntry</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name,</span></span>
<span class="line"><span style="color:#E1E4E8;">      duration,</span></span>
<span class="line"><span style="color:#E1E4E8;">      context,</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rss: memoryDiff.rss </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> metric.startMemory.rss,</span></span>
<span class="line"><span style="color:#E1E4E8;">        heapUsed: memoryDiff.heapUsed </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> metric.startMemory.heapUsed,</span></span>
<span class="line"><span style="color:#E1E4E8;">        heapTotal: memoryDiff.heapTotal </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> metric.startMemory.heapTotal</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.performanceEntries.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(performanceEntry);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`📊 性能测量 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}:\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      时长: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      内存变化: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">((</span><span style="color:#E1E4E8;">memoryDiff</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">heapUsed</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> metric</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">startMemory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">heapUsed</span><span style="color:#9ECBFF;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      上下文: context</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(name);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> performanceEntry;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取内存使用情况</span></span>
<span class="line"><span style="color:#B392F0;">  getMemoryUsage</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.memoryUsage) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { rss: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, heapTotal: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, heapUsed: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, external: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 自动测量函数性能</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> measureFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startMeasure</span><span style="color:#E1E4E8;">(name);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fn</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">endMeasure</span><span style="color:#E1E4E8;">(name, { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">context, success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">endMeasure</span><span style="color:#E1E4E8;">(name, { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">context, success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message });</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取性能报告</span></span>
<span class="line"><span style="color:#B392F0;">  getPerformanceReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> entries</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.performanceEntries;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> totalDuration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> entries.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">entry</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> entry.duration, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> averageDuration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> totalDuration </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> entries.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> slowest</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> entries.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">slowest</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">entry</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      entry.duration </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> slowest.duration </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> entry </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> slowest, { duration: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> fastest</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> entries.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">fastest</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">entry</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      entry.duration </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> fastest.duration </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> entry </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> fastest, { duration: </span><span style="color:#79B8FF;">Infinity</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      summary: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        totalEntries: entries.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        totalDuration: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">totalDuration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        averageDuration: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">averageDuration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        slowestOperation: slowest.name,</span></span>
<span class="line"><span style="color:#E1E4E8;">        slowestDuration: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">slowest</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fastestOperation: fastest.name,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fastestDuration: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">fastest</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      entries: entries</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 重置性能数据</span></span>
<span class="line"><span style="color:#B392F0;">  reset</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.performanceEntries </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 导出性能数据</span></span>
<span class="line"><span style="color:#B392F0;">  exportData</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      report: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getPerformanceReport</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      rawEntries: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.performanceEntries</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> PerformanceDebug;</span></span></code></pre></div><h3 id="内存泄漏检测" tabindex="-1">内存泄漏检测 <a class="header-anchor" href="#内存泄漏检测" aria-label="Permalink to &quot;内存泄漏检测&quot;">​</a></h3><p>集成内存泄漏检测工具，识别和解决内存问题。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// debug/memory-debug.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MemoryDebug</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.snapshots </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.leakDetectionEnabled </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 创建内存快照</span></span>
<span class="line"><span style="color:#B392F0;">  takeSnapshot</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.leakDetectionEnabled) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (global.gc) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      global.</span><span style="color:#B392F0;">gc</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 强制垃圾回收（需要 --expose-gc 参数）</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> snapshot</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      heapSnapshot: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getHeapInfo</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.snapshots.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, snapshot);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`📸 内存快照 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}:\`</span><span style="color:#E1E4E8;">, snapshot.memory);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> snapshot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取堆信息</span></span>
<span class="line"><span style="color:#B392F0;">  getHeapInfo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memory</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      heapUsed: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">heapUsed</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heapTotal: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">heapTotal</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      rss: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">rss</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 比较快照检测内存泄漏</span></span>
<span class="line"><span style="color:#B392F0;">  compareSnapshots</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">snapshot1Name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">snapshot2Name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> snapshot1</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.snapshots.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(snapshot1Name);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> snapshot2</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.snapshots.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(snapshot2Name);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">snapshot1 </span><span style="color:#F97583;">||</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">snapshot2) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;快照不存在&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memory1</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> snapshot1.memory;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memory2</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> snapshot2.memory;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> diff</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      heapUsed: memory2.heapUsed </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> memory1.heapUsed,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heapTotal: memory2.heapTotal </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> memory1.heapTotal,</span></span>
<span class="line"><span style="color:#E1E4E8;">      rss: memory2.rss </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> memory1.rss,</span></span>
<span class="line"><span style="color:#E1E4E8;">      external: memory2.external </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> memory1.external</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> leaksDetected</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> diff.heapUsed </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 5</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 5MB 阈值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🔍 内存比较 \${</span><span style="color:#E1E4E8;">snapshot1Name</span><span style="color:#9ECBFF;">} → \${</span><span style="color:#E1E4E8;">snapshot2Name</span><span style="color:#9ECBFF;">}:\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      堆使用变化: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">diff</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">heapUsed</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      堆总量变化: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">diff</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">heapTotal</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      RSS变化: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">diff</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">rss</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      检测到泄漏: leaksDetected </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;⚠️ 是&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;✅ 否&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      diff,</span></span>
<span class="line"><span style="color:#E1E4E8;">      leaksDetected,</span></span>
<span class="line"><span style="color:#E1E4E8;">      snapshot1: snapshot1.name,</span></span>
<span class="line"><span style="color:#E1E4E8;">      snapshot2: snapshot2.name</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 自动内存监控</span></span>
<span class="line"><span style="color:#B392F0;">  startAutoMonitoring</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">interval</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 30000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.leakDetectionEnabled) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.monitoringInterval </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> snapshotName</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`auto_\${</span><span style="color:#E1E4E8;">Date</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">now</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">takeSnapshot</span><span style="color:#E1E4E8;">(snapshotName);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 保留最近10个快照</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> autoSnapshots</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.snapshots.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> name.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;auto_&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(([,</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">], [,</span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">(a.timestamp) </span><span style="color:#F97583;">-</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">(b.timestamp));</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (autoSnapshots.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">oldestName</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> autoSnapshots[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.snapshots.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(oldestName);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, interval);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 停止自动监控</span></span>
<span class="line"><span style="color:#B392F0;">  stopAutoMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.monitoringInterval) {</span></span>
<span class="line"><span style="color:#B392F0;">      clearInterval</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.monitoringInterval);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.monitoringInterval </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取内存报告</span></span>
<span class="line"><span style="color:#B392F0;">  getMemoryReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> snapshots</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.snapshots.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentMemory: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getHeapInfo</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      snapshots: snapshots,</span></span>
<span class="line"><span style="color:#E1E4E8;">      snapshotCount: snapshots.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> MemoryDebug;</span></span></code></pre></div><h2 id="网络调试" tabindex="-1">网络调试 <a class="header-anchor" href="#网络调试" aria-label="Permalink to &quot;网络调试&quot;">​</a></h2><h3 id="网络请求监控" tabindex="-1">网络请求监控 <a class="header-anchor" href="#网络请求监控" aria-label="Permalink to &quot;网络请求监控&quot;">​</a></h3><p>监控和分析应用中的网络请求行为。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// debug/network-debug.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> NetworkDebug</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.requests </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.enabled </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 监控 fetch 请求</span></span>
<span class="line"><span style="color:#B392F0;">  monitorFetch</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.enabled) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> originalFetch</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.fetch;</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">fetch</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> requestId</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateRequestId</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.requests.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(requestId, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: requestId,</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: args[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认为 GET</span></span>
<span class="line"><span style="color:#E1E4E8;">        startTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">        status: </span><span style="color:#9ECBFF;">&#39;pending&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> originalFetch</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> endTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> endTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> request</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.requests.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(requestId);</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.endTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> endTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.duration </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> duration;</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> response.ok </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;success&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;error&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.statusCode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> response.status;</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.responseSize </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getResponseSize</span><span style="color:#E1E4E8;">(response);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🌐 网络请求 \${</span><span style="color:#E1E4E8;">requestId</span><span style="color:#9ECBFF;">}:\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          url: request.url,</span></span>
<span class="line"><span style="color:#E1E4E8;">          状态: request.status,</span></span>
<span class="line"><span style="color:#E1E4E8;">          状态码: request.statusCode,</span></span>
<span class="line"><span style="color:#E1E4E8;">          时长: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          大小: request.responseSize</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> response;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> endTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> endTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> request</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.requests.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(requestId);</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.endTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> endTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.duration </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> duration;</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;error&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.error </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> error.message;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🌐 网络请求错误 \${</span><span style="color:#E1E4E8;">requestId</span><span style="color:#9ECBFF;">}:\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          url: request.url,</span></span>
<span class="line"><span style="color:#E1E4E8;">          错误: error.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">          时长: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成请求ID</span></span>
<span class="line"><span style="color:#B392F0;">  generateRequestId</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> \`req_\${</span><span style="color:#E1E4E8;">Date</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">now</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}_\${</span><span style="color:#E1E4E8;">Math</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">random</span><span style="color:#9ECBFF;">().</span><span style="color:#B392F0;">toString</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">36</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">substr</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">, </span><span style="color:#79B8FF;">9</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取响应大小</span></span>
<span class="line"><span style="color:#B392F0;">  getResponseSize</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> contentLength</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> response.headers.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;content-length&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (contentLength) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#B392F0;">parseInt</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">contentLength</span><span style="color:#9ECBFF;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} KB\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;未知&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取网络统计</span></span>
<span class="line"><span style="color:#B392F0;">  getNetworkStats</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> requests</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.requests.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> successful</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> requests.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">req</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> req.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;success&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> failed</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> requests.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">req</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> req.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;error&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> totalDuration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> successful.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> req.duration, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> averageDuration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> successful.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> totalDuration </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> successful.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalRequests: requests.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      successfulRequests: successful.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      failedRequests: failed.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      successRate: requests.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> (successful.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> /</span><span style="color:#E1E4E8;"> requests.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      averageDuration: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">averageDuration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lastRequest: requests[requests.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 清空请求记录</span></span>
<span class="line"><span style="color:#B392F0;">  clearRequests</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.requests.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> NetworkDebug;</span></span></code></pre></div><h2 id="调试工具集成" tabindex="-1">调试工具集成 <a class="header-anchor" href="#调试工具集成" aria-label="Permalink to &quot;调试工具集成&quot;">​</a></h2><h3 id="综合调试管理器" tabindex="-1">综合调试管理器 <a class="header-anchor" href="#综合调试管理器" aria-label="Permalink to &quot;综合调试管理器&quot;">​</a></h3><p>集成所有调试工具的统一管理界面。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// debug/debug-manager.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MainProcessDebug </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./main-process-debug.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> PerformanceDebug </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./performance-debug.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MemoryDebug </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./memory-debug.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> NetworkDebug </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./network-debug.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> DebugManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isDevelopment </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tools </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initializeTools</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  initializeTools</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDevelopment) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 初始化各个调试工具</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tools.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;main&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> MainProcessDebug</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tools.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;performance&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> PerformanceDebug</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tools.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;memory&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> MemoryDebug</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tools.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;network&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> NetworkDebug</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🔧 调试管理器已初始化&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取调试报告</span></span>
<span class="line"><span style="color:#B392F0;">  getDebugReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      environment: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        nodeEnv: process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        platform: process.platform,</span></span>
<span class="line"><span style="color:#E1E4E8;">        electronVersion: process.versions.electron</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      tools: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 收集各个工具的报告</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">tool</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.tools) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> tool.getPerformanceReport </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        report.tools[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tool.</span><span style="color:#B392F0;">getPerformanceReport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> tool.getMemoryReport </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        report.tools[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tool.</span><span style="color:#B392F0;">getMemoryReport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> tool.getNetworkStats </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        report.tools[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tool.</span><span style="color:#B392F0;">getNetworkStats</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> report;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 导出调试数据</span></span>
<span class="line"><span style="color:#B392F0;">  exportDebugData</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDebugReport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 在实际应用中，这里可以保存到文件或发送到服务器</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;📋 调试报告:&#39;</span><span style="color:#E1E4E8;">, report);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> report;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 启用/禁用特定调试工具</span></span>
<span class="line"><span style="color:#B392F0;">  setToolEnabled</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">toolName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">enabled</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> tool</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.tools.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(toolName);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (tool </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> tool.enabled </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;undefined&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tool.enabled </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> enabled;</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🔧 \${</span><span style="color:#E1E4E8;">toolName</span><span style="color:#9ECBFF;">} \${</span><span style="color:#E1E4E8;">enabled</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;启用&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;禁用&#39;}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 重置所有调试数据</span></span>
<span class="line"><span style="color:#B392F0;">  resetAll</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">tool</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.tools) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> tool.reset </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        tool.</span><span style="color:#B392F0;">reset</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🔄 所有调试数据已重置&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> DebugManager;</span></span></code></pre></div><h3 id="调试界面集成" tabindex="-1">调试界面集成 <a class="header-anchor" href="#调试界面集成" aria-label="Permalink to &quot;调试界面集成&quot;">​</a></h3><p>在应用中集成调试控制界面。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// debug/debug-ui.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> DebugUI</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">debugManager</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.debugManager </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> debugManager;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.uiElement </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isVisible </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 创建调试UI</span></span>
<span class="line"><span style="color:#B392F0;">  createDebugUI</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.debugManager.isDevelopment) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> debugPanel</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    debugPanel.id </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;electron-debug-panel&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    debugPanel.style.cssText </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">      position: fixed;</span></span>
<span class="line"><span style="color:#9ECBFF;">      top: 10px;</span></span>
<span class="line"><span style="color:#9ECBFF;">      right: 10px;</span></span>
<span class="line"><span style="color:#9ECBFF;">      background: rgba(0,0,0,0.8);</span></span>
<span class="line"><span style="color:#9ECBFF;">      color: white;</span></span>
<span class="line"><span style="color:#9ECBFF;">      padding: 10px;</span></span>
<span class="line"><span style="color:#9ECBFF;">      border-radius: 5px;</span></span>
<span class="line"><span style="color:#9ECBFF;">      font-family: monospace;</span></span>
<span class="line"><span style="color:#9ECBFF;">      font-size: 12px;</span></span>
<span class="line"><span style="color:#9ECBFF;">      z-index: 10000;</span></span>
<span class="line"><span style="color:#9ECBFF;">      max-width: 300px;</span></span>
<span class="line"><span style="color:#9ECBFF;">      max-height: 400px;</span></span>
<span class="line"><span style="color:#9ECBFF;">      overflow: auto;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.uiElement </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> debugPanel;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateUI</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(debugPanel);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 添加键盘快捷键</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupKeyboardShortcuts</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 更新UI内容</span></span>
<span class="line"><span style="color:#B392F0;">  updateUI</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.uiElement) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.debugManager.</span><span style="color:#B392F0;">getDebugReport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.uiElement.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;div style=&quot;margin-bottom: 10px;&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;strong&gt;Electron 调试面板&lt;/strong&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;button onclick=&quot;debugUI.toggleVisibility()&quot; style=&quot;float: right;&quot;&gt;隐藏&lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;div style=&quot;font-size: 10px;&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div&gt;平台: \${</span><span style="color:#E1E4E8;">report</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">environment</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">platform</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div&gt;Electron: \${</span><span style="color:#E1E4E8;">report</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">environment</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">electronVersion</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div&gt;环境: \${</span><span style="color:#E1E4E8;">report</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">environment</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">nodeEnv</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;hr style=&quot;margin: 5px 0;&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div&gt;性能测量: \${</span><span style="color:#E1E4E8;">report</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">tools</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">performance</span><span style="color:#9ECBFF;">?.</span><span style="color:#E1E4E8;">summary</span><span style="color:#9ECBFF;">?.</span><span style="color:#E1E4E8;">totalEntries</span><span style="color:#F97583;"> ||</span><span style="color:#79B8FF;"> 0</span><span style="color:#9ECBFF;">} 次&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div&gt;内存快照: \${</span><span style="color:#E1E4E8;">report</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">tools</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">?.</span><span style="color:#E1E4E8;">snapshotCount</span><span style="color:#F97583;"> ||</span><span style="color:#79B8FF;"> 0</span><span style="color:#9ECBFF;">} 个&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div&gt;网络请求: \${</span><span style="color:#E1E4E8;">report</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">tools</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">network</span><span style="color:#9ECBFF;">?.</span><span style="color:#E1E4E8;">totalRequests</span><span style="color:#F97583;"> ||</span><span style="color:#79B8FF;"> 0</span><span style="color:#9ECBFF;">} 次&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;hr style=&quot;margin: 5px 0;&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;button onclick=&quot;debugManager.exportDebugData()&quot;&gt;导出报告&lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;button onclick=&quot;debugManager.resetAll()&quot;&gt;重置数据&lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 切换UI可见性</span></span>
<span class="line"><span style="color:#B392F0;">  toggleVisibility</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isVisible </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isVisible;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.uiElement.style.display </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.isVisible </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;block&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 设置键盘快捷键</span></span>
<span class="line"><span style="color:#B392F0;">  setupKeyboardShortcuts</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;keydown&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // Ctrl+Shift+D 切换调试面板</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (event.ctrlKey </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> event.shiftKey </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> event.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;D&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        event.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">toggleVisibility</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 定期更新UI</span></span>
<span class="line"><span style="color:#B392F0;">  startAutoUpdate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">interval</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isVisible) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateUI</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, interval);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全局调试实例</span></span>
<span class="line"><span style="color:#E1E4E8;">window.debugManager </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> DebugManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">window.debugUI </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> DebugUI</span><span style="color:#E1E4E8;">(window.debugManager);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化调试UI</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DOMContentLoaded&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.debugUI.</span><span style="color:#B392F0;">createDebugUI</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.debugUI.</span><span style="color:#B392F0;">startAutoUpdate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="生产环境调试" tabindex="-1">生产环境调试 <a class="header-anchor" href="#生产环境调试" aria-label="Permalink to &quot;生产环境调试&quot;">​</a></h2><h3 id="远程调试配置" tabindex="-1">远程调试配置 <a class="header-anchor" href="#远程调试配置" aria-label="Permalink to &quot;远程调试配置&quot;">​</a></h3><p>配置生产环境的远程调试能力，支持现场问题诊断。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// debug/remote-debug.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { app, BrowserWindow, ipcMain } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> RemoteDebug</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.remoteDebuggingEnabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.debugPort </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 8315</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 启用远程调试</span></span>
<span class="line"><span style="color:#B392F0;">  enableRemoteDebugging</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.remoteDebuggingEnabled) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 设置远程调试端口</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.commandLine.</span><span style="color:#B392F0;">appendSwitch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;remote-debugging-port&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.debugPort.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupRemoteDebugHandlers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.remoteDebuggingEnabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🔧 远程调试已启用，端口: \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">debugPort</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupRemoteDebugHandlers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 处理远程调试命令</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;remote-debug-command&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      switch</span><span style="color:#E1E4E8;"> (command) {</span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;get-debug-info&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDebugInfo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;take-heap-snapshot&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">takeHeapSnapshot</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;get-performance-metrics&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getPerformanceMetrics</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">          throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`未知的调试命令: \${</span><span style="color:#E1E4E8;">command</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getDebugInfo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      platform: process.platform,</span></span>
<span class="line"><span style="color:#E1E4E8;">      arch: process.arch,</span></span>
<span class="line"><span style="color:#E1E4E8;">      electronVersion: process.versions.electron,</span></span>
<span class="line"><span style="color:#E1E4E8;">      chromeVersion: process.versions.chrome,</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeVersion: process.versions.node,</span></span>
<span class="line"><span style="color:#E1E4E8;">      memoryUsage: process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      uptime: process.</span><span style="color:#B392F0;">uptime</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      remoteDebuggingPort: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.debugPort</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  takeHeapSnapshot</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在实际应用中，这里可以实现堆快照功能</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;📸 堆快照请求已接收&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&#39;堆快照功能需要额外实现&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getPerformanceMetrics</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> performanceMetrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      cpu: process.</span><span style="color:#B392F0;">cpuUsage</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      uptime: process.</span><span style="color:#B392F0;">uptime</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> performanceMetrics;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成调试访问URL</span></span>
<span class="line"><span style="color:#B392F0;">  getDebugURL</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> \`http://localhost:\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">debugPort</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> RemoteDebug;</span></span></code></pre></div><p>通过系统化的调试工具和技术的集成，Electron 应用可以实现从开发到生产全生命周期的有效调试和问题诊断。</p>`,63)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
