import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"资源加载优化","description":"","frontmatter":{},"headers":[{"level":2,"title":"资源加载基础","slug":"resource-loading-basics","link":"#resource-loading-basics","children":[]},{"level":2,"title":"关键渲染路径优化","slug":"critical-rendering-path","link":"#critical-rendering-path","children":[]},{"level":2,"title":"资源优先级控制","slug":"resource-priority","link":"#resource-priority","children":[]},{"level":2,"title":"图片加载优化","slug":"image-loading","link":"#image-loading","children":[]},{"level":2,"title":"懒加载策略","slug":"lazy-loading","link":"#lazy-loading","children":[]},{"level":2,"title":"预加载与预获取","slug":"preloading-prefetching","link":"#preloading-prefetching","children":[]},{"level":2,"title":"第三方资源优化","slug":"third-party-optimization","link":"#third-party-optimization","children":[]},{"level":2,"title":"缓存策略优化","slug":"caching-strategy","link":"#caching-strategy","children":[]},{"level":2,"title":"自适应加载策略","slug":"adaptive-loading","link":"#adaptive-loading","children":[]}],"relativePath":"engineering/performance/resources.md","filePath":"engineering/performance/resources.md"}'),o={name:"engineering/performance/resources.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/performance/resources.md for this page in Markdown format</div><h1 id="资源加载优化" tabindex="-1">资源加载优化 <a class="header-anchor" href="#资源加载优化" aria-label="Permalink to &quot;资源加载优化&quot;">​</a></h1><h2 id="resource-loading-basics" tabindex="-1">资源加载基础 <a class="header-anchor" href="#resource-loading-basics" aria-label="Permalink to &quot;资源加载基础 {#resource-loading-basics}&quot;">​</a></h2><p>资源加载优化关注 Web 应用中各种资源 (图片、样式、脚本、字体等) 的获取时机、优先级控制和传输效率。现代 Web 应用包含数十甚至上百个资源，合理的加载策略直接影响用户体验和核心性能指标。</p><p>特点：资源加载优化需要<strong>分层治理</strong>，从关键路径资源到非关键资源都需要针对性策略。优化目标是在正确的时间加载正确的资源，避免阻塞渲染和浪费带宽。</p><p>示意图： 资源加载生命周期： 发现 → 排队 → 连接建立 → 请求发送 → 响应接收 → 处理完成 优化焦点： 减少关键资源数量 + 压缩资源体积 + 优化加载时机 + 提升缓存效率</p><h2 id="critical-rendering-path" tabindex="-1">关键渲染路径优化 <a class="header-anchor" href="#critical-rendering-path" aria-label="Permalink to &quot;关键渲染路径优化 {#critical-rendering-path}&quot;">​</a></h2><p>关键渲染路径是浏览器首次渲染页面所需的最小资源集合。优化核心是识别并优先加载阻塞渲染的资源，延迟非关键资源。通过资源优先级分析、内联关键 CSS 和异步加载非关键 JavaScript 实现。</p><p>特点：关键路径优化强调<strong>渲染速度</strong>而非完全加载速度。核心指标是首次内容绘制时间，优化目标是让用户尽快看到页面内容。</p><p>示意图： 关键路径资源： HTML → 关键 CSS → 首屏图片 → 阻塞 JavaScript 非关键资源： 非首屏图片 → 非关键 CSS/JS → 统计代码 → 第三方组件 优化策略：内联关键 CSS + 异步加载 JS + 懒加载图片</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 关键CSS内联 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">/* 首屏样式内联 */</span></span>
<span class="line"><span style="color:#B392F0;">.header</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.hero</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.main-content</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#6A737D;">  /* 关键样式规则 */</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 非关键CSS异步加载 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span><span style="color:#B392F0;"> rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;preload&quot;</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;non-critical.css&quot;</span><span style="color:#B392F0;"> as</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;style&quot;</span><span style="color:#B392F0;"> onload</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">rel</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;stylesheet&#39;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">noscript</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">link</span><span style="color:#B392F0;"> rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;stylesheet&quot;</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;non-critical.css&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">noscript</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 阻塞JavaScript异步化 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;critical.js&quot;</span><span style="color:#B392F0;"> defer</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="resource-priority" tabindex="-1">资源优先级控制 <a class="header-anchor" href="#resource-priority" aria-label="Permalink to &quot;资源优先级控制 {#resource-priority}&quot;">​</a></h2><p>现代浏览器基于资源类型、位置和声明自动分配加载优先级。通过预加载、预连接和优先级提示主动影响浏览器调度，确保关键资源优先获取。</p><p>特点：优先级控制需要<strong>精确声明</strong>和<strong>合理预测</strong>。过度预加载会浪费带宽，不足则影响用户体验。</p><p>示意图： 浏览器默认优先级： CSS/字体 (最高) → 视口内图片 (高) → 脚本 (中高) → 视口外图片 (低) 主动控制： preload (强制高优先级) → prefetch (低优先级缓存) → preconnect (提前连接)</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 资源优先级声明 --&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 关键字体预加载 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span><span style="color:#B392F0;"> rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;preload&quot;</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;font.woff2&quot;</span><span style="color:#B392F0;"> as</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;font&quot;</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;font/woff2&quot;</span><span style="color:#B392F0;"> crossorigin</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 首屏图片预加载 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span><span style="color:#B392F0;"> rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;preload&quot;</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;hero-image.jpg&quot;</span><span style="color:#B392F0;"> as</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image&quot;</span><span style="color:#B392F0;"> media</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(min-width: 600px)&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 关键脚本预加载 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span><span style="color:#B392F0;"> rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;preload&quot;</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;critical.js&quot;</span><span style="color:#B392F0;"> as</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;script&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 预连接关键域名 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span><span style="color:#B392F0;"> rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;preconnect&quot;</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://fonts.googleapis.com&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span><span style="color:#B392F0;"> rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;preconnect&quot;</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://cdn.example.com&quot;</span><span style="color:#B392F0;"> crossorigin</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 预获取下一页资源 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span><span style="color:#B392F0;"> rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;prefetch&quot;</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/next-page.html&quot;</span><span style="color:#B392F0;"> as</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;document&quot;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="image-loading" tabindex="-1">图片加载优化 <a class="header-anchor" href="#image-loading" aria-label="Permalink to &quot;图片加载优化 {#image-loading}&quot;">​</a></h2><p>图片通常是页面中体积最大的资源类别。优化策略包括格式选择、响应式图片、懒加载和渐进式加载。现代图片格式如 WebP 和 AVIF 提供更好的压缩效率。</p><p>特点：图片优化平衡<strong>视觉质量</strong>和<strong>加载性能</strong>。根据设备能力、网络条件和显示需求提供合适的图片版本。</p><p>示意图： 图片优化决策树： 格式选择 → 尺寸适配 → 压缩质量 → 加载时机 格式优先级：AVIF → WebP → JPEG/PNG 尺寸策略：响应式 srcset + 艺术方向 picture</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 响应式图片示例 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">picture</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;!-- AVIF格式（最优） --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">source</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">    type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image/avif&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">    srcset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">      image-400.avif 400w,</span></span>
<span class="line"><span style="color:#9ECBFF;">      image-800.avif 800w,</span></span>
<span class="line"><span style="color:#9ECBFF;">      image-1200.avif 1200w</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;</span></span>
<span class="line"><span style="color:#B392F0;">    sizes</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(max-width: 600px) 400px,</span></span>
<span class="line"><span style="color:#9ECBFF;">           (max-width: 1200px) 800px,</span></span>
<span class="line"><span style="color:#9ECBFF;">           1200px&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  &lt;!-- WebP格式（次优） --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">source</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">    type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image/webp&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">    srcset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">      image-400.webp 400w,</span></span>
<span class="line"><span style="color:#9ECBFF;">      image-800.webp 800w, </span></span>
<span class="line"><span style="color:#9ECBFF;">      image-1200.webp 1200w</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;</span></span>
<span class="line"><span style="color:#B392F0;">    sizes</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(max-width: 600px) 400px,</span></span>
<span class="line"><span style="color:#9ECBFF;">           (max-width: 1200px) 800px,</span></span>
<span class="line"><span style="color:#9ECBFF;">           1200px&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  &lt;!-- 原始格式（回退） --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">    src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image-400.jpg&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">    srcset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">      image-400.jpg 400w,</span></span>
<span class="line"><span style="color:#9ECBFF;">      image-800.jpg 800w,</span></span>
<span class="line"><span style="color:#9ECBFF;">      image-1200.jpg 1200w</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;</span></span>
<span class="line"><span style="color:#B392F0;">    sizes</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(max-width: 600px) 400px,</span></span>
<span class="line"><span style="color:#9ECBFF;">           (max-width: 1200px) 800px,</span></span>
<span class="line"><span style="color:#9ECBFF;">           1200px&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;描述文本&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    loading</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lazy&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;400&quot;</span><span style="color:#B392F0;"> height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;300&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">picture</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="lazy-loading" tabindex="-1">懒加载策略 <a class="header-anchor" href="#lazy-loading" aria-label="Permalink to &quot;懒加载策略 {#lazy-loading}&quot;">​</a></h2><p>懒加载延迟非关键资源的加载时机，直到用户需要或即将需要时再加载。适用于图片、视频、iframe 和部分 JavaScript 模块。通过 Intersection Observer API 实现精确的视口检测。</p><p>特点：懒加载显著减少<strong>初始负载</strong>和<strong>带宽使用</strong>。需要合理设置加载阈值，避免用户等待感知。</p><p>示意图： 懒加载触发条件： 元素进入视口 → 接近视口 (阈值) → 用户交互时 → 鼠标悬停时 优化平衡：过早加载浪费资源 ↔ 过晚加载影响体验</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 高级懒加载管理器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> LazyLoadManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      rootMargin: </span><span style="color:#9ECBFF;">&#39;50px 0px&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 提前50px开始加载</span></span>
<span class="line"><span style="color:#E1E4E8;">      threshold: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 多个触发点</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 初始化懒加载</span></span>
<span class="line"><span style="color:#B392F0;">  init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> IntersectionObserver</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleIntersection.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">), </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 注册需要懒加载的元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[data-lazy]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 处理元素进入视口</span></span>
<span class="line"><span style="color:#B392F0;">  handleIntersection</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    entries.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entry</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (entry.isIntersecting) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> element</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> entry.target;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadResource</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.observer.</span><span style="color:#B392F0;">unobserve</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 加载资源</span></span>
<span class="line"><span style="color:#B392F0;">  loadResource</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> resourceType</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> element.dataset.lazyType </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;image&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;">(resourceType) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;image&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadImage</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;iframe&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadIframe</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;component&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadComponent</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;video&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadVideo</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 图片懒加载</span></span>
<span class="line"><span style="color:#B392F0;">  loadImage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">img</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> src</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> img.dataset.src;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> srcset</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> img.dataset.srcset;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 使用Image对象预加载</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> image</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Image</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    image.</span><span style="color:#B392F0;">onload</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 图片加载完成后替换</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (src) img.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> src;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (srcset) img.srcset </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> srcset;</span></span>
<span class="line"><span style="color:#E1E4E8;">      img.classList.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;lazy&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      img.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;loaded&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    image.</span><span style="color:#B392F0;">onerror</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 加载失败处理</span></span>
<span class="line"><span style="color:#E1E4E8;">      img.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadFallback</span><span style="color:#E1E4E8;">(img);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    image.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> src;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 预测性懒加载（基于用户行为）</span></span>
<span class="line"><span style="color:#B392F0;">  setupPredictiveLoading</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 基于滚动速度预测</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> lastScrollY </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.scrollY;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> scrollTimer;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;scroll&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> currentScrollY</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.scrollY;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> scrollSpeed</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">abs</span><span style="color:#E1E4E8;">(currentScrollY </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> lastScrollY);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#B392F0;">      clearTimeout</span><span style="color:#E1E4E8;">(scrollTimer);</span></span>
<span class="line"><span style="color:#E1E4E8;">      scrollTimer </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 快速滚动时预加载更多内容</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (scrollSpeed </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">preloadViewportContent</span><span style="color:#E1E4E8;">(currentScrollY);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      lastScrollY </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentScrollY;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 预加载即将进入视口的内容</span></span>
<span class="line"><span style="color:#B392F0;">  preloadViewportContent</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scrollPosition</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> viewportHeight</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.innerHeight;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> preloadDistance</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> viewportHeight </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 提前2屏加载</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[data-lazy][data-loaded=&quot;false&quot;]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> rect</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">getBoundingClientRect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> elementTop</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> rect.top </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> scrollPosition;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 如果元素在预加载范围内</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (elementTop </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> scrollPosition </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> viewportHeight </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> preloadDistance) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadResource</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">        element.dataset.loaded </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;true&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="preloading-prefetching" tabindex="-1">预加载与预获取 <a class="header-anchor" href="#preloading-prefetching" aria-label="Permalink to &quot;预加载与预获取 {#preloading-prefetching}&quot;">​</a></h2><p>预加载强制浏览器提前获取关键资源，预获取在空闲时缓存可能需要的资源。两者结合确保即时需求及时满足，预测需求提前准备。</p><p>特点：预加载用于<strong>确定需求</strong>的资源，预获取用于<strong>可能需求</strong>的资源。需要基于用户行为分析精确预测。</p><p>示意图： 预加载时机： 当前页面关键资源 → 高优先级立即加载 预获取时机： 下一页可能资源 → 低优先级空闲加载 预测依据：用户历史 + 行为模式 + 页面结构</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 智能预加载管理器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PreloadManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.preloaded </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.prefetched </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 基于页面结构预加载</span></span>
<span class="line"><span style="color:#B392F0;">  preloadBasedOnStructure</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> criticalResources</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">analyzeCriticalResources</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    criticalResources.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resource</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.preloaded.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(resource.url)) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">preloadResource</span><span style="color:#E1E4E8;">(resource);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.preloaded.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(resource.url);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 分析关键资源</span></span>
<span class="line"><span style="color:#B392F0;">  analyzeCriticalResources</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> resources</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 分析CSS中的字体引用</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> styleSheets</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.styleSheets;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> sheet </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> styleSheets) {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> rules</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> sheet.cssRules </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> sheet.rules;</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> rule </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> rules) {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (rule.style </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> rule.style.fontFamily) {</span></span>
<span class="line"><span style="color:#6A737D;">            // 提取字体资源</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> fontUrls</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">extractFontUrls</span><span style="color:#E1E4E8;">(rule.style.fontFamily);</span></span>
<span class="line"><span style="color:#E1E4E8;">            resources.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">fontUrls.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> ({ url, type: </span><span style="color:#9ECBFF;">&#39;font&#39;</span><span style="color:#E1E4E8;"> })));</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 跨域样式表可能无法访问</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 分析首屏图片</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> viewportImages</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;img[loading=&quot;eager&quot;]&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    viewportImages.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">img</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (img.src </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isInViewport</span><span style="color:#E1E4E8;">(img)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        resources.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ url: img.src, type: </span><span style="color:#9ECBFF;">&#39;image&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> resources;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 基于用户意图预获取</span></span>
<span class="line"><span style="color:#B392F0;">  setupIntentBasedPrefetch</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 链接悬停预获取</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a[href^=&quot;/&quot;]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">link</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mouseenter&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleLinkHover.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;touchstart&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleLinkHover.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 表单交互预获取</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;form&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">form</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      form.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleFormInteraction.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 链接悬停处理</span></span>
<span class="line"><span style="color:#B392F0;">  handleLinkHover</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> link</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> event.currentTarget;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> href</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> link.href;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加延迟，避免过于敏感</span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (link.</span><span style="color:#B392F0;">matches</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;:hover&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> event.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;touchstart&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">prefetchPage</span><span style="color:#E1E4E8;">(href);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 预获取页面</span></span>
<span class="line"><span style="color:#B392F0;">  prefetchPage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.prefetched.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(url)) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 预获取HTML</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> link</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.rel </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;prefetch&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.href </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> url;</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.as </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;document&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.head.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(link);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 分析并预获取页面关键资源</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">analyzeAndPrefetchPageResources</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.prefetched.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 基于网络条件调整策略</span></span>
<span class="line"><span style="color:#B392F0;">  adaptToNetworkConditions</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">navigator.connection) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> connection</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> navigator.connection;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (connection.saveData) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 省流模式：禁用预获取</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disablePrefetch</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (connection.effectiveType </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;slow-2g&#39;</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> connection.effectiveType </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;2g&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 慢速网络：只预加载最关键资源</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">preloadOnlyCritical</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 预加载资源</span></span>
<span class="line"><span style="color:#B392F0;">  preloadResource</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> link</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    link.rel </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;preload&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    link.href </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> resource.url;</span></span>
<span class="line"><span style="color:#E1E4E8;">    link.as </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> resource.type;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (resource.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;font&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.crossOrigin </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;anonymous&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (resource.media) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.media </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> resource.media;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.head.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(link);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="third-party-optimization" tabindex="-1">第三方资源优化 <a class="header-anchor" href="#third-party-optimization" aria-label="Permalink to &quot;第三方资源优化 {#third-party-optimization}&quot;">​</a></h2><p>第三方资源如分析工具、广告、社交媒体插件等往往不可控且影响性能。优化策略包括异步加载、懒加载、资源监控和备用方案。</p><p>特点：第三方资源优化需要<strong>平衡功能</strong>和<strong>性能</strong>。通过合理的加载时机和故障处理，最小化对核心体验的影响。</p><p>示意图： 第三方资源影响： 主线程竞争 → 网络请求竞争 → 内存占用 → 潜在故障 优化策略：异步加载 + 懒加载 + 超时控制 + 降级方案</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 第三方资源管理器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ThirdPartyManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loaded </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pending </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 异步加载第三方脚本</span></span>
<span class="line"><span style="color:#B392F0;">  loadScript</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.loaded.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(url)) {</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pending.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(url)) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.pending.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(url).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ resolve, reject });</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.pending.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(url, [{ resolve, reject }]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> script</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;script&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      script.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> url;</span></span>
<span class="line"><span style="color:#E1E4E8;">      script.async </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (options.crossOrigin) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        script.crossOrigin </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.crossOrigin;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 设置超时</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> timeout</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> options.timeout </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 10000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> timeoutId</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleLoadError</span><span style="color:#E1E4E8;">(url, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Load timeout: \${</span><span style="color:#E1E4E8;">url</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, timeout);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      script.</span><span style="color:#B392F0;">onload</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        clearTimeout</span><span style="color:#E1E4E8;">(timeoutId);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleLoadSuccess</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      script.</span><span style="color:#B392F0;">onerror</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        clearTimeout</span><span style="color:#E1E4E8;">(timeoutId);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleLoadError</span><span style="color:#E1E4E8;">(url, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Failed to load: \${</span><span style="color:#E1E4E8;">url</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 根据优先级插入到合适位置</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">insertScript</span><span style="color:#E1E4E8;">(script, options.priority);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 基于优先级的脚本插入</span></span>
<span class="line"><span style="color:#B392F0;">  insertScript</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">script</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">priority</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;medium&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> head</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.head;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> firstScript</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> head.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;script&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;">(priority) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;high&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">        // 高优先级：尽早执行</span></span>
<span class="line"><span style="color:#E1E4E8;">        head.</span><span style="color:#B392F0;">insertBefore</span><span style="color:#E1E4E8;">(script, firstScript);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;medium&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">        // 中优先级：在现有脚本后</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (firstScript) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          firstScript.parentNode.</span><span style="color:#B392F0;">insertBefore</span><span style="color:#E1E4E8;">(script, firstScript.nextSibling);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          head.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(script);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;low&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">        // 低优先级：最后执行</span></span>
<span class="line"><span style="color:#E1E4E8;">        head.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(script);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 懒加载第三方资源</span></span>
<span class="line"><span style="color:#B392F0;">  lazyLoadThirdParty</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">selector</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> observer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> IntersectionObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      entries.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entry</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (entry.isIntersecting) {</span></span>
<span class="line"><span style="color:#B392F0;">          callback</span><span style="color:#E1E4E8;">(entry.target);</span></span>
<span class="line"><span style="color:#E1E4E8;">          observer.</span><span style="color:#B392F0;">unobserve</span><span style="color:#E1E4E8;">(entry.target);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(selector).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 社交媒体按钮懒加载</span></span>
<span class="line"><span style="color:#B392F0;">  lazyLoadSocialButtons</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">lazyLoadThirdParty</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.social-widget&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> platform</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> element.dataset.platform;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      switch</span><span style="color:#E1E4E8;">(platform) {</span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;twitter&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadTwitterWidget</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#F97583;">          break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;facebook&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadFacebookWidget</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#F97583;">          break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        case</span><span style="color:#9ECBFF;"> &#39;linkedin&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadLinkedInWidget</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#F97583;">          break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 第三方分析优化</span></span>
<span class="line"><span style="color:#B392F0;">  optimizeAnalytics</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 使用requestIdleCallback发送统计</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> sendAnalytics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;requestIdleCallback&#39;</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> window) {</span></span>
<span class="line"><span style="color:#B392F0;">        requestIdleCallback</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadScript</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://www.google-analytics.com/analytics.js&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            priority: </span><span style="color:#9ECBFF;">&#39;low&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 回退方案</span></span>
<span class="line"><span style="color:#B392F0;">        setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadScript</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://www.google-analytics.com/analytics.js&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            priority: </span><span style="color:#9ECBFF;">&#39;low&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 页面加载完成后发送统计</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (document.readyState </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;complete&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">      sendAnalytics</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;load&#39;</span><span style="color:#E1E4E8;">, sendAnalytics);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 处理加载成功</span></span>
<span class="line"><span style="color:#B392F0;">  handleLoadSuccess</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> pending</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pending.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(url) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loaded.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(url, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pending.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    pending.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> resolve</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 处理加载失败</span></span>
<span class="line"><span style="color:#B392F0;">  handleLoadError</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> pending</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pending.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(url) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loaded.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(url, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pending.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Failed to load third-party resource: \${</span><span style="color:#E1E4E8;">url</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    pending.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> reject</span><span style="color:#E1E4E8;">(error));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="caching-strategy" tabindex="-1">缓存策略优化 <a class="header-anchor" href="#caching-strategy" aria-label="Permalink to &quot;缓存策略优化 {#caching-strategy}&quot;">​</a></h2><p>缓存通过存储重复使用的资源减少网络请求。分层缓存策略包括浏览器缓存、Service Worker 缓存和 CDN 缓存。合理的缓存策略平衡新鲜度和性能。</p><p>特点：缓存优化核心是<strong>命中率</strong>和<strong>新鲜度</strong>的平衡。静态资源长期缓存，动态内容条件缓存，个性化内容谨慎缓存。</p><p>示意图： 缓存层次： 内存缓存 (最快) → HTTP 缓存 → Service Worker 缓存 → CDN 缓存 策略选择： 静态资源：长期缓存 + 内容哈希 动态内容：短时间缓存 + 验证刷新 用户数据：不缓存或短期缓存</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Service Worker 缓存策略管理器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CacheStrategyManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.strategies </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupStrategies</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 设置缓存策略</span></span>
<span class="line"><span style="color:#B392F0;">  setupStrategies</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 静态资源 - 缓存优先</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.strategies.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(css</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">woff2)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      strategy: </span><span style="color:#9ECBFF;">&#39;cache-first&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheName: </span><span style="color:#9ECBFF;">&#39;static-assets-v1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxEntries: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxAgeSeconds: </span><span style="color:#79B8FF;">86400</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 365</span><span style="color:#6A737D;"> // 1年</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 图片 - 缓存优先，可过期</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.strategies.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(jpg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">webp</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">avif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">svg)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      strategy: </span><span style="color:#9ECBFF;">&#39;cache-first&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheName: </span><span style="color:#9ECBFF;">&#39;images-v1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxEntries: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxAgeSeconds: </span><span style="color:#79B8FF;">86400</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 30</span><span style="color:#6A737D;"> // 30天</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // API数据 - 网络优先</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.strategies.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">api</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      strategy: </span><span style="color:#9ECBFF;">&#39;network-first&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheName: </span><span style="color:#9ECBFF;">&#39;api-data-v1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxEntries: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxAgeSeconds: </span><span style="color:#79B8FF;">300</span><span style="color:#6A737D;"> // 5分钟</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // HTML页面 - 网络优先</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.strategies.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">(</span><span style="color:#F97583;">$|</span><span style="color:#85E89D;font-weight:bold;">\\?</span><span style="color:#DBEDFF;">)</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      strategy: </span><span style="color:#9ECBFF;">&#39;network-first&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheName: </span><span style="color:#9ECBFF;">&#39;pages-v1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxEntries: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxAgeSeconds: </span><span style="color:#79B8FF;">86400</span><span style="color:#6A737D;"> // 24小时</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 获取资源的缓存策略</span></span>
<span class="line"><span style="color:#B392F0;">  getStrategy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">pattern</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">strategy</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.strategies) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (pattern.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(url)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> strategy;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 默认策略：仅网络</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { strategy: </span><span style="color:#9ECBFF;">&#39;network-only&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 缓存优先实现</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> cacheFirst</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cacheName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cache</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(cacheName);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cachedResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(request);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (cachedResponse) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 检查缓存是否新鲜</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isCacheFresh</span><span style="color:#E1E4E8;">(cachedResponse)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> cachedResponse;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> networkResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(request);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (networkResponse.ok) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 更新缓存</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(request, networkResponse.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> networkResponse;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 网络失败时返回缓存内容（即使不新鲜）</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (cachedResponse) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> cachedResponse;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 网络优先实现</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> networkFirst</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cacheName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> networkResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(request);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (networkResponse.ok) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> cache</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(cacheName);</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(request, networkResponse.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> networkResponse;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> cache</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(cacheName);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> cachedResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(request);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (cachedResponse) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> cachedResponse;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 检查缓存新鲜度</span></span>
<span class="line"><span style="color:#B392F0;">  isCacheFresh</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">cachedResponse</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dateHeader</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cachedResponse.headers.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;date&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">dateHeader) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cacheTime</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">(dateHeader).</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> maxAge</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 86400</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 365</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 1年</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (currentTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> cacheTime) </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> maxAge;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 预缓存关键资源</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> precacheCriticalResources</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> criticalResources</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;/styles/main.css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;/js/app.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;/images/logo.svg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;/fonts/primary.woff2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cache</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;critical-v1&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      criticalResources.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">resource</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(resource);</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (response.ok) {</span></span>
<span class="line"><span style="color:#F97583;">            await</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(resource, response);</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Failed to precache: \${</span><span style="color:#E1E4E8;">resource</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="adaptive-loading" tabindex="-1">自适应加载策略 <a class="header-anchor" href="#adaptive-loading" aria-label="Permalink to &quot;自适应加载策略 {#adaptive-loading}&quot;">​</a></h2><p>自适应加载根据设备能力、网络条件和用户偏好动态调整资源加载策略。使用 Network Information API、Device Memory API 和 Save-Data 头实现精确适配。</p><p>特点：自适应加载强调<strong>上下文感知</strong>和<strong>动态调整</strong>。同一网站在不同环境下提供最适合的资源和体验。</p><p>示意图： 自适应维度： 网络条件 (2G/3G/4G/5G/WiFi) → 设备能力 (内存/CPU) → 用户偏好 (省流模式) 资源调整：图片质量 + 代码分割 + 功能裁剪 + 加载时机</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 自适应加载管理器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> AdaptiveLoadingManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.networkInfo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> navigator.connection;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.deviceMemory </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> navigator.deviceMemory </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 默认4GB</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.saveData </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.networkInfo </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.networkInfo.saveData </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 初始化自适应策略</span></span>
<span class="line"><span style="color:#B392F0;">  init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">applyNetworkAdaptation</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">applyDeviceAdaptation</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">applyUserPreferences</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 网络自适应</span></span>
<span class="line"><span style="color:#B392F0;">  applyNetworkAdaptation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> effectiveType</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.networkInfo </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.networkInfo.effectiveType </span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;4g&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> strategies</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;slow-2g&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getSlow2GStrategy</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;2g&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">get2GStrategy</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;3g&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">get3GStrategy</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;4g&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">get4GStrategy</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> strategy</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> strategies[effectiveType] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> strategies[</span><span style="color:#9ECBFF;">&#39;4g&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">applyLoadingStrategy</span><span style="color:#E1E4E8;">(strategy);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 慢速2G策略</span></span>
<span class="line"><span style="color:#B392F0;">  getSlow2GStrategy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      imageQuality: </span><span style="color:#9ECBFF;">&#39;low&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lazyLoadThreshold: </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      preload: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      prefetch: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      videoAutoplay: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      disableAnimations: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      codeSplitting: </span><span style="color:#9ECBFF;">&#39;minimal&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 设备能力自适应</span></span>
<span class="line"><span style="color:#B392F0;">  applyDeviceAdaptation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.deviceMemory </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 低内存设备优化</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">limitConcurrentDownloads</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">aggressiveMemoryCleanup</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disableHeavyFeatures</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // CPU核心数考虑</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adaptToCPUCores</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 用户偏好适配</span></span>
<span class="line"><span style="color:#B392F0;">  applyUserPreferences</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.saveData) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">enableDataSaverMode</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查减少动画偏好</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (window.</span><span style="color:#B392F0;">matchMedia</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;(prefers-reduced-motion: reduce)&#39;</span><span style="color:#E1E4E8;">).matches) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disableAnimations</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查颜色方案偏好</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> colorScheme</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.</span><span style="color:#B392F0;">matchMedia</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;(prefers-color-scheme: dark)&#39;</span><span style="color:#E1E4E8;">).matches </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;dark&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;light&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">applyColorScheme</span><span style="color:#E1E4E8;">(colorScheme);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 应用加载策略</span></span>
<span class="line"><span style="color:#B392F0;">  applyLoadingStrategy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">strategy</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 调整图片质量</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adjustImageQuality</span><span style="color:#E1E4E8;">(strategy.imageQuality);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 配置懒加载</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setLazyLoadThreshold</span><span style="color:#E1E4E8;">(strategy.lazyLoadThreshold);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 控制预加载</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">togglePreloading</span><span style="color:#E1E4E8;">(strategy.preload);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 禁用动画</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (strategy.disableAnimations) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disableNonEssentialAnimations</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 调整图片质量</span></span>
<span class="line"><span style="color:#B392F0;">  adjustImageQuality</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">quality</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> qualityMap</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;low&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;medium&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">70</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;high&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">85</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;very-high&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">95</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> qualityValue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> qualityMap[quality] </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 70</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 为图片URL添加质量参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;img[data-src]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">img</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> src</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> img.dataset.src;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (src </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">src.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;quality=&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> separator</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> src.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;?&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;&amp;&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;?&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        img.dataset.src </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">src</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">separator</span><span style="color:#9ECBFF;">}quality=\${</span><span style="color:#E1E4E8;">qualityValue</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 设置懒加载阈值</span></span>
<span class="line"><span style="color:#B392F0;">  setLazyLoadThreshold</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">threshold</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 更新Intersection Observer配置</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (window.lazyLoadManager) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.lazyLoadManager.config.rootMargin </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">threshold</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 100</span><span style="color:#9ECBFF;">}px 0px\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 省流模式</span></span>
<span class="line"><span style="color:#B392F0;">  enableDataSaverMode</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.documentElement.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data-saver&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 禁用视频自动播放</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;video[autoplay]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">video</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      video.</span><span style="color:#B392F0;">removeAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;autoplay&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 降低图片质量</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adjustImageQuality</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;low&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 禁用非关键背景图片</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> styles</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;style&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    styles.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">      .data-saver [data-bg] {</span></span>
<span class="line"><span style="color:#9ECBFF;">        background-image: none !important;</span></span>
<span class="line"><span style="color:#9ECBFF;">      }</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.head.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(styles);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 动态加载资源</span></span>
<span class="line"><span style="color:#B392F0;">  loadResourceAdaptive</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> context</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getLoadContext</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> adaptedUrl</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adaptResourceUrl</span><span style="color:#E1E4E8;">(url, context);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadResource</span><span style="color:#E1E4E8;">(adaptedUrl, options);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 获取加载上下文</span></span>
<span class="line"><span style="color:#B392F0;">  getLoadContext</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      network: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.networkInfo </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.networkInfo.effectiveType </span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;4g&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      saveData: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.saveData,</span></span>
<span class="line"><span style="color:#E1E4E8;">      deviceMemory: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.deviceMemory,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cpuCores: navigator.hardwareConcurrency </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 4</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 适配资源URL</span></span>
<span class="line"><span style="color:#B392F0;">  adaptResourceUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 根据上下文修改资源URL参数</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/images/&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adaptImageUrl</span><span style="color:#E1E4E8;">(url, context);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/js/&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adaptScriptUrl</span><span style="color:#E1E4E8;">(url, context);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> url;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 适配图片URL</span></span>
<span class="line"><span style="color:#B392F0;">  adaptImageUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> params</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> URLSearchParams</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 根据网络条件设置质量</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (context.network </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;slow-2g&#39;</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> context.saveData) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      params.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;quality&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;50&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      params.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;format&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;webp&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (context.network </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;2g&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      params.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;quality&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;65&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      params.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;format&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;webp&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (context.network </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;3g&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      params.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;quality&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;75&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      params.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;format&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;webp&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 根据设备内存设置尺寸</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (context.deviceMemory </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      params.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;width&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;800&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> paramString</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> params.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (paramString) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> separator</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;?&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;&amp;&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;?&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">url</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">separator</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">paramString</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> url;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,46)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
