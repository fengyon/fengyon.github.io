import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Electron 进程通信","description":"","frontmatter":{},"headers":[{"level":2,"title":"进程通信基础架构","slug":"进程通信基础架构","link":"#进程通信基础架构","children":[]},{"level":2,"title":"IPC 核心模块","slug":"ipc-核心模块","link":"#ipc-核心模块","children":[{"level":3,"title":"ipcMain 模块","slug":"ipcmain-模块","link":"#ipcmain-模块","children":[]},{"level":3,"title":"ipcRenderer 模块","slug":"ipcrenderer-模块","link":"#ipcrenderer-模块","children":[]}]},{"level":2,"title":"通信模式详解","slug":"通信模式详解","link":"#通信模式详解","children":[{"level":3,"title":"请求-响应模式","slug":"请求-响应模式","link":"#请求-响应模式","children":[]},{"level":3,"title":"事件广播模式","slug":"事件广播模式","link":"#事件广播模式","children":[]},{"level":3,"title":"双向通信模式","slug":"双向通信模式","link":"#双向通信模式","children":[]}]},{"level":2,"title":"高级通信技术","slug":"高级通信技术","link":"#高级通信技术","children":[{"level":3,"title":"流式数据传输","slug":"流式数据传输","link":"#流式数据传输","children":[]},{"level":3,"title":"共享内存通信","slug":"共享内存通信","link":"#共享内存通信","children":[]}]},{"level":2,"title":"安全通信实践","slug":"安全通信实践","link":"#安全通信实践","children":[{"level":3,"title":"上下文隔离安全","slug":"上下文隔离安全","link":"#上下文隔离安全","children":[]},{"level":3,"title":"消息验证","slug":"消息验证","link":"#消息验证","children":[]}]},{"level":2,"title":"错误处理与调试","slug":"错误处理与调试","link":"#错误处理与调试","children":[{"level":3,"title":"健壮的错误处理","slug":"健壮的错误处理","link":"#健壮的错误处理","children":[]},{"level":3,"title":"通信监控与调试","slug":"通信监控与调试","link":"#通信监控与调试","children":[]}]}],"relativePath":"special/electron/ipc.md","filePath":"special/electron/ipc.md"}'),o={name:"special/electron/ipc.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/electron/ipc.md for this page in Markdown format</div><h1 id="electron-进程通信" tabindex="-1">Electron 进程通信 <a class="header-anchor" href="#electron-进程通信" aria-label="Permalink to &quot;Electron 进程通信&quot;">​</a></h1><p>Electron 进程通信是 Electron 应用架构中的核心技术，它实现了主进程与渲染进程之间的数据交换和功能调用。由于 Electron 的多进程架构特性，进程间通信成为连接应用程序各个部分的桥梁，确保了安全、高效的跨进程协作。</p><h2 id="进程通信基础架构" tabindex="-1">进程通信基础架构 <a class="header-anchor" href="#进程通信基础架构" aria-label="Permalink to &quot;进程通信基础架构&quot;">​</a></h2><p>Electron 采用基于 Chromium IPC 的进程通信机制，为不同的进程上下文提供了安全的通信通道。整个通信架构建立在事件驱动模型之上，支持异步和同步两种通信模式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>进程通信架构示意图：</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    主进程 (Main Process)</span></span>
<span class="line"><span>         |</span></span>
<span class="line"><span>         +-- ipcMain 模块</span></span>
<span class="line"><span>         |     |</span></span>
<span class="line"><span>         |     +-- 处理来自渲染进程的消息</span></span>
<span class="line"><span>         |     +-- 发送消息到渲染进程</span></span>
<span class="line"><span>         |</span></span>
<span class="line"><span>         +-- webContents 对象</span></span>
<span class="line"><span>               |</span></span>
<span class="line"><span>               +-- 直接向特定窗口发送消息</span></span>
<span class="line"><span>               +-- 管理渲染进程通信</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    渲染进程 (Renderer Process)</span></span>
<span class="line"><span>         |</span></span>
<span class="line"><span>         +-- ipcRenderer 模块</span></span>
<span class="line"><span>         |     |</span></span>
<span class="line"><span>         |     +-- 发送消息到主进程</span></span>
<span class="line"><span>         |     +-- 接收主进程消息</span></span>
<span class="line"><span>         |</span></span>
<span class="line"><span>         +-- 预加载脚本 (Preload Script)</span></span>
<span class="line"><span>               |</span></span>
<span class="line"><span>               +-- 安全地暴露 IPC API</span></span>
<span class="line"><span>               +-- 上下文隔离桥梁</span></span></code></pre></div><h2 id="ipc-核心模块" tabindex="-1">IPC 核心模块 <a class="header-anchor" href="#ipc-核心模块" aria-label="Permalink to &quot;IPC 核心模块&quot;">​</a></h2><h3 id="ipcmain-模块" tabindex="-1">ipcMain 模块 <a class="header-anchor" href="#ipcmain-模块" aria-label="Permalink to &quot;ipcMain 模块&quot;">​</a></h3><p>ipcMain 模块在主进程中运行，用于处理从渲染进程发送的异步和同步消息：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js (主进程)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ipcMain, dialog, app } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> fs </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理异步消息 - 推荐方式</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;file:read&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> content</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readFile</span><span style="color:#E1E4E8;">(filePath, </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, data: content };</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理单向消息</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:minimize&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> BrowserWindow.</span><span style="color:#B392F0;">fromWebContents</span><span style="color:#E1E4E8;">(event.sender);</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">minimize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 发送消息到渲染进程</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> sendToRenderer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> windows</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> BrowserWindow.</span><span style="color:#B392F0;">getAllWindows</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  windows.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">isDestroyed</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(channel, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="ipcrenderer-模块" tabindex="-1">ipcRenderer 模块 <a class="header-anchor" href="#ipcrenderer-模块" aria-label="Permalink to &quot;ipcRenderer 模块&quot;">​</a></h3><p>ipcRenderer 模块在渲染进程中运行，通过预加载脚本安全地暴露给渲染进程：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// preload.js (预加载脚本)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { contextBridge, ipcRenderer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 通过 contextBridge 安全地暴露 API</span></span>
<span class="line"><span style="color:#E1E4E8;">contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electronAPI&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#6A737D;">  // 文件操作</span></span>
<span class="line"><span style="color:#B392F0;">  readFile</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;file:read&#39;</span><span style="color:#E1E4E8;">, filePath),</span></span>
<span class="line"><span style="color:#B392F0;">  writeFile</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">content</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;file:write&#39;</span><span style="color:#E1E4E8;">, filePath, content),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 窗口控制</span></span>
<span class="line"><span style="color:#B392F0;">  minimizeWindow</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:minimize&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">  maximizeWindow</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:maximize&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 事件监听</span></span>
<span class="line"><span style="color:#B392F0;">  onUpdateAvailable</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcRenderer.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update:available&#39;</span><span style="color:#E1E4E8;">, callback),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 移除监听器</span></span>
<span class="line"><span style="color:#B392F0;">  removeAllListeners</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcRenderer.</span><span style="color:#B392F0;">removeAllListeners</span><span style="color:#E1E4E8;">(channel)</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="通信模式详解" tabindex="-1">通信模式详解 <a class="header-anchor" href="#通信模式详解" aria-label="Permalink to &quot;通信模式详解&quot;">​</a></h2><h3 id="请求-响应模式" tabindex="-1">请求-响应模式 <a class="header-anchor" href="#请求-响应模式" aria-label="Permalink to &quot;请求-响应模式&quot;">​</a></h3><p>请求-响应模式是最常用的通信方式，渲染进程发送请求，主进程处理并返回结果：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 渲染进程中使用 (通过预加载脚本暴露的 API)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useState, useEffect } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> FileViewer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setContent</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">loading</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setLoading</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> loadFile</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    setLoading</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.electronAPI.</span><span style="color:#B392F0;">readFile</span><span style="color:#E1E4E8;">(filePath);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (result.success) {</span></span>
<span class="line"><span style="color:#B392F0;">        setContent</span><span style="color:#E1E4E8;">(result.data);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;读取文件失败:&#39;</span><span style="color:#E1E4E8;">, result.error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;通信错误:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setLoading</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {loading </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;加载中...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">pre</span><span style="color:#E1E4E8;">&gt;{content}&lt;/</span><span style="color:#85E89D;">pre</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> loadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/path/to/file.txt&#39;</span><span style="color:#E1E4E8;">)}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        加载文件</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p><strong>通信流程</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>渲染进程: window.electronAPI.readFile() </span></span>
<span class="line"><span>    → </span></span>
<span class="line"><span>主进程: ipcMain.handle(&#39;file:read&#39;) </span></span>
<span class="line"><span>    → </span></span>
<span class="line"><span>文件系统操作 </span></span>
<span class="line"><span>    → </span></span>
<span class="line"><span>返回结果: { success, data/error }</span></span></code></pre></div><h3 id="事件广播模式" tabindex="-1">事件广播模式 <a class="header-anchor" href="#事件广播模式" aria-label="Permalink to &quot;事件广播模式&quot;">​</a></h3><p>主进程可以向所有或特定的渲染进程发送事件通知：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js (主进程)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ipcMain, BrowserWindow } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ApplicationManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupEventHandlers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupEventHandlers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 应用状态变化时通知所有窗口</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;app:getStatus&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.status);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 广播到所有窗口</span></span>
<span class="line"><span style="color:#B392F0;">  broadcastToAll</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    BrowserWindow.</span><span style="color:#B392F0;">getAllWindows</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">isDestroyed</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        window.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(channel, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 发送到特定窗口</span></span>
<span class="line"><span style="color:#B392F0;">  sendToWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (window </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">isDestroyed</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(channel, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 状态更新示例</span></span>
<span class="line"><span style="color:#B392F0;">  updateStatus</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newStatus</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newStatus;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">broadcastToAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;app:statusChanged&#39;</span><span style="color:#E1E4E8;">, newStatus);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="双向通信模式" tabindex="-1">双向通信模式 <a class="header-anchor" href="#双向通信模式" aria-label="Permalink to &quot;双向通信模式&quot;">​</a></h3><p>支持复杂的双向通信场景，多个消息来回交互：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js (主进程)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ipcMain } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> DatabaseService</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupIPC</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupIPC</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 复杂的数据库操作流程</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;db:transaction&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">operations</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> op</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> operations) {</span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          switch</span><span style="color:#E1E4E8;"> (op.type) {</span></span>
<span class="line"><span style="color:#F97583;">            case</span><span style="color:#9ECBFF;"> &#39;insert&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">              const</span><span style="color:#79B8FF;"> inserted</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">insert</span><span style="color:#E1E4E8;">(op.data);</span></span>
<span class="line"><span style="color:#E1E4E8;">              results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, data: inserted });</span></span>
<span class="line"><span style="color:#F97583;">              break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span></span>
<span class="line"><span style="color:#F97583;">            case</span><span style="color:#9ECBFF;"> &#39;update&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">              const</span><span style="color:#79B8FF;"> updated</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(op.id, op.data);</span></span>
<span class="line"><span style="color:#E1E4E8;">              results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, data: updated });</span></span>
<span class="line"><span style="color:#F97583;">              break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span></span>
<span class="line"><span style="color:#F97583;">            case</span><span style="color:#9ECBFF;"> &#39;delete&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">              await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(op.id);</span></span>
<span class="line"><span style="color:#E1E4E8;">              results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">              break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#6A737D;">          // 发送进度更新</span></span>
<span class="line"><span style="color:#E1E4E8;">          event.sender.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;db:progress&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            completed: results.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            total: operations.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="高级通信技术" tabindex="-1">高级通信技术 <a class="header-anchor" href="#高级通信技术" aria-label="Permalink to &quot;高级通信技术&quot;">​</a></h2><h3 id="流式数据传输" tabindex="-1">流式数据传输 <a class="header-anchor" href="#流式数据传输" aria-label="Permalink to &quot;流式数据传输&quot;">​</a></h3><p>对于大量数据或实时数据流，可以使用流式传输：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js (主进程)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ipcMain } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createReadStream } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Readable } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;stream&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;stream:largeFile&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> stream</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createReadStream</span><span style="color:#E1E4E8;">(filePath);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> chunks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    stream.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">chunk</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 发送数据块到渲染进程</span></span>
<span class="line"><span style="color:#E1E4E8;">      event.sender.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;stream:chunk&#39;</span><span style="color:#E1E4E8;">, chunk.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;base64&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    stream.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;end&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      event.sender.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;stream:end&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">      resolve</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    stream.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      reject</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 渲染进程中的流处理</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> StreamProcessor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.buffer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupStreamListeners</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupStreamListeners</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.electronAPI.</span><span style="color:#B392F0;">onStreamChunk</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">chunkBase64</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> chunk</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(chunkBase64, </span><span style="color:#9ECBFF;">&#39;base64&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.buffer.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(chunk);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">onChunkReceived</span><span style="color:#E1E4E8;">(chunk);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    window.electronAPI.</span><span style="color:#B392F0;">onStreamEnd</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">onStreamComplete</span><span style="color:#E1E4E8;">(Buffer.</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.buffer));</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processLargeFile</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> window.electronAPI.</span><span style="color:#B392F0;">streamLargeFile</span><span style="color:#E1E4E8;">(filePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onChunkReceived</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">chunk</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 处理每个数据块</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;收到数据块:&#39;</span><span style="color:#E1E4E8;">, chunk.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;bytes&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onStreamComplete</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">completeData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 处理完整数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;流传输完成:&#39;</span><span style="color:#E1E4E8;">, completeData.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;bytes&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="共享内存通信" tabindex="-1">共享内存通信 <a class="header-anchor" href="#共享内存通信" aria-label="Permalink to &quot;共享内存通信&quot;">​</a></h3><p>对于性能要求极高的场景，可以使用 SharedArrayBuffer：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js (主进程)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ipcMain } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;memory:createBuffer&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">size</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建共享内存缓冲区</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> sharedBuffer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SharedArrayBuffer</span><span style="color:#E1E4E8;">(size);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> sharedBuffer;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;memory:processData&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">bufferId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">operation</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 处理共享内存中的数据</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> view</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Int32Array</span><span style="color:#E1E4E8;">(sharedBuffers.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(bufferId));</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  switch</span><span style="color:#E1E4E8;"> (operation) {</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;increment&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> view.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Atomics.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(view, i, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;sort&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      view.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="安全通信实践" tabindex="-1">安全通信实践 <a class="header-anchor" href="#安全通信实践" aria-label="Permalink to &quot;安全通信实践&quot;">​</a></h2><h3 id="上下文隔离安全" tabindex="-1">上下文隔离安全 <a class="header-anchor" href="#上下文隔离安全" aria-label="Permalink to &quot;上下文隔离安全&quot;">​</a></h3><p>使用 contextBridge 确保安全的进程通信：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// preload.js (预加载脚本)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { contextBridge, ipcRenderer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 验证和过滤输入</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> sanitizePath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;string&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;路径必须是字符串&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 防止路径遍历攻击</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (path.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;..&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;非法路径&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> path;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 安全地暴露 API</span></span>
<span class="line"><span style="color:#E1E4E8;">contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electronAPI&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">  readFile</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sanitizedPath</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> sanitizePath</span><span style="color:#E1E4E8;">(filePath);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;file:read&#39;</span><span style="color:#E1E4E8;">, sanitizedPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 添加速率限制</span></span>
<span class="line"><span style="color:#E1E4E8;">  rateLimitedCall: (() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> lastCall </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> now</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (now </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> lastCall </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;调用过于频繁&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      lastCall </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> now;</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(channel, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  })()</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="消息验证" tabindex="-1">消息验证 <a class="header-anchor" href="#消息验证" aria-label="Permalink to &quot;消息验证&quot;">​</a></h3><p>在主进程中验证所有传入的消息：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js (主进程)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ipcMain } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 消息验证中间件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> createValidatedHandler</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">schema</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">handler</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 验证消息结构</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> validatedArgs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> schema.</span><span style="color:#B392F0;">validate</span><span style="color:#E1E4E8;">(args);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> handler</span><span style="color:#E1E4E8;">(event, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">validatedArgs);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: </span><span style="color:#9ECBFF;">\`消息验证失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 定义消息模式</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> fileReadSchema</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  validate</span><span style="color:#E1E4E8;">: ([</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> filePath </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;string&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;文件路径必须是字符串&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">filePath.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/allowed/path/&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;无权访问该路径&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> [filePath];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用验证过的处理器</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;file:read&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">createValidatedHandler</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  fileReadSchema,</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 安全的处理逻辑</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> content</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readFile</span><span style="color:#E1E4E8;">(filePath, </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, data: content };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">));</span></span></code></pre></div><h2 id="错误处理与调试" tabindex="-1">错误处理与调试 <a class="header-anchor" href="#错误处理与调试" aria-label="Permalink to &quot;错误处理与调试&quot;">​</a></h2><h3 id="健壮的错误处理" tabindex="-1">健壮的错误处理 <a class="header-anchor" href="#健壮的错误处理" aria-label="Permalink to &quot;健壮的错误处理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 通信错误处理工具类</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> IPCErrorHandler</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> safeInvoke</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.electronAPI[channel](</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> result.success </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(result.error </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> \`调用 \${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">} 失败\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`IPC调用失败 [\${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">}]:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 根据错误类型采取不同策略</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (error.message.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;频繁&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 频率限制错误</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">delay</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">safeInvoke</span><span style="color:#E1E4E8;">(channel, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> delay</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ms</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(resolve, ms));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> loadUserData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> IPCErrorHandler.</span><span style="color:#B392F0;">safeInvoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user:load&#39;</span><span style="color:#E1E4E8;">, userId);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result.data;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 显示用户友好的错误信息</span></span>
<span class="line"><span style="color:#B392F0;">    showErrorMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;加载用户数据失败，请重试&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="通信监控与调试" tabindex="-1">通信监控与调试 <a class="header-anchor" href="#通信监控与调试" aria-label="Permalink to &quot;通信监控与调试&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 开发环境的通信监控</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> IPCMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.messages </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupMonitoring</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 监控所有 IPC 消息</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">monitorAllChannels</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  monitorAllChannels</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> originalInvoke</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.electronAPI.invoke;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    window.electronAPI.</span><span style="color:#B392F0;">invoke</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> originalInvoke.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(window.electronAPI, channel, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          channel,</span></span>
<span class="line"><span style="color:#E1E4E8;">          args,</span></span>
<span class="line"><span style="color:#E1E4E8;">          result,</span></span>
<span class="line"><span style="color:#E1E4E8;">          duration,</span></span>
<span class="line"><span style="color:#E1E4E8;">          timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          channel,</span></span>
<span class="line"><span style="color:#E1E4E8;">          args,</span></span>
<span class="line"><span style="color:#E1E4E8;">          error: error.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">          duration,</span></span>
<span class="line"><span style="color:#E1E4E8;">          timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  logMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.messages.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 保持最近1000条消息</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.messages.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.messages.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 开发环境下输出到控制台</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;IPC Message:&#39;</span><span style="color:#E1E4E8;">, message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getStats</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> stats</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalMessages: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.messages.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      successCount: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.messages.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">m</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> m.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;success&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      errorCount: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.messages.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">m</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> m.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;error&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      averageDuration: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.messages.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">m</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> m.duration, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.messages.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> stats;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化监控</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ipcMonitor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> IPCMonitor</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><p>Electron 进程通信机制为构建复杂的跨进程应用提供了强大的基础。通过合理运用不同的通信模式、实施严格的安全措施、建立健壮的错误处理机制，开发者可以构建出高效、安全、可靠的桌面应用程序。</p>`,46)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
