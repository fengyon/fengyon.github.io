import{_ as n,c as a,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const d=JSON.parse('{"title":"布局与响应式","description":"","frontmatter":{},"headers":[{"level":2,"title":"一般布局","slug":"一般布局","link":"#一般布局","children":[{"level":3,"title":"文档流 (正常流)","slug":"文档流-正常流","link":"#文档流-正常流","children":[]},{"level":3,"title":"浮动 (float) 和清除浮动","slug":"浮动-float-和清除浮动","link":"#浮动-float-和清除浮动","children":[]},{"level":3,"title":"定位","slug":"定位","link":"#定位","children":[]}]},{"level":2,"title":"Flexbox 弹性布局","slug":"flexbox-弹性布局","link":"#flexbox-弹性布局","children":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"容器属性","slug":"容器属性","link":"#容器属性","children":[]},{"level":3,"title":"项目属性","slug":"项目属性","link":"#项目属性","children":[]},{"level":3,"title":"常用布局示例","slug":"常用布局示例","link":"#常用布局示例","children":[]}]},{"level":2,"title":"Grid 布局","slug":"grid-布局","link":"#grid-布局","children":[{"level":3,"title":"基本网格","slug":"基本网格","link":"#基本网格","children":[]},{"level":3,"title":"容器属性","slug":"容器属性-1","link":"#容器属性-1","children":[]},{"level":3,"title":"常见布局模式","slug":"常见布局模式","link":"#常见布局模式","children":[]}]},{"level":2,"title":"响应式布局","slug":"响应式布局","link":"#响应式布局","children":[{"level":3,"title":"使用相对单位","slug":"使用相对单位","link":"#使用相对单位","children":[]},{"level":3,"title":"图片","slug":"图片","link":"#图片","children":[]},{"level":3,"title":"媒体查询","slug":"媒体查询","link":"#媒体查询","children":[]},{"level":3,"title":"响应式网格","slug":"响应式网格","link":"#响应式网格","children":[]}]}],"relativePath":"basic/css/layout.md","filePath":"basic/css/layout.md"}'),e={name:"basic/css/layout.md"};function o(c,s,t,i,r,E){return p(),a("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/css/layout.md for this page in Markdown format</div><h1 id="布局与响应式" tabindex="-1">布局与响应式 <a class="header-anchor" href="#布局与响应式" aria-label="Permalink to &quot;布局与响应式&quot;">​</a></h1><h2 id="一般布局" tabindex="-1">一般布局 <a class="header-anchor" href="#一般布局" aria-label="Permalink to &quot;一般布局&quot;">​</a></h2><h3 id="文档流-正常流" tabindex="-1">文档流 (正常流) <a class="header-anchor" href="#文档流-正常流" aria-label="Permalink to &quot;文档流 (正常流)&quot;">​</a></h3><p>文档流是浏览器默认的 HTML 元素排列方式，遵循以下规则：</p><ul><li>块级元素从上到下排列</li><li>行内元素从左到右排列</li><li>元素按照在 HTML 中的出现顺序显示</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 块级元素示例 */</span></span>
<span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 默认值 */</span></span>
<span class="line"><span style="color:#79B8FF;">  width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 默认占满父容器宽度 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 行内元素示例 */</span></span>
<span class="line"><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">inline</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 默认值 */</span></span>
<span class="line"><span style="color:#79B8FF;">  width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 宽度由内容决定 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>+-----------------------------------+</span></span>
<span class="line"><span>|           块级元素1                |</span></span>
<span class="line"><span>+-----------------------------------+</span></span>
<span class="line"><span>|           块级元素2                |</span></span>
<span class="line"><span>+-----------------------------------+</span></span>
<span class="line"><span>| 行内元素1 | 行内元素2 | 行内元素3 ... |</span></span>
<span class="line"><span>+-----------------------------------+</span></span></code></pre></div><h3 id="浮动-float-和清除浮动" tabindex="-1">浮动 (float) 和清除浮动 <a class="header-anchor" href="#浮动-float-和清除浮动" aria-label="Permalink to &quot;浮动 (float) 和清除浮动&quot;">​</a></h3><p><strong>浮动</strong>：使元素脱离正常文档流，向左或向右移动</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 浮动示例 */</span></span>
<span class="line"><span style="color:#B392F0;">.float-left</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  float</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.float-right</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  float</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">right</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 清除浮动方法 */</span></span>
<span class="line"><span style="color:#B392F0;">.clearfix::after</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">table</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  clear</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">both</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 另一种清除浮动方式 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>+-----------------------------------+</span></span>
<span class="line"><span>|            container              |</span></span>
<span class="line"><span>| +-----+ +----------------------+  |</span></span>
<span class="line"><span>| |left | |       right          |  |</span></span>
<span class="line"><span>| |     | |                      |  |</span></span>
<span class="line"><span>| +-----+ +----------------------+  |</span></span>
<span class="line"><span>|                                   |</span></span>
<span class="line"><span>+-----------------------------------+</span></span></code></pre></div><h3 id="定位" tabindex="-1">定位 <a class="header-anchor" href="#定位" aria-label="Permalink to &quot;定位&quot;">​</a></h3><p><strong>相对定位</strong>：相对于元素正常位置进行偏移</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.relative</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>+-----------------------------------+</span></span>
<span class="line"><span>| 元素原位置                         |</span></span>
<span class="line"><span>|    +--------+                     |</span></span>
<span class="line"><span>|    |相对定位|                     |</span></span>
<span class="line"><span>|    | 元素   |                     |</span></span>
<span class="line"><span>|    +--------+                     |</span></span>
<span class="line"><span>+-----------------------------------+</span></span></code></pre></div><p><strong>绝对定位</strong>：相对于最近的非 static 定位祖先元素</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.absolute</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">absolute</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>+-----------------------------------+</span></span>
<span class="line"><span>| 父容器(非 static)                  |</span></span>
<span class="line"><span>| +-------------------------------+ |</span></span>
<span class="line"><span>| |      +--------+               | |</span></span>
<span class="line"><span>| |      | 绝对定位 |              | |</span></span>
<span class="line"><span>| |      |   元素  |               | |</span></span>
<span class="line"><span>| |      +--------+               | |</span></span>
<span class="line"><span>| +-------------------------------+ |</span></span>
<span class="line"><span>+-----------------------------------+</span></span></code></pre></div><p><strong>固定定位</strong>：相对于浏览器窗口定位</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.fixed</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">fixed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>+-----------------------------------+</span></span>
<span class="line"><span>| 浏览器窗口                         |</span></span>
<span class="line"><span>| +-------------------------------+ |</span></span>
<span class="line"><span>| |      +--------+               | |</span></span>
<span class="line"><span>| |      | 绝对定位 |              | |</span></span>
<span class="line"><span>| |      |   元素  |              | |</span></span>
<span class="line"><span>| |      +--------+               | |</span></span>
<span class="line"><span>| +-------------------------------+ |</span></span>
<span class="line"><span>+-----------------------------------+</span></span></code></pre></div><p><strong>粘滞定位</strong>：超出设定的边界条件时，相对于滚动容器进行定位</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.sticky</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">sticky</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 当相对于滚动容器的top小于 20时，则固定到20 */</span></span>
<span class="line"><span style="color:#79B8FF;">  bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 当相对于滚动容器的bottom小于 20时，则固定到20 */</span></span>
<span class="line"><span style="color:#79B8FF;">  left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 当相对于滚动容器的left小于 20时，则固定到20 */</span></span>
<span class="line"><span style="color:#79B8FF;">  right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 当相对于滚动容器的right小于 20时，则固定到20 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>  ┌───────────────────────────────┐</span></span>
<span class="line"><span>  │ 内容顶部 (已超出容器)           │</span></span>
<span class="line"><span>  | （sticky元素原位置）            |</span></span>
<span class="line"><span>+-|-----------------------------──|---+</span></span>
<span class="line"><span>| |      +--------+               |   |</span></span>
<span class="line"><span>| |      | sticky |               |   |</span></span>
<span class="line"><span>| |      |   元素  |               |   |</span></span>
<span class="line"><span>| |      +--------+               |   |</span></span>
<span class="line"><span>| |                               |   |</span></span>
<span class="line"><span>| |                               |   |</span></span>
<span class="line"><span>| +-------------------------------+   |</span></span>
<span class="line"><span>|       滚动容器                       |</span></span>
<span class="line"><span>+-------------------------------------+</span></span></code></pre></div><h2 id="flexbox-弹性布局" tabindex="-1">Flexbox 弹性布局 <a class="header-anchor" href="#flexbox-弹性布局" aria-label="Permalink to &quot;Flexbox 弹性布局&quot;">​</a></h2><h3 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h3><ul><li>主轴 (Main Axis) flex 布局元素的</li><li>交叉轴 (Cross Axis)</li></ul><p>默认情况</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>                    主轴 (Main Axis) ---&gt;</span></span>
<span class="line"><span>交叉轴 (Cross Axis)  |   +---------------------------+  ←  start</span></span>
<span class="line"><span>         |          |   |    Flex 容器 (Container)   |</span></span>
<span class="line"><span>         |          |   | +----+  +----+  +----+    |</span></span>
<span class="line"><span>         |          |   | |项目1|  |项目2| |项目3|   |</span></span>
<span class="line"><span>         |          |   | +----+  +----+  +----+    |</span></span>
<span class="line"><span>         |          |   |                           |</span></span>
<span class="line"><span>         V          |   +---------------------------+  ←  end</span></span>
<span class="line"><span>                    |</span></span>
<span class="line"><span>                    +--- start                      +---  end</span></span></code></pre></div><h3 id="容器属性" tabindex="-1">容器属性 <a class="header-anchor" href="#容器属性" aria-label="Permalink to &quot;容器属性&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  flex-direction</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">row</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">  /* 主轴方向：row | row-reverse | column | column-reverse */</span></span>
<span class="line"><span style="color:#79B8FF;">  flex-wrap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">nowrap</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 换行 */</span></span>
<span class="line"><span style="color:#79B8FF;">  gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 项目间距 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="项目属性" tabindex="-1">项目属性 <a class="header-anchor" href="#项目属性" aria-label="Permalink to &quot;项目属性&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  flex-grow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 放大比例 */</span></span>
<span class="line"><span style="color:#79B8FF;">  flex-shrink</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 缩小比例 */</span></span>
<span class="line"><span style="color:#79B8FF;">  flex-basis</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 初始大小 */</span></span>
<span class="line"><span style="color:#79B8FF;">  align-self</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 单独对齐 */</span></span>
<span class="line"><span style="color:#79B8FF;">  order</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 排列顺序 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="常用布局示例" tabindex="-1">常用布局示例 <a class="header-anchor" href="#常用布局示例" aria-label="Permalink to &quot;常用布局示例&quot;">​</a></h3><h4 id="水平居中" tabindex="-1">水平居中 <a class="header-anchor" href="#水平居中" aria-label="Permalink to &quot;水平居中&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>+-----------------------------------+</span></span>
<span class="line"><span>|          +-------------+          |</span></span>
<span class="line"><span>|          |  居中内容    |          |</span></span>
<span class="line"><span>|          +-------------+          |</span></span>
<span class="line"><span>+-----------------------------------+</span></span></code></pre></div><h4 id="圣杯布局" tabindex="-1">圣杯布局 <a class="header-anchor" href="#圣杯布局" aria-label="Permalink to &quot;圣杯布局&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>+-----------------------------------+</span></span>
<span class="line"><span>|              header               |</span></span>
<span class="line"><span>+----------+-------------+----------+</span></span>
<span class="line"><span>| sidebar  |    main     | sidebar2 |</span></span>
<span class="line"><span>|          |             |          |</span></span>
<span class="line"><span>+----------+-------------+----------+</span></span>
<span class="line"><span>|              footer               |</span></span>
<span class="line"><span>+-----------------------------------+</span></span></code></pre></div><h2 id="grid-布局" tabindex="-1">Grid 布局 <a class="header-anchor" href="#grid-布局" aria-label="Permalink to &quot;Grid 布局&quot;">​</a></h2><h3 id="基本网格" tabindex="-1">基本网格 <a class="header-anchor" href="#基本网格" aria-label="Permalink to &quot;基本网格&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>+----------+----------+----------+</span></span>
<span class="line"><span>|  单元格  |  单元格   |  单元格   |</span></span>
<span class="line"><span>+----------+----------+----------+</span></span>
<span class="line"><span>|  单元格  |  单元格   |  单元格   |</span></span>
<span class="line"><span>+----------+----------+----------+</span></span>
<span class="line"><span>|  单元格  |  单元格   |  单元格   |</span></span>
<span class="line"><span>+----------+----------+----------+</span></span></code></pre></div><h3 id="容器属性-1" tabindex="-1">容器属性 <a class="header-anchor" href="#容器属性-1" aria-label="Permalink to &quot;容器属性&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">grid</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">  /*  fr（fraction），表示剩余空间的分配系数 */</span></span>
<span class="line"><span style="color:#79B8FF;">  grid-template-columns</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">fr</span><span style="color:#79B8FF;"> 200</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 列定义 */</span></span>
<span class="line"><span style="color:#79B8FF;">  grid-template-rows</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">fr</span><span style="color:#79B8FF;"> 100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 行定义 */</span></span>
<span class="line"><span style="color:#79B8FF;">  grid-template-areas</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;header header header&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;sidebar main aside&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;footer footer footer&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 网格间距 */</span></span>
<span class="line"><span style="color:#79B8FF;">  grid-column</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> / </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 列范围 */</span></span>
<span class="line"><span style="color:#79B8FF;">  grid-row</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 行位置 */</span></span>
<span class="line"><span style="color:#79B8FF;">  grid-area</span><span style="color:#E1E4E8;">: header; </span><span style="color:#6A737D;">/* 区域名称 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="常见布局模式" tabindex="-1">常见布局模式 <a class="header-anchor" href="#常见布局模式" aria-label="Permalink to &quot;常见布局模式&quot;">​</a></h3><h4 id="_12-列网格系统" tabindex="-1">12 列网格系统 <a class="header-anchor" href="#_12-列网格系统" aria-label="Permalink to &quot;12 列网格系统&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>+--+--+--+--+--+--+--+--+--+--+--+--+</span></span>
<span class="line"><span>|1 |2 |3 |4 |5 |6 |7 |8 |9 |10|11|12|</span></span>
<span class="line"><span>+--+--+--+--+--+--+--+--+--+--+--+--+</span></span></code></pre></div><h4 id="杂志布局" tabindex="-1">杂志布局 <a class="header-anchor" href="#杂志布局" aria-label="Permalink to &quot;杂志布局&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>+-----------+-----------------------+</span></span>
<span class="line"><span>|           |                       |</span></span>
<span class="line"><span>|  特色内容  |        头条新闻        |</span></span>
<span class="line"><span>|           |                       |</span></span>
<span class="line"><span>+-----------+-----------+-----------+</span></span>
<span class="line"><span>|    新闻1   |   新闻2    |   新闻3   |</span></span>
<span class="line"><span>+-----------+-----------+-----------+</span></span>
<span class="line"><span>|           |                       |</span></span>
<span class="line"><span>|  侧边栏    |        主要内容         |</span></span>
<span class="line"><span>|           |                       |</span></span>
<span class="line"><span>+-----------+-----------------------+</span></span></code></pre></div><h4 id="瀑布流布局" tabindex="-1">瀑布流布局 <a class="header-anchor" href="#瀑布流布局" aria-label="Permalink to &quot;瀑布流布局&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>┌───────┼───────┼───────┐</span></span>
<span class="line"><span>│ ┌───┐ │ ┌───┐ │ ┌───┐ │</span></span>
<span class="line"><span>│ │ 1 │ │ │ 2 │ │ │ 3 │ │</span></span>
<span class="line"><span>│ │   │ │ │   │ │ │   │ │</span></span>
<span class="line"><span>│ │   │ │ │   │ │ │   │ │</span></span>
<span class="line"><span>│ |   | │ └───┘ │ └───┘ │</span></span>
<span class="line"><span>│ └───┘ │ ┌───┐ │ ┌───┐ │</span></span>
<span class="line"><span>│ ┌───┐ │ | 5 | │ |   | │</span></span>
<span class="line"><span>│ │ 4 │ │ │   │ │ │ 6 │ │</span></span>
<span class="line"><span>│ │   │ │ └───┘ │ │   │ │</span></span>
<span class="line"><span>│ │   │ │ ┌───┐ | │   | │</span></span>
<span class="line"><span>│ └───┘ │ │   │ │ └───┘ │</span></span>
<span class="line"><span>│ ┌───┐ │ │   │ │ ┌───┐ │</span></span>
<span class="line"><span>│ |   | │ │ 8 │ │ │ 9 │ │</span></span>
<span class="line"><span>│ │ 7 │ │ │   │ │ │   │ │</span></span>
<span class="line"><span>│ │   │ │ │   │ │ │   │ │</span></span>
<span class="line"><span>│ └───┘ │ │   │ │ │   │ │</span></span>
<span class="line"><span>└───────┴───────┴───────┴</span></span></code></pre></div><h2 id="响应式布局" tabindex="-1">响应式布局 <a class="header-anchor" href="#响应式布局" aria-label="Permalink to &quot;响应式布局&quot;">​</a></h2><h3 id="使用相对单位" tabindex="-1">使用相对单位 <a class="header-anchor" href="#使用相对单位" aria-label="Permalink to &quot;使用相对单位&quot;">​</a></h3><p>由于各种尺寸的设备都有，使用 <code>px</code> 这一固定单位不能在每种尺寸上适用，因此需要使用相对单位。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">16</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 基准字体大小 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  /* 使用相对单位 */</span></span>
<span class="line"><span style="color:#79B8FF;">  font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 16px */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#85E89D;">  body</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">14</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 移动端调整基准字体 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 图片自适应容器 */</span></span>
<span class="line"><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 宽度为容器的宽度 */</span></span>
<span class="line"><span style="color:#79B8FF;">  height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 高度自动 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * object-fit: fill</span></span>
<span class="line"><span style="color:#6A737D;"> * 默认值，强行拉伸图片填满容器，可能会导致图片变形</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  object-fit</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">fill</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * object-fit: contain</span></span>
<span class="line"><span style="color:#6A737D;"> * 保持图片比例缩放，完整显示在容器内</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果比例不一致，会在容器内留空白（上下或左右）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  object-fit</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">contain</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * object-fit: cover</span></span>
<span class="line"><span style="color:#6A737D;"> * 保持图片比例缩放，填满整个容器</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果比例不一致，图片会被裁剪掉一部分</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  object-fit</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">cover</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * object-fit: none</span></span>
<span class="line"><span style="color:#6A737D;"> * 不缩放，保持图片原始大小</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果图片比容器大，会溢出容器边界</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  object-fit</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * object-fit: scale-down</span></span>
<span class="line"><span style="color:#6A737D;"> * 在 none 和 contain 之间取较小的效果</span></span>
<span class="line"><span style="color:#6A737D;"> * - 如果原图比容器小 → 等同 none（不缩放）</span></span>
<span class="line"><span style="color:#6A737D;"> * - 如果原图比容器大 → 等同 contain（缩放以适应容器）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  object-fit</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">scale-down</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询" aria-label="Permalink to &quot;媒体查询&quot;">​</a></h3><p>在不同分辨率、宽度、高度的设备上使用不同的布局方式，实现最好的展示</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 移动设备 */</span></span>
<span class="line"><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 平板 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 桌面 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1024</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">grid</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">    /*  fr（fraction），表示剩余空间的分配系数 */</span></span>
<span class="line"><span style="color:#79B8FF;">    grid-template-columns</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">fr</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">fr</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">fr</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.high-dpi-image</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;image@1x.jpg&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 根据DPI提供不同图片 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">-webkit-min-device-pixel-ratio</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">), (</span><span style="color:#79B8FF;">min-resolution</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">192</span><span style="color:#F97583;">dpi</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .high-dpi-image</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;image@2x.jpg&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    background-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">contain</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="响应式网格" tabindex="-1">响应式网格 <a class="header-anchor" href="#响应式网格" aria-label="Permalink to &quot;响应式网格&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>移动设备：</span></span>
<span class="line"><span>+-----------+</span></span>
<span class="line"><span>|    1     |</span></span>
<span class="line"><span>+-----------+</span></span>
<span class="line"><span>|    2     |</span></span>
<span class="line"><span>+-----------+</span></span>
<span class="line"><span>|    3     |</span></span>
<span class="line"><span>+-----------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>平板：</span></span>
<span class="line"><span>+-----------+-----------+</span></span>
<span class="line"><span>|     1     |     2     |</span></span>
<span class="line"><span>+-----------+-----------+</span></span>
<span class="line"><span>|     3     |           |</span></span>
<span class="line"><span>+-----------+-----------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>桌面：</span></span>
<span class="line"><span>+-----+-----------+-----+</span></span>
<span class="line"><span>|  1  |     2     |  3  |</span></span>
<span class="line"><span>+-----+-----------+-----+</span></span></code></pre></div>`,62)])])}const F=n(e,[["render",o]]);export{d as __pageData,F as default};
