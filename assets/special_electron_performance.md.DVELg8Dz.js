import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"Electron 性能优化","description":"","frontmatter":{},"headers":[{"level":2,"title":"性能优化概述","slug":"性能优化概述","link":"#性能优化概述","children":[]},{"level":2,"title":"启动性能优化","slug":"启动性能优化","link":"#启动性能优化","children":[{"level":3,"title":"应用启动流程优化","slug":"应用启动流程优化","link":"#应用启动流程优化","children":[]},{"level":3,"title":"代码分割与懒加载","slug":"代码分割与懒加载","link":"#代码分割与懒加载","children":[]}]},{"level":2,"title":"内存管理优化","slug":"内存管理优化","link":"#内存管理优化","children":[{"level":3,"title":"内存泄漏检测与预防","slug":"内存泄漏检测与预防","link":"#内存泄漏检测与预防","children":[]},{"level":3,"title":"资源生命周期管理","slug":"资源生命周期管理","link":"#资源生命周期管理","children":[]}]},{"level":2,"title":"渲染性能优化","slug":"渲染性能优化","link":"#渲染性能优化","children":[{"level":3,"title":"虚拟滚动与列表优化","slug":"虚拟滚动与列表优化","link":"#虚拟滚动与列表优化","children":[]},{"level":3,"title":"动画与渲染优化","slug":"动画与渲染优化","link":"#动画与渲染优化","children":[]}]},{"level":2,"title":"IPC 通信优化","slug":"ipc-通信优化","link":"#ipc-通信优化","children":[{"level":3,"title":"高效的进程间通信","slug":"高效的进程间通信","link":"#高效的进程间通信","children":[]}]},{"level":2,"title":"构建与打包优化","slug":"构建与打包优化","link":"#构建与打包优化","children":[{"level":3,"title":"生产环境构建优化","slug":"生产环境构建优化","link":"#生产环境构建优化","children":[]},{"level":3,"title":"资源压缩与优化","slug":"资源压缩与优化","link":"#资源压缩与优化","children":[]}]},{"level":2,"title":"监控与持续优化","slug":"监控与持续优化","link":"#监控与持续优化","children":[{"level":3,"title":"性能监控系统","slug":"性能监控系统","link":"#性能监控系统","children":[]}]}],"relativePath":"special/electron/performance.md","filePath":"special/electron/performance.md"}'),o={name:"special/electron/performance.md"};function e(c,s,E,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/electron/performance.md for this page in Markdown format</div><h1 id="electron-性能优化" tabindex="-1">Electron 性能优化 <a class="header-anchor" href="#electron-性能优化" aria-label="Permalink to &quot;Electron 性能优化&quot;">​</a></h1><h2 id="性能优化概述" tabindex="-1">性能优化概述 <a class="header-anchor" href="#性能优化概述" aria-label="Permalink to &quot;性能优化概述&quot;">​</a></h2><p>Electron 应用性能优化是一个系统工程，涉及<strong>启动速度</strong>、<strong>运行时性能</strong>、<strong>内存管理</strong>和<strong>资源使用</strong>等多个维度。由于 Electron 应用同时包含 Node.js 后端环境和 Chromium 前端环境，性能优化需要在这两个层面协同进行。优化的核心目标是实现<strong>更快的启动</strong>、<strong>更低的内存占用</strong>和<strong>更流畅的用户体验</strong>。</p><p>Electron 性能瓶颈的典型分布：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>启动阶段</span></span>
<span class="line"><span>├── 应用初始化延迟</span></span>
<span class="line"><span>├── 窗口创建耗时</span></span>
<span class="line"><span>└── 前端资源加载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行阶段</span></span>
<span class="line"><span>├── 内存泄漏</span></span>
<span class="line"><span>├── 渲染性能</span></span>
<span class="line"><span>├── IPC 通信开销</span></span>
<span class="line"><span>└── 背景资源占用</span></span></code></pre></div><h2 id="启动性能优化" tabindex="-1">启动性能优化 <a class="header-anchor" href="#启动性能优化" aria-label="Permalink to &quot;启动性能优化&quot;">​</a></h2><h3 id="应用启动流程优化" tabindex="-1">应用启动流程优化 <a class="header-anchor" href="#应用启动流程优化" aria-label="Permalink to &quot;应用启动流程优化&quot;">​</a></h3><p>优化 Electron 应用的启动流程，减少从启动到可交互的时间。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js - 启动优化配置</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { app, BrowserWindow } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;url&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { dirname, join } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> StartupOptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.startTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">optimizeAppConfig</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  optimizeAppConfig</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 禁用硬件加速（根据需求选择）</span></span>
<span class="line"><span style="color:#6A737D;">    // app.disableHardwareAcceleration();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 设置应用单例锁</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">requestSingleInstanceLock</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      app.</span><span style="color:#B392F0;">quit</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 预加载关键模块</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">preloadCriticalModules</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  preloadCriticalModules</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 预加载常用 Node.js 模块</span></span>
<span class="line"><span style="color:#B392F0;">    require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;url&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> createOptimizedWindow</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> windowOptions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      width: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      height: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 初始不显示，等待准备完成</span></span>
<span class="line"><span style="color:#E1E4E8;">      backgroundColor: </span><span style="color:#9ECBFF;">&#39;#2e2e2e&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 避免白色闪屏</span></span>
<span class="line"><span style="color:#E1E4E8;">      webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        nodeIntegration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        enableRemoteModule: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        preload: </span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url)), </span><span style="color:#9ECBFF;">&#39;preload.js&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#6A737D;">        // 性能相关配置</span></span>
<span class="line"><span style="color:#E1E4E8;">        offscreen: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        webgl: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 按需开启</span></span>
<span class="line"><span style="color:#E1E4E8;">        plugins: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">        // 启用实验性功能提升性能</span></span>
<span class="line"><span style="color:#E1E4E8;">        experimentalFeatures: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">        // 禁用不需要的功能</span></span>
<span class="line"><span style="color:#E1E4E8;">        navigateOnDragDrop: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        enablePreferredSize: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mainWindow</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BrowserWindow</span><span style="color:#E1E4E8;">(windowOptions);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 优化加载事件处理</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupWindowEvents</span><span style="color:#E1E4E8;">(mainWindow);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> mainWindow;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupWindowEvents</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 使用 ready-to-show 事件，避免显示空白窗口</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ready-to-show&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> loadTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🔄 应用启动耗时: \${</span><span style="color:#E1E4E8;">loadTime</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      window.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 开发环境下显示性能信息</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logPerformanceMetrics</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 优化页面加载</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.webContents.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;did-finish-load&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">injectPerformanceOptimizations</span><span style="color:#E1E4E8;">(window);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  logPerformanceMetrics</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> metrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      platform: process.platform,</span></span>
<span class="line"><span style="color:#E1E4E8;">      arch: process.arch,</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      versions: process.versions</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;📊 启动性能指标:&#39;</span><span style="color:#E1E4E8;">, metrics);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  injectPerformanceOptimizations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">window</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 注入性能优化脚本</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.webContents.</span><span style="color:#B392F0;">executeJavaScript</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">      // 禁用开发者工具快捷键（生产环境）</span></span>
<span class="line"><span style="color:#9ECBFF;">      if (process.env.NODE_ENV === &#39;production&#39;) {</span></span>
<span class="line"><span style="color:#9ECBFF;">        document.addEventListener(&#39;keydown&#39;, (e) =&gt; {</span></span>
<span class="line"><span style="color:#9ECBFF;">          if (e.key === &#39;F12&#39; || (e.ctrlKey &amp;&amp; e.shiftKey &amp;&amp; e.key === &#39;I&#39;)) {</span></span>
<span class="line"><span style="color:#9ECBFF;">            e.preventDefault();</span></span>
<span class="line"><span style="color:#9ECBFF;">          }</span></span>
<span class="line"><span style="color:#9ECBFF;">        });</span></span>
<span class="line"><span style="color:#9ECBFF;">      }</span></span>
<span class="line"><span style="color:#9ECBFF;">      </span></span>
<span class="line"><span style="color:#9ECBFF;">      // 性能监控</span></span>
<span class="line"><span style="color:#9ECBFF;">      window.performanceMark(&#39;first-contentful-paint&#39;);</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 应用启动优化</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> startupOptimizer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> StartupOptimizer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">whenReady</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> mainWindow</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> startupOptimizer.</span><span style="color:#B392F0;">createOptimizedWindow</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 加载应用页面</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> mainWindow.</span><span style="color:#B392F0;">loadURL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;http://localhost:3000&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> mainWindow.</span><span style="color:#B392F0;">loadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dist/index.html&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;window-all-closed&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (process.platform </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;darwin&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">quit</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="代码分割与懒加载" tabindex="-1">代码分割与懒加载 <a class="header-anchor" href="#代码分割与懒加载" aria-label="Permalink to &quot;代码分割与懒加载&quot;">​</a></h3><p>使用现代前端构建工具的代码分割功能，减少初始加载体积。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// src/utils/lazy-loading.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> LazyLoader</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loadedModules </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loadingPromises </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 动态导入模块</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">modulePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.loadedModules.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.loadedModules.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(moduleName);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.loadingPromises.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.loadingPromises.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(moduleName);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> loadPromise</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> import</span><span style="color:#E1E4E8;">(modulePath)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">module</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.loadedModules.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(moduleName, </span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.loadingPromises.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(moduleName);</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 懒加载模块: \${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> module</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.loadingPromises.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(moduleName);</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`❌ 加载模块失败: \${</span><span style="color:#E1E4E8;">moduleName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loadingPromises.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(moduleName, loadPromise);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> loadPromise;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 预加载非关键模块</span></span>
<span class="line"><span style="color:#B392F0;">  preloadModules</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleMap</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;requestIdleCallback&#39;</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> window) {</span></span>
<span class="line"><span style="color:#B392F0;">      requestIdleCallback</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(moduleMap).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadModule</span><span style="color:#E1E4E8;">(path, name);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 降级方案</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(moduleMap).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadModule</span><span style="color:#E1E4E8;">(path, name);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> lazyLoader</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> LazyLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 路由级别的代码分割</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> routes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  home</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> lazyLoader.</span><span style="color:#B392F0;">loadModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/Home.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Home&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">  settings</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> lazyLoader.</span><span style="color:#B392F0;">loadModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/Settings.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Settings&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">  analytics</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> lazyLoader.</span><span style="color:#B392F0;">loadModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components/Analytics.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Analytics&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 预加载配置</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> preloadConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;ChartLibrary&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;./libs/charts.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;DataGrid&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;./libs/data-grid.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;RichEditor&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;./libs/rich-editor.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// src/components/Router.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { lazyLoader, routes, preloadConfig } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../utils/lazy-loading.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> Router</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.currentRoute </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 初始加载后预加载其他模块</span></span>
<span class="line"><span style="color:#E1E4E8;">    lazyLoader.</span><span style="color:#B392F0;">preloadModules</span><span style="color:#E1E4E8;">(preloadConfig);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 路由事件监听</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupRouteListeners</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> navigateTo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">routeName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentRoute </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> routeName) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 显示加载状态</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showLoading</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 动态加载路由组件</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> module</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> routes[routeName]();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 渲染组件</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">renderComponent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.default);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.currentRoute </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> routeName;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 更新页面标题等</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updatePageMetadata</span><span style="color:#E1E4E8;">(routeName);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;路由导航失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showError</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;页面加载失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hideLoading</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  showLoading</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 显示加载指示器</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> loader</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;page-loader&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (loader) loader.style.display </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;block&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  hideLoading</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> loader</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;page-loader&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (loader) loader.style.display </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  renderComponent</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">Component</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;app&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (app) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      app.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> component</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Component</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> component.render </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        app.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(component.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupRouteListeners</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 链接点击事件委托</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> link</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> e.target.</span><span style="color:#B392F0;">closest</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[data-route]&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (link) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> routeName</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> link.dataset.route;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">navigateTo</span><span style="color:#E1E4E8;">(routeName);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 浏览器前进后退</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;popstate&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> routeName</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getRouteFromPath</span><span style="color:#E1E4E8;">(window.location.pathname);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">navigateTo</span><span style="color:#E1E4E8;">(routeName);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="内存管理优化" tabindex="-1">内存管理优化 <a class="header-anchor" href="#内存管理优化" aria-label="Permalink to &quot;内存管理优化&quot;">​</a></h2><h3 id="内存泄漏检测与预防" tabindex="-1">内存泄漏检测与预防 <a class="header-anchor" href="#内存泄漏检测与预防" aria-label="Permalink to &quot;内存泄漏检测与预防&quot;">​</a></h3><p>实现系统化的内存泄漏检测和预防机制。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// src/utils/memory-manager.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> MemoryManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.monitoringInterval </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.leakThreshold </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 10</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 10MB</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.snapshots </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.eventListeners </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WeakMap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  startMonitoring</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">interval</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 30000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.monitoringInterval) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.monitoringInterval </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">takeMemorySnapshot</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkForLeaks</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, interval);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🧠 内存监控已启动&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  stopMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.monitoringInterval) {</span></span>
<span class="line"><span style="color:#B392F0;">      clearInterval</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.monitoringInterval);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.monitoringInterval </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🧠 内存监控已停止&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  takeMemorySnapshot</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (performance.memory) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> snapshot</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        timestamp: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        used: performance.memory.usedJSHeapSize,</span></span>
<span class="line"><span style="color:#E1E4E8;">        total: performance.memory.totalJSHeapSize,</span></span>
<span class="line"><span style="color:#E1E4E8;">        limit: performance.memory.jsHeapSizeLimit</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.snapshots.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(snapshot);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 保持最近50个快照</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.snapshots.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.snapshots.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> snapshot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  checkForLeaks</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.snapshots.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> recent</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.snapshots[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.snapshots.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> previous</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.snapshots[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.snapshots.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> growth</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> recent.used </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> previous.used;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (growth </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.leakThreshold) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;⚠️ 检测到可能的内存泄漏:&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        增长量: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">growth</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        当前使用: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">recent</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">used</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        时间间隔: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">recent</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">timestamp</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> previous</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">timestamp</span><span style="color:#9ECBFF;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 1000</span><span style="color:#9ECBFF;">} 秒\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">analyzePotentialLeaks</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  analyzePotentialLeaks</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查常见的内存泄漏模式</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkDetachedDOMNodes</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkEventListenerLeaks</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkTimerLeaks</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  checkDetachedDOMNodes</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查分离的DOM节点</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> detachedNodes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> walker</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createTreeWalker</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.body,</span></span>
<span class="line"><span style="color:#E1E4E8;">      NodeFilter.</span><span style="color:#79B8FF;">SHOW_ELEMENT</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      false</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> node;</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> walker.</span><span style="color:#B392F0;">nextNode</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">document.body.</span><span style="color:#B392F0;">contains</span><span style="color:#E1E4E8;">(node)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        detachedNodes.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (detachedNodes.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`发现 \${</span><span style="color:#E1E4E8;">detachedNodes</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">length</span><span style="color:#9ECBFF;">} 个分离的DOM节点\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  checkEventListenerLeaks</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 简化的事件监听器泄漏检查</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> elements</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> totalListeners </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    elements.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 这里可以扩展更详细的事件监听器检查</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (element._events) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        totalListeners </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(element._events).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (totalListeners </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 阈值</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`检测到大量事件监听器: \${</span><span style="color:#E1E4E8;">totalListeners</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  checkTimerLeaks</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查未清理的定时器</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> timerCount</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getActiveTimersCount</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (timerCount </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`检测到大量活跃定时器: \${</span><span style="color:#E1E4E8;">timerCount</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getActiveTimersCount</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 通过重写 setTimeout 和 setInterval 来跟踪</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> window._activeTimers </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> window._activeTimers.size </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 安全的事件监听器包装</span></span>
<span class="line"><span style="color:#B392F0;">  safeAddEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">handler</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> wrappedHandler</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#B392F0;"> handler</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;事件处理器错误:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    element.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(event, wrappedHandler, options);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 跟踪监听器以便后续清理</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.eventListeners.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(element)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.eventListeners.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(element, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.eventListeners.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(element).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ event, handler: wrappedHandler });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      element.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(event, wrappedHandler, options);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> listeners</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.eventListeners.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (listeners) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> index</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> listeners.</span><span style="color:#B392F0;">findIndex</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">l</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> l.handler </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> wrappedHandler);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (index </span><span style="color:#F97583;">&gt;</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          listeners.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(index, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 清理所有跟踪的事件监听器</span></span>
<span class="line"><span style="color:#B392F0;">  cleanupEventListeners</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> listeners</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.eventListeners.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (listeners) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      listeners.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">handler</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        element.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(event, handler);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.eventListeners.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getMemoryStats</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (performance.memory) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        used: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">performance</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">usedJSHeapSize</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        total: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">performance</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">totalJSHeapSize</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        limit: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">performance</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">jsHeapSizeLimit</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        usage: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">((</span><span style="color:#E1E4E8;">performance</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">usedJSHeapSize</span><span style="color:#F97583;"> /</span><span style="color:#E1E4E8;"> performance</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">jsHeapSizeLimit</span><span style="color:#9ECBFF;">) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}%\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { error: </span><span style="color:#9ECBFF;">&#39;内存API不可用&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全局内存管理器实例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> memoryManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MemoryManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启动内存监控（开发环境）</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  memoryManager.</span><span style="color:#B392F0;">startMonitoring</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="资源生命周期管理" tabindex="-1">资源生命周期管理 <a class="header-anchor" href="#资源生命周期管理" aria-label="Permalink to &quot;资源生命周期管理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// src/utils/resource-manager.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> ResourceManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.resources </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cache </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cleanupCallbacks </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 注册资源并自动管理生命周期</span></span>
<span class="line"><span style="color:#B392F0;">  registerResource</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">resource</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cleanupCallback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.resources.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(id, resource);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (cleanupCallback) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.cleanupCallbacks.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(id, cleanupCallback);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> id;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取资源</span></span>
<span class="line"><span style="color:#B392F0;">  getResource</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.resources.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 释放资源</span></span>
<span class="line"><span style="color:#B392F0;">  releaseResource</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> resource</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.resources.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cleanupCallback</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cleanupCallbacks.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (cleanupCallback </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> resource) {</span></span>
<span class="line"><span style="color:#B392F0;">      cleanupCallback</span><span style="color:#E1E4E8;">(resource);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.resources.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cleanupCallbacks.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🗑️ 释放资源: \${</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 批量释放资源</span></span>
<span class="line"><span style="color:#B392F0;">  releaseResources</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ids</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ids.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">releaseResource</span><span style="color:#E1E4E8;">(id));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 释放所有资源</span></span>
<span class="line"><span style="color:#B392F0;">  releaseAll</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> resourceIds</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.resources.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    resourceIds.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">releaseResource</span><span style="color:#E1E4E8;">(id));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🗑️ 释放所有资源: \${</span><span style="color:#E1E4E8;">resourceIds</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">length</span><span style="color:#9ECBFF;">} 个\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 缓存管理</span></span>
<span class="line"><span style="color:#B392F0;">  setCache</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">ttl</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 300000</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 默认5分钟</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cacheItem</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      ttl</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, cacheItem);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getCache</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> item</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">item) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查是否过期</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> item.timestamp </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> item.ttl) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> item.value;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  clearExpiredCache</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> now</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> clearedCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">item</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (now </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> item.timestamp </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> item.ttl) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">        clearedCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (clearedCount </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🧹 清理过期缓存: \${</span><span style="color:#E1E4E8;">clearedCount</span><span style="color:#9ECBFF;">} 项\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 图片资源懒加载</span></span>
<span class="line"><span style="color:#B392F0;">  createLazyImageLoader</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> observer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> IntersectionObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      entries.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entry</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (entry.isIntersecting) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> img</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> entry.target;</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> src</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> img.dataset.src;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (src) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            img.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> src;</span></span>
<span class="line"><span style="color:#E1E4E8;">            img.classList.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;lazy&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            observer.</span><span style="color:#B392F0;">unobserve</span><span style="color:#E1E4E8;">(img);</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> observer;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 预加载关键资源</span></span>
<span class="line"><span style="color:#B392F0;">  preloadCriticalResources</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> criticalResources</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;/fonts/main.woff2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;/css/critical.css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;/images/logo.svg&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    criticalResources.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resource</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">preloadResource</span><span style="color:#E1E4E8;">(resource);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  preloadResource</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> link</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    link.rel </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;preload&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    link.href </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> url;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (url.</span><span style="color:#B392F0;">endsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.woff2&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.as </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;font&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.type </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;font/woff2&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.crossOrigin </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;anonymous&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (url.</span><span style="color:#B392F0;">endsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.css&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.as </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;style&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (url.</span><span style="color:#B392F0;">endsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.js&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.as </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;script&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.as </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;image&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.head.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(link);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> resourceManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ResourceManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自动清理过期缓存</span></span>
<span class="line"><span style="color:#B392F0;">setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  resourceManager.</span><span style="color:#B392F0;">clearExpiredCache</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">60000</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 每分钟清理一次</span></span></code></pre></div><h2 id="渲染性能优化" tabindex="-1">渲染性能优化 <a class="header-anchor" href="#渲染性能优化" aria-label="Permalink to &quot;渲染性能优化&quot;">​</a></h2><h3 id="虚拟滚动与列表优化" tabindex="-1">虚拟滚动与列表优化 <a class="header-anchor" href="#虚拟滚动与列表优化" aria-label="Permalink to &quot;虚拟滚动与列表优化&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// src/components/VirtualScroll.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> VirtualScroll</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">container</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.container </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> container;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.itemHeight </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.itemHeight </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.overscan </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.overscan </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.items </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.items </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderItem </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.renderItem;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.visibleStart </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.visibleEnd </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.visibleItems </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupContainer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateVisibleRange</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">renderVisibleItems</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupScrollListener</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupContainer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.container.style.overflowY </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;auto&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.container.style.position </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;relative&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 设置容器高度以启用滚动</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.container.style.height </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">container</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">clientHeight</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建内容包装器</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.content </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.content.style.position </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;relative&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.content.style.height </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">items</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">itemHeight</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.container.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.content);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  calculateVisibleRange</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> scrollTop</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.container.scrollTop;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> visibleHeight</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.container.clientHeight;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.visibleStart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(scrollTop </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.itemHeight) </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.overscan);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.visibleEnd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.items.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      Math.</span><span style="color:#B392F0;">ceil</span><span style="color:#E1E4E8;">((scrollTop </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> visibleHeight) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.itemHeight) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.overscan</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  renderVisibleItems</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 移除不可见的项目</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.visibleItems.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (item.index </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.visibleStart </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> item.index </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.visibleEnd) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        item.element.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 更新可见项目数组</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.visibleItems </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.visibleItems.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      item.index </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.visibleStart </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> item.index </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.visibleEnd</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 添加新可见的项目</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.visibleStart; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.visibleEnd; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> existingItem</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.visibleItems.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> item.index </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> i);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">existingItem) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> itemElement</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">renderItem</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.items[i], i);</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemElement.style.position </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;absolute&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemElement.style.top </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">i</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">itemHeight</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemElement.style.width </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;100%&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemElement.style.height </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">itemHeight</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.content.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(itemElement);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.visibleItems.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ index: i, element: itemElement });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupScrollListener</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> scrollTimeout;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.container.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;scroll&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 防抖处理</span></span>
<span class="line"><span style="color:#B392F0;">      clearTimeout</span><span style="color:#E1E4E8;">(scrollTimeout);</span></span>
<span class="line"><span style="color:#E1E4E8;">      scrollTimeout </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateVisibleRange</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">renderVisibleItems</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 约60fps</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updateItems</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newItems</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.items </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newItems;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.content.style.height </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">items</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">itemHeight</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateVisibleRange</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">renderVisibleItems</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 性能监控</span></span>
<span class="line"><span style="color:#B392F0;">  getPerformanceStats</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalItems: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.items.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      visibleItems: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.visibleItems.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      renderStart: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.visibleStart,</span></span>
<span class="line"><span style="color:#E1E4E8;">      renderEnd: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.visibleEnd,</span></span>
<span class="line"><span style="color:#E1E4E8;">      memoryUsage: performance.memory </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        used: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">performance</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">memory</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">usedJSHeapSize</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> createOptimizedList</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">containerId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">renderFunction</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> container</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(containerId);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> virtualScroll</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> VirtualScroll</span><span style="color:#E1E4E8;">(container, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    itemHeight: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    overscan: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    items: data,</span></span>
<span class="line"><span style="color:#E1E4E8;">    renderItem: renderFunction</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> virtualScroll;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="动画与渲染优化" tabindex="-1">动画与渲染优化 <a class="header-anchor" href="#动画与渲染优化" aria-label="Permalink to &quot;动画与渲染优化&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// src/utils/animation-optimizer.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> AnimationOptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.animations </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.rafCallbacks </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 使用 requestAnimationFrame 优化动画</span></span>
<span class="line"><span style="color:#B392F0;">  optimizedAnimation</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">element</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> animationId;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> animate</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">timestamp</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      callback</span><span style="color:#E1E4E8;">(timestamp);</span></span>
<span class="line"><span style="color:#E1E4E8;">      animationId </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> requestAnimationFrame</span><span style="color:#E1E4E8;">(animate);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    animationId </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> requestAnimationFrame</span><span style="color:#E1E4E8;">(animate);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 跟踪动画以便后续清理</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (element) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.animations.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(element)) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.animations.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(element, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.animations.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(element).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(animationId);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> animationId;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 停止元素的所有动画</span></span>
<span class="line"><span style="color:#B392F0;">  stopAnimations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> animations</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.animations.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (animations) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      animations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> cancelAnimationFrame</span><span style="color:#E1E4E8;">(id));</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.animations.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 使用 CSS transform 代替直接修改位置</span></span>
<span class="line"><span style="color:#B392F0;">  transformElement</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">translateX</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">translateY</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">scale</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    element.style.transform </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`translate3d(\${</span><span style="color:#E1E4E8;">translateX</span><span style="color:#9ECBFF;">}px, \${</span><span style="color:#E1E4E8;">translateY</span><span style="color:#9ECBFF;">}px, 0) scale(\${</span><span style="color:#E1E4E8;">scale</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 批量DOM操作</span></span>
<span class="line"><span style="color:#B392F0;">  batchDOMUpdates</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 使用 requestAnimationFrame 批量更新</span></span>
<span class="line"><span style="color:#B392F0;">    requestAnimationFrame</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      callback</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 防抖滚动处理</span></span>
<span class="line"><span style="color:#B392F0;">  createDebouncedScrollHandler</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">delay</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 16</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> timeoutId;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      clearTimeout</span><span style="color:#E1E4E8;">(timeoutId);</span></span>
<span class="line"><span style="color:#E1E4E8;">      timeoutId </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        callback</span><span style="color:#E1E4E8;">(event);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, delay);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 使用 will-change 提示浏览器优化</span></span>
<span class="line"><span style="color:#B392F0;">  optimizeForAnimation</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">properties</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;transform&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;opacity&#39;</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    element.style.willChange </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> properties.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 动画完成后移除 will-change</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      element.style.willChange </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;auto&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 检测帧率</span></span>
<span class="line"><span style="color:#B392F0;">  startFPSCounter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">duration</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> frames </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> startTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> countFrame</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      frames</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> currentTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (currentTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> duration) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> fps</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">((frames </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (currentTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime));</span></span>
<span class="line"><span style="color:#B392F0;">        callback</span><span style="color:#E1E4E8;">(fps);</span></span>
<span class="line"><span style="color:#E1E4E8;">        frames </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        startTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#B392F0;">      requestAnimationFrame</span><span style="color:#E1E4E8;">(countFrame);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    countFrame</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> animationOptimizer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> AnimationOptimizer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> createSmoothScroll</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">container</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> targetScroll </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> container.scrollTop;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> currentScroll </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> targetScroll;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> scrollHandler</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> animationOptimizer.</span><span style="color:#B392F0;">optimizedAnimation</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> diff</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> targetScroll </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> currentScroll;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (Math.</span><span style="color:#B392F0;">abs</span><span style="color:#E1E4E8;">(diff) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentScroll </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> targetScroll;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentScroll </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> diff </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0.1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 缓动效果</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    container.scrollTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentScroll;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, container);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    scrollTo</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">position</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      targetScroll </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> position;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    destroy</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      animationOptimizer.</span><span style="color:#B392F0;">stopAnimations</span><span style="color:#E1E4E8;">(container);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="ipc-通信优化" tabindex="-1">IPC 通信优化 <a class="header-anchor" href="#ipc-通信优化" aria-label="Permalink to &quot;IPC 通信优化&quot;">​</a></h2><h3 id="高效的进程间通信" tabindex="-1">高效的进程间通信 <a class="header-anchor" href="#高效的进程间通信" aria-label="Permalink to &quot;高效的进程间通信&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// src/utils/ipc-optimizer.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> IPCOptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pendingRequests </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.batchQueue </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.batchTimeout </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 16</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 16ms 批处理间隔</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cache </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 批处理 IPC 调用</span></span>
<span class="line"><span style="color:#B392F0;">  batchedInvoke</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cacheKey</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> options.cacheKey </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateCacheKey</span><span style="color:#E1E4E8;">(channel, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查缓存</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (options.cache </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(cacheKey)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(cacheKey));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加到批处理队列</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.batchQueue.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(channel)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.batchQueue.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(channel, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 设置批处理超时</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processBatch</span><span style="color:#E1E4E8;">(channel);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.batchTimeout);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.batchQueue.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(channel).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ data, resolve, reject, cacheKey });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  processBatch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> batch</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.batchQueue.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(channel);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">batch </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> batch.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.batchQueue.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(channel);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> batchData</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> batch.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> item.data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 发送批处理请求</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.electronAPI.</span><span style="color:#B392F0;">invokeBatch</span><span style="color:#E1E4E8;">(channel, batchData)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">results</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        batch.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> results[index];</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#6A737D;">          // 缓存结果</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (item.cacheKey) {</span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(item.cacheKey, result);</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#E1E4E8;">          item.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        batch.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          item.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成缓存键</span></span>
<span class="line"><span style="color:#B392F0;">  generateCacheKey</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">}:\${</span><span style="color:#79B8FF;">JSON</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 清理缓存</span></span>
<span class="line"><span style="color:#B392F0;">  clearCache</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pattern</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (pattern) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (key.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(pattern)) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 带超时的 IPC 调用</span></span>
<span class="line"><span style="color:#B392F0;">  invokeWithTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">timeout</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 5000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> timeoutId</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`IPC调用超时: \${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, timeout);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      window.electronAPI.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(channel, data)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">result</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          clearTimeout</span><span style="color:#E1E4E8;">(timeoutId);</span></span>
<span class="line"><span style="color:#B392F0;">          resolve</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          clearTimeout</span><span style="color:#E1E4E8;">(timeoutId);</span></span>
<span class="line"><span style="color:#B392F0;">          reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 监控 IPC 性能</span></span>
<span class="line"><span style="color:#B392F0;">  monitorIPCPerformance</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> originalInvoke</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.electronAPI.invoke;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    window.electronAPI.</span><span style="color:#B392F0;">invoke</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> originalInvoke</span><span style="color:#E1E4E8;">(channel, data);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 记录性能数据</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logIPCPerformance</span><span style="color:#E1E4E8;">(channel, duration, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logIPCPerformance</span><span style="color:#E1E4E8;">(channel, duration, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  logIPCPerformance</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">duration</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">success</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (duration </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 记录超过100ms的调用</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`⚠️ 慢IPC调用: \${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        耗时: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        状态: success </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;成功&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;失败&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> ipcOptimizer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> IPCOptimizer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在主进程中实现批处理处理器</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> setupBatchHandler</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ipcMain</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;invoke-batch&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">batchData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> batchData) {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 这里需要根据实际IPC处理器来执行</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> processIPCBatch</span><span style="color:#E1E4E8;">(channel, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">        results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, data: result });</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> processIPCBatch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 根据通道名称执行相应的处理逻辑</span></span>
<span class="line"><span style="color:#6A737D;">  // 这里需要根据实际应用实现</span></span>
<span class="line"><span style="color:#F97583;">  switch</span><span style="color:#E1E4E8;"> (channel) {</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;get-file-info&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> getFileInfoBatch</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;query-data&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> queryDataBatch</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#F97583;">    default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`未知的批处理通道: \${</span><span style="color:#E1E4E8;">channel</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="构建与打包优化" tabindex="-1">构建与打包优化 <a class="header-anchor" href="#构建与打包优化" aria-label="Permalink to &quot;构建与打包优化&quot;">​</a></h2><h3 id="生产环境构建优化" tabindex="-1">生产环境构建优化 <a class="header-anchor" href="#生产环境构建优化" aria-label="Permalink to &quot;生产环境构建优化&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// webpack.config.js - Electron 生产构建配置</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;url&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { dirname, resolve } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> webpack </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;webpack&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> __dirname</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: </span><span style="color:#9ECBFF;">&#39;electron-renderer&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    main: </span><span style="color:#9ECBFF;">&#39;./src/renderer/index.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    preload: </span><span style="color:#9ECBFF;">&#39;./src/preload/index.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;[name].[contenthash].js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    chunkFilename: </span><span style="color:#9ECBFF;">&#39;[name].[contenthash].chunk.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    clean: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimize: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimizer: [</span></span>
<span class="line"><span style="color:#6A737D;">      // 使用 Terser 进行代码压缩</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> TerserPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        parallel: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        terserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          compress: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            drop_console: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 生产环境移除 console</span></span>
<span class="line"><span style="color:#E1E4E8;">            drop_debugger: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          mangle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            safari10: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    splitChunks: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      chunks: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheGroups: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        vendor: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;vendors&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          chunks: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          priority: </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        common: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;common&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          minChunks: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          chunks: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          priority: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    runtimeChunk: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;runtime&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        exclude:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          loader: </span><span style="color:#9ECBFF;">&#39;babel-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            presets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              [</span><span style="color:#9ECBFF;">&#39;@babel/preset-env&#39;</span><span style="color:#E1E4E8;">, { </span></span>
<span class="line"><span style="color:#E1E4E8;">                targets: { </span></span>
<span class="line"><span style="color:#E1E4E8;">                  electron: </span><span style="color:#9ECBFF;">&#39;22.0.0&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                useBuiltIns: </span><span style="color:#9ECBFF;">&#39;usage&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                corejs: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">              }]</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            plugins: [</span></span>
<span class="line"><span style="color:#9ECBFF;">              &#39;@babel/plugin-syntax-dynamic-import&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">              &#39;lodash&#39;</span><span style="color:#6A737D;"> // 优化 lodash 引入</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [</span></span>
<span class="line"><span style="color:#9ECBFF;">          &#39;style-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            loader: </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              modules: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              sourceMap: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#6A737D;">    // 定义环境变量</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#E1E4E8;"> webpack.</span><span style="color:#B392F0;">DefinePlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;process.env.NODE_ENV&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;process.env.ELECTRON_IS_DEV&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 压缩 CSS</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> MiniCssExtractPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;[name].[contenthash].css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      chunkFilename: </span><span style="color:#9ECBFF;">&#39;[name].[contenthash].chunk.css&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 分析包大小</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> BundleAnalyzerPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      analyzerMode: </span><span style="color:#9ECBFF;">&#39;static&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      openAnalyzer: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      reportFilename: </span><span style="color:#9ECBFF;">&#39;bundle-report.html&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;@&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;components&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src/components&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    extensions: [</span><span style="color:#9ECBFF;">&#39;.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;.json&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 排除 Electron 和 Node.js 内置模块</span></span>
<span class="line"><span style="color:#E1E4E8;">  externals: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    electron: </span><span style="color:#9ECBFF;">&#39;commonjs electron&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fs: </span><span style="color:#9ECBFF;">&#39;commonjs fs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&#39;commonjs path&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    os: </span><span style="color:#9ECBFF;">&#39;commonjs os&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="资源压缩与优化" tabindex="-1">资源压缩与优化 <a class="header-anchor" href="#资源压缩与优化" aria-label="Permalink to &quot;资源压缩与优化&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// scripts/optimize-assets.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { promises </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> fs } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { exec } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { promisify } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;util&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> execAsync</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> promisify</span><span style="color:#E1E4E8;">(exec);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> AssetOptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.imageExtensions </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;.png&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;.jpg&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;.jpeg&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;.gif&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;.svg&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.optimizedCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> optimizeImages</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sourceDir</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">targetDir</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> files</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readdir</span><span style="color:#E1E4E8;">(sourceDir);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> file</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> files) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> filePath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(sourceDir, file);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> stat</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">stat</span><span style="color:#E1E4E8;">(filePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (stat.</span><span style="color:#B392F0;">isDirectory</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">          await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">optimizeImages</span><span style="color:#E1E4E8;">(filePath, path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(targetDir, file));</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isImageFile</span><span style="color:#E1E4E8;">(file)) {</span></span>
<span class="line"><span style="color:#F97583;">          await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">optimizeSingleImage</span><span style="color:#E1E4E8;">(filePath, path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(targetDir, file));</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.optimizedCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 优化完成: \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">optimizedCount</span><span style="color:#9ECBFF;">} 个图片文件\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ 资源优化失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  isImageFile</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">filename</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ext</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">extname</span><span style="color:#E1E4E8;">(filename).</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.imageExtensions.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(ext);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> optimizeSingleImage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sourcePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">targetPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ext</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">extname</span><span style="color:#E1E4E8;">(sourcePath).</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 确保目标目录存在</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(targetPath), { recursive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      switch</span><span style="color:#E1E4E8;"> (ext) {</span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;.png&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">          // 使用 pngquant 优化 PNG</span></span>
<span class="line"><span style="color:#F97583;">          await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`pngquant --quality=65-80 --force --output &quot;\${</span><span style="color:#E1E4E8;">targetPath</span><span style="color:#9ECBFF;">}&quot; &quot;\${</span><span style="color:#E1E4E8;">sourcePath</span><span style="color:#9ECBFF;">}&quot;\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">          break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;.jpg&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;.jpeg&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">          // 使用 mozjpeg 优化 JPEG</span></span>
<span class="line"><span style="color:#F97583;">          await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`cjpeg -quality 80 -optimize -outfile &quot;\${</span><span style="color:#E1E4E8;">targetPath</span><span style="color:#9ECBFF;">}&quot; &quot;\${</span><span style="color:#E1E4E8;">sourcePath</span><span style="color:#9ECBFF;">}&quot;\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">          break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;.svg&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">          // 使用 svgo 优化 SVG</span></span>
<span class="line"><span style="color:#F97583;">          await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`svgo &quot;\${</span><span style="color:#E1E4E8;">sourcePath</span><span style="color:#9ECBFF;">}&quot; -o &quot;\${</span><span style="color:#E1E4E8;">targetPath</span><span style="color:#9ECBFF;">}&quot;\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">          break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#F97583;">        default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">          // 直接复制不支持优化的文件</span></span>
<span class="line"><span style="color:#F97583;">          await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">copyFile</span><span style="color:#E1E4E8;">(sourcePath, targetPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 如果优化工具不可用，直接复制文件</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`⚠️ 优化失败，直接复制: \${</span><span style="color:#E1E4E8;">sourcePath</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">copyFile</span><span style="color:#E1E4E8;">(sourcePath, targetPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> createOptimizedBuild</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> buildStartTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🚀 开始优化构建...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 优化图片资源</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">optimizeImages</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src/assets&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;dist/assets&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 复制其他资源</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">copyOtherAssets</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src/static&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;dist/static&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> buildTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> buildStartTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🎉 构建完成，耗时: \${</span><span style="color:#E1E4E8;">buildTime</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> copyOtherAssets</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sourceDir</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">targetDir</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;">(targetDir, { recursive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> files</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readdir</span><span style="color:#E1E4E8;">(sourceDir);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> file</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> files) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> sourcePath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(sourceDir, file);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> targetPath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(targetDir, file);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> stat</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">stat</span><span style="color:#E1E4E8;">(sourcePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (stat.</span><span style="color:#B392F0;">isDirectory</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">          await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">copyOtherAssets</span><span style="color:#E1E4E8;">(sourcePath, targetPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isImageFile</span><span style="color:#E1E4E8;">(file)) {</span></span>
<span class="line"><span style="color:#F97583;">          await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">copyFile</span><span style="color:#E1E4E8;">(sourcePath, targetPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;复制资源失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行优化</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> \`file://\${</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">argv</span><span style="color:#9ECBFF;">[</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> optimizer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> AssetOptimizer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  optimizer.</span><span style="color:#B392F0;">createOptimizedBuild</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="监控与持续优化" tabindex="-1">监控与持续优化 <a class="header-anchor" href="#监控与持续优化" aria-label="Permalink to &quot;监控与持续优化&quot;">​</a></h2><h3 id="性能监控系统" tabindex="-1">性能监控系统 <a class="header-anchor" href="#性能监控系统" aria-label="Permalink to &quot;性能监控系统&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// src/utils/performance-monitor.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> PerformanceMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.reports </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.monitoringEnabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  startMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordNavigationTiming</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordResourceTiming</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordPaintTiming</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startLongTaskMonitoring</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  recordNavigationTiming</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">performance.getEntriesByType) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> navigation</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">getEntriesByType</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;navigation&#39;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (navigation) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;navigation&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        domContentLoaded: navigation.domContentLoadedEventEnd </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> navigation.navigationStart,</span></span>
<span class="line"><span style="color:#E1E4E8;">        loadComplete: navigation.loadEventEnd </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> navigation.navigationStart,</span></span>
<span class="line"><span style="color:#E1E4E8;">        dnsLookup: navigation.domainLookupEnd </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> navigation.domainLookupStart,</span></span>
<span class="line"><span style="color:#E1E4E8;">        tcpConnect: navigation.connectEnd </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> navigation.connectStart,</span></span>
<span class="line"><span style="color:#E1E4E8;">        requestResponse: navigation.responseEnd </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> navigation.requestStart</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  recordResourceTiming</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">performance.getEntriesByType) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> resources</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">getEntriesByType</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;resource&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> resourceMetrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> resources.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resource</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: resource.name,</span></span>
<span class="line"><span style="color:#E1E4E8;">      duration: resource.duration,</span></span>
<span class="line"><span style="color:#E1E4E8;">      size: resource.transferSize </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getResourceType</span><span style="color:#E1E4E8;">(resource.name)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;resources&#39;</span><span style="color:#E1E4E8;">, resourceMetrics);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  recordPaintTiming</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">performance.getEntriesByType) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> paints</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">getEntriesByType</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;paint&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    paints.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">paint</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(paint.name, paint.startTime);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  startLongTaskMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">PerformanceObserver) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> observer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PerformanceObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">list</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      list.</span><span style="color:#B392F0;">getEntries</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entry</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (entry.duration </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 超过50ms的任务</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;⏱️ 长任务检测:&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            时长: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">entry</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            开始时间: entry.startTime</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">({ entryTypes: [</span><span style="color:#9ECBFF;">&#39;longtask&#39;</span><span style="color:#E1E4E8;">] });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getResourceType</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.css&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;stylesheet&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.js&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;script&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.png&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.jpg&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.svg&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;image&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.woff&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.ttf&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;font&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;other&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  generatePerformanceReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      userAgent: navigator.userAgent,</span></span>
<span class="line"><span style="color:#E1E4E8;">      connection: navigator.connection </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        effectiveType: navigator.connection.effectiveType,</span></span>
<span class="line"><span style="color:#E1E4E8;">        downlink: navigator.connection.downlink,</span></span>
<span class="line"><span style="color:#E1E4E8;">        rtt: navigator.connection.rtt</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      metrics: Object.</span><span style="color:#B392F0;">fromEntries</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics),</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: performance.memory </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        used: performance.memory.usedJSHeapSize,</span></span>
<span class="line"><span style="color:#E1E4E8;">        total: performance.memory.totalJSHeapSize,</span></span>
<span class="line"><span style="color:#E1E4E8;">        limit: performance.memory.jsHeapSizeLimit</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.reports.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(report);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> report;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取性能评分</span></span>
<span class="line"><span style="color:#B392F0;">  getPerformanceScore</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> navigation</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;navigation&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">navigation) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> score </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 基于加载时间的扣分</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (navigation.domContentLoaded </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 3000</span><span style="color:#E1E4E8;">) score </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 20</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (navigation.domContentLoaded </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 2000</span><span style="color:#E1E4E8;">) score </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (navigation.loadComplete </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 5000</span><span style="color:#E1E4E8;">) score </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 20</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (navigation.loadComplete </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 3000</span><span style="color:#E1E4E8;">) score </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 基于资源数量的扣分</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> resources</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;resources&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (resources.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">) score </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (resources.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 30</span><span style="color:#E1E4E8;">) score </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, score);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 发送性能报告（可选）</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> sendPerformanceReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generatePerformanceReport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 在实际应用中，这里可以发送到性能监控服务</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (window.electronAPI) {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> window.electronAPI.</span><span style="color:#B392F0;">sendPerformanceReport</span><span style="color:#E1E4E8;">(report);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;📊 性能报告已生成:&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        评分: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getPerformanceScore</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        加载时间: report.metrics.navigation?.loadComplete</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;发送性能报告失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> performanceMonitor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PerformanceMonitor</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自动开始监控</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DOMContentLoaded&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  performanceMonitor.</span><span style="color:#B392F0;">startMonitoring</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 页面加载完成后发送初始报告</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;load&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      performanceMonitor.</span><span style="color:#B392F0;">sendPerformanceReport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div>`,36)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
