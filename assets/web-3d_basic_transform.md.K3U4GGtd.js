import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const b=JSON.parse('{"title":"变换与矩阵","description":"","frontmatter":{},"headers":[{"level":2,"title":"变换基础","slug":"变换基础","link":"#变换基础","children":[]},{"level":2,"title":"齐次坐标","slug":"齐次坐标","link":"#齐次坐标","children":[]},{"level":2,"title":"平移变换","slug":"平移变换","link":"#平移变换","children":[]},{"level":2,"title":"旋转变换","slug":"旋转变换","link":"#旋转变换","children":[]},{"level":2,"title":"缩放变换","slug":"缩放变换","link":"#缩放变换","children":[]},{"level":2,"title":"组合变换","slug":"组合变换","link":"#组合变换","children":[]},{"level":2,"title":"模型矩阵","slug":"模型矩阵","link":"#模型矩阵","children":[]},{"level":2,"title":"视图矩阵","slug":"视图矩阵","link":"#视图矩阵","children":[]},{"level":2,"title":"投影矩阵","slug":"投影矩阵","link":"#投影矩阵","children":[{"level":3,"title":"透视投影","slug":"透视投影","link":"#透视投影","children":[]},{"level":3,"title":"正交投影","slug":"正交投影","link":"#正交投影","children":[]}]},{"level":2,"title":"法线变换","slug":"法线变换","link":"#法线变换","children":[]},{"level":2,"title":"矩阵栈与层次变换","slug":"矩阵栈与层次变换","link":"#矩阵栈与层次变换","children":[]},{"level":2,"title":"WebGL 中的矩阵实现","slug":"webgl-中的矩阵实现","link":"#webgl-中的矩阵实现","children":[]}],"relativePath":"web-3d/basic/transform.md","filePath":"web-3d/basic/transform.md"}'),e={name:"web-3d/basic/transform.md"};function i(c,s,t,o,d,r){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /web-3d/basic/transform.md for this page in Markdown format</div><h1 id="变换与矩阵" tabindex="-1">变换与矩阵 <a class="header-anchor" href="#变换与矩阵" aria-label="Permalink to &quot;变换与矩阵&quot;">​</a></h1><p>3D 变换是计算机图形学的核心数学基础，它通过矩阵运算实现对物体的移动、旋转、缩放等操作。在 Web 3D 开发中，理解变换矩阵的原理和应用对于创建动态、交互式的 3D 场景至关重要。</p><h2 id="变换基础" tabindex="-1">变换基础 <a class="header-anchor" href="#变换基础" aria-label="Permalink to &quot;变换基础&quot;">​</a></h2><p>3D 变换是通过数学运算改变物体位置、方向和大小的过程。矩阵作为线性代数的工具，为这些变换提供了统一而高效的表示方法。</p><p>特点：</p><ul><li>使用 4×4 齐次坐标矩阵表示所有变换</li><li>支持变换的组合和逆运算</li><li>硬件加速优化，适合实时渲染</li></ul><p>示意图 (基本变换类型)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>平移：移动位置</span></span>
<span class="line"><span>   O    →    O</span></span>
<span class="line"><span>  / \\       / \\</span></span>
<span class="line"><span>   |         |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>旋转：改变方向</span></span>
<span class="line"><span>   ↑    →    →</span></span>
<span class="line"><span>  / \\       / \\</span></span>
<span class="line"><span>   |         |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>缩放：改变大小</span></span>
<span class="line"><span>   O    →   BIG O</span></span>
<span class="line"><span>  / \\       /   \\</span></span>
<span class="line"><span>   |         |</span></span></code></pre></div><h2 id="齐次坐标" tabindex="-1">齐次坐标 <a class="header-anchor" href="#齐次坐标" aria-label="Permalink to &quot;齐次坐标&quot;">​</a></h2><p>齐次坐标使用四个分量 (x，y，z，w) 表示三维空间中的点，其中 w 分量用于区分点和向量，并支持透视变换。</p><p>特点：</p><ul><li>点表示为 (x，y，z，1)，向量表示为 (x，y，z，0)</li><li>统一处理仿射变换和投影变换</li><li>w 分量支持透视除法</li></ul><p>示意图 (齐次坐标转换)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>3D 点： (x, y, z) → 齐次坐标： (x, y, z, 1)</span></span>
<span class="line"><span>3D 向量：(x, y, z) → 齐次坐标： (x, y, z, 0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>透视除法： (x, y, z, w) → (x/w, y/w, z/w)</span></span></code></pre></div><h2 id="平移变换" tabindex="-1">平移变换 <a class="header-anchor" href="#平移变换" aria-label="Permalink to &quot;平移变换&quot;">​</a></h2><p>平移变换改变物体的位置，在三维空间中沿 X、Y、Z 轴移动。平移矩阵是一个单位矩阵加上位移分量。</p><p>特点：</p><ul><li>保持物体形状和方向不变</li><li>可逆操作，逆矩阵为反向平移</li><li>与其他变换可交换顺序</li></ul><p>平移矩阵：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[ 1 0 0 Tx ]</span></span>
<span class="line"><span>[ 0 1 0 Ty ]</span></span>
<span class="line"><span>[ 0 0 1 Tz ]</span></span>
<span class="line"><span>[ 0 0 0 1  ]</span></span></code></pre></div><p>示意图 (沿 X 轴平移)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>平移前：    平移后：</span></span>
<span class="line"><span>  Y           Y</span></span>
<span class="line"><span>  |           |</span></span>
<span class="line"><span>  |           |</span></span>
<span class="line"><span> []         []</span></span>
<span class="line"><span>  |           |</span></span>
<span class="line"><span>--+-- X     --+-- X</span></span></code></pre></div><h2 id="旋转变换" tabindex="-1">旋转变换 <a class="header-anchor" href="#旋转变换" aria-label="Permalink to &quot;旋转变换&quot;">​</a></h2><p>旋转变换改变物体的方向，围绕特定轴旋转指定角度。每个坐标轴都有对应的旋转矩阵。</p><p>特点：</p><ul><li>保持物体形状和大小不变</li><li>旋转顺序影响最终结果 (不可交换)</li><li>使用弧度制表示角度</li></ul><p>X 轴旋转矩阵：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[ 1  0    0    0 ]</span></span>
<span class="line"><span>[ 0 cosθ -sinθ 0 ]</span></span>
<span class="line"><span>[ 0 sinθ  cosθ 0 ]</span></span>
<span class="line"><span>[ 0  0    0    1 ]</span></span></code></pre></div><p>Y 轴旋转矩阵：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[ cosθ  0  sinθ 0 ]</span></span>
<span class="line"><span>[  0    1   0   0 ]</span></span>
<span class="line"><span>[-sinθ  0  cosθ 0 ]</span></span>
<span class="line"><span>[  0    0   0   1 ]</span></span></code></pre></div><p>Z 轴旋转矩阵：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[ cosθ -sinθ 0 0 ]</span></span>
<span class="line"><span>[ sinθ  cosθ 0 0 ]</span></span>
<span class="line"><span>[  0     0   1 0 ]</span></span>
<span class="line"><span>[  0     0   0 1 ]</span></span></code></pre></div><p>示意图 (绕 Z 轴旋转)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>旋转前：    旋转后：</span></span>
<span class="line"><span>   ↑          ↗</span></span>
<span class="line"><span>  / \\        / \\</span></span>
<span class="line"><span>   |          |</span></span></code></pre></div><h2 id="缩放变换" tabindex="-1">缩放变换 <a class="header-anchor" href="#缩放变换" aria-label="Permalink to &quot;缩放变换&quot;">​</a></h2><p>缩放变换改变物体的大小，可以沿各轴均匀或非均匀缩放。缩放矩阵是对角矩阵，对角线元素为缩放因子。</p><p>特点：</p><ul><li>可以统一缩放或非均匀缩放</li><li>缩放因子为负值时产生镜像效果</li><li>零缩放因子会使物体坍缩</li></ul><p>缩放矩阵：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[ Sx 0  0  0 ]</span></span>
<span class="line"><span>[ 0  Sy 0  0 ]</span></span>
<span class="line"><span>[ 0  0  Sz 0 ]</span></span>
<span class="line"><span>[ 0  0  0  1 ]</span></span></code></pre></div><p>示意图 (Y 轴缩放)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>原始大小：   Y轴放大：</span></span>
<span class="line"><span>   O          O</span></span>
<span class="line"><span>  /|\\        /|\\</span></span>
<span class="line"><span>   |          |</span></span>
<span class="line"><span>   |          |</span></span>
<span class="line"><span>   |          |</span></span>
<span class="line"><span>              |</span></span></code></pre></div><h2 id="组合变换" tabindex="-1">组合变换 <a class="header-anchor" href="#组合变换" aria-label="Permalink to &quot;组合变换&quot;">​</a></h2><p>多个变换可以通过矩阵乘法组合成单个变换矩阵。变换顺序很重要，因为矩阵乘法不满足交换律。</p><p>特点：</p><ul><li>从右到左应用变换：M = T × R × S</li><li>预计算组合矩阵提高性能</li><li>支持复杂的动画和层次变换</li></ul><p>变换顺序示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>局部坐标 → 缩放 → 旋转 → 平移 → 世界坐标</span></span>
<span class="line"><span>      S        R       T</span></span>
<span class="line"><span>      ↓        ↓       ↓</span></span>
<span class="line"><span>      [局部到世界矩阵] = T × R × S</span></span></code></pre></div><p>矩阵乘法示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[T] × [R] × [S] × [顶点] = [变换后的顶点]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：从右向左应用</span></span>
<span class="line"><span>S 先应用，然后是 R，最后是 T</span></span></code></pre></div><h2 id="模型矩阵" tabindex="-1">模型矩阵 <a class="header-anchor" href="#模型矩阵" aria-label="Permalink to &quot;模型矩阵&quot;">​</a></h2><p>模型矩阵将物体从局部坐标系变换到世界坐标系，是平移、旋转、缩放变换的组合。</p><p>特点：</p><ul><li>定义物体在世界空间中的位置和方向</li><li>每个物体有自己独立的模型矩阵</li><li>支持层次化变换 (父子关系)</li></ul><p>示意图 (模型变换流程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>局部坐标系 → 模型矩阵 → 世界坐标系</span></span>
<span class="line"><span>   O           O</span></span>
<span class="line"><span>  /|\\         /|\\</span></span>
<span class="line"><span>   |           |</span></span>
<span class="line"><span>              ↑</span></span>
<span class="line"><span>          在世界位置</span></span></code></pre></div><h2 id="视图矩阵" tabindex="-1">视图矩阵 <a class="header-anchor" href="#视图矩阵" aria-label="Permalink to &quot;视图矩阵&quot;">​</a></h2><p>视图矩阵 (观察矩阵) 将世界坐标系变换到视图坐标系，以相机为参考点。视图矩阵是相机变换的逆矩阵。</p><p>特点：</p><ul><li>相机位于原点，看向 Z 轴负方向</li><li>支持相机移动和旋转</li><li>便于后续的投影计算</li></ul><p>视图矩阵构造：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[ Rx  Ry  Rz  -dot(R, position) ]</span></span>
<span class="line"><span>[ Ux  Uy  Uz  -dot(U, position) ]</span></span>
<span class="line"><span>[ Dx  Dy  Dz  -dot(D, position) ]</span></span>
<span class="line"><span>[ 0   0   0          1         ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其中 R, U, D 为相机的右、上、前向量</span></span></code></pre></div><p>示意图 (视图变换)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>世界坐标系：    视图坐标系：</span></span>
<span class="line"><span>   Y             Y</span></span>
<span class="line"><span>   |             |</span></span>
<span class="line"><span>   |   C         |   Z(观察方向)</span></span>
<span class="line"><span>   |  /          |  /</span></span>
<span class="line"><span>   | /           | /</span></span>
<span class="line"><span>   +--- X        +--- X</span></span>
<span class="line"><span>相机 C 在世界中   相机在原点</span></span></code></pre></div><h2 id="投影矩阵" tabindex="-1">投影矩阵 <a class="header-anchor" href="#投影矩阵" aria-label="Permalink to &quot;投影矩阵&quot;">​</a></h2><p>投影矩阵将视图坐标系变换到裁剪坐标系，主要分为透视投影和正交投影两种类型。</p><h3 id="透视投影" tabindex="-1">透视投影 <a class="header-anchor" href="#透视投影" aria-label="Permalink to &quot;透视投影&quot;">​</a></h3><p>透视投影模拟人眼视觉效果，产生近大远小的透视效果。</p><p>特点：</p><ul><li>创建深度感和真实感</li><li>视锥体为平头锥体</li><li>适合大多数 3D 应用场景</li></ul><p>透视投影矩阵：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[ 2n/(r-l)  0        (r+l)/(r-l)     0    ]</span></span>
<span class="line"><span>[ 0        2n/(t-b)  (t+b)/(t-b)     0    ]</span></span>
<span class="line"><span>[ 0         0       -(f+n)/(f-n)  -2fn/(f-n)]</span></span>
<span class="line"><span>[ 0         0           -1           0    ]</span></span></code></pre></div><p>示意图 (透视投影)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>   眼睛</span></span>
<span class="line"><span>   / \\</span></span>
<span class="line"><span>  /   \\   视锥体</span></span>
<span class="line"><span> /     \\</span></span>
<span class="line"><span>/       \\</span></span>
<span class="line"><span>--------- 近平面</span></span>
<span class="line"><span>\\       /</span></span>
<span class="line"><span> \\     /   远平面</span></span>
<span class="line"><span>  \\   /</span></span>
<span class="line"><span>   \\ /</span></span></code></pre></div><h3 id="正交投影" tabindex="-1">正交投影 <a class="header-anchor" href="#正交投影" aria-label="Permalink to &quot;正交投影&quot;">​</a></h3><p>正交投影保持物体大小不变，无视距离影响，常用于工程绘图和 2.5D 游戏。</p><p>特点：</p><ul><li>平行投影，无透视变形</li><li>视锥体为长方体</li><li>保持测量精度</li></ul><p>正交投影矩阵：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[ 2/(r-l)  0        0      -(r+l)/(r-l) ]</span></span>
<span class="line"><span>[ 0       2/(t-b)   0      -(t+b)/(t-b) ]</span></span>
<span class="line"><span>[ 0        0       -2/(f-n)  -(f+n)/(f-n)]</span></span>
<span class="line"><span>[ 0        0        0          1        ]</span></span></code></pre></div><p>示意图 (正交投影)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>视锥体：</span></span>
<span class="line"><span>+-------+</span></span>
<span class="line"><span>|       |</span></span>
<span class="line"><span>|       | → 平行投影</span></span>
<span class="line"><span>|       |</span></span>
<span class="line"><span>+-------+</span></span></code></pre></div><h2 id="法线变换" tabindex="-1">法线变换 <a class="header-anchor" href="#法线变换" aria-label="Permalink to &quot;法线变换&quot;">​</a></h2><p>变换物体时，法线向量需要特殊处理。法线变换矩阵是模型矩阵的逆转置矩阵，以保持法线与表面的垂直关系。</p><p>特点：</p><ul><li>保持法线与表面的垂直性</li><li>使用模型矩阵的逆转置矩阵</li><li>对于只包含旋转的变换，可直接使用模型矩阵</li></ul><p>法线变换矩阵：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>法线变换矩阵 = transpose(inverse(Model矩阵))</span></span></code></pre></div><p>示意图 (法线变换)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>变换前：    变换后：</span></span>
<span class="line"><span>   ↑           ↗</span></span>
<span class="line"><span>  / \\         / \\</span></span>
<span class="line"><span>表面 → 法线   表面 → 法线</span></span>
<span class="line"><span>   ⊥           ⊥</span></span></code></pre></div><h2 id="矩阵栈与层次变换" tabindex="-1">矩阵栈与层次变换 <a class="header-anchor" href="#矩阵栈与层次变换" aria-label="Permalink to &quot;矩阵栈与层次变换&quot;">​</a></h2><p>复杂场景中，物体通常以层次结构组织。矩阵栈管理父子关系的组合变换。</p><p>特点：</p><ul><li>支持骨骼动画和场景图</li><li>通过 push/pop 操作管理变换状态</li><li>提高复杂场景的变换效率</li></ul><p>示意图 (矩阵栈操作)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>push()      | 当前矩阵 |   push()    | 父矩阵 |</span></span>
<span class="line"><span>当前矩阵 →  |----------| → 应用变换 → |--------|</span></span>
<span class="line"><span>            |          |             |子矩阵 |</span></span>
<span class="line"><span>pop() ← ... ←          ← ... ← ... ←</span></span></code></pre></div><h2 id="webgl-中的矩阵实现" tabindex="-1">WebGL 中的矩阵实现 <a class="header-anchor" href="#webgl-中的矩阵实现" aria-label="Permalink to &quot;WebGL 中的矩阵实现&quot;">​</a></h2><p>在 WebGL 和 Three.js 中，矩阵操作通过 JavaScript 库实现，如 glMatrix 或 Three.js 的 Matrix4 类。</p><p>特点：</p><ul><li>使用 Float32Array 优化性能</li><li>提供矩阵运算的实用函数</li><li>与 GPU 着色器紧密集成</li></ul><p>示例代码结构：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建模型矩阵</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> modelMatrix</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mat4.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">mat4.</span><span style="color:#B392F0;">translate</span><span style="color:#E1E4E8;">(modelMatrix, modelMatrix, [x, y, z]);</span></span>
<span class="line"><span style="color:#E1E4E8;">mat4.</span><span style="color:#B392F0;">rotateY</span><span style="color:#E1E4E8;">(modelMatrix, modelMatrix, angle);</span></span>
<span class="line"><span style="color:#E1E4E8;">mat4.</span><span style="color:#B392F0;">scale</span><span style="color:#E1E4E8;">(modelMatrix, modelMatrix, [sx, sy, sz]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 传递给着色器</span></span>
<span class="line"><span style="color:#E1E4E8;">gl.</span><span style="color:#B392F0;">uniformMatrix4fv</span><span style="color:#E1E4E8;">(modelMatrixLocation, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, modelMatrix);</span></span></code></pre></div>`,103)])])}const h=a(e,[["render",i]]);export{b as __pageData,h as default};
