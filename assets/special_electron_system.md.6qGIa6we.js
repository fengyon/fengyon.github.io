import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Electron 系统功能开发","description":"","frontmatter":{},"headers":[{"level":2,"title":"系统功能开发概述","slug":"系统功能开发概述","link":"#系统功能开发概述","children":[]},{"level":2,"title":"进程间通信机制","slug":"进程间通信机制","link":"#进程间通信机制","children":[{"level":3,"title":"主进程与渲染进程通信","slug":"主进程与渲染进程通信","link":"#主进程与渲染进程通信","children":[]},{"level":3,"title":"安全的上下文桥接","slug":"安全的上下文桥接","link":"#安全的上下文桥接","children":[]}]},{"level":2,"title":"常用系统功能开发","slug":"常用系统功能开发","link":"#常用系统功能开发","children":[{"level":3,"title":"文件系统操作","slug":"文件系统操作","link":"#文件系统操作","children":[]},{"level":3,"title":"系统对话框与原生界面","slug":"系统对话框与原生界面","link":"#系统对话框与原生界面","children":[]},{"level":3,"title":"系统托盘与菜单","slug":"系统托盘与菜单","link":"#系统托盘与菜单","children":[]}]},{"level":2,"title":"常用开源库与 API","slug":"常用开源库与-api","link":"#常用开源库与-api","children":[{"level":3,"title":"electron-store - 应用配置存储","slug":"electron-store-应用配置存储","link":"#electron-store-应用配置存储","children":[]},{"level":3,"title":"electron-updater - 自动更新","slug":"electron-updater-自动更新","link":"#electron-updater-自动更新","children":[]},{"level":3,"title":"electron-log - 日志记录","slug":"electron-log-日志记录","link":"#electron-log-日志记录","children":[]}]},{"level":2,"title":"模块化项目结构","slug":"模块化项目结构","link":"#模块化项目结构","children":[]},{"level":2,"title":"安全最佳实践","slug":"安全最佳实践","link":"#安全最佳实践","children":[]}],"relativePath":"special/electron/system.md","filePath":"special/electron/system.md"}'),o={name:"special/electron/system.md"};function e(c,s,E,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/electron/system.md for this page in Markdown format</div><h1 id="electron-系统功能开发" tabindex="-1">Electron 系统功能开发 <a class="header-anchor" href="#electron-系统功能开发" aria-label="Permalink to &quot;Electron 系统功能开发&quot;">​</a></h1><h2 id="系统功能开发概述" tabindex="-1">系统功能开发概述 <a class="header-anchor" href="#系统功能开发概述" aria-label="Permalink to &quot;系统功能开发概述&quot;">​</a></h2><p>Electron 系统功能开发指的是利用 Electron 提供的 API 与操作系统底层功能进行交互的能力。与传统 Web 应用不同，Electron 允许开发者突破浏览器沙箱限制，<strong>直接访问文件系统、系统对话框、菜单栏、托盘图标等原生桌面功能</strong>。这种能力主要通过在主进程中调用 Node.js API 和在渲染进程中通过预加载脚本安全地暴露系统功能来实现。</p><p>系统功能开发的核心在于理解 Electron 的<strong>多进程架构</strong>和<strong>安全通信机制</strong>。主进程作为应用的核心，拥有完整的 Node.js 访问权限，而渲染进程运行在相对安全的沙箱环境中，两者通过 IPC (进程间通信) 进行安全的数据交换。</p><h2 id="进程间通信机制" tabindex="-1">进程间通信机制 <a class="header-anchor" href="#进程间通信机制" aria-label="Permalink to &quot;进程间通信机制&quot;">​</a></h2><h3 id="主进程与渲染进程通信" tabindex="-1">主进程与渲染进程通信 <a class="header-anchor" href="#主进程与渲染进程通信" aria-label="Permalink to &quot;主进程与渲染进程通信&quot;">​</a></h3><p>Electron 应用由一个主进程和多个渲染进程组成。主进程负责创建和管理应用窗口，而每个窗口运行在独立的渲染进程中。进程间通信是系统功能开发的基础。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>主进程 (Node.js 环境)</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>    | IPC</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>渲染进程 (Chromium 环境)</span></span></code></pre></div><h3 id="安全的上下文桥接" tabindex="-1">安全的上下文桥接 <a class="header-anchor" href="#安全的上下文桥接" aria-label="Permalink to &quot;安全的上下文桥接&quot;">​</a></h3><p>现代 Electron 应用推荐使用 <code>contextBridge</code> 在隔离的上下文中创建安全的桥梁。这可以防止渲染进程直接访问 Node.js API，同时暴露必要的系统功能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// preload.js (预加载脚本)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { contextBridge, ipcRenderer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electronAPI&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">  openFile</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dialog:openFile&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">  saveFile</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">content</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;file:save&#39;</span><span style="color:#E1E4E8;">, content),</span></span>
<span class="line"><span style="color:#B392F0;">  getSystemInfo</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;system:info&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>在主进程中处理这些 IPC 调用：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js (主进程)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { app, BrowserWindow, ipcMain, dialog } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFile, writeFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs/promises&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { platform } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;os&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> createWindow</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> win</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用上下文隔离</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 禁用 Node.js 集成以提高安全性</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  win.</span><span style="color:#B392F0;">loadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;index.html&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理文件打开请求</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dialog:openFile&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> dialog.</span><span style="color:#B392F0;">showOpenDialog</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    properties: [</span><span style="color:#9ECBFF;">&#39;openFile&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    filters: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;Text Files&#39;</span><span style="color:#E1E4E8;">, extensions: [</span><span style="color:#9ECBFF;">&#39;txt&#39;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;All Files&#39;</span><span style="color:#E1E4E8;">, extensions: [</span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">result.canceled </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> result.filePaths.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> content</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(result.filePaths[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { content, path: result.filePaths[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理文件保存请求</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;file:save&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">content</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> dialog.</span><span style="color:#B392F0;">showSaveDialog</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    filters: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;Text Files&#39;</span><span style="color:#E1E4E8;">, extensions: [</span><span style="color:#9ECBFF;">&#39;txt&#39;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;All Files&#39;</span><span style="color:#E1E4E8;">, extensions: [</span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">result.canceled) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> writeFile</span><span style="color:#E1E4E8;">(result.filePath, content, </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, path: result.filePath }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取系统信息</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;system:info&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    platform: </span><span style="color:#B392F0;">platform</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    arch: process.arch,</span></span>
<span class="line"><span style="color:#E1E4E8;">    versions: process.versions,</span></span>
<span class="line"><span style="color:#E1E4E8;">    memory: process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">whenReady</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(createWindow)</span></span></code></pre></div><p>在渲染进程中调用暴露的 API：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// renderer.js (渲染进程)</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;open-file-btn&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> fileData</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.electronAPI.</span><span style="color:#B392F0;">openFile</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (fileData) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;editor&#39;</span><span style="color:#E1E4E8;">).value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fileData.content</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;文件已加载:&#39;</span><span style="color:#E1E4E8;">, fileData.path)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;打开文件失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取系统信息</span></span>
<span class="line"><span style="color:#E1E4E8;">window.electronAPI.</span><span style="color:#B392F0;">getSystemInfo</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;系统信息:&#39;</span><span style="color:#E1E4E8;">, info)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="常用系统功能开发" tabindex="-1">常用系统功能开发 <a class="header-anchor" href="#常用系统功能开发" aria-label="Permalink to &quot;常用系统功能开发&quot;">​</a></h2><h3 id="文件系统操作" tabindex="-1">文件系统操作 <a class="header-anchor" href="#文件系统操作" aria-label="Permalink to &quot;文件系统操作&quot;">​</a></h3><p>Electron 通过 Node.js 的 fs 模块提供完整的文件系统访问能力。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js 中的文件操作处理程序</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readdir, stat, mkdir, unlink, readFile, writeFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs/promises&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { homedir } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;os&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { join, basename, extname } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;path&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 列出目录内容</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs:listDirectory&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dirPath</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> homedir</span><span style="color:#E1E4E8;">()) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> items</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readdir</span><span style="color:#E1E4E8;">(dirPath)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> detailedItems</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      items.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> itemPath</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(dirPath, item)</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> itemStat</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> stat</span><span style="color:#E1E4E8;">(itemPath)</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: item,</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: itemPath,</span></span>
<span class="line"><span style="color:#E1E4E8;">          isDirectory: itemStat.</span><span style="color:#B392F0;">isDirectory</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">          size: itemStat.size,</span></span>
<span class="line"><span style="color:#E1E4E8;">          modified: itemStat.mtime,</span></span>
<span class="line"><span style="color:#E1E4E8;">          extension: itemStat.</span><span style="color:#B392F0;">isFile</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">?</span><span style="color:#B392F0;"> extname</span><span style="color:#E1E4E8;">(item) </span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: dirPath,</span></span>
<span class="line"><span style="color:#E1E4E8;">      items: detailedItems,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建目录</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs:createDirectory&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">parentPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dirName</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newDirPath</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(parentPath, dirName)</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> mkdir</span><span style="color:#E1E4E8;">(newDirPath)</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, path: newDirPath }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除文件</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs:deleteFile&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> unlink</span><span style="color:#E1E4E8;">(filePath)</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>在预加载脚本中暴露这些功能：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// preload.js - 文件系统 API</span></span>
<span class="line"><span style="color:#E1E4E8;">contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fileSystemAPI&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">  listDirectory</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs:listDirectory&#39;</span><span style="color:#E1E4E8;">, path),</span></span>
<span class="line"><span style="color:#B392F0;">  createDirectory</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">parentPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dirName</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs:createDirectory&#39;</span><span style="color:#E1E4E8;">, parentPath, dirName),</span></span>
<span class="line"><span style="color:#B392F0;">  deleteFile</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs:deleteFile&#39;</span><span style="color:#E1E4E8;">, filePath),</span></span>
<span class="line"><span style="color:#B392F0;">  readFile</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs:readFile&#39;</span><span style="color:#E1E4E8;">, filePath),</span></span>
<span class="line"><span style="color:#B392F0;">  writeFile</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">content</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs:writeFile&#39;</span><span style="color:#E1E4E8;">, filePath, content),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="系统对话框与原生界面" tabindex="-1">系统对话框与原生界面 <a class="header-anchor" href="#系统对话框与原生界面" aria-label="Permalink to &quot;系统对话框与原生界面&quot;">​</a></h3><p>Electron 的 <code>dialog</code> 模块提供系统原生对话框。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js - 对话框处理</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { dialog, shell, clipboard, nativeImage } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 显示消息对话框</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dialog:showMessage&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> dialog.</span><span style="color:#B392F0;">showMessageBox</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: options.type </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: options.title </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;提示&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: options.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">    detail: options.detail,</span></span>
<span class="line"><span style="color:#E1E4E8;">    buttons: options.buttons </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;确定&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    defaultId: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    cancelId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { response: result.response, checkboxChecked: result.checkboxChecked }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 显示错误对话框</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dialog:showError&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">title</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">content</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  dialog.</span><span style="color:#B392F0;">showErrorBox</span><span style="color:#E1E4E8;">(title, content)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打开外部链接</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;shell:openExternal&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  await</span><span style="color:#E1E4E8;"> shell.</span><span style="color:#B392F0;">openExternal</span><span style="color:#E1E4E8;">(url)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 剪贴板操作</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;clipboard:writeText&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  clipboard.</span><span style="color:#B392F0;">writeText</span><span style="color:#E1E4E8;">(text)</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;clipboard:readText&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> clipboard.</span><span style="color:#B392F0;">readText</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 图像剪贴板操作</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;clipboard:writeImage&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">imageData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> image</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> nativeImage.</span><span style="color:#B392F0;">createFromDataURL</span><span style="color:#E1E4E8;">(imageData)</span></span>
<span class="line"><span style="color:#E1E4E8;">  clipboard.</span><span style="color:#B392F0;">writeImage</span><span style="color:#E1E4E8;">(image)</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="系统托盘与菜单" tabindex="-1">系统托盘与菜单 <a class="header-anchor" href="#系统托盘与菜单" aria-label="Permalink to &quot;系统托盘与菜单&quot;">​</a></h3><p>系统托盘图标和自定义菜单是桌面应用的特色功能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js - 系统托盘和菜单</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Tray, Menu, nativeImage } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { join } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;path&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> tray </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> createTray</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建托盘图标</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> iconPath</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;assets&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;tray-icon.png&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> trayIcon</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> nativeImage</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">createFromPath</span><span style="color:#E1E4E8;">(iconPath)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">resize</span><span style="color:#E1E4E8;">({ width: </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, height: </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  tray </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Tray</span><span style="color:#E1E4E8;">(trayIcon)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 创建上下文菜单</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> contextMenu</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Menu.</span><span style="color:#B392F0;">buildFromTemplate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;显示主窗口&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">      click</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> mainWindow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> BrowserWindow.</span><span style="color:#B392F0;">getAllWindows</span><span style="color:#E1E4E8;">()[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (mainWindow) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          mainWindow.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">          mainWindow.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;退出&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">      click</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        app.</span><span style="color:#B392F0;">quit</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  tray.</span><span style="color:#B392F0;">setToolTip</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;我的 Electron 应用&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  tray.</span><span style="color:#B392F0;">setContextMenu</span><span style="color:#E1E4E8;">(contextMenu)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 托盘图标点击事件</span></span>
<span class="line"><span style="color:#E1E4E8;">  tray.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mainWindow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> BrowserWindow.</span><span style="color:#B392F0;">getAllWindows</span><span style="color:#E1E4E8;">()[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (mainWindow) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (mainWindow.</span><span style="color:#B392F0;">isVisible</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        mainWindow.</span><span style="color:#B392F0;">hide</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        mainWindow.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        mainWindow.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
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
<span class="line"><span style="color:#B392F0;">          click</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">            // 新建文件逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: </span><span style="color:#9ECBFF;">&#39;打开&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          accelerator: </span><span style="color:#9ECBFF;">&#39;CmdOrCtrl+O&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">          click</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> dialog.</span><span style="color:#B392F0;">showOpenDialog</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">              properties: [</span><span style="color:#9ECBFF;">&#39;openFile&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"><span style="color:#6A737D;">            // 处理打开的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { type: </span><span style="color:#9ECBFF;">&#39;separator&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: </span><span style="color:#9ECBFF;">&#39;退出&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          accelerator: process.platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;darwin&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;Cmd+Q&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;Ctrl+Q&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">          click</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            app.</span><span style="color:#B392F0;">quit</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;编辑&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      submenu: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;undo&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;撤销&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;redo&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;重做&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { type: </span><span style="color:#9ECBFF;">&#39;separator&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;cut&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;剪切&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;copy&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;复制&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;paste&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;粘贴&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;视图&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      submenu: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;reload&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;重新加载&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;forceReload&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;强制重新加载&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;toggleDevTools&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;开发者工具&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { type: </span><span style="color:#9ECBFF;">&#39;separator&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;resetZoom&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;实际大小&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;zoomIn&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;放大&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;zoomOut&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;缩小&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { type: </span><span style="color:#9ECBFF;">&#39;separator&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { role: </span><span style="color:#9ECBFF;">&#39;togglefullscreen&#39;</span><span style="color:#E1E4E8;">, label: </span><span style="color:#9ECBFF;">&#39;切换全屏&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> menu</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Menu.</span><span style="color:#B392F0;">buildFromTemplate</span><span style="color:#E1E4E8;">(template)</span></span>
<span class="line"><span style="color:#E1E4E8;">  Menu.</span><span style="color:#B392F0;">setApplicationMenu</span><span style="color:#E1E4E8;">(menu)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">whenReady</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  createWindow</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">  createTray</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">  createApplicationMenu</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="常用开源库与-api" tabindex="-1">常用开源库与 API <a class="header-anchor" href="#常用开源库与-api" aria-label="Permalink to &quot;常用开源库与 API&quot;">​</a></h2><h3 id="electron-store-应用配置存储" tabindex="-1">electron-store - 应用配置存储 <a class="header-anchor" href="#electron-store-应用配置存储" aria-label="Permalink to &quot;electron-store - 应用配置存储&quot;">​</a></h3><p><code>electron-store</code> 提供简单易用的持久化配置存储。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// stores/configStore.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Store </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron-store&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化配置存储</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;app-config&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  defaults: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    windowBounds: { width: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">, height: </span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    recentFiles: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    userPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      theme: </span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      language: </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      autoSave: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      saveInterval: </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在主进程中暴露存储操作</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;store:get&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">defaultValue</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> store.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key, defaultValue)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;store:set&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  store.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, value)</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;store:delete&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  store.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(key)</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;store:clear&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  store.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> store</span></span></code></pre></div><p>在渲染进程中使用：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// renderer.js - 使用配置存储</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> configAPI</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> getConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">defaultValue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.electronAPI.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;store:get&#39;</span><span style="color:#E1E4E8;">, key, defaultValue)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> setConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.electronAPI.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;store:set&#39;</span><span style="color:#E1E4E8;">, key, value)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> getUserPreferences</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userPreferences&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> updateUserPreferences</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updates</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getUserPreferences</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> updated</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">current, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">updates }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userPreferences&#39;</span><span style="color:#E1E4E8;">, updated)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> loadUserSettings</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> prefs</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> configAPI.</span><span style="color:#B392F0;">getUserPreferences</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">  applyTheme</span><span style="color:#E1E4E8;">(prefs.theme)</span></span>
<span class="line"><span style="color:#B392F0;">  setLanguage</span><span style="color:#E1E4E8;">(prefs.language)</span></span>
<span class="line"><span style="color:#B392F0;">  setupAutoSave</span><span style="color:#E1E4E8;">(prefs.autoSave, prefs.saveInterval)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> saveWindowSize</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">width</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">height</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  await</span><span style="color:#E1E4E8;"> configAPI.</span><span style="color:#B392F0;">setConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;windowBounds&#39;</span><span style="color:#E1E4E8;">, { width, height })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="electron-updater-自动更新" tabindex="-1">electron-updater - 自动更新 <a class="header-anchor" href="#electron-updater-自动更新" aria-label="Permalink to &quot;electron-updater - 自动更新&quot;">​</a></h3><p><code>electron-updater</code> 提供应用自动更新功能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// update/updateManager.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { autoUpdater } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron-updater&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { dialog, BrowserWindow } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> UpdateManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.mainWindow </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupAutoUpdater</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setMainWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.mainWindow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupAutoUpdater</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 配置自动更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.autoDownload </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.autoInstallOnAppQuit </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 更新可用</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-available&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.mainWindow.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-available&#39;</span><span style="color:#E1E4E8;">, info)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      dialog</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">showMessageBox</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;发现新版本&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          message: </span><span style="color:#9ECBFF;">\`发现新版本 \${</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}，是否立即下载？\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          detail: info.releaseNotes </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;新版本包含功能改进和错误修复。&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          buttons: [</span><span style="color:#9ECBFF;">&#39;下载&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;取消&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          defaultId: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          cancelId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (result.response </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            autoUpdater.</span><span style="color:#B392F0;">downloadUpdate</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 更新下载进度</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;download-progress&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">progressObj</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.mainWindow.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;download-progress&#39;</span><span style="color:#E1E4E8;">, progressObj)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 更新下载完成</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-downloaded&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dialog</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">showMessageBox</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;更新下载完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          message: </span><span style="color:#9ECBFF;">&#39;新版本已下载完成，是否立即重启应用？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          buttons: [</span><span style="color:#9ECBFF;">&#39;立即重启&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;稍后重启&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          defaultId: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          cancelId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (result.response </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            autoUpdater.</span><span style="color:#B392F0;">quitAndInstall</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 错误处理</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.mainWindow.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-error&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;自动更新错误:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 检查更新</span></span>
<span class="line"><span style="color:#B392F0;">  checkForUpdates</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.</span><span style="color:#B392F0;">checkForUpdates</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> UpdateManager</span></span></code></pre></div><p>在主进程中初始化：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js - 初始化自动更新</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> UpdateManager </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./update/updateManager.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> updateManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> UpdateManager</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">whenReady</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> mainWindow</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createWindow</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  updateManager.</span><span style="color:#B392F0;">setMainWindow</span><span style="color:#E1E4E8;">(mainWindow)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 应用启动后检查更新</span></span>
<span class="line"><span style="color:#B392F0;">  setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    updateManager.</span><span style="color:#B392F0;">checkForUpdates</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 暴露更新检查功能</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;updater:checkForUpdates&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  updateManager.</span><span style="color:#B392F0;">checkForUpdates</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="electron-log-日志记录" tabindex="-1">electron-log - 日志记录 <a class="header-anchor" href="#electron-log-日志记录" aria-label="Permalink to &quot;electron-log - 日志记录&quot;">​</a></h3><p><code>electron-log</code> 提供跨平台的日志记录功能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// utils/logger.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> log </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron-log&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置日志</span></span>
<span class="line"><span style="color:#E1E4E8;">log.transports.file.</span><span style="color:#B392F0;">resolvePath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">variables</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">app</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">getPath</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;userData&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}/logs/main.log\`</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">log.transports.file.level </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;info&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">log.transports.console.level </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;debug&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在主进程中暴露日志功能</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;log:info&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">meta</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  log.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">(message, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">meta)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;log:error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">meta</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  log.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(message, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">meta)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;log:warn&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">meta</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  log.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(message, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">meta)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;log:debug&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">meta</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  log.</span><span style="color:#B392F0;">debug</span><span style="color:#E1E4E8;">(message, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">meta)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> log</span></span></code></pre></div><p>在预加载脚本中暴露日志 API：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// preload.js - 日志 API</span></span>
<span class="line"><span style="color:#E1E4E8;">contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;loggerAPI&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">  info</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">meta</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;log:info&#39;</span><span style="color:#E1E4E8;">, message, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">meta),</span></span>
<span class="line"><span style="color:#B392F0;">  error</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">meta</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;log:error&#39;</span><span style="color:#E1E4E8;">, message, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">meta),</span></span>
<span class="line"><span style="color:#B392F0;">  warn</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">meta</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;log:warn&#39;</span><span style="color:#E1E4E8;">, message, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">meta),</span></span>
<span class="line"><span style="color:#B392F0;">  debug</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">meta</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;log:debug&#39;</span><span style="color:#E1E4E8;">, message, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">meta),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>在渲染进程中使用：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// renderer.js - 记录日志</span></span>
<span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.loggerAPI.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应用程序启动&#39;</span><span style="color:#E1E4E8;">, { timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">() })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 业务逻辑...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  window.loggerAPI.</span><span style="color:#B392F0;">debug</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户执行了某个操作&#39;</span><span style="color:#E1E4E8;">, { userId: </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">, action: </span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.loggerAPI.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;操作执行失败&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="模块化项目结构" tabindex="-1">模块化项目结构 <a class="header-anchor" href="#模块化项目结构" aria-label="Permalink to &quot;模块化项目结构&quot;">​</a></h2><p>推荐的项目结构组织方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>your-electron-app/</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>├── main.js                      # 主进程入口文件</span></span>
<span class="line"><span>├── preload.js                   # 预加载脚本入口</span></span>
<span class="line"><span>├── src/</span></span>
<span class="line"><span>│   ├── main/                    # 主进程代码</span></span>
<span class="line"><span>│   │   ├── core/                # 核心模块</span></span>
<span class="line"><span>│   │   │   ├── windowManager.js # 窗口管理</span></span>
<span class="line"><span>│   │   │   ├── menuManager.js   # 菜单管理</span></span>
<span class="line"><span>│   │   │   └── ipcHandlers.js   # IPC 处理器</span></span>
<span class="line"><span>│   │   ├── modules/             # 功能模块</span></span>
<span class="line"><span>│   │   │   ├── fileSystem.js    # 文件系统操作</span></span>
<span class="line"><span>│   │   │   ├── autoUpdater.js   # 自动更新</span></span>
<span class="line"><span>│   │   │   └── systemTray.js    # 系统托盘</span></span>
<span class="line"><span>│   │   └── utils/               # 工具函数</span></span>
<span class="line"><span>│   │       ├── logger.js        # 日志工具</span></span>
<span class="line"><span>│   │       └── helpers.js       # 辅助函数</span></span>
<span class="line"><span>│   ├── renderer/                # 渲染进程代码</span></span>
<span class="line"><span>│   │   ├── public/              # 静态资源</span></span>
<span class="line"><span>│   │   └── src/</span></span>
<span class="line"><span>│   │       ├── components/      # UI 组件</span></span>
<span class="line"><span>│   │       ├── services/        # 业务服务</span></span>
<span class="line"><span>│   │       │   ├── electronAPI.js # Electron API 封装</span></span>
<span class="line"><span>│   │       │   └── configService.js # 配置服务</span></span>
<span class="line"><span>│   │       └── utils/           # 渲染进程工具</span></span>
<span class="line"><span>│   └── shared/                  # 共享代码</span></span>
<span class="line"><span>│       ├── constants.js         # 共享常量</span></span>
<span class="line"><span>│       └── ipcChannels.js       # IPC 通道定义</span></span>
<span class="line"><span>└── assets/                      # 应用资源</span></span>
<span class="line"><span>    ├── icons/                   # 图标文件</span></span>
<span class="line"><span>    └── images/                  # 图片资源</span></span></code></pre></div><h2 id="安全最佳实践" tabindex="-1">安全最佳实践 <a class="header-anchor" href="#安全最佳实践" aria-label="Permalink to &quot;安全最佳实践&quot;">​</a></h2><p>在开发系统功能时，安全至关重要。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 安全配置示例</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> createSecureWindow</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> win</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用上下文隔离</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 禁用 Node.js 集成</span></span>
<span class="line"><span style="color:#E1E4E8;">      enableRemoteModule: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 禁用远程模块</span></span>
<span class="line"><span style="color:#E1E4E8;">      webSecurity: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用 Web 安全</span></span>
<span class="line"><span style="color:#E1E4E8;">      allowRunningInsecureContent: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 禁止运行不安全内容</span></span>
<span class="line"><span style="color:#E1E4E8;">      experimentalFeatures: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 禁用实验性功能</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 加载内容安全策略</span></span>
<span class="line"><span style="color:#E1E4E8;">  win.webContents.session.webRequest.</span><span style="color:#B392F0;">onHeadersReceived</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">details</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    callback</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      responseHeaders: {</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">details.responseHeaders,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;Content-Security-Policy&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#9ECBFF;">          &quot;default-src &#39;self&#39;; &quot;</span><span style="color:#F97583;"> +</span></span>
<span class="line"><span style="color:#9ECBFF;">            &quot;script-src &#39;self&#39; &#39;unsafe-inline&#39;; &quot;</span><span style="color:#F97583;"> +</span></span>
<span class="line"><span style="color:#9ECBFF;">            &quot;style-src &#39;self&#39; &#39;unsafe-inline&#39;; &quot;</span><span style="color:#F97583;"> +</span></span>
<span class="line"><span style="color:#9ECBFF;">            &quot;img-src &#39;self&#39; data: https:;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> win</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,52)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
