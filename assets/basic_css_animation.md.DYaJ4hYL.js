import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const y=JSON.parse('{"title":"CSS 动画","description":"","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"坐标系","slug":"坐标系","link":"#坐标系","children":[]},{"level":2,"title":"transform","slug":"transform","link":"#transform","children":[{"level":3,"title":"transform-origin (变换基准点)","slug":"transform-origin-变换基准点","link":"#transform-origin-变换基准点","children":[]},{"level":3,"title":"translate (位移)","slug":"translate-位移","link":"#translate-位移","children":[]},{"level":3,"title":"rotate (旋转)","slug":"rotate-旋转","link":"#rotate-旋转","children":[]},{"level":3,"title":"scale (缩放)","slug":"scale-缩放","link":"#scale-缩放","children":[]},{"level":3,"title":"skew (倾斜)","slug":"skew-倾斜","link":"#skew-倾斜","children":[]},{"level":3,"title":"matrix (矩阵变换)","slug":"matrix-矩阵变换","link":"#matrix-矩阵变换","children":[]}]},{"level":2,"title":"transition","slug":"transition","link":"#transition","children":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]}]},{"level":2,"title":"animation","slug":"animation","link":"#animation","children":[{"level":3,"title":"animation-name (动画名称)","slug":"animation-name-动画名称","link":"#animation-name-动画名称","children":[]},{"level":3,"title":"animation-direction (动画方向)","slug":"animation-direction-动画方向","link":"#animation-direction-动画方向","children":[]},{"level":3,"title":"animation-iteration-count (重复次数)","slug":"animation-iteration-count-重复次数","link":"#animation-iteration-count-重复次数","children":[]},{"level":3,"title":"animation-fill-mode (填充模式)","slug":"animation-fill-mode-填充模式","link":"#animation-fill-mode-填充模式","children":[]},{"level":3,"title":"Timing Functions (缓动函数)","slug":"timing-functions-缓动函数","link":"#timing-functions-缓动函数","children":[]}]}],"relativePath":"basic/css/animation.md","filePath":"basic/css/animation.md"}'),e={name:"basic/css/animation.md"};function i(t,s,o,c,r,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/css/animation.md for this page in Markdown format</div><h1 id="css-动画" tabindex="-1">CSS 动画 <a class="header-anchor" href="#css-动画" aria-label="Permalink to &quot;CSS 动画&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>CSS 动画允许元素的样式在不同时间发生特定变化，而无需使用 JavaScript。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>静态元素  →  [动画过程]  →  结束状态</span></span>
<span class="line"><span>   ↓            ↓           ↓</span></span>
<span class="line"><span>初始样式      中间状态      最终样式</span></span></code></pre></div><h2 id="坐标系" tabindex="-1">坐标系 <a class="header-anchor" href="#坐标系" aria-label="Permalink to &quot;坐标系&quot;">​</a></h2><p>坐标系用于描述网页中的位置和方向。</p><ul><li>X 轴：屏幕水平方向，向右为正</li><li>Y 轴：屏幕垂直方向，向下为正</li><li>Z 轴：屏幕深度方向，从屏幕背面朝向正面为正</li><li>零点：根据元素的位置、动画、样式等确定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span> z</span></span>
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
<span class="line"><span>       y</span></span></code></pre></div><h2 id="transform" tabindex="-1">transform <a class="header-anchor" href="#transform" aria-label="Permalink to &quot;transform&quot;">​</a></h2><p><code>transform</code> 可以对元素进行旋转、缩放、移动或倾斜等变换。</p><h3 id="transform-origin-变换基准点" tabindex="-1">transform-origin (变换基准点) <a class="header-anchor" href="#transform-origin-变换基准点" aria-label="Permalink to &quot;transform-origin (变换基准点)&quot;">​</a></h3><p><code>transform-origin</code> 属性定义 <code>transform</code> 的基准点，此点坐标为 (0，0，0)，再按 x 轴、y 轴、z 轴的方向生成坐标系，计算出每个像素点的坐标。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#85E89D;">transform-origin</span><span style="color:#E1E4E8;">: </span><span style="color:#85E89D;">x-axis</span><span style="color:#85E89D;"> y-axis</span><span style="color:#85E89D;"> z-axis</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * x-axis：x方向的原点位置，默认是元素的中心点</span></span>
<span class="line"><span style="color:#6A737D;"> * 可选值有: center, left, right, Npx, N%</span></span>
<span class="line"><span style="color:#6A737D;"> * y-axis：y方向的原点位置，默认是元素的中心点</span></span>
<span class="line"><span style="color:#6A737D;"> * 可选值: center, top, bottom, Npx, N%</span></span>
<span class="line"><span style="color:#6A737D;"> * z-axis：z方向的原点位置，默认是元素的中心点</span></span>
<span class="line"><span style="color:#6A737D;"> * 可选值: Npx Nem ，，，</span></span>
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
<span class="line"><span>            ⭡</span></span></code></pre></div><h3 id="translate-位移" tabindex="-1">translate (位移) <a class="header-anchor" href="#translate-位移" aria-label="Permalink to &quot;translate (位移)&quot;">​</a></h3><p>将元素从当前位置移动。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">transform: translate(50px, -30px);</span></span>
<span class="line"><span style="color:#6A737D;">/* 等价于 transform: translateX(50px) translateY(-30px) */</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>变换前：</span></span>
<span class="line"><span>┌─────────────┐</span></span>
<span class="line"><span>│             │</span></span>
<span class="line"><span>│   元素      │</span></span>
<span class="line"><span>│             │</span></span>
<span class="line"><span>└─────────────┘</span></span>
<span class="line"><span>    原点 (0,0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>变换后：</span></span>
<span class="line"><span> ┌───────────────────────────────</span></span>
<span class="line"><span> |</span></span>
<span class="line"><span> |         ┌─────────────┐</span></span>
<span class="line"><span> |         │             │</span></span>
<span class="line"><span> |         │   元素      │</span></span>
<span class="line"><span> |         │             │</span></span>
<span class="line"><span> |         └─────────────┘</span></span>
<span class="line"><span>           距离原点 (50,-30)</span></span></code></pre></div><h3 id="rotate-旋转" tabindex="-1">rotate (旋转) <a class="header-anchor" href="#rotate-旋转" aria-label="Permalink to &quot;rotate (旋转)&quot;">​</a></h3><p>围绕变换原点按顺时针方向旋转元素。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">transform: rotate(90deg);</span></span>
<span class="line"><span style="color:#6A737D;">/* 可以通过 transform-origin 定义旋转原点 */</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>旋转前：  ↷     旋转90度后：</span></span>
<span class="line"><span>┌─────┐</span></span>
<span class="line"><span>│     │       ┌──────────┐</span></span>
<span class="line"><span>│     │  --&gt;  |          |</span></span>
<span class="line"><span>│     │       └──────────┘</span></span>
<span class="line"><span>└─────┘</span></span></code></pre></div><h3 id="scale-缩放" tabindex="-1">scale (缩放) <a class="header-anchor" href="#scale-缩放" aria-label="Permalink to &quot;scale (缩放)&quot;">​</a></h3><p>改变元素的尺寸。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">transform: scale(1</span><span style="color:#B392F0;">.5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">/* 等价于 transform: scaleX(1.5) scaleY(1.5) */</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>缩放前：       scale(1.5) 放大1.5倍</span></span>
<span class="line"><span>┌──────┐        ┌────────────┐</span></span>
<span class="line"><span>│ 元素 │        │            │</span></span>
<span class="line"><span>│      │  --&gt;   │    元素    │</span></span>
<span class="line"><span>└──────┘        │            │</span></span>
<span class="line"><span>                │            │</span></span>
<span class="line"><span>                └────────────┘</span></span></code></pre></div><h3 id="skew-倾斜" tabindex="-1">skew (倾斜) <a class="header-anchor" href="#skew-倾斜" aria-label="Permalink to &quot;skew (倾斜)&quot;">​</a></h3><p>往 X 轴，Y 轴方向倾斜元素。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* transform: skew(ax, ay) */</span></span>
<span class="line"><span style="color:#E1E4E8;">transform: skew(30deg);</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 其变换后的坐标点为</span></span>
<span class="line"><span style="color:#6A737D;"> * x&#39; = x + tan(ay) * y</span></span>
<span class="line"><span style="color:#6A737D;"> * y&#39; = y + tan(ax) * x</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>skewX(30deg)</span></span>
<span class="line"><span>坐标系0点为元素中心点</span></span>
<span class="line"><span>x&#39; = x + 1.57 * y</span></span>
<span class="line"><span>y&#39; = y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       倾斜前：           倾斜后：</span></span>
<span class="line"><span>(-1,-1)   (1,-1)   (-1.57, -1)</span></span>
<span class="line"><span>       ┌─────┐         ──────  (0.57, -1)</span></span>
<span class="line"><span>       │  ·  │ -----&gt;   \\  ·  \\</span></span>
<span class="line"><span>       └─────┘           ──────  (1.57, 1)</span></span>
<span class="line"><span> (-1,1)     (1,1)     (-0.43, 1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>skewY(60deg)</span></span>
<span class="line"><span>坐标系0点为元素中心点</span></span>
<span class="line"><span>x&#39; = x</span></span>
<span class="line"><span>y&#39; = y + 1.73 * x</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       倾斜前：           倾斜后：</span></span>
<span class="line"><span>(-1,-1)   (1,-1)         (-1, -1.73)</span></span>
<span class="line"><span>       ┌─────┐              |\\</span></span>
<span class="line"><span>       │  ·  │ --------&gt;    | \\</span></span>
<span class="line"><span>       └─────┘              |  \\</span></span>
<span class="line"><span> (-1,1)     (1,1) (-1,-0.73) \\ ·\\  (1, 0.73)</span></span>
<span class="line"><span>                              \\  |</span></span>
<span class="line"><span>                               \\ |</span></span>
<span class="line"><span>                                \\|</span></span>
<span class="line"><span>                                (1, 2.73)</span></span></code></pre></div><h3 id="matrix-矩阵变换" tabindex="-1">matrix (矩阵变换) <a class="header-anchor" href="#matrix-矩阵变换" aria-label="Permalink to &quot;matrix (矩阵变换)&quot;">​</a></h3><p>使用 6 值矩阵进行复杂变换。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">transform: matrix(</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">, c, d, e, f);</span></span></code></pre></div><p>矩阵表示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[ a  c  e ]</span></span>
<span class="line"><span>[ b  d  f ]</span></span>
<span class="line"><span>[ 0  0  1 ]</span></span></code></pre></div><p>假如有一个坐标点 (x，y)，经过 <code>matrix(a, b, c, d, e, f)</code> 得到 (x ‘，y’)，其计算过程为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span> [  x&#39; ]       [ a  c  e ]   [ x ]</span></span>
<span class="line"><span> [  y&#39; ]   =   [ b  d  f ] * [ y ]</span></span>
<span class="line"><span> [  1  ]       [ 0  0  1 ]   [ 1 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               [   a*x+c*y+e   ]</span></span>
<span class="line"><span>           =   [   b*x+d*y+f   ]</span></span>
<span class="line"><span>               [       1       ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>x&#39; = a*x+c*y+e</span></span>
<span class="line"><span>y&#39; = b*x+d*y+f</span></span></code></pre></div><p>对于一个元素，把元素上的每个像素点都进行此计算，就可以得到新的元素。 上述的 translate，rotate，scale，skew 都可以看作是特殊的矩阵变换，在只设定一种变换时 (多种变换不成立)，其对应关系如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[ scaleX  skewY   translateX ]       [ a  c  e ]</span></span>
<span class="line"><span>[  skewX  scaleY  translateY ]  ==&gt;  [ b  d  f ]</span></span>
<span class="line"><span>[    0      0         1      ]       [ 0  0  1 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())</span></span></code></pre></div><p>每种 transform 都可以看作与矩阵相乘，矩阵乘法运算不满足交换律，即 AB ≠ BA</p><p>这意味着有多个转换时，转换的顺序会影响到最终的效果</p><h2 id="transition" tabindex="-1">transition <a class="header-anchor" href="#transition" aria-label="Permalink to &quot;transition&quot;">​</a></h2><h3 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h3><p>transition 用来定义对应的样式发生改变时的改变时间、快慢、进度等</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>元素状态变化 (由js、css等引起) :</span></span>
<span class="line"><span>┌─────────────┐   过渡过程    ┌─────────────┐</span></span>
<span class="line"><span>│  样式 A      │ ──────────→ │  样式 B      │</span></span>
<span class="line"><span>│  color: red │              │ color: blue │</span></span>
<span class="line"><span>└─────────────┘              └─────────────┘</span></span></code></pre></div><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.element</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  transition</span><span style="color:#E1E4E8;">: css-property duration timing-function delay, css-property2</span></span>
<span class="line"><span style="color:#E1E4E8;">      duration2 timing-function2 delay2;</span></span>
<span class="line"><span style="color:#79B8FF;">  transition</span><span style="color:#E1E4E8;">: margin-right </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">s</span><span style="color:#79B8FF;"> ease-in-out</span><span style="color:#79B8FF;"> 0.5</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="animation" tabindex="-1">animation <a class="header-anchor" href="#animation" aria-label="Permalink to &quot;animation&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">animation: name duration </span><span style="color:#85E89D;">timing-function</span><span style="color:#E1E4E8;"> delay </span><span style="color:#85E89D;">iteration-count</span><span style="color:#E1E4E8;"> direction</span></span>
<span class="line"><span style="color:#85E89D;">    fill-mode</span><span style="color:#E1E4E8;">, name2 duration2 </span><span style="color:#85E89D;">timing-functio2n</span><span style="color:#E1E4E8;"> delay2 </span><span style="color:#85E89D;">iteration-count2</span></span>
<span class="line"><span style="color:#E1E4E8;">    direction2 </span><span style="color:#85E89D;">fill-mode2</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><h3 id="animation-name-动画名称" tabindex="-1">animation-name (动画名称) <a class="header-anchor" href="#animation-name-动画名称" aria-label="Permalink to &quot;animation-name (动画名称)&quot;">​</a></h3><p>keyframes 通过定义多个关键点来控制动画序列：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>@keyframes 动画名称 {</span></span>
<span class="line"><span>  0% { /* 起始状态 */ }</span></span>
<span class="line"><span>  50% { /* 中间状态 */ }</span></span>
<span class="line"><span>  100% { /* 结束状态 */ }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>示例：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">@keyframes</span><span style="color:#FFAB70;"> bounce</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  0%</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">translateY</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  50%</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">translateY</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">-30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  100%</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">translateY</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>视觉表示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>位置变化:</span></span>
<span class="line"><span>     50%: ↑ (-30px)</span></span>
<span class="line"><span>     ↗ ↘</span></span>
<span class="line"><span>0%: ○    ○: 100%</span></span></code></pre></div><h3 id="animation-direction-动画方向" tabindex="-1">animation-direction (动画方向) <a class="header-anchor" href="#animation-direction-动画方向" aria-label="Permalink to &quot;animation-direction (动画方向)&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>normal (正常):</span></span>
<span class="line"><span>0% → 25% → 50% → 75% → 100% → 结束</span></span>
<span class="line"><span></span></span>
<span class="line"><span>reverse (反向):</span></span>
<span class="line"><span>100% → 75% → 50% → 25% → 0% → 结束</span></span>
<span class="line"><span></span></span>
<span class="line"><span>alternate (交替):</span></span>
<span class="line"><span>0% → 100% → 0% → 100% → ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>alternate-reverse (反向交替):</span></span>
<span class="line"><span>100% → 0% → 100% → 0% → ...</span></span></code></pre></div><h3 id="animation-iteration-count-重复次数" tabindex="-1">animation-iteration-count (重复次数) <a class="header-anchor" href="#animation-iteration-count-重复次数" aria-label="Permalink to &quot;animation-iteration-count (重复次数)&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>animation-iteration-count: 1</span></span>
<span class="line"><span>[======] 播放一次结束</span></span>
<span class="line"><span></span></span>
<span class="line"><span>animation-iteration-count: 3</span></span>
<span class="line"><span>[======][======][======] 播放三次结束</span></span>
<span class="line"><span></span></span>
<span class="line"><span>animation-iteration-count: infinite</span></span>
<span class="line"><span>[======][======][======][======]... 无限循环</span></span></code></pre></div><h3 id="animation-fill-mode-填充模式" tabindex="-1">animation-fill-mode (填充模式) <a class="header-anchor" href="#animation-fill-mode-填充模式" aria-label="Permalink to &quot;animation-fill-mode (填充模式)&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>none:</span></span>
<span class="line"><span>开始前: 初始样式</span></span>
<span class="line"><span>结束后: 回到初始样式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>forwards:</span></span>
<span class="line"><span>开始前: 初始样式</span></span>
<span class="line"><span>结束后: 保持最后帧样式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>backwards:</span></span>
<span class="line"><span>开始前: 应用第一帧样式</span></span>
<span class="line"><span>结束后: 回到初始样式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>both:</span></span>
<span class="line"><span>开始前: 应用第一帧样式</span></span>
<span class="line"><span>结束后: 保持最后帧样式</span></span></code></pre></div><h3 id="timing-functions-缓动函数" tabindex="-1">Timing Functions (缓动函数) <a class="header-anchor" href="#timing-functions-缓动函数" aria-label="Permalink to &quot;Timing Functions (缓动函数)&quot;">​</a></h3><p><code>transition-timing-function</code> 属性定义了过渡效果中速度变化的方式，控制动画在不同时间点的执行速度。</p><h4 id="ease-默认值" tabindex="-1">ease (默认值) <a class="header-anchor" href="#ease-默认值" aria-label="Permalink to &quot;ease (默认值)&quot;">​</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 速度:     慢---快---慢 */</span></span>
<span class="line"><span style="color:#6A737D;">/* 相当于 cubic-bezier(0.25, 0.1, 0.25, 1.0) */</span></span>
<span class="line"><span style="color:#85E89D;">transition-timing-function</span><span style="color:#E1E4E8;">: ease;</span></span></code></pre></div><h4 id="linear" tabindex="-1">linear <a class="header-anchor" href="#linear" aria-label="Permalink to &quot;linear&quot;">​</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 匀速 */</span></span>
<span class="line"><span style="color:#85E89D;">transition-timing-function</span><span style="color:#E1E4E8;">: linear;</span></span></code></pre></div><h4 id="ease-in" tabindex="-1">ease-in <a class="header-anchor" href="#ease-in" aria-label="Permalink to &quot;ease-in&quot;">​</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 速度:     慢---快 */</span></span>
<span class="line"><span style="color:#6A737D;">/* 相当于 cubic-bezier(0.42, 0, 1.0, 1.0) */</span></span>
<span class="line"><span style="color:#85E89D;">transition-timing-function</span><span style="color:#E1E4E8;">: </span><span style="color:#85E89D;">ease-in</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><h4 id="ease-out" tabindex="-1">ease-out <a class="header-anchor" href="#ease-out" aria-label="Permalink to &quot;ease-out&quot;">​</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 速度:     快---慢 */</span></span>
<span class="line"><span style="color:#6A737D;">/* 相当于 cubic-bezier(0, 0, 0.58, 1.0) */</span></span>
<span class="line"><span style="color:#85E89D;">transition-timing-function</span><span style="color:#E1E4E8;">: </span><span style="color:#85E89D;">ease-out</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><h4 id="ease-in-out" tabindex="-1">ease-in-out <a class="header-anchor" href="#ease-in-out" aria-label="Permalink to &quot;ease-in-out&quot;">​</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 速度:     慢---快---慢 */</span></span>
<span class="line"><span style="color:#6A737D;">/* 相当于 cubic-bezier(0.42, 0, 0.58, 1.0) */</span></span>
<span class="line"><span style="color:#85E89D;">transition-timing-function</span><span style="color:#E1E4E8;">: </span><span style="color:#85E89D;">ease-in-out</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><h4 id="step-start" tabindex="-1">step-start <a class="header-anchor" href="#step-start" aria-label="Permalink to &quot;step-start&quot;">​</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/** </span></span>
<span class="line"><span style="color:#6A737D;"> * 效果：立即跳到结束状态</span></span>
<span class="line"><span style="color:#6A737D;"> * 进度:     0% → 100% (瞬间完成)------- 100%</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#85E89D;">transition-timing-function</span><span style="color:#E1E4E8;">: </span><span style="color:#85E89D;">step-start</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><h4 id="step-end" tabindex="-1">step-end <a class="header-anchor" href="#step-end" aria-label="Permalink to &quot;step-end&quot;">​</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 效果：在过渡结束时瞬间完成</span></span>
<span class="line"><span style="color:#6A737D;"> * 进度:     0% --------0% → 100% (瞬间完成)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#85E89D;">transition-timing-function</span><span style="color:#E1E4E8;">: </span><span style="color:#85E89D;">step-end</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><h4 id="steps" tabindex="-1">steps() <a class="header-anchor" href="#steps" aria-label="Permalink to &quot;steps()&quot;">​</a></h4><p><code>steps()</code> 是 CSS <code>transition-timing-function</code> 属性的一个特殊函数，它允许将动画或过渡分成若干个离散的步骤，而不是平滑的连续变化。这种函数常用于创建逐帧动画或模拟数字效果。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * n：正整数，表示动画被分成的步骤数量</span></span>
<span class="line"><span style="color:#6A737D;"> * &lt;jumpterm&gt;：可选参数，定义步骤变化发生的时机，可以是以下值之：</span></span>
<span class="line"><span style="color:#6A737D;"> *   jump-end 或 end (默认值) </span></span>
<span class="line"><span style="color:#6A737D;"> *   jump-start 或 start</span></span>
<span class="line"><span style="color:#6A737D;"> *   jump-none</span></span>
<span class="line"><span style="color:#6A737D;"> *   jump-both</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#85E89D;">transition-timing-function</span><span style="color:#E1E4E8;">: steps(n, &lt;jumpterm</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><p>效果对比</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>steps(5, jumpterm)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>时间轴:       0% ---- 25% ---- 50% ---- 75% ---- 100%</span></span>
<span class="line"><span>end:         A ---- B ---- C ---- D ---- E ····          跳过结束</span></span>
<span class="line"><span>start:         ····  A ---- B ---- C ---- D ---- E       跳过开始</span></span>
<span class="line"><span>jump-both:     ····  A -- B -- C -- D -- E  ····         跳过开始、结束</span></span>
<span class="line"><span>jump-none:   A  ----  B  ----  C  ----  D  ----  E       不跳过</span></span>
<span class="line"><span>             ↑               ↑                   ↑</span></span>
<span class="line"><span>            开始             变化点               结束</span></span></code></pre></div><h4 id="cubic-bezier" tabindex="-1">cubic-bezier() <a class="header-anchor" href="#cubic-bezier" aria-label="Permalink to &quot;cubic-bezier()&quot;">​</a></h4><p>cubic-bezier 函数定义了一个贝塞尔曲线，该曲线描述了动画的速度随时间的变化。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * x1, x2 ∈ [0, 1]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#85E89D;">transition-timing-function</span><span style="color:#E1E4E8;">: cubic-bezier(x1, y1, x2, y2);</span></span></code></pre></div><p>由于贝塞尔曲线复杂，难以直观描述，<a href="https://cubic-bezier.com" target="_blank" rel="noreferrer">可以进入 cubic-bezier.com 进行在线调试</a></p>`,88)])])}const b=a(e,[["render",i]]);export{y as __pageData,b as default};
