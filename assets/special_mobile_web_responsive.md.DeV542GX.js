import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"响应式设计","description":"","frontmatter":{},"headers":[{"level":2,"title":"响应式设计基础","slug":"响应式设计基础","link":"#响应式设计基础","children":[]},{"level":2,"title":"核心概念与原理","slug":"核心概念与原理","link":"#核心概念与原理","children":[{"level":3,"title":"视口配置","slug":"视口配置","link":"#视口配置","children":[]},{"level":3,"title":"媒体查询","slug":"媒体查询","link":"#媒体查询","children":[]},{"level":3,"title":"弹性网格布局","slug":"弹性网格布局","link":"#弹性网格布局","children":[]}]},{"level":2,"title":"响应式技术实现","slug":"响应式技术实现","link":"#响应式技术实现","children":[{"level":3,"title":"移动优先设计","slug":"移动优先设计","link":"#移动优先设计","children":[]},{"level":3,"title":"响应式图片","slug":"响应式图片","link":"#响应式图片","children":[]},{"level":3,"title":"响应式单位系统","slug":"响应式单位系统","link":"#响应式单位系统","children":[]}]},{"level":2,"title":"常用 API 与代码示例","slug":"常用-api-与代码示例","link":"#常用-api-与代码示例","children":[{"level":3,"title":"CSS 容器查询","slug":"css-容器查询","link":"#css-容器查询","children":[]},{"level":3,"title":"JavaScript 响应式检测","slug":"javascript-响应式检测","link":"#javascript-响应式检测","children":[]},{"level":3,"title":"响应式工具函数","slug":"响应式工具函数","link":"#响应式工具函数","children":[]},{"level":3,"title":"现代 CSS 响应式特性","slug":"现代-css-响应式特性","link":"#现代-css-响应式特性","children":[]}]},{"level":2,"title":"响应式设计模式","slug":"响应式设计模式","link":"#响应式设计模式","children":[{"level":3,"title":"导航模式适配","slug":"导航模式适配","link":"#导航模式适配","children":[]},{"level":3,"title":"内容重新布局","slug":"内容重新布局","link":"#内容重新布局","children":[]}]},{"level":2,"title":"性能优化考虑","slug":"性能优化考虑","link":"#性能优化考虑","children":[]}],"relativePath":"special/mobile/web/responsive.md","filePath":"special/mobile/web/responsive.md"}'),o={name:"special/mobile/web/responsive.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/mobile/web/responsive.md for this page in Markdown format</div><h1 id="响应式设计" tabindex="-1">响应式设计 <a class="header-anchor" href="#响应式设计" aria-label="Permalink to &quot;响应式设计&quot;">​</a></h1><p>响应式设计是一种网页设计和开发方法，通过灵活的网格布局、弹性图片和媒体查询等技术，使网站能够适应不同设备和屏幕尺寸，提供最佳的用户体验。在移动互联网时代，响应式设计已成为现代 Web 开发的标准实践。</p><h2 id="响应式设计基础" tabindex="-1">响应式设计基础 <a class="header-anchor" href="#响应式设计基础" aria-label="Permalink to &quot;响应式设计基础&quot;">​</a></h2><p>响应式设计的核心在于创建能够自动调整布局、图片和内容的灵活界面，确保在任何设备上都能提供优秀的用户体验。</p><ul><li><strong>核心原则</strong>：一次开发，处处适配</li><li><strong>技术基础</strong>：CSS3 媒体查询、弹性布局、相对单位</li><li><strong>设计哲学</strong>：内容优先，移动优先</li></ul><p>设计流程示意图： 设计构思 → 移动端布局 → 平板适配 → 桌面端优化 ↓ ↓ ↓ ↓ 内容优先触控友好中等屏幕大屏体验</p><h2 id="核心概念与原理" tabindex="-1">核心概念与原理 <a class="header-anchor" href="#核心概念与原理" aria-label="Permalink to &quot;核心概念与原理&quot;">​</a></h2><h3 id="视口配置" tabindex="-1">视口配置 <a class="header-anchor" href="#视口配置" aria-label="Permalink to &quot;视口配置&quot;">​</a></h3><p>视口是响应式设计的基石，正确的视口配置确保页面在移动设备上正确缩放。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 基本视口配置 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">meta</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#B392F0;"> content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 完整视口配置 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">meta</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#B392F0;"> content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover&quot;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>视口效果对比： 无 viewport：桌面版网页在手机上缩小显示，需要手动缩放 有 viewport：网页自动适配设备宽度，内容可读性佳</p><h3 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询" aria-label="Permalink to &quot;媒体查询&quot;">​</a></h3><p>媒体查询是响应式设计的核心技术，允许根据设备特性应用不同的 CSS 样式。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 基础媒体查询语法 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> [媒体类型] [逻辑操作符] (条件) {</span></span>
<span class="line"><span style="color:#6A737D;">  /* CSS规则 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 常见断点设置 */</span></span>
<span class="line"><span style="color:#6A737D;">/* 手机设备 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">767</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .container</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 平板设备 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1023</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .container</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 桌面设备 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1024</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .container</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 高分辨率屏幕 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">-webkit-min-device-pixel-ratio</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">), </span></span>
<span class="line"><span style="color:#E1E4E8;">       (</span><span style="color:#79B8FF;">min-resolution</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">192</span><span style="color:#F97583;">dpi</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .logo</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">logo@2x.png</span><span style="color:#E1E4E8;">); }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 横屏模式 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">orientation</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">landscape</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .header</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">60</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 打印样式 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#79B8FF;"> print</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  .sidebar</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.ad-banner</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="弹性网格布局" tabindex="-1">弹性网格布局 <a class="header-anchor" href="#弹性网格布局" aria-label="Permalink to &quot;弹性网格布局&quot;">​</a></h3><p>使用相对单位创建自适应的网格系统，替代固定像素布局。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">grid</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  grid-template-columns</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">repeat</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">auto-fit</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">minmax</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">250</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">fr</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#79B8FF;">  gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 传统浮动网格 */</span></span>
<span class="line"><span style="color:#B392F0;">.row::after</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">table</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  clear</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">both</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.col</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  float</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  box-sizing</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">border-box</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.col-4</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">33.333</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#B392F0;">.col-6</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#B392F0;">.col-12</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 媒体查询调整网格 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .col-4</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.col-6</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="响应式技术实现" tabindex="-1">响应式技术实现 <a class="header-anchor" href="#响应式技术实现" aria-label="Permalink to &quot;响应式技术实现&quot;">​</a></h2><h3 id="移动优先设计" tabindex="-1">移动优先设计 <a class="header-anchor" href="#移动优先设计" aria-label="Permalink to &quot;移动优先设计&quot;">​</a></h3><p>移动优先策略从小屏幕开始设计，逐步增强到大屏幕体验。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 基础样式 - 移动设备优先 */</span></span>
<span class="line"><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">15</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#79B8FF;"> auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.nav-menu</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  list-style</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.nav-item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  border-bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> solid</span><span style="color:#79B8FF;"> #eee</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 平板设备增强 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">720</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  .nav-menu</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    justify-content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">space-between</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  .nav-item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    border-bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#79B8FF;"> 15</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 桌面设备增强 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1024</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1200</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  .nav-menu</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    justify-content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex-start</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="响应式图片" tabindex="-1">响应式图片 <a class="header-anchor" href="#响应式图片" aria-label="Permalink to &quot;响应式图片&quot;">​</a></h3><p>确保图片在不同设备和屏幕尺寸下都能正确显示。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- srcset 多分辨率图片 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">  src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image-400.jpg&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">  srcset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image-400.jpg 400w,</span></span>
<span class="line"><span style="color:#9ECBFF;">          image-800.jpg 800w,</span></span>
<span class="line"><span style="color:#9ECBFF;">          image-1200.jpg 1200w&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  sizes</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(max-width: 480px) 100vw,</span></span>
<span class="line"><span style="color:#9ECBFF;">         (max-width: 768px) 50vw,</span></span>
<span class="line"><span style="color:#9ECBFF;">         33vw&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;响应式图片示例&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- picture 元素艺术指导 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">picture</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">source</span><span style="color:#B392F0;"> media</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(max-width: 767px)&quot;</span><span style="color:#B392F0;"> srcset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;mobile-image.jpg&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">source</span><span style="color:#B392F0;"> media</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(min-width: 768px)&quot;</span><span style="color:#B392F0;"> srcset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;desktop-image.jpg&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">img</span><span style="color:#B392F0;"> src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;fallback-image.jpg&quot;</span><span style="color:#B392F0;"> alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;艺术指导图片&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">picture</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- CSS 背景图片响应式 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;responsive-bg&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.responsive-bg</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;small.jpg&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">  background-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">cover</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .responsive-bg</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;large.jpg&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">400</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="响应式单位系统" tabindex="-1">响应式单位系统 <a class="header-anchor" href="#响应式单位系统" aria-label="Permalink to &quot;响应式单位系统&quot;">​</a></h3><p>使用相对单位替代固定像素，创建灵活的布局系统。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  /* 视口单位 */</span></span>
<span class="line"><span style="color:#79B8FF;">  width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">vw</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  min-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">vh</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">vmin</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 取视口宽度和高度中较小的1% */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  /* 字体相对单位 */</span></span>
<span class="line"><span style="color:#79B8FF;">  font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">clamp</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2.5</span><span style="color:#F97583;">vw</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1.5</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">  line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1.6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.card</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  /* 百分比单位 */</span></span>
<span class="line"><span style="color:#79B8FF;">  width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">90</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#79B8FF;"> auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  /* rem 单位 - 相对于根元素字体大小 */</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.5</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  /* em 单位 - 相对于父元素字体大小 */</span></span>
<span class="line"><span style="color:#79B8FF;">  font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">em</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.button</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  /* 动态计算 */</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.5</span><span style="color:#F97583;">rem</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">vw</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">  font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1.2</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">vw</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 根元素字体大小设置 */</span></span>
<span class="line"><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">16</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#85E89D;">  html</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">14</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="常用-api-与代码示例" tabindex="-1">常用 API 与代码示例 <a class="header-anchor" href="#常用-api-与代码示例" aria-label="Permalink to &quot;常用 API 与代码示例&quot;">​</a></h2><h3 id="css-容器查询" tabindex="-1">CSS 容器查询 <a class="header-anchor" href="#css-容器查询" aria-label="Permalink to &quot;CSS 容器查询&quot;">​</a></h3><p>容器查询允许组件根据其容器尺寸而非视口尺寸进行样式调整。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 定义容器 */</span></span>
<span class="line"><span style="color:#B392F0;">.component-container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  container-type</span><span style="color:#E1E4E8;">: inline-size;</span></span>
<span class="line"><span style="color:#79B8FF;">  container-name</span><span style="color:#E1E4E8;">: main;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 容器查询 */</span></span>
<span class="line"><span style="color:#F97583;">@container</span><span style="color:#E1E4E8;"> main (min-width: 400px) {</span></span>
<span class="line"><span style="color:#B392F0;">  .card</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  .card-image</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">150</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">150</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@container</span><span style="color:#E1E4E8;"> main (min-width: 600px) {</span></span>
<span class="line"><span style="color:#B392F0;">  .card</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  .card-title</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1.5</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="javascript-响应式检测" tabindex="-1">JavaScript 响应式检测 <a class="header-anchor" href="#javascript-响应式检测" aria-label="Permalink to &quot;JavaScript 响应式检测&quot;">​</a></h3><p>使用 JavaScript 检测设备特性和屏幕变化。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 检测屏幕尺寸变化</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> handleResize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> width</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.innerWidth;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> height</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.innerHeight;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (width </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 768</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mobile&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.classList.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tablet&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;desktop&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (width </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tablet&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.classList.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mobile&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;desktop&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;desktop&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.classList.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mobile&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;tablet&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听窗口变化</span></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;resize&#39;</span><span style="color:#E1E4E8;">, handleResize);</span></span>
<span class="line"><span style="color:#B392F0;">handleResize</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 初始检测</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 检测设备像素比</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> devicePixelRatio</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.devicePixelRatio </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`设备像素比: \${</span><span style="color:#E1E4E8;">devicePixelRatio</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 检测触摸支持</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> isTouchDevice</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;ontouchstart&#39;</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> window </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                      navigator.maxTouchPoints </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ||</span></span>
<span class="line"><span style="color:#E1E4E8;">                      navigator.msMaxTouchPoints </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (isTouchDevice) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.body.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;touch-device&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 匹配媒体查询</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mediaQuery</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.</span><span style="color:#B392F0;">matchMedia</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> handleTabletChange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (e.matches) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;屏幕宽度 &gt;= 768px&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    // 平板及以上布局逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;屏幕宽度 &lt; 768px&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    // 手机布局逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">mediaQuery.</span><span style="color:#B392F0;">addListener</span><span style="color:#E1E4E8;">(handleTabletChange);</span></span>
<span class="line"><span style="color:#B392F0;">handleTabletChange</span><span style="color:#E1E4E8;">(mediaQuery);</span></span></code></pre></div><h3 id="响应式工具函数" tabindex="-1">响应式工具函数 <a class="header-anchor" href="#响应式工具函数" aria-label="Permalink to &quot;响应式工具函数&quot;">​</a></h3><p>创建可重用的响应式工具函数。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 响应式断点管理器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ResponsiveManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">breakpoints</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.breakpoints </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> breakpoints </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      xs: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      sm: </span><span style="color:#79B8FF;">576</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      md: </span><span style="color:#79B8FF;">768</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lg: </span><span style="color:#79B8FF;">992</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      xl: </span><span style="color:#79B8FF;">1200</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.currentBreakpoint </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getCurrentBreakpoint</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;resize&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleResize.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getCurrentBreakpoint</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> width</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.innerWidth;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (width </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.breakpoints.xl) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;xl&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (width </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.breakpoints.lg) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;lg&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (width </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.breakpoints.md) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;md&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (width </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.breakpoints.sm) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;sm&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;xs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  handleResize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newBreakpoint</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getCurrentBreakpoint</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (newBreakpoint </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.currentBreakpoint) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> oldBreakpoint</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.currentBreakpoint;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.currentBreakpoint </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newBreakpoint;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 触发断点变化事件</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">onBreakpointChange</span><span style="color:#E1E4E8;">(newBreakpoint, oldBreakpoint);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  onBreakpointChange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newBreakpoint</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">oldBreakpoint</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 自定义断点变化处理逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`断点变化: \${</span><span style="color:#E1E4E8;">oldBreakpoint</span><span style="color:#9ECBFF;">} -&gt; \${</span><span style="color:#E1E4E8;">newBreakpoint</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 分发自定义事件</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> event</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CustomEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;breakpointchange&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      detail: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        newBreakpoint,</span></span>
<span class="line"><span style="color:#E1E4E8;">        oldBreakpoint</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">dispatchEvent</span><span style="color:#E1E4E8;">(event);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  isAbove</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">breakpoint</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> breakpoints</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.breakpoints);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentIndex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> breakpoints.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentBreakpoint);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> targetIndex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> breakpoints.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(breakpoint);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> currentIndex </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> targetIndex;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> responsive</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ResponsiveManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;breakpointchange&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">newBreakpoint</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">oldBreakpoint</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e.detail;</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`响应式变化: \${</span><span style="color:#E1E4E8;">oldBreakpoint</span><span style="color:#9ECBFF;">} → \${</span><span style="color:#E1E4E8;">newBreakpoint</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 条件执行</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (responsive.</span><span style="color:#B392F0;">isAbove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;md&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 只在中等屏幕及以上执行</span></span>
<span class="line"><span style="color:#B392F0;">  initDesktopFeatures</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="现代-css-响应式特性" tabindex="-1">现代 CSS 响应式特性 <a class="header-anchor" href="#现代-css-响应式特性" aria-label="Permalink to &quot;现代 CSS 响应式特性&quot;">​</a></h3><p>使用现代 CSS 特性创建更简洁的响应式布局。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* clamp() 函数 - 动态值范围 */</span></span>
<span class="line"><span style="color:#B392F0;">.heading</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">clamp</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1.5</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#F97583;">vw</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">  margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">clamp</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">vw</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* aspect-ratio 属性 */</span></span>
<span class="line"><span style="color:#B392F0;">.video-container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  aspect-ratio</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;"> / </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* grid 自动适应 */</span></span>
<span class="line"><span style="color:#B392F0;">.auto-grid</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">grid</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  grid-template-columns</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">repeat</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">auto-fill</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">minmax</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">250</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">fr</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#79B8FF;">  gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 容器查询实际应用 */</span></span>
<span class="line"><span style="color:#B392F0;">.product-grid</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  container-type</span><span style="color:#E1E4E8;">: inline-size;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@container</span><span style="color:#E1E4E8;"> (min-width: 500px) {</span></span>
<span class="line"><span style="color:#B392F0;">  .product-card</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">grid</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    grid-template-columns</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">fr</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">fr</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 响应式间距工具类 */</span></span>
<span class="line"><span style="color:#B392F0;">.space-sm</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.5</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#B392F0;">.space-md</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#B392F0;">.space-lg</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@container</span><span style="color:#E1E4E8;"> (min-width: 768px) {</span></span>
<span class="line"><span style="color:#B392F0;">  .space-sm</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#B392F0;">  .space-md</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1.5</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#B392F0;">  .space-lg</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="响应式设计模式" tabindex="-1">响应式设计模式 <a class="header-anchor" href="#响应式设计模式" aria-label="Permalink to &quot;响应式设计模式&quot;">​</a></h2><h3 id="导航模式适配" tabindex="-1">导航模式适配 <a class="header-anchor" href="#导航模式适配" aria-label="Permalink to &quot;导航模式适配&quot;">​</a></h3><p>不同屏幕尺寸下的导航设计模式。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 移动端汉堡菜单 */</span></span>
<span class="line"><span style="color:#B392F0;">.mobile-nav</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">fixed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">80</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">vh</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">white</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  transition</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">left</span><span style="color:#79B8FF;"> 0.3</span><span style="color:#F97583;">s</span><span style="color:#79B8FF;"> ease</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.mobile-nav.open</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 桌面端水平导航 */</span></span>
<span class="line"><span style="color:#B392F0;">.desktop-nav</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  justify-content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">space-between</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  align-items</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 响应式切换 */</span></span>
<span class="line"><span style="color:#B392F0;">.nav-container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  justify-content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">space-between</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  align-items</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.hamburger</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1.5</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">767</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .desktop-nav</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  .hamburger</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="内容重新布局" tabindex="-1">内容重新布局 <a class="header-anchor" href="#内容重新布局" aria-label="Permalink to &quot;内容重新布局&quot;">​</a></h3><p>基于屏幕尺寸的内容布局调整策略。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 卡片布局 - 移动端堆叠 */</span></span>
<span class="line"><span style="color:#B392F0;">.card-layout</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  flex-direction</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">column</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 平板端 - 2列 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .card-layout</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    flex-direction</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">row</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    flex-wrap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">wrap</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  .card</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    flex</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#79B8FF;"> 1</span><span style="color:#79B8FF;"> calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 桌面端 - 3列 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1024</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .card</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    flex</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#79B8FF;"> 1</span><span style="color:#79B8FF;"> calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">33.333</span><span style="color:#F97583;">%</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 内容显示/隐藏策略 */</span></span>
<span class="line"><span style="color:#B392F0;">.mobile-only</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.desktop-only</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.tablet-hidden</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .mobile-only</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  .tablet-hidden</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1024</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .desktop-only</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="性能优化考虑" tabindex="-1">性能优化考虑 <a class="header-anchor" href="#性能优化考虑" aria-label="Permalink to &quot;性能优化考虑&quot;">​</a></h2><p>响应式设计需要考虑的性能优化策略。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 条件加载资源 */</span></span>
<span class="line"><span style="color:#B392F0;">.desktop-hero</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;desktop-hero.jpg&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">767</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .desktop-hero</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mobile-hero.jpg&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 减少移动端动画 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (prefers-reduced-motion: reduce) {</span></span>
<span class="line"><span style="color:#85E89D;">  *</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    animation-duration</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.01</span><span style="color:#F97583;">ms</span><span style="color:#F97583;"> !important</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    animation-iteration-count</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> !important</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    transition-duration</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.01</span><span style="color:#F97583;">ms</span><span style="color:#F97583;"> !important</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 移动端优化 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">767</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">orientation</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">portrait</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .complex-animation</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    animation</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  .heavy-computation</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    /* 简化计算密集型样式 */</span></span>
<span class="line"><span style="color:#79B8FF;">    filter</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,51)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
