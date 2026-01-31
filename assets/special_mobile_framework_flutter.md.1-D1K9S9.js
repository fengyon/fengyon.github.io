import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Flutter","description":"","frontmatter":{},"headers":[{"level":2,"title":"核心架构","slug":"核心架构","link":"#核心架构","children":[]},{"level":2,"title":"主要特点","slug":"主要特点","link":"#主要特点","children":[{"level":3,"title":"跨平台开发","slug":"跨平台开发","link":"#跨平台开发","children":[]},{"level":3,"title":"完全原生性能","slug":"完全原生性能","link":"#完全原生性能","children":[]},{"level":3,"title":"热重载功能","slug":"热重载功能","link":"#热重载功能","children":[]},{"level":3,"title":"响应式框架","slug":"响应式框架","link":"#响应式框架","children":[]},{"level":3,"title":"丰富的组件库","slug":"丰富的组件库","link":"#丰富的组件库","children":[]}]},{"level":2,"title":"常用 API 及代码示例","slug":"常用-api-及代码示例","link":"#常用-api-及代码示例","children":[{"level":3,"title":"基础组件 API","slug":"基础组件-api","link":"#基础组件-api","children":[]},{"level":3,"title":"布局组件 API","slug":"布局组件-api","link":"#布局组件-api","children":[]},{"level":3,"title":"网络请求 API","slug":"网络请求-api","link":"#网络请求-api","children":[]},{"level":3,"title":"状态管理 API","slug":"状态管理-api","link":"#状态管理-api","children":[]},{"level":3,"title":"动画 API","slug":"动画-api","link":"#动画-api","children":[]},{"level":3,"title":"路由导航 API","slug":"路由导航-api","link":"#路由导航-api","children":[]},{"level":3,"title":"数据存储 API","slug":"数据存储-api","link":"#数据存储-api","children":[]}]},{"level":2,"title":"开发工具与工作流","slug":"开发工具与工作流","link":"#开发工具与工作流","children":[{"level":3,"title":"开发环境搭建","slug":"开发环境搭建","link":"#开发环境搭建","children":[]},{"level":3,"title":"调试与测试","slug":"调试与测试","link":"#调试与测试","children":[]}]}],"relativePath":"special/mobile/framework/flutter.md","filePath":"special/mobile/framework/flutter.md"}'),o={name:"special/mobile/framework/flutter.md"};function e(t,s,c,r,E,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/mobile/framework/flutter.md for this page in Markdown format</div><h1 id="flutter" tabindex="-1">Flutter <a class="header-anchor" href="#flutter" aria-label="Permalink to &quot;Flutter&quot;">​</a></h1><p>Flutter 是 Google 推出的开源 <strong>UI 工具包</strong>，用于从单一的代码库开发跨平台的移动、Web 和桌面应用程序。它使用 <strong>Dart 语言</strong>进行开发，通过其高性能的渲染引擎和丰富的组件库，帮助开发者高效地构建美观、高性能的应用程序。</p><h2 id="核心架构" tabindex="-1">核心架构 <a class="header-anchor" href="#核心架构" aria-label="Permalink to &quot;核心架构&quot;">​</a></h2><p>Flutter 的设计旨在提供高性能、高保真的跨平台开发体验。其架构主要分为三层：框架层、引擎层和嵌入层。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                            Dart App (Your Code)                              │</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│                            Framework Layer                                   │</span></span>
<span class="line"><span>│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │</span></span>
<span class="line"><span>│  │  Material   │  │   Cupertino │  │   Widgets   │  │     Rendering       │  │</span></span>
<span class="line"><span>│  │   Library   │  │   Library   │  │   Library   │  │      Library        │  │</span></span>
<span class="line"><span>│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────────────┘  │</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│                            Engine Layer                                      │</span></span>
<span class="line"><span>│  ┌─────────────────────────────────────────────────────────────────────────┐ │</span></span>
<span class="line"><span>│  │                  Skia (2D Rendering) + Dart Runtime                     │ │</span></span>
<span class="line"><span>│  └─────────────────────────────────────────────────────────────────────────┘ │</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│                            Embedder Layer                                   │</span></span>
<span class="line"><span>│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │</span></span>
<span class="line"><span>│  │   iOS       │  │   Android   │  │   Windows   │  │        ...          │  │</span></span>
<span class="line"><span>│  │  Embedder   │  │   Embedder  │  │   Embedder  │  │                     │  │</span></span>
<span class="line"><span>│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────────────┘  │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><h2 id="主要特点" tabindex="-1">主要特点 <a class="header-anchor" href="#主要特点" aria-label="Permalink to &quot;主要特点&quot;">​</a></h2><h3 id="跨平台开发" tabindex="-1">跨平台开发 <a class="header-anchor" href="#跨平台开发" aria-label="Permalink to &quot;跨平台开发&quot;">​</a></h3><p>Flutter 实现了“一次编写，随处运行”的理念，使用单一代码库构建多平台应用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>单一 Dart 代码库</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>┌───────┼───────┐</span></span>
<span class="line"><span>↓       ↓       ↓</span></span>
<span class="line"><span>iOS   Android  Web</span></span></code></pre></div><h3 id="完全原生性能" tabindex="-1">完全原生性能 <a class="header-anchor" href="#完全原生性能" aria-label="Permalink to &quot;完全原生性能&quot;">​</a></h3><p>Flutter 代码直接编译为本地机器代码。其应用可以直接与设备硬件交互，提供了快速且流畅的用户体验。</p><h3 id="热重载功能" tabindex="-1">热重载功能 <a class="header-anchor" href="#热重载功能" aria-label="Permalink to &quot;热重载功能&quot;">​</a></h3><p>Flutter 的热重载功能允许开发者实时修改代码并立即看到变化，而无需重启应用。当代码发生变化时，Flutter 应用能够实时更新 UI 界面，而不需要整个 APP 重新启动，这大大缩短了调试周期。</p><p>开发流程对比： 传统开发：修改代码 → 重新编译 → 重启应用 → 查看效果 Flutter 开发：修改代码 → 热重载 → 立即查看效果</p><h3 id="响应式框架" tabindex="-1">响应式框架 <a class="header-anchor" href="#响应式框架" aria-label="Permalink to &quot;响应式框架&quot;">​</a></h3><p>Flutter 使用声明式 UI 构建方式，与传统的命令式风格不同。</p><p>命令式 UI： 按钮。文本 = “点击我” 按钮。颜色 = 红色 按钮。点击事件 = 处理函数</p><p>声明式 UI： Button ( 文本：“点击我”， 颜色：红色， 点击事件：处理函数， )</p><h3 id="丰富的组件库" tabindex="-1">丰富的组件库 <a class="header-anchor" href="#丰富的组件库" aria-label="Permalink to &quot;丰富的组件库&quot;">​</a></h3><p>Flutter 提供全面的预构建组件，分为两类：</p><ul><li><strong>Material Design 组件</strong>：遵循 Google Material Design 指南</li><li><strong>Cupertino 组件</strong>：提供 iOS 风格的外观和体验</li></ul><h2 id="常用-api-及代码示例" tabindex="-1">常用 API 及代码示例 <a class="header-anchor" href="#常用-api-及代码示例" aria-label="Permalink to &quot;常用 API 及代码示例&quot;">​</a></h2><h3 id="基础组件-api" tabindex="-1">基础组件 API <a class="header-anchor" href="#基础组件-api" aria-label="Permalink to &quot;基础组件 API&quot;">​</a></h3><p>Flutter 应用的基本构建块是 Widget，以下是常用基础组件的使用：</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;package:flutter/material.dart&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#79B8FF;"> BasicWidgetsExample</span><span style="color:#F97583;"> extends</span><span style="color:#79B8FF;"> StatelessWidget</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> BasicWidgetsExample</span><span style="color:#E1E4E8;">({</span><span style="color:#79B8FF;">Key</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> key}) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> super</span><span style="color:#E1E4E8;">(key</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> key);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  @override</span></span>
<span class="line"><span style="color:#79B8FF;">  Widget</span><span style="color:#B392F0;"> build</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">BuildContext</span><span style="color:#E1E4E8;"> context) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> Scaffold</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      appBar</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> AppBar</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        title</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;基础组件示例&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        backgroundColor</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Colors</span><span style="color:#E1E4E8;">.blue,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ),</span></span>
<span class="line"><span style="color:#E1E4E8;">      body</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Container</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        padding</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> EdgeInsets</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">16.0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Column</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          children</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;">Widget</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">              &#39;Hello Flutter!&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              style</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> TextStyle</span><span style="color:#E1E4E8;">(fontSize</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 24</span><span style="color:#E1E4E8;">, fontWeight</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> FontWeight</span><span style="color:#E1E4E8;">.bold),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> SizedBox</span><span style="color:#E1E4E8;">(height</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 16</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#79B8FF;">            Image</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">network</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">              &#39;https://example.com/image.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              width</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              height</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> SizedBox</span><span style="color:#E1E4E8;">(height</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 16</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#79B8FF;">            TextField</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              decoration</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> InputDecoration</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                labelText</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;请输入内容&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                border</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> OutlineInputBorder</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">              ),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> SizedBox</span><span style="color:#E1E4E8;">(height</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 16</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#79B8FF;">            ElevatedButton</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              onPressed</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">                // 处理按钮点击</span></span>
<span class="line"><span style="color:#B392F0;">                print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;按钮被点击&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;点击我&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        ),</span></span>
<span class="line"><span style="color:#E1E4E8;">      ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="布局组件-api" tabindex="-1">布局组件 API <a class="header-anchor" href="#布局组件-api" aria-label="Permalink to &quot;布局组件 API&quot;">​</a></h3><p>Flutter 使用灵活的布局系统来创建响应式界面：</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#79B8FF;"> LayoutExample</span><span style="color:#F97583;"> extends</span><span style="color:#79B8FF;"> StatelessWidget</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> LayoutExample</span><span style="color:#E1E4E8;">({</span><span style="color:#79B8FF;">Key</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> key}) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> super</span><span style="color:#E1E4E8;">(key</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> key);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  @override</span></span>
<span class="line"><span style="color:#79B8FF;">  Widget</span><span style="color:#B392F0;"> build</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">BuildContext</span><span style="color:#E1E4E8;"> context) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> Scaffold</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      body</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Column</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        children</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;">Widget</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#79B8FF;">          Expanded</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            flex</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Container</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              color</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Colors</span><span style="color:#E1E4E8;">.red,</span></span>
<span class="line"><span style="color:#E1E4E8;">              child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Center</span><span style="color:#E1E4E8;">(child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;顶部区域&#39;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#E1E4E8;">          ),</span></span>
<span class="line"><span style="color:#79B8FF;">          Expanded</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            flex</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Row</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              children</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;">Widget</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#79B8FF;">                Expanded</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Container</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                    color</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Colors</span><span style="color:#E1E4E8;">.green,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Center</span><span style="color:#E1E4E8;">(child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;左侧&#39;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">                  ),</span></span>
<span class="line"><span style="color:#E1E4E8;">                ),</span></span>
<span class="line"><span style="color:#79B8FF;">                Expanded</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Container</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                    color</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Colors</span><span style="color:#E1E4E8;">.blue,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Center</span><span style="color:#E1E4E8;">(child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;右侧&#39;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">                  ),</span></span>
<span class="line"><span style="color:#E1E4E8;">                ),</span></span>
<span class="line"><span style="color:#E1E4E8;">              ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#E1E4E8;">          ),</span></span>
<span class="line"><span style="color:#79B8FF;">          Container</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            height</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 60</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            color</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Colors</span><span style="color:#E1E4E8;">.orange,</span></span>
<span class="line"><span style="color:#E1E4E8;">            child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Center</span><span style="color:#E1E4E8;">(child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;底部区域&#39;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">          ),</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="网络请求-api" tabindex="-1">网络请求 API <a class="header-anchor" href="#网络请求-api" aria-label="Permalink to &quot;网络请求 API&quot;">​</a></h3><p>Flutter 与后端 API 交互通常通过 HTTP 请求实现：</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;dart:convert&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;package:http/http.dart&#39;</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> http;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Future</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Map</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">String</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">dynamic</span><span style="color:#E1E4E8;">&gt;&gt; </span><span style="color:#B392F0;">fetchUserData</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 替换为你的API URL</span></span>
<span class="line"><span style="color:#F97583;">  final</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;https://api.example.com/users&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 发送GET请求</span></span>
<span class="line"><span style="color:#F97583;">    final</span><span style="color:#E1E4E8;"> response </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> http.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Uri</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(url));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 如果服务器返回了200 OK响应，则处理响应体</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (response.statusCode </span><span style="color:#F97583;">==</span><span style="color:#79B8FF;"> 200</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 将JSON响应转换为Dart Map</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> json.</span><span style="color:#B392F0;">decode</span><span style="color:#E1E4E8;">(response.body);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 如果服务器没有返回200 OK响应，则抛出异常</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#79B8FF;"> Exception</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Failed to load data&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 处理网络请求或解析过程中的错误</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#79B8FF;"> Exception</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Failed to fetch data: </span><span style="color:#9ECBFF;">$</span><span style="color:#79B8FF;">e</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在UI中使用 FutureBuilder 显示数据</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#79B8FF;"> UserDataWidget</span><span style="color:#F97583;"> extends</span><span style="color:#79B8FF;"> StatelessWidget</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  @override</span></span>
<span class="line"><span style="color:#79B8FF;">  Widget</span><span style="color:#B392F0;"> build</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">BuildContext</span><span style="color:#E1E4E8;"> context) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> FutureBuilder</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Map</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">String</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">dynamic</span><span style="color:#E1E4E8;">&gt;&gt;(</span></span>
<span class="line"><span style="color:#E1E4E8;">      future</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> fetchUserData</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      builder</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">BuildContext</span><span style="color:#E1E4E8;"> context, </span><span style="color:#79B8FF;">AsyncSnapshot</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Map</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">String</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">dynamic</span><span style="color:#E1E4E8;">&gt;&gt; snapshot) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (snapshot.connectionState </span><span style="color:#F97583;">==</span><span style="color:#79B8FF;"> ConnectionState</span><span style="color:#E1E4E8;">.waiting) {</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> CircularProgressIndicator</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (snapshot.hasError) {</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Error: </span><span style="color:#9ECBFF;">\${</span><span style="color:#79B8FF;">snapshot</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">error</span><span style="color:#9ECBFF;">}</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">          // 使用获取到的数据构建UI</span></span>
<span class="line"><span style="color:#79B8FF;">          Map</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">String</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">dynamic</span><span style="color:#E1E4E8;">&gt; data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> snapshot.data</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;User: </span><span style="color:#9ECBFF;">\${</span><span style="color:#79B8FF;">data</span><span style="color:#9ECBFF;">[</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#9ECBFF;">]}</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="状态管理-api" tabindex="-1">状态管理 API <a class="header-anchor" href="#状态管理-api" aria-label="Permalink to &quot;状态管理 API&quot;">​</a></h3><p>使用 GetX 进行状态管理：</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;package:flutter/material.dart&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;package:get/get.dart&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建控制器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#79B8FF;"> CounterController</span><span style="color:#F97583;"> extends</span><span style="color:#79B8FF;"> GetxController</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  var</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0.</span><span style="color:#E1E4E8;">obs;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  void</span><span style="color:#B392F0;"> increment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count.value</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  void</span><span style="color:#B392F0;"> decrement</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count.value</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在UI中使用</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#79B8FF;"> CounterScreen</span><span style="color:#F97583;"> extends</span><span style="color:#79B8FF;"> StatelessWidget</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  final</span><span style="color:#79B8FF;"> CounterController</span><span style="color:#E1E4E8;"> controller </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> Get</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CounterController</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  @override</span></span>
<span class="line"><span style="color:#79B8FF;">  Widget</span><span style="color:#B392F0;"> build</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">BuildContext</span><span style="color:#E1E4E8;"> context) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> Scaffold</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      body</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Center</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Column</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          mainAxisAlignment</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> MainAxisAlignment</span><span style="color:#E1E4E8;">.center,</span></span>
<span class="line"><span style="color:#E1E4E8;">          children</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#79B8FF;">            Obx</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">                &#39;Count: </span><span style="color:#9ECBFF;">\${</span><span style="color:#79B8FF;">controller</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">count</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">value</span><span style="color:#9ECBFF;">}</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                style</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> TextStyle</span><span style="color:#E1E4E8;">(fontSize</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 24</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">              ),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> SizedBox</span><span style="color:#E1E4E8;">(height</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 20</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#79B8FF;">            ElevatedButton</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              onPressed</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> controller.increment,</span></span>
<span class="line"><span style="color:#E1E4E8;">              child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;增加&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#79B8FF;">            ElevatedButton</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              onPressed</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> controller.decrement,</span></span>
<span class="line"><span style="color:#E1E4E8;">              child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;减少&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        ),</span></span>
<span class="line"><span style="color:#E1E4E8;">      ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="动画-api" tabindex="-1">动画 API <a class="header-anchor" href="#动画-api" aria-label="Permalink to &quot;动画 API&quot;">​</a></h3><p>Flutter 提供强大的动画支持：</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;package:flutter/material.dart&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#79B8FF;"> AnimationExample</span><span style="color:#F97583;"> extends</span><span style="color:#79B8FF;"> StatefulWidget</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> AnimationExample</span><span style="color:#E1E4E8;">({</span><span style="color:#79B8FF;">Key</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> key}) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> super</span><span style="color:#E1E4E8;">(key</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> key);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  @override</span></span>
<span class="line"><span style="color:#79B8FF;">  _AnimationExampleState</span><span style="color:#B392F0;"> createState</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> _AnimationExampleState</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#79B8FF;"> _AnimationExampleState</span><span style="color:#F97583;"> extends</span><span style="color:#79B8FF;"> State</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">AnimationExample</span><span style="color:#E1E4E8;">&gt; </span></span>
<span class="line"><span style="color:#F97583;">    with</span><span style="color:#79B8FF;"> SingleTickerProviderStateMixin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  late</span><span style="color:#79B8FF;"> AnimationController</span><span style="color:#E1E4E8;"> _controller;</span></span>
<span class="line"><span style="color:#F97583;">  late</span><span style="color:#79B8FF;"> Animation</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">double</span><span style="color:#E1E4E8;">&gt; _animation;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  @override</span></span>
<span class="line"><span style="color:#F97583;">  void</span><span style="color:#B392F0;"> initState</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initState</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    _controller </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> AnimationController</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      duration</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Duration</span><span style="color:#E1E4E8;">(seconds</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      vsync</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    _animation </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> Tween</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">double</span><span style="color:#E1E4E8;">&gt;(</span></span>
<span class="line"><span style="color:#E1E4E8;">      begin</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      end</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 300</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ).</span><span style="color:#B392F0;">animate</span><span style="color:#E1E4E8;">(_controller)</span></span>
<span class="line"><span style="color:#E1E4E8;">      ..</span><span style="color:#B392F0;">addListener</span><span style="color:#E1E4E8;">(() {</span></span>
<span class="line"><span style="color:#B392F0;">        setState</span><span style="color:#E1E4E8;">(() {});</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    _controller.</span><span style="color:#B392F0;">repeat</span><span style="color:#E1E4E8;">(reverse</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  @override</span></span>
<span class="line"><span style="color:#79B8FF;">  Widget</span><span style="color:#B392F0;"> build</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">BuildContext</span><span style="color:#E1E4E8;"> context) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> Center</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Container</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        width</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> _animation.value,</span></span>
<span class="line"><span style="color:#E1E4E8;">        height</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> _animation.value,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Colors</span><span style="color:#E1E4E8;">.blue,</span></span>
<span class="line"><span style="color:#E1E4E8;">        child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Center</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">            &#39;动画示例&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            style</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> TextStyle</span><span style="color:#E1E4E8;">(color</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Colors</span><span style="color:#E1E4E8;">.white),</span></span>
<span class="line"><span style="color:#E1E4E8;">          ),</span></span>
<span class="line"><span style="color:#E1E4E8;">        ),</span></span>
<span class="line"><span style="color:#E1E4E8;">      ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  @override</span></span>
<span class="line"><span style="color:#F97583;">  void</span><span style="color:#B392F0;"> dispose</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    _controller.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="路由导航-api" tabindex="-1">路由导航 API <a class="header-anchor" href="#路由导航-api" aria-label="Permalink to &quot;路由导航 API&quot;">​</a></h3><p>Flutter 提供灵活的页面导航系统：</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;package:flutter/material.dart&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#79B8FF;"> NavigationExample</span><span style="color:#F97583;"> extends</span><span style="color:#79B8FF;"> StatelessWidget</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> NavigationExample</span><span style="color:#E1E4E8;">({</span><span style="color:#79B8FF;">Key</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> key}) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> super</span><span style="color:#E1E4E8;">(key</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> key);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  @override</span></span>
<span class="line"><span style="color:#79B8FF;">  Widget</span><span style="color:#B392F0;"> build</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">BuildContext</span><span style="color:#E1E4E8;"> context) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> Scaffold</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      appBar</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> AppBar</span><span style="color:#E1E4E8;">(title</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;导航示例&#39;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">      body</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Center</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Column</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          mainAxisAlignment</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> MainAxisAlignment</span><span style="color:#E1E4E8;">.center,</span></span>
<span class="line"><span style="color:#E1E4E8;">          children</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;">Widget</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#79B8FF;">            ElevatedButton</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              onPressed</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">                // 普通路由跳转</span></span>
<span class="line"><span style="color:#79B8FF;">                Navigator</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  context,</span></span>
<span class="line"><span style="color:#79B8FF;">                  MaterialPageRoute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                    builder</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (context) </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> DetailScreen</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">                  ),</span></span>
<span class="line"><span style="color:#E1E4E8;">                );</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;跳转到详情页&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#79B8FF;">            ElevatedButton</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              onPressed</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">                // 带参数的路由跳转</span></span>
<span class="line"><span style="color:#79B8FF;">                Navigator</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                  context,</span></span>
<span class="line"><span style="color:#79B8FF;">                  MaterialPageRoute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                    builder</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (context) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> DetailScreen</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                      title</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;带参数的页面&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ),</span></span>
<span class="line"><span style="color:#E1E4E8;">                  ),</span></span>
<span class="line"><span style="color:#E1E4E8;">                );</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;带参数跳转&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        ),</span></span>
<span class="line"><span style="color:#E1E4E8;">      ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#79B8FF;"> DetailScreen</span><span style="color:#F97583;"> extends</span><span style="color:#79B8FF;"> StatelessWidget</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  final</span><span style="color:#79B8FF;"> String</span><span style="color:#E1E4E8;"> title;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> DetailScreen</span><span style="color:#E1E4E8;">({</span><span style="color:#79B8FF;">Key</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> key, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.title </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;详情页&#39;</span><span style="color:#E1E4E8;">}) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> super</span><span style="color:#E1E4E8;">(key</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> key);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  @override</span></span>
<span class="line"><span style="color:#79B8FF;">  Widget</span><span style="color:#B392F0;"> build</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">BuildContext</span><span style="color:#E1E4E8;"> context) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> Scaffold</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      appBar</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> AppBar</span><span style="color:#E1E4E8;">(title</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(title)),</span></span>
<span class="line"><span style="color:#E1E4E8;">      body</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Center</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> ElevatedButton</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          onPressed</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">            // 返回上一页</span></span>
<span class="line"><span style="color:#79B8FF;">            Navigator</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">(context);</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;返回&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        ),</span></span>
<span class="line"><span style="color:#E1E4E8;">      ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="数据存储-api" tabindex="-1">数据存储 API <a class="header-anchor" href="#数据存储-api" aria-label="Permalink to &quot;数据存储 API&quot;">​</a></h3><p>使用 shared_preferences 进行本地数据存储：</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;package:flutter/material.dart&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;package:shared_preferences/shared_preferences.dart&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#79B8FF;"> StorageExample</span><span style="color:#F97583;"> extends</span><span style="color:#79B8FF;"> StatefulWidget</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> StorageExample</span><span style="color:#E1E4E8;">({</span><span style="color:#79B8FF;">Key</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> key}) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> super</span><span style="color:#E1E4E8;">(key</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> key);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  @override</span></span>
<span class="line"><span style="color:#79B8FF;">  _StorageExampleState</span><span style="color:#B392F0;"> createState</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> _StorageExampleState</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#79B8FF;"> _StorageExampleState</span><span style="color:#F97583;"> extends</span><span style="color:#79B8FF;"> State</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">StorageExample</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#F97583;">  final</span><span style="color:#79B8FF;"> TextEditingController</span><span style="color:#E1E4E8;"> _controller </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> TextEditingController</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">  String</span><span style="color:#E1E4E8;"> _storedValue </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 保存数据</span></span>
<span class="line"><span style="color:#79B8FF;">  Future</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#B392F0;">_saveData</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    final</span><span style="color:#E1E4E8;"> prefs </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> SharedPreferences</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> prefs.</span><span style="color:#B392F0;">setString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user_input&#39;</span><span style="color:#E1E4E8;">, _controller.text);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    ScaffoldMessenger</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">of</span><span style="color:#E1E4E8;">(context).</span><span style="color:#B392F0;">showSnackBar</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> SnackBar</span><span style="color:#E1E4E8;">(content</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数据保存成功&#39;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 读取数据</span></span>
<span class="line"><span style="color:#79B8FF;">  Future</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#B392F0;">_loadData</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    final</span><span style="color:#E1E4E8;"> prefs </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> SharedPreferences</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">    setState</span><span style="color:#E1E4E8;">(() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      _storedValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prefs.</span><span style="color:#B392F0;">getString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user_input&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">??</span><span style="color:#9ECBFF;"> &#39;暂无数据&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  @override</span></span>
<span class="line"><span style="color:#79B8FF;">  Widget</span><span style="color:#B392F0;"> build</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">BuildContext</span><span style="color:#E1E4E8;"> context) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> Scaffold</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      appBar</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> AppBar</span><span style="color:#E1E4E8;">(title</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数据存储示例&#39;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">      body</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Padding</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        padding</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> EdgeInsets</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">16.0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        child</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Column</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          children</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;">Widget</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#79B8FF;">            TextField</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              controller</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> _controller,</span></span>
<span class="line"><span style="color:#E1E4E8;">              decoration</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> InputDecoration</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                labelText</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;输入要保存的数据&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                border</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> OutlineInputBorder</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">              ),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> SizedBox</span><span style="color:#E1E4E8;">(height</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 20</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#79B8FF;">            ElevatedButton</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              onPressed</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> _saveData,</span></span>
<span class="line"><span style="color:#E1E4E8;">              child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;保存数据&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#79B8FF;">            ElevatedButton</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              onPressed</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> _loadData,</span></span>
<span class="line"><span style="color:#E1E4E8;">              child</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> Text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;加载数据&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> SizedBox</span><span style="color:#E1E4E8;">(height</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 20</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#79B8FF;">            Text</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">              &#39;存储的值: </span><span style="color:#9ECBFF;">$</span><span style="color:#79B8FF;">_storedValue</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              style</span><span style="color:#F97583;">:</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> TextStyle</span><span style="color:#E1E4E8;">(fontSize</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 18</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        ),</span></span>
<span class="line"><span style="color:#E1E4E8;">      ),</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="开发工具与工作流" tabindex="-1">开发工具与工作流 <a class="header-anchor" href="#开发工具与工作流" aria-label="Permalink to &quot;开发工具与工作流&quot;">​</a></h2><h3 id="开发环境搭建" tabindex="-1">开发环境搭建 <a class="header-anchor" href="#开发环境搭建" aria-label="Permalink to &quot;开发环境搭建&quot;">​</a></h3><p>Flutter 开发环境包含以下组件：</p><ol><li><strong>Flutter SDK</strong> - 核心开发工具包</li><li><strong>Dart SDK</strong> - Dart 编程语言工具包</li><li><strong>IDE 扩展</strong> - Android Studio/VS Code 的 Flutter 插件</li><li><strong>平台工具</strong> - Android 和 iOS 开发工具</li></ol><h3 id="调试与测试" tabindex="-1">调试与测试 <a class="header-anchor" href="#调试与测试" aria-label="Permalink to &quot;调试与测试&quot;">​</a></h3><p>Flutter 提供完整的开发工具链：</p><ul><li><strong>热重载</strong>：亚秒内重载，并且不会丢失状态</li><li><strong>Dart DevTools</strong>：性能分析和调试工具</li><li><strong>Widget 测试</strong>：组件级测试框架</li><li><strong>集成测试</strong>：完整的应用流程测试</li></ul><p>开发流程示意图： 编写代码 → 热重载预览 → 调试分析 → 测试验证 → 构建发布</p>`,52)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
