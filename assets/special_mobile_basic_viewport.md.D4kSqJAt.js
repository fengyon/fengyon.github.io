import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const y=JSON.parse('{"title":"视窗与分辨率","description":"","frontmatter":{},"headers":[{"level":2,"title":"视窗概念与类型","slug":"视窗概念与类型","link":"#视窗概念与类型","children":[]},{"level":2,"title":"分辨率基础","slug":"分辨率基础","link":"#分辨率基础","children":[]},{"level":2,"title":"像素密度与比例因子","slug":"像素密度与比例因子","link":"#像素密度与比例因子","children":[]},{"level":2,"title":"视窗配置与适配","slug":"视窗配置与适配","link":"#视窗配置与适配","children":[]},{"level":2,"title":"响应式断点策略","slug":"响应式断点策略","link":"#响应式断点策略","children":[]},{"level":2,"title":"常见适配问题与解决方案","slug":"常见适配问题与解决方案","link":"#常见适配问题与解决方案","children":[]}],"relativePath":"special/mobile/basic/viewport.md","filePath":"special/mobile/basic/viewport.md"}'),e={name:"special/mobile/basic/viewport.md"};function o(t,s,c,i,r,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/mobile/basic/viewport.md for this page in Markdown format</div><h1 id="视窗与分辨率" tabindex="-1">视窗与分辨率 <a class="header-anchor" href="#视窗与分辨率" aria-label="Permalink to &quot;视窗与分辨率&quot;">​</a></h1><p>视窗与分辨率是移动端开发中影响用户体验的核心概念。理解它们之间的关系和差异对于创建适配多种设备的界面至关重要，直接决定了应用在不同屏幕上的显示效果和布局适应性。</p><h2 id="视窗概念与类型" tabindex="-1">视窗概念与类型 <a class="header-anchor" href="#视窗概念与类型" aria-label="Permalink to &quot;视窗概念与类型&quot;">​</a></h2><p>视窗是指用户能够看到网页或应用内容的区域面积，在移动端开发中具有特殊重要性。</p><ul><li><p><strong>布局视窗</strong>：网页元素的总体布局容器，在移动浏览器中通常比设备屏幕宽。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[布局视窗 - 比屏幕宽]</span></span>
<span class="line"><span>┌─────────────────────┐</span></span>
<span class="line"><span>│ 网页完整宽度内容 │ ← 可横向滚动</span></span>
<span class="line"><span>└─────────────────────┘</span></span>
<span class="line"><span>例如：在手机上访问桌面网站时，需要左右滚动才能看到全部内容。</span></span></code></pre></div></li><li><p><strong>视觉视窗</strong>：用户当前实际看到的屏幕区域，随缩放操作而变化。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>缩放前：</span></span>
<span class="line"><span>[视觉视窗]</span></span>
<span class="line"><span>┌──────────┐</span></span>
<span class="line"><span>│ 可见内容 │</span></span>
<span class="line"><span>└──────────┘</span></span>
<span class="line"><span></span></span>
<span class="line"><span>放大后：</span></span>
<span class="line"><span>[视觉视窗]</span></span>
<span class="line"><span>┌────┐</span></span>
<span class="line"><span>│ 部分 │ ← 看到的内容变少</span></span>
<span class="line"><span>└────┘</span></span></code></pre></div></li><li><p><strong>理想视窗</strong>：针对移动设备优化的视窗设置，通过 viewport 元标签控制。</p></li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">meta</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#B392F0;"> content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>效果： 桌面布局 → 移动适配布局 需要缩放 → 完美适配屏幕</p><h2 id="分辨率基础" tabindex="-1">分辨率基础 <a class="header-anchor" href="#分辨率基础" aria-label="Permalink to &quot;分辨率基础&quot;">​</a></h2><p>分辨率描述了屏幕显示细节的精细程度，分为物理和逻辑两种类型。</p><ul><li><p><strong>物理分辨率</strong>：屏幕实际拥有的像素数量，通常表示为宽度 × 高度。</p><p>示例设备： iPhone 15 Pro Max：1290×2796 像素 Samsung Galaxy S24：1080×2340 像素</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>  物理像素网格：</span></span>
<span class="line"><span>  ┌─┬─┬─┬─┐</span></span>
<span class="line"><span>  │■│■│■│■│ ← 每个 ■ 代表一个物理像素</span></span>
<span class="line"><span>  ├─┼─┼─┼─┤</span></span>
<span class="line"><span>  │■│■│■│■│</span></span>
<span class="line"><span>  └─┴─┴─┴─┘</span></span></code></pre></div><ul><li><strong>逻辑分辨率</strong>：开发中使用的抽象像素单位，也称为设备独立像素。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>  物理像素与逻辑像素关系：</span></span>
<span class="line"><span>  高密度屏幕：1 逻辑像素 = 4 物理像素</span></span>
<span class="line"><span>  ┌───┐</span></span>
<span class="line"><span>  │███│ ← 逻辑像素</span></span>
<span class="line"><span>  │███│</span></span>
<span class="line"><span>  └───┘</span></span>
<span class="line"><span>  实际由：</span></span>
<span class="line"><span>  ┌─┬─┐</span></span>
<span class="line"><span>  │■│■│ ← 物理像素</span></span>
<span class="line"><span>  ├─┼─┤</span></span>
<span class="line"><span>  │■│■│</span></span>
<span class="line"><span>  └─┴─┘</span></span>
<span class="line"><span>  组成</span></span></code></pre></div><h2 id="像素密度与比例因子" tabindex="-1">像素密度与比例因子 <a class="header-anchor" href="#像素密度与比例因子" aria-label="Permalink to &quot;像素密度与比例因子&quot;">​</a></h2><p>像素密度决定了屏幕显示的清晰度，比例因子在物理像素和逻辑像素之间建立桥梁。</p><ul><li><p><strong>PPI 计算</strong>：每英寸像素数，衡量屏幕密度。</p><p>公式：PPI = √ (宽度像素 ² + 高度像素 ²) / 对角线英寸数</p><p>示例：设备宽度 1080px，高度 2340px，屏幕尺寸 6.1 英寸 PPI = √(1080² + 2340²) / 6.1 ≈ 413 PPI</p></li><li><p><strong>比例因子</strong>：物理像素与逻辑像素的换算比率。</p><p>常见设备比例因子： 普通密度：@1x (iPhone 3GS) 高密度：@2x (iPhone 4-8) 超高密度：@3x (iPhone X 及更新机型)</p><p>资源适配： 图标设计： @1x：50×50 像素 @2x：100×100 像素<br> @3x：150×150 像素</p></li></ul><h2 id="视窗配置与适配" tabindex="-1">视窗配置与适配 <a class="header-anchor" href="#视窗配置与适配" aria-label="Permalink to &quot;视窗配置与适配&quot;">​</a></h2><p>正确的视窗配置是移动端适配的基础，通过 HTML meta 标签和 CSS 技术实现。</p><ul><li><p><strong>Viewport Meta 标签</strong>：控制移动浏览器的视窗行为。</p><p>标准配置：</p><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"><p>参数说明： width=device-width → 视窗宽度=设备宽度 initial-scale=1 → 初始缩放级别=1 user-scalable=no → 禁止用户缩放</p></li><li><p><strong>CSS 视窗单位</strong>：相对于视窗尺寸的动态单位。</p><p>单位示例： vw：视窗宽度的 1% vh：视窗高度的 1% vmin：视窗较小尺寸的 1% vmax：视窗较大尺寸的 1%</p><p>使用效果：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.element</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">vw</span><span style="color:#E1E4E8;">; /_ 总是视窗宽度的一半 _/</span></span>
<span class="line"><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">vh</span><span style="color:#E1E4E8;">; /_ 总是视窗高度 _/</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></li></ul><h2 id="响应式断点策略" tabindex="-1">响应式断点策略 <a class="header-anchor" href="#响应式断点策略" aria-label="Permalink to &quot;响应式断点策略&quot;">​</a></h2><p>基于屏幕尺寸的断点系统确保布局在不同设备上都能正常显示。</p><ul><li><p><strong>常用断点参考</strong>： 手机：0-768px 平板：768-1024px<br> 桌面：1024px 以上</p></li><li><p><strong>移动优先设计</strong>：从小屏幕开始向上适配的开发方法。</p><p>代码示例：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 基础样式 - 手机优先 */</span></span>
<span class="line"><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 平板适配 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 桌面适配 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1024</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></li></ul><h2 id="常见适配问题与解决方案" tabindex="-1">常见适配问题与解决方案 <a class="header-anchor" href="#常见适配问题与解决方案" aria-label="Permalink to &quot;常见适配问题与解决方案&quot;">​</a></h2><p>移动端视窗与分辨率适配中经常遇到的问题及应对方法。</p><ul><li><p><strong>图片模糊问题</strong>：在高密度屏幕上显示低分辨率图片导致的模糊。</p><p>解决方案： 使用 srcset 属性：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span></span>
<span class="line"><span style="color:#B392F0;">  src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image-1x.jpg&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  srcset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image-2x.jpg 2x, image-3x.jpg 3x&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;自适应图片&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span></code></pre></div><p>效果：浏览器根据设备像素比自动选择合适图片。</p></li><li><p><strong>视窗高度问题</strong>：移动浏览器地址栏导致的视窗高度变化。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始状态：</span></span>
<span class="line"><span>[地址栏]</span></span>
<span class="line"><span>[100vh 内容 - 被截断]</span></span>
<span class="line"><span>[工具栏]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>滚动后：</span></span>
<span class="line"><span>[地址栏隐藏]</span></span>
<span class="line"><span>[100vh 内容 - 完全显示]</span></span>
<span class="line"><span>[工具栏]</span></span></code></pre></div><p>解决方案：使用 dvh 单位</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.full-screen</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">dvh</span><span style="color:#E1E4E8;">; /_ 动态视窗高度 _/</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></li><li><p><strong>安全区域适配</strong>：刘海屏和圆角切割问题。</p><p>示意图： 不安全区域： ┌──────┐ │######│ ← 刘海区域 │ 内容被遮挡 │ └──────┘</p><p>安全区域： ┌──────┐ │######│ │ 可见内容 │ ← 通过 padding 调整 └──────┘</p><p>CSS 解决方案：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.safe-area</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  padding-top</span><span style="color:#E1E4E8;">: env(safe-area-inset-top);</span></span>
<span class="line"><span style="color:#79B8FF;">  padding-bottom</span><span style="color:#E1E4E8;">: env(safe-area-inset-bottom);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></li></ul>`,26)])])}const u=a(e,[["render",o]]);export{y as __pageData,u as default};
