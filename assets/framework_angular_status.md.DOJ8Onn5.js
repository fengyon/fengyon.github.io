import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"Angular 状态管理","description":"","frontmatter":{},"headers":[{"level":2,"title":"状态管理概念","slug":"状态管理概念","link":"#状态管理概念","children":[]},{"level":2,"title":"状态管理挑战","slug":"状态管理挑战","link":"#状态管理挑战","children":[{"level":3,"title":"组件通信问题","slug":"组件通信问题","link":"#组件通信问题","children":[]},{"level":3,"title":"状态分散问题","slug":"状态分散问题","link":"#状态分散问题","children":[]}]},{"level":2,"title":"服务状态管理","slug":"服务状态管理","link":"#服务状态管理","children":[{"level":3,"title":"基础服务模式","slug":"基础服务模式","link":"#基础服务模式","children":[]},{"level":3,"title":"可观察状态模式","slug":"可观察状态模式","link":"#可观察状态模式","children":[]}]},{"level":2,"title":"RxJS 状态管理","slug":"rxjs-状态管理","link":"#rxjs-状态管理","children":[{"level":3,"title":"状态流模式","slug":"状态流模式","link":"#状态流模式","children":[]},{"level":3,"title":"状态组合","slug":"状态组合","link":"#状态组合","children":[]}]},{"level":2,"title":"NgRx 状态管理","slug":"ngrx-状态管理","link":"#ngrx-状态管理","children":[{"level":3,"title":"Redux 模式","slug":"redux-模式","link":"#redux-模式","children":[]},{"level":3,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[]},{"level":3,"title":"数据流详细流程","slug":"数据流详细流程","link":"#数据流详细流程","children":[]}]},{"level":2,"title":"组件本地状态","slug":"组件本地状态","link":"#组件本地状态","children":[{"level":3,"title":"本地状态管理","slug":"本地状态管理","link":"#本地状态管理","children":[]},{"level":3,"title":"智能与展示组件","slug":"智能与展示组件","link":"#智能与展示组件","children":[]}]},{"level":2,"title":"状态持久化","slug":"状态持久化","link":"#状态持久化","children":[{"level":3,"title":"本地存储集成","slug":"本地存储集成","link":"#本地存储集成","children":[]},{"level":3,"title":"路由状态管理","slug":"路由状态管理","link":"#路由状态管理","children":[]}]},{"level":2,"title":"状态管理策略选择","slug":"状态管理策略选择","link":"#状态管理策略选择","children":[{"level":3,"title":"方案对比","slug":"方案对比","link":"#方案对比","children":[]},{"level":3,"title":"混合策略","slug":"混合策略","link":"#混合策略","children":[]}]},{"level":2,"title":"状态调试与工具","slug":"状态调试与工具","link":"#状态调试与工具","children":[{"level":3,"title":"开发工具","slug":"开发工具","link":"#开发工具","children":[]},{"level":3,"title":"不可变更新模式","slug":"不可变更新模式","link":"#不可变更新模式","children":[]}]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[{"level":3,"title":"状态规范化","slug":"状态规范化","link":"#状态规范化","children":[]},{"level":3,"title":"副作用管理","slug":"副作用管理","link":"#副作用管理","children":[]}]}],"relativePath":"framework/angular/status.md","filePath":"framework/angular/status.md"}'),e={name:"framework/angular/status.md"};function i(c,s,t,o,r,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/angular/status.md for this page in Markdown format</div><h1 id="angular-状态管理" tabindex="-1">Angular 状态管理 <a class="header-anchor" href="#angular-状态管理" aria-label="Permalink to &quot;Angular 状态管理&quot;">​</a></h1><h2 id="状态管理概念" tabindex="-1">状态管理概念 <a class="header-anchor" href="#状态管理概念" aria-label="Permalink to &quot;状态管理概念&quot;">​</a></h2><p>状态管理是管理应用数据 (状态) 和状态变化的系统化方法，确保数据在组件之间保持一致性和可预测性。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>应用状态组成：</span></span>
<span class="line"><span>┌─────────────────┐</span></span>
<span class="line"><span>│   全局状态       │ ← 多个组件共享</span></span>
<span class="line"><span>│  - 用户信息      │</span></span>
<span class="line"><span>│  - 应用配置      │</span></span>
<span class="line"><span>│  - 缓存数据      │</span></span>
<span class="line"><span>└─────────────────┘</span></span>
<span class="line"><span>┌─────────────────┐</span></span>
<span class="line"><span>│   局部状态       │ ← 单个组件私有</span></span>
<span class="line"><span>│  - 表单数据      │</span></span>
<span class="line"><span>│  - UI状态        │</span></span>
<span class="line"><span>│  - 加载状态      │</span></span>
<span class="line"><span>└─────────────────┘</span></span></code></pre></div><h2 id="状态管理挑战" tabindex="-1">状态管理挑战 <a class="header-anchor" href="#状态管理挑战" aria-label="Permalink to &quot;状态管理挑战&quot;">​</a></h2><h3 id="组件通信问题" tabindex="-1">组件通信问题 <a class="header-anchor" href="#组件通信问题" aria-label="Permalink to &quot;组件通信问题&quot;">​</a></h3><p>在大型应用中，组件间状态共享变得复杂。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>状态传递困境：</span></span>
<span class="line"><span>    组件A (有状态)</span></span>
<span class="line"><span>       ↓ props</span></span>
<span class="line"><span>    组件B </span></span>
<span class="line"><span>       ↓ props  </span></span>
<span class="line"><span>    组件C (需要状态)</span></span>
<span class="line"><span>       ↑ props</span></span>
<span class="line"><span>    组件D (修改状态)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>问题：多层传递、难以维护、状态分散</span></span></code></pre></div><h3 id="状态分散问题" tabindex="-1">状态分散问题 <a class="header-anchor" href="#状态分散问题" aria-label="Permalink to &quot;状态分散问题&quot;">​</a></h3><p>状态逻辑分散在不同组件中，导致不一致性。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>状态分散：</span></span>
<span class="line"><span>┌─────────┐  ┌─────────┐  ┌─────────┐</span></span>
<span class="line"><span>│ 组件A    │  │ 组件B    │  │ 组件C    │</span></span>
<span class="line"><span>│ 状态副本  │  │ 状态副本  │  │ 状态副本  │</span></span>
<span class="line"><span>└─────────┘  └─────────┘  └─────────┘</span></span>
<span class="line"><span>    各自维护，可能不一致</span></span></code></pre></div><h2 id="服务状态管理" tabindex="-1">服务状态管理 <a class="header-anchor" href="#服务状态管理" aria-label="Permalink to &quot;服务状态管理&quot;">​</a></h2><h3 id="基础服务模式" tabindex="-1">基础服务模式 <a class="header-anchor" href="#基础服务模式" aria-label="Permalink to &quot;基础服务模式&quot;">​</a></h3><p>使用 Angular 服务作为单一数据源管理状态。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>服务状态中心：</span></span>
<span class="line"><span>        ┌─────────────┐</span></span>
<span class="line"><span>        │  状态服务    │ ← 单一数据源</span></span>
<span class="line"><span>        │  ┌─────────┐ │</span></span>
<span class="line"><span>        │  │ 状态对象  │ │</span></span>
<span class="line"><span>        │  └─────────┘ │</span></span>
<span class="line"><span>        └─────────────┘</span></span>
<span class="line"><span>           /    |    \\</span></span>
<span class="line"><span>          /     |     \\</span></span>
<span class="line"><span>┌─────────┐ ┌─────────┐ ┌─────────┐</span></span>
<span class="line"><span>│ 组件A    │ │ 组件B    │ │ 组件C    │</span></span>
<span class="line"><span>│ 读取状态 │ │ 更新状态 │ │ 监听变化 │</span></span>
<span class="line"><span>└─────────┘ └─────────┘ └─────────┘</span></span></code></pre></div><h3 id="可观察状态模式" tabindex="-1">可观察状态模式 <a class="header-anchor" href="#可观察状态模式" aria-label="Permalink to &quot;可观察状态模式&quot;">​</a></h3><p>使用 RxJS BehaviorSubject 实现响应式状态管理。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>响应式状态流：</span></span>
<span class="line"><span>状态服务 → BehaviorSubject → 组件订阅</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数据流：</span></span>
<span class="line"><span>状态更新 → next(value) → 订阅者接收新值</span></span></code></pre></div><p>实现示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Injectable</span><span style="color:#E1E4E8;">({ providedIn: </span><span style="color:#9ECBFF;">&#39;root&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> UserStateService</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  private</span><span style="color:#FFAB70;"> userSubject</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BehaviorSubject</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">User</span><span style="color:#F97583;"> |</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#FFAB70;"> user$</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.userSubject.</span><span style="color:#B392F0;">asObservable</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setUser</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">user</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> User</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.userSubject.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(user);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="rxjs-状态管理" tabindex="-1">RxJS 状态管理 <a class="header-anchor" href="#rxjs-状态管理" aria-label="Permalink to &quot;RxJS 状态管理&quot;">​</a></h2><h3 id="状态流模式" tabindex="-1">状态流模式 <a class="header-anchor" href="#状态流模式" aria-label="Permalink to &quot;状态流模式&quot;">​</a></h3><p>使用 RxJS 操作符管理复杂状态流。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>状态操作链：</span></span>
<span class="line"><span>数据源 → 转换 → 过滤 → 组合 → 状态输出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>userData$ → map(transform) → filter(activeOnly) → combineLatest(profile$) → 最终状态</span></span></code></pre></div><h3 id="状态组合" tabindex="-1">状态组合 <a class="header-anchor" href="#状态组合" aria-label="Permalink to &quot;状态组合&quot;">​</a></h3><p>组合多个状态流创建衍生状态。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>状态组合：</span></span>
<span class="line"><span>┌─────────┐   ┌─────────┐</span></span>
<span class="line"><span>│ 状态A$   │   │ 状态B$   │</span></span>
<span class="line"><span>└─────────┘   └─────────┘</span></span>
<span class="line"><span>       \\         /</span></span>
<span class="line"><span>        \\       /</span></span>
<span class="line"><span>      combineLatest</span></span>
<span class="line"><span>           |</span></span>
<span class="line"><span>           ↓</span></span>
<span class="line"><span>      ┌─────────┐</span></span>
<span class="line"><span>      │ 组合状态  │</span></span>
<span class="line"><span>      └─────────┘</span></span></code></pre></div><h2 id="ngrx-状态管理" tabindex="-1">NgRx 状态管理 <a class="header-anchor" href="#ngrx-状态管理" aria-label="Permalink to &quot;NgRx 状态管理&quot;">​</a></h2><h3 id="redux-模式" tabindex="-1">Redux 模式 <a class="header-anchor" href="#redux-模式" aria-label="Permalink to &quot;Redux 模式&quot;">​</a></h3><p>NgRx 实现 Redux 模式：单一数据源、状态只读、纯函数更新。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Redux 数据流：</span></span>
<span class="line"><span>     Action </span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>    Reducer (纯函数)</span></span>
<span class="line"><span>       ↓  </span></span>
<span class="line"><span>     Store (单一状态树)</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>    Selectors (状态选择)</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>    Components (组件)</span></span></code></pre></div><h3 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h3><p>NgRx 架构的核心组成部分。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>NgRx 结构：</span></span>
<span class="line"><span>┌─────────────────┐</span></span>
<span class="line"><span>│    Actions      │ ← 描述状态变化</span></span>
<span class="line"><span>│  - 类型         │</span></span>
<span class="line"><span>│  - 载荷         │</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│    Reducers     │ ← 纯函数处理状态</span></span>
<span class="line"><span>│  - 当前状态      │</span></span>
<span class="line"><span>│  - Action       │</span></span>
<span class="line"><span>│  - 新状态        │</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│    Store        │ ← 状态容器</span></span>
<span class="line"><span>│  - 状态树        │</span></span>
<span class="line"><span>│  - 派发Actions   │</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│   Selectors     │ ← 状态查询</span></span>
<span class="line"><span>│  - 状态派生      │</span></span>
<span class="line"><span>│  - 记忆化计算    │</span></span>
<span class="line"><span>└─────────────────┘</span></span></code></pre></div><h3 id="数据流详细流程" tabindex="-1">数据流详细流程 <a class="header-anchor" href="#数据流详细流程" aria-label="Permalink to &quot;数据流详细流程&quot;">​</a></h3><p>完整的 NgRx 状态更新周期。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>NgRx 数据流：</span></span>
<span class="line"><span>组件 → Action → Reducer → Store → Selector → 组件更新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>详细步骤：</span></span>
<span class="line"><span>1. 组件 dispatch(Action)</span></span>
<span class="line"><span>2. Action 触发 Reducer</span></span>
<span class="line"><span>3. Reducer 返回新状态</span></span>
<span class="line"><span>4. Store 更新状态</span></span>
<span class="line"><span>5. Selector 通知订阅者</span></span>
<span class="line"><span>6. 组件接收新状态</span></span></code></pre></div><h2 id="组件本地状态" tabindex="-1">组件本地状态 <a class="header-anchor" href="#组件本地状态" aria-label="Permalink to &quot;组件本地状态&quot;">​</a></h2><h3 id="本地状态管理" tabindex="-1">本地状态管理 <a class="header-anchor" href="#本地状态管理" aria-label="Permalink to &quot;本地状态管理&quot;">​</a></h3><p>使用组件内状态管理本地 UI 状态。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件内部状态：</span></span>
<span class="line"><span>┌─────────────────┐</span></span>
<span class="line"><span>│   组件类         │</span></span>
<span class="line"><span>│  ┌─────────────┐ │</span></span>
<span class="line"><span>│  │ 本地状态     │ │</span></span>
<span class="line"><span>│  │ - loading   │ │</span></span>
<span class="line"><span>│  │ - formData  │ │</span></span>
<span class="line"><span>│  │ - isOpen    │ │</span></span>
<span class="line"><span>│  └─────────────┘ │</span></span>
<span class="line"><span>└─────────────────┘</span></span></code></pre></div><h3 id="智能与展示组件" tabindex="-1">智能与展示组件 <a class="header-anchor" href="#智能与展示组件" aria-label="Permalink to &quot;智能与展示组件&quot;">​</a></h3><p>分离状态逻辑和 UI 展示的组件设计模式。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件分离：</span></span>
<span class="line"><span>┌─────────────────┐    @Input()    ┌─────────────────┐</span></span>
<span class="line"><span>│  智能组件        │ ─────────────&gt; │  展示组件        │</span></span>
<span class="line"><span>│  - 管理状态      │               │  - 纯UI展示      │</span></span>
<span class="line"><span>│  - 处理业务逻辑  │ &lt;───────────── │  - 无状态        │</span></span>
<span class="line"><span>│  - 数据获取      │   @Output()   │  - 事件发射      │</span></span>
<span class="line"><span>└─────────────────┘               └─────────────────┘</span></span></code></pre></div><h2 id="状态持久化" tabindex="-1">状态持久化 <a class="header-anchor" href="#状态持久化" aria-label="Permalink to &quot;状态持久化&quot;">​</a></h2><h3 id="本地存储集成" tabindex="-1">本地存储集成 <a class="header-anchor" href="#本地存储集成" aria-label="Permalink to &quot;本地存储集成&quot;">​</a></h3><p>将状态持久化到浏览器存储中。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>状态持久化：</span></span>
<span class="line"><span>应用状态 → 序列化 → localStorage → 反序列化 → 恢复状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>流程：</span></span>
<span class="line"><span>状态变化 → 自动保存 → 页面刷新 → 自动恢复</span></span></code></pre></div><h3 id="路由状态管理" tabindex="-1">路由状态管理 <a class="header-anchor" href="#路由状态管理" aria-label="Permalink to &quot;路由状态管理&quot;">​</a></h3><p>使用路由参数管理页面级状态。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>路由状态：</span></span>
<span class="line"><span>URL参数 → 路由解析 → 组件状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>/products?category=electronics&amp;page=2</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>组件读取路由参数初始化状态</span></span></code></pre></div><h2 id="状态管理策略选择" tabindex="-1">状态管理策略选择 <a class="header-anchor" href="#状态管理策略选择" aria-label="Permalink to &quot;状态管理策略选择&quot;">​</a></h2><h3 id="方案对比" tabindex="-1">方案对比 <a class="header-anchor" href="#方案对比" aria-label="Permalink to &quot;方案对比&quot;">​</a></h3><p>不同状态管理方案的适用场景。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>方案选择指南：</span></span>
<span class="line"><span>┌──────────────┬──────────────┬──────────────┐</span></span>
<span class="line"><span>│   方案        │ 适用场景      │ 复杂度        │</span></span>
<span class="line"><span>├──────────────┼──────────────┼──────────────┤</span></span>
<span class="line"><span>│ 服务 + Subject │ 中小型应用    │ 低           │</span></span>
<span class="line"><span>│ 服务 + RxJS   │ 中大型应用    │ 中           │</span></span>
<span class="line"><span>│ NgRx         │ 大型复杂应用  │ 高           │</span></span>
<span class="line"><span>└──────────────┴──────────────┴──────────────┘</span></span></code></pre></div><h3 id="混合策略" tabindex="-1">混合策略 <a class="header-anchor" href="#混合策略" aria-label="Permalink to &quot;混合策略&quot;">​</a></h3><p>根据应用不同部分使用不同的状态管理方式。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>混合策略：</span></span>
<span class="line"><span>        ┌─────────────┐</span></span>
<span class="line"><span>        │  全局状态    │ ← NgRx (复杂业务)</span></span>
<span class="line"><span>        └─────────────┘</span></span>
<span class="line"><span>        ┌─────────────┐</span></span>
<span class="line"><span>        │  功能状态    │ ← RxJS服务 (中等复杂度)</span></span>
<span class="line"><span>        └─────────────┘</span></span>
<span class="line"><span>        ┌─────────────┐</span></span>
<span class="line"><span>        │  UI状态      │ ← 组件本地状态 (简单)</span></span>
<span class="line"><span>        └─────────────┘</span></span></code></pre></div><h2 id="状态调试与工具" tabindex="-1">状态调试与工具 <a class="header-anchor" href="#状态调试与工具" aria-label="Permalink to &quot;状态调试与工具&quot;">​</a></h2><h3 id="开发工具" tabindex="-1">开发工具 <a class="header-anchor" href="#开发工具" aria-label="Permalink to &quot;开发工具&quot;">​</a></h3><p>使用 Redux DevTools 进行状态调试。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>调试流程：</span></span>
<span class="line"><span>状态变化 → 动作记录 → 时间旅行调试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>工具功能：</span></span>
<span class="line"><span>- 查看状态历史</span></span>
<span class="line"><span>- 重放动作</span></span>
<span class="line"><span>- 状态快照比较</span></span></code></pre></div><h3 id="不可变更新模式" tabindex="-1">不可变更新模式 <a class="header-anchor" href="#不可变更新模式" aria-label="Permalink to &quot;不可变更新模式&quot;">​</a></h3><p>使用不可变数据确保状态更新的可预测性。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>不可变更新：</span></span>
<span class="line"><span>原始状态 → 创建副本 → 修改副本 → 新状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确做法：</span></span>
<span class="line"><span>return { ...state, user: action.user }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>错误做法：</span></span>
<span class="line"><span>state.user = action.user // 直接修改</span></span>
<span class="line"><span>return state</span></span></code></pre></div><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><h3 id="状态规范化" tabindex="-1">状态规范化 <a class="header-anchor" href="#状态规范化" aria-label="Permalink to &quot;状态规范化&quot;">​</a></h3><p>规范化状态结构，避免数据冗余和嵌套。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>状态结构对比：</span></span>
<span class="line"><span>非规范化：               规范化：</span></span>
<span class="line"><span>{                      {</span></span>
<span class="line"><span>  posts: [               posts: { </span></span>
<span class="line"><span>    { id:1, user: {..}},   byId: { 1: {..}, 2: {..} },</span></span>
<span class="line"><span>    { id:2, user: {..}}    allIds: [1, 2]</span></span>
<span class="line"><span>  ]                     },</span></span>
<span class="line"><span>}                       users: { ... }</span></span></code></pre></div><h3 id="副作用管理" tabindex="-1">副作用管理 <a class="header-anchor" href="#副作用管理" aria-label="Permalink to &quot;副作用管理&quot;">​</a></h3><p>使用 Effects 或 RxJS 管理异步操作和副作用。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>副作用处理：</span></span>
<span class="line"><span>Action → Effect → 异步操作 → 新Action → Reducer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>LoadUsers → API调用 → LoadUsersSuccess → 更新状态</span></span></code></pre></div>`,93)])])}const b=a(e,[["render",i]]);export{h as __pageData,b as default};
