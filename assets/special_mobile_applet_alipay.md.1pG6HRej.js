import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"支付宝小程序","description":"","frontmatter":{},"headers":[{"level":2,"title":"核心概念与定义","slug":"核心概念与定义","link":"#核心概念与定义","children":[]},{"level":2,"title":"技术架构特点","slug":"技术架构特点","link":"#技术架构特点","children":[{"level":3,"title":"双线程模型架构","slug":"双线程模型架构","link":"#双线程模型架构","children":[]},{"level":3,"title":"多层次技术栈","slug":"多层次技术栈","link":"#多层次技术栈","children":[]},{"level":3,"title":"性能优化机制","slug":"性能优化机制","link":"#性能优化机制","children":[]}]},{"level":2,"title":"主要技术特点","slug":"主要技术特点","link":"#主要技术特点","children":[{"level":3,"title":"商业与服务导向","slug":"商业与服务导向","link":"#商业与服务导向","children":[]},{"level":3,"title":"“718+X”业务模式","slug":"_718-x-业务模式","link":"#_718-x-业务模式","children":[]},{"level":3,"title":"多端部署能力","slug":"多端部署能力","link":"#多端部署能力","children":[]},{"level":3,"title":"低门槛开发模式","slug":"低门槛开发模式","link":"#低门槛开发模式","children":[]}]},{"level":2,"title":"常用 API 及代码示例","slug":"常用-api-及代码示例","link":"#常用-api-及代码示例","children":[{"level":3,"title":"网络请求 API","slug":"网络请求-api","link":"#网络请求-api","children":[]},{"level":3,"title":"支付 API","slug":"支付-api","link":"#支付-api","children":[]},{"level":3,"title":"用户授权与信息获取","slug":"用户授权与信息获取","link":"#用户授权与信息获取","children":[]},{"level":3,"title":"数据缓存 API","slug":"数据缓存-api","link":"#数据缓存-api","children":[]},{"level":3,"title":"设备与位置 API","slug":"设备与位置-api","link":"#设备与位置-api","children":[]},{"level":3,"title":"界面交互 API","slug":"界面交互-api","link":"#界面交互-api","children":[]}]},{"level":2,"title":"开发实践与模式","slug":"开发实践与模式","link":"#开发实践与模式","children":[{"level":3,"title":"小程序开发生命周期","slug":"小程序开发生命周期","link":"#小程序开发生命周期","children":[]},{"level":3,"title":"项目结构规范","slug":"项目结构规范","link":"#项目结构规范","children":[]},{"level":3,"title":"数据绑定与事件处理","slug":"数据绑定与事件处理","link":"#数据绑定与事件处理","children":[]}]}],"relativePath":"special/mobile/applet/alipay.md","filePath":"special/mobile/applet/alipay.md"}'),o={name:"special/mobile/applet/alipay.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/mobile/applet/alipay.md for this page in Markdown format</div><h1 id="支付宝小程序" tabindex="-1">支付宝小程序 <a class="header-anchor" href="#支付宝小程序" aria-label="Permalink to &quot;支付宝小程序&quot;">​</a></h1><p>支付宝小程序是支付宝自主研发的<strong>开放平台</strong>，于 2016 年 9 月启动研发。它通过整合支付、信用、金融等核心服务能力，为开发者提供线上线下场景的完整解决方案。作为阿里巴巴商业操作系统的重要组成部分，支付宝小程序凭借其独特的商业和生活服务属性，已成为移动互联网时代连接用户与服务的关键桥梁。</p><h2 id="核心概念与定义" tabindex="-1">核心概念与定义 <a class="header-anchor" href="#核心概念与定义" aria-label="Permalink to &quot;核心概念与定义&quot;">​</a></h2><p>支付宝小程序是一种<strong>无需下载安装</strong>即可使用的轻量级应用，用户通过扫一扫或搜索即可立即使用。它继承了支付宝在<strong>商业和生活服务</strong>领域的基因，专注于提供与交易、服务、信任密切相关的应用体验。</p><p><strong>与传统应用对比</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>传统应用：应用商店搜索 → 下载安装 → 占用存储 → 需要手动卸载</span></span>
<span class="line"><span>支付宝小程序：扫码/搜索 → 立即使用 → 不占存储 → 自动清理</span></span></code></pre></div><p><strong>生态定位</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>支付宝小程序 = 商业服务 + 生活服务 + 支付宝核心能力</span></span>
<span class="line"><span>              ↓              ↓             ↓</span></span>
<span class="line"><span>           交易场景       线下服务     支付/信用/金融</span></span></code></pre></div><h2 id="技术架构特点" tabindex="-1">技术架构特点 <a class="header-anchor" href="#技术架构特点" aria-label="Permalink to &quot;技术架构特点&quot;">​</a></h2><h3 id="双线程模型架构" tabindex="-1">双线程模型架构 <a class="header-anchor" href="#双线程模型架构" aria-label="Permalink to &quot;双线程模型架构&quot;">​</a></h3><p>支付宝小程序采用逻辑层与渲染层分离的架构设计，这种双线程模型确保了应用的高性能和安全性。</p><p><strong>运行机制</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>逻辑层 (App Service)         渲染层 (View)</span></span>
<span class="line"><span>     ↓                           ↓</span></span>
<span class="line"><span>独立JavaScript线程            WebView线程</span></span>
<span class="line"><span>     ↓                           ↓</span></span>
<span class="line"><span>业务逻辑处理                  界面渲染展示</span></span>
<span class="line"><span>     ↓                           ↓</span></span>
<span class="line"><span>─────── 通过Native桥接通信 ────────</span></span></code></pre></div><h3 id="多层次技术栈" tabindex="-1">多层次技术栈 <a class="header-anchor" href="#多层次技术栈" aria-label="Permalink to &quot;多层次技术栈&quot;">​</a></h3><p>支付宝小程序的技术架构建立在蚂蚁集团多年的技术积累之上，形成了完整的技术体系。</p><p><strong>架构层次</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────┐</span></span>
<span class="line"><span>│       支付宝客户端环境            │ ← 提供7大入口场景</span></span>
<span class="line"><span>├─────────────────────────────────┤</span></span>
<span class="line"><span>│     小程序核心引擎               │</span></span>
<span class="line"><span>│  ┌─────────────┐               │</span></span>
<span class="line"><span>│  │ 前端框架     │ ← 组件/API规范   │</span></span>
<span class="line"><span>│  ├─────────────┤               │</span></span>
<span class="line"><span>│  │ 渲染引擎     │ ← JS+Webview    │</span></span>
<span class="line"><span>│  │             │ ← JS+Native     │</span></span>
<span class="line"><span>│  ├─────────────┤               │</span></span>
<span class="line"><span>│  │ JavaScript  │ ← V8引擎优化     │</span></span>
<span class="line"><span>│  │   引擎       │                │</span></span>
<span class="line"><span>│  └─────────────┘               │</span></span>
<span class="line"><span>├─────────────────────────────────┤</span></span>
<span class="line"><span>│   研发支撑与运维支撑              │ ← 开发者服务</span></span>
<span class="line"><span>└─────────────────────────────────┘</span></span></code></pre></div><h3 id="性能优化机制" tabindex="-1">性能优化机制 <a class="header-anchor" href="#性能优化机制" aria-label="Permalink to &quot;性能优化机制&quot;">​</a></h3><p>支付宝小程序在性能方面做了深度优化，特别是针对冷启动场景的优化措施。</p><p><strong>启动优化策略</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>传统启动：点击图标 → 下载资源 → 加载框架 → 渲染页面</span></span>
<span class="line"><span>优化启动：点击图标 → 显示缓存页面 → 后台加载 → 动态合并</span></span>
<span class="line"><span>                        ↓</span></span>
<span class="line"><span>                 1秒内显示首页</span></span></code></pre></div><h2 id="主要技术特点" tabindex="-1">主要技术特点 <a class="header-anchor" href="#主要技术特点" aria-label="Permalink to &quot;主要技术特点&quot;">​</a></h2><h3 id="商业与服务导向" tabindex="-1">商业与服务导向 <a class="header-anchor" href="#商业与服务导向" aria-label="Permalink to &quot;商业与服务导向&quot;">​</a></h3><p>支付宝小程序与其它平台的最大区别在于其强烈的<strong>商业属性</strong>和<strong>服务导向</strong>。它聚焦在商业和生活服务领域，充分发挥支付宝在支付、信用、金融等方面的核心优势。</p><p><strong>核心能力整合</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>支付宝核心能力</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>┌─支付能力─┼─信用能力─┼─金融能力─┐</span></span>
<span class="line"><span>↓          ↓          ↓          ↓</span></span>
<span class="line"><span>交易闭环   芝麻信用   资金管理   会员营销</span></span></code></pre></div><h3 id="_718-x-业务模式" tabindex="-1">“718+X”业务模式 <a class="header-anchor" href="#_718-x-业务模式" aria-label="Permalink to &quot;“718+X”业务模式&quot;">​</a></h3><p>支付宝小程序采用独特的“718+X”业务模式，这一模式完整覆盖了用户从发现到留存的全流程。</p><p><strong>业务架构示意图</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>7大入口：扫一扫、搜索、朋友tab、支付成功页、小程序收藏、生活号、卡包</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>1个闭环：服务 → 拉新 → 留存 → 促活</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>8大能力：支付、信用、金融、营销、物流、定位、溯源、供应链</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>X场景：无限扩展的商业和生活服务场景</span></span></code></pre></div><h3 id="多端部署能力" tabindex="-1">多端部署能力 <a class="header-anchor" href="#多端部署能力" aria-label="Permalink to &quot;多端部署能力&quot;">​</a></h3><p>支付宝小程序支持<strong>一次开发，多端运行</strong>，可以无缝部署到阿里系的多个超级 APP 中。</p><p><strong>多端部署示意图</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>同一套支付宝小程序代码</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>┌──────┼──────┼──────┐</span></span>
<span class="line"><span>↓      ↓      ↓      ↓</span></span>
<span class="line"><span>支付宝  高德地图  手机淘宝  其它阿里系APP</span></span></code></pre></div><h3 id="低门槛开发模式" tabindex="-1">低门槛开发模式 <a class="header-anchor" href="#低门槛开发模式" aria-label="Permalink to &quot;低门槛开发模式&quot;">​</a></h3><p>支付宝小程序提供从自主开发、模板开发到定制开发的全套解决方案，特别是<strong>模板开发</strong>大幅降低了开发门槛。</p><p><strong>开发模式对比</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>自主开发：完全自定义 → 灵活性高 → 技术要求高</span></span>
<span class="line"><span>模板开发：选择模板 → 配置内容 → 快速上线</span></span>
<span class="line"><span>定制开发：需求定制 → 专业开发 → 成本较高</span></span></code></pre></div><h2 id="常用-api-及代码示例" tabindex="-1">常用 API 及代码示例 <a class="header-anchor" href="#常用-api-及代码示例" aria-label="Permalink to &quot;常用 API 及代码示例&quot;">​</a></h2><p>支付宝小程序提供了丰富的 JSAPI 和 OpenAPI，涵盖界面交互、多媒体、设备能力、数据安全等 14 个大类。以下是一些常用 API 的详细使用示例。</p><h3 id="网络请求-api" tabindex="-1">网络请求 API <a class="header-anchor" href="#网络请求-api" aria-label="Permalink to &quot;网络请求 API&quot;">​</a></h3><p>网络请求是小程序与服务器交互的基础，<code>my.request</code> 是最核心的 API 之一。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 发起GET请求示例</span></span>
<span class="line"><span style="color:#E1E4E8;">my.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&#39;https://api.example.com/user/data&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  method: </span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    userId: </span><span style="color:#9ECBFF;">&#39;12345&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    page: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    size: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;content-type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  dataType: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请求成功:&#39;</span><span style="color:#E1E4E8;">, res.data)</span></span>
<span class="line"><span style="color:#6A737D;">    // 处理业务数据</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      userInfo: res.data.userInfo,</span></span>
<span class="line"><span style="color:#E1E4E8;">      list: res.data.items,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  fail</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请求失败:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">    my.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;网络异常&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  complete</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    my.</span><span style="color:#B392F0;">hideLoading</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 发起POST请求示例</span></span>
<span class="line"><span style="color:#E1E4E8;">my.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&#39;https://api.example.com/order/create&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    productId: </span><span style="color:#9ECBFF;">&#39;P1001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    quantity: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalAmount: </span><span style="color:#9ECBFF;">&#39;199.00&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;content-type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/x-www-form-urlencoded&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (res.status </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 200</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      my.</span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;成功&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        content: </span><span style="color:#9ECBFF;">&#39;订单创建成功&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="支付-api" tabindex="-1">支付 API <a class="header-anchor" href="#支付-api" aria-label="Permalink to &quot;支付 API&quot;">​</a></h3><p>支付是支付宝小程序的核心能力，为商业场景提供完整的交易闭环。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 支付功能示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> AdaPay</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./utils/adaPay.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 调用支付</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> invokePayment</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">orderInfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  AdaPay.</span><span style="color:#B392F0;">doPay</span><span style="color:#E1E4E8;">(orderInfo, (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;返回结果码:&#39;</span><span style="color:#E1E4E8;">, result.result_status)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;返回结果描述:&#39;</span><span style="color:#E1E4E8;">, result.result_message)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (result.result_status) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;succeeded&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        my.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;支付成功&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          icon: </span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#6A737D;">        // 跳转到成功页面</span></span>
<span class="line"><span style="color:#E1E4E8;">        my.</span><span style="color:#B392F0;">navigateTo</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          url: </span><span style="color:#9ECBFF;">&#39;/pages/success/success&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;failed&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        my.</span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;支付失败&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          content: result.result_message,</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;cancel&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        my.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;支付取消&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          icon: </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        my.</span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;支付结果未知&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          content: </span><span style="color:#9ECBFF;">&#39;请查询订单状态&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取用户ID并发起支付</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> createPayment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 先获取用户信息</span></span>
<span class="line"><span style="color:#E1E4E8;">  my.</span><span style="color:#B392F0;">getAuthCode</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    scopes: </span><span style="color:#9ECBFF;">&#39;auth_user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">    success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 调用服务端创建订单</span></span>
<span class="line"><span style="color:#E1E4E8;">      my.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">&#39;https://api.example.com/create_order&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          authCode: res.authCode,</span></span>
<span class="line"><span style="color:#E1E4E8;">          productId: </span><span style="color:#9ECBFF;">&#39;P1001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#B392F0;">        success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">orderRes</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">          // 发起支付</span></span>
<span class="line"><span style="color:#B392F0;">          invokePayment</span><span style="color:#E1E4E8;">(orderRes.data.paymentInfo)</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="用户授权与信息获取" tabindex="-1">用户授权与信息获取 <a class="header-anchor" href="#用户授权与信息获取" aria-label="Permalink to &quot;用户授权与信息获取&quot;">​</a></h3><p>用户授权和信息获取是小程序个性化服务的基础。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 获取用户开放信息</span></span>
<span class="line"><span style="color:#E1E4E8;">my.</span><span style="color:#B392F0;">getOpenUserInfo</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> userInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(res.response).response</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户信息:&#39;</span><span style="color:#E1E4E8;">, userInfo)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 更新UI</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      userInfo: userInfo,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isLogged: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 保存到本地缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">    my.</span><span style="color:#B392F0;">setStorageSync</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      key: </span><span style="color:#9ECBFF;">&#39;userInfo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: userInfo,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  fail</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取用户信息失败:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">    my.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;授权失败&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取用户手机号</span></span>
<span class="line"><span style="color:#E1E4E8;">my.</span><span style="color:#B392F0;">getPhoneNumber</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> encryptedData</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> res.response</span></span>
<span class="line"><span style="color:#6A737D;">    // 将encryptedData发送到服务端解密</span></span>
<span class="line"><span style="color:#E1E4E8;">    my.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      url: </span><span style="color:#9ECBFF;">&#39;https://api.example.com/decode_phone&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        encryptedData: encryptedData,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#B392F0;">      success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">phoneRes</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户手机号:&#39;</span><span style="color:#E1E4E8;">, phoneRes.data.phoneNumber)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="数据缓存-api" tabindex="-1">数据缓存 API <a class="header-anchor" href="#数据缓存-api" aria-label="Permalink to &quot;数据缓存 API&quot;">​</a></h3><p>数据缓存 API 提供了本地数据存储能力，适合存储用户偏好和临时数据。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 数据缓存操作示例</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CacheManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 同步存储数据</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> setStorage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      my.</span><span style="color:#B392F0;">setStorageSync</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        key: key,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: data,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;存储成功:&#39;</span><span style="color:#E1E4E8;">, key)</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;存储失败:&#39;</span><span style="color:#E1E4E8;">, e)</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 同步获取数据</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getStorage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> my.</span><span style="color:#B392F0;">getStorageSync</span><span style="color:#E1E4E8;">({ key: key })</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> result.data</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取缓存失败:&#39;</span><span style="color:#E1E4E8;">, e)</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 移除数据</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> removeStorage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    my.</span><span style="color:#B392F0;">removeStorage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      key: key,</span></span>
<span class="line"><span style="color:#B392F0;">      success</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除成功:&#39;</span><span style="color:#E1E4E8;">, key)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 清空所有缓存</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> clearStorage</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    my.</span><span style="color:#B392F0;">clearStorage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">      success</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;清空缓存成功&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#6A737D;">// 存储用户配置</span></span>
<span class="line"><span style="color:#E1E4E8;">CacheManager.</span><span style="color:#B392F0;">setStorage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userSettings&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  theme: </span><span style="color:#9ECBFF;">&#39;dark&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  notification: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  language: </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 读取用户配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> settings</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> CacheManager.</span><span style="color:#B392F0;">getStorage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userSettings&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (settings) {</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({ settings: settings })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="设备与位置-api" tabindex="-1">设备与位置 API <a class="header-anchor" href="#设备与位置-api" aria-label="Permalink to &quot;设备与位置 API&quot;">​</a></h3><p>设备 API 让小程序能够访问手机的系统功能和硬件能力。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 获取设备信息</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> systemInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> my.</span><span style="color:#B392F0;">getSystemInfoSync</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;设备型号:&#39;</span><span style="color:#E1E4E8;">, systemInfo.model)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;系统版本:&#39;</span><span style="color:#E1E4E8;">, systemInfo.system)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;屏幕宽度:&#39;</span><span style="color:#E1E4E8;">, systemInfo.screenWidth)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;支付宝版本:&#39;</span><span style="color:#E1E4E8;">, systemInfo.version)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取位置信息</span></span>
<span class="line"><span style="color:#E1E4E8;">my.</span><span style="color:#B392F0;">getLocation</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  type: </span><span style="color:#9ECBFF;">&#39;gcj02&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;当前位置:&#39;</span><span style="color:#E1E4E8;">, res.latitude, res.longitude)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      location: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        latitude: res.latitude,</span></span>
<span class="line"><span style="color:#E1E4E8;">        longitude: res.longitude,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 逆地理编码获取地址信息</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reverseGeocode</span><span style="color:#E1E4E8;">(res.latitude, res.longitude)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  fail</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取位置失败:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">    my.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;位置获取失败&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 逆地理编码</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> reverseGeocode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">lat</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">lng</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  my.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">&#39;https://restapi.amap.com/v3/geocode/regeo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      key: </span><span style="color:#9ECBFF;">&#39;your_amap_key&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      location: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">lng</span><span style="color:#9ECBFF;">},\${</span><span style="color:#E1E4E8;">lat</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> address</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> res.data.regeocode.formatted_address</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;location.address&#39;</span><span style="color:#E1E4E8;">: address,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="界面交互-api" tabindex="-1">界面交互 API <a class="header-anchor" href="#界面交互-api" aria-label="Permalink to &quot;界面交互 API&quot;">​</a></h3><p>界面交互 API 增强了小程序与用户的沟通体验。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 消息提示</span></span>
<span class="line"><span style="color:#E1E4E8;">my.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&#39;操作成功&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  icon: </span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  duration: </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 加载提示</span></span>
<span class="line"><span style="color:#E1E4E8;">my.</span><span style="color:#B392F0;">showLoading</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&#39;加载中...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  mask: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模态对话框</span></span>
<span class="line"><span style="color:#E1E4E8;">my.</span><span style="color:#B392F0;">confirm</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&#39;确认删除&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  content: </span><span style="color:#9ECBFF;">&#39;确定要删除这条记录吗？删除后无法恢复&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  confirmButtonText: </span><span style="color:#9ECBFF;">&#39;删除&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  cancelButtonText: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (result.confirm) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 用户点击删除</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">deleteItem</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 用户点击取消</span></span>
<span class="line"><span style="color:#E1E4E8;">      my.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;取消删除&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 操作菜单</span></span>
<span class="line"><span style="color:#E1E4E8;">my.</span><span style="color:#B392F0;">showActionSheet</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  items: [</span><span style="color:#9ECBFF;">&#39;拍照&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;从相册选择&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;扫描二维码&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;取消&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> tapIndex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> res.tapIndex</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (tapIndex) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">takePhoto</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">chooseFromAlbum</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scanQRCode</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="开发实践与模式" tabindex="-1">开发实践与模式 <a class="header-anchor" href="#开发实践与模式" aria-label="Permalink to &quot;开发实践与模式&quot;">​</a></h2><h3 id="小程序开发生命周期" tabindex="-1">小程序开发生命周期 <a class="header-anchor" href="#小程序开发生命周期" aria-label="Permalink to &quot;小程序开发生命周期&quot;">​</a></h3><p>支付宝小程序的开发遵循特定的生命周期模式，包括应用生命周期和页面生命周期。</p><p><strong>应用生命周期</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>启动：onLaunch → 初始化全局数据</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>显示：onShow → 页面进入前台</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>隐藏：onHide → 页面进入后台</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>错误：onError → 脚本错误处理</span></span></code></pre></div><p><strong>页面生命周期</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>加载：onLoad → 参数接收</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>显示：onShow → 页面渲染</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>就绪：onReady → 交互准备</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>隐藏：onHide → 页面隐藏</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>卸载：onUnload → 资源清理</span></span></code></pre></div><h3 id="项目结构规范" tabindex="-1">项目结构规范 <a class="header-anchor" href="#项目结构规范" aria-label="Permalink to &quot;项目结构规范&quot;">​</a></h3><p>支付宝小程序的项目结构有明确的规范要求，确保项目的可维护性和一致性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>project-root/</span></span>
<span class="line"><span>├── app.js           # 小程序入口文件</span></span>
<span class="line"><span>├── app.json         # 全局配置</span></span>
<span class="line"><span>├── app.acss         # 全局样式</span></span>
<span class="line"><span>├── pages/           # 页面目录</span></span>
<span class="line"><span>│   ├── index/</span></span>
<span class="line"><span>│   │   ├── index.js</span></span>
<span class="line"><span>│   │   ├── index.axml</span></span>
<span class="line"><span>│   │   ├── index.acss</span></span>
<span class="line"><span>│   │   └── index.json</span></span>
<span class="line"><span>│   └── detail/</span></span>
<span class="line"><span>│       └── detail.js</span></span>
<span class="line"><span>├── components/      # 自定义组件</span></span>
<span class="line"><span>├── utils/           # 工具函数</span></span>
<span class="line"><span>├── images/          # 图片资源</span></span>
<span class="line"><span>└── mock/            # 模拟数据</span></span></code></pre></div><h3 id="数据绑定与事件处理" tabindex="-1">数据绑定与事件处理 <a class="header-anchor" href="#数据绑定与事件处理" aria-label="Permalink to &quot;数据绑定与事件处理&quot;">​</a></h3><p>支付宝小程序使用数据驱动视图的模式，通过数据绑定和事件处理实现用户交互。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// page.js - 页面逻辑</span></span>
<span class="line"><span style="color:#B392F0;">Page</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;Hello Alipay MiniProgram&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    userList: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    isLoading: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 页面加载</span></span>
<span class="line"><span style="color:#B392F0;">  onLoad</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">query</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取页面参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;页面参数:&#39;</span><span style="color:#E1E4E8;">, query)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 加载数据</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadData</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({ isLoading: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> res</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">asyncRequest</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        userList: res.data,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isLoading: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({ isLoading: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">      my.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;加载失败&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 异步请求封装</span></span>
<span class="line"><span style="color:#B392F0;">  asyncRequest</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      my.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">&#39;https://api.example.com/users&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        success: resolve,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fail: reject,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 按钮点击事件</span></span>
<span class="line"><span style="color:#B392F0;">  onButtonTap</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      count: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.data.count </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    my.</span><span style="color:#B392F0;">vibrate</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">      success</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;震动反馈&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 下拉刷新</span></span>
<span class="line"><span style="color:#B392F0;">  onPullDownRefresh</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadData</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      my.</span><span style="color:#B392F0;">stopPullDownRefresh</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- page.axml - 页面结构 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">&gt;{{message}}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  &lt;!-- 条件渲染 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#B392F0;"> a:if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{isLoading}}&quot;</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;loading&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;加载中...&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  &lt;!-- 列表渲染 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#B392F0;"> a:else</span><span style="color:#B392F0;"> a:for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{userList}}&quot;</span><span style="color:#B392F0;"> key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;user-item&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">image</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;avatar&quot;</span><span style="color:#B392F0;"> src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{item.avatar}}&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">image</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;user-info&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">&gt;{{item.name}}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;phone&quot;</span><span style="color:#E1E4E8;">&gt;{{item.phone}}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  &lt;!-- 事件绑定 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn&quot;</span><span style="color:#B392F0;"> onTap</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onButtonTap&quot;</span><span style="color:#E1E4E8;">&gt;点击计数: {{count}}&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>支付宝小程序通过其<strong>强大的商业能力</strong>、<strong>深度的阿里生态整合</strong>和<strong>优异的技术性能</strong>，为开发者提供了一个独特的移动应用开发平台。无论是大型企业还是中小商户，都能通过支付宝小程序快速构建高质量的商业服务应用，在移动互联网时代获得更大的发展机会。</p>`,74)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
