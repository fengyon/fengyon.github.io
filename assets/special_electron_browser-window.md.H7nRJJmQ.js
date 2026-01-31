import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Electron BrowserWindow","description":"","frontmatter":{},"headers":[{"level":2,"title":"BrowserWindow 基础架构","slug":"browserwindow-基础架构","link":"#browserwindow-基础架构","children":[]},{"level":2,"title":"窗口创建与基础配置","slug":"窗口创建与基础配置","link":"#窗口创建与基础配置","children":[{"level":3,"title":"基础窗口创建","slug":"基础窗口创建","link":"#基础窗口创建","children":[]},{"level":3,"title":"完整配置选项","slug":"完整配置选项","link":"#完整配置选项","children":[]}]},{"level":2,"title":"窗口生命周期管理","slug":"窗口生命周期管理","link":"#窗口生命周期管理","children":[{"level":3,"title":"窗口状态控制","slug":"窗口状态控制","link":"#窗口状态控制","children":[]},{"level":3,"title":"多窗口管理","slug":"多窗口管理","link":"#多窗口管理","children":[]}]},{"level":2,"title":"高级窗口特性","slug":"高级窗口特性","link":"#高级窗口特性","children":[{"level":3,"title":"无边框窗口与自定义标题栏","slug":"无边框窗口与自定义标题栏","link":"#无边框窗口与自定义标题栏","children":[]},{"level":3,"title":"透明窗口与视觉效果","slug":"透明窗口与视觉效果","link":"#透明窗口与视觉效果","children":[]},{"level":3,"title":"多显示器支持","slug":"多显示器支持","link":"#多显示器支持","children":[]}]},{"level":2,"title":"WebContents 控制与内容管理","slug":"webcontents-控制与内容管理","link":"#webcontents-控制与内容管理","children":[{"level":3,"title":"页面加载与导航控制","slug":"页面加载与导航控制","link":"#页面加载与导航控制","children":[]},{"level":3,"title":"开发者工具集成","slug":"开发者工具集成","link":"#开发者工具集成","children":[]}]},{"level":2,"title":"性能优化与最佳实践","slug":"性能优化与最佳实践","link":"#性能优化与最佳实践","children":[{"level":3,"title":"内存管理与性能优化","slug":"内存管理与性能优化","link":"#内存管理与性能优化","children":[]}]}],"relativePath":"special/electron/browser-window.md","filePath":"special/electron/browser-window.md"}'),o={name:"special/electron/browser-window.md"};function e(E,s,c,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/electron/browser-window.md for this page in Markdown format</div><h1 id="electron-browserwindow" tabindex="-1">Electron BrowserWindow <a class="header-anchor" href="#electron-browserwindow" aria-label="Permalink to &quot;Electron BrowserWindow&quot;">​</a></h1><p>Electron BrowserWindow 是创建和控制浏览器窗口的核心模块，它提供了丰富的 API 来创建原生桌面应用程序窗口。每个 BrowserWindow 实例都运行在独立的渲染进程中，可以加载本地 HTML 文件或远程 URL，并支持高度自定义的窗口行为和外观。</p><h2 id="browserwindow-基础架构" tabindex="-1">BrowserWindow 基础架构 <a class="header-anchor" href="#browserwindow-基础架构" aria-label="Permalink to &quot;BrowserWindow 基础架构&quot;">​</a></h2><p>BrowserWindow 是 Electron 应用的用户界面载体，它将 Chromium 的渲染能力与原生窗口控制相结合，形成统一的跨平台窗口管理解决方案。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>BrowserWindow 实例架构：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BrowserWindow 实例</span></span>
<span class="line"><span>     |</span></span>
<span class="line"><span>     +-- 原生窗口控件 (Native Window)</span></span>
<span class="line"><span>     |     |</span></span>
<span class="line"><span>     |     +-- 窗口边框和标题栏</span></span>
<span class="line"><span>     |     +-- 最小化/最大化/关闭按钮</span></span>
<span class="line"><span>     |     +-- 系统菜单和托盘</span></span>
<span class="line"><span>     |</span></span>
<span class="line"><span>     +-- WebContents 实例</span></span>
<span class="line"><span>     |     |</span></span>
<span class="line"><span>     |     +-- Chromium 渲染引擎</span></span>
<span class="line"><span>     |     +-- 页面加载和导航控制</span></span>
<span class="line"><span>     |     +-- 开发者工具集成</span></span>
<span class="line"><span>     |</span></span>
<span class="line"><span>     +-- 事件系统</span></span>
<span class="line"><span>           |</span></span>
<span class="line"><span>           +-- 窗口生命周期事件</span></span>
<span class="line"><span>           +-- 用户交互事件</span></span>
<span class="line"><span>           +-- Web 内容事件</span></span></code></pre></div><h2 id="窗口创建与基础配置" tabindex="-1">窗口创建与基础配置 <a class="header-anchor" href="#窗口创建与基础配置" aria-label="Permalink to &quot;窗口创建与基础配置&quot;">​</a></h2><h3 id="基础窗口创建" tabindex="-1">基础窗口创建 <a class="header-anchor" href="#基础窗口创建" aria-label="Permalink to &quot;基础窗口创建&quot;">​</a></h3><p>创建基本的 BrowserWindow 实例只需要几行代码：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BrowserWindow } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建基础窗口</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> createBasicWindow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> mainWindow</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 初始不显示，避免视觉闪烁</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 窗口准备好后显示</span></span>
<span class="line"><span style="color:#E1E4E8;">  mainWindow.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ready-to-show&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mainWindow.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    mainWindow.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 加载应用内容</span></span>
<span class="line"><span style="color:#E1E4E8;">  mainWindow.</span><span style="color:#B392F0;">loadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;index.html&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> mainWindow;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="完整配置选项" tabindex="-1">完整配置选项 <a class="header-anchor" href="#完整配置选项" aria-label="Permalink to &quot;完整配置选项&quot;">​</a></h3><p>BrowserWindow 支持丰富的配置选项，涵盖外观、行为和安全各个方面：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BrowserWindow } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;url&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> __dirname</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> createConfiguredWindow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">    // 基础尺寸配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minWidth: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minHeight: </span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxWidth: </span><span style="color:#79B8FF;">1600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxHeight: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 窗口位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    x: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    y: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    center: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 在屏幕居中</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 窗口外观</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;我的 Electron 应用&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;assets/icon.png&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    frame: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否显示窗口边框</span></span>
<span class="line"><span style="color:#E1E4E8;">    transparent: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 透明窗口</span></span>
<span class="line"><span style="color:#E1E4E8;">    titleBarStyle: </span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// &#39;default&#39; | &#39;hidden&#39; | &#39;hiddenInset&#39; | &#39;customButtonsOnHover&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    thickFrame: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// Windows 厚边框</span></span>
<span class="line"><span style="color:#E1E4E8;">    vibrancy: </span><span style="color:#9ECBFF;">&#39;under-window&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// macOS 毛玻璃效果</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 窗口行为</span></span>
<span class="line"><span style="color:#E1E4E8;">    resizable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    movable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimizable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    maximizable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    closable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    focusable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    alwaysOnTop: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fullscreenable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    skipTaskbar: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    kiosk: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 自助服务模式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 安全配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      enableRemoteModule: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      webSecurity: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      allowRunningInsecureContent: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      experimentalFeatures: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      webgl: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      plugins: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      scrollBounce: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// macOS 弹性滚动</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 平台特定配置</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#E1E4E8;">(process.platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;darwin&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      titleBarStyle: </span><span style="color:#9ECBFF;">&#39;hiddenInset&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      trafficLightPosition: { x: </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#E1E4E8;">(process.platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      thickFrame: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      titleBarStyle: </span><span style="color:#9ECBFF;">&#39;hidden&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#E1E4E8;">(process.platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;linux&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;assets/icon.png&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> window;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="窗口生命周期管理" tabindex="-1">窗口生命周期管理 <a class="header-anchor" href="#窗口生命周期管理" aria-label="Permalink to &quot;窗口生命周期管理&quot;">​</a></h2><h3 id="窗口状态控制" tabindex="-1">窗口状态控制 <a class="header-anchor" href="#窗口状态控制" aria-label="Permalink to &quot;窗口状态控制&quot;">​</a></h3><p>BrowserWindow 提供完整的方法来控制窗口状态和行为：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BrowserWindow, ipcMain } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> WindowManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windows </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupWindowControls</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupWindowControls</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // IPC 控制窗口</span></span>
<span class="line"><span style="color:#E1E4E8;">    ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:minimize&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> BrowserWindow.</span><span style="color:#B392F0;">fromWebContents</span><span style="color:#E1E4E8;">(event.sender);</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.</span><span style="color:#B392F0;">minimize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:maximize&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> BrowserWindow.</span><span style="color:#B392F0;">fromWebContents</span><span style="color:#E1E4E8;">(event.sender);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (window.</span><span style="color:#B392F0;">isMaximized</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        window.</span><span style="color:#B392F0;">unmaximize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        window.</span><span style="color:#B392F0;">maximize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:close&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> BrowserWindow.</span><span style="color:#B392F0;">fromWebContents</span><span style="color:#E1E4E8;">(event.sender);</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:fullscreen&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> BrowserWindow.</span><span style="color:#B392F0;">fromWebContents</span><span style="color:#E1E4E8;">(event.sender);</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.</span><span style="color:#B392F0;">setFullScreen</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">isFullScreen</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  createWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      width: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      height: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">options</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windows.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(id, window);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 窗口事件处理</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;closed&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.windows.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;focus&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">onWindowFocus</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;blur&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">onWindowBlur</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> window;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onWindowFocus</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">windowId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`窗口 \${</span><span style="color:#E1E4E8;">windowId</span><span style="color:#9ECBFF;">} 获得焦点\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    // 更新应用状态，比如菜单栏</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onWindowBlur</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">windowId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`窗口 \${</span><span style="color:#E1E4E8;">windowId</span><span style="color:#9ECBFF;">} 失去焦点\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.windows.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  closeAllWindows</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windows.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">isDestroyed</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        window.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windows.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="多窗口管理" tabindex="-1">多窗口管理 <a class="header-anchor" href="#多窗口管理" aria-label="Permalink to &quot;多窗口管理&quot;">​</a></h3><p>复杂的应用通常需要管理多个窗口：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BrowserWindow, screen } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MultiWindowManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windows </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windowStates </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 创建主窗口</span></span>
<span class="line"><span style="color:#B392F0;">  createMainWindow</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mainWindow</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;main&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      width: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      height: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload-main.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    mainWindow.</span><span style="color:#B392F0;">loadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;main.html&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> mainWindow;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 创建设置窗口</span></span>
<span class="line"><span style="color:#B392F0;">  createSettingsWindow</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mainWindow</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;main&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> settingsWindow</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;settings&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      width: </span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      height: </span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      parent: mainWindow,</span></span>
<span class="line"><span style="color:#E1E4E8;">      modal: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      resizable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload-settings.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    settingsWindow.</span><span style="color:#B392F0;">loadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;settings.html&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> settingsWindow;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 创建工具窗口</span></span>
<span class="line"><span style="color:#B392F0;">  createToolWindow</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">workArea</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getPrimaryDisplay</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> toolWindow</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tool&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      width: </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      height: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      x: workArea.width </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 320</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      y: workArea.height </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 220</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      alwaysOnTop: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      skipTaskbar: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      resizable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload-tool.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    toolWindow.</span><span style="color:#B392F0;">loadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tool.html&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> toolWindow;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 保存窗口状态</span></span>
<span class="line"><span style="color:#B392F0;">  saveWindowState</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">windowId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windowStates.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(windowId, {</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">state,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 恢复窗口状态</span></span>
<span class="line"><span style="color:#B392F0;">  restoreWindowState</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">windowId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.windowStates.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(windowId) </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="高级窗口特性" tabindex="-1">高级窗口特性 <a class="header-anchor" href="#高级窗口特性" aria-label="Permalink to &quot;高级窗口特性&quot;">​</a></h2><h3 id="无边框窗口与自定义标题栏" tabindex="-1">无边框窗口与自定义标题栏 <a class="header-anchor" href="#无边框窗口与自定义标题栏" aria-label="Permalink to &quot;无边框窗口与自定义标题栏&quot;">​</a></h3><p>创建无边框窗口并实现自定义标题栏：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BrowserWindow } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> createFramelessWindow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    frame: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 无边框</span></span>
<span class="line"><span style="color:#E1E4E8;">    titleBarStyle: </span><span style="color:#9ECBFF;">&#39;hidden&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 隐藏标题栏</span></span>
<span class="line"><span style="color:#E1E4E8;">    backgroundColor: </span><span style="color:#9ECBFF;">&#39;#2e3440&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 自定义窗口控制</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;maximize&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:maximized&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;unmaximize&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:unmaximized&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">loadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;frameless.html&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> window;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// preload.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { contextBridge, ipcRenderer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electronAPI&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  windowControl: {</span></span>
<span class="line"><span style="color:#B392F0;">    minimize</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:minimize&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">    maximize</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:maximize&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">    close</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:close&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">    isMaximized</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:isMaximized&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">    onMaximized</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:maximized&#39;</span><span style="color:#E1E4E8;">, callback),</span></span>
<span class="line"><span style="color:#B392F0;">    onUnmaximized</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window:unmaximized&#39;</span><span style="color:#E1E4E8;">, callback)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="透明窗口与视觉效果" tabindex="-1">透明窗口与视觉效果 <a class="header-anchor" href="#透明窗口与视觉效果" aria-label="Permalink to &quot;透明窗口与视觉效果&quot;">​</a></h3><p>创建具有视觉效果的透明窗口：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BrowserWindow } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> createVisualEffectWindow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: </span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    transparent: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 透明背景</span></span>
<span class="line"><span style="color:#E1E4E8;">    frame: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    resizable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    alwaysOnTop: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      backgroundThrottling: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#E1E4E8;">(process.platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;darwin&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      vibrancy: </span><span style="color:#9ECBFF;">&#39;ultra-dark&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// macOS 毛玻璃效果</span></span>
<span class="line"><span style="color:#E1E4E8;">      visualEffectState: </span><span style="color:#9ECBFF;">&#39;active&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 设置窗口形状</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">setShape</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    { x: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, width: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">, height: </span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">, borderRadius: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">loadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;visual.html&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> window;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="多显示器支持" tabindex="-1">多显示器支持 <a class="header-anchor" href="#多显示器支持" aria-label="Permalink to &quot;多显示器支持&quot;">​</a></h3><p>处理多显示器环境的窗口管理：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BrowserWindow, screen } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MultiDisplayManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.displays </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getAllDisplays</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 在指定显示器创建窗口</span></span>
<span class="line"><span style="color:#B392F0;">  createWindowOnDisplay</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">displayIndex</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> display</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.displays[displayIndex];</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">display) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`显示器 \${</span><span style="color:#E1E4E8;">displayIndex</span><span style="color:#9ECBFF;">} 不存在\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">workArea</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> display;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      x: workArea.x </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      y: workArea.y </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      width: workArea.width </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      height: workArea.height </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">options</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 监听显示器变化</span></span>
<span class="line"><span style="color:#E1E4E8;">    screen.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;display-added&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleDisplayChange.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    screen.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;display-removed&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleDisplayChange.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    screen.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;display-metrics-changed&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleDisplayChange.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> window;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleDisplayChange</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.displays </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getAllDisplays</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">    // 更新窗口位置和大小</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateWindowPositions</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updateWindowPositions</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 根据新的显示器配置更新所有窗口</span></span>
<span class="line"><span style="color:#E1E4E8;">    BrowserWindow.</span><span style="color:#B392F0;">getAllWindows</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> display</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.displays[index </span><span style="color:#F97583;">%</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.displays.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (display </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">isDestroyed</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">workArea</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> display;</span></span>
<span class="line"><span style="color:#E1E4E8;">        window.</span><span style="color:#B392F0;">setBounds</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          x: workArea.x </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          y: workArea.y </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(window.</span><span style="color:#B392F0;">getBounds</span><span style="color:#E1E4E8;">().width, workArea.width </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          height: Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(window.</span><span style="color:#B392F0;">getBounds</span><span style="color:#E1E4E8;">().height, workArea.height </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取窗口所在的显示器</span></span>
<span class="line"><span style="color:#B392F0;">  getWindowDisplay</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bounds</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.</span><span style="color:#B392F0;">getBounds</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getDisplayNearestPoint</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      x: bounds.x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> bounds.width </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      y: bounds.y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> bounds.height </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="webcontents-控制与内容管理" tabindex="-1">WebContents 控制与内容管理 <a class="header-anchor" href="#webcontents-控制与内容管理" aria-label="Permalink to &quot;WebContents 控制与内容管理&quot;">​</a></h2><h3 id="页面加载与导航控制" tabindex="-1">页面加载与导航控制 <a class="header-anchor" href="#页面加载与导航控制" aria-label="Permalink to &quot;页面加载与导航控制&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BrowserWindow, session } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> createControlledWindow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 页面加载事件</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.webContents.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;did-start-loading&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;开始加载页面&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;loading:start&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  window.webContents.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;did-finish-load&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;页面加载完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;loading:finish&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  window.webContents.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;did-fail-load&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">errorDescription</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;页面加载失败:&#39;</span><span style="color:#E1E4E8;">, errorDescription);</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;loading:error&#39;</span><span style="color:#E1E4E8;">, { errorCode, errorDescription });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 导航控制</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.webContents.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;will-navigate&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">navigationUrl</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;即将导航到:&#39;</span><span style="color:#E1E4E8;">, navigationUrl);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 阻止外部链接在应用内打开</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> parsedUrl</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> URL</span><span style="color:#E1E4E8;">(navigationUrl);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (parsedUrl.origin </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;file://&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      event.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">      require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electron&#39;</span><span style="color:#E1E4E8;">).shell.</span><span style="color:#B392F0;">openExternal</span><span style="color:#E1E4E8;">(navigationUrl);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 新窗口控制</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.webContents.</span><span style="color:#B392F0;">setWindowOpenHandler</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 所有新窗口都在外部浏览器打开</span></span>
<span class="line"><span style="color:#B392F0;">    require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electron&#39;</span><span style="color:#E1E4E8;">).shell.</span><span style="color:#B392F0;">openExternal</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { action: </span><span style="color:#9ECBFF;">&#39;deny&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> window;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="开发者工具集成" tabindex="-1">开发者工具集成 <a class="header-anchor" href="#开发者工具集成" aria-label="Permalink to &quot;开发者工具集成&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BrowserWindow } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> DevToolsManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.window </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupDevTools</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupDevTools</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 开发环境自动打开开发者工具</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.window.webContents.</span><span style="color:#B392F0;">openDevTools</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 监听开发者工具事件</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.window.webContents.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;devtools-opened&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;开发者工具已打开&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.window.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;devtools:changed&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.window.webContents.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;devtools-closed&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;开发者工具已关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.window.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;devtools:changed&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 添加快捷键</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.window.webContents.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;before-input-event&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">input</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (input.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;F12&#39;</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> (input.control </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> input.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;i&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        event.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">toggleDevTools</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  toggleDevTools</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.window.webContents.</span><span style="color:#B392F0;">isDevToolsOpened</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.window.webContents.</span><span style="color:#B392F0;">closeDevTools</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.window.webContents.</span><span style="color:#B392F0;">openDevTools</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 检查元素模式</span></span>
<span class="line"><span style="color:#B392F0;">  inspectElement</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">y</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.window.webContents.</span><span style="color:#B392F0;">inspectElement</span><span style="color:#E1E4E8;">(x, y);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.window.webContents.</span><span style="color:#B392F0;">isDevToolsOpened</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.window.webContents.</span><span style="color:#B392F0;">openDevTools</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="性能优化与最佳实践" tabindex="-1">性能优化与最佳实践 <a class="header-anchor" href="#性能优化与最佳实践" aria-label="Permalink to &quot;性能优化与最佳实践&quot;">​</a></h2><h3 id="内存管理与性能优化" tabindex="-1">内存管理与性能优化 <a class="header-anchor" href="#内存管理与性能优化" aria-label="Permalink to &quot;内存管理与性能优化&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BrowserWindow, app } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> OptimizedWindowManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windows </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupPerformanceOptimizations</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupPerformanceOptimizations</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 应用级别性能优化</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.commandLine.</span><span style="color:#B392F0;">appendSwitch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;--disable-background-timer-throttling&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.commandLine.</span><span style="color:#B392F0;">appendSwitch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;--disable-renderer-backgrounding&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 内存警告处理</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;memory-warning&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">cleanupMemory</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  createOptimizedWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> window</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      width: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      height: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        preload: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        backgroundThrottling: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 防止后台节流</span></span>
<span class="line"><span style="color:#E1E4E8;">        webSecurity: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        allowRunningInsecureContent: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">options.webPreferences</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">options</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windows.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(id, window);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 性能优化事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ready-to-show&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initializeWindowPerformance</span><span style="color:#E1E4E8;">(window);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;focus&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">onWindowFocusOptimizations</span><span style="color:#E1E4E8;">(window);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;blur&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">onWindowBlurOptimizations</span><span style="color:#E1E4E8;">(window);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 内存使用监控</span></span>
<span class="line"><span style="color:#B392F0;">    setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">monitorWindowMemory</span><span style="color:#E1E4E8;">(window);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> window;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  initializeWindowPerformance</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 启用硬件加速</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.webContents.</span><span style="color:#B392F0;">setBackgroundThrottling</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 设置帧率</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.webContents.</span><span style="color:#B392F0;">setFrameRate</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onWindowFocusOptimizations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 恢复高性能模式</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.webContents.</span><span style="color:#B392F0;">setBackgroundThrottling</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.webContents.</span><span style="color:#B392F0;">setFrameRate</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onWindowBlurOptimizations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 降低非活动窗口的资源使用</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">isFocused</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.webContents.</span><span style="color:#B392F0;">setFrameRate</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  monitorWindowMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memoryInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.webContents.</span><span style="color:#B392F0;">getProcessMemoryInfo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (memoryInfo.privateBytes </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 500</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 500MB</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;窗口内存使用过高:&#39;</span><span style="color:#E1E4E8;">, memoryInfo.privateBytes);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">triggerMemoryCleanup</span><span style="color:#E1E4E8;">(window);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  triggerMemoryCleanup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 强制垃圾回收（如果启用）</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.webContents.</span><span style="color:#B392F0;">forcefullyCrashRenderer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.</span><span style="color:#B392F0;">reload</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.webContents.</span><span style="color:#B392F0;">executeJavaScript</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window.gc &amp;&amp; window.gc();&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  cleanupMemory</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.windows.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">isFocused</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">isDestroyed</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        window.webContents.</span><span style="color:#B392F0;">executeJavaScript</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window.gc &amp;&amp; window.gc();&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>BrowserWindow 作为 Electron 应用的核心组件，提供了强大的窗口管理能力和丰富的自定义选项。通过合理配置窗口属性、优化资源使用、实现多窗口协同，开发者可以创建出既美观又高效的桌面应用程序。</p>`,40)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
