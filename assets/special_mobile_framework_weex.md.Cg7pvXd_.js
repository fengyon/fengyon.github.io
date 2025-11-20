import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Weex","description":"","frontmatter":{},"headers":[{"level":2,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[]},{"level":2,"title":"技术架构特点","slug":"技术架构特点","link":"#技术架构特点","children":[{"level":3,"title":"分层架构","slug":"分层架构","link":"#分层架构","children":[]},{"level":3,"title":"跨平台特性","slug":"跨平台特性","link":"#跨平台特性","children":[]},{"level":3,"title":"原生渲染性能","slug":"原生渲染性能","link":"#原生渲染性能","children":[]},{"level":3,"title":"响应式界面","slug":"响应式界面","link":"#响应式界面","children":[]}]},{"level":2,"title":"开发环境与工具","slug":"开发环境与工具","link":"#开发环境与工具","children":[{"level":3,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]},{"level":3,"title":"开发工具","slug":"开发工具","link":"#开发工具","children":[]}]},{"level":2,"title":"常用 API 及代码示例","slug":"常用-api-及代码示例","link":"#常用-api-及代码示例","children":[{"level":3,"title":"模块调用规范","slug":"模块调用规范","link":"#模块调用规范","children":[]},{"level":3,"title":"界面交互 API","slug":"界面交互-api","link":"#界面交互-api","children":[]},{"level":3,"title":"导航 API","slug":"导航-api","link":"#导航-api","children":[]},{"level":3,"title":"数据存储 API","slug":"数据存储-api","link":"#数据存储-api","children":[]},{"level":3,"title":"网络请求 API","slug":"网络请求-api","link":"#网络请求-api","children":[]}]},{"level":2,"title":"开发实践与模式","slug":"开发实践与模式","link":"#开发实践与模式","children":[{"level":3,"title":"组件开发示例","slug":"组件开发示例","link":"#组件开发示例","children":[]},{"level":3,"title":"事件处理","slug":"事件处理","link":"#事件处理","children":[]},{"level":3,"title":"条件渲染和列表渲染","slug":"条件渲染和列表渲染","link":"#条件渲染和列表渲染","children":[]}]},{"level":2,"title":"优势与局限","slug":"优势与局限","link":"#优势与局限","children":[{"level":3,"title":"主要优势","slug":"主要优势","link":"#主要优势","children":[]},{"level":3,"title":"当前局限","slug":"当前局限","link":"#当前局限","children":[]}]}],"relativePath":"special/mobile/framework/weex.md","filePath":"special/mobile/framework/weex.md"}'),o={name:"special/mobile/framework/weex.md"};function e(t,s,c,E,r,i){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/mobile/framework/weex.md for this page in Markdown format</div><h1 id="weex" tabindex="-1">Weex <a class="header-anchor" href="#weex" aria-label="Permalink to &quot;Weex&quot;">​</a></h1><p>Weex 是阿里巴巴开源的一款跨平台移动开发框架，允许开发者使用 <strong>Web 技术</strong> (如 JavaScript、Vue.js 等) 来构建高性能的 <strong>Native 级别</strong>移动应用程序。它解决了移动开发中频繁发版和多端研发的痛点，支持一次编写，在 <strong>iOS</strong>、<strong>Android</strong> 和 <strong>Web</strong> 等多端部署。</p><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h2><p>Weex 的核心思想是通过 Web 技术来描述界面，并在运行时将其转换为原生组件渲染，从而实现跨平台的一致性体验。</p><ul><li><strong>组件化开发</strong>：Weex 采用基于组件的开发模式，每个组件由 <code>&lt;template&gt;</code>、<code>&lt;style&gt;</code> 和 <code>&lt;script&gt;</code> 构成。</li><li><strong>跨平台渲染</strong>：同一套代码，通过不同的 SDK 可以分别渲染为 Native 界面或 Web 界面。</li><li><strong>数据驱动视图</strong>：采用响应式的数据绑定，当数据发生变化时，视图会自动更新。</li></ul><p>架构示意图： [Weex 文件 (。we/.vue)] | | 转换 (Transformer) | [JS Bundle] 部署到服务器 | | 下载 | [Weex SDK (iOS/Android)] &lt;- JS Bridge -&gt; [JavaScript 引擎] | | [Native 组件渲染]</p><h2 id="技术架构特点" tabindex="-1">技术架构特点 <a class="header-anchor" href="#技术架构特点" aria-label="Permalink to &quot;技术架构特点&quot;">​</a></h2><p>Weex 的架构设计注重轻量、可扩展和高性能，其核心由三部分组成：</p><h3 id="分层架构" tabindex="-1">分层架构 <a class="header-anchor" href="#分层架构" aria-label="Permalink to &quot;分层架构&quot;">​</a></h3><p>Weex 的架构清晰分层，各司其职：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────┐</span></span>
<span class="line"><span>│           前端框架层 (Vue.js/Rax)         │</span></span>
<span class="line"><span>├─────────────────────────────────────────┤</span></span>
<span class="line"><span>│         JavaScript 运行时环境            │</span></span>
<span class="line"><span>├─────────────────────────────────────────┤</span></span>
<span class="line"><span>│                JS Bridge                │</span></span>
<span class="line"><span>├─────────────────────────────────────────┤</span></span>
<span class="line"><span>│          Weex SDK (Native)              │</span></span>
<span class="line"><span>├─────────────────────────────────────────┤</span></span>
<span class="line"><span>│           原生组件渲染引擎               │</span></span>
<span class="line"><span>└─────────────────────────────────────────┘</span></span></code></pre></div><h3 id="跨平台特性" tabindex="-1">跨平台特性 <a class="header-anchor" href="#跨平台特性" aria-label="Permalink to &quot;跨平台特性&quot;">​</a></h3><p>Weex 实现了真正的跨平台开发，开发者只需编写一次代码，即可在多端运行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>         ┌────────────┐</span></span>
<span class="line"><span>         │  Weex 代码  │</span></span>
<span class="line"><span>         └────────────┘</span></span>
<span class="line"><span>            ↓    ↓</span></span>
<span class="line"><span>    ┌────────    ────────┐</span></span>
<span class="line"><span>    ↓                    ↓</span></span>
<span class="line"><span>┌───────┐            ┌───────┐</span></span>
<span class="line"><span>│ iOS   │            │ Android│</span></span>
<span class="line"><span>└───────┘            └───────┘</span></span></code></pre></div><h3 id="原生渲染性能" tabindex="-1">原生渲染性能 <a class="header-anchor" href="#原生渲染性能" aria-label="Permalink to &quot;原生渲染性能&quot;">​</a></h3><p>与 Hybrid 应用不同，Weex 不是通过 WebView 渲染，而是将组件映射为真正的原生组件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Weex 组件 -&gt; 原生组件映射</span></span>
<span class="line"><span>&lt;container&gt; -&gt; UIView/ViewGroup</span></span>
<span class="line"><span>&lt;text&gt;      -&gt; UILabel/TextView</span></span>
<span class="line"><span>&lt;image&gt;     -&gt; UIImageView/ImageView</span></span></code></pre></div><h3 id="响应式界面" tabindex="-1">响应式界面 <a class="header-anchor" href="#响应式界面" aria-label="Permalink to &quot;响应式界面&quot;">​</a></h3><p>Weex 支持数据绑定，当数据发生变化时，视图会自动更新。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据模型: { message: &quot;Hello&quot; }</span></span>
<span class="line"><span>模板:     &lt;text&gt;{{message}}&lt;/text&gt;</span></span>
<span class="line"><span>渲染:     &lt;text&gt;Hello&lt;/text&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 message 变为 &quot;Hi&quot;:</span></span>
<span class="line"><span>数据模型: { message: &quot;Hi&quot; }</span></span>
<span class="line"><span>视图自动更新: &lt;text&gt;Hi&lt;/text&gt;</span></span></code></pre></div><h2 id="开发环境与工具" tabindex="-1">开发环境与工具 <a class="header-anchor" href="#开发环境与工具" aria-label="Permalink to &quot;开发环境与工具&quot;">​</a></h2><h3 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h3><p>Weex 提供了完整的工具链，帮助开发者快速创建项目：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 安装 Weex CLI</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> install</span><span style="color:#79B8FF;"> -g</span><span style="color:#9ECBFF;"> @weex-cli/core</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建新项目</span></span>
<span class="line"><span style="color:#B392F0;">weex</span><span style="color:#9ECBFF;"> create</span><span style="color:#9ECBFF;"> my-project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入项目并运行</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#9ECBFF;"> my-project</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> start</span></span></code></pre></div><h3 id="开发工具" tabindex="-1">开发工具 <a class="header-anchor" href="#开发工具" aria-label="Permalink to &quot;开发工具&quot;">​</a></h3><ul><li><strong>Weex Playground</strong>：官方调试工具，支持实时预览和热更新。</li><li><strong>Weex DevTools</strong>：支持在 Web 端调试 App 端的 JavaScript 代码。</li><li><strong>dotWe</strong>：在线运行环境，可以快速体验 Weex 的功能。</li></ul><h2 id="常用-api-及代码示例" tabindex="-1">常用 API 及代码示例 <a class="header-anchor" href="#常用-api-及代码示例" aria-label="Permalink to &quot;常用 API 及代码示例&quot;">​</a></h2><p>Weex 提供了丰富的内置模块，用于访问设备功能和原生组件。以下是一些常用 API 的使用方法。</p><h3 id="模块调用规范" tabindex="-1">模块调用规范 <a class="header-anchor" href="#模块调用规范" aria-label="Permalink to &quot;模块调用规范&quot;">​</a></h3><p>在 Weex 中调用 API 需要先声明模块：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 声明需要调用的模块</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> moduleName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> weex.</span><span style="color:#B392F0;">requireModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moduleName&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 调用模块方法</span></span>
<span class="line"><span style="color:#E1E4E8;">moduleName.</span><span style="color:#B392F0;">methodName</span><span style="color:#E1E4E8;">(options, callback)</span></span></code></pre></div><h3 id="界面交互-api" tabindex="-1">界面交互 API <a class="header-anchor" href="#界面交互-api" aria-label="Permalink to &quot;界面交互 API&quot;">​</a></h3><h4 id="modal-模块" tabindex="-1">modal 模块 <a class="header-anchor" href="#modal-模块" aria-label="Permalink to &quot;modal 模块&quot;">​</a></h4><p>modal 模块提供了消息框功能，包括 toast、alert、confirm 和 prompt。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 获取 modal 模块</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> modal </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> weex.</span><span style="color:#B392F0;">requireModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;modal&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1. toast 提示</span></span>
<span class="line"><span style="color:#E1E4E8;">modal.</span><span style="color:#B392F0;">toast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  message: </span><span style="color:#9ECBFF;">&#39;这是一个 toast 提示&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  duration: </span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. alert 警告框</span></span>
<span class="line"><span style="color:#E1E4E8;">modal.</span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;这是一个警告框&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    okTitle: </span><span style="color:#9ECBFF;">&#39;确定&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;alert 回调&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. confirm 确认框</span></span>
<span class="line"><span style="color:#E1E4E8;">modal.</span><span style="color:#B392F0;">confirm</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;您确定要执行此操作吗？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    okTitle: </span><span style="color:#9ECBFF;">&#39;确定&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    cancelTitle: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;确认框结果:&#39;</span><span style="color:#E1E4E8;">, result)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 4. prompt 输入框</span></span>
<span class="line"><span style="color:#E1E4E8;">modal.</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;请输入内容：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    okTitle: </span><span style="color:#9ECBFF;">&#39;确定&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    cancelTitle: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;输入结果:&#39;</span><span style="color:#E1E4E8;">, result.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><h4 id="dom-模块" tabindex="-1">dom 模块 <a class="header-anchor" href="#dom-模块" aria-label="Permalink to &quot;dom 模块&quot;">​</a></h4><p>dom 模块用于操作组件节点，如滚动到指定位置或获取组件信息。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 获取 dom 模块</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> dom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> weex.</span><span style="color:#B392F0;">requireModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dom&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1. 滚动到指定元素</span></span>
<span class="line"><span style="color:#6A737D;">// 在 template 中给元素设置 ref</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;scroller&gt;</span></span>
<span class="line"><span style="color:#6A737D;">//   &lt;div ref=&quot;targetElement&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;/scroller&gt;</span></span>
<span class="line"><span style="color:#B392F0;">methods</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#B392F0;">  scrollToElement</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> el</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.$refs.targetElement;</span></span>
<span class="line"><span style="color:#E1E4E8;">    dom.</span><span style="color:#B392F0;">scrollToElement</span><span style="color:#E1E4E8;">(el, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      offset: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,      </span><span style="color:#6A737D;">// 偏移量</span></span>
<span class="line"><span style="color:#E1E4E8;">      animated: </span><span style="color:#79B8FF;">true</span><span style="color:#6A737D;">  // 是否使用动画</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 获取组件布局信息</span></span>
<span class="line"><span style="color:#E1E4E8;">dom.</span><span style="color:#B392F0;">getComponentRect</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$refs.targetElement, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (result.result) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;组件位置:&#39;</span><span style="color:#E1E4E8;">, result.size);</span></span>
<span class="line"><span style="color:#6A737D;">    // {</span></span>
<span class="line"><span style="color:#6A737D;">    //   bottom: 60,</span></span>
<span class="line"><span style="color:#6A737D;">    //   height: 15,</span></span>
<span class="line"><span style="color:#6A737D;">    //   left: 0,</span></span>
<span class="line"><span style="color:#6A737D;">    //   right: 353,</span></span>
<span class="line"><span style="color:#6A737D;">    //   top: 45,</span></span>
<span class="line"><span style="color:#6A737D;">    //   width: 353</span></span>
<span class="line"><span style="color:#6A737D;">    // }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 添加自定义字体</span></span>
<span class="line"><span style="color:#E1E4E8;">dom.</span><span style="color:#B392F0;">addRule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fontFace&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;fontFamily&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;iconfont&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;src&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;url(&#39;https://at.alicdn.com/t/font_1469606063_76593.ttf&#39;)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="导航-api" tabindex="-1">导航 API <a class="header-anchor" href="#导航-api" aria-label="Permalink to &quot;导航 API&quot;">​</a></h3><h4 id="navigator-模块" tabindex="-1">navigator 模块 <a class="header-anchor" href="#navigator-模块" aria-label="Permalink to &quot;navigator 模块&quot;">​</a></h4><p>navigator 模块用于页面跳转和导航。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 获取 navigator 模块</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> navigator </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> weex.</span><span style="color:#B392F0;">requireModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;navigator&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 跳转到新页面</span></span>
<span class="line"><span style="color:#E1E4E8;">navigator.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">&#39;dist/otherPage.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    animated: </span><span style="color:#9ECBFF;">&#39;true&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;跳转回调:&#39;</span><span style="color:#E1E4E8;">, event)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 返回上一页</span></span>
<span class="line"><span style="color:#E1E4E8;">navigator.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    animated: </span><span style="color:#9ECBFF;">&#39;true&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;返回回调:&#39;</span><span style="color:#E1E4E8;">, event)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><h3 id="数据存储-api" tabindex="-1">数据存储 API <a class="header-anchor" href="#数据存储-api" aria-label="Permalink to &quot;数据存储 API&quot;">​</a></h3><h4 id="storage-模块" tabindex="-1">storage 模块 <a class="header-anchor" href="#storage-模块" aria-label="Permalink to &quot;storage 模块&quot;">​</a></h4><p>storage 模块提供了持久化数据存储功能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 获取 storage 模块</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> storage </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> weex.</span><span style="color:#B392F0;">requireModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;storage&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置数据</span></span>
<span class="line"><span style="color:#E1E4E8;">storage.</span><span style="color:#B392F0;">setItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;key&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (result.result </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;success&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;保存成功&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取数据</span></span>
<span class="line"><span style="color:#E1E4E8;">storage.</span><span style="color:#B392F0;">getItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;key&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (result.result </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;success&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取的值:&#39;</span><span style="color:#E1E4E8;">, result.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除数据</span></span>
<span class="line"><span style="color:#E1E4E8;">storage.</span><span style="color:#B392F0;">removeItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;key&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (result.result </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;success&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除成功&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="网络请求-api" tabindex="-1">网络请求 API <a class="header-anchor" href="#网络请求-api" aria-label="Permalink to &quot;网络请求 API&quot;">​</a></h3><h4 id="stream-模块" tabindex="-1">stream 模块 <a class="header-anchor" href="#stream-模块" aria-label="Permalink to &quot;stream 模块&quot;">​</a></h4><p>stream 模块用于发起网络请求。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 获取 stream 模块</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> stream </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> weex.</span><span style="color:#B392F0;">requireModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;stream&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// GET 请求</span></span>
<span class="line"><span style="color:#E1E4E8;">stream.</span><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">&#39;https://api.example.com/data&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (response.status </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 200</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请求成功:&#39;</span><span style="color:#E1E4E8;">, response.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请求失败:&#39;</span><span style="color:#E1E4E8;">, response)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// POST 请求</span></span>
<span class="line"><span style="color:#E1E4E8;">stream.</span><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">&#39;https://api.example.com/data&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    body: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      key: </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;POST 响应:&#39;</span><span style="color:#E1E4E8;">, response)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><h2 id="开发实践与模式" tabindex="-1">开发实践与模式 <a class="header-anchor" href="#开发实践与模式" aria-label="Permalink to &quot;开发实践与模式&quot;">​</a></h2><h3 id="组件开发示例" tabindex="-1">组件开发示例 <a class="header-anchor" href="#组件开发示例" aria-label="Permalink to &quot;组件开发示例&quot;">​</a></h3><p>Weex 组件采用类似 Web 组件的结构，由 <code>&lt;template&gt;</code>、<code>&lt;style&gt;</code> 和 <code>&lt;script&gt;</code> 组成。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">&gt;{{title}}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">image</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image&quot;</span><span style="color:#B392F0;"> :src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;imageUrl&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">image</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;button&quot;</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleClick&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;button-text&quot;</span><span style="color:#E1E4E8;">&gt;点击我&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  .container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    flex-direction</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">column</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    align-items</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">40</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  .title</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">48</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#333333</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    margin-bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">40</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  .image</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    margin-bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">40</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  .button</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> 40</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#007aff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  .button-text</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ffffff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">32</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">  export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;欢迎使用 Weex&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      imageUrl: </span><span style="color:#9ECBFF;">&#39;https://example.com/image.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    methods: {</span></span>
<span class="line"><span style="color:#B392F0;">      handleClick</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> modal</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> weex.</span><span style="color:#B392F0;">requireModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;modal&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        modal.</span><span style="color:#B392F0;">toast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          message: </span><span style="color:#9ECBFF;">&#39;按钮被点击了!&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          duration: </span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    created</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">      // 组件创建时的逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;组件已创建&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="事件处理" tabindex="-1">事件处理 <a class="header-anchor" href="#事件处理" aria-label="Permalink to &quot;事件处理&quot;">​</a></h3><p>Weex 支持丰富的事件处理机制：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 点击事件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleClick&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;点击我&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 长按事件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> @longpress</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleLongPress&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;长按我&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 输入事件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#B392F0;"> @input</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleInput&quot;</span><span style="color:#B392F0;"> @change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleChange&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 滚动事件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">scroller</span><span style="color:#B392F0;"> @scroll</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleScroll&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">      &lt;!-- 内容 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">scroller</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">  export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    methods: {</span></span>
<span class="line"><span style="color:#B392F0;">      handleClick</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;点击事件:&#39;</span><span style="color:#E1E4E8;">, event)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#B392F0;">      handleLongPress</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;长按事件:&#39;</span><span style="color:#E1E4E8;">, event)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#B392F0;">      handleInput</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;输入值:&#39;</span><span style="color:#E1E4E8;">, event.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#B392F0;">      handleChange</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;值改变:&#39;</span><span style="color:#E1E4E8;">, event.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#B392F0;">      handleScroll</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;滚动位置:&#39;</span><span style="color:#E1E4E8;">, event.contentOffset)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="条件渲染和列表渲染" tabindex="-1">条件渲染和列表渲染 <a class="header-anchor" href="#条件渲染和列表渲染" aria-label="Permalink to &quot;条件渲染和列表渲染&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 条件渲染 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#B392F0;"> v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;showText&quot;</span><span style="color:#E1E4E8;">&gt;显示文本&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#B392F0;"> v-else</span><span style="color:#E1E4E8;">&gt;其他文本&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 列表渲染 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">list</span><span style="color:#B392F0;"> :data-items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;items&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">cell</span><span style="color:#B392F0;"> v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(item, index) in items&quot;</span><span style="color:#B392F0;"> :key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;index&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#FDAEB7;font-style:italic;">image</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item-image&quot;</span><span style="color:#B392F0;"> :src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item.imageUrl&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">image</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item-title&quot;</span><span style="color:#E1E4E8;">&gt;{{item.title}}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item-price&quot;</span><span style="color:#E1E4E8;">&gt;￥{{item.price}}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#FDAEB7;font-style:italic;">cell</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">  export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      showText: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          imageUrl: </span><span style="color:#9ECBFF;">&#39;https://example.com/1.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;商品1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          price: </span><span style="color:#9ECBFF;">&#39;99.00&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          imageUrl: </span><span style="color:#9ECBFF;">&#39;https://example.com/2.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;商品2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          price: </span><span style="color:#9ECBFF;">&#39;129.00&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="优势与局限" tabindex="-1">优势与局限 <a class="header-anchor" href="#优势与局限" aria-label="Permalink to &quot;优势与局限&quot;">​</a></h2><h3 id="主要优势" tabindex="-1">主要优势 <a class="header-anchor" href="#主要优势" aria-label="Permalink to &quot;主要优势&quot;">​</a></h3><ul><li><strong>高性能体验</strong>：通过原生组件渲染，避免了 WebView 的性能瓶颈，实现流畅的用户体验。</li><li><strong>开发效率高</strong>：使用熟悉的 Web 技术栈，降低学习成本，支持热加载等调试功能。</li><li><strong>跨平台一致性</strong>：不同平台的组件与模块保持接口统一，支持动态扩展。</li><li><strong>轻量级框架</strong>：框架体积小巧，网络传输代价低，初始化成本低。</li></ul><h3 id="当前局限" tabindex="-1">当前局限 <a class="header-anchor" href="#当前局限" aria-label="Permalink to &quot;当前局限&quot;">​</a></h3><ul><li><strong>社区生态相对较小</strong>：相比 React Native 和 Flutter，Weex 的社区和第三方库较少。</li><li><strong>功能限制</strong>：某些复杂的原生功能可能需要自定义模块开发。</li><li><strong>调试复杂度</strong>：JavaScript 与原生代码交互调试相对复杂。</li></ul>`,65)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
