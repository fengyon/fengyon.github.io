import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"日志系统","description":"","frontmatter":{},"headers":[{"level":2,"title":"Node.js 日志系统概述","slug":"node-js-日志系统概述","link":"#node-js-日志系统概述","children":[]},{"level":2,"title":"日志基础概念","slug":"日志基础概念","link":"#日志基础概念","children":[{"level":3,"title":"日志级别体系","slug":"日志级别体系","link":"#日志级别体系","children":[]},{"level":3,"title":"结构化日志优势","slug":"结构化日志优势","link":"#结构化日志优势","children":[]}]},{"level":2,"title":"常用日志库及其应用","slug":"常用日志库及其应用","link":"#常用日志库及其应用","children":[{"level":3,"title":"Winston - 功能全面的通用日志库","slug":"winston-功能全面的通用日志库","link":"#winston-功能全面的通用日志库","children":[]},{"level":3,"title":"Pino - 高性能日志方案","slug":"pino-高性能日志方案","link":"#pino-高性能日志方案","children":[]},{"level":3,"title":"Log4js - 企业级配置管理","slug":"log4js-企业级配置管理","link":"#log4js-企业级配置管理","children":[]},{"level":3,"title":"Bunyan - 结构化日志标杆","slug":"bunyan-结构化日志标杆","link":"#bunyan-结构化日志标杆","children":[]}]},{"level":2,"title":"命令行工具专用日志方案","slug":"命令行工具专用日志方案","link":"#命令行工具专用日志方案","children":[{"level":3,"title":"控制台输出优化","slug":"控制台输出优化","link":"#控制台输出优化","children":[]},{"level":3,"title":"异步日志记录与性能","slug":"异步日志记录与性能","link":"#异步日志记录与性能","children":[]}]},{"level":2,"title":"日志管理与分析","slug":"日志管理与分析","link":"#日志管理与分析","children":[{"level":3,"title":"日志轮转策略","slug":"日志轮转策略","link":"#日志轮转策略","children":[]},{"level":3,"title":"集中式日志管理","slug":"集中式日志管理","link":"#集中式日志管理","children":[]}]},{"level":2,"title":"最佳实践与性能优化","slug":"最佳实践与性能优化","link":"#最佳实践与性能优化","children":[{"level":3,"title":"日志级别管理策略","slug":"日志级别管理策略","link":"#日志级别管理策略","children":[]},{"level":3,"title":"上下文跟踪与关联","slug":"上下文跟踪与关联","link":"#上下文跟踪与关联","children":[]}]}],"relativePath":"special/cli/log.md","filePath":"special/cli/log.md"}'),o={name:"special/cli/log.md"};function e(E,s,c,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/cli/log.md for this page in Markdown format</div><h1 id="日志系统" tabindex="-1">日志系统 <a class="header-anchor" href="#日志系统" aria-label="Permalink to &quot;日志系统&quot;">​</a></h1><h2 id="node-js-日志系统概述" tabindex="-1">Node.js 日志系统概述 <a class="header-anchor" href="#node-js-日志系统概述" aria-label="Permalink to &quot;Node.js 日志系统概述&quot;">​</a></h2><p>在 Node.js 应用开发中，日志系统是确保应用可观测性的核心组件。它记录了应用程序运行时的各种事件、状态和错误信息，为开发者和运维人员提供了排查问题、监控性能和理解系统行为的关键数据。</p><p>一个完整的日志系统处理流程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>应用程序 → 日志记录 → 格式处理 → 输出传输 → 存储分析</span></span>
<span class="line"><span>    ↓           ↓           ↓          ↓         ↓</span></span>
<span class="line"><span>业务逻辑  →  级别过滤  →  结构化  →  控制台   →  日志文件</span></span>
<span class="line"><span>              ↓           ↓          ↓         ↓</span></span>
<span class="line"><span>           debug/info   JSON格式    终端     轮转归档</span></span>
<span class="line"><span>           /warn/error             显示     集中存储</span></span></code></pre></div><h2 id="日志基础概念" tabindex="-1">日志基础概念 <a class="header-anchor" href="#日志基础概念" aria-label="Permalink to &quot;日志基础概念&quot;">​</a></h2><h3 id="日志级别体系" tabindex="-1">日志级别体系 <a class="header-anchor" href="#日志级别体系" aria-label="Permalink to &quot;日志级别体系&quot;">​</a></h3><p>日志级别定义了日志信息的重要性层级，帮助开发者过滤和分类日志信息：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 日志级别从详细到严重：</span></span>
<span class="line"><span style="color:#79B8FF;">TRACE</span><span style="color:#E1E4E8;"> → </span><span style="color:#79B8FF;">DEBUG</span><span style="color:#E1E4E8;"> → </span><span style="color:#79B8FF;">INFO</span><span style="color:#E1E4E8;"> → </span><span style="color:#79B8FF;">WARN</span><span style="color:#E1E4E8;"> → </span><span style="color:#79B8FF;">ERROR</span><span style="color:#E1E4E8;"> → </span><span style="color:#79B8FF;">FATAL</span></span>
<span class="line"><span style="color:#E1E4E8;">    ↓       ↓       ↓      ↓       ↓       ↓</span></span>
<span class="line"><span style="color:#E1E4E8;">  跟踪    调试     信息    警告    错误    致命</span></span></code></pre></div><h3 id="结构化日志优势" tabindex="-1">结构化日志优势 <a class="header-anchor" href="#结构化日志优势" aria-label="Permalink to &quot;结构化日志优势&quot;">​</a></h3><p>与传统字符串日志相比，结构化日志 (通常是 JSON 格式) 具有显著优势：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 非结构化日志（难以解析）</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;User john logged in from 192.168.1.1 at 2023-11-18T10:30:00Z&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 结构化日志（易于机器解析）</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;timestamp&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2023-11-18T10:30:00Z&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;level&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;INFO&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;message&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;User login successful&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;userId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;john&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;ip&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;192.168.1.1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;context&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;authentication&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="常用日志库及其应用" tabindex="-1">常用日志库及其应用 <a class="header-anchor" href="#常用日志库及其应用" aria-label="Permalink to &quot;常用日志库及其应用&quot;">​</a></h2><h3 id="winston-功能全面的通用日志库" tabindex="-1">Winston - 功能全面的通用日志库 <a class="header-anchor" href="#winston-功能全面的通用日志库" aria-label="Permalink to &quot;Winston - 功能全面的通用日志库&quot;">​</a></h3><p>Winston 是 Node.js 生态中最流行的日志库之一，以其灵活性和强大的传输配置著称。它支持多种输出目标和控制方式，适合大多数生产环境场景。</p><h4 id="基础配置与使用" tabindex="-1">基础配置与使用 <a class="header-anchor" href="#基础配置与使用" aria-label="Permalink to &quot;基础配置与使用&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// winston-basic.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> winston </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;winston&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建 Logger 实例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> logger</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> winston.</span><span style="color:#B392F0;">createLogger</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  level: process.env.</span><span style="color:#79B8FF;">LOG_LEVEL</span><span style="color:#F97583;"> ||</span><span style="color:#9ECBFF;"> &#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  format: winston.format.</span><span style="color:#B392F0;">combine</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    winston.format.</span><span style="color:#B392F0;">timestamp</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    winston.format.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  ),</span></span>
<span class="line"><span style="color:#E1E4E8;">  transports: [</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#E1E4E8;"> winston.transports.</span><span style="color:#B392F0;">Console</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#E1E4E8;"> winston.transports.</span><span style="color:#B392F0;">File</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;error.log&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      level: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#E1E4E8;"> winston.transports.</span><span style="color:#B392F0;">File</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;combined.log&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 记录不同级别日志</span></span>
<span class="line"><span style="color:#E1E4E8;">logger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Server started successfully&#39;</span><span style="color:#E1E4E8;">, { port: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">, pid: process.pid });</span></span>
<span class="line"><span style="color:#E1E4E8;">logger.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Database connection slow&#39;</span><span style="color:#E1E4E8;">, { queryTime: </span><span style="color:#9ECBFF;">&#39;2.5s&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">logger.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Failed to connect to Redis&#39;</span><span style="color:#E1E4E8;">, { error: </span><span style="color:#9ECBFF;">&#39;Connection timeout&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带元数据的结构化日志</span></span>
<span class="line"><span style="color:#E1E4E8;">logger.</span><span style="color:#B392F0;">debug</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;User action performed&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  userId: </span><span style="color:#9ECBFF;">&#39;user123&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  action: </span><span style="color:#9ECBFF;">&#39;profile_update&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  userAgent: </span><span style="color:#9ECBFF;">&#39;Mozilla/5.0...&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h4 id="高级格式定制" tabindex="-1">高级格式定制 <a class="header-anchor" href="#高级格式定制" aria-label="Permalink to &quot;高级格式定制&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// winston-advanced.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> winston </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;winston&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">combine</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">timestamp</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">label</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">printf</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">colorize</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">errors</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> winston.format;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自定义日志格式</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> customFormat</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> printf</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">level</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">label</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">timestamp</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stack</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">metadata</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> log </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">timestamp</span><span style="color:#9ECBFF;">} [\${</span><span style="color:#E1E4E8;">label</span><span style="color:#9ECBFF;">}] \${</span><span style="color:#E1E4E8;">level</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (stack) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    log </span><span style="color:#F97583;">+=</span><span style="color:#9ECBFF;"> \`</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\${</span><span style="color:#E1E4E8;">stack</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 错误堆栈</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 添加元数据</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> metaKeys</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(metadata);</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (metaKeys.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    log </span><span style="color:#F97583;">+=</span><span style="color:#9ECBFF;"> \`</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\${</span><span style="color:#79B8FF;">JSON</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">metadata</span><span style="color:#9ECBFF;">, </span><span style="color:#79B8FF;">null</span><span style="color:#9ECBFF;">, </span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> log;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> logger</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> winston.</span><span style="color:#B392F0;">createLogger</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  level: </span><span style="color:#9ECBFF;">&#39;debug&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  format: </span><span style="color:#B392F0;">combine</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">    errors</span><span style="color:#E1E4E8;">({ stack: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }), </span><span style="color:#6A737D;">// 捕获错误堆栈</span></span>
<span class="line"><span style="color:#B392F0;">    label</span><span style="color:#E1E4E8;">({ label: </span><span style="color:#9ECBFF;">&#39;AUTH-SERVICE&#39;</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#B392F0;">    timestamp</span><span style="color:#E1E4E8;">({ format: </span><span style="color:#9ECBFF;">&#39;YYYY-MM-DD HH:mm:ss&#39;</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#B392F0;">    colorize</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    customFormat</span></span>
<span class="line"><span style="color:#E1E4E8;">  ),</span></span>
<span class="line"><span style="color:#E1E4E8;">  transports: [</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#E1E4E8;"> winston.transports.</span><span style="color:#B392F0;">Console</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      handleExceptions: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      handleRejections: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  logger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Authentication request&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    username: </span><span style="color:#9ECBFF;">&#39;alice&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    endpoint: </span><span style="color:#9ECBFF;">&#39;/api/login&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourceIp: </span><span style="color:#9ECBFF;">&#39;192.168.1.100&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 模拟错误</span></span>
<span class="line"><span style="color:#F97583;">  throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Invalid credentials&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  logger.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Authentication failed&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    error: error.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">    stack: error.stack,</span></span>
<span class="line"><span style="color:#E1E4E8;">    userId: </span><span style="color:#9ECBFF;">&#39;alice&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="pino-高性能日志方案" tabindex="-1">Pino - 高性能日志方案 <a class="header-anchor" href="#pino-高性能日志方案" aria-label="Permalink to &quot;Pino - 高性能日志方案&quot;">​</a></h3><p>Pino 专为高性能场景设计，比传统日志库快 3 倍以上，特别适合高吞吐量的 CLI 工具和微服务架构。</p><h4 id="基础使用方法" tabindex="-1">基础使用方法 <a class="header-anchor" href="#基础使用方法" aria-label="Permalink to &quot;基础使用方法&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// pino-basic.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pino </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;pino&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 基础配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> logger</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> pino</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  level: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  timestamp</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;"> \`,&quot;time&quot;:&quot;\${</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#9ECBFF;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}&quot;\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  formatters: {</span></span>
<span class="line"><span style="color:#B392F0;">    level</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">label</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ level: label })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 结构化日志记录</span></span>
<span class="line"><span style="color:#E1E4E8;">logger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">({ userId: </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;"> }, </span><span style="color:#9ECBFF;">&#39;User logged in&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">logger.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">({ err: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DB connection failed&#39;</span><span style="color:#E1E4E8;">), statusCode: </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;"> }, </span><span style="color:#9ECBFF;">&#39;Request failed&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 子日志器（上下文继承）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> childLogger</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> logger.</span><span style="color:#B392F0;">child</span><span style="color:#E1E4E8;">({ module: </span><span style="color:#9ECBFF;">&#39;user-service&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">childLogger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">({ userId: </span><span style="color:#79B8FF;">456</span><span style="color:#E1E4E8;"> }, </span><span style="color:#9ECBFF;">&#39;Processing user data&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h4 id="esm-打包与生产配置" tabindex="-1">ESM 打包与生产配置 <a class="header-anchor" href="#esm-打包与生产配置" aria-label="Permalink to &quot;ESM 打包与生产配置&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// pino-production.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pino </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;pino&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pinoPretty </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;pino-pretty&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 开发环境美化输出</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> developmentConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  level: </span><span style="color:#9ECBFF;">&#39;debug&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    target: </span><span style="color:#9ECBFF;">&#39;pino-pretty&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      colorize: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      translateTime: </span><span style="color:#9ECBFF;">&#39;SYS:standard&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ignore: </span><span style="color:#9ECBFF;">&#39;pid,hostname&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 生产环境JSON输出</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> productionConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  level: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  serializers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    err: pino.stdSerializers.err,</span></span>
<span class="line"><span style="color:#E1E4E8;">    req: pino.stdSerializers.req,</span></span>
<span class="line"><span style="color:#E1E4E8;">    res: pino.stdSerializers.res</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">  ?</span><span style="color:#E1E4E8;"> productionConfig </span></span>
<span class="line"><span style="color:#F97583;">  :</span><span style="color:#E1E4E8;"> developmentConfig;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> logger</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> pino</span><span style="color:#E1E4E8;">(config);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 性能关键路径的日志记录</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> processUserData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  logger.</span><span style="color:#B392F0;">debug</span><span style="color:#E1E4E8;">({ userData }, </span><span style="color:#9ECBFF;">&#39;Starting user data processing&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 业务逻辑...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> processingTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">  logger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">({ processingTime, userId: userData.id }, </span><span style="color:#9ECBFF;">&#39;User data processed&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> userData;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="log4js-企业级配置管理" tabindex="-1">Log4js - 企业级配置管理 <a class="header-anchor" href="#log4js-企业级配置管理" aria-label="Permalink to &quot;Log4js - 企业级配置管理&quot;">​</a></h3><p>Log4js 提供强大的配置能力和企业级特性，支持复杂的日志路由和管理策略。</p><h4 id="基础配置示例" tabindex="-1">基础配置示例 <a class="header-anchor" href="#基础配置示例" aria-label="Permalink to &quot;基础配置示例&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// log4js-basic.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> log4js </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;log4js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置文件驱动方式</span></span>
<span class="line"><span style="color:#E1E4E8;">log4js.</span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  appenders: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    stdout: { </span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;stdout&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      layout: { </span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;pattern&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        pattern: </span><span style="color:#9ECBFF;">&#39;%d [%p] %c - %m&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    file: { </span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;file&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;app.log&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      maxLogSize: </span><span style="color:#79B8FF;">10485760</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      backups: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    errors: { </span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;logLevelFilter&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      appender: </span><span style="color:#9ECBFF;">&#39;file&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      level: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  categories: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: { </span></span>
<span class="line"><span style="color:#E1E4E8;">      appenders: [</span><span style="color:#9ECBFF;">&#39;stdout&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;errors&#39;</span><span style="color:#E1E4E8;">], </span></span>
<span class="line"><span style="color:#E1E4E8;">      level: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> logger</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> log4js.</span><span style="color:#B392F0;">getLogger</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-app&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">logger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Application started&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">logger.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Critical system error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Disk full&#39;</span><span style="color:#E1E4E8;">));</span></span></code></pre></div><h4 id="高级文件管理" tabindex="-1">高级文件管理 <a class="header-anchor" href="#高级文件管理" aria-label="Permalink to &quot;高级文件管理&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// log4js-advanced.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> log4js </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;log4js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 生产环境日志轮转配置</span></span>
<span class="line"><span style="color:#E1E4E8;">log4js.</span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  appenders: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    fileAppender: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;dateFile&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;leixuewei.log&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      pattern: </span><span style="color:#9ECBFF;">&#39;.yyyyMMdd&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      daysToKeep: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      layout: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;pattern&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        pattern: </span><span style="color:#9ECBFF;">&#39;%d [%p] [%c] - %m%n&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    emergency: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;file&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;emergency.log&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      maxLogSize: </span><span style="color:#79B8FF;">10485760</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      compress: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  categories: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: { </span></span>
<span class="line"><span style="color:#E1E4E8;">      appenders: [</span><span style="color:#9ECBFF;">&#39;fileAppender&#39;</span><span style="color:#E1E4E8;">], </span></span>
<span class="line"><span style="color:#E1E4E8;">      level: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    critical: { </span></span>
<span class="line"><span style="color:#E1E4E8;">      appenders: [</span><span style="color:#9ECBFF;">&#39;emergency&#39;</span><span style="color:#E1E4E8;">], </span></span>
<span class="line"><span style="color:#E1E4E8;">      level: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 分类日志记录器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> systemLogger</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> log4js.</span><span style="color:#B392F0;">getLogger</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;system&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> securityLogger</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> log4js.</span><span style="color:#B392F0;">getLogger</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;security&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> criticalLogger</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> log4js.</span><span style="color:#B392F0;">getLogger</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;critical&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">systemLogger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;System components initialized&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">securityLogger.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Failed login attempt&#39;</span><span style="color:#E1E4E8;">, { ip: </span><span style="color:#9ECBFF;">&#39;192.168.1.200&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">criticalLogger.</span><span style="color:#B392F0;">fatal</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Database cluster failure&#39;</span><span style="color:#E1E4E8;">, { </span></span>
<span class="line"><span style="color:#E1E4E8;">  cluster: </span><span style="color:#9ECBFF;">&#39;primary&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  error: </span><span style="color:#9ECBFF;">&#39;Connection lost to all nodes&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="bunyan-结构化日志标杆" tabindex="-1">Bunyan - 结构化日志标杆 <a class="header-anchor" href="#bunyan-结构化日志标杆" aria-label="Permalink to &quot;Bunyan - 结构化日志标杆&quot;">​</a></h3><p>Bunyan 专注于生成机器可读的 JSON 日志，便于与日志分析系统集成。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// bunyan-demo.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> bunyan </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;bunyan&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建 Bunyan 日志实例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> logger</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> bunyan.</span><span style="color:#B392F0;">createLogger</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;my-api-service&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  level: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  streams: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      level: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stream: process.stdout</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      level: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;/var/log/my-api-error.log&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  serializers: bunyan.stdSerializers</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 请求上下文日志记录</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> handleRequest</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  logger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">    method: req.method,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: req.url,</span></span>
<span class="line"><span style="color:#E1E4E8;">    userAgent: req.headers[</span><span style="color:#9ECBFF;">&#39;user-agent&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    requestId: </span><span style="color:#B392F0;">generateRequestId</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#9ECBFF;">&#39;Incoming request&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 处理逻辑...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> responseTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">  logger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">    statusCode: res.statusCode,</span></span>
<span class="line"><span style="color:#E1E4E8;">    responseTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">    requestId: req.requestId</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#9ECBFF;">&#39;Request completed&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 错误处理中的详细日志</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> handleError</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  logger.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    err: error,</span></span>
<span class="line"><span style="color:#E1E4E8;">    stack: error.stack,</span></span>
<span class="line"><span style="color:#E1E4E8;">    context: context,</span></span>
<span class="line"><span style="color:#E1E4E8;">    timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#9ECBFF;">&#39;Unhandled exception occurred&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="命令行工具专用日志方案" tabindex="-1">命令行工具专用日志方案 <a class="header-anchor" href="#命令行工具专用日志方案" aria-label="Permalink to &quot;命令行工具专用日志方案&quot;">​</a></h2><h3 id="控制台输出优化" tabindex="-1">控制台输出优化 <a class="header-anchor" href="#控制台输出优化" aria-label="Permalink to &quot;控制台输出优化&quot;">​</a></h3><p>命令行工具对控制台输出有特殊要求，需要平衡可读性和性能：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cli-logger.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> winston </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;winston&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CLILogger</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      level</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      enableColors</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      verbose</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.logger </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> winston.</span><span style="color:#B392F0;">createLogger</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      level: verbose </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;debug&#39;</span><span style="color:#F97583;"> :</span><span style="color:#E1E4E8;"> level,</span></span>
<span class="line"><span style="color:#E1E4E8;">      format: winston.format.</span><span style="color:#B392F0;">combine</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        winston.format.</span><span style="color:#B392F0;">timestamp</span><span style="color:#E1E4E8;">({ format: </span><span style="color:#9ECBFF;">&#39;HH:mm:ss&#39;</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        winston.format.</span><span style="color:#B392F0;">errors</span><span style="color:#E1E4E8;">({ stack: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        enableColors </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          winston.format.</span><span style="color:#B392F0;">colorize</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          winston.format.</span><span style="color:#B392F0;">uncolorize</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        winston.format.</span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">level</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">timestamp</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stack</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (stack) {</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">timestamp</span><span style="color:#9ECBFF;">} \${</span><span style="color:#E1E4E8;">level</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\${</span><span style="color:#E1E4E8;">stack</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">timestamp</span><span style="color:#9ECBFF;">} \${</span><span style="color:#E1E4E8;">level</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      ),</span></span>
<span class="line"><span style="color:#E1E4E8;">      transports: [</span></span>
<span class="line"><span style="color:#F97583;">        new</span><span style="color:#E1E4E8;"> winston.transports.</span><span style="color:#B392F0;">Console</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          silent: process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;test&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 进度指示器</span></span>
<span class="line"><span style="color:#B392F0;">  progress</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">task</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">current</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">total</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> percentage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">((current </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> total) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.logger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">task</span><span style="color:#9ECBFF;">}... \${</span><span style="color:#E1E4E8;">percentage</span><span style="color:#9ECBFF;">}% (\${</span><span style="color:#E1E4E8;">current</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#E1E4E8;">total</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 成功状态</span></span>
<span class="line"><span style="color:#B392F0;">  success</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.logger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 警告信息</span></span>
<span class="line"><span style="color:#B392F0;">  warning</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.logger.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`⚠️ \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 错误信息</span></span>
<span class="line"><span style="color:#B392F0;">  error</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">error</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.logger.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`❌ \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, { error });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.logger.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`❌ \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 调试信息（仅在详细模式输出）</span></span>
<span class="line"><span style="color:#B392F0;">  debug</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">metadata</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.logger.</span><span style="color:#B392F0;">debug</span><span style="color:#E1E4E8;">(message, metadata);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> logger</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CLILogger</span><span style="color:#E1E4E8;">({ verbose: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> buildProject</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  logger.</span><span style="color:#B392F0;">progress</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Compiling source&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">  // 编译逻辑...</span></span>
<span class="line"><span style="color:#E1E4E8;">  logger.</span><span style="color:#B392F0;">progress</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Compiling source&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  logger.</span><span style="color:#B392F0;">debug</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Compiler configuration&#39;</span><span style="color:#E1E4E8;">, { config });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 构建逻辑...</span></span>
<span class="line"><span style="color:#E1E4E8;">    logger.</span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Build completed successfully&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    logger.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Build failed&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="异步日志记录与性能" tabindex="-1">异步日志记录与性能 <a class="header-anchor" href="#异步日志记录与性能" aria-label="Permalink to &quot;异步日志记录与性能&quot;">​</a></h3><p>避免日志 I/O 阻塞事件循环对于 CLI 工具性能至关重要：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// async-logger.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createWriteStream } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Worker, isMainThread, parentPort, workerData } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:worker_threads&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 主进程日志管理器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> AsyncLogger</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">logPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (isMainThread) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.worker </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Worker</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> URL</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url), {</span></span>
<span class="line"><span style="color:#E1E4E8;">        workerData: { logPath }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  log</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">level</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">metadata</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (isMainThread </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.worker) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.worker.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        level,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message,</span></span>
<span class="line"><span style="color:#E1E4E8;">        metadata,</span></span>
<span class="line"><span style="color:#E1E4E8;">        timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 同步回退</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[\${</span><span style="color:#E1E4E8;">level</span><span style="color:#9ECBFF;">}] \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, metadata);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  info</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">metadata</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">, message, metadata);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  error</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">metadata</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, message, metadata);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Worker 线程处理实际的日志写入</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isMainThread) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">logPath</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> workerData;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> stream</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createWriteStream</span><span style="color:#E1E4E8;">(logPath, { flags: </span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  parentPort.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">logEntry</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> logLine</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(logEntry) </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 异步写入，不阻塞主线程</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (stream.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">(logLine) </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 处理背压</span></span>
<span class="line"><span style="color:#E1E4E8;">      stream.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;drain&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Log stream drained, continuing...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 优雅关闭</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;beforeExit&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    stream.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> AsyncLogger;</span></span></code></pre></div><h2 id="日志管理与分析" tabindex="-1">日志管理与分析 <a class="header-anchor" href="#日志管理与分析" aria-label="Permalink to &quot;日志管理与分析&quot;">​</a></h2><h3 id="日志轮转策略" tabindex="-1">日志轮转策略 <a class="header-anchor" href="#日志轮转策略" aria-label="Permalink to &quot;日志轮转策略&quot;">​</a></h3><p>防止日志文件无限增长，确保磁盘空间合理利用：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// log-rotation.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> winston </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;winston&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;winston-daily-rotate-file&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自动轮转配置</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#B392F0;"> createRotatingLogger</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    name</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;application&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    level</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    maxSize</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;20m&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    maxFiles</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;14d&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> winston.</span><span style="color:#B392F0;">createLogger</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    level,</span></span>
<span class="line"><span style="color:#E1E4E8;">    format: winston.format.</span><span style="color:#B392F0;">combine</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      winston.format.</span><span style="color:#B392F0;">timestamp</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      winston.format.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    transports: [</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#E1E4E8;"> winston.transports.</span><span style="color:#B392F0;">Console</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#E1E4E8;"> winston.transports.</span><span style="color:#B392F0;">DailyRotateFile</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        filename: </span><span style="color:#9ECBFF;">\`logs/\${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}-%DATE%.log\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        datePattern: </span><span style="color:#9ECBFF;">&#39;YYYY-MM-DD&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        zippedArchive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxSize,</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxFiles</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// PM2 集成配置 (ecosystem.config.js)</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> pm2Config</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  apps: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;my-app&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    script: </span><span style="color:#9ECBFF;">&#39;app.mjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    log_date_format: </span><span style="color:#9ECBFF;">&#39;YYYY-MM-DD HH:mm Z&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    out_file: </span><span style="color:#9ECBFF;">&#39;/var/log/nodejs/my-app.log&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    error_file: </span><span style="color:#9ECBFF;">&#39;/var/log/nodejs/my-app-error.log&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    merge_logs: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    log_rotate: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    log_size: </span><span style="color:#9ECBFF;">&#39;10M&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    log_retain: </span><span style="color:#79B8FF;">7</span></span>
<span class="line"><span style="color:#E1E4E8;">  }]</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="集中式日志管理" tabindex="-1">集中式日志管理 <a class="header-anchor" href="#集中式日志管理" aria-label="Permalink to &quot;集中式日志管理&quot;">​</a></h3><p>对于分布式系统，集中式日志收集和分析至关重要：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// centralized-logging.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> winston </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;winston&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ELK Stack 集成配置</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#B392F0;"> createELKLogger</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    logstashHost</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    logstashPort</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 5000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    applicationName</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;nodejs-app&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> winston.</span><span style="color:#B392F0;">createLogger</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    level: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    format: winston.format.</span><span style="color:#B392F0;">combine</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      winston.format.</span><span style="color:#B392F0;">timestamp</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      winston.format.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    transports: [</span></span>
<span class="line"><span style="color:#6A737D;">      // 控制台输出（开发环境）</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#E1E4E8;"> winston.transports.</span><span style="color:#B392F0;">Console</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // Logstash 传输（生产环境）</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#E1E4E8;"> winston.transports.</span><span style="color:#B392F0;">Logstash</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        port: logstashPort,</span></span>
<span class="line"><span style="color:#E1E4E8;">        node_name: applicationName,</span></span>
<span class="line"><span style="color:#E1E4E8;">        host: logstashHost,</span></span>
<span class="line"><span style="color:#E1E4E8;">        max_connect_retries: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#6A737D;"> // 无限重试</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> elkLogger</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createELKLogger</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  applicationName: </span><span style="color:#9ECBFF;">&#39;user-service&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  logstashHost: process.env.</span><span style="color:#79B8FF;">LOGSTASH_HOST</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 结构化日志便于 Kibana 分析</span></span>
<span class="line"><span style="color:#E1E4E8;">elkLogger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;User profile updated&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  userId: </span><span style="color:#9ECBFF;">&#39;12345&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  updatedFields: [</span><span style="color:#9ECBFF;">&#39;email&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;preferences&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  service: </span><span style="color:#9ECBFF;">&#39;user-service&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  environment: process.env.</span><span style="color:#79B8FF;">NODE_ENV</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="最佳实践与性能优化" tabindex="-1">最佳实践与性能优化 <a class="header-anchor" href="#最佳实践与性能优化" aria-label="Permalink to &quot;最佳实践与性能优化&quot;">​</a></h2><h3 id="日志级别管理策略" tabindex="-1">日志级别管理策略 <a class="header-anchor" href="#日志级别管理策略" aria-label="Permalink to &quot;日志级别管理策略&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// log-levels.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pino </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;pino&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 环境特定的级别配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> getLevelConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  switch</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;info&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;staging&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;debug&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;trace&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;info&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 动态级别调整</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> logger</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> pino</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  level: </span><span style="color:#B392F0;">getLevelConfig</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  hooks: {</span></span>
<span class="line"><span style="color:#B392F0;">    logMethod</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">inputArgs</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">method</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 生产环境过滤敏感数据</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">msg</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> inputArgs;</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (obj </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">          // 移除敏感字段</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">password</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">apiKey</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">safeObj</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> method.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, [safeObj, msg]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> method.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, inputArgs);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 性能敏感区域的日志控制</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> performanceCriticalFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 使用条件日志记录避免不必要的计算</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (logger.</span><span style="color:#B392F0;">isLevelEnabled</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;debug&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    logger.</span><span style="color:#B392F0;">debug</span><span style="color:#E1E4E8;">({ data: </span><span style="color:#B392F0;">expensiveSerialization</span><span style="color:#E1E4E8;">(data) }, </span><span style="color:#9ECBFF;">&#39;Processing data&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 主逻辑...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> expensiveSerialization</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 模拟昂贵的序列化操作</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(data));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="上下文跟踪与关联" tabindex="-1">上下文跟踪与关联 <a class="header-anchor" href="#上下文跟踪与关联" aria-label="Permalink to &quot;上下文跟踪与关联&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// context-logging.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pino </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;pino&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 请求上下文传播</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> RequestContext</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">requestId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.requestId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> requestId;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.userId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> userId;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.logger </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createLogger</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.logger </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> pino</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">child</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      requestId: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.requestId,</span></span>
<span class="line"><span style="color:#E1E4E8;">      userId: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.userId</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.logger;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用异步本地存储进行上下文传播</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AsyncLocalStorage } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:async_hooks&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> asyncLocalStorage</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> AsyncLocalStorage</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> withRequestContext</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> asyncLocalStorage.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(context, callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> getCurrentLogger</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> context</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> asyncLocalStorage.</span><span style="color:#B392F0;">getStore</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (context </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> context.logger) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> context.logger;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 回退到默认日志器</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> pino</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 中间件示例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> requestLoggingMiddleware</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> requestId</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> generateRequestId</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> context</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> RequestContext</span><span style="color:#E1E4E8;">(requestId, req.user?.id);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  withRequestContext</span><span style="color:#E1E4E8;">(context, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> logger</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> context.</span><span style="color:#B392F0;">createLogger</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    logger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      method: req.method,</span></span>
<span class="line"><span style="color:#E1E4E8;">      url: req.url,</span></span>
<span class="line"><span style="color:#E1E4E8;">      userAgent: req.headers[</span><span style="color:#9ECBFF;">&#39;user-agent&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#9ECBFF;">&#39;Request started&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 响应完成日志记录</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      logger.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        statusCode: res.statusCode,</span></span>
<span class="line"><span style="color:#E1E4E8;">        contentLength: res.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Content-Length&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#9ECBFF;">&#39;Request completed&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    next</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>通过合理选择和配置这些日志工具，Node.js 命令行应用可以获得既满足功能需求又保证性能的优秀日志系统。关键是根据应用的具体需求在功能丰富性和性能开销之间找到平衡点。</p>`,55)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
