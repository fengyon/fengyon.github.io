import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"PWA","description":"","frontmatter":{},"headers":[{"level":2,"title":"核心概念与定义","slug":"核心概念与定义","link":"#核心概念与定义","children":[]},{"level":2,"title":"技术架构与核心组件","slug":"技术架构与核心组件","link":"#技术架构与核心组件","children":[{"level":3,"title":"Service Worker","slug":"service-worker","link":"#service-worker","children":[]},{"level":3,"title":"Web 应用清单","slug":"web-应用清单","link":"#web-应用清单","children":[]},{"level":3,"title":"应用程序外壳架构","slug":"应用程序外壳架构","link":"#应用程序外壳架构","children":[]}]},{"level":2,"title":"主要特点与优势","slug":"主要特点与优势","link":"#主要特点与优势","children":[{"level":3,"title":"跨平台兼容性","slug":"跨平台兼容性","link":"#跨平台兼容性","children":[]},{"level":3,"title":"离线功能","slug":"离线功能","link":"#离线功能","children":[]},{"level":3,"title":"可安装性","slug":"可安装性","link":"#可安装性","children":[]},{"level":3,"title":"推送通知","slug":"推送通知","link":"#推送通知","children":[]},{"level":3,"title":"性能优势","slug":"性能优势","link":"#性能优势","children":[]}]},{"level":2,"title":"常用 API 及代码示例","slug":"常用-api-及代码示例","link":"#常用-api-及代码示例","children":[{"level":3,"title":"Service Worker 注册与安装","slug":"service-worker-注册与安装","link":"#service-worker-注册与安装","children":[]},{"level":3,"title":"缓存策略实现","slug":"缓存策略实现","link":"#缓存策略实现","children":[]},{"level":3,"title":"Web 应用清单配置","slug":"web-应用清单配置","link":"#web-应用清单配置","children":[]},{"level":3,"title":"现代 Web API 集成","slug":"现代-web-api-集成","link":"#现代-web-api-集成","children":[]}]},{"level":2,"title":"开发实践与调试","slug":"开发实践与调试","link":"#开发实践与调试","children":[{"level":3,"title":"开发工具与调试","slug":"开发工具与调试","link":"#开发工具与调试","children":[]},{"level":3,"title":"性能优化策略","slug":"性能优化策略","link":"#性能优化策略","children":[]}]},{"level":2,"title":"实际应用案例","slug":"实际应用案例","link":"#实际应用案例","children":[]}],"relativePath":"special/mobile/web/pwa.md","filePath":"special/mobile/web/pwa.md"}'),o={name:"special/mobile/web/pwa.md"};function e(t,s,E,c,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/mobile/web/pwa.md for this page in Markdown format</div><h1 id="pwa" tabindex="-1">PWA <a class="header-anchor" href="#pwa" aria-label="Permalink to &quot;PWA&quot;">​</a></h1><p>PWA (Progressive Web App) 是一种通过现代 Web 技术构建的应用程序，旨在提供与原生应用相媲美的用户体验。它结合了 Web 的广泛覆盖范围和原生应用的功能特性，让用户能够<strong>无需通过应用商店</strong>即可安装和使用应用，同时支持离线工作和推送通知等功能。</p><h2 id="核心概念与定义" tabindex="-1">核心概念与定义 <a class="header-anchor" href="#核心概念与定义" aria-label="Permalink to &quot;核心概念与定义&quot;">​</a></h2><p>PWA 不是特定的框架或技术，而是一种<strong>设计和开发理念</strong>，其核心在于利用现代 Web 能力逐步增强用户体验。一个合格的 PWA 应用需要具备以下关键特征：</p><ul><li><strong>可发现性</strong>：能够被搜索引擎索引，并通过 Web 应用清单文件提供应用元数据。</li><li><strong>可安装性</strong>：用户可以将其添加到设备主屏幕，像原生应用一样启动和运行。</li><li><strong>网络独立性</strong>：通过 Service Worker 技术实现离线工作或弱网环境下的正常使用。</li><li><strong>连接安全性</strong>：必须通过 HTTPS 提供服务，防止数据被篡改或窃取。</li><li><strong>响应式界面</strong>：适应各种屏幕尺寸和设备类型，从手机到桌面电脑。</li><li><strong>应用化交互</strong>：提供类似原生应用的导航和交互体验，避免传统的浏览器界面。</li></ul><p>PWA 生命周期示意图： 注册 Service Worker → 安装并激活 → 拦截网络请求 → 提供缓存内容 ↓ 用户访问 PWA 网站 → 体验原生应用般的交互 → 可选择添加到主屏幕</p><h2 id="技术架构与核心组件" tabindex="-1">技术架构与核心组件 <a class="header-anchor" href="#技术架构与核心组件" aria-label="Permalink to &quot;技术架构与核心组件&quot;">​</a></h2><p>PWA 的技术架构建立在三个核心基础之上：Service Worker、Web 应用清单和应用程序外壳架构。这些技术协同工作，共同提供了 PWA 的独特能力和用户体验。</p><h3 id="service-worker" tabindex="-1">Service Worker <a class="header-anchor" href="#service-worker" aria-label="Permalink to &quot;Service Worker&quot;">​</a></h3><p>Service Worker 是 PWA 的<strong>核心技术</strong>，它是在浏览器后台运行的脚本，充当 Web 应用程序与网络之间的代理。它的主要功能包括拦截和处理网络请求、管理缓存以及启用推送通知。</p><p>Service Worker 运行在独立于主浏览器线程的 Worker 上下文中，因此它无法直接访问 DOM，但可以通过 <code>postMessage</code> 接口与页面通信。</p><p>Service Worker 生命周期示意图： ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │ 注册 │ → │ 安装 │ → │ 激活 │ │ (Register) │ │ (Install) │ │ (Activate) │ └─────────────┘ └─────────────┘ └─────────────┘ ↓ ↓ ↓ 等待控制器接管 ← ┌─────────────┐ ← 处理旧缓存清理 │ 运行 │ │ (Idle) │ └─────────────┘</p><h3 id="web-应用清单" tabindex="-1">Web 应用清单 <a class="header-anchor" href="#web-应用清单" aria-label="Permalink to &quot;Web 应用清单&quot;">​</a></h3><p>Web 应用清单是一个 JSON 文件，它控制着 PWA 的<strong>外观和启动行为</strong>。该文件定义了应用如何显示给用户 (例如在全屏、独立或最小 UI 模式中启动)，以及主屏幕图标、主题颜色和方向等设置。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// manifest.json 示例</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;我的PWA应用&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;short_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;我的PWA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;start_url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;display&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;standalone&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;background_color&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#ffffff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;theme_color&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#007bff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;orientation&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;portrait-primary&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;icons&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;src&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;icons/icon-72x72.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;sizes&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;72x72&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;image/png&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;src&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;icons/icon-192x192.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;sizes&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;192x192&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;image/png&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;src&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;icons/icon-512x512.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;sizes&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;512x512&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;image/png&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;scope&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;一个示例PWA应用&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="应用程序外壳架构" tabindex="-1">应用程序外壳架构 <a class="header-anchor" href="#应用程序外壳架构" aria-label="Permalink to &quot;应用程序外壳架构&quot;">​</a></h3><p>应用程序外壳架构是一种设计模式，将<strong>核心用户界面</strong>与<strong>动态内容</strong>分离。它先加载应用的最小化静态界面，然后使用 JavaScript 填充内容，这显著提升了感知加载速度。</p><p>应用外壳架构示意图： ┌─────────────────────────────────────────┐ │ 应用外壳 (App Shell) │ │ ┌─────────────┐ ┌──────────────────┐ │ │ │ 头部导航 │ │ 侧边栏 │ │ │ └─────────────┘ └──────────────────┘ │ │ ┌──────────────────────────────────┐ │ │ │ 动态内容区域 │ ← 从 API 或缓存加载 │ │ │ │ │ └──────────────────────────────────┘ │ └─────────────────────────────────────────┘</p><h2 id="主要特点与优势" tabindex="-1">主要特点与优势 <a class="header-anchor" href="#主要特点与优势" aria-label="Permalink to &quot;主要特点与优势&quot;">​</a></h2><p>PWA 之所以受到广泛关注和应用，是因为它融合了 Web 和原生应用的优势，解决了传统 Web 应用的多个痛点。</p><h3 id="跨平台兼容性" tabindex="-1">跨平台兼容性 <a class="header-anchor" href="#跨平台兼容性" aria-label="Permalink to &quot;跨平台兼容性&quot;">​</a></h3><p>PWA 能够在各种设备和平台上提供一致的用户体验，从智能手机到桌面电脑，只需一个代码库。这种跨平台特性显著降低了开发和维护成本。</p><p>平台适配示意图： ┌─────────────┐ │ PWA 代码 │ └─────────────┘ ↓ ↓ ↓ ┌───────────┐ ┌───────────┐ ┌───────────┐ │ iOS │ │ Android │ │ Desktop │ └───────────┘ └───────────┘ └───────────┘</p><h3 id="离线功能" tabindex="-1">离线功能 <a class="header-anchor" href="#离线功能" aria-label="Permalink to &quot;离线功能&quot;">​</a></h3><p>通过 Service Worker 的缓存机制，PWA 可以在没有网络连接的情况下继续工作，这是与传统 Web 应用的根本区别之一。</p><p>离线策略对比： 在线体验：用户请求 → 网络获取 → 返回最新内容 离线体验：用户请求 → Service Worker → 返回缓存内容</p><h3 id="可安装性" tabindex="-1">可安装性 <a class="header-anchor" href="#可安装性" aria-label="Permalink to &quot;可安装性&quot;">​</a></h3><p>用户可以将经常访问的 PWA 添加到设备主屏幕，无需通过应用商店。这消除了传统应用安装的摩擦，同时保留了类似原生应用的启动体验。</p><p>安装流程示意图： 用户访问网站 → 浏览器检测到 Manifest → 显示安装提示 → 用户确认添加 ↓ 应用图标出现在主屏幕 → 点击图标以独立窗口启动</p><h3 id="推送通知" tabindex="-1">推送通知 <a class="header-anchor" href="#推送通知" aria-label="Permalink to &quot;推送通知&quot;">​</a></h3><p>PWA 支持推送通知功能，即使应用未主动运行，也能通过 Service Worker 在后台接收和显示通知，这大大提高了用户参与度和回头率。</p><p>推送机制示意图： 服务器发送通知 → 推送服务中转 → Service Worker 接收 → 显示通知给用户</p><h3 id="性能优势" tabindex="-1">性能优势 <a class="header-anchor" href="#性能优势" aria-label="Permalink to &quot;性能优势&quot;">​</a></h3><p>PWA 通过缓存和智能预加载策略，可以实现近乎瞬时的加载速度，即使在不确定的网络条件下也能立即加载。</p><p>性能对比示意图： 传统网站：请求 → 下载 HTML → 下载 CSS/JS → 下载数据 → 渲染 PWA：请求 → 从缓存返回 App Shell → 显示 → 异步加载数据</p><h2 id="常用-api-及代码示例" tabindex="-1">常用 API 及代码示例 <a class="header-anchor" href="#常用-api-及代码示例" aria-label="Permalink to &quot;常用 API 及代码示例&quot;">​</a></h2><p>PWA 的实现依赖于一系列现代 Web API，这些 API 共同赋予了 PWA 强大的功能和优异的用户体验。</p><h3 id="service-worker-注册与安装" tabindex="-1">Service Worker 注册与安装 <a class="header-anchor" href="#service-worker-注册与安装" aria-label="Permalink to &quot;Service Worker 注册与安装&quot;">​</a></h3><p>Service Worker 是 PWA 的核心，负责缓存管理和离线支持。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 主线程中注册 Service Worker</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;serviceWorker&#39;</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> navigator) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;load&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    navigator.serviceWorker</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/sw.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">registration</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Service Worker 注册成功: &#39;</span><span style="color:#E1E4E8;">, registration.scope)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Service Worker 注册失败: &#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// sw.js - Service Worker 安装和激活</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> CACHE_NAME</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;my-pwa-cache-v1&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> urlsToCache</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/styles/main.css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/scripts/app.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/images/logo.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 安装阶段：预缓存关键资源</span></span>
<span class="line"><span style="color:#E1E4E8;">self.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;install&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  event.</span><span style="color:#B392F0;">waitUntil</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CACHE_NAME</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">cache</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;已打开缓存&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">addAll</span><span style="color:#E1E4E8;">(urlsToCache)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 激活阶段：清理旧缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">self.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;activate&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  event.</span><span style="color:#B392F0;">waitUntil</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    caches.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">cacheNames</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        cacheNames.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">cacheName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (cacheName </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> CACHE_NAME</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除旧缓存：&#39;</span><span style="color:#E1E4E8;">, cacheName)</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(cacheName)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="缓存策略实现" tabindex="-1">缓存策略实现 <a class="header-anchor" href="#缓存策略实现" aria-label="Permalink to &quot;缓存策略实现&quot;">​</a></h3><p>不同的资源类型需要不同的缓存策略，以实现性能与内容新鲜度的平衡。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// sw.js - 缓存策略实现</span></span>
<span class="line"><span style="color:#E1E4E8;">self.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fetch&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  event.</span><span style="color:#B392F0;">respondWith</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    caches.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(event.request).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 缓存命中 - 返回缓存内容</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (response) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> response</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 克隆请求，因为请求是流，只能使用一次</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> fetchRequest</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> event.request.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(fetchRequest).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 检查响应是否有效</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">response </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> response.status </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 200</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> response.type </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;basic&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> response</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 克隆响应，因为响应是流，只能使用一次</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> responseToCache</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CACHE_NAME</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">cache</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">          // 将新资源加入缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">          cache.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(event.request, responseToCache)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> response</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更精细的缓存策略：网络优先，失败时使用缓存</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> networkFirst</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> networkResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(request)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cache</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CACHE_NAME</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    cache.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(request, networkResponse.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> networkResponse</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cachedResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(request)</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> cachedResponse </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> Response.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 缓存优先，适用于静态资源</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> cacheFirst</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> cachedResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(request)</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (cachedResponse) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> cachedResponse</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> networkResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(request)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cache</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CACHE_NAME</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    cache.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(request, networkResponse.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> networkResponse</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> Response.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="web-应用清单配置" tabindex="-1">Web 应用清单配置 <a class="header-anchor" href="#web-应用清单配置" aria-label="Permalink to &quot;Web 应用清单配置&quot;">​</a></h3><p>Web 应用清单定义了 PWA 的显示方式和外观。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#B392F0;"> html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;zh-CN&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#B392F0;"> charset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#B392F0;"> content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;我的PWA应用&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 链接 Web 应用清单 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">link</span><span style="color:#B392F0;"> rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;manifest&quot;</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;manifest.json&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 主题颜色，用于地址栏等系统UI --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;theme-color&quot;</span><span style="color:#B392F0;"> content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#007bff&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- iOS 特定配置 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;apple-mobile-web-app-capable&quot;</span><span style="color:#B392F0;"> content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;yes&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;apple-mobile-web-app-status-bar-style&quot;</span><span style="color:#B392F0;"> content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;apple-mobile-web-app-title&quot;</span><span style="color:#B392F0;"> content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;我的PWA&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">link</span><span style="color:#B392F0;"> rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;apple-touch-icon&quot;</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;icons/icon-192x192.png&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 应用内容 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;我的PWA应用&lt;/</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;欢迎使用PWA&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;这是一个渐进式Web应用的示例&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">      // 注册 Service Worker</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;serviceWorker&#39;</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> navigator) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        navigator.serviceWorker.</span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/sw.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 监听 beforeinstallprompt 事件，用于自定义安装提示</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> deferredPrompt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;beforeinstallprompt&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 阻止浏览器默认的安装提示</span></span>
<span class="line"><span style="color:#E1E4E8;">        e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">        // 保存事件，以便后续触发</span></span>
<span class="line"><span style="color:#E1E4E8;">        deferredPrompt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e</span></span>
<span class="line"><span style="color:#6A737D;">        // 显示自定义安装按钮</span></span>
<span class="line"><span style="color:#B392F0;">        showInstallPromotion</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      function</span><span style="color:#B392F0;"> showInstallPromotion</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">        // 显示自定义安装界面</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> installButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        installButton.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;安装应用&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        installButton.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, installApp)</span></span>
<span class="line"><span style="color:#E1E4E8;">        document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(installButton)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> installApp</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">deferredPrompt) </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#6A737D;">        // 显示安装提示</span></span>
<span class="line"><span style="color:#E1E4E8;">        deferredPrompt.</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">        // 等待用户选择</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">outcome</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> deferredPrompt.userChoice</span></span>
<span class="line"><span style="color:#6A737D;">        // 清理引用</span></span>
<span class="line"><span style="color:#E1E4E8;">        deferredPrompt </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#6A737D;">        // 移除安装按钮</span></span>
<span class="line"><span style="color:#E1E4E8;">        document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="现代-web-api-集成" tabindex="-1">现代 Web API 集成 <a class="header-anchor" href="#现代-web-api-集成" aria-label="Permalink to &quot;现代 Web API 集成&quot;">​</a></h3><p>PWA 可以集成各种现代 Web API 来增强功能，提供更接近原生应用的体验。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 推送通知 API</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> requestNotificationPermission</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Notification&#39;</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> window)) {</span></span>
<span class="line"><span style="color:#B392F0;">      reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;浏览器不支持通知&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (Notification.permission </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;granted&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">      resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;granted&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (Notification.permission </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;denied&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      Notification.</span><span style="color:#B392F0;">requestPermission</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">permission</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(permission)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;通知权限已被拒绝&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> showLocalNotification</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">title</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (Notification.permission </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;granted&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    navigator.serviceWorker.ready.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">registration</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      registration.</span><span style="color:#B392F0;">showNotification</span><span style="color:#E1E4E8;">(title, options)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;notify-btn&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  requestNotificationPermission</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      showLocalNotification</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;欢迎使用PWA&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        body: </span><span style="color:#9ECBFF;">&#39;这是一个推送通知示例&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&#39;/icons/icon-192x192.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        badge: </span><span style="color:#9ECBFF;">&#39;/icons/badge-72x72.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { action: </span><span style="color:#9ECBFF;">&#39;like&#39;</span><span style="color:#E1E4E8;">, title: </span><span style="color:#9ECBFF;">&#39;👍 喜欢&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { action: </span><span style="color:#9ECBFF;">&#39;dismiss&#39;</span><span style="color:#E1E4E8;">, title: </span><span style="color:#9ECBFF;">&#39;关闭&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(error))</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 后台同步 API</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> registerBackgroundSync</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;serviceWorker&#39;</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> navigator </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#9ECBFF;"> &#39;SyncManager&#39;</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> window) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    navigator.serviceWorker.ready.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">registration</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      registration.sync</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;background-sync&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;后台同步已注册&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;后台同步注册失败&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在 Service Worker 中处理后台同步</span></span>
<span class="line"><span style="color:#E1E4E8;">self.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sync&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (event.tag </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;background-sync&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    event.</span><span style="color:#B392F0;">waitUntil</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">doBackgroundSync</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> doBackgroundSync</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 执行后台同步任务，如发送待发送的数据</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> pendingData</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> getPendingData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> pendingData) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#B392F0;"> sendToServer</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#B392F0;"> markAsSent</span><span style="color:#E1E4E8;">(data.id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;同步失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 Web Share API 实现内容分享</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> shareContent</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">shareData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (navigator.share) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    navigator</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">share</span><span style="color:#E1E4E8;">(shareData)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;分享成功&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;分享失败:&#39;</span><span style="color:#E1E4E8;">, error))</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 降级方案：复制到剪贴板</span></span>
<span class="line"><span style="color:#B392F0;">    fallbackShare</span><span style="color:#E1E4E8;">(shareData)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;share-btn&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  shareContent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;我的PWA应用&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#9ECBFF;">&#39;看看这个很棒的PWA应用!&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: window.location.href,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="开发实践与调试" tabindex="-1">开发实践与调试 <a class="header-anchor" href="#开发实践与调试" aria-label="Permalink to &quot;开发实践与调试&quot;">​</a></h2><p>PWA 的开发流程和调试方法与传统 Web 开发有所不同，需要特别关注一些工具和技巧。</p><h3 id="开发工具与调试" tabindex="-1">开发工具与调试 <a class="header-anchor" href="#开发工具与调试" aria-label="Permalink to &quot;开发工具与调试&quot;">​</a></h3><p>现代浏览器提供了强大的 PWA 开发工具，帮助开发者调试和优化应用。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 检查 Service Worker 状态</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;serviceWorker&#39;</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> navigator) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  navigator.serviceWorker.</span><span style="color:#B392F0;">getRegistrations</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">registrations</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`已注册 \${</span><span style="color:#E1E4E8;">registrations</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">length</span><span style="color:#9ECBFF;">} 个 Service Worker\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    registrations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">registration</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Scope:&#39;</span><span style="color:#E1E4E8;">, registration.scope)</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;状态:&#39;</span><span style="color:#E1E4E8;">, registration.active </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;激活&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;未激活&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 检查缓存内容</span></span>
<span class="line"><span style="color:#E1E4E8;">caches.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">cacheNames</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;现有缓存:&#39;</span><span style="color:#E1E4E8;">, cacheNames)</span></span>
<span class="line"><span style="color:#E1E4E8;">  cacheNames.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">cacheName</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(cacheName).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">cache</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cache.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">requests</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">          \`缓存 \${</span><span style="color:#E1E4E8;">cacheName</span><span style="color:#9ECBFF;">} 中的内容:\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          requests.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> req.url)</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听 Service Worker 消息</span></span>
<span class="line"><span style="color:#E1E4E8;">navigator.serviceWorker.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;收到来自 Service Worker 的消息:&#39;</span><span style="color:#E1E4E8;">, event.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 向 Service Worker 发送消息</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> sendMessageToSW</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (navigator.serviceWorker.controller) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    navigator.serviceWorker.controller.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">(message)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="性能优化策略" tabindex="-1">性能优化策略 <a class="header-anchor" href="#性能优化策略" aria-label="Permalink to &quot;性能优化策略&quot;">​</a></h3><p>PWA 的性能优化需要综合考虑缓存策略、资源加载和用户体验。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 预缓存关键资源</span></span>
<span class="line"><span style="color:#E1E4E8;">self.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;install&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  event.</span><span style="color:#B392F0;">waitUntil</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;critical-v1&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">cache</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">addAll</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;/styles/main.css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;/scripts/main.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;/images/hero-image.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ])</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 延迟缓存非关键资源</span></span>
<span class="line"><span style="color:#E1E4E8;">self.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fetch&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (event.request.url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#6A737D;">    // API 请求：网络优先策略</span></span>
<span class="line"><span style="color:#E1E4E8;">    event.</span><span style="color:#B392F0;">respondWith</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">networkFirst</span><span style="color:#E1E4E8;">(event.request))</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (event.request.destination </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;image&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 图片：缓存优先，后台更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    event.</span><span style="color:#B392F0;">respondWith</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">cacheFirst</span><span style="color:#E1E4E8;">(event.request))</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 其他资源：网络优先</span></span>
<span class="line"><span style="color:#E1E4E8;">    event.</span><span style="color:#B392F0;">respondWith</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">networkFirst</span><span style="color:#E1E4E8;">(event.request))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 Workbox 简化 PWA 开发</span></span>
<span class="line"><span style="color:#B392F0;">importScripts</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">workbox.routing.</span><span style="color:#B392F0;">registerRoute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  ({ </span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> request.destination </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;image&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#F97583;">  new</span><span style="color:#E1E4E8;"> workbox.strategies.</span><span style="color:#B392F0;">CacheFirst</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    cacheName: </span><span style="color:#9ECBFF;">&#39;images&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#E1E4E8;"> workbox.expiration.</span><span style="color:#B392F0;">ExpirationPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxEntries: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxAgeSeconds: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 24</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 60</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 60</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 30天</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">workbox.routing.</span><span style="color:#B392F0;">registerRoute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  ({ </span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> url.pathname.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#F97583;">  new</span><span style="color:#E1E4E8;"> workbox.strategies.</span><span style="color:#B392F0;">NetworkFirst</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    cacheName: </span><span style="color:#9ECBFF;">&#39;api-responses&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    networkTimeoutSeconds: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#E1E4E8;"> workbox.expiration.</span><span style="color:#B392F0;">ExpirationPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxEntries: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxAgeSeconds: </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 60</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 5分钟</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><h2 id="实际应用案例" tabindex="-1">实际应用案例 <a class="header-anchor" href="#实际应用案例" aria-label="Permalink to &quot;实际应用案例&quot;">​</a></h2><p>众多知名公司已成功采用 PWA 技术，并取得了显著的业务成果。</p><ul><li><strong>Tinder</strong>：PWA 版本比原生 Android 应用小 90%，加载时间从 11.91 秒减少到 4.69 秒。</li><li><strong>Trivago</strong>：用户将 PWA 添加到主屏幕后增长了 150%，离线支持下用户参与度显著提升。</li><li><strong>Pinterest</strong>：将移动网站升级为 PWA 后，核心用户参与度增加了 60%，广告收入增加了 44%。</li><li><strong>Uber</strong>：构建了仅 50KB 的核心应用，即使在 2G 网络下也能在 3 秒内完成加载。</li></ul><p>这些案例证明了 PWA 在提升性能、用户参与度和业务指标方面的显著效果。</p>`,62)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
