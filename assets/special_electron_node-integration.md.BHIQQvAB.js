import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"Electron Node","description":"","frontmatter":{},"headers":[{"level":2,"title":"Node 集成架构","slug":"node-集成架构","link":"#node-集成架构","children":[]},{"level":2,"title":"主进程中的 Node.js","slug":"主进程中的-node-js","link":"#主进程中的-node-js","children":[{"level":3,"title":"完整的 Node.js 环境","slug":"完整的-node-js-环境","link":"#完整的-node-js-环境","children":[]},{"level":3,"title":"进程管理与系统集成","slug":"进程管理与系统集成","link":"#进程管理与系统集成","children":[]}]},{"level":2,"title":"渲染进程中的 Node 集成","slug":"渲染进程中的-node-集成","link":"#渲染进程中的-node-集成","children":[{"level":3,"title":"安全的 Node.js 访问","slug":"安全的-node-js-访问","link":"#安全的-node-js-访问","children":[]},{"level":3,"title":"在渲染进程中使用 Node.js 功能","slug":"在渲染进程中使用-node-js-功能","link":"#在渲染进程中使用-node-js-功能","children":[]}]},{"level":2,"title":"原生模块集成","slug":"原生模块集成","link":"#原生模块集成","children":[{"level":3,"title":"使用 Node.js 原生模块","slug":"使用-node-js-原生模块","link":"#使用-node-js-原生模块","children":[]},{"level":3,"title":"原生模块构建与兼容性","slug":"原生模块构建与兼容性","link":"#原生模块构建与兼容性","children":[]}]},{"level":2,"title":"性能优化与资源管理","slug":"性能优化与资源管理","link":"#性能优化与资源管理","children":[{"level":3,"title":"Node.js 进程优化","slug":"node-js-进程优化","link":"#node-js-进程优化","children":[]}]}],"relativePath":"special/electron/node-integration.md","filePath":"special/electron/node-integration.md"}'),o={name:"special/electron/node-integration.md"};function e(c,s,E,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/electron/node-integration.md for this page in Markdown format</div><h1 id="electron-node" tabindex="-1">Electron Node <a class="header-anchor" href="#electron-node" aria-label="Permalink to &quot;Electron Node&quot;">​</a></h1><p>Electron Node 是 Electron 框架的核心特性之一，它将 Node.js 运行时与 Chromium 渲染引擎深度集成，为桌面应用程序提供了完整的全栈 JavaScript 开发能力。这种独特的架构允许开发者在渲染进程和主进程中同时使用 Node.js API，打破了传统 Web 应用在浏览器环境中的限制。</p><h2 id="node-集成架构" tabindex="-1">Node 集成架构 <a class="header-anchor" href="#node-集成架构" aria-label="Permalink to &quot;Node 集成架构&quot;">​</a></h2><p>Electron 的 Node 集成采用分层架构设计，将 Node.js 运行时与 Chromium 渲染进程巧妙结合：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Electron 应用运行时环境</span></span>
<span class="line"><span>     |</span></span>
<span class="line"><span>     +-- 主进程 (Main Process)</span></span>
<span class="line"><span>     |     |</span></span>
<span class="line"><span>     |     +-- 完整的 Node.js 运行时</span></span>
<span class="line"><span>     |     |     |</span></span>
<span class="line"><span>     |     |     +-- 文件系统访问</span></span>
<span class="line"><span>     |     |     +-- 网络操作</span></span>
<span class="line"><span>     |     |     +-- 原生模块支持</span></span>
<span class="line"><span>     |     |</span></span>
<span class="line"><span>     |     +-- Chromium 窗口管理</span></span>
<span class="line"><span>     |</span></span>
<span class="line"><span>     +-- 渲染进程 (Renderer Processes)</span></span>
<span class="line"><span>           |</span></span>
<span class="line"><span>           +-- Chromium 渲染引擎</span></span>
<span class="line"><span>           |     |</span></span>
<span class="line"><span>           |     +-- HTML/CSS/JavaScript 渲染</span></span>
<span class="line"><span>           |     +-- Web API 支持</span></span>
<span class="line"><span>           |</span></span>
<span class="line"><span>           +-- Node.js 运行时 (可选集成)</span></span>
<span class="line"><span>                 |</span></span>
<span class="line"><span>                 +-- 通过预加载脚本安全访问</span></span>
<span class="line"><span>                 +-- 上下文隔离保护</span></span></code></pre></div><h2 id="主进程中的-node-js" tabindex="-1">主进程中的 Node.js <a class="header-anchor" href="#主进程中的-node-js" aria-label="Permalink to &quot;主进程中的 Node.js&quot;">​</a></h2><h3 id="完整的-node-js-环境" tabindex="-1">完整的 Node.js 环境 <a class="header-anchor" href="#完整的-node-js-环境" aria-label="Permalink to &quot;完整的 Node.js 环境&quot;">​</a></h3><p>Electron 主进程运行在完整的 Node.js 环境中，可以直接使用所有 Node.js 内置模块和第三方包：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { app, BrowserWindow } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> fs </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;url&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> os </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;os&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> __dirname</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> FileSystemManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.userDataPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> app.</span><span style="color:#B392F0;">getPath</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userData&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tempPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> os.</span><span style="color:#B392F0;">tmpdir</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 读取应用数据文件</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> readAppData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">filename</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> filePath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.userDataPath, filename);</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readFile</span><span style="color:#E1E4E8;">(filePath, </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (error.code </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;ENOENT&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 文件不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 写入应用数据</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> writeAppData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">filename</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> filePath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.userDataPath, filename);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dir</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(filePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 确保目录存在</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;">(dir, { recursive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 写入文件</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">writeFile</span><span style="color:#E1E4E8;">(filePath, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(data, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 监控文件变化</span></span>
<span class="line"><span style="color:#B392F0;">  watchFile</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> fs</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 使用 CommonJS 模块进行文件监控</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">(filePath, { persistent: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }, callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> NetworkManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.net </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;net&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// TCP 网络</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.dgram </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dgram&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// UDP 网络</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.http </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;http&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// HTTP 服务器</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.https </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// HTTPS 服务器</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 创建 HTTP 服务器</span></span>
<span class="line"><span style="color:#B392F0;">  createHttpServer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">port</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">requestHandler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> server</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.http.</span><span style="color:#B392F0;">createServer</span><span style="color:#E1E4E8;">(requestHandler);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    server.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(port, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`HTTP 服务器运行在端口 \${</span><span style="color:#E1E4E8;">port</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> server;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 创建 TCP 服务器</span></span>
<span class="line"><span style="color:#B392F0;">  createTcpServer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">port</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">connectionHandler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> server</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.net.</span><span style="color:#B392F0;">createServer</span><span style="color:#E1E4E8;">(connectionHandler);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    server.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(port, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`TCP 服务器运行在端口 \${</span><span style="color:#E1E4E8;">port</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> server;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 检查网络连接</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkConnectivity</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">host</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">port</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> socket</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.net.</span><span style="color:#B392F0;">createConnection</span><span style="color:#E1E4E8;">(port, host);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      socket.</span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      socket.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;connect&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        socket.</span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      socket.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;timeout&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        socket.</span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      socket.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="进程管理与系统集成" tabindex="-1">进程管理与系统集成 <a class="header-anchor" href="#进程管理与系统集成" aria-label="Permalink to &quot;进程管理与系统集成&quot;">​</a></h3><p>主进程可以利用 Node.js 的进程管理能力实现复杂的系统集成：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { app, ipcMain } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { spawn, exec } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { EventEmitter } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;events&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SystemIntegration</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> EventEmitter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.childProcesses </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupProcessManagement</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupProcessManagement</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 处理外部进程执行请求</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;process:execute&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executeCommand</span><span style="color:#E1E4E8;">(command, args);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 处理长时间运行的进程</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;process:spawn&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [], </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">spawnProcess</span><span style="color:#E1E4E8;">(command, args, options);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 终止进程</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;process:kill&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pid</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">killProcess</span><span style="color:#E1E4E8;">(pid);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 执行命令并返回结果</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> executeCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      exec</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">command</span><span style="color:#9ECBFF;">} \${</span><span style="color:#E1E4E8;">args</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stdout</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stderr</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">          reject</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message });</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          resolve</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">            success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">            stdout: stdout.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(), </span></span>
<span class="line"><span style="color:#E1E4E8;">            stderr: stderr.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">() </span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成子进程</span></span>
<span class="line"><span style="color:#B392F0;">  spawnProcess</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [], </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> spawn</span><span style="color:#E1E4E8;">(command, args, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stdio: [</span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">options</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> processId</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.childProcesses.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(processId, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      process: child,</span></span>
<span class="line"><span style="color:#E1E4E8;">      command,</span></span>
<span class="line"><span style="color:#E1E4E8;">      args,</span></span>
<span class="line"><span style="color:#E1E4E8;">      startTime: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 收集输出</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> stdout </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> stderr </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    child.stdout.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stdout </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;process:output&#39;</span><span style="color:#E1E4E8;">, { pid: processId, type: </span><span style="color:#9ECBFF;">&#39;stdout&#39;</span><span style="color:#E1E4E8;">, data: data.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">() });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    child.stderr.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stderr </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;process:output&#39;</span><span style="color:#E1E4E8;">, { pid: processId, type: </span><span style="color:#9ECBFF;">&#39;stderr&#39;</span><span style="color:#E1E4E8;">, data: data.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">() });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    child.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.childProcesses.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(processId);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;process:exit&#39;</span><span style="color:#E1E4E8;">, { pid: processId, code, stdout, stderr });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    child.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.childProcesses.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(processId);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;process:error&#39;</span><span style="color:#E1E4E8;">, { pid: processId, error: error.message });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { pid: processId, process: child };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 终止进程</span></span>
<span class="line"><span style="color:#B392F0;">  killProcess</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pid</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> processInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.childProcesses.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(pid);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (processInfo) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      processInfo.process.</span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.childProcesses.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(pid);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: </span><span style="color:#9ECBFF;">&#39;进程不存在&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取系统信息</span></span>
<span class="line"><span style="color:#B392F0;">  getSystemInfo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> os</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;os&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      platform: process.platform,</span></span>
<span class="line"><span style="color:#E1E4E8;">      arch: process.arch,</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeVersion: process.version,</span></span>
<span class="line"><span style="color:#E1E4E8;">      electronVersion: process.versions.electron,</span></span>
<span class="line"><span style="color:#E1E4E8;">      chromeVersion: process.versions.chrome,</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      system: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        totalMemory: os.</span><span style="color:#B392F0;">totalmem</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        freeMemory: os.</span><span style="color:#B392F0;">freemem</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        cpus: os.</span><span style="color:#B392F0;">cpus</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        uptime: os.</span><span style="color:#B392F0;">uptime</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="渲染进程中的-node-集成" tabindex="-1">渲染进程中的 Node 集成 <a class="header-anchor" href="#渲染进程中的-node-集成" aria-label="Permalink to &quot;渲染进程中的 Node 集成&quot;">​</a></h2><h3 id="安全的-node-js-访问" tabindex="-1">安全的 Node.js 访问 <a class="header-anchor" href="#安全的-node-js-访问" aria-label="Permalink to &quot;安全的 Node.js 访问&quot;">​</a></h3><p>通过预加载脚本和上下文隔离，安全地在渲染进程中暴露 Node.js 功能：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// preload.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { contextBridge, ipcRenderer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { crypto } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;crypto&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 安全地暴露 Node.js API 子集</span></span>
<span class="line"><span style="color:#E1E4E8;">contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;nodeAPI&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#6A737D;">  // 加密功能</span></span>
<span class="line"><span style="color:#E1E4E8;">  crypto: {</span></span>
<span class="line"><span style="color:#B392F0;">    createHash</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">algorithm</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> hash</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> crypto.</span><span style="color:#B392F0;">createHash</span><span style="color:#E1E4E8;">(algorithm);</span></span>
<span class="line"><span style="color:#E1E4E8;">      hash.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> hash.</span><span style="color:#B392F0;">digest</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    randomBytes</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">size</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> crypto.</span><span style="color:#B392F0;">randomBytes</span><span style="color:#E1E4E8;">(size).</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 工具函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  utils: {</span></span>
<span class="line"><span style="color:#B392F0;">    getPlatform</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> process.platform,</span></span>
<span class="line"><span style="color:#B392F0;">    getVersions</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">      node: process.versions.node,</span></span>
<span class="line"><span style="color:#E1E4E8;">      electron: process.versions.electron</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 文件系统操作（通过 IPC）</span></span>
<span class="line"><span style="color:#E1E4E8;">  fs: {</span></span>
<span class="line"><span style="color:#B392F0;">    readFile</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs:readFile&#39;</span><span style="color:#E1E4E8;">, filePath),</span></span>
<span class="line"><span style="color:#B392F0;">    writeFile</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">content</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs:writeFile&#39;</span><span style="color:#E1E4E8;">, filePath, content),</span></span>
<span class="line"><span style="color:#B392F0;">    readDir</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">dirPath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs:readDir&#39;</span><span style="color:#E1E4E8;">, dirPath)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 进程管理</span></span>
<span class="line"><span style="color:#E1E4E8;">  process: {</span></span>
<span class="line"><span style="color:#B392F0;">    execute</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;process:execute&#39;</span><span style="color:#E1E4E8;">, command, args),</span></span>
<span class="line"><span style="color:#B392F0;">    getSystemInfo</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;process:getSystemInfo&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="在渲染进程中使用-node-js-功能" tabindex="-1">在渲染进程中使用 Node.js 功能 <a class="header-anchor" href="#在渲染进程中使用-node-js-功能" aria-label="Permalink to &quot;在渲染进程中使用 Node.js 功能&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// renderer.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> NodeIntegrationExample</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupEventListeners</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadSystemInfo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> setupEventListeners</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 文件操作示例</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;readFileBtn&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">readFileExample</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 加密操作示例</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hashBtn&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hashExample</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 系统命令示例</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;systemCmdBtn&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">systemCommandExample</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> readFileExample</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> content</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.nodeAPI.fs.</span><span style="color:#B392F0;">readFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/path/to/file.txt&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fileContent&#39;</span><span style="color:#E1E4E8;">).textContent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> content;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;读取文件失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> hashExample</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hashInput&#39;</span><span style="color:#E1E4E8;">).value;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hash</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.nodeAPI.crypto.</span><span style="color:#B392F0;">createHash</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sha256&#39;</span><span style="color:#E1E4E8;">, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hashResult&#39;</span><span style="color:#E1E4E8;">).textContent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> hash;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> systemCommandExample</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.nodeAPI.process.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ls&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;-la&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (result.success) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cmdOutput&#39;</span><span style="color:#E1E4E8;">).textContent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> result.stdout;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cmdOutput&#39;</span><span style="color:#E1E4E8;">).textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;命令执行失败&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;执行命令失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadSystemInfo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> info</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.nodeAPI.process.</span><span style="color:#B392F0;">getSystemInfo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">displaySystemInfo</span><span style="color:#E1E4E8;">(info);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  displaySystemInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> infoDiv</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;systemInfo&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    infoDiv.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;h3&gt;系统信息&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;p&gt;平台: \${</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">platform</span><span style="color:#9ECBFF;">}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;p&gt;架构: \${</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">arch</span><span style="color:#9ECBFF;">}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;p&gt;Node.js 版本: \${</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">nodeVersion</span><span style="color:#9ECBFF;">}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;p&gt;内存使用: \${</span><span style="color:#E1E4E8;">Math</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">round</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">heapUsed</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}MB&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化应用</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> NodeIntegrationExample</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="原生模块集成" tabindex="-1">原生模块集成 <a class="header-anchor" href="#原生模块集成" aria-label="Permalink to &quot;原生模块集成&quot;">​</a></h2><h3 id="使用-node-js-原生模块" tabindex="-1">使用 Node.js 原生模块 <a class="header-anchor" href="#使用-node-js-原生模块" aria-label="Permalink to &quot;使用 Node.js 原生模块&quot;">​</a></h3><p>Electron 支持使用 Node.js 原生模块，但需要注意与 Electron 版本的兼容性：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { app } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> NativeModuleManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.nativeModules </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadNativeModules</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  loadNativeModules</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 尝试加载 SQLite3</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> sqlite3</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sqlite3&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.nativeModules.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sqlite3&#39;</span><span style="color:#E1E4E8;">, sqlite3);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SQLite3 模块加载成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SQLite3 模块加载失败:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 尝试加载图像处理模块</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> sharp</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sharp&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.nativeModules.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sharp&#39;</span><span style="color:#E1E4E8;">, sharp);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Sharp 模块加载成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Sharp 模块加载失败:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 数据库操作</span></span>
<span class="line"><span style="color:#B392F0;">  setupDatabase</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sqlite3</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.nativeModules.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sqlite3&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">sqlite3) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SQLite3 模块不可用&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dbPath</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">app</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">getPath</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;userData&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}/app.db\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> db</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> sqlite3.</span><span style="color:#B392F0;">Database</span><span style="color:#E1E4E8;">(dbPath);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      db,</span></span>
<span class="line"><span style="color:#6A737D;">      // 封装常用数据库操作</span></span>
<span class="line"><span style="color:#B392F0;">      run</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">sql</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          db.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(sql, params, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">              reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              resolve</span><span style="color:#E1E4E8;">({ id: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lastID, changes: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.changes });</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">      get</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">sql</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          db.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(sql, params, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">              reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              resolve</span><span style="color:#E1E4E8;">(row);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">      all</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">sql</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          db.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(sql, params, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">rows</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">              reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">              resolve</span><span style="color:#E1E4E8;">(rows);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 图像处理</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processImage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">inputPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">outputPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">operations</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sharp</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.nativeModules.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sharp&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">sharp) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Sharp 模块不可用&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> image </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> sharp</span><span style="color:#E1E4E8;">(inputPath);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 应用操作</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (operations.resize) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      image </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> image.</span><span style="color:#B392F0;">resize</span><span style="color:#E1E4E8;">(operations.resize.width, operations.resize.height);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (operations.rotate) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      image </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> image.</span><span style="color:#B392F0;">rotate</span><span style="color:#E1E4E8;">(operations.rotate);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (operations.format) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      image </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> image.</span><span style="color:#B392F0;">toFormat</span><span style="color:#E1E4E8;">(operations.format);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 保存图像</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> image.</span><span style="color:#B392F0;">toFile</span><span style="color:#E1E4E8;">(outputPath);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, outputPath };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="原生模块构建与兼容性" tabindex="-1">原生模块构建与兼容性 <a class="header-anchor" href="#原生模块构建与兼容性" aria-label="Permalink to &quot;原生模块构建与兼容性&quot;">​</a></h3><p>确保原生模块与 Electron 版本兼容：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// build-tools.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> fs </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> NativeModuleBuilder</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.electronVersion </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.versions.electron;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 检查模块兼容性</span></span>
<span class="line"><span style="color:#B392F0;">  checkModuleCompatibility</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 使用 electron-rebuild 检查兼容性</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npx electron-rebuild --module-dir node_modules/\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">} --electron-version \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">electronVersion</span><span style="color:#9ECBFF;">} --dry-run\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        encoding: </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { compatible: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: result };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { compatible: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 重建原生模块</span></span>
<span class="line"><span style="color:#B392F0;">  rebuildModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`正在为 Electron \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">electronVersion</span><span style="color:#9ECBFF;">} 重建 \${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}...\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npx electron-rebuild --module-dir node_modules/\${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">} --electron-version \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">electronVersion</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 自动处理所有原生模块</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> rebuildAllModules</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> packageJson</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dependencies</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">packageJson.dependencies, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">packageJson.devDependencies };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> nativeModules</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">detectNativeModules</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> moduleName</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> nativeModules) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`处理模块: \${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> compatibility</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkModuleCompatibility</span><span style="color:#E1E4E8;">(moduleName);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">compatibility.compatible) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`重建模块 \${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}...\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rebuildModule</span><span style="color:#E1E4E8;">(moduleName);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">result.success) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`重建 \${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">} 失败:\`</span><span style="color:#E1E4E8;">, result.error);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`模块 \${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">} 兼容\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 检测项目中的原生模块</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> detectNativeModules</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> nodeModulesPath</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;node_modules&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> nativeModules</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> modules</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readdirSync</span><span style="color:#E1E4E8;">(nodeModulesPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> module</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> modules) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> modulePath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(nodeModulesPath, </span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> bindingGypPath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(modulePath, </span><span style="color:#9ECBFF;">&#39;binding.gyp&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (fs.</span><span style="color:#B392F0;">existsSync</span><span style="color:#E1E4E8;">(bindingGypPath)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          nativeModules.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;检测原生模块时出错:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> nativeModules;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="性能优化与资源管理" tabindex="-1">性能优化与资源管理 <a class="header-anchor" href="#性能优化与资源管理" aria-label="Permalink to &quot;性能优化与资源管理&quot;">​</a></h2><h3 id="node-js-进程优化" tabindex="-1">Node.js 进程优化 <a class="header-anchor" href="#node-js-进程优化" aria-label="Permalink to &quot;Node.js 进程优化&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// performance-manager.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { performance, PerformanceObserver } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;perf_hooks&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> v8 </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;v8&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> NodePerformanceManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupPerformanceMonitoring</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupPerformanceMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 监控垃圾回收</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> observer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PerformanceObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">list</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> entries</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> list.</span><span style="color:#B392F0;">getEntries</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      entries.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">entry</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`GC 事件: \${</span><span style="color:#E1E4E8;">entry</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, entry.duration);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordMetric</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;gc&#39;</span><span style="color:#E1E4E8;">, entry);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">({ entryTypes: [</span><span style="color:#9ECBFF;">&#39;gc&#39;</span><span style="color:#E1E4E8;">] });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 定期收集性能指标</span></span>
<span class="line"><span style="color:#B392F0;">    setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">collectPerformanceMetrics</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  collectPerformanceMetrics</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> metrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      cpu: process.</span><span style="color:#B392F0;">cpuUsage</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      heap: v8.</span><span style="color:#B392F0;">getHeapStatistics</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      activeHandles: process.</span><span style="color:#B392F0;">_getActiveHandles</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      activeRequests: process.</span><span style="color:#B392F0;">_getActiveRequests</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(metrics.timestamp, metrics);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 保持最近100个指标</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.size </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> firstKey</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">().value;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(firstKey);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> metrics;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 内存泄漏检测</span></span>
<span class="line"><span style="color:#B392F0;">  detectMemoryLeaks</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> metrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (metrics.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> recent</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> metrics.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> older</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> metrics.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> recentAvg</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">averageMemory</span><span style="color:#E1E4E8;">(recent);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> olderAvg</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">averageMemory</span><span style="color:#E1E4E8;">(older);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> growth</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (recentAvg </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> olderAvg) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> olderAvg;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (growth </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0.1</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 内存增长超过10%</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        leakDetected: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        growthRate: growth,</span></span>
<span class="line"><span style="color:#E1E4E8;">        suggestion: </span><span style="color:#9ECBFF;">&#39;检查未释放的引用或定时器&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { leakDetected: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  averageMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">metrics</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> total</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> metrics.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">m</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> m.memory.heapUsed, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> total </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> metrics.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 强制垃圾回收（仅开发环境）</span></span>
<span class="line"><span style="color:#B392F0;">  forceGarbageCollection</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (global.gc) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      global.</span><span style="color:#B392F0;">gc</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&#39;垃圾回收已执行&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">        success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;请使用 --expose-gc 标志启动应用以启用强制垃圾回收&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取性能报告</span></span>
<span class="line"><span style="color:#B392F0;">  getPerformanceReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> metrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> latest</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> metrics[metrics.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      summary: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        uptime: process.</span><span style="color:#B392F0;">uptime</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        platform: process.platform,</span></span>
<span class="line"><span style="color:#E1E4E8;">        nodeVersion: process.version</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      current: latest,</span></span>
<span class="line"><span style="color:#E1E4E8;">      trends: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateTrends</span><span style="color:#E1E4E8;">(metrics),</span></span>
<span class="line"><span style="color:#E1E4E8;">      leaks: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">detectMemoryLeaks</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  calculateTrends</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">metrics</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (metrics.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> first</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> metrics[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> last</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> metrics[metrics.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memoryGrowth</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (last.memory.heapUsed </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> first.memory.heapUsed) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> first.memory.heapUsed;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      memoryGrowth,</span></span>
<span class="line"><span style="color:#E1E4E8;">      trend: memoryGrowth </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0.05</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;increasing&#39;</span><span style="color:#F97583;"> :</span><span style="color:#E1E4E8;"> memoryGrowth </span><span style="color:#F97583;">&lt;</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">0.05</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;decreasing&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;stable&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>Electron 的 Node.js 集成提供了强大的能力，让开发者能够构建功能丰富的桌面应用程序。通过合理利用主进程的完整 Node.js 环境、安全地在渲染进程中暴露必要的 Node.js 功能、正确管理原生模块，以及实施性能监控和优化，可以创建出既具备 Web 应用灵活性又拥有原生应用能力的跨平台桌面应用。</p>`,30)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
