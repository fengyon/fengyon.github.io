import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"进程控制","description":"","frontmatter":{},"headers":[{"level":2,"title":"Node.js 进程控制概述","slug":"node-js-进程控制概述","link":"#node-js-进程控制概述","children":[]},{"level":2,"title":"进程基础概念","slug":"进程基础概念","link":"#进程基础概念","children":[{"level":3,"title":"进程与线程的区别","slug":"进程与线程的区别","link":"#进程与线程的区别","children":[]},{"level":3,"title":"Node.js 的单线程与多进程","slug":"node-js-的单线程与多进程","link":"#node-js-的单线程与多进程","children":[]}]},{"level":2,"title":"原生进程控制模块","slug":"原生进程控制模块","link":"#原生进程控制模块","children":[{"level":3,"title":"Process 全局对象","slug":"process-全局对象","link":"#process-全局对象","children":[]},{"level":3,"title":"进程事件处理","slug":"进程事件处理","link":"#进程事件处理","children":[]}]},{"level":2,"title":"Child Process 模块","slug":"child-process-模块","link":"#child-process-模块","children":[{"level":3,"title":"子进程创建方法","slug":"子进程创建方法","link":"#子进程创建方法","children":[]},{"level":3,"title":"进程间通信 (IPC)","slug":"进程间通信-ipc","link":"#进程间通信-ipc","children":[]}]},{"level":2,"title":"Cluster 模块","slug":"cluster-模块","link":"#cluster-模块","children":[{"level":3,"title":"基础集群设置","slug":"基础集群设置","link":"#基础集群设置","children":[]},{"level":3,"title":"高级集群管理","slug":"高级集群管理","link":"#高级集群管理","children":[]}]},{"level":2,"title":"第三方进程管理库","slug":"第三方进程管理库","link":"#第三方进程管理库","children":[{"level":3,"title":"CDPC - 坚强的进程管理模块","slug":"cdpc-坚强的进程管理模块","link":"#cdpc-坚强的进程管理模块","children":[]},{"level":3,"title":"PM2 风格的进程管理","slug":"pm2-风格的进程管理","link":"#pm2-风格的进程管理","children":[]}]},{"level":2,"title":"实际应用场景","slug":"实际应用场景","link":"#实际应用场景","children":[{"level":3,"title":"CPU 密集型任务处理","slug":"cpu-密集型任务处理","link":"#cpu-密集型任务处理","children":[]},{"level":3,"title":"进程池管理","slug":"进程池管理","link":"#进程池管理","children":[]}]}],"relativePath":"special/cli/progress.md","filePath":"special/cli/progress.md"}'),o={name:"special/cli/progress.md"};function e(E,s,c,r,t,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/cli/progress.md for this page in Markdown format</div><h1 id="进程控制" tabindex="-1">进程控制 <a class="header-anchor" href="#进程控制" aria-label="Permalink to &quot;进程控制&quot;">​</a></h1><h2 id="node-js-进程控制概述" tabindex="-1">Node.js 进程控制概述 <a class="header-anchor" href="#node-js-进程控制概述" aria-label="Permalink to &quot;Node.js 进程控制概述&quot;">​</a></h2><p>Node.js 虽然是单线程模型，但通过强大的进程控制能力，可以充分利用多核 CPU 资源，构建高性能的应用程序。进程控制是现代 Node.js 应用开发中的核心技能，涉及子进程管理、进程间通信、集群部署等关键领域。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>主进程 (Parent Process)</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├── 子进程 1 (Child Process) → 独立 V8 实例</span></span>
<span class="line"><span>    ├── 子进程 2 (Child Process) → 独立 V8 实例</span></span>
<span class="line"><span>    ├── 子进程 3 (Child Process) → 独立 V8 实例</span></span>
<span class="line"><span>    └── 子进程 N (Child Process) → 独立 V8 实例</span></span></code></pre></div><h2 id="进程基础概念" tabindex="-1">进程基础概念 <a class="header-anchor" href="#进程基础概念" aria-label="Permalink to &quot;进程基础概念&quot;">​</a></h2><h3 id="进程与线程的区别" tabindex="-1">进程与线程的区别 <a class="header-anchor" href="#进程与线程的区别" aria-label="Permalink to &quot;进程与线程的区别&quot;">​</a></h3><p><strong>进程</strong>是操作系统分配资源的基本单位，每个进程都有独立的内存空间和系统资源。<strong>线程</strong>是进程中的执行单元，多个线程共享进程的内存空间。</p><p>在 Node.js 中：</p><ul><li>每个进程都是独立的 V8 实例</li><li>进程间内存不共享，需要通过 IPC 通信</li><li>多进程可充分利用多核 CPU 优势</li></ul><h3 id="node-js-的单线程与多进程" tabindex="-1">Node.js 的单线程与多进程 <a class="header-anchor" href="#node-js-的单线程与多进程" aria-label="Permalink to &quot;Node.js 的单线程与多进程&quot;">​</a></h3><p>Node.js 采用单线程事件循环模型，适合 I/O 密集型任务。但对于 CPU 密集型任务，单线程会遇到性能瓶颈。通过多进程架构，Node.js 可以：</p><ul><li>避免 CPU 密集型任务阻塞事件循环</li><li>提高应用程序的健壮性</li><li>充分利用多核 CPU 资源</li></ul><h2 id="原生进程控制模块" tabindex="-1">原生进程控制模块 <a class="header-anchor" href="#原生进程控制模块" aria-label="Permalink to &quot;原生进程控制模块&quot;">​</a></h2><h3 id="process-全局对象" tabindex="-1">Process 全局对象 <a class="header-anchor" href="#process-全局对象" aria-label="Permalink to &quot;Process 全局对象&quot;">​</a></h3><p><code>process</code> 是 Node.js 的全局对象，提供当前进程的信息和控制能力。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// process-info.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> process </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取进程信息</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;进程ID:&#39;</span><span style="color:#E1E4E8;">, process.pid)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Node.js 版本:&#39;</span><span style="color:#E1E4E8;">, process.version)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;运行平台:&#39;</span><span style="color:#E1E4E8;">, process.platform)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;当前工作目录:&#39;</span><span style="color:#E1E4E8;">, process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;启动参数:&#39;</span><span style="color:#E1E4E8;">, process.argv)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 内存使用情况</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> memoryUsage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;内存使用:&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`  RSS: \${</span><span style="color:#E1E4E8;">Math</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">round</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memoryUsage</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">rss</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}MB\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`  堆总量: \${</span><span style="color:#E1E4E8;">Math</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">round</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memoryUsage</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">heapTotal</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}MB\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`  堆使用: \${</span><span style="color:#E1E4E8;">Math</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">round</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">memoryUsage</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">heapUsed</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}MB\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 运行时间</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`进程已运行: \${</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">uptime</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}秒\`</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><h3 id="进程事件处理" tabindex="-1">进程事件处理 <a class="header-anchor" href="#进程事件处理" aria-label="Permalink to &quot;进程事件处理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// process-events.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> process </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 优雅退出处理</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SIGTERM&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;收到 SIGTERM 信号，开始优雅退出&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">  // 清理资源，完成当前请求</span></span>
<span class="line"><span style="color:#E1E4E8;">  server.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;服务已关闭&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Ctrl+C 处理</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SIGINT&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">收到 SIGINT 信号，退出进程&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 未捕获异常处理</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;uncaughtException&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;未捕获的异常:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#6A737D;">  // 记录日志，清理资源后退出</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 未处理的 Promise 拒绝</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;unhandledRejection&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">reason</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">promise</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;未处理的 Promise 拒绝:&#39;</span><span style="color:#E1E4E8;">, reason)</span></span>
<span class="line"><span style="color:#6A737D;">  // 记录日志，可以选择退出或继续</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// beforeExit 事件 - 还可以执行异步操作</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;beforeExit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;进程准备退出，代码:&#39;</span><span style="color:#E1E4E8;">, code)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// exit 事件 - 只能执行同步操作</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;进程退出，代码:&#39;</span><span style="color:#E1E4E8;">, code)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="child-process-模块" tabindex="-1">Child Process 模块 <a class="header-anchor" href="#child-process-模块" aria-label="Permalink to &quot;Child Process 模块&quot;">​</a></h2><h3 id="子进程创建方法" tabindex="-1">子进程创建方法 <a class="header-anchor" href="#子进程创建方法" aria-label="Permalink to &quot;子进程创建方法&quot;">​</a></h3><p>Child Process 模块提供了四种创建子进程的方式，各有适用场景。</p><h4 id="spawn-基础进程创建" tabindex="-1">spawn - 基础进程创建 <a class="header-anchor" href="#spawn-基础进程创建" aria-label="Permalink to &quot;spawn - 基础进程创建&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// spawn-demo.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { spawn } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createWriteStream } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行系统命令</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ls</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> spawn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ls&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;-lh&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/usr&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ls.stdout.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`标准输出: \${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ls.stderr.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`错误输出: \${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ls.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`子进程退出，代码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带管道配置的示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> spawn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;server.js&#39;</span><span style="color:#E1E4E8;">], {</span></span>
<span class="line"><span style="color:#E1E4E8;">  stdio: [</span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// [stdin, stdout, stderr]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h4 id="exec-执行-shell-命令" tabindex="-1">exec - 执行 Shell 命令 <a class="header-anchor" href="#exec-执行-shell-命令" aria-label="Permalink to &quot;exec - 执行 Shell 命令&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// exec-demo.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { exec } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行 shell 命令</span></span>
<span class="line"><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;find . -name &quot;*.js&quot; | wc -l&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stdout</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stderr</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`执行错误: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`文件数量: \${</span><span style="color:#E1E4E8;">stdout</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (stderr) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`错误输出: \${</span><span style="color:#E1E4E8;">stderr</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带选项的 exec</span></span>
<span class="line"><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;ls -la&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cwd: </span><span style="color:#9ECBFF;">&#39;/tmp&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 工作目录</span></span>
<span class="line"><span style="color:#E1E4E8;">    timeout: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 超时时间</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxBuffer: </span><span style="color:#79B8FF;">1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 输出缓冲区大小</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stdout</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stderr</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 处理结果</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><h4 id="execfile-执行可执行文件" tabindex="-1">execFile - 执行可执行文件 <a class="header-anchor" href="#execfile-执行可执行文件" aria-label="Permalink to &quot;execFile - 执行可执行文件&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// execfile-demo.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 直接执行可执行文件，不启动 shell</span></span>
<span class="line"><span style="color:#B392F0;">execFile</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/path/to/executable&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;--arg1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;value1&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stdout</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stderr</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(stdout)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行脚本文件</span></span>
<span class="line"><span style="color:#B392F0;">execFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;python&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;script.py&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;arg1&#39;</span><span style="color:#E1E4E8;">], (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stdout</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stderr</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Python 脚本执行失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Python 输出: \${</span><span style="color:#E1E4E8;">stdout</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h4 id="fork-创建-node-js-子进程" tabindex="-1">fork - 创建 Node.js 子进程 <a class="header-anchor" href="#fork-创建-node-js-子进程" aria-label="Permalink to &quot;fork - 创建 Node.js 子进程&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// fork-demo.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fork } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:url&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { dirname, join } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:path&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> __dirname</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建 Node.js 子进程</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> fork</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;child-process.mjs&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 向子进程发送消息</span></span>
<span class="line"><span style="color:#E1E4E8;">child.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({ hello: </span><span style="color:#9ECBFF;">&#39;world&#39;</span><span style="color:#E1E4E8;">, pid: process.pid })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 接收子进程消息</span></span>
<span class="line"><span style="color:#E1E4E8;">child.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;来自子进程的消息:&#39;</span><span style="color:#E1E4E8;">, message)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (message </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;exit&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    child.</span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SIGTERM&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">child.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">signal</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`子进程退出，代码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}, 信号: \${</span><span style="color:#E1E4E8;">signal</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">child.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;子进程错误:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// child-process.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> process </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理父进程消息</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;来自父进程的消息:&#39;</span><span style="color:#E1E4E8;">, message)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 执行一些工作</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> heavyComputation</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 发送结果回父进程</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    result: result,</span></span>
<span class="line"><span style="color:#E1E4E8;">    childPid: process.pid,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> heavyComputation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 模拟 CPU 密集型任务</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1e8</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> i</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> sum</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 告诉父进程准备就绪</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ready&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><h3 id="进程间通信-ipc" tabindex="-1">进程间通信 (IPC) <a class="header-anchor" href="#进程间通信-ipc" aria-label="Permalink to &quot;进程间通信 (IPC)&quot;">​</a></h3><p>父子进程之间可以通过 IPC 通道进行通信。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// ipc-demo.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fork } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ProcessManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scriptPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scriptPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scriptPath</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.children </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.messageId </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pendingMessages </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  createChild</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> fork</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.scriptPath)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.children.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(id, child)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    child.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (message.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;response&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> resolver</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pendingMessages.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(message.id)</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (resolver) {</span></span>
<span class="line"><span style="color:#B392F0;">          resolver</span><span style="color:#E1E4E8;">(message.data)</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.pendingMessages.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(message.id)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (message.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;error&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`子进程 \${</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">} 错误:\`</span><span style="color:#E1E4E8;">, message.error)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    child.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`子进程 \${</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">} 退出，代码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.children.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> child</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  sendMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">childId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.children.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(childId)</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">child) {</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`子进程 \${</span><span style="color:#E1E4E8;">childId</span><span style="color:#9ECBFF;">} 不存在\`</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#F97583;">        return</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> messageId</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.messageId</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.pendingMessages.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(messageId, resolve)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      child.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: messageId,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;request&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: data,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 超时处理</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pendingMessages.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(messageId)) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.pendingMessages.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(messageId)</span></span>
<span class="line"><span style="color:#B392F0;">          reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;消息超时&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  broadcast</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> promises</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> childId</span><span style="color:#F97583;"> of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.children.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      promises.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sendMessage</span><span style="color:#E1E4E8;">(childId, data))</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(promises)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> manager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ProcessManager</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./worker.mjs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">manager.</span><span style="color:#B392F0;">createChild</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;worker1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">manager.</span><span style="color:#B392F0;">createChild</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;worker2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> manager.</span><span style="color:#B392F0;">broadcast</span><span style="color:#E1E4E8;">({ task: </span><span style="color:#9ECBFF;">&#39;process_data&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;所有工作进程完成:&#39;</span><span style="color:#E1E4E8;">, results)</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;广播消息失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><h2 id="cluster-模块" tabindex="-1">Cluster 模块 <a class="header-anchor" href="#cluster-模块" aria-label="Permalink to &quot;Cluster 模块&quot;">​</a></h2><p>Cluster 模块允许在多个进程中运行同一个应用，实现负载均衡。</p><h3 id="基础集群设置" tabindex="-1">基础集群设置 <a class="header-anchor" href="#基础集群设置" aria-label="Permalink to &quot;基础集群设置&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cluster-basic.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> cluster </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:cluster&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> http </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:http&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { availableParallelism } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:os&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> process </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> numCPUs</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> availableParallelism</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (cluster.isPrimary) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`主进程 \${</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 正在运行\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 衍生工作进程</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> numCPUs; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cluster.</span><span style="color:#B392F0;">fork</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  cluster.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">signal</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`工作进程 \${</span><span style="color:#E1E4E8;">worker</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 已退出\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">    // 可以在这里重新启动工作进程</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;在 2 秒后重新启动工作进程...&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cluster.</span><span style="color:#B392F0;">fork</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 监听工作进程消息</span></span>
<span class="line"><span style="color:#E1E4E8;">  cluster.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`收到工作进程 \${</span><span style="color:#E1E4E8;">worker</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 的消息:\`</span><span style="color:#E1E4E8;">, message)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 工作进程共享同一个端口</span></span>
<span class="line"><span style="color:#E1E4E8;">  http</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">createServer</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      res.</span><span style="color:#B392F0;">writeHead</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      res.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`你好来自进程 \${</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 向主进程发送消息</span></span>
<span class="line"><span style="color:#E1E4E8;">      process.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        pid: process.pid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: req.url,</span></span>
<span class="line"><span style="color:#E1E4E8;">        time: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">8000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`工作进程 \${</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 已启动\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="高级集群管理" tabindex="-1">高级集群管理 <a class="header-anchor" href="#高级集群管理" aria-label="Permalink to &quot;高级集群管理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cluster-advanced.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> cluster </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:cluster&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> http </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:http&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { availableParallelism } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:os&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> process </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ClusterManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workers </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.restartCounts </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.maxRestarts </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 3</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  start</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">cluster.isPrimary) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startWorker</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">      return</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🚀 启动集群，CPU 核心数: \${</span><span style="color:#B392F0;">availableParallelism</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupPrimary</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">forkWorkers</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupEventHandlers</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupPrimary</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置集群设置</span></span>
<span class="line"><span style="color:#E1E4E8;">    cluster.</span><span style="color:#B392F0;">setupPrimary</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      exec: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> URL</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url),</span></span>
<span class="line"><span style="color:#E1E4E8;">      args: process.argv.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      silent: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  forkWorkers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> numCPUs</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> availableParallelism</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> numCPUs; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">forkWorker</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  forkWorker</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cluster.</span><span style="color:#B392F0;">fork</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(worker.id, worker)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.restartCounts.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(worker.id, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleWorkerMessage</span><span style="color:#E1E4E8;">(worker, message)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupEventHandlers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cluster.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">signal</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        \`⚠️ 工作进程 \${</span><span style="color:#E1E4E8;">worker</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 退出 (代码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}, 信号: \${</span><span style="color:#E1E4E8;">signal</span><span style="color:#9ECBFF;">})\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> restartCount</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.restartCounts.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(worker.id) </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (restartCount </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.maxRestarts) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🔄 重启工作进程 (\${</span><span style="color:#E1E4E8;">restartCount</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">maxRestarts</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.restartCounts.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(worker.id, restartCount </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">        setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">forkWorker</span><span style="color:#E1E4E8;">(), </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">          \`❌ 工作进程 \${</span><span style="color:#E1E4E8;">worker</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 重启次数过多，停止重启\`</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(worker.id)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    cluster.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;online&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 工作进程 \${</span><span style="color:#E1E4E8;">worker</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 上线\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleWorkerMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (message.type) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;health_check&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">          \`❤️ 工作进程 \${</span><span style="color:#E1E4E8;">worker</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 健康检查: \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">status</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;metrics&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleMetrics</span><span style="color:#E1E4E8;">(worker, message.metrics)</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleMetrics</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">metrics</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 处理工作进程指标</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`📊 工作进程 \${</span><span style="color:#E1E4E8;">worker</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 指标:\`</span><span style="color:#E1E4E8;">, metrics)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  broadcastToWorkers</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">(cluster.workers)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      worker.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(message)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 工作进程逻辑</span></span>
<span class="line"><span style="color:#79B8FF;">ClusterManager</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startWorker</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> server</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> http.</span><span style="color:#B392F0;">createServer</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 模拟一些处理时间</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 处理请求</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (req.url </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;/health&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      res.</span><span style="color:#B392F0;">writeHead</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">, { </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">      res.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#79B8FF;">        JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          status: </span><span style="color:#9ECBFF;">&#39;healthy&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          pid: process.pid,</span></span>
<span class="line"><span style="color:#E1E4E8;">          uptime: process.</span><span style="color:#B392F0;">uptime</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 发送健康检查消息</span></span>
<span class="line"><span style="color:#E1E4E8;">      process.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({ type: </span><span style="color:#9ECBFF;">&#39;health_check&#39;</span><span style="color:#E1E4E8;">, status: </span><span style="color:#9ECBFF;">&#39;healthy&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#F97583;">      return</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">writeHead</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">, { </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;text/plain&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`请求由进程 \${</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 处理</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 发送指标</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> processingTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime</span></span>
<span class="line"><span style="color:#E1E4E8;">    process.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;metrics&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      metrics: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        processingTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">        memory: process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  server.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">8000</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🟢 工作进程 \${</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 监听端口 8000\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 定期健康报告</span></span>
<span class="line"><span style="color:#B392F0;">  setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    process.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({ type: </span><span style="color:#9ECBFF;">&#39;health_check&#39;</span><span style="color:#E1E4E8;">, status: </span><span style="color:#9ECBFF;">&#39;healthy&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启动集群管理器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> manager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ClusterManager</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">manager.</span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h2 id="第三方进程管理库" tabindex="-1">第三方进程管理库 <a class="header-anchor" href="#第三方进程管理库" aria-label="Permalink to &quot;第三方进程管理库&quot;">​</a></h2><h3 id="cdpc-坚强的进程管理模块" tabindex="-1">CDPC - 坚强的进程管理模块 <a class="header-anchor" href="#cdpc-坚强的进程管理模块" aria-label="Permalink to &quot;CDPC - 坚强的进程管理模块&quot;">​</a></h3><p>CDPC 是一个专门用于进程管理的 npm 模块，可以管理任何需要托管的程序。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cdpc-demo.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> CDPC </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;cdpc&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建进程管理器实例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> cm</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CDPC</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  debug: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  notExit: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 收到信号不退出</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启用强模式，捕获未处理异常</span></span>
<span class="line"><span style="color:#E1E4E8;">cm.</span><span style="color:#B392F0;">strong</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 运行子进程</span></span>
<span class="line"><span style="color:#E1E4E8;">cm.</span><span style="color:#B392F0;">runChilds</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;api-server&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    file: </span><span style="color:#9ECBFF;">&#39;./api-server.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    args: [</span><span style="color:#9ECBFF;">&#39;--port&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;3000&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stdio: [</span><span style="color:#9ECBFF;">&#39;ignore&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    restart: </span><span style="color:#9ECBFF;">&#39;always&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    restartDelay: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    monitor: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启监控</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;worker&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    file: </span><span style="color:#9ECBFF;">&#39;./worker.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    args: [</span><span style="color:#9ECBFF;">&#39;--queue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;high-priority&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    restart: </span><span style="color:#9ECBFF;">&#39;fail-count&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    restartLimit: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    restartDelay: </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    monitor: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;scheduled-task&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    command: </span><span style="color:#9ECBFF;">&#39;node&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    args: [</span><span style="color:#9ECBFF;">&#39;./scheduler.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;--interval&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;5000&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    restart: </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stdio: [</span><span style="color:#9ECBFF;">&#39;ignore&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理进程事件</span></span>
<span class="line"><span style="color:#E1E4E8;">cm.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;process:exit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`进程 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} 退出，代码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">cm.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;process:restart&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">count</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`进程 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} 第 \${</span><span style="color:#E1E4E8;">count</span><span style="color:#9ECBFF;">} 次重启\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">cm.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;process:error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`进程 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} 错误:\`</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="pm2-风格的进程管理" tabindex="-1">PM2 风格的进程管理 <a class="header-anchor" href="#pm2-风格的进程管理" aria-label="Permalink to &quot;PM2 风格的进程管理&quot;">​</a></h3><p>虽然搜索结果中没有直接提供 PM2 的代码示例，但我们可以实现类似的进程管理功能：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// pm2-like.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fork, spawn } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { watchFile, unwatchFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:url&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { dirname, join } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:path&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> __dirname</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ProcessManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.processes </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.configs </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  start</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">script</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">args</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [], </span><span style="color:#79B8FF;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#79B8FF;">watch</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> fork</span><span style="color:#E1E4E8;">(script, args, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      env: { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">process.env, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">options.env },</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">options,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.processes.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, child)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.configs.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, config)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    child.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">signal</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`进程 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} (\${</span><span style="color:#E1E4E8;">child</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">}) 退出: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> signal</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.processes.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(name)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 自动重启</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (config.autorestart </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`重启进程 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}...\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">        setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">(name, config), </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 文件监视</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (watch </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> config.watch) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupFileWatching</span><span style="color:#E1E4E8;">(name, config.watch)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 启动进程 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} (PID: \${</span><span style="color:#E1E4E8;">child</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> child</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupFileWatching</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">watchPatterns</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.configs.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.processes.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    watchPatterns.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      watchFile</span><span style="color:#E1E4E8;">(pattern, (</span><span style="color:#FFAB70;">curr</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">prev</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (curr.mtime </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> prev.mtime) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`📁 文件 \${</span><span style="color:#E1E4E8;">pattern</span><span style="color:#9ECBFF;">} 发生变化，重启进程 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">restart</span><span style="color:#E1E4E8;">(name)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  restart</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.processes.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name)</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (child) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🔄 重启进程 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      child.</span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SIGTERM&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">      // exit 事件处理程序会自动重启</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.configs.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name)</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (config) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">(name, config)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  stop</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.processes.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name)</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (child) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.configs.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name)</span></span>
<span class="line"><span style="color:#E1E4E8;">      config.autorestart </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#6A737D;"> // 禁用自动重启</span></span>
<span class="line"><span style="color:#E1E4E8;">      child.</span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SIGTERM&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🛑 停止进程 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  list</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">运行中的进程:&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.processes.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">child</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`  \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} (PID: \${</span><span style="color:#E1E4E8;">child</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  monitor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">    setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.processes.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">child</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 这里可以添加健康检查逻辑</span></span>
<span class="line"><span style="color:#6A737D;">        // 比如发送 ping 消息，检查响应时间等</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> pm</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ProcessManager</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启动多个进程</span></span>
<span class="line"><span style="color:#E1E4E8;">pm.</span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;api&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  script: </span><span style="color:#9ECBFF;">&#39;./api-server.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  args: [</span><span style="color:#9ECBFF;">&#39;--port&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;3000&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  watch: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  autorestart: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">pm.</span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;worker&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  script: </span><span style="color:#9ECBFF;">&#39;./worker.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  args: [</span><span style="color:#9ECBFF;">&#39;--queue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  autorestart: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">pm.</span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;scheduler&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  script: </span><span style="color:#9ECBFF;">&#39;./scheduler.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  autorestart: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 显示进程列表</span></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  pm.</span><span style="color:#B392F0;">list</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 5秒后重启 API 进程</span></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  pm.</span><span style="color:#B392F0;">restart</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;api&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><h2 id="实际应用场景" tabindex="-1">实际应用场景 <a class="header-anchor" href="#实际应用场景" aria-label="Permalink to &quot;实际应用场景&quot;">​</a></h2><h3 id="cpu-密集型任务处理" tabindex="-1">CPU 密集型任务处理 <a class="header-anchor" href="#cpu-密集型任务处理" aria-label="Permalink to &quot;CPU 密集型任务处理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cpu-intensive.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fork } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { availableParallelism } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:os&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ParallelProcessor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.taskQueue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.busyWorkers </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> workerCount</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> availableParallelism</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> workerCount; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> fork</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> URL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./cpu-worker.mjs&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      worker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.busyWorkers.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(worker)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (task) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executeTask</span><span style="color:#E1E4E8;">(worker, task)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      worker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> index</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(worker)</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (index </span><span style="color:#F97583;">&gt;</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(index, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.busyWorkers.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(worker)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(worker)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { data, resolve }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> availableWorker</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.busyWorkers.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(worker)</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (availableWorker) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executeTask</span><span style="color:#E1E4E8;">(availableWorker, task)</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(task)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  executeTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">task</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.busyWorkers.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(worker)</span></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(task.data)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> messageHandler</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      worker.</span><span style="color:#B392F0;">off</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, messageHandler)</span></span>
<span class="line"><span style="color:#E1E4E8;">      task.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(result)</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.busyWorkers.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(worker)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 处理队列中的下一个任务</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> nextTask</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (nextTask) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executeTask</span><span style="color:#E1E4E8;">(worker, nextTask)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, messageHandler)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> close</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.workers) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      worker.</span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SIGTERM&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> processor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ParallelProcessor</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> processor.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 并行处理多个 CPU 密集型任务</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tasks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { type: </span><span style="color:#9ECBFF;">&#39;fibonacci&#39;</span><span style="color:#E1E4E8;">, n: </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { type: </span><span style="color:#9ECBFF;">&#39;prime&#39;</span><span style="color:#E1E4E8;">, max: </span><span style="color:#79B8FF;">1000000</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;sort&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1000000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">()),</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  tasks.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">task</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> processor.</span><span style="color:#B392F0;">processTask</span><span style="color:#E1E4E8;">(task))</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;所有任务完成&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> processor.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cpu-worker.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> process </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  switch</span><span style="color:#E1E4E8;"> (data.type) {</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;fibonacci&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> fibonacci</span><span style="color:#E1E4E8;">(data.n)</span></span>
<span class="line"><span style="color:#F97583;">      break</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;prime&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> findPrimes</span><span style="color:#E1E4E8;">(data.max)</span></span>
<span class="line"><span style="color:#F97583;">      break</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;sort&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data.data.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b)</span></span>
<span class="line"><span style="color:#F97583;">      break</span></span>
<span class="line"><span style="color:#F97583;">    default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({ result, pid: process.pid })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> fibonacci</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> n</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> fibonacci</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#B392F0;"> fibonacci</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> findPrimes</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">max</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> primes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> max; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">isPrime</span><span style="color:#E1E4E8;">(i)) primes.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(i)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> primes</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> isPrime</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">num</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">sqrt</span><span style="color:#E1E4E8;">(num); i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (num </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="进程池管理" tabindex="-1">进程池管理 <a class="header-anchor" href="#进程池管理" aria-label="Permalink to &quot;进程池管理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// process-pool.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fork } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ProcessPool</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scriptPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">size</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;os&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">availableParallelism</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scriptPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scriptPath</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.size </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> size</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.taskQueue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workerStates </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initializeWorkers</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  initializeWorkers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.size; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> fork</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.scriptPath)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      worker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleWorkerMessage</span><span style="color:#E1E4E8;">(worker, message)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      worker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`工作进程 \${</span><span style="color:#E1E4E8;">worker</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 退出，代码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">replaceWorker</span><span style="color:#E1E4E8;">(worker)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(worker)</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(worker, </span><span style="color:#9ECBFF;">&#39;idle&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleWorkerMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (message.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;task_complete&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(worker, </span><span style="color:#9ECBFF;">&#39;idle&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 处理任务回调</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(worker).currentTask</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (task </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> task.resolve) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        task.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(message.result)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 处理下一个任务</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processNextTask</span><span style="color:#E1E4E8;">(worker)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (message.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;error&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(worker).currentTask</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (task </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> task.reject) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        task.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(message.error))</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(worker, </span><span style="color:#9ECBFF;">&#39;idle&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processNextTask</span><span style="color:#E1E4E8;">(worker)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  processNextTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executeTask</span><span style="color:#E1E4E8;">(worker, task)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  executeTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">task</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(worker, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      status: </span><span style="color:#9ECBFF;">&#39;busy&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentTask: task,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;execute&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: task.data,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> execute</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { data, resolve, reject }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> idleWorker</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">worker</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> state</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(worker)</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          state </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;idle&#39;</span><span style="color:#F97583;"> ||</span></span>
<span class="line"><span style="color:#E1E4E8;">          (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> state </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> state.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;idle&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (idleWorker) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executeTask</span><span style="color:#E1E4E8;">(idleWorker, task)</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(task)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  replaceWorker</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">deadWorker</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> index</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(deadWorker)</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (index </span><span style="color:#F97583;">&gt;</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(index, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(deadWorker)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> newWorker</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> fork</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.scriptPath)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      newWorker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleWorkerMessage</span><span style="color:#E1E4E8;">(newWorker, message)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      newWorker.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`工作进程 \${</span><span style="color:#E1E4E8;">newWorker</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">pid</span><span style="color:#9ECBFF;">} 退出，代码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">replaceWorker</span><span style="color:#E1E4E8;">(newWorker)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(newWorker)</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(newWorker, </span><span style="color:#9ECBFF;">&#39;idle&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getStats</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> stats</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalWorkers: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.workers.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      idleWorkers: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      busyWorkers: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      queuedTasks: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> state</span><span style="color:#F97583;"> of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        state </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;idle&#39;</span><span style="color:#F97583;"> ||</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> state </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> state.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;idle&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stats.idleWorkers</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stats.busyWorkers</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> stats</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> drain</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 等待所有任务完成</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.taskQueue.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(resolve, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 等待所有工作进程完成当前任务</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> busyWorkers</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> state </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;idle&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> state.status </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;idle&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (busyWorkers.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> checkInterval</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> stillBusy</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> state </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;idle&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> state.status </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;idle&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          )</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (stillBusy.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">            clearInterval</span><span style="color:#E1E4E8;">(checkInterval)</span></span>
<span class="line"><span style="color:#B392F0;">            resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  close</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 先排空任务</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">drain</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.workers) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        worker.</span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SIGTERM&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.workerStates.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.taskQueue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> ProcessPool</span></span></code></pre></div><p>通过以上方法和工具，Node.js 开发者可以构建出强大、灵活的进程控制系统，充分利用多核 CPU 资源，提高应用程序的性能和可靠性。</p>`,54)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
