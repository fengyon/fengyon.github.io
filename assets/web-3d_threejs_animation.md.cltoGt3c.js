import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"动画系统","description":"","frontmatter":{},"headers":[{"level":2,"title":"动画系统概述","slug":"动画系统概述","link":"#动画系统概述","children":[]},{"level":2,"title":"基础变换动画","slug":"基础变换动画","link":"#基础变换动画","children":[{"level":3,"title":"手动更新动画","slug":"手动更新动画","link":"#手动更新动画","children":[]},{"level":3,"title":"动画曲线示意图","slug":"动画曲线示意图","link":"#动画曲线示意图","children":[]}]},{"level":2,"title":"关键帧动画系统","slug":"关键帧动画系统","link":"#关键帧动画系统","children":[{"level":3,"title":"动画剪辑 (AnimationClip)","slug":"动画剪辑-animationclip","link":"#动画剪辑-animationclip","children":[]},{"level":3,"title":"动画混合器 (AnimationMixer)","slug":"动画混合器-animationmixer","link":"#动画混合器-animationmixer","children":[]},{"level":3,"title":"动画动作控制","slug":"动画动作控制","link":"#动画动作控制","children":[]}]},{"level":2,"title":"骨骼动画","slug":"骨骼动画","link":"#骨骼动画","children":[{"level":3,"title":"骨骼系统架构","slug":"骨骼系统架构","link":"#骨骼系统架构","children":[]},{"level":3,"title":"创建骨骼动画","slug":"创建骨骼动画","link":"#创建骨骼动画","children":[]}]},{"level":2,"title":"动画库集成","slug":"动画库集成","link":"#动画库集成","children":[{"level":3,"title":"Tween.js 补间动画","slug":"tween-js-补间动画","link":"#tween-js-补间动画","children":[]},{"level":3,"title":"GSAP 高级动画","slug":"gsap-高级动画","link":"#gsap-高级动画","children":[]}]},{"level":2,"title":"动画混合与过渡","slug":"动画混合与过渡","link":"#动画混合与过渡","children":[{"level":3,"title":"动画混合技术","slug":"动画混合技术","link":"#动画混合技术","children":[]},{"level":3,"title":"动画状态机","slug":"动画状态机","link":"#动画状态机","children":[]}]},{"level":2,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[{"level":3,"title":"动画性能优化技巧","slug":"动画性能优化技巧","link":"#动画性能优化技巧","children":[]},{"level":3,"title":"内存管理","slug":"内存管理","link":"#内存管理","children":[]}]}],"relativePath":"web-3d/threejs/animation.md","filePath":"web-3d/threejs/animation.md"}'),o={name:"web-3d/threejs/animation.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /web-3d/threejs/animation.md for this page in Markdown format</div><h1 id="动画系统" tabindex="-1">动画系统 <a class="header-anchor" href="#动画系统" aria-label="Permalink to &quot;动画系统&quot;">​</a></h1><h2 id="动画系统概述" tabindex="-1">动画系统概述 <a class="header-anchor" href="#动画系统概述" aria-label="Permalink to &quot;动画系统概述&quot;">​</a></h2><p>Three.js 提供了强大的动画系统，支持从简单的变换动画到复杂的骨骼动画。动画系统核心基于<strong>关键帧</strong>和<strong>插值</strong>概念，能够创建平滑自然的运动效果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>动画系统架构</span></span>
<span class="line"><span>├── 关键帧数据 (KeyframeTrack)</span></span>
<span class="line"><span>├── 动画剪辑 (AnimationClip)</span></span>
<span class="line"><span>├── 混合器 (AnimationMixer)</span></span>
<span class="line"><span>└── 动画动作 (AnimationAction)</span></span></code></pre></div><h2 id="基础变换动画" tabindex="-1">基础变换动画 <a class="header-anchor" href="#基础变换动画" aria-label="Permalink to &quot;基础变换动画&quot;">​</a></h2><h3 id="手动更新动画" tabindex="-1">手动更新动画 <a class="header-anchor" href="#手动更新动画" aria-label="Permalink to &quot;手动更新动画&quot;">​</a></h3><p>最简单的动画方式是在渲染循环中手动更新对象属性：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> scene</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Scene</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> camera</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PerspectiveCamera</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">, window.innerWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> window.innerHeight, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> renderer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">WebGLRenderer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">renderer.</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">(window.innerWidth, window.innerHeight);</span></span>
<span class="line"><span style="color:#E1E4E8;">document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(renderer.domElement);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建动画对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> geometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshBasicMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0x00ff00</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> cube</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(geometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(cube);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">camera.position.z </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 动画循环</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> animate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">  requestAnimationFrame</span><span style="color:#E1E4E8;">(animate);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 旋转动画</span></span>
<span class="line"><span style="color:#E1E4E8;">  cube.rotation.x </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 0.01</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  cube.rotation.y </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 0.01</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 上下浮动动画</span></span>
<span class="line"><span style="color:#E1E4E8;">  cube.position.y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">sin</span><span style="color:#E1E4E8;">(Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0.001</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 缩放动画</span></span>
<span class="line"><span style="color:#E1E4E8;">  cube.scale.x </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">sin</span><span style="color:#E1E4E8;">(Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0.002</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0.5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  renderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(scene, camera);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">animate</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="动画曲线示意图" tabindex="-1">动画曲线示意图 <a class="header-anchor" href="#动画曲线示意图" aria-label="Permalink to &quot;动画曲线示意图&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>线性插值: 点A -------- 点B</span></span>
<span class="line"><span></span></span>
<span class="line"><span>缓动动画: 点A ╰──────╯ 点B</span></span>
<span class="line"><span>         慢→快→慢</span></span>
<span class="line"><span></span></span>
<span class="line"><span>弹性动画: 点A ╰─╮╭─╮╭─╯ 点B</span></span>
<span class="line"><span>         过冲+反弹</span></span></code></pre></div><h2 id="关键帧动画系统" tabindex="-1">关键帧动画系统 <a class="header-anchor" href="#关键帧动画系统" aria-label="Permalink to &quot;关键帧动画系统&quot;">​</a></h2><h3 id="动画剪辑-animationclip" tabindex="-1">动画剪辑 (AnimationClip) <a class="header-anchor" href="#动画剪辑-animationclip" aria-label="Permalink to &quot;动画剪辑 (AnimationClip)&quot;">​</a></h3><p>AnimationClip 是一组关键帧轨道，定义了对象在特定时间段内如何变化。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建位置关键帧轨道</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> positionKF</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">KeyframeTrack</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;.position&#39;</span><span style="color:#E1E4E8;">,           </span><span style="color:#6A737D;">// 目标属性路径</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">],          </span><span style="color:#6A737D;">// 时间点（秒）</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 位置值 [x,y,z, x,y,z, ...]</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建旋转关键帧轨道</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> rotationKF</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">KeyframeTrack</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;.rotation[y]&#39;</span><span style="color:#E1E4E8;">,        </span><span style="color:#6A737D;">// Y轴旋转</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">],          </span><span style="color:#6A737D;">// 时间点</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 旋转角度</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建缩放关键帧轨道</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> scaleKF</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">KeyframeTrack</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;.scale&#39;</span><span style="color:#E1E4E8;">,              </span><span style="color:#6A737D;">// 缩放属性</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">],      </span><span style="color:#6A737D;">// 时间点</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 缩放值</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建动画剪辑</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> clip</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">AnimationClip</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;CubeAnimation&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">  positionKF, </span></span>
<span class="line"><span style="color:#E1E4E8;">  rotationKF, </span></span>
<span class="line"><span style="color:#E1E4E8;">  scaleKF</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span></code></pre></div><h3 id="动画混合器-animationmixer" tabindex="-1">动画混合器 (AnimationMixer) <a class="header-anchor" href="#动画混合器-animationmixer" aria-label="Permalink to &quot;动画混合器 (AnimationMixer)&quot;">​</a></h3><p>AnimationMixer 是动画系统的核心，用于播放和控制多个动画剪辑。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建动画混合器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mixer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">AnimationMixer</span><span style="color:#E1E4E8;">(cube);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 从剪辑创建动画动作</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> action</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mixer.</span><span style="color:#B392F0;">clipAction</span><span style="color:#E1E4E8;">(clip);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置动画动作</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">setLoop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.LoopRepeat);    </span><span style="color:#6A737D;">// 循环模式</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">setDuration</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);               </span><span style="color:#6A737D;">// 持续时间</span></span>
<span class="line"><span style="color:#E1E4E8;">action.timeScale </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1.0</span><span style="color:#E1E4E8;">;              </span><span style="color:#6A737D;">// 播放速度</span></span>
<span class="line"><span style="color:#E1E4E8;">action.clampWhenFinished </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;     </span><span style="color:#6A737D;">// 播放结束时保持最后一帧</span></span>
<span class="line"><span style="color:#E1E4E8;">action.weight </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1.0</span><span style="color:#E1E4E8;">;                 </span><span style="color:#6A737D;">// 混合权重</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 播放动画</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在动画循环中更新混合器</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> animate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">  requestAnimationFrame</span><span style="color:#E1E4E8;">(animate);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 更新混合器（传入时间增量）</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> delta</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> clock.</span><span style="color:#B392F0;">getDelta</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  mixer.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(delta);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  renderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(scene, camera);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> clock</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Clock</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">animate</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="动画动作控制" tabindex="-1">动画动作控制 <a class="header-anchor" href="#动画动作控制" aria-label="Permalink to &quot;动画动作控制&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 动画动作状态管理</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">();      </span><span style="color:#6A737D;">// 开始播放</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">stop</span><span style="color:#E1E4E8;">();      </span><span style="color:#6A737D;">// 停止播放</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">reset</span><span style="color:#E1E4E8;">();     </span><span style="color:#6A737D;">// 重置到开始</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">pause</span><span style="color:#E1E4E8;">();     </span><span style="color:#6A737D;">// 暂停</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">isRunning</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 检查是否正在运行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 动画播放控制</span></span>
<span class="line"><span style="color:#E1E4E8;">action.time </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1.5</span><span style="color:#E1E4E8;">;          </span><span style="color:#6A737D;">// 跳转到特定时间</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">setEffectiveTimeScale</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 设置播放速度（0.5倍速）</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">setEffectiveWeight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">);    </span><span style="color:#6A737D;">// 设置混合权重</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 循环模式设置</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">setLoop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.LoopOnce);    </span><span style="color:#6A737D;">// 播放一次</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">setLoop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.LoopRepeat);  </span><span style="color:#6A737D;">// 重复播放</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">setLoop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.LoopPingPong); </span><span style="color:#6A737D;">// 来回播放</span></span></code></pre></div><h2 id="骨骼动画" tabindex="-1">骨骼动画 <a class="header-anchor" href="#骨骼动画" aria-label="Permalink to &quot;骨骼动画&quot;">​</a></h2><h3 id="骨骼系统架构" tabindex="-1">骨骼系统架构 <a class="header-anchor" href="#骨骼系统架构" aria-label="Permalink to &quot;骨骼系统架构&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>骨骼层级结构</span></span>
<span class="line"><span>Skeleton</span></span>
<span class="line"><span>├── Bone (根骨骼)</span></span>
<span class="line"><span>│   ├── Bone (子骨骼1)</span></span>
<span class="line"><span>│   │   └── Bone (末端骨骼)</span></span>
<span class="line"><span>│   └── Bone (子骨骼2)</span></span>
<span class="line"><span>└── 绑定姿势矩阵</span></span></code></pre></div><h3 id="创建骨骼动画" tabindex="-1">创建骨骼动画 <a class="header-anchor" href="#创建骨骼动画" aria-label="Permalink to &quot;创建骨骼动画&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建骨骼</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> bones</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> rootBone</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Bone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">bones.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(rootBone);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> childBone1</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Bone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">childBone1.position.y </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">rootBone.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(childBone1);</span></span>
<span class="line"><span style="color:#E1E4E8;">bones.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(childBone1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> childBone2</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Bone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">childBone2.position.y </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">childBone1.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(childBone2);</span></span>
<span class="line"><span style="color:#E1E4E8;">bones.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(childBone2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建骨架</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> skeleton</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Skeleton</span><span style="color:#E1E4E8;">(bones);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建蒙皮几何体（如手臂）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> geometry</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">CylinderGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">geometry.</span><span style="color:#B392F0;">translate</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 移动到骨骼位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为每个顶点分配骨骼权重</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> position</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> geometry.attributes.position;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vertex</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Vector3</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> skinIndices</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> skinWeights</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> position.count; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  vertex.</span><span style="color:#B392F0;">fromBufferAttribute</span><span style="color:#E1E4E8;">(position, i);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 根据Y坐标分配骨骼影响</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> y</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> vertex.y </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 归一化到 [0, 2]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (y </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 主要受根骨骼影响</span></span>
<span class="line"><span style="color:#E1E4E8;">    skinIndices.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    skinWeights.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 受两个骨骼影响</span></span>
<span class="line"><span style="color:#E1E4E8;">    skinIndices.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    skinWeights.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">geometry.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;skinIndex&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Uint16BufferAttribute</span><span style="color:#E1E4E8;">(skinIndices, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">geometry.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;skinWeight&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Float32BufferAttribute</span><span style="color:#E1E4E8;">(skinWeights, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建蒙皮网格</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> material</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshStandardMaterial</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">  skinning: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用蒙皮</span></span>
<span class="line"><span style="color:#E1E4E8;">  color: </span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> skinnedMesh</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">SkinnedMesh</span><span style="color:#E1E4E8;">(geometry, material);</span></span>
<span class="line"><span style="color:#E1E4E8;">skinnedMesh.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(rootBone);</span></span>
<span class="line"><span style="color:#E1E4E8;">skinnedMesh.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(skeleton);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(skinnedMesh);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建骨骼动画剪辑</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> times</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> values</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#79B8FF;">  0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,           </span><span style="color:#6A737D;">// 初始旋转</span></span>
<span class="line"><span style="color:#79B8FF;">  0</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,   </span><span style="color:#6A737D;">// 旋转45度</span></span>
<span class="line"><span style="color:#79B8FF;">  0</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 旋转-45度</span></span>
<span class="line"><span style="color:#79B8FF;">  0</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,   </span><span style="color:#6A737D;">// 旋转45度</span></span>
<span class="line"><span style="color:#79B8FF;">  0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;">            // 回到初始</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> rotationTrack</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">VectorKeyframeTrack</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;.bones[1].rotation&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  times,</span></span>
<span class="line"><span style="color:#E1E4E8;">  values</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> clip</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">AnimationClip</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ArmAnimation&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, [rotationTrack]);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mixer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">AnimationMixer</span><span style="color:#E1E4E8;">(skinnedMesh);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> action</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mixer.</span><span style="color:#B392F0;">clipAction</span><span style="color:#E1E4E8;">(clip);</span></span>
<span class="line"><span style="color:#E1E4E8;">action.</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="动画库集成" tabindex="-1">动画库集成 <a class="header-anchor" href="#动画库集成" aria-label="Permalink to &quot;动画库集成&quot;">​</a></h2><h3 id="tween-js-补间动画" tabindex="-1">Tween.js 补间动画 <a class="header-anchor" href="#tween-js-补间动画" aria-label="Permalink to &quot;Tween.js 补间动画&quot;">​</a></h3><p>Tween.js 提供简单的补间动画功能，适合简单的属性过渡。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> *</span><span style="color:#F97583;"> as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;three&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> TWEEN </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@tweenjs/tween.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> cube</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#F97583;">  new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#F97583;">  new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshBasicMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0xff0000</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(cube);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建从当前位置到新位置的补间动画</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tween</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> TWEEN</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Tween</span><span style="color:#E1E4E8;">(cube.position)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">({ x: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, z: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }, </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 目标位置和持续时间</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">easing</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">TWEEN</span><span style="color:#E1E4E8;">.Easing.Quadratic.Out) </span><span style="color:#6A737D;">// 缓动函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">onUpdate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;动画进行中:&#39;</span><span style="color:#E1E4E8;">, cube.position.x);</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">onComplete</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;动画完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在动画循环中更新Tween</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> animate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">  requestAnimationFrame</span><span style="color:#E1E4E8;">(animate);</span></span>
<span class="line"><span style="color:#79B8FF;">  TWEEN</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 更新所有补间动画</span></span>
<span class="line"><span style="color:#E1E4E8;">  renderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(scene, camera);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="gsap-高级动画" tabindex="-1">GSAP 高级动画 <a class="header-anchor" href="#gsap-高级动画" aria-label="Permalink to &quot;GSAP 高级动画&quot;">​</a></h3><p>GSAP 提供更强大的时间轴和复杂动画序列控制。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { gsap } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;gsap&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> cube</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#F97583;">  new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#F97583;">  new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshBasicMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0x00ff00</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(cube);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建动画时间轴</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tl</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> gsap.</span><span style="color:#B392F0;">timeline</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  repeat: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,        </span><span style="color:#6A737D;">// 无限循环</span></span>
<span class="line"><span style="color:#E1E4E8;">  yoyo: </span><span style="color:#79B8FF;">true</span><span style="color:#6A737D;">         // 往返播放</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 链式动画序列</span></span>
<span class="line"><span style="color:#E1E4E8;">tl.</span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">(cube.position, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  duration: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  x: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ease: </span><span style="color:#9ECBFF;">&quot;power2.out&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">(cube.rotation, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  duration: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  y: Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ease: </span><span style="color:#9ECBFF;">&quot;power2.inOut&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">(cube.scale, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  duration: </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  x: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  y: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  z: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ease: </span><span style="color:#9ECBFF;">&quot;elastic.out(1, 0.3)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#9ECBFF;">&quot;-=0.5&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 与前一个动画重叠0.5秒</span></span></code></pre></div><h2 id="动画混合与过渡" tabindex="-1">动画混合与过渡 <a class="header-anchor" href="#动画混合与过渡" aria-label="Permalink to &quot;动画混合与过渡&quot;">​</a></h2><h3 id="动画混合技术" tabindex="-1">动画混合技术 <a class="header-anchor" href="#动画混合技术" aria-label="Permalink to &quot;动画混合技术&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建多个动画动作</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> walkAction</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mixer.</span><span style="color:#B392F0;">clipAction</span><span style="color:#E1E4E8;">(walkClip);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> runAction</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mixer.</span><span style="color:#B392F0;">clipAction</span><span style="color:#E1E4E8;">(runClip);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> idleAction</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mixer.</span><span style="color:#B392F0;">clipAction</span><span style="color:#E1E4E8;">(idleClip);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置初始状态</span></span>
<span class="line"><span style="color:#E1E4E8;">idleAction.</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">idleAction.weight </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 动画混合函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> blendToAction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newAction</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">blendTime</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0.3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 淡入新动画</span></span>
<span class="line"><span style="color:#E1E4E8;">  newAction.</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  newAction.weight </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 创建权重动画</span></span>
<span class="line"><span style="color:#E1E4E8;">  gsap.</span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">(newAction, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    weight: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    duration: blendTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ease: </span><span style="color:#9ECBFF;">&quot;power2.inOut&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 淡出当前动画</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> currentActions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mixer._actions;</span></span>
<span class="line"><span style="color:#E1E4E8;">  currentActions.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">action</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (action </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> newAction </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> action.weight </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      gsap.</span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">(action, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        weight: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        duration: blendTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ease: </span><span style="color:#9ECBFF;">&quot;power2.inOut&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">        onComplete</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> action.</span><span style="color:#B392F0;">stop</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用混合过渡</span></span>
<span class="line"><span style="color:#B392F0;">blendToAction</span><span style="color:#E1E4E8;">(walkAction);  </span><span style="color:#6A737D;">// 过渡到行走动画</span></span></code></pre></div><h3 id="动画状态机" tabindex="-1">动画状态机 <a class="header-anchor" href="#动画状态机" aria-label="Permalink to &quot;动画状态机&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> AnimationStateMachine</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mixer</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">states</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.mixer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mixer;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.states </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> states;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.currentState </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setState</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">stateName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentState </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> stateName) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newState</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.states[stateName];</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">newState) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 停止当前状态</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentState) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.states[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentState];</span></span>
<span class="line"><span style="color:#E1E4E8;">      current.action.</span><span style="color:#B392F0;">fadeOut</span><span style="color:#E1E4E8;">(current.transitionOut);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 播放新状态</span></span>
<span class="line"><span style="color:#E1E4E8;">    newState.action</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">reset</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">setEffectiveTimeScale</span><span style="color:#E1E4E8;">(newState.speed </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">fadeIn</span><span style="color:#E1E4E8;">(newState.transitionIn)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.currentState </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> stateName;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用状态机</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> stateMachine</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> AnimationStateMachine</span><span style="color:#E1E4E8;">(mixer, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  idle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    action: idleAction,</span></span>
<span class="line"><span style="color:#E1E4E8;">    transitionIn: </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    transitionOut: </span><span style="color:#79B8FF;">0.2</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  walk: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    action: walkAction,</span></span>
<span class="line"><span style="color:#E1E4E8;">    transitionIn: </span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    transitionOut: </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    speed: </span><span style="color:#79B8FF;">1.0</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  run: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    action: runAction,</span></span>
<span class="line"><span style="color:#E1E4E8;">    transitionIn: </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    transitionOut: </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    speed: </span><span style="color:#79B8FF;">1.5</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 切换状态</span></span>
<span class="line"><span style="color:#E1E4E8;">stateMachine.</span><span style="color:#B392F0;">setState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;walk&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h2 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h2><h3 id="动画性能优化技巧" tabindex="-1">动画性能优化技巧 <a class="header-anchor" href="#动画性能优化技巧" aria-label="Permalink to &quot;动画性能优化技巧&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 1. 使用实例化动画</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> instancedMixers</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> instanceCount; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> mixer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">AnimationMixer</span><span style="color:#E1E4E8;">(instancedMesh);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> action</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mixer.</span><span style="color:#B392F0;">clipAction</span><span style="color:#E1E4E8;">(clip);</span></span>
<span class="line"><span style="color:#E1E4E8;">  action.</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  instancedMixers.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(mixer);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 按需更新动画</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> animate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> delta</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> clock.</span><span style="color:#B392F0;">getDelta</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 只在需要时更新动画</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (animationsNeedUpdate) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    instancedMixers.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mixer</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> mixer.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(delta));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  renderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(scene, camera);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 动画LOD系统</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> updateAnimations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">distance</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (distance </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 远处：降低更新频率</span></span>
<span class="line"><span style="color:#E1E4E8;">    mixer.timeScale </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0.5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (distance </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 中距离：正常更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    mixer.timeScale </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1.0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 近距离：高质量更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    mixer.timeScale </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1.0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 4. 动画裁剪</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> checkAnimationVisibility</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> inView</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> isMeshInView</span><span style="color:#E1E4E8;">(mesh);</span></span>
<span class="line"><span style="color:#E1E4E8;">  action.enabled </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> inView; </span><span style="color:#6A737D;">// 禁用不可见动画</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="内存管理" tabindex="-1">内存管理 <a class="header-anchor" href="#内存管理" aria-label="Permalink to &quot;内存管理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 清理动画资源</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> disposeAnimationResources</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 停止所有动画</span></span>
<span class="line"><span style="color:#E1E4E8;">  mixer.</span><span style="color:#B392F0;">stopAllAction</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 取消绑定剪辑</span></span>
<span class="line"><span style="color:#E1E4E8;">  mixer.</span><span style="color:#B392F0;">uncacheClip</span><span style="color:#E1E4E8;">(clip);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 清理混合器</span></span>
<span class="line"><span style="color:#E1E4E8;">  mixer.</span><span style="color:#B392F0;">uncacheRoot</span><span style="color:#E1E4E8;">(mesh);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 动画资源预加载</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> AnimationLoader</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> preloadAnimations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">animations</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> promises</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> animations.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">anim</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadAnimation</span><span style="color:#E1E4E8;">(anim.url)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(promises);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadAnimation</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> loader</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">AnimationLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> loader.</span><span style="color:#B392F0;">loadAsync</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,42)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
