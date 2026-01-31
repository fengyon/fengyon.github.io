import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"微信小程序","description":"","frontmatter":{},"headers":[{"level":2,"title":"核心概念与定义","slug":"核心概念与定义","link":"#核心概念与定义","children":[]},{"level":2,"title":"技术架构特点","slug":"技术架构特点","link":"#技术架构特点","children":[{"level":3,"title":"双线程模型","slug":"双线程模型","link":"#双线程模型","children":[]},{"level":3,"title":"组件化开发","slug":"组件化开发","link":"#组件化开发","children":[]},{"level":3,"title":"生命周期管理","slug":"生命周期管理","link":"#生命周期管理","children":[]}]},{"level":2,"title":"主要技术特点","slug":"主要技术特点","link":"#主要技术特点","children":[{"level":3,"title":"开发门槛低","slug":"开发门槛低","link":"#开发门槛低","children":[]},{"level":3,"title":"跨平台兼容","slug":"跨平台兼容","link":"#跨平台兼容","children":[]},{"level":3,"title":"即用即走与轻量级","slug":"即用即走与轻量级","link":"#即用即走与轻量级","children":[]},{"level":3,"title":"线下场景连接","slug":"线下场景连接","link":"#线下场景连接","children":[]}]},{"level":2,"title":"常用 API 及代码示例","slug":"常用-api-及代码示例","link":"#常用-api-及代码示例","children":[{"level":3,"title":"页面导航 API","slug":"页面导航-api","link":"#页面导航-api","children":[]},{"level":3,"title":"网络请求 API","slug":"网络请求-api","link":"#网络请求-api","children":[]},{"level":3,"title":"数据缓存 API","slug":"数据缓存-api","link":"#数据缓存-api","children":[]},{"level":3,"title":"用户交互 API","slug":"用户交互-api","link":"#用户交互-api","children":[]},{"level":3,"title":"设备相关 API","slug":"设备相关-api","link":"#设备相关-api","children":[]},{"level":3,"title":"多媒体 API","slug":"多媒体-api","link":"#多媒体-api","children":[]},{"level":3,"title":"扫码功能 API","slug":"扫码功能-api","link":"#扫码功能-api","children":[]}]},{"level":2,"title":"开发实践与模式","slug":"开发实践与模式","link":"#开发实践与模式","children":[{"level":3,"title":"小程序开发模式","slug":"小程序开发模式","link":"#小程序开发模式","children":[]},{"level":3,"title":"数据绑定与事件处理","slug":"数据绑定与事件处理","link":"#数据绑定与事件处理","children":[]},{"level":3,"title":"云开发能力","slug":"云开发能力","link":"#云开发能力","children":[]}]}],"relativePath":"special/mobile/applet/wechat.md","filePath":"special/mobile/applet/wechat.md"}'),o={name:"special/mobile/applet/wechat.md"};function e(c,s,t,E,r,i){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/mobile/applet/wechat.md for this page in Markdown format</div><h1 id="微信小程序" tabindex="-1">微信小程序 <a class="header-anchor" href="#微信小程序" aria-label="Permalink to &quot;微信小程序&quot;">​</a></h1><p>微信小程序是一种<strong>无需下载安装</strong>即可使用的应用程序，实现了“<strong>触手可及</strong>”的梦想，用户扫一扫或搜一下即可打开应用，体现了“<strong>用完即走</strong>”的理念。它嵌入了微信平台，通过简化用户的操作路径和创新服务连接方式，成为了移动互联网时代的重要技术创新。</p><h2 id="核心概念与定义" tabindex="-1">核心概念与定义 <a class="header-anchor" href="#核心概念与定义" aria-label="Permalink to &quot;核心概念与定义&quot;">​</a></h2><p>微信小程序本质上是一种<strong>轻量级应用</strong>，它打破了传统 APP 需要下载安装的桎梏，直接在微信环境中运行。小程序的大小通常被限制在 <strong>1M 以内</strong>，这使得开发者只能保留核心功能，从而实现快速加载和即时使用。</p><p><strong>与传统应用对比</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>传统APP：查找应用 → 应用商店下载 → 安装 → 占用存储空间 → 需要卸载</span></span>
<span class="line"><span>微信小程序：扫描二维码/搜索 → 立即使用 → 不占存储 → 自动清理</span></span></code></pre></div><p><strong>架构特点</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>小程序架构：</span></span>
<span class="line"><span>┌─────────────────┐</span></span>
<span class="line"><span>│   微信客户端     │ ← 提供运行环境</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│   小程序框架     │ ← WXML/WXSS/JS</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│  逻辑层与视图层  │ ← 双线程模型</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│  原生组件支持    │ ← 体验接近原生</span></span>
<span class="line"><span>└─────────────────┘</span></span></code></pre></div><h2 id="技术架构特点" tabindex="-1">技术架构特点 <a class="header-anchor" href="#技术架构特点" aria-label="Permalink to &quot;技术架构特点&quot;">​</a></h2><h3 id="双线程模型" tabindex="-1">双线程模型 <a class="header-anchor" href="#双线程模型" aria-label="Permalink to &quot;双线程模型&quot;">​</a></h3><p>小程序采用逻辑层与渲染层分离的架构，逻辑层运行在单独的 JavaScript 线程中，视图层运行在 WebView 线程中，两者通过 Native 进行通信，这样的设计既保证了性能，又提升了安全性。</p><p><strong>运行机制</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>逻辑层 (App Service)       视图层 (View)</span></span>
<span class="line"><span>     ↓                         ↓</span></span>
<span class="line"><span>JavaScript代码            WXML/WXSS渲染</span></span>
<span class="line"><span>     ↓                         ↓</span></span>
<span class="line"><span>数据处理与业务逻辑           界面展示</span></span>
<span class="line"><span>     ↓                         ↓</span></span>
<span class="line"><span>─────── 通过Native桥接通信 ───────</span></span></code></pre></div><h3 id="组件化开发" tabindex="-1">组件化开发 <a class="header-anchor" href="#组件化开发" aria-label="Permalink to &quot;组件化开发&quot;">​</a></h3><p>小程序提供了丰富的组件体系，包括基础内容组件、表单组件、导航组件、媒体组件等，开发者可以像搭积木一样快速构建界面。</p><p><strong>组件树示意图</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Page</span></span>
<span class="line"><span>├── view (容器组件)</span></span>
<span class="line"><span>│   ├── text (文本组件)</span></span>
<span class="line"><span>│   ├── image (图片组件)</span></span>
<span class="line"><span>│   └── button (按钮组件)</span></span>
<span class="line"><span>├── form (表单组件)</span></span>
<span class="line"><span>│   ├── input (输入框)</span></span>
<span class="line"><span>│   └── picker (选择器)</span></span>
<span class="line"><span>└── navigator (导航组件)</span></span></code></pre></div><h3 id="生命周期管理" tabindex="-1">生命周期管理 <a class="header-anchor" href="#生命周期管理" aria-label="Permalink to &quot;生命周期管理&quot;">​</a></h3><p>小程序拥有完善的生命周期管理，包括应用生命周期和页面生命周期，确保资源的高效利用和用户体验的流畅性。</p><p><strong>应用生命周期流程</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>启动 → onLaunch → 初始化</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>前台运行 → onShow → 页面展示</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>后台运行 → onHide → 资源暂停</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>再次显示 → onShow → 恢复运行</span></span></code></pre></div><h2 id="主要技术特点" tabindex="-1">主要技术特点 <a class="header-anchor" href="#主要技术特点" aria-label="Permalink to &quot;主要技术特点&quot;">​</a></h2><h3 id="开发门槛低" tabindex="-1">开发门槛低 <a class="header-anchor" href="#开发门槛低" aria-label="Permalink to &quot;开发门槛低&quot;">​</a></h3><p>小程序的开发门槛相对较低，前端开发者可以快速上手。微信提供了完整的开发工具链，包括开发者工具、调试工具和文档支持。</p><p><strong>开发流程</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>环境准备 → 项目创建 → 代码编写 → 真机调试 → 上传发布</span></span>
<span class="line"><span>   ↓           ↓          ↓         ↓         ↓</span></span>
<span class="line"><span>安装工具    初始化配置    WXML编译   扫码测试   审核上线</span></span></code></pre></div><h3 id="跨平台兼容" tabindex="-1">跨平台兼容 <a class="header-anchor" href="#跨平台兼容" aria-label="Permalink to &quot;跨平台兼容&quot;">​</a></h3><p>小程序天然具备跨平台特性，一次开发即可在 iOS 和 Android 系统上运行，大大降低了开发和维护成本。</p><p><strong>平台适配</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>同一套代码</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>┌───────┼───────┐</span></span>
<span class="line"><span>↓               ↓</span></span>
<span class="line"><span>iOS           Android</span></span>
<span class="line"><span>平台          平台</span></span></code></pre></div><h3 id="即用即走与轻量级" tabindex="-1">即用即走与轻量级 <a class="header-anchor" href="#即用即走与轻量级" aria-label="Permalink to &quot;即用即走与轻量级&quot;">​</a></h3><p>小程序遵循“即用即走”的设计理念，用户无需安装，不占用手机存储空间。微信会定期清理不使用的小程序缓存，保持设备的清爽。</p><p><strong>用户体验路径</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>场景触发 → 扫码/搜索 → 立即使用 → 完成任务 → 自动离开</span></span>
<span class="line"><span>   ↓          ↓          ↓          ↓         ↓</span></span>
<span class="line"><span>线下需求    快速入口    无需等待    核心功能   无残留</span></span></code></pre></div><h3 id="线下场景连接" tabindex="-1">线下场景连接 <a class="header-anchor" href="#线下场景连接" aria-label="Permalink to &quot;线下场景连接&quot;">​</a></h3><p>小程序特别强调线下场景的连接能力，通过二维码打通线上线下，实现“无处不在”的服务访问。</p><p><strong>连接方式</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>线下场景 → 二维码 → 小程序服务</span></span>
<span class="line"><span>   ↓           ↓          ↓</span></span>
<span class="line"><span>餐厅点餐    桌角二维码   直接下单</span></span>
<span class="line"><span>公交查询    站牌二维码   到站时间</span></span>
<span class="line"><span>商场导航    店铺二维码   优惠信息</span></span></code></pre></div><h2 id="常用-api-及代码示例" tabindex="-1">常用 API 及代码示例 <a class="header-anchor" href="#常用-api-及代码示例" aria-label="Permalink to &quot;常用 API 及代码示例&quot;">​</a></h2><p>微信小程序提供了丰富的 API 接口，涵盖了网络请求、数据缓存、界面交互、设备能力等各个方面。</p><h3 id="页面导航-api" tabindex="-1">页面导航 API <a class="header-anchor" href="#页面导航-api" aria-label="Permalink to &quot;页面导航 API&quot;">​</a></h3><p>页面导航 API 负责管理小程序内的页面跳转和路由。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 保留当前页面，跳转到新页面</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">navigateTo</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&#39;/pages/detail/detail?id=123&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 关闭当前页面，跳转到新页面</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">redirectTo</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&#39;/pages/index/index&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 跳转到tabBar页面</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">switchTab</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&#39;/pages/home/home&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 关闭所有页面，打开新页面</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">reLaunch</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&#39;/pages/login/login&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 返回上一页面</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">navigateBack</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  delta: </span><span style="color:#79B8FF;">1</span><span style="color:#6A737D;">  // 返回层数</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="网络请求-api" tabindex="-1">网络请求 API <a class="header-anchor" href="#网络请求-api" aria-label="Permalink to &quot;网络请求 API&quot;">​</a></h3><p>网络请求是小程序与服务器交互的核心，wx.request 是最常用的 API。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 发起GET请求</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&#39;https://api.example.com/data&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  method: </span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    page: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    size: </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  header: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;content-type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请求成功:&#39;</span><span style="color:#E1E4E8;">, res.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  fail</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请求失败:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  complete</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请求完成&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Promise风格调用（基础库2.10.2+）</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&#39;https://api.example.com/data&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="数据缓存-api" tabindex="-1">数据缓存 API <a class="header-anchor" href="#数据缓存-api" aria-label="Permalink to &quot;数据缓存 API&quot;">​</a></h3><p>数据缓存 API 提供了本地存储能力，适合存储用户偏好、临时数据等。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 异步存储数据</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">setStorage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  key: </span><span style="color:#9ECBFF;">&#39;userInfo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    age: </span><span style="color:#79B8FF;">25</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;存储成功&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 同步存储数据</span></span>
<span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  wx.</span><span style="color:#B392F0;">setStorageSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;token&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;abcdef123456&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;存储失败:&#39;</span><span style="color:#E1E4E8;">, e)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取数据</span></span>
<span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> userInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> wx.</span><span style="color:#B392F0;">getStorageSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userInfo&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户信息:&#39;</span><span style="color:#E1E4E8;">, userInfo)</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取失败:&#39;</span><span style="color:#E1E4E8;">, e)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除数据</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">removeStorage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  key: </span><span style="color:#9ECBFF;">&#39;tempData&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除成功&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 清空所有缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">clearStorage</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h3 id="用户交互-api" tabindex="-1">用户交互 API <a class="header-anchor" href="#用户交互-api" aria-label="Permalink to &quot;用户交互 API&quot;">​</a></h3><p>用户交互 API 增强了小程序与用户的沟通能力。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 显示消息提示框</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&#39;操作成功&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  icon: </span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  duration: </span><span style="color:#79B8FF;">2000</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 显示加载提示</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">showLoading</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&#39;加载中...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  mask: </span><span style="color:#79B8FF;">true</span><span style="color:#6A737D;">  // 是否显示透明蒙层</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 隐藏加载提示</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">hideLoading</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 显示模态对话框</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">showModal</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&#39;提示&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  content: </span><span style="color:#9ECBFF;">&#39;确定要删除吗？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  confirmColor: </span><span style="color:#9ECBFF;">&#39;#FF0000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (res.confirm) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户点击确定&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (res.cancel) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户点击取消&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 显示操作菜单</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">showActionSheet</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  itemList: [</span><span style="color:#9ECBFF;">&#39;拍照&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;从相册选择&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;取消&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> tapIndex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> res.tapIndex</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;">(tapIndex) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;选择拍照&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;选择相册&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="设备相关-api" tabindex="-1">设备相关 API <a class="header-anchor" href="#设备相关-api" aria-label="Permalink to &quot;设备相关 API&quot;">​</a></h3><p>设备 API 让小程序能够访问手机的系统功能和硬件能力。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 获取系统信息</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> systemInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> wx.</span><span style="color:#B392F0;">getSystemInfoSync</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;手机型号:&#39;</span><span style="color:#E1E4E8;">, systemInfo.model)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;系统版本:&#39;</span><span style="color:#E1E4E8;">, systemInfo.system)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;屏幕宽度:&#39;</span><span style="color:#E1E4E8;">, systemInfo.screenWidth)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取网络类型</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">getNetworkType</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;网络类型:&#39;</span><span style="color:#E1E4E8;">, res.networkType)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听网络状态变化</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">onNetworkStatusChange</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;网络是否连接:&#39;</span><span style="color:#E1E4E8;">, res.isConnected)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;网络类型:&#39;</span><span style="color:#E1E4E8;">, res.networkType)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取位置信息</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">getLocation</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  type: </span><span style="color:#9ECBFF;">&#39;wgs84&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> latitude</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> res.latitude</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> longitude</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> res.longitude</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;经纬度:&#39;</span><span style="color:#E1E4E8;">, latitude, longitude)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="多媒体-api" tabindex="-1">多媒体 API <a class="header-anchor" href="#多媒体-api" aria-label="Permalink to &quot;多媒体 API&quot;">​</a></h3><p>多媒体 API 处理图片、音频、视频等媒体内容。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 选择图片</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">chooseImage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  count: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 最多选择图片数量</span></span>
<span class="line"><span style="color:#E1E4E8;">  sizeType: [</span><span style="color:#9ECBFF;">&#39;compressed&#39;</span><span style="color:#E1E4E8;">],  </span><span style="color:#6A737D;">// 压缩图</span></span>
<span class="line"><span style="color:#E1E4E8;">  sourceType: [</span><span style="color:#9ECBFF;">&#39;album&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;camera&#39;</span><span style="color:#E1E4E8;">],  </span><span style="color:#6A737D;">// 相册或相机</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> tempFilePaths</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> res.tempFilePaths</span></span>
<span class="line"><span style="color:#6A737D;">    // 显示选择的图片</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      imageSrc: tempFilePaths[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 预览图片</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">previewImage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  urls: [</span><span style="color:#9ECBFF;">&#39;https://example.com/image1.jpg&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;https://example.com/image2.jpg&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  current: </span><span style="color:#9ECBFF;">&#39;https://example.com/image1.jpg&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建音频上下文</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> audioContext</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> wx.</span><span style="color:#B392F0;">createInnerAudioContext</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">audioContext.src </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;https://example.com/audio.mp3&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">audioContext.</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// 播放音频</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 控制音频</span></span>
<span class="line"><span style="color:#E1E4E8;">audioContext.</span><span style="color:#B392F0;">pause</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// 暂停</span></span>
<span class="line"><span style="color:#E1E4E8;">audioContext.</span><span style="color:#B392F0;">stop</span><span style="color:#E1E4E8;">()   </span><span style="color:#6A737D;">// 停止</span></span></code></pre></div><h3 id="扫码功能-api" tabindex="-1">扫码功能 API <a class="header-anchor" href="#扫码功能-api" aria-label="Permalink to &quot;扫码功能 API&quot;">​</a></h3><p>扫码是小程序连接线下场景的重要方式。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 扫描二维码</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">scanCode</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> res.result</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;扫码结果:&#39;</span><span style="color:#E1E4E8;">, result)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 根据扫码结果处理业务逻辑</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (result.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;http&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 如果是URL，跳转到webview</span></span>
<span class="line"><span style="color:#E1E4E8;">      wx.</span><span style="color:#B392F0;">navigateTo</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">\`/pages/webview/webview?url=\${</span><span style="color:#B392F0;">encodeURIComponent</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">result</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 其他业务逻辑处理</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleScanResult</span><span style="color:#E1E4E8;">(result)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  fail</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;扫码失败:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">    wx.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;扫码失败&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&#39;none&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="开发实践与模式" tabindex="-1">开发实践与模式 <a class="header-anchor" href="#开发实践与模式" aria-label="Permalink to &quot;开发实践与模式&quot;">​</a></h2><h3 id="小程序开发模式" tabindex="-1">小程序开发模式 <a class="header-anchor" href="#小程序开发模式" aria-label="Permalink to &quot;小程序开发模式&quot;">​</a></h3><p>小程序的开发遵循特定的模式和规范，包括文件结构和配置约束。</p><p><strong>项目结构</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>project-root/</span></span>
<span class="line"><span>├── app.js          # 小程序逻辑</span></span>
<span class="line"><span>├── app.json        # 全局配置</span></span>
<span class="line"><span>├── app.wxss        # 全局样式</span></span>
<span class="line"><span>├── pages/          # 页面目录</span></span>
<span class="line"><span>│   ├── index/</span></span>
<span class="line"><span>│   │   ├── index.js</span></span>
<span class="line"><span>│   │   ├── index.wxml</span></span>
<span class="line"><span>│   │   ├── index.wxss</span></span>
<span class="line"><span>│   │   └── index.json</span></span>
<span class="line"><span>│   └── logs/</span></span>
<span class="line"><span>│       └── logs.js</span></span>
<span class="line"><span>├── components/     # 自定义组件</span></span>
<span class="line"><span>└── utils/          # 工具模块</span></span></code></pre></div><h3 id="数据绑定与事件处理" tabindex="-1">数据绑定与事件处理 <a class="header-anchor" href="#数据绑定与事件处理" aria-label="Permalink to &quot;数据绑定与事件处理&quot;">​</a></h3><p>小程序使用数据驱动视图的模式，通过数据绑定和事件处理实现交互。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// page.js - 页面逻辑</span></span>
<span class="line"><span style="color:#B392F0;">Page</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;Hello MiniProgram&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    list: [</span><span style="color:#9ECBFF;">&#39;项目1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;项目2&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;项目3&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 按钮点击事件</span></span>
<span class="line"><span style="color:#B392F0;">  onButtonTap</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      count: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.data.count </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 输入框输入事件</span></span>
<span class="line"><span style="color:#B392F0;">  onInput</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: e.detail.value</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 列表项点击</span></span>
<span class="line"><span style="color:#B392F0;">  onItemTap</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> index</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> e.currentTarget.dataset.index</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;点击项索引:&#39;</span><span style="color:#E1E4E8;">, index)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- page.wxml - 页面结构 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;{{message}}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;"> value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{message}}&quot;</span><span style="color:#B392F0;"> bindinput</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onInput&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> bindtap</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onButtonTap&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    点击计数: {{count}}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#B392F0;"> wx:for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{list}}&quot;</span><span style="color:#B392F0;"> wx:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;index&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">        bindtap</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onItemTap&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">        data-index</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{index}}&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{index + 1}}. {{item}}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="云开发能力" tabindex="-1">云开发能力 <a class="header-anchor" href="#云开发能力" aria-label="Permalink to &quot;云开发能力&quot;">​</a></h3><p>小程序云开发提供了后端云服务，让开发者无需搭建服务器即可快速上线业务。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 初始化云开发</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.cloud.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  env: </span><span style="color:#9ECBFF;">&#39;your-environment-id&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 调用云函数</span></span>
<span class="line"><span style="color:#E1E4E8;">wx.cloud.</span><span style="color:#B392F0;">callFunction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;login&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    username: </span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    password: </span><span style="color:#9ECBFF;">&#39;pass&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">res</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;云函数调用成功:&#39;</span><span style="color:#E1E4E8;">, res.result)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  fail</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">err</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;云函数调用失败:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 操作云数据库</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> db</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> wx.cloud.</span><span style="color:#B392F0;">database</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">collection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;users&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    age: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    createTime: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">res</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;添加记录成功:&#39;</span><span style="color:#E1E4E8;">, res._id)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>微信小程序通过其<strong>轻量级</strong>、<strong>易开发</strong>、<strong>强连接</strong>的特点，为开发者提供了一个创新的应用开发平台，为用户创造了便捷的使用体验，正在逐步改变移动互联网的应用生态。</p>`,75)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
