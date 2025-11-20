import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"坐标系系统","description":"","frontmatter":{},"headers":[{"level":2,"title":"坐标系基础","slug":"坐标系基础","link":"#坐标系基础","children":[]},{"level":2,"title":"局部坐标系","slug":"局部坐标系","link":"#局部坐标系","children":[]},{"level":2,"title":"世界坐标系","slug":"世界坐标系","link":"#世界坐标系","children":[]},{"level":2,"title":"视图坐标系","slug":"视图坐标系","link":"#视图坐标系","children":[]},{"level":2,"title":"投影坐标系","slug":"投影坐标系","link":"#投影坐标系","children":[]},{"level":2,"title":"裁剪坐标系","slug":"裁剪坐标系","link":"#裁剪坐标系","children":[]},{"level":2,"title":"标准化设备坐标系","slug":"标准化设备坐标系","link":"#标准化设备坐标系","children":[]},{"level":2,"title":"屏幕坐标系","slug":"屏幕坐标系","link":"#屏幕坐标系","children":[]},{"level":2,"title":"坐标系变换流程","slug":"坐标系变换流程","link":"#坐标系变换流程","children":[]},{"level":2,"title":"右手坐标系与左手坐标系","slug":"右手坐标系与左手坐标系","link":"#右手坐标系与左手坐标系","children":[]},{"level":2,"title":"齐次坐标","slug":"齐次坐标","link":"#齐次坐标","children":[]}],"relativePath":"web-3d/basic/coordinate-system.md","filePath":"web-3d/basic/coordinate-system.md"}'),e={name:"web-3d/basic/coordinate-system.md"};function i(c,s,t,o,d,r){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /web-3d/basic/coordinate-system.md for this page in Markdown format</div><h1 id="坐标系系统" tabindex="-1">坐标系系统 <a class="header-anchor" href="#坐标系系统" aria-label="Permalink to &quot;坐标系系统&quot;">​</a></h1><p>3D 图形学中的坐标系系统是构建虚拟世界的数学基础，它定义了物体在空间中的位置、方向和变换关系。在 Web 3D 开发中，理解不同的坐标系及其转换过程至关重要，这直接影响着场景的渲染效果和交互逻辑。</p><h2 id="坐标系基础" tabindex="-1">坐标系基础 <a class="header-anchor" href="#坐标系基础" aria-label="Permalink to &quot;坐标系基础&quot;">​</a></h2><p>坐标系是用于描述空间中点位置的参考系统，由原点、坐标轴和度量单位构成。3D 图形学使用笛卡尔坐标系，通过三个相互垂直的轴 (X、Y、Z) 来定位点。</p><p>特点：</p><ul><li>提供统一的数学框架进行空间计算</li><li>支持向量和矩阵运算</li><li>便于实现几何变换和投影</li></ul><p>示意图 (3D 笛卡尔坐标系)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>      Y</span></span>
<span class="line"><span>      |</span></span>
<span class="line"><span>      |</span></span>
<span class="line"><span>      +--- X</span></span>
<span class="line"><span>     /</span></span>
<span class="line"><span>    /</span></span>
<span class="line"><span>   Z</span></span></code></pre></div><h2 id="局部坐标系" tabindex="-1">局部坐标系 <a class="header-anchor" href="#局部坐标系" aria-label="Permalink to &quot;局部坐标系&quot;">​</a></h2><p>局部坐标系 (模型坐标系) 是相对于单个模型自身的坐标系，原点通常位于模型的中心或特定锚点。每个模型都有自己独立的局部坐标系。</p><p>特点：</p><ul><li>简化模型创建和编辑过程</li><li>便于实现相对变换和动画</li><li>模型数据通常在此坐标系中定义</li></ul><p>示意图 (立方体的局部坐标系)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>    Y</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +--- X</span></span>
<span class="line"><span>   /</span></span>
<span class="line"><span>  Z</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  立方体顶点：</span></span>
<span class="line"><span>  (-1,-1,-1) 到 (1,1,1)</span></span></code></pre></div><h2 id="世界坐标系" tabindex="-1">世界坐标系 <a class="header-anchor" href="#世界坐标系" aria-label="Permalink to &quot;世界坐标系&quot;">​</a></h2><p>世界坐标系是场景的全局参考系，所有对象都通过变换矩阵放置到这个统一的坐标系中。它定义了场景中所有物体的绝对位置和方向。</p><p>特点：</p><ul><li>提供统一的全局参考框架</li><li>便于计算物体间的空间关系</li><li>支持场景管理和碰撞检测</li></ul><p>示意图 (多个物体在世界坐标系中)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>世界坐标系：</span></span>
<span class="line"><span>      Y</span></span>
<span class="line"><span>      |</span></span>
<span class="line"><span>   A  |  B</span></span>
<span class="line"><span>  []  |  []</span></span>
<span class="line"><span>------+------ X</span></span>
<span class="line"><span>     /</span></span>
<span class="line"><span>    /</span></span>
<span class="line"><span>   Z   C</span></span>
<span class="line"><span>      /\\</span></span></code></pre></div><p>物体 A、B、C 在世界坐标系中有各自的绝对位置。</p><h2 id="视图坐标系" tabindex="-1">视图坐标系 <a class="header-anchor" href="#视图坐标系" aria-label="Permalink to &quot;视图坐标系&quot;">​</a></h2><p>视图坐标系 (相机坐标系) 以相机为参考点，Z 轴通常指向相机的观察方向。在这个坐标系中，相机位于原点，便于进行投影计算。</p><p>特点：</p><ul><li>相机位于原点，简化投影计算</li><li>Z 坐标表示深度信息</li><li>便于实现视锥体裁剪</li></ul><p>示意图 (视图坐标系)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>视图坐标系：</span></span>
<span class="line"><span>      Y</span></span>
<span class="line"><span>      |</span></span>
<span class="line"><span>      |  Z（观察方向）</span></span>
<span class="line"><span>      | /</span></span>
<span class="line"><span>      |/</span></span>
<span class="line"><span>      +--- X</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>相机位于原点 (0,0,0)</span></span></code></pre></div><h2 id="投影坐标系" tabindex="-1">投影坐标系 <a class="header-anchor" href="#投影坐标系" aria-label="Permalink to &quot;投影坐标系&quot;">​</a></h2><p>投影坐标系通过投影矩阵将视图坐标系中的 3D 坐标转换为标准化设备坐标。这个坐标系用于确定哪些部分在可视范围内。</p><p>特点：</p><ul><li>坐标范围标准化 (通常 -1 到 1)</li><li>便于后续的视口变换</li><li>支持透视校正</li></ul><p>示意图 (透视投影)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>视图空间：       投影后：</span></span>
<span class="line"><span>   Y              Y</span></span>
<span class="line"><span>   |              |</span></span>
<span class="line"><span>   |   Z          |   </span></span>
<span class="line"><span>   | /            | </span></span>
<span class="line"><span>   |/             |</span></span>
<span class="line"><span>   +--- X         +--- X</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>3D 坐标转换为标准化坐标</span></span></code></pre></div><h2 id="裁剪坐标系" tabindex="-1">裁剪坐标系 <a class="header-anchor" href="#裁剪坐标系" aria-label="Permalink to &quot;裁剪坐标系&quot;">​</a></h2><p>裁剪坐标系在投影之后、透视除法之前，用于确定哪些图元在视锥体内。超出定义范围的几何体会被裁剪掉。</p><p>特点：</p><ul><li>使用齐次坐标 (x,y,z,w)</li><li>定义可见区域边界</li><li>提高渲染效率</li></ul><p>示意图 (裁剪空间)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>裁剪立方体：</span></span>
<span class="line"><span>    +--------+</span></span>
<span class="line"><span>   /        /|</span></span>
<span class="line"><span>  /        / |</span></span>
<span class="line"><span> +--------+  |</span></span>
<span class="line"><span> |        |  |</span></span>
<span class="line"><span> |        |  +</span></span>
<span class="line"><span> |        | /</span></span>
<span class="line"><span> |        |/</span></span>
<span class="line"><span> +--------+</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>坐标范围：-w ≤ x,y,z ≤ w</span></span></code></pre></div><h2 id="标准化设备坐标系" tabindex="-1">标准化设备坐标系 <a class="header-anchor" href="#标准化设备坐标系" aria-label="Permalink to &quot;标准化设备坐标系&quot;">​</a></h2><p>标准化设备坐标系 (NDC) 通过透视除法得到，坐标范围在所有轴上都是 [-1,1]。这个坐标系与具体设备无关。</p><p>特点：</p><ul><li>坐标范围标准化</li><li>设备无关的表示</li><li>便于后续的视口映射</li></ul><p>示意图 (NDC 空间)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>NDC 立方体：</span></span>
<span class="line"><span>    Y</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span> -1 +---+ 1</span></span>
<span class="line"><span>  / |  /|</span></span>
<span class="line"><span> /  | / |</span></span>
<span class="line"><span>+---+---+ X</span></span>
<span class="line"><span>|   |   |</span></span>
<span class="line"><span>|   +---+</span></span>
<span class="line"><span>|  /   /</span></span>
<span class="line"><span>| /   /</span></span>
<span class="line"><span>Z    /</span></span>
<span class="line"><span>-1  1</span></span></code></pre></div><h2 id="屏幕坐标系" tabindex="-1">屏幕坐标系 <a class="header-anchor" href="#屏幕坐标系" aria-label="Permalink to &quot;屏幕坐标系&quot;">​</a></h2><p>屏幕坐标系是最终的 2D 坐标系统，将标准化设备坐标映射到具体的像素位置。原点通常位于左上角或左下角。</p><p>特点：</p><ul><li>以像素为单位</li><li>与具体显示设备相关</li><li>用于最终的光栅化</li></ul><p>示意图 (屏幕坐标系)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>屏幕坐标系（原点在左上角）：</span></span>
<span class="line"><span>(0,0)------- +X</span></span>
<span class="line"><span> |</span></span>
<span class="line"><span> |</span></span>
<span class="line"><span> |</span></span>
<span class="line"><span>+Y</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>视口映射：NDC → 屏幕像素</span></span></code></pre></div><h2 id="坐标系变换流程" tabindex="-1">坐标系变换流程 <a class="header-anchor" href="#坐标系变换流程" aria-label="Permalink to &quot;坐标系变换流程&quot;">​</a></h2><p>3D 图形渲染涉及一系列坐标系变换，从局部坐标到最终的屏幕坐标。这个过程通过矩阵乘法实现。</p><p>变换流程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>局部坐标 → 世界坐标 → 视图坐标 → 投影坐标 → 裁剪坐标 → 标准化设备坐标 → 屏幕坐标</span></span></code></pre></div><p>示意图 (变换链条)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模型矩阵     视图矩阵     投影矩阵     视口变换</span></span>
<span class="line"><span>局部坐标 → 世界坐标 → 视图坐标 → 裁剪坐标 → NDC → 屏幕坐标</span></span>
<span class="line"><span>      M        V           P          视口</span></span></code></pre></div><p>每个变换阶段都有对应的变换矩阵，这些矩阵在渲染管线中依次应用。</p><h2 id="右手坐标系与左手坐标系" tabindex="-1">右手坐标系与左手坐标系 <a class="header-anchor" href="#右手坐标系与左手坐标系" aria-label="Permalink to &quot;右手坐标系与左手坐标系&quot;">​</a></h2><p>3D 图形学使用两种手性坐标系：右手坐标系和左手坐标系。区别在于 Z 轴的方向确定方式。</p><p>特点：</p><ul><li>右手坐标系：Z 轴由右手定则确定</li><li>左手坐标系：Z 轴由左手定则确定</li><li>WebGL 通常使用右手坐标系</li></ul><p>示意图 (右手定则)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>右手坐标系：</span></span>
<span class="line"><span>    Y</span></span>
<span class="line"><span>    |   </span></span>
<span class="line"><span>    | </span></span>
<span class="line"><span>    +--- X</span></span>
<span class="line"><span>   /</span></span>
<span class="line"><span>  /</span></span>
<span class="line"><span> Z（拇指指向 Z，手指从 X 转向 Y）</span></span></code></pre></div><h2 id="齐次坐标" tabindex="-1">齐次坐标 <a class="header-anchor" href="#齐次坐标" aria-label="Permalink to &quot;齐次坐标&quot;">​</a></h2><p>齐次坐标使用四个分量 (x,y,z,w) 表示 3D 点，便于用统一的矩阵形式表示所有变换。</p><p>特点：</p><ul><li>支持平移、旋转、缩放的统一矩阵表示</li><li>w 分量用于透视投影</li><li>便于实现投影变换</li></ul><p>示意图 (齐次坐标变换)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>3D 点 (x,y,z) → 齐次坐标 (x,y,z,1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>变换矩阵：</span></span>
<span class="line"><span>[ a b c d ]   [ x ]   [ x&#39; ]</span></span>
<span class="line"><span>[ e f g h ] × [ y ] = [ y&#39; ]</span></span>
<span class="line"><span>[ i j k l ]   [ z ]   [ z&#39; ]</span></span>
<span class="line"><span>[ m n o p ]   [ 1 ]   [ w&#39; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>标准化： (x&#39;/w&#39;, y&#39;/w&#39;, z&#39;/w&#39;)</span></span></code></pre></div>`,71)])])}const b=a(e,[["render",i]]);export{h as __pageData,b as default};
