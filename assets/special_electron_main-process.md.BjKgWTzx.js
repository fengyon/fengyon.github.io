import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Electron 主进程","description":"","frontmatter":{},"headers":[{"level":2,"title":"主进程的核心特性","slug":"主进程的核心特性","link":"#主进程的核心特性","children":[]},{"level":2,"title":"主进程的职责与功能","slug":"主进程的职责与功能","link":"#主进程的职责与功能","children":[{"level":3,"title":"应用程序生命周期管理","slug":"应用程序生命周期管理","link":"#应用程序生命周期管理","children":[]},{"level":3,"title":"窗口管理","slug":"窗口管理","link":"#窗口管理","children":[]},{"level":3,"title":"菜单系统管理","slug":"菜单系统管理","link":"#菜单系统管理","children":[]}]},{"level":2,"title":"核心模块详解","slug":"核心模块详解","link":"#核心模块详解","children":[{"level":3,"title":"app 模块","slug":"app-模块","link":"#app-模块","children":[]},{"level":3,"title":"BrowserWindow 模块","slug":"browserwindow-模块","link":"#browserwindow-模块","children":[]},{"level":3,"title":"ipcMain 模块","slug":"ipcmain-模块","link":"#ipcmain-模块","children":[]}]},{"level":2,"title":"主进程架构模式","slug":"主进程架构模式","link":"#主进程架构模式","children":[{"level":3,"title":"单一职责模式","slug":"单一职责模式","link":"#单一职责模式","children":[]},{"level":3,"title":"事件驱动架构","slug":"事件驱动架构","link":"#事件驱动架构","children":[]}]},{"level":2,"title":"性能优化与最佳实践","slug":"性能优化与最佳实践","link":"#性能优化与最佳实践","children":[{"level":3,"title":"资源管理","slug":"资源管理","link":"#资源管理","children":[]},{"level":3,"title":"错误处理与恢复","slug":"错误处理与恢复","link":"#错误处理与恢复","children":[]}]}],"relativePath":"special/electron/main-process.md","filePath":"special/electron/main-process.md"}'),o={name:"special/electron/main-process.md"};function e(c,s,E,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/electron/main-process.md for this page in Markdown format</div><h1 id="electron-主进程" tabindex="-1">Electron 主进程 <a class="header-anchor" href="#electron-主进程" aria-label="Permalink to &quot;Electron 主进程&quot;">​</a></h1><p>Electron 主进程是 Electron 应用程序的核心和控制中心，它作为整个应用的入口点，负责管理应用的生命周期、创建和管理所有窗口，以及与操作系统进行底层交互。每个 Electron 应用有且仅有一个主进程，它在 Node.js 环境中运行，拥有完整的系统 API 访问权限。</p><h2 id="主进程的核心特性" tabindex="-1">主进程的核心特性 <a class="header-anchor" href="#主进程的核心特性" aria-label="Permalink to &quot;主进程的核心特性&quot;">​</a></h2><p>主进程在 Electron 架构中扮演着独一无二的角色，具有以下关键特性：</p><ul><li><strong>单例模式</strong>：整个应用程序中只存在一个主进程实例</li><li><strong>Node.js 环境</strong>：运行在完整的 Node.js 运行时中，可以访问所有 Node.js API</li><li><strong>系统权限</strong>：拥有访问文件系统、网络、系统对话框等操作系统功能的权限</li><li><strong>生命周期管理</strong>：控制应用程序的启动、运行和退出全过程</li><li><strong>进程管理</strong>：负责创建、管理和销毁所有渲染器进程</li></ul><h2 id="主进程的职责与功能" tabindex="-1">主进程的职责与功能 <a class="header-anchor" href="#主进程的职责与功能" aria-label="Permalink to &quot;主进程的职责与功能&quot;">​</a></h2><h3 id="应用程序生命周期管理" tabindex="-1">应用程序生命周期管理 <a class="header-anchor" href="#应用程序生命周期管理" aria-label="Permalink to &quot;应用程序生命周期管理&quot;">​</a></h3><p>主进程负责监听和处理应用程序的生命周期事件，从启动到退出的完整过程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>应用启动</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- app.whenReady() → 应用初始化完成</span></span>
<span class="line"><span>    |         |</span></span>
<span class="line"><span>    |         +-- 创建第一个窗口</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- app.on(&#39;window-all-closed&#39;) → 所有窗口关闭</span></span>
<span class="line"><span>    |         |</span></span>
<span class="line"><span>    |         +-- 判断是否退出应用 (macOS 特殊处理)</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- app.on(&#39;before-quit&#39;) → 退出前清理</span></span>
<span class="line"><span>    |         |</span></span>
<span class="line"><span>    |         +-- 保存数据、释放资源</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- app.on(&#39;will-quit&#39;) → 最终退出</span></span></code></pre></div><h3 id="窗口管理" tabindex="-1">窗口管理 <a class="header-anchor" href="#窗口管理" aria-label="Permalink to &quot;窗口管理&quot;">​</a></h3><p>主进程负责创建和管理所有 BrowserWindow 实例：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">BrowserWindow</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electron&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> createMainWindow</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建主窗口</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> mainWindow</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 初始不显示，避免视觉闪烁</span></span>
<span class="line"><span style="color:#E1E4E8;">    titleBarStyle: </span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    trafficLightPosition: { x: </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// macOS 交通灯位置</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 窗口准备好后显示</span></span>
<span class="line"><span style="color:#E1E4E8;">  mainWindow.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ready-to-show&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mainWindow.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    mainWindow.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 处理窗口关闭事件</span></span>
<span class="line"><span style="color:#E1E4E8;">  mainWindow.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (mainWindow.</span><span style="color:#B392F0;">isDocumentEdited</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 阻止关闭，先保存文档</span></span>
<span class="line"><span style="color:#E1E4E8;">      event.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">      saveDocumentBeforeClose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> mainWindow;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="菜单系统管理" tabindex="-1">菜单系统管理 <a class="header-anchor" href="#菜单系统管理" aria-label="Permalink to &quot;菜单系统管理&quot;">​</a></h3><p>主进程负责创建应用程序菜单、上下文菜单和系统托盘菜单：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">Menu</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">MenuItem</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">Tray</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electron&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建应用菜单</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> createApplicationMenu</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> template</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;文件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      submenu: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: </span><span style="color:#9ECBFF;">&#39;新建&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          accelerator: </span><span style="color:#9ECBFF;">&#39;CmdOrCtrl+N&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">          click</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#B392F0;">createNewDocument</span><span style="color:#E1E4E8;">(); }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { type: </span><span style="color:#9ECBFF;">&#39;separator&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: </span><span style="color:#9ECBFF;">&#39;退出&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          accelerator: process.platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;darwin&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;Cmd+Q&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;Ctrl+Q&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">          click</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { app.</span><span style="color:#B392F0;">quit</span><span style="color:#E1E4E8;">(); }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;编辑&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      submenu: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;undo&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;撤销&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;redo&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;重做&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { type: </span><span style="color:#9ECBFF;">&#39;separator&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;cut&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;剪切&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;copy&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;复制&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;paste&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;粘贴&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> menu</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Menu.</span><span style="color:#B392F0;">buildFromTemplate</span><span style="color:#E1E4E8;">(template);</span></span>
<span class="line"><span style="color:#E1E4E8;">  Menu.</span><span style="color:#B392F0;">setApplicationMenu</span><span style="color:#E1E4E8;">(menu);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建上下文菜单</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> createContextMenu</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> contextMenu</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Menu</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  contextMenu.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> MenuItem</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;刷新&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">    click</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#B392F0;">reloadCurrentWindow</span><span style="color:#E1E4E8;">(); }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }));</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 在渲染器中通过 IPC 显示上下文菜单</span></span>
<span class="line"><span style="color:#E1E4E8;">  ipcMain.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;show-context-menu&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    contextMenu.</span><span style="color:#B392F0;">popup</span><span style="color:#E1E4E8;">(BrowserWindow.</span><span style="color:#B392F0;">fromWebContents</span><span style="color:#E1E4E8;">(event.sender));</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="核心模块详解" tabindex="-1">核心模块详解 <a class="header-anchor" href="#核心模块详解" aria-label="Permalink to &quot;核心模块详解&quot;">​</a></h2><h3 id="app-模块" tabindex="-1">app 模块 <a class="header-anchor" href="#app-模块" aria-label="Permalink to &quot;app 模块&quot;">​</a></h3><p>app 模块控制应用程序的事件生命周期，是主进程中最核心的模块：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electron&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 应用准备就绪</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">whenReady</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  createMainWindow</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">  createApplicationMenu</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">  initializeAppServices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 所有窗口关闭时的处理</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window-all-closed&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 在 macOS 上，除非用户明确按 Cmd + Q，否则应用和菜单栏保持活动状态</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (process.platform </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;darwin&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">quit</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// macOS 重新激活应用</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;activate&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (BrowserWindow.</span><span style="color:#B392F0;">getAllWindows</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    createMainWindow</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 阻止应用多个实例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> gotTheLock</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> app.</span><span style="color:#B392F0;">requestSingleInstanceLock</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">gotTheLock) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  app.</span><span style="color:#B392F0;">quit</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  app.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;second-instance&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">commandLine</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">workingDirectory</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 当运行第二个实例时，聚焦到主窗口</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (mainWindow) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (mainWindow.</span><span style="color:#B392F0;">isMinimized</span><span style="color:#E1E4E8;">()) mainWindow.</span><span style="color:#B392F0;">restore</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      mainWindow.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="browserwindow-模块" tabindex="-1">BrowserWindow 模块 <a class="header-anchor" href="#browserwindow-模块" aria-label="Permalink to &quot;BrowserWindow 模块&quot;">​</a></h3><p>BrowserWindow 模块用于创建和控制浏览器窗口，支持丰富的配置选项：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">BrowserWindow</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electron&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 高级窗口配置示例</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> createAdvancedWindow</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> win</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">    // 基础配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: </span><span style="color:#79B8FF;">700</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minWidth: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minHeight: </span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 窗口特性</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;我的应用&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;assets/icon.png&#39;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 窗口图标</span></span>
<span class="line"><span style="color:#E1E4E8;">    show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 初始隐藏，避免闪烁</span></span>
<span class="line"><span style="color:#E1E4E8;">    frame: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否显示窗口边框</span></span>
<span class="line"><span style="color:#E1E4E8;">    titleBarStyle: </span><span style="color:#9ECBFF;">&#39;hiddenInset&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// macOS 隐藏标题栏风格</span></span>
<span class="line"><span style="color:#E1E4E8;">    thickFrame: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// Windows 厚边框</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 窗口行为</span></span>
<span class="line"><span style="color:#E1E4E8;">    resizable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    maximizable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimizable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    closable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    alwaysOnTop: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fullscreenable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 安全配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 禁用 Node.js 集成</span></span>
<span class="line"><span style="color:#E1E4E8;">      contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用上下文隔离</span></span>
<span class="line"><span style="color:#E1E4E8;">      enableRemoteModule: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 禁用远程模块</span></span>
<span class="line"><span style="color:#E1E4E8;">      preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 预加载脚本</span></span>
<span class="line"><span style="color:#E1E4E8;">      webSecurity: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用 Web 安全</span></span>
<span class="line"><span style="color:#E1E4E8;">      allowRunningInsecureContent: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      experimentalFeatures: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 平台特定配置</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#E1E4E8;">(process.platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;linux&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;assets/icon.png&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 窗口事件处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  win.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;closed&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mainWindow </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  win.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;focus&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 窗口获得焦点时的处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  win.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;blur&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 窗口失去焦点时的处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> win;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="ipcmain-模块" tabindex="-1">ipcMain 模块 <a class="header-anchor" href="#ipcmain-模块" aria-label="Permalink to &quot;ipcMain 模块&quot;">​</a></h3><p>ipcMain 模块处理从渲染器进程发送的异步和同步消息，是实现进程间通信的核心：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">ipcMain</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">dialog</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">shell</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electron&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理异步消息</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;show-open-dialog&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> dialog.</span><span style="color:#B392F0;">showOpenDialog</span><span style="color:#E1E4E8;">(mainWindow, options);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理同步消息（不推荐，可能阻塞主进程）</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;get-sync-data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  event.returnValue </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> processDataSync</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理渲染器进程的请求</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;file-operation&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">operation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> fs</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">).promises;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (operation) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;read&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> content</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readFile</span><span style="color:#E1E4E8;">(filePath, </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, data: content };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;write&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">writeFile</span><span style="color:#E1E4E8;">(filePath, data);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;delete&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">unlink</span><span style="color:#E1E4E8;">(filePath);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: </span><span style="color:#9ECBFF;">&#39;未知操作&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 主动向渲染器发送消息</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> sendToRenderer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (mainWindow </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">mainWindow.</span><span style="color:#B392F0;">isDestroyed</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mainWindow.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(channel, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 广播到所有窗口</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> broadcastToAllWindows</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  BrowserWindow.</span><span style="color:#B392F0;">getAllWindows</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">isDestroyed</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(channel, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="主进程架构模式" tabindex="-1">主进程架构模式 <a class="header-anchor" href="#主进程架构模式" aria-label="Permalink to &quot;主进程架构模式&quot;">​</a></h2><h3 id="单一职责模式" tabindex="-1">单一职责模式 <a class="header-anchor" href="#单一职责模式" aria-label="Permalink to &quot;单一职责模式&quot;">​</a></h3><p>将主进程的功能模块化，每个模块负责特定的功能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>主进程 (Main Process)</span></span>
<span class="line"><span>     |</span></span>
<span class="line"><span>     +-- 窗口管理器 (WindowManager)</span></span>
<span class="line"><span>     |     |</span></span>
<span class="line"><span>     |     +-- 创建、销毁窗口</span></span>
<span class="line"><span>     |     +-- 窗口状态管理</span></span>
<span class="line"><span>     |</span></span>
<span class="line"><span>     +-- 菜单管理器 (MenuManager)</span></span>
<span class="line"><span>     |     |</span></span>
<span class="line"><span>     |     +-- 应用菜单</span></span>
<span class="line"><span>     |     +-- 上下文菜单</span></span>
<span class="line"><span>     |</span></span>
<span class="line"><span>     +-- 通信管理器 (IPCManager)</span></span>
<span class="line"><span>     |     |</span></span>
<span class="line"><span>     |     +-- 处理 IPC 消息</span></span>
<span class="line"><span>     |     +-- 进程间数据同步</span></span>
<span class="line"><span>     |</span></span>
<span class="line"><span>     +-- 服务管理器 (ServiceManager)</span></span>
<span class="line"><span>           |</span></span>
<span class="line"><span>           +-- 自动更新服务</span></span>
<span class="line"><span>           +-- 文件监控服务</span></span>
<span class="line"><span>           +-- 数据库服务</span></span></code></pre></div><h3 id="事件驱动架构" tabindex="-1">事件驱动架构 <a class="header-anchor" href="#事件驱动架构" aria-label="Permalink to &quot;事件驱动架构&quot;">​</a></h3><p>主进程采用事件驱动的方式组织代码：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 事件发射器模式</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> EventEmitter</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;events&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ApplicationManager</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> EventEmitter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  initialize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 监听应用事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">whenReady</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;app-ready&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window-all-closed&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;all-windows-closed&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 监听自定义事件</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window-created&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">trackWindow</span><span style="color:#E1E4E8;">(window));</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;service-started&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">service</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logServiceStart</span><span style="color:#E1E4E8;">(service));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createWindow</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createMainWindow</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window-created&#39;</span><span style="color:#E1E4E8;">, window);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> window;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用事件驱动架构</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> appManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ApplicationManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">appManager.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;app-ready&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  appManager.</span><span style="color:#B392F0;">createWindow</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">  startBackgroundServices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="性能优化与最佳实践" tabindex="-1">性能优化与最佳实践 <a class="header-anchor" href="#性能优化与最佳实践" aria-label="Permalink to &quot;性能优化与最佳实践&quot;">​</a></h2><h3 id="资源管理" tabindex="-1">资源管理 <a class="header-anchor" href="#资源管理" aria-label="Permalink to &quot;资源管理&quot;">​</a></h3><p>主进程需要有效管理系统资源，避免内存泄漏：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 窗口资源管理</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> WindowManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windows </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> win</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">(options);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windows.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(id, win);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    win.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;closed&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.windows.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> win;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.windows.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  closeAllWindows</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windows.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">win</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">win.</span><span style="color:#B392F0;">isDestroyed</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        win.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windows.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 WeakMap 管理临时资源</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> temporaryResources</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WeakMap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> manageTemporaryResource</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">resource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  temporaryResources.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(object, resource);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 自动清理</span></span>
<span class="line"><span style="color:#B392F0;">  setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (temporaryResources.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(object)) {</span></span>
<span class="line"><span style="color:#B392F0;">      cleanupResource</span><span style="color:#E1E4E8;">(temporaryResources.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(object));</span></span>
<span class="line"><span style="color:#E1E4E8;">      temporaryResources.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#79B8FF;">300000</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 5分钟后自动清理</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="错误处理与恢复" tabindex="-1">错误处理与恢复 <a class="header-anchor" href="#错误处理与恢复" aria-label="Permalink to &quot;错误处理与恢复&quot;">​</a></h3><p>主进程需要健壮的错误处理机制：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 全局错误处理</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;uncaughtException&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;未捕获的异常:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#6A737D;">  // 记录错误日志</span></span>
<span class="line"><span style="color:#B392F0;">  logError</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#6A737D;">  // 根据错误类型决定是否退出应用</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">isFatalError</span><span style="color:#E1E4E8;">(error)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dialog.</span><span style="color:#B392F0;">showErrorBox</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应用错误&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;发生致命错误，应用即将退出&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 渲染器进程崩溃处理</span></span>
<span class="line"><span style="color:#E1E4E8;">mainWindow.webContents.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;render-process-gone&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">details</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;渲染器进程崩溃:&#39;</span><span style="color:#E1E4E8;">, details);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (details.reason </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;crashed&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> dialog.</span><span style="color:#B392F0;">showMessageBoxSync</span><span style="color:#E1E4E8;">(mainWindow, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;渲染器崩溃&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&#39;页面渲染进程崩溃，是否重新加载？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      buttons: [</span><span style="color:#9ECBFF;">&#39;重新加载&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;关闭&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      defaultId: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      mainWindow.</span><span style="color:#B392F0;">reload</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// IPC 错误处理</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;safe-operation&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> performRiskyOperation</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, data: result };</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;操作失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">      success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      error: error.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">      code: error.code </span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><p>Electron 主进程作为应用程序的中枢神经系统，其设计和实现质量直接决定了整个应用的稳定性、性能和用户体验。通过合理的主进程架构和良好的编程实践，可以构建出高效可靠的跨平台桌面应用程序。</p>`,41)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
