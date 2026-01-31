import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"渲染优化","description":"","frontmatter":{},"headers":[{"level":2,"title":"性能瓶颈分析","slug":"性能瓶颈分析","link":"#性能瓶颈分析","children":[]},{"level":2,"title":"几何体优化","slug":"几何体优化","link":"#几何体优化","children":[{"level":3,"title":"顶点数据优化","slug":"顶点数据优化","link":"#顶点数据优化","children":[]},{"level":3,"title":"几何体合并","slug":"几何体合并","link":"#几何体合并","children":[]},{"level":3,"title":"实例化渲染","slug":"实例化渲染","link":"#实例化渲染","children":[]}]},{"level":2,"title":"材质与纹理优化","slug":"材质与纹理优化","link":"#材质与纹理优化","children":[{"level":3,"title":"材质重用","slug":"材质重用","link":"#材质重用","children":[]},{"level":3,"title":"纹理优化策略","slug":"纹理优化策略","link":"#纹理优化策略","children":[]}]},{"level":2,"title":"渲染技术优化","slug":"渲染技术优化","link":"#渲染技术优化","children":[{"level":3,"title":"细节层级 (LOD)","slug":"细节层级-lod","link":"#细节层级-lod","children":[]},{"level":3,"title":"视锥体裁剪","slug":"视锥体裁剪","link":"#视锥体裁剪","children":[]},{"level":3,"title":"遮挡剔除","slug":"遮挡剔除","link":"#遮挡剔除","children":[]}]},{"level":2,"title":"着色器优化","slug":"着色器优化","link":"#着色器优化","children":[{"level":3,"title":"着色器复杂度控制","slug":"着色器复杂度控制","link":"#着色器复杂度控制","children":[]},{"level":3,"title":"着色器预处理","slug":"着色器预处理","link":"#着色器预处理","children":[]}]},{"level":2,"title":"内存管理优化","slug":"内存管理优化","link":"#内存管理优化","children":[{"level":3,"title":"资源生命周期管理","slug":"资源生命周期管理","link":"#资源生命周期管理","children":[]},{"level":3,"title":"对象池模式","slug":"对象池模式","link":"#对象池模式","children":[]}]},{"level":2,"title":"渲染管线优化","slug":"渲染管线优化","link":"#渲染管线优化","children":[{"level":3,"title":"多线程渲染","slug":"多线程渲染","link":"#多线程渲染","children":[]},{"level":3,"title":"渐进式加载","slug":"渐进式加载","link":"#渐进式加载","children":[]}]},{"level":2,"title":"性能监控与自适应","slug":"性能监控与自适应","link":"#性能监控与自适应","children":[{"level":3,"title":"实时性能监控","slug":"实时性能监控","link":"#实时性能监控","children":[]},{"level":3,"title":"自适应渲染质量","slug":"自适应渲染质量","link":"#自适应渲染质量","children":[]}]},{"level":2,"title":"浏览器特定优化","slug":"浏览器特定优化","link":"#浏览器特定优化","children":[{"level":3,"title":"利用现代浏览器特性","slug":"利用现代浏览器特性","link":"#利用现代浏览器特性","children":[]}]}],"relativePath":"web-3d/performance/rendering.md","filePath":"web-3d/performance/rendering.md"}'),o={name:"web-3d/performance/rendering.md"};function e(c,s,t,r,E,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /web-3d/performance/rendering.md for this page in Markdown format</div><h1 id="渲染优化" tabindex="-1">渲染优化 <a class="header-anchor" href="#渲染优化" aria-label="Permalink to &quot;渲染优化&quot;">​</a></h1><h2 id="性能瓶颈分析" tabindex="-1">性能瓶颈分析 <a class="header-anchor" href="#性能瓶颈分析" aria-label="Permalink to &quot;性能瓶颈分析&quot;">​</a></h2><p>Web 3D 应用性能瓶颈主要出现在以下几个关键环节：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>渲染管线瓶颈点</span></span>
<span class="line"><span>CPU 侧瓶颈              GPU 侧瓶颈</span></span>
<span class="line"><span>├── JavaScript 逻辑       ├── 顶点处理</span></span>
<span class="line"><span>├── 场景图遍历            ├── 图元装配</span></span>
<span class="line"><span>├── 矩阵计算              ├── 光栅化</span></span>
<span class="line"><span>├── 物理计算              └── 像素着色</span></span>
<span class="line"><span>└── 动画更新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>内存瓶颈</span></span>
<span class="line"><span>├── 几何体数据</span></span>
<span class="line"><span>├── 纹理资源</span></span>
<span class="line"><span>├── 着色器程序</span></span>
<span class="line"><span>└── 帧缓冲区</span></span></code></pre></div><h2 id="几何体优化" tabindex="-1">几何体优化 <a class="header-anchor" href="#几何体优化" aria-label="Permalink to &quot;几何体优化&quot;">​</a></h2><h3 id="顶点数据优化" tabindex="-1">顶点数据优化 <a class="header-anchor" href="#顶点数据优化" aria-label="Permalink to &quot;顶点数据优化&quot;">​</a></h3><p>减少顶点数量是提升性能最直接有效的方法：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 原始高精度球体 (65536 个顶点)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> highPolySphere</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">SphereGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 优化后的球体 (8192 个顶点)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> optimizedSphere</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">SphereGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 极简球体 (768 个顶点，适合远距离物体)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> lowPolySphere</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">SphereGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h3 id="几何体合并" tabindex="-1">几何体合并 <a class="header-anchor" href="#几何体合并" aria-label="Permalink to &quot;几何体合并&quot;">​</a></h3><p>合并多个几何体减少绘制调用：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 单个几何体合并</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> geometries</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> geometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  geometry.</span><span style="color:#B392F0;">translate</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  geometries.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(geometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mergedGeometry</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> BufferGeometryUtils.</span><span style="color:#B392F0;">mergeBufferGeometries</span><span style="color:#E1E4E8;">(geometries);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mergedMesh</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(mergedGeometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(mergedMesh);</span></span></code></pre></div><h3 id="实例化渲染" tabindex="-1">实例化渲染 <a class="header-anchor" href="#实例化渲染" aria-label="Permalink to &quot;实例化渲染&quot;">​</a></h3><p>对于大量相同物体，使用实例化渲染：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> geometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> instanceCount</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> instancedMesh</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">InstancedMesh</span><span style="color:#E1E4E8;">(geometry, material, instanceCount);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> matrix</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Matrix4</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> color</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Color</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> instanceCount; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置每个实例的位置和旋转</span></span>
<span class="line"><span style="color:#E1E4E8;">  matrix.</span><span style="color:#B392F0;">setPosition</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 20</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 20</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 20</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 10</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 随机旋转</span></span>
<span class="line"><span style="color:#E1E4E8;">  matrix.</span><span style="color:#B392F0;">makeRotationFromEuler</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Euler</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#79B8FF;">PI</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  instancedMesh.</span><span style="color:#B392F0;">setMatrixAt</span><span style="color:#E1E4E8;">(i, matrix);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 设置每个实例的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">  color.</span><span style="color:#B392F0;">setHex</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0xffffff</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  instancedMesh.</span><span style="color:#B392F0;">setColorAt</span><span style="color:#E1E4E8;">(i, color);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(instancedMesh);</span></span></code></pre></div><h2 id="材质与纹理优化" tabindex="-1">材质与纹理优化 <a class="header-anchor" href="#材质与纹理优化" aria-label="Permalink to &quot;材质与纹理优化&quot;">​</a></h2><h3 id="材质重用" tabindex="-1">材质重用 <a class="header-anchor" href="#材质重用" aria-label="Permalink to &quot;材质重用&quot;">​</a></h3><p>避免创建过多材质实例：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 不好的做法：每个网格创建新材质</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> createInefficientScene</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">      color: Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0xffffff</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mesh</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(geometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">    scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(mesh);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 优化做法：重用材质</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> createOptimizedScene</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> materials</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0xff0000</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0x00ff00</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0x0000ff</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> materials[i </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> materials.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mesh</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(geometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">    scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(mesh);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="纹理优化策略" tabindex="-1">纹理优化策略 <a class="header-anchor" href="#纹理优化策略" aria-label="Permalink to &quot;纹理优化策略&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>纹理优化层级</span></span>
<span class="line"><span>原始纹理 (4096x4096, 16MB)</span></span>
<span class="line"><span>    ↓ 降采样</span></span>
<span class="line"><span>中等纹理 (2048x2048, 4MB) </span></span>
<span class="line"><span>    ↓ 压缩</span></span>
<span class="line"><span>压缩纹理 (2048x2048, 1MB)</span></span>
<span class="line"><span>    ↓ 图集化</span></span>
<span class="line"><span>纹理图集 (多个小纹理合并)</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 纹理压缩与MIP映射</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> textureLoader</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">TextureLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> texture</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> textureLoader.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;texture.jpg&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">texture</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 启用MIP映射</span></span>
<span class="line"><span style="color:#E1E4E8;">  texture.generateMipmaps </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  texture.minFilter </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.LinearMipmapLinearFilter;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 设置适当的各向异性过滤</span></span>
<span class="line"><span style="color:#E1E4E8;">  texture.anisotropy </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> renderer.capabilities.</span><span style="color:#B392F0;">getMaxAnisotropy</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 压缩纹理格式</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (renderer.extensions.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_compressed_texture_astc&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 使用ASTC压缩格式</span></span>
<span class="line"><span style="color:#E1E4E8;">    texture.format </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.RGBA_ASTC_4x4_Format;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 纹理图集</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> atlasLoader</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">TextureLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> atlas</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> atlasLoader.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;texture-atlas.jpg&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为不同物体使用图集的不同区域</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> material1</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  map: atlas,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transparent: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 通过UV变换使用图集的不同部分</span></span>
<span class="line"><span style="color:#E1E4E8;">geometry.attributes.uv.array </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> calculateUVsForAtlasRegion</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h2 id="渲染技术优化" tabindex="-1">渲染技术优化 <a class="header-anchor" href="#渲染技术优化" aria-label="Permalink to &quot;渲染技术优化&quot;">​</a></h2><h3 id="细节层级-lod" tabindex="-1">细节层级 (LOD) <a class="header-anchor" href="#细节层级-lod" aria-label="Permalink to &quot;细节层级 (LOD)&quot;">​</a></h3><p>根据距离动态切换模型精度：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> lod</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">LOD</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 高细节模型 (近距离)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> highDetailGeometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">SphereGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> highDetailMesh</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(highDetailGeometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">lod.</span><span style="color:#B392F0;">addLevel</span><span style="color:#E1E4E8;">(highDetailMesh, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 中等细节模型 (中距离)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mediumDetailGeometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">SphereGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mediumDetailMesh</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(mediumDetailGeometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">lod.</span><span style="color:#B392F0;">addLevel</span><span style="color:#E1E4E8;">(mediumDetailMesh, </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 低细节模型 (远距离)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> lowDetailGeometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">SphereGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> lowDetailMesh</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(lowDetailGeometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">lod.</span><span style="color:#B392F0;">addLevel</span><span style="color:#E1E4E8;">(lowDetailMesh, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(lod);</span></span></code></pre></div><h3 id="视锥体裁剪" tabindex="-1">视锥体裁剪 <a class="header-anchor" href="#视锥体裁剪" aria-label="Permalink to &quot;视锥体裁剪&quot;">​</a></h3><p>自动剔除视野外物体：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Three.js 默认启用视锥体裁剪</span></span>
<span class="line"><span style="color:#6A737D;">// 手动优化：对静态物体进行空间分割</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SpatialGrid</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">cellSize</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cellSize </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cellSize;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.grid </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  addObject</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">position</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cellKey</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getCellKey</span><span style="color:#E1E4E8;">(position);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.grid.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(cellKey)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.grid.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(cellKey, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.grid.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(cellKey).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getVisibleObjects</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">camera</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> visibleCells</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getCellsInFrustum</span><span style="color:#E1E4E8;">(camera);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> visibleObjects</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> cellKey</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> visibleCells) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> objects</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.grid.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(cellKey);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (objects) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        visibleObjects.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">objects);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> visibleObjects;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getCellsInFrustum</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">camera</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 计算相机视锥体与网格的交集</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> frustum</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Frustum</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> matrix</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Matrix4</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">multiplyMatrices</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      camera.projectionMatrix, </span></span>
<span class="line"><span style="color:#E1E4E8;">      camera.matrixWorldInverse</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    frustum.</span><span style="color:#B392F0;">setFromProjectionMatrix</span><span style="color:#E1E4E8;">(matrix);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 返回相交的网格单元键值</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateIntersectingCells</span><span style="color:#E1E4E8;">(frustum);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="遮挡剔除" tabindex="-1">遮挡剔除 <a class="header-anchor" href="#遮挡剔除" aria-label="Permalink to &quot;遮挡剔除&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> OcclusionCulling</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">renderer</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">camera</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> renderer;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.camera </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> camera;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.occlusionQuery </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> isObjectVisible</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 使用硬件遮挡查询</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.occlusionQuery) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.occlusionQuery </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">createOcclusionQuery</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">beginOcclusionQuery</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.occlusionQuery);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 渲染对象的简化边界框</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">renderBoundingBox</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">endOcclusionQuery</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查查询结果</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> visiblePixels</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">getOcclusionQueryResult</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.occlusionQuery);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> visiblePixels </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  renderBoundingBox</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> box</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Box3</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">setFromObject</span><span style="color:#E1E4E8;">(object);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> helper</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Box3Helper</span><span style="color:#E1E4E8;">(box, </span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(helper, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.camera);</span></span>
<span class="line"><span style="color:#E1E4E8;">    helper.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="着色器优化" tabindex="-1">着色器优化 <a class="header-anchor" href="#着色器优化" aria-label="Permalink to &quot;着色器优化&quot;">​</a></h2><h3 id="着色器复杂度控制" tabindex="-1">着色器复杂度控制 <a class="header-anchor" href="#着色器复杂度控制" aria-label="Permalink to &quot;着色器复杂度控制&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>着色器优化策略</span></span>
<span class="line"><span>高复杂度着色器 → 简化版本</span></span>
<span class="line"><span>├── PBR 材质 → Phong 材质</span></span>
<span class="line"><span>├── 动态光照 → 烘焙光照</span></span>
<span class="line"><span>├── 实时阴影 → 预计算阴影</span></span>
<span class="line"><span>└── 复杂后处理 → 选择性启用</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 高质量 PBR 着色器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> highQualityMaterial</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  metalness: </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  roughness: </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  envMap: environmentTexture,</span></span>
<span class="line"><span style="color:#E1E4E8;">  envMapIntensity: </span><span style="color:#79B8FF;">1.0</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 性能优化版着色器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> optimizedMaterial</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshLambertMaterial</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  color: </span><span style="color:#79B8FF;">0xffffff</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据性能需求动态切换</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> adjustMaterialQuality</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">performanceLevel</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (performanceLevel </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;high&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mesh.material </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> highQualityMaterial;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mesh.material </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> optimizedMaterial;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="着色器预处理" tabindex="-1">着色器预处理 <a class="header-anchor" href="#着色器预处理" aria-label="Permalink to &quot;着色器预处理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 预编译着色器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ShaderPrecompiler</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.shaderCache </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  precompileShaders</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">materials</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    materials.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 强制编译着色器</span></span>
<span class="line"><span style="color:#E1E4E8;">      material.needsUpdate </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 缓存编译结果</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> shaderKey</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getShaderKey</span><span style="color:#E1E4E8;">(material);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.shaderCache.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(shaderKey, material.program);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getShaderKey</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">material</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}_\${</span><span style="color:#E1E4E8;">material</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="内存管理优化" tabindex="-1">内存管理优化 <a class="header-anchor" href="#内存管理优化" aria-label="Permalink to &quot;内存管理优化&quot;">​</a></h2><h3 id="资源生命周期管理" tabindex="-1">资源生命周期管理 <a class="header-anchor" href="#资源生命周期管理" aria-label="Permalink to &quot;资源生命周期管理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ResourceManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.geometries </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.textures </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.materials </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  trackGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">geometry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.geometries.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(geometry);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> geometry;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  trackTexture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">texture</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.textures.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(texture);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> texture;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  disposeUnusedResources</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 清理未使用的几何体</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.geometries.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">geometry</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (geometry.userData.refCount </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        geometry.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.geometries.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(geometry);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 清理未使用的纹理</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.textures.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">texture</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (texture.userData.refCount </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        texture.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.textures.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(texture);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 引用计数管理</span></span>
<span class="line"><span style="color:#B392F0;">  addReference</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">resource.userData.refCount) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      resource.userData.refCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    resource.userData.refCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  removeReference</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (resource.userData.refCount) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      resource.userData.refCount</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="对象池模式" tabindex="-1">对象池模式 <a class="header-anchor" href="#对象池模式" aria-label="Permalink to &quot;对象池模式&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ObjectPool</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">createFn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">resetFn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">initialSize</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.createFn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> createFn;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.resetFn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> resetFn;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pool </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.used </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 预创建对象</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> initialSize; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.pool.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createFn</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  acquire</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pool.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      obj </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pool.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      obj </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createFn</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.used.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  release</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.used.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(obj)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resetFn</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.used.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.pool.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  releaseAll</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.used.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resetFn</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.pool.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.used.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用对象池管理临时几何体</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> geometryPool</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ObjectPool</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  () </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">geometry</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 重置几何体状态</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry.rotation.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry.scale.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre></div><h2 id="渲染管线优化" tabindex="-1">渲染管线优化 <a class="header-anchor" href="#渲染管线优化" aria-label="Permalink to &quot;渲染管线优化&quot;">​</a></h2><h3 id="多线程渲染" tabindex="-1">多线程渲染 <a class="header-anchor" href="#多线程渲染" aria-label="Permalink to &quot;多线程渲染&quot;">​</a></h3><p>使用 Web Workers 分担计算任务：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 主线程</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> geometryWorker</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Worker</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;geometry-worker.js&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">geometryWorker.</span><span style="color:#B392F0;">onmessage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">geometryData</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">id</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event.data;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> geometry</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createGeometryFromData</span><span style="color:#E1E4E8;">(geometryData);</span></span>
<span class="line"><span style="color:#E1E4E8;">  scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(geometry, material));</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> generateComplexGeometry</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  geometryWorker.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;generateGeometry&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    config: { segments: </span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&#39;geometry-1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Worker 线程 (geometry-worker.js)</span></span>
<span class="line"><span style="color:#E1E4E8;">self.</span><span style="color:#B392F0;">onmessage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (event.data.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;generateGeometry&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> geometryData</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> generateGeometryData</span><span style="color:#E1E4E8;">(event.data.config);</span></span>
<span class="line"><span style="color:#E1E4E8;">    self.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      geometryData,</span></span>
<span class="line"><span style="color:#E1E4E8;">      id: event.data.id</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="渐进式加载" tabindex="-1">渐进式加载 <a class="header-anchor" href="#渐进式加载" aria-label="Permalink to &quot;渐进式加载&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ProgressiveLoader</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.priorityQueue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loading </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  addToQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resource</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">priority</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.priorityQueue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ resource, priority });</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.priorityQueue.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> b.priority </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a.priority);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.loading) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">processQueue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processQueue</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loading </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.priorityQueue.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">resource</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.priorityQueue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadResource</span><span style="color:#E1E4E8;">(resource);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 每加载完一个资源检查帧率</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">shouldYieldToMainThread</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">          await</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(resolve, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Failed to load resource:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loading </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  shouldYieldToMainThread</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查帧率，如果低于阈值则让出主线程</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getCurrentFPS</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getCurrentFPS</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 计算当前帧率</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 60</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 简化实现</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="性能监控与自适应" tabindex="-1">性能监控与自适应 <a class="header-anchor" href="#性能监控与自适应" aria-label="Permalink to &quot;性能监控与自适应&quot;">​</a></h2><h3 id="实时性能监控" tabindex="-1">实时性能监控 <a class="header-anchor" href="#实时性能监控" aria-label="Permalink to &quot;实时性能监控&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PerformanceMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.frameTimes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.memoryUsage </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      fps: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      frameTime: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      drawCalls: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.lastTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.frameCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  update</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> delta</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> currentTime </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.lastTime;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.lastTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算帧率</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.frameTimes.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(delta);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.frameTimes.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 60</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.frameTimes.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> averageFrameTime</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.frameTimes.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.frameTimes.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.fps </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1000</span><span style="color:#F97583;"> /</span><span style="color:#E1E4E8;"> averageFrameTime;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.frameTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> averageFrameTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 监控内存使用</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (performance.memory) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.metrics.memory </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> performance.memory.usedJSHeapSize;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.frameCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  shouldReduceQuality</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.fps </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 50</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">           this</span><span style="color:#E1E4E8;">.metrics.frameTime </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 20</span><span style="color:#F97583;"> ||</span></span>
<span class="line"><span style="color:#E1E4E8;">           (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.memory </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 500</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 500MB</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getQualityLevel</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.fps </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 55</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;high&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.fps </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 45</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;medium&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;low&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="自适应渲染质量" tabindex="-1">自适应渲染质量 <a class="header-anchor" href="#自适应渲染质量" aria-label="Permalink to &quot;自适应渲染质量&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> AdaptiveRenderer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">renderer</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">scene</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> renderer;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> scene;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.performanceMonitor </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PerformanceMonitor</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.qualitySettings </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      high: { pixelRatio: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, shadows: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      medium: { pixelRatio: </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">, shadows: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, antialias: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      low: { pixelRatio: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, shadows: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, antialias: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.currentQuality </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;high&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  update</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.performanceMonitor.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newQuality</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.performanceMonitor.</span><span style="color:#B392F0;">getQualityLevel</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (newQuality </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.currentQuality) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">applyQualitySettings</span><span style="color:#E1E4E8;">(newQuality);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.currentQuality </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newQuality;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  applyQualitySettings</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">quality</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> settings</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.qualitySettings[quality];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 应用渲染设置</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(settings.pixelRatio);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.renderer.shadowMap.enabled </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> settings.shadows;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 更新场景质量</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateSceneQuality</span><span style="color:#E1E4E8;">(quality);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  updateSceneQuality</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">quality</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.scene.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">child</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (child.isMesh) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 根据质量调整材质</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adjustMaterialForQuality</span><span style="color:#E1E4E8;">(child.material, quality);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 启用/禁用细节层级</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (child.lod) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          child.lod.autoUpdate </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> quality </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;high&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  adjustMaterialForQuality</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">quality</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(material)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      material.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mat</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adjustSingleMaterial</span><span style="color:#E1E4E8;">(mat, quality));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adjustSingleMaterial</span><span style="color:#E1E4E8;">(material, quality);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  adjustSingleMaterial</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">material</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">quality</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (quality) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;high&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (material </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshLambertMaterial</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">          // 升级到更高质量的材质</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> newMaterial</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: material.color,</span></span>
<span class="line"><span style="color:#E1E4E8;">            map: material.map</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">          material.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> newMaterial;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;low&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (material </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">          // 降级到性能更好的材质</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> newMaterial</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshLambertMaterial</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: material.color,</span></span>
<span class="line"><span style="color:#E1E4E8;">            map: material.map</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">          material.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> newMaterial;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> material;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="浏览器特定优化" tabindex="-1">浏览器特定优化 <a class="header-anchor" href="#浏览器特定优化" aria-label="Permalink to &quot;浏览器特定优化&quot;">​</a></h2><h3 id="利用现代浏览器特性" tabindex="-1">利用现代浏览器特性 <a class="header-anchor" href="#利用现代浏览器特性" aria-label="Permalink to &quot;利用现代浏览器特性&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> BrowserOptimizations</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkBrowserFeatures</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  checkBrowserFeatures</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.features </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      webGL2: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkWebGL2</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      compressedTextures: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkCompressedTextures</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      parallelShaderCompile: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkParallelShaderCompile</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      hardwareAcceleration: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkHardwareAcceleration</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  applyOptimizations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">renderer</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> gl</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> renderer.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 启用并行着色器编译</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.features.parallelShaderCompile) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;KHR_parallel_shader_compile&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 使用高性能渲染模式</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.features.hardwareAcceleration) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, window.devicePixelRatio));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      renderer.</span><span style="color:#B392F0;">setPixelRatio</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  checkWebGL2</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> canvas</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;canvas&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> !!</span><span style="color:#E1E4E8;">(canvas.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webgl2&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> canvas.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;experimental-webgl2&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  checkCompressedTextures</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> canvas</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;canvas&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> gl</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> canvas.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webgl&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> !!</span><span style="color:#E1E4E8;">(gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_compressed_texture_astc&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">              gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_compressed_texture_s3tc&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  checkParallelShaderCompile</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> canvas</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;canvas&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> gl</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> canvas.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webgl&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> !!</span><span style="color:#E1E4E8;">gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;KHR_parallel_shader_compile&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  checkHardwareAcceleration</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检测硬件加速支持</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> canvas</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;canvas&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> gl</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> canvas.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webgl&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> debugInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> gl.</span><span style="color:#B392F0;">getExtension</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WEBGL_debug_renderer_info&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (debugInfo) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> renderer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> gl.</span><span style="color:#B392F0;">getParameter</span><span style="color:#E1E4E8;">(debugInfo.</span><span style="color:#79B8FF;">UNMASKED_RENDERER_WEBGL</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> renderer.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;GPU&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">!==</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">             renderer.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Graphics&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">!==</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 假设支持硬件加速</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,56)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
