import{_ as a,c as n,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const E=JSON.parse('{"title":"Transform 3D","description":"","frontmatter":{},"headers":[{"level":2,"title":"坐标系","slug":"坐标系","link":"#坐标系","children":[]},{"level":2,"title":"transform-style","slug":"transform-style","link":"#transform-style","children":[]},{"level":2,"title":"transform-origin","slug":"transform-origin","link":"#transform-origin","children":[]},{"level":2,"title":"perspective, perspective-origin","slug":"perspective-perspective-origin","link":"#perspective-perspective-origin","children":[]},{"level":2,"title":"translate3d, translateZ","slug":"translate3d-translatez","link":"#translate3d-translatez","children":[{"level":3,"title":"语法：","slug":"语法","link":"#语法","children":[]}]},{"level":2,"title":"rotate3d, rotateZ","slug":"rotate3d-rotatez","link":"#rotate3d-rotatez","children":[{"level":3,"title":"语法：","slug":"语法-1","link":"#语法-1","children":[]},{"level":3,"title":"示例：","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"scale3d, scaleZ","slug":"scale3d-scalez","link":"#scale3d-scalez","children":[]},{"level":2,"title":"matrix3d","slug":"matrix3d","link":"#matrix3d","children":[{"level":3,"title":"语法：","slug":"语法-2","link":"#语法-2","children":[]},{"level":3,"title":"计算原理","slug":"计算原理","link":"#计算原理","children":[]}]}],"relativePath":"basic/css/transform-3d.md","filePath":"basic/css/transform-3d.md"}'),e={name:"basic/css/transform-3d.md"};function c(t,s,o,r,i,d){return l(),n("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/css/transform-3d.md for this page in Markdown format</div><h1 id="transform-3d" tabindex="-1">Transform 3D <a class="header-anchor" href="#transform-3d" aria-label="Permalink to &quot;Transform 3D&quot;">​</a></h1><p>CSS 的 <code>transform</code> 属性提供了强大的图形变换功能，可以对网页元素进行平面和三维空间中的旋转、缩放、平移等操作。</p><h2 id="坐标系" tabindex="-1">坐标系 <a class="header-anchor" href="#坐标系" aria-label="Permalink to &quot;坐标系&quot;">​</a></h2><p>坐标系用于描述网页中的位置和方向。</p><ul><li>X 轴：屏幕水平方向，向右为正</li><li>Y 轴：屏幕垂直方向，向下为正</li><li>Z 轴：屏幕深度方向，从屏幕背面朝向正面为正</li><li>零点：根据元素的位置、动画、样式等确定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span> z</span></span>
<span class="line"><span>  \\</span></span>
<span class="line"><span>   \\</span></span>
<span class="line"><span>    \\</span></span>
<span class="line"><span>     \\</span></span>
<span class="line"><span>      \\</span></span>
<span class="line"><span>       +-------------------&gt;x</span></span>
<span class="line"><span>       |</span></span>
<span class="line"><span>       |</span></span>
<span class="line"><span>       |    显示屏正面</span></span>
<span class="line"><span>       |</span></span>
<span class="line"><span>       |</span></span>
<span class="line"><span>       |</span></span>
<span class="line"><span>       |</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>       y</span></span></code></pre></div><h2 id="transform-style" tabindex="-1">transform-style <a class="header-anchor" href="#transform-style" aria-label="Permalink to &quot;transform-style&quot;">​</a></h2><p>transform-style 是 CSS 的一个属性，主要用于控制 3D 转换元素的子元素如何在 3D 空间中呈现。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#85E89D;">transform-style</span><span style="color:#E1E4E8;">: flat | </span><span style="color:#85E89D;">preserve-3d</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * flat: 默认值，所有的子元素都将被平面化，不会被放置到3D空间中。</span></span>
<span class="line"><span style="color:#6A737D;"> *       即使你对父元素进行了3D转换，子元素的视觉效果仍然是二维的。</span></span>
<span class="line"><span style="color:#6A737D;"> * preserve-3d: 保留子元素在3D空间中的效果，允许它们进行 3D 转换。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="transform-origin" tabindex="-1">transform-origin <a class="header-anchor" href="#transform-origin" aria-label="Permalink to &quot;transform-origin&quot;">​</a></h2><p><code>transform-origin</code> 属性定义 <code>transform</code> 的基准点，此点坐标为 (0，0，0)，再按 x 轴、y 轴、z 轴的方向生成坐标系，计算出每个像素点的坐标。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#85E89D;">transform-origin</span><span style="color:#E1E4E8;">: </span><span style="color:#85E89D;">x-axis</span><span style="color:#85E89D;"> y-axis</span><span style="color:#85E89D;"> z-axis</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * x-axis：x方向的原点位置，默认是元素的中心点</span></span>
<span class="line"><span style="color:#6A737D;"> * 可选值有: center, left, right, Npx, N%</span></span>
<span class="line"><span style="color:#6A737D;"> * y-axis：y方向的原点位置，默认是元素的中心点</span></span>
<span class="line"><span style="color:#6A737D;"> * 可选值: center, top, bottom, Npx, N%</span></span>
<span class="line"><span style="color:#6A737D;"> * z-axis：z方向的原点位置，默认是元素的中心点</span></span>
<span class="line"><span style="color:#6A737D;"> * 可选值: Npx</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>默认原点 (50% 50%) (center, center)</span></span>
<span class="line"><span>┌───────────┐</span></span>
<span class="line"><span>│           │</span></span>
<span class="line"><span>│     •     │</span></span>
<span class="line"><span>│     ⭡     │</span></span>
<span class="line"><span>└───────────┘</span></span>
<span class="line"><span></span></span>
<span class="line"><span>左上角原点 (0 0) (left, top)</span></span>
<span class="line"><span>⭣</span></span>
<span class="line"><span>•───────────┐</span></span>
<span class="line"><span>│           |</span></span>
<span class="line"><span>│           │</span></span>
<span class="line"><span>│           │</span></span>
<span class="line"><span>└───────────┘</span></span>
<span class="line"><span></span></span>
<span class="line"><span>右下角原点 (100% 100%) (right, bottom)</span></span>
<span class="line"><span>┌───────────┐</span></span>
<span class="line"><span>│           │</span></span>
<span class="line"><span>│           │</span></span>
<span class="line"><span>│           │</span></span>
<span class="line"><span>└───────────•</span></span>
<span class="line"><span>            ⭡</span></span></code></pre></div><h2 id="perspective-perspective-origin" tabindex="-1">perspective, perspective-origin <a class="header-anchor" href="#perspective-perspective-origin" aria-label="Permalink to &quot;perspective, perspective-origin&quot;">​</a></h2><p>perspective 定义了观察者在 z 轴上的位置。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.element</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  perspective</span><span style="color:#E1E4E8;">: &lt;length&gt;;</span></span>
<span class="line"><span style="color:#79B8FF;">  perspective-origin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">x</span><span style="color:#79B8FF;"> y</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">  /**</span></span>
<span class="line"><span style="color:#6A737D;">   * x：观察者在x方向的位置，默认是元素的中心点</span></span>
<span class="line"><span style="color:#6A737D;">   * 可选值有: center, left, right, Npx, N%</span></span>
<span class="line"><span style="color:#6A737D;">   * y：观察者在y方向的位置，默认是元素的中心点</span></span>
<span class="line"><span style="color:#6A737D;">   * 可选值: center, top, bottom, Npx, N%</span></span>
<span class="line"><span style="color:#6A737D;">   * length: 观察者在z方向的位置，默认是0</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>对于 3d 变换元素的子元素，可以定义自己的 <code>perspective</code></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.parent</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  transform-style</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">preserve-3d</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  perspective</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.parent</span><span style="color:#B392F0;"> .child</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  perspective</span><span style="color:#E1E4E8;">: &lt;length&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="translate3d-translatez" tabindex="-1">translate3d, translateZ <a class="header-anchor" href="#translate3d-translatez" aria-label="Permalink to &quot;translate3d, translateZ&quot;">​</a></h2><p>位移变换可以移动元素的位置。使用 <code>translate3d</code> 方法，可以在 X、Y、Z 三个轴上进行平移。</p><h3 id="语法" tabindex="-1">语法： <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法：&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">transform: translate3d(x, y, z);</span></span>
<span class="line"><span style="color:#6A737D;">/* 等价于 translateX(x) translateY(y) translateZ(z) */</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">transform: translateZ(z);</span></span>
<span class="line"><span style="color:#6A737D;">/* 等价于 translate3d(0, 0, z) */</span></span></code></pre></div><h2 id="rotate3d-rotatez" tabindex="-1">rotate3d, rotateZ <a class="header-anchor" href="#rotate3d-rotatez" aria-label="Permalink to &quot;rotate3d, rotateZ&quot;">​</a></h2><p><code>rotate3d</code> 用于在三维空间中围绕指定轴进行旋转。它需要四个参数：旋转轴的方向 (X，Y，Z) 和旋转角度。</p><h3 id="语法-1" tabindex="-1">语法： <a class="header-anchor" href="#语法-1" aria-label="Permalink to &quot;语法：&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">transform: rotate3d(x, y, z, angle);</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * \`x\`, \`y\`, \`z\`：指定旋转轴的向量。</span></span>
<span class="line"><span style="color:#6A737D;"> * \`angle\`：旋转角度，单位为度（deg）或弧度（rad）。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">transform: rotateZ(angle);</span></span>
<span class="line"><span style="color:#6A737D;">/* 等价于 rotate3d(0, 0, 1, angle) */</span></span></code></pre></div><h3 id="示例" tabindex="-1">示例： <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例：&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  /* 绕 (0, 0, 0) 指向 (1, 1, 1) 的轴 顺时针旋转 45 度 */</span></span>
<span class="line"><span style="color:#79B8FF;">  transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">rotate3d</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">45</span><span style="color:#F97583;">deg</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="scale3d-scalez" tabindex="-1">scale3d, scaleZ <a class="header-anchor" href="#scale3d-scalez" aria-label="Permalink to &quot;scale3d, scaleZ&quot;">​</a></h2><p><code>scale3d</code> 允许在三维空间内对元素进行缩放。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">transform: scale3d(x, y, z);</span></span>
<span class="line"><span style="color:#6A737D;">/* 等价于 transform: scaleX(x) scaleY(y) scaleZ(z) */</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">transform: scaleZ(z);</span></span>
<span class="line"><span style="color:#6A737D;">/* 等价于 transform: scale(1, 1, z) */</span></span></code></pre></div><h2 id="matrix3d" tabindex="-1">matrix3d <a class="header-anchor" href="#matrix3d" aria-label="Permalink to &quot;matrix3d&quot;">​</a></h2><p><code>matrix3d</code> 是 CSS3 提供的一种强大的变换方式，它允许通过一个 4x4 矩阵来实现复杂的三维变换。矩阵变换提供了对多个变换操作的综合控制，包括平移、旋转、缩放等。</p><h3 id="语法-2" tabindex="-1">语法： <a class="header-anchor" href="#语法-2" aria-label="Permalink to &quot;语法：&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">transform: matrix3d(</span></span>
<span class="line"><span style="color:#E1E4E8;">  a1,</span></span>
<span class="line"><span style="color:#E1E4E8;">  b1,</span></span>
<span class="line"><span style="color:#E1E4E8;">  c1,</span></span>
<span class="line"><span style="color:#E1E4E8;">  d1,</span></span>
<span class="line"><span style="color:#E1E4E8;">  a2,</span></span>
<span class="line"><span style="color:#E1E4E8;">  b2,</span></span>
<span class="line"><span style="color:#E1E4E8;">  c2,</span></span>
<span class="line"><span style="color:#E1E4E8;">  d2,</span></span>
<span class="line"><span style="color:#E1E4E8;">  a3,</span></span>
<span class="line"><span style="color:#E1E4E8;">  b3,</span></span>
<span class="line"><span style="color:#E1E4E8;">  c3,</span></span>
<span class="line"><span style="color:#E1E4E8;">  d3,</span></span>
<span class="line"><span style="color:#E1E4E8;">  a4,</span></span>
<span class="line"><span style="color:#E1E4E8;">  b4,</span></span>
<span class="line"><span style="color:#E1E4E8;">  c4,</span></span>
<span class="line"><span style="color:#E1E4E8;">  d4</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre></div><p>这是一个 4x4 的矩阵，每个值对应着变换的系数，具体定义如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[ a1 b1 c1 d1 ]</span></span>
<span class="line"><span>[ a2 b2 c2 d2 ]</span></span>
<span class="line"><span>[ a3 b3 c3 d3 ]</span></span>
<span class="line"><span>[ a4 b4 c4 d4 ]</span></span></code></pre></div><h3 id="计算原理" tabindex="-1">计算原理 <a class="header-anchor" href="#计算原理" aria-label="Permalink to &quot;计算原理&quot;">​</a></h3><p>假如有一个坐标点 (x，y，z)，经过上述转换得到 (x ‘，y’，z ‘)，其计算过程为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>注: C为常数</span></span>
<span class="line"><span></span></span>
<span class="line"><span> [  x&#39; ]          [ a1 b1 c1 d1 ]     [ x ]</span></span>
<span class="line"><span> [  y&#39; ]   =  C * [ a2 b2 c2 d2 ]  *  [ y ]</span></span>
<span class="line"><span> [  z&#39; ]          [ a3 b3 c3 d3 ]     [ z ]</span></span>
<span class="line"><span> [  1  ]          [ a4 b4 c4 d4 ]     [ 1 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                   [   a1*x+b1*y+c1*z+d1   ]</span></span>
<span class="line"><span>           =  C *  [   a2*x+b2*y+c2*z+d2   ]</span></span>
<span class="line"><span>                   [   a3*x+b3*y+c3*z+d3   ]</span></span>
<span class="line"><span>                   [   a4*x+b4*y+c4*z+d4   ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由最后一项可求出C，则得出</span></span>
<span class="line"><span> [  x&#39; ]       [   (a1*x+b1*y+c1*z+d1)/(a4*x+b4*y+c4*z+d4)   ]</span></span>
<span class="line"><span> [  y&#39; ]   =   [   (a2*x+b2*y+c2*z+d2)/(a4*x+b4*y+c4*z+d4)   ]</span></span>
<span class="line"><span> [  z&#39; ]       [   (a3*x+b3*y+c3*z+d3)/(a4*x+b4*y+c4*z+d4)   ]</span></span>
<span class="line"><span> [  1  ]       [                       1                     ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>x&#39; = (a1*x+b1*y+c1*z+d1)/(a4*x+b4*y+c4*z+d4)</span></span>
<span class="line"><span>y&#39; = (a2*x+b2*y+c2*z+d2)/(a4*x+b4*y+c4*z+d4)</span></span>
<span class="line"><span>z&#39; = (a3*x+b3*y+c3*z+d3)/(a4*x+b4*y+c4*z+d4)</span></span></code></pre></div>`,44)])])}const b=a(e,[["render",c]]);export{E as __pageData,b as default};
